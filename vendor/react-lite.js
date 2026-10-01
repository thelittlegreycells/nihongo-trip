/*
 * Tiny React-compatible fallback used only when the CDN build of React cannot
 * be reached. It implements the small hook/API subset used by Nihongo Trip.
 * The application uses official React whenever it is available.
 */
(function (global) {
  'use strict';

  const Fragment = Symbol.for('nihongo-trip.fragment');
  const stateByComponent = new Map();
  const effectQueue = [];
  let currentComponent = '';
  let hookIndex = 0;
  let scheduleRender = function () {};

  function depsChanged(previous, next) {
    if (!previous || !next || previous.length !== next.length) return true;
    for (let i = 0; i < next.length; i += 1) {
      if (!Object.is(previous[i], next[i])) return true;
    }
    return false;
  }

  function hooksForCurrent() {
    if (!stateByComponent.has(currentComponent)) stateByComponent.set(currentComponent, []);
    return stateByComponent.get(currentComponent);
  }

  function createElement(type, props) {
    const children = [];
    for (let i = 2; i < arguments.length; i += 1) {
      const child = arguments[i];
      if (Array.isArray(child)) children.push.apply(children, child);
      else children.push(child);
    }
    return { type, props: Object.assign({}, props || {}, { children }) };
  }

  function useState(initial) {
    const hooks = hooksForCurrent();
    const index = hookIndex++;
    if (!(index in hooks)) hooks[index] = typeof initial === 'function' ? initial() : initial;
    const componentKey = currentComponent;
    const setter = function (value) {
      const target = stateByComponent.get(componentKey);
      const previous = target[index];
      target[index] = typeof value === 'function' ? value(previous) : value;
      scheduleRender();
    };
    return [hooks[index], setter];
  }

  function useRef(initial) {
    const hooks = hooksForCurrent();
    const index = hookIndex++;
    if (!(index in hooks)) hooks[index] = { current: initial };
    return hooks[index];
  }

  function useMemo(factory, deps) {
    const hooks = hooksForCurrent();
    const index = hookIndex++;
    const old = hooks[index];
    if (!old || depsChanged(old.deps, deps)) hooks[index] = { value: factory(), deps };
    return hooks[index].value;
  }

  function useCallback(callback, deps) {
    return useMemo(function () { return callback; }, deps);
  }

  function useEffect(effect, deps) {
    const hooks = hooksForCurrent();
    const index = hookIndex++;
    const old = hooks[index];
    if (!old || depsChanged(old.deps, deps)) {
      const componentKey = currentComponent;
      effectQueue.push(function () {
        const target = stateByComponent.get(componentKey);
        const existing = target && target[index];
        if (existing && typeof existing.cleanup === 'function') existing.cleanup();
        const cleanup = effect() || null;
        if (target) target[index] = { deps, cleanup };
      });
    }
  }

  global.React = {
    createElement,
    Fragment,
    useState,
    useRef,
    useMemo,
    useCallback,
    useEffect,
    __lite: {
      enterComponent: function (key) {
        currentComponent = key;
        hookIndex = 0;
      },
      setScheduler: function (fn) { scheduleRender = fn; },
      flushEffects: function () {
        const pending = effectQueue.splice(0, effectQueue.length);
        pending.forEach(function (run) {
          try { run(); } catch (error) { console.error(error); }
        });
      }
    },
    version: '18.3.1-lite-fallback'
  };
})(window);
