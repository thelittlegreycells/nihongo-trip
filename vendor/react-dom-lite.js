/* Minimal DOM renderer for the local React-compatible fallback. */
(function (global) {
  'use strict';
  const React = global.React;
  const XLINK = 'http://www.w3.org/1999/xlink';
  const SVG = 'http://www.w3.org/2000/svg';
  let rootElement = null;
  let rootTree = null;
  let renderQueued = false;

  function append(parent, child) {
    if (child == null || child === false || child === true) return;
    parent.appendChild(child);
  }

  function setProperty(element, name, value) {
    if (name === 'children' || name === 'key') return;
    if (name === 'className') { element.setAttribute('class', value || ''); return; }
    if (name === 'htmlFor') { element.setAttribute('for', value || ''); return; }
    if (name === 'dangerouslySetInnerHTML') return;
    if (name === 'ref') { if (value && typeof value === 'object') value.current = element; return; }
    if (name === 'style' && value && typeof value === 'object') {
      Object.keys(value).forEach(function (key) {
        const styleValue = value[key];
        if (styleValue == null) return;
        if (key.startsWith('--')) element.style.setProperty(key, String(styleValue));
        else element.style[key] = typeof styleValue === 'number' && !['opacity','zIndex','fontWeight','lineHeight','flex','order'].includes(key) ? styleValue + 'px' : styleValue;
      });
      return;
    }
    if (/^on[A-Z]/.test(name) && typeof value === 'function') {
      const eventName = name.slice(2).toLowerCase();
      if (eventName === 'change' && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
        element.addEventListener('input', value);
        element.addEventListener('change', value);
      } else {
        element.addEventListener(eventName, value);
      }
      return;
    }
    if (name === 'xlinkHref') { element.setAttributeNS(XLINK, 'href', value); return; }
    if (value === false || value == null) return;
    if (name === 'value' || name === 'checked' || name === 'selected' || name === 'disabled') {
      try { element[name] = value; } catch (_) { element.setAttribute(name, String(value)); }
      return;
    }
    if (value === true) { element.setAttribute(name, ''); return; }
    element.setAttribute(name, String(value));
  }

  function renderNode(node, path, inSvg) {
    if (node == null || node === false || node === true) return document.createComment('');
    if (typeof node === 'string' || typeof node === 'number') return document.createTextNode(String(node));
    if (Array.isArray(node)) {
      const fragment = document.createDocumentFragment();
      node.forEach(function (item, index) { append(fragment, renderNode(item, path + '.' + index, inSvg)); });
      return fragment;
    }
    if (typeof node.type === 'function') {
      const name = node.type.displayName || node.type.name || 'Component';
      React.__lite.enterComponent(path + ':' + name);
      return renderNode(node.type(node.props || {}), path + '.0', inSvg);
    }
    if (node.type === React.Fragment) {
      return renderNode((node.props || {}).children || [], path + '.f', inSvg);
    }
    const tag = node.type;
    const isSvg = inSvg || tag === 'svg';
    const element = isSvg ? document.createElementNS(SVG, tag) : document.createElement(tag);
    const props = node.props || {};
    Object.keys(props).forEach(function (name) { setProperty(element, name, props[name]); });
    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html != null) {
      element.innerHTML = props.dangerouslySetInnerHTML.__html;
    } else {
      const children = props.children || [];
      children.forEach(function (child, index) { append(element, renderNode(child, path + '.' + index, isSvg)); });
    }
    return element;
  }

  function performRender() {
    if (!rootElement || !rootTree) return;
    renderQueued = false;
    const active = document.activeElement;
    const activeId = active && active.id;
    const selectionStart = active && typeof active.selectionStart === 'number' ? active.selectionStart : null;
    const selectionEnd = active && typeof active.selectionEnd === 'number' ? active.selectionEnd : null;
    const next = renderNode(rootTree, 'root', false);
    rootElement.replaceChildren(next);
    if (activeId) {
      const replacement = document.getElementById(activeId);
      if (replacement) {
        replacement.focus();
        if (selectionStart != null && replacement.setSelectionRange) {
          try { replacement.setSelectionRange(selectionStart, selectionEnd); } catch (_) {}
        }
      }
    }
    React.__lite.flushEffects();
  }

  function scheduleRender() {
    if (renderQueued) return;
    renderQueued = true;
    Promise.resolve().then(performRender);
  }

  React.__lite.setScheduler(scheduleRender);
  global.ReactDOM = {
    createRoot: function (element) {
      rootElement = element;
      return {
        render: function (tree) {
          rootTree = tree;
          performRender();
        }
      };
    }
  };
})(window);
