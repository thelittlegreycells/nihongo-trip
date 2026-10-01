const PHRASES = [
    {
        "id": "restaurant-excuse-me",
        "category": "restaurant",
        "subcategory": "Getting attention",
        "japanese": "すみません。",
        "kana": "すみません",
        "romaji": "Sumimasen.",
        "english": "Excuse me / Sorry.",
        "usageNote": "A versatile phrase for politely getting someone’s attention or apologizing.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "excuse",
            "getting attention",
            "restaurant",
            "sorry"
        ],
        "essential": true
    },
    {
        "id": "restaurant-one-person",
        "category": "restaurant",
        "subcategory": "Getting seated",
        "japanese": "一人です。",
        "kana": "ひとりです",
        "romaji": "Hitori desu.",
        "english": "A table for one.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "for",
            "getting seated",
            "one",
            "restaurant",
            "table"
        ],
        "essential": true
    },
    {
        "id": "restaurant-two-people",
        "category": "restaurant",
        "subcategory": "Getting seated",
        "japanese": "二人です。",
        "kana": "ふたりです",
        "romaji": "Futari desu.",
        "english": "A table for two.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "for",
            "getting seated",
            "restaurant",
            "table",
            "two"
        ],
        "essential": true
    },
    {
        "id": "restaurant-three-people",
        "category": "restaurant",
        "subcategory": "Getting seated",
        "japanese": "三人です。",
        "kana": "さんにんです",
        "romaji": "Sannin desu.",
        "english": "A table for three.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "for",
            "getting seated",
            "restaurant",
            "table",
            "three"
        ],
        "essential": false
    },
    {
        "id": "restaurant-four-people",
        "category": "restaurant",
        "subcategory": "Getting seated",
        "japanese": "四人です。",
        "kana": "よにんです",
        "romaji": "Yonin desu.",
        "english": "A table for four.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "for",
            "four",
            "getting seated",
            "restaurant",
            "table"
        ],
        "essential": false
    },
    {
        "id": "restaurant-have-reservation",
        "category": "restaurant",
        "subcategory": "Reservations",
        "japanese": "予約しています。",
        "kana": "よやくしています",
        "romaji": "Yoyaku shite imasu.",
        "english": "I have a reservation.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "have",
            "reservation",
            "reservations",
            "restaurant"
        ],
        "essential": true
    },
    {
        "id": "restaurant-no-reservation",
        "category": "restaurant",
        "subcategory": "Reservations",
        "japanese": "予約していません。",
        "kana": "よやくしていません",
        "romaji": "Yoyaku shite imasen.",
        "english": "I do not have a reservation.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "have",
            "not",
            "reservation",
            "reservations",
            "restaurant"
        ],
        "essential": false
    },
    {
        "id": "restaurant-name-reservation",
        "category": "restaurant",
        "subcategory": "Reservations",
        "japanese": "予約はチャンの名前です。",
        "kana": "よやくはチャンのなまえです",
        "romaji": "Yoyaku wa Chan no namae desu.",
        "english": "The reservation is under the name Chan.",
        "usageNote": "Replace “Chan” with the reservation name.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "chan",
            "name",
            "reservation",
            "reservations",
            "restaurant",
            "the",
            "under"
        ],
        "essential": false
    },
    {
        "id": "restaurant-change-reservation",
        "category": "restaurant",
        "subcategory": "Reservations",
        "japanese": "予約を変更したいです。",
        "kana": "よやくをへんこうしたいです",
        "romaji": "Yoyaku o henkō shitai desu.",
        "english": "I would like to change my reservation.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "change",
            "like",
            "reservation",
            "reservations",
            "restaurant",
            "would"
        ],
        "essential": false
    },
    {
        "id": "restaurant-cancel-reservation",
        "category": "restaurant",
        "subcategory": "Reservations",
        "japanese": "予約をキャンセルしたいです。",
        "kana": "よやくをキャンセルしたいです",
        "romaji": "Yoyaku o kyanseru shitai desu.",
        "english": "I would like to cancel my reservation.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "cancel",
            "like",
            "reservation",
            "reservations",
            "restaurant",
            "would"
        ],
        "essential": false
    },
    {
        "id": "restaurant-english-menu",
        "category": "restaurant",
        "subcategory": "Menus",
        "japanese": "英語のメニューはありますか。",
        "kana": "えいごのメニューはありますか",
        "romaji": "Eigo no menyū wa arimasu ka?",
        "english": "Do you have an English menu?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "english",
            "have",
            "menu",
            "menus",
            "restaurant",
            "you"
        ],
        "essential": true
    },
    {
        "id": "restaurant-photo-menu",
        "category": "restaurant",
        "subcategory": "Menus",
        "japanese": "写真付きのメニューはありますか。",
        "kana": "しゃしんつきのメニューはありますか",
        "romaji": "Shashin-tsuki no menyū wa arimasu ka?",
        "english": "Do you have a menu with pictures?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "have",
            "menu",
            "menus",
            "pictures",
            "restaurant",
            "with",
            "you"
        ],
        "essential": false
    },
    {
        "id": "restaurant-what-is-this",
        "category": "restaurant",
        "subcategory": "Menus",
        "japanese": "これは何ですか。",
        "kana": "これはなんですか",
        "romaji": "Kore wa nan desu ka?",
        "english": "What is this?",
        "usageNote": "Point to the menu item or dish while asking.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "menus",
            "restaurant",
            "this",
            "what"
        ],
        "essential": false
    },
    {
        "id": "restaurant-recommendation",
        "category": "restaurant",
        "subcategory": "Recommendations",
        "japanese": "おすすめは何ですか。",
        "kana": "おすすめはなんですか",
        "romaji": "Osusume wa nan desu ka?",
        "english": "What do you recommend?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "recommend",
            "recommendations",
            "restaurant",
            "what",
            "you"
        ],
        "essential": true
    },
    {
        "id": "restaurant-popular-dish",
        "category": "restaurant",
        "subcategory": "Recommendations",
        "japanese": "人気の料理はどれですか。",
        "kana": "にんきのりょうりはどれですか",
        "romaji": "Ninki no ryōri wa dore desu ka?",
        "english": "Which dish is popular?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "dish",
            "popular",
            "recommendations",
            "restaurant",
            "which"
        ],
        "essential": false
    },
    {
        "id": "restaurant-this-please",
        "category": "restaurant",
        "subcategory": "Ordering",
        "japanese": "これをお願いします。",
        "kana": "これをおねがいします",
        "romaji": "Kore o onegaishimasu.",
        "english": "This one, please.",
        "usageNote": "Point to the item while saying this. It is one of the most useful restaurant phrases.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "one",
            "ordering",
            "please",
            "restaurant",
            "this"
        ],
        "essential": true
    },
    {
        "id": "restaurant-one-more-same",
        "category": "restaurant",
        "subcategory": "Ordering",
        "japanese": "同じものをもう一つお願いします。",
        "kana": "おなじものをもうひとつおねがいします",
        "romaji": "Onaji mono o mō hitotsu onegaishimasu.",
        "english": "One more of the same, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "more",
            "one",
            "ordering",
            "please",
            "restaurant",
            "same",
            "the"
        ],
        "essential": false
    },
    {
        "id": "restaurant-water",
        "category": "restaurant",
        "subcategory": "Requests",
        "japanese": "お水をお願いします。",
        "kana": "おみずをおねがいします",
        "romaji": "Omizu o onegaishimasu.",
        "english": "Water, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "please",
            "requests",
            "restaurant",
            "water"
        ],
        "essential": true
    },
    {
        "id": "restaurant-chopsticks",
        "category": "restaurant",
        "subcategory": "Requests",
        "japanese": "お箸をお願いします。",
        "kana": "おはしをおねがいします",
        "romaji": "Ohashi o onegaishimasu.",
        "english": "Chopsticks, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "chopsticks",
            "please",
            "requests",
            "restaurant"
        ],
        "essential": false
    },
    {
        "id": "restaurant-spoon",
        "category": "restaurant",
        "subcategory": "Requests",
        "japanese": "スプーンをお願いします。",
        "kana": "スプーンをおねがいします",
        "romaji": "Supūn o onegaishimasu.",
        "english": "A spoon, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "please",
            "requests",
            "restaurant",
            "spoon"
        ],
        "essential": false
    },
    {
        "id": "restaurant-small-plates",
        "category": "restaurant",
        "subcategory": "Requests",
        "japanese": "取り皿をお願いします。",
        "kana": "とりざらをおねがいします",
        "romaji": "Torizara o onegaishimasu.",
        "english": "Small sharing plates, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "plates",
            "please",
            "requests",
            "restaurant",
            "sharing",
            "small"
        ],
        "essential": false
    },
    {
        "id": "restaurant-spicy",
        "category": "restaurant",
        "subcategory": "Menu questions",
        "japanese": "これは辛いですか。",
        "kana": "これはからいですか",
        "romaji": "Kore wa karai desu ka?",
        "english": "Is this spicy?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "menu questions",
            "restaurant",
            "spicy",
            "this"
        ],
        "essential": false
    },
    {
        "id": "restaurant-not-spicy",
        "category": "restaurant",
        "subcategory": "Requests",
        "japanese": "辛くしないでください。",
        "kana": "からくしないでください",
        "romaji": "Karaku shinaide kudasai.",
        "english": "Please make it not spicy.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "make",
            "not",
            "please",
            "requests",
            "restaurant",
            "spicy"
        ],
        "essential": false
    },
    {
        "id": "restaurant-no-meat",
        "category": "restaurant",
        "subcategory": "Dietary needs",
        "japanese": "肉は食べません。",
        "kana": "にくはたべません",
        "romaji": "Niku wa tabemasen.",
        "english": "I do not eat meat.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "dietary needs",
            "eat",
            "meat",
            "not",
            "restaurant"
        ],
        "essential": false
    },
    {
        "id": "restaurant-vegetarian",
        "category": "restaurant",
        "subcategory": "Dietary needs",
        "japanese": "ベジタリアン向けの料理はありますか。",
        "kana": "ベジタリアンむけのりょうりはありますか",
        "romaji": "Bejitarian-muke no ryōri wa arimasu ka?",
        "english": "Do you have vegetarian dishes?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "dietary needs",
            "dishes",
            "have",
            "restaurant",
            "vegetarian",
            "you"
        ],
        "essential": false
    },
    {
        "id": "restaurant-allergy",
        "category": "restaurant",
        "subcategory": "Allergies",
        "japanese": "アレルギーがあります。",
        "kana": "アレルギーがあります",
        "romaji": "Arerugī ga arimasu.",
        "english": "I have an allergy.",
        "usageNote": "State this first, then show or say the specific allergen. For a severe allergy, carry a professionally translated allergy card.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "allergies",
            "allergy",
            "have",
            "restaurant"
        ],
        "essential": true
    },
    {
        "id": "restaurant-peanuts",
        "category": "restaurant",
        "subcategory": "Allergies",
        "japanese": "ピーナッツが入っていますか。",
        "kana": "ピーナッツがはいっていますか",
        "romaji": "Pīnattsu ga haitte imasu ka?",
        "english": "Does this contain peanuts?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "allergies",
            "contain",
            "does",
            "peanuts",
            "restaurant",
            "this"
        ],
        "essential": true
    },
    {
        "id": "restaurant-eggs",
        "category": "restaurant",
        "subcategory": "Allergies",
        "japanese": "卵が入っていますか。",
        "kana": "たまごがはいっていますか",
        "romaji": "Tamago ga haitte imasu ka?",
        "english": "Does this contain eggs?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "allergies",
            "contain",
            "does",
            "eggs",
            "restaurant",
            "this"
        ],
        "essential": false
    },
    {
        "id": "restaurant-dairy",
        "category": "restaurant",
        "subcategory": "Allergies",
        "japanese": "乳製品が入っていますか。",
        "kana": "にゅうせいひんがはいっていますか",
        "romaji": "Nyūseihin ga haitte imasu ka?",
        "english": "Does this contain dairy?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "allergies",
            "contain",
            "dairy",
            "does",
            "restaurant",
            "this"
        ],
        "essential": false
    },
    {
        "id": "restaurant-wheat",
        "category": "restaurant",
        "subcategory": "Allergies",
        "japanese": "小麦が入っていますか。",
        "kana": "こむぎがはいっていますか",
        "romaji": "Komugi ga haitte imasu ka?",
        "english": "Does this contain wheat?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "allergies",
            "contain",
            "does",
            "restaurant",
            "this",
            "wheat"
        ],
        "essential": false
    },
    {
        "id": "restaurant-shellfish",
        "category": "restaurant",
        "subcategory": "Allergies",
        "japanese": "甲殻類が入っていますか。",
        "kana": "こうかくるいがはいっていますか",
        "romaji": "Kōkakurui ga haitte imasu ka?",
        "english": "Does this contain crustacean shellfish?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "allergies",
            "contain",
            "crustacean",
            "does",
            "restaurant",
            "shellfish",
            "this"
        ],
        "essential": false
    },
    {
        "id": "restaurant-bill",
        "category": "restaurant",
        "subcategory": "Paying",
        "japanese": "お会計をお願いします。",
        "kana": "おかいけいをおねがいします",
        "romaji": "Okaikei o onegaishimasu.",
        "english": "The bill, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "bill",
            "paying",
            "please",
            "restaurant",
            "the"
        ],
        "essential": true
    },
    {
        "id": "restaurant-separate-checks",
        "category": "restaurant",
        "subcategory": "Paying",
        "japanese": "別々に会計できますか。",
        "kana": "べつべつにかいけいできますか",
        "romaji": "Betsubetsu ni kaikei dekimasu ka?",
        "english": "Can we pay separately?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "can",
            "pay",
            "paying",
            "restaurant",
            "separately"
        ],
        "essential": false
    },
    {
        "id": "restaurant-takeout",
        "category": "restaurant",
        "subcategory": "Takeout",
        "japanese": "持ち帰りできますか。",
        "kana": "もちかえりできますか",
        "romaji": "Mochikaeri dekimasu ka?",
        "english": "Can I get this to go?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "can",
            "get",
            "restaurant",
            "takeout",
            "this"
        ],
        "essential": false
    },
    {
        "id": "restaurant-delicious",
        "category": "restaurant",
        "subcategory": "Compliments",
        "japanese": "とてもおいしかったです。",
        "kana": "とてもおいしかったです",
        "romaji": "Totemo oishikatta desu.",
        "english": "It was very delicious.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "compliments",
            "delicious",
            "restaurant",
            "very",
            "was"
        ],
        "essential": false
    },
    {
        "id": "restaurant-thank-meal",
        "category": "restaurant",
        "subcategory": "Compliments",
        "japanese": "ごちそうさまでした。",
        "kana": "ごちそうさまでした",
        "romaji": "Gochisōsama deshita.",
        "english": "Thank you for the meal.",
        "usageNote": "A natural expression of appreciation when leaving after a meal.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "compliments",
            "for",
            "meal",
            "restaurant",
            "thank",
            "the",
            "you"
        ],
        "essential": true
    },
    {
        "id": "restaurant-last-order",
        "category": "restaurant",
        "subcategory": "Hours",
        "japanese": "ラストオーダーは何時ですか。",
        "kana": "ラストオーダーはなんじですか",
        "romaji": "Rasuto ōdā wa nanji desu ka?",
        "english": "What time is last order?",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "hours",
            "last",
            "order",
            "restaurant",
            "time",
            "what"
        ],
        "essential": false
    },
    {
        "id": "restaurant-nonsmoking",
        "category": "restaurant",
        "subcategory": "Getting seated",
        "japanese": "禁煙席をお願いします。",
        "kana": "きんえんせきをおねがいします",
        "romaji": "Kin’enseki o onegaishimasu.",
        "english": "A non-smoking seat, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "getting seated",
            "non",
            "please",
            "restaurant",
            "seat",
            "smoking"
        ],
        "essential": false
    },
    {
        "id": "restaurant-draft-beer",
        "category": "restaurant",
        "subcategory": "Izakaya",
        "japanese": "生ビールを一つお願いします。",
        "kana": "なまビールをひとつおねがいします",
        "romaji": "Nama bīru o hitotsu onegaishimasu.",
        "english": "One draft beer, please.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "beer",
            "draft",
            "izakaya",
            "one",
            "please",
            "restaurant"
        ],
        "essential": false
    },
    {
        "id": "restaurant-otoshi",
        "category": "restaurant",
        "subcategory": "Izakaya",
        "japanese": "このお通しは何ですか。",
        "kana": "このおとおしはなんですか",
        "romaji": "Kono otōshi wa nan desu ka?",
        "english": "What is this table appetizer?",
        "usageNote": "At many izakaya, a small appetizer called otōshi is served with a seating charge.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "appetizer",
            "izakaya",
            "restaurant",
            "table",
            "this",
            "what"
        ],
        "essential": false
    },
    {
        "id": "restaurant-not-ordered",
        "category": "restaurant",
        "subcategory": "Problems",
        "japanese": "これは注文していません。",
        "kana": "これはちゅうもんしていません",
        "romaji": "Kore wa chūmon shite imasen.",
        "english": "I did not order this.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "did",
            "not",
            "order",
            "problems",
            "restaurant",
            "this"
        ],
        "essential": false
    },
    {
        "id": "restaurant-food-not-arrived",
        "category": "restaurant",
        "subcategory": "Problems",
        "japanese": "注文した料理がまだ来ていません。",
        "kana": "ちゅうもんしたりょうりがまだきていません",
        "romaji": "Chūmon shita ryōri ga mada kite imasen.",
        "english": "The food I ordered has not arrived yet.",
        "usageNote": "Use this politely with restaurant or café staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "arrived",
            "food",
            "has",
            "not",
            "ordered",
            "problems",
            "restaurant",
            "the",
            "yet"
        ],
        "essential": false
    },
    {
        "id": "hear-how-many",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "何名様ですか。",
        "kana": "なんめいさまですか",
        "romaji": "Nanmei-sama desu ka?",
        "english": "How many people?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "how",
            "many",
            "people",
            "restaurant",
            "what you may hear"
        ],
        "essential": true,
        "replyIds": [
            "restaurant-one-person",
            "restaurant-two-people",
            "restaurant-three-people",
            "restaurant-four-people"
        ]
    },
    {
        "id": "hear-reservation",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "ご予約はありますか。",
        "kana": "ごよやくはありますか",
        "romaji": "Go-yoyaku wa arimasu ka?",
        "english": "Do you have a reservation?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "have",
            "reservation",
            "restaurant",
            "what you may hear",
            "you"
        ],
        "essential": false,
        "replyIds": [
            "restaurant-have-reservation",
            "restaurant-no-reservation"
        ]
    },
    {
        "id": "hear-order-ready",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "ご注文はお決まりですか。",
        "kana": "ごちゅうもんはおきまりですか",
        "romaji": "Go-chūmon wa okimari desu ka?",
        "english": "Are you ready to order?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "are",
            "order",
            "ready",
            "restaurant",
            "what you may hear",
            "you"
        ],
        "essential": false,
        "replyIds": [
            "restaurant-this-please"
        ]
    },
    {
        "id": "hear-eat-here",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "店内でお召し上がりですか。",
        "kana": "てんないでおめしあがりですか",
        "romaji": "Tennai de omeshiagari desu ka?",
        "english": "Will you eat here?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "eat",
            "here",
            "restaurant",
            "what you may hear",
            "will",
            "you"
        ],
        "essential": true,
        "replyIds": [
            "everyday-yes",
            "everyday-no"
        ]
    },
    {
        "id": "hear-takeout",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "お持ち帰りですか。",
        "kana": "おもちかえりですか",
        "romaji": "Omochikaeri desu ka?",
        "english": "Is it for takeout?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "for",
            "restaurant",
            "takeout",
            "what you may hear"
        ],
        "essential": false,
        "replyIds": [
            "everyday-yes",
            "everyday-no"
        ]
    },
    {
        "id": "hear-wait",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "少々お待ちください。",
        "kana": "しょうしょうおまちください",
        "romaji": "Shōshō omachi kudasai.",
        "english": "Please wait a moment.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "moment",
            "please",
            "restaurant",
            "wait",
            "what you may hear"
        ],
        "essential": true,
        "replyIds": [
            "everyday-understood"
        ]
    },
    {
        "id": "hear-last-order",
        "category": "restaurant",
        "subcategory": "What you may hear",
        "japanese": "ラストオーダーのお時間です。",
        "kana": "ラストオーダーのおじかんです",
        "romaji": "Rasuto ōdā no ojikan desu.",
        "english": "It is time for last orders.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "for",
            "last",
            "orders",
            "restaurant",
            "time",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "convenience-no-bag",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "袋は要りません。",
        "kana": "ふくろはいりません",
        "romaji": "Fukuro wa irimasen.",
        "english": "I do not need a bag.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "bag",
            "checkout",
            "convenience",
            "need",
            "not"
        ],
        "essential": true
    },
    {
        "id": "convenience-bag",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "袋をお願いします。",
        "kana": "ふくろをおねがいします",
        "romaji": "Fukuro o onegaishimasu.",
        "english": "A bag, please.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "bag",
            "checkout",
            "convenience",
            "please"
        ],
        "essential": false
    },
    {
        "id": "convenience-heat",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "温めてください。",
        "kana": "あたためてください",
        "romaji": "Atatamete kudasai.",
        "english": "Please heat it up.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "convenience",
            "heat",
            "please"
        ],
        "essential": true
    },
    {
        "id": "convenience-no-heat",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "温めなくて大丈夫です。",
        "kana": "あたためなくてだいじょうぶです",
        "romaji": "Atatamenakute daijōbu desu.",
        "english": "No need to heat it.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "convenience",
            "heat",
            "need"
        ],
        "essential": false
    },
    {
        "id": "convenience-chopsticks",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "お箸をお願いします。",
        "kana": "おはしをおねがいします",
        "romaji": "Ohashi o onegaishimasu.",
        "english": "Chopsticks, please.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "chopsticks",
            "convenience",
            "please"
        ],
        "essential": false
    },
    {
        "id": "convenience-spoon",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "スプーンをお願いします。",
        "kana": "スプーンをおねがいします",
        "romaji": "Supūn o onegaishimasu.",
        "english": "A spoon, please.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "convenience",
            "please",
            "spoon"
        ],
        "essential": false
    },
    {
        "id": "convenience-straw",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "ストローをお願いします。",
        "kana": "ストローをおねがいします",
        "romaji": "Sutorō o onegaishimasu.",
        "english": "A straw, please.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "convenience",
            "please",
            "straw"
        ],
        "essential": false
    },
    {
        "id": "convenience-cash",
        "category": "convenience",
        "subcategory": "Payment",
        "japanese": "現金で払います。",
        "kana": "げんきんではらいます",
        "romaji": "Genkin de haraimasu.",
        "english": "I will pay in cash.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "cash",
            "convenience",
            "pay",
            "payment",
            "will"
        ],
        "essential": false
    },
    {
        "id": "convenience-card",
        "category": "convenience",
        "subcategory": "Payment",
        "japanese": "カードで払います。",
        "kana": "カードではらいます",
        "romaji": "Kādo de haraimasu.",
        "english": "I will pay by card.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "card",
            "convenience",
            "pay",
            "payment",
            "will"
        ],
        "essential": true
    },
    {
        "id": "convenience-ic",
        "category": "convenience",
        "subcategory": "Payment",
        "japanese": "交通系ICカードで払います。",
        "kana": "こうつうけいアイシーカードではらいます",
        "romaji": "Kōtsū-kei ai-shī kādo de haraimasu.",
        "english": "I will pay with a transit IC card.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "card",
            "convenience",
            "pay",
            "payment",
            "transit",
            "will",
            "with"
        ],
        "essential": false
    },
    {
        "id": "convenience-atm",
        "category": "convenience",
        "subcategory": "Services",
        "japanese": "ATMはどこですか。",
        "kana": "エーティーエムはどこですか",
        "romaji": "Ē-tī-emu wa doko desu ka?",
        "english": "Where is the ATM?",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "atm",
            "convenience",
            "services",
            "the",
            "where"
        ],
        "essential": false
    },
    {
        "id": "convenience-find-item",
        "category": "convenience",
        "subcategory": "Finding items",
        "japanese": "この商品はどこですか。",
        "kana": "このしょうひんはどこですか",
        "romaji": "Kono shōhin wa doko desu ka?",
        "english": "Where is this product?",
        "usageNote": "Show a picture or point to the product name when possible.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "convenience",
            "finding items",
            "product",
            "this",
            "where"
        ],
        "essential": false
    },
    {
        "id": "convenience-stamps",
        "category": "convenience",
        "subcategory": "Services",
        "japanese": "切手はありますか。",
        "kana": "きってはありますか",
        "romaji": "Kitte wa arimasu ka?",
        "english": "Do you sell stamps?",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "convenience",
            "sell",
            "services",
            "stamps",
            "you"
        ],
        "essential": false
    },
    {
        "id": "convenience-parcel",
        "category": "convenience",
        "subcategory": "Services",
        "japanese": "宅配便を送りたいです。",
        "kana": "たくはいびんをおくりたいです",
        "romaji": "Takuhai-bin o okuritai desu.",
        "english": "I would like to send a parcel.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "convenience",
            "like",
            "parcel",
            "send",
            "services",
            "would"
        ],
        "essential": false
    },
    {
        "id": "convenience-ticket",
        "category": "convenience",
        "subcategory": "Services",
        "japanese": "このチケットを発券したいです。",
        "kana": "このチケットをはっけんしたいです",
        "romaji": "Kono chiketto o hakken shitai desu.",
        "english": "I would like to print this ticket.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "convenience",
            "like",
            "print",
            "services",
            "this",
            "ticket",
            "would"
        ],
        "essential": false
    },
    {
        "id": "convenience-receipt",
        "category": "convenience",
        "subcategory": "Checkout",
        "japanese": "レシートをください。",
        "kana": "レシートをください",
        "romaji": "Reshīto o kudasai.",
        "english": "A receipt, please.",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "convenience",
            "please",
            "receipt"
        ],
        "essential": false
    },
    {
        "id": "convenience-restroom",
        "category": "convenience",
        "subcategory": "Facilities",
        "japanese": "トイレはありますか。",
        "kana": "トイレはありますか",
        "romaji": "Toire wa arimasu ka?",
        "english": "Is there a restroom?",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "convenience",
            "facilities",
            "restroom",
            "there"
        ],
        "essential": false
    },
    {
        "id": "convenience-copy",
        "category": "convenience",
        "subcategory": "Services",
        "japanese": "コピー機はどこですか。",
        "kana": "コピーきはどこですか",
        "romaji": "Kopī-ki wa doko desu ka?",
        "english": "Where is the copy machine?",
        "usageNote": "Useful at a convenience-store counter.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "convenience",
            "copy",
            "machine",
            "services",
            "the",
            "where"
        ],
        "essential": false
    },
    {
        "id": "hear-bag",
        "category": "convenience",
        "subcategory": "What you may hear",
        "japanese": "袋はご利用ですか。",
        "kana": "ふくろはごりようですか",
        "romaji": "Fukuro wa go-riyō desu ka?",
        "english": "Would you like a bag?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "bag",
            "convenience",
            "like",
            "what you may hear",
            "would",
            "you"
        ],
        "essential": true,
        "replyIds": [
            "convenience-bag",
            "convenience-no-bag"
        ]
    },
    {
        "id": "hear-heat",
        "category": "convenience",
        "subcategory": "What you may hear",
        "japanese": "温めますか。",
        "kana": "あたためますか",
        "romaji": "Atatamemasu ka?",
        "english": "Would you like this heated?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "convenience",
            "heated",
            "like",
            "this",
            "what you may hear",
            "would",
            "you"
        ],
        "essential": true,
        "replyIds": [
            "convenience-heat",
            "convenience-no-heat"
        ]
    },
    {
        "id": "hear-chopsticks",
        "category": "convenience",
        "subcategory": "What you may hear",
        "japanese": "お箸はお付けしますか。",
        "kana": "おはしはおつけしますか",
        "romaji": "Ohashi wa otsuke shimasu ka?",
        "english": "Would you like chopsticks?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "chopsticks",
            "convenience",
            "like",
            "what you may hear",
            "would",
            "you"
        ],
        "essential": false,
        "replyIds": [
            "convenience-chopsticks",
            "everyday-no-thanks"
        ]
    },
    {
        "id": "hear-point-card",
        "category": "convenience",
        "subcategory": "What you may hear",
        "japanese": "ポイントカードはお持ちですか。",
        "kana": "ポイントカードはおもちですか",
        "romaji": "Pointo kādo wa omochi desu ka?",
        "english": "Do you have a point card?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "card",
            "convenience",
            "have",
            "point",
            "what you may hear",
            "you"
        ],
        "essential": true,
        "replyIds": [
            "everyday-no"
        ]
    },
    {
        "id": "hear-payment-method",
        "category": "convenience",
        "subcategory": "What you may hear",
        "japanese": "お支払い方法は？",
        "kana": "おしはらいほうほうは",
        "romaji": "Oshiharai hōhō wa?",
        "english": "How would you like to pay?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "convenience",
            "how",
            "like",
            "pay",
            "what you may hear",
            "would",
            "you"
        ],
        "essential": true,
        "replyIds": [
            "convenience-cash",
            "convenience-card",
            "convenience-ic"
        ]
    },
    {
        "id": "hear-receipt",
        "category": "convenience",
        "subcategory": "What you may hear",
        "japanese": "レシートはご利用ですか。",
        "kana": "レシートはごりようですか",
        "romaji": "Reshīto wa go-riyō desu ka?",
        "english": "Would you like a receipt?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "convenience",
            "like",
            "receipt",
            "what you may hear",
            "would",
            "you"
        ],
        "essential": false,
        "replyIds": [
            "convenience-receipt",
            "everyday-no-thanks"
        ]
    },
    {
        "id": "shopping-price",
        "category": "shopping",
        "subcategory": "Price",
        "japanese": "これはいくらですか。",
        "kana": "これはいくらですか",
        "romaji": "Kore wa ikura desu ka?",
        "english": "How much is this?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "how",
            "much",
            "price",
            "shopping",
            "this"
        ],
        "essential": true
    },
    {
        "id": "shopping-another-size",
        "category": "shopping",
        "subcategory": "Size and fit",
        "japanese": "別のサイズはありますか。",
        "kana": "べつのサイズはありますか",
        "romaji": "Betsu no saizu wa arimasu ka?",
        "english": "Do you have another size?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "another",
            "have",
            "shopping",
            "size",
            "size and fit",
            "you"
        ],
        "essential": true
    },
    {
        "id": "shopping-size-small",
        "category": "shopping",
        "subcategory": "Size and fit",
        "japanese": "Sサイズはありますか。",
        "kana": "エスサイズはありますか",
        "romaji": "Esu saizu wa arimasu ka?",
        "english": "Do you have this in small?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "have",
            "shopping",
            "size and fit",
            "small",
            "this",
            "you"
        ],
        "essential": false
    },
    {
        "id": "shopping-another-color",
        "category": "shopping",
        "subcategory": "Color",
        "japanese": "別の色はありますか。",
        "kana": "べつのいろはありますか",
        "romaji": "Betsu no iro wa arimasu ka?",
        "english": "Do you have another color?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "another",
            "color",
            "have",
            "shopping",
            "you"
        ],
        "essential": false
    },
    {
        "id": "shopping-try-on",
        "category": "shopping",
        "subcategory": "Trying on",
        "japanese": "これを試着してもいいですか。",
        "kana": "これをしちゃくしてもいいですか",
        "romaji": "Kore o shichaku shite mo ii desu ka?",
        "english": "May I try this on?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "may",
            "shopping",
            "this",
            "try",
            "trying on"
        ],
        "essential": true
    },
    {
        "id": "shopping-fitting-room",
        "category": "shopping",
        "subcategory": "Trying on",
        "japanese": "試着室はどこですか。",
        "kana": "しちゃくしつはどこですか",
        "romaji": "Shichakushitsu wa doko desu ka?",
        "english": "Where is the fitting room?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "fitting",
            "room",
            "shopping",
            "the",
            "trying on",
            "where"
        ],
        "essential": false
    },
    {
        "id": "shopping-stock",
        "category": "shopping",
        "subcategory": "Availability",
        "japanese": "在庫はありますか。",
        "kana": "ざいこはありますか",
        "romaji": "Zaiko wa arimasu ka?",
        "english": "Is it in stock?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "availability",
            "shopping",
            "stock"
        ],
        "essential": false
    },
    {
        "id": "shopping-tax-free",
        "category": "shopping",
        "subcategory": "Tax-free",
        "japanese": "免税できますか。",
        "kana": "めんぜいできますか",
        "romaji": "Menzei dekimasu ka?",
        "english": "Is tax-free shopping available?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "available",
            "free",
            "shopping",
            "tax",
            "tax-free"
        ],
        "essential": true
    },
    {
        "id": "shopping-tax-counter",
        "category": "shopping",
        "subcategory": "Tax-free",
        "japanese": "免税カウンターはどこですか。",
        "kana": "めんぜいカウンターはどこですか",
        "romaji": "Menzei kauntā wa doko desu ka?",
        "english": "Where is the tax-free counter?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "counter",
            "free",
            "shopping",
            "tax",
            "tax-free",
            "the",
            "where"
        ],
        "essential": false
    },
    {
        "id": "shopping-card",
        "category": "shopping",
        "subcategory": "Payment",
        "japanese": "クレジットカードは使えますか。",
        "kana": "クレジットカードはつかえますか",
        "romaji": "Kurejitto kādo wa tsukaemasu ka?",
        "english": "Can I use a credit card?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "can",
            "card",
            "credit",
            "payment",
            "shopping",
            "use"
        ],
        "essential": true
    },
    {
        "id": "shopping-cash-only",
        "category": "shopping",
        "subcategory": "Payment",
        "japanese": "現金だけですか。",
        "kana": "げんきんだけですか",
        "romaji": "Genkin dake desu ka?",
        "english": "Is it cash only?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "cash",
            "only",
            "payment",
            "shopping"
        ],
        "essential": false
    },
    {
        "id": "shopping-gift-wrap",
        "category": "shopping",
        "subcategory": "Gifts",
        "japanese": "プレゼント用に包んでください。",
        "kana": "プレゼントようにつつんでください",
        "romaji": "Purezento-yō ni tsutsunde kudasai.",
        "english": "Please gift-wrap this.",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "gift",
            "gifts",
            "please",
            "shopping",
            "this",
            "wrap"
        ],
        "essential": false
    },
    {
        "id": "shopping-return",
        "category": "shopping",
        "subcategory": "Returns",
        "japanese": "返品できますか。",
        "kana": "へんぴんできますか",
        "romaji": "Henpin dekimasu ka?",
        "english": "Can I return this?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "can",
            "return",
            "returns",
            "shopping",
            "this"
        ],
        "essential": false
    },
    {
        "id": "shopping-exchange",
        "category": "shopping",
        "subcategory": "Returns",
        "japanese": "交換できますか。",
        "kana": "こうかんできますか",
        "romaji": "Kōkan dekimasu ka?",
        "english": "Can I exchange this?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "can",
            "exchange",
            "returns",
            "shopping",
            "this"
        ],
        "essential": false
    },
    {
        "id": "shopping-looking-for",
        "category": "shopping",
        "subcategory": "Getting help",
        "japanese": "これを探しています。",
        "kana": "これをさがしています",
        "romaji": "Kore o sagashite imasu.",
        "english": "I am looking for this.",
        "usageNote": "Show a photo or product name while saying this.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "for",
            "getting help",
            "looking",
            "shopping",
            "this"
        ],
        "essential": false
    },
    {
        "id": "shopping-just-looking",
        "category": "shopping",
        "subcategory": "Getting help",
        "japanese": "見ているだけです。",
        "kana": "みているだけです",
        "romaji": "Mite iru dake desu.",
        "english": "I am just looking.",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "getting help",
            "just",
            "looking",
            "shopping"
        ],
        "essential": false
    },
    {
        "id": "shopping-call-staff",
        "category": "shopping",
        "subcategory": "Getting help",
        "japanese": "店員さんを呼んでください。",
        "kana": "てんいんさんをよんでください",
        "romaji": "Ten’in-san o yonde kudasai.",
        "english": "Please call a staff member.",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "call",
            "getting help",
            "member",
            "please",
            "shopping",
            "staff"
        ],
        "essential": false
    },
    {
        "id": "shopping-cheaper",
        "category": "shopping",
        "subcategory": "Price",
        "japanese": "もう少し安いものはありますか。",
        "kana": "もうすこしやすいものはありますか",
        "romaji": "Mō sukoshi yasui mono wa arimasu ka?",
        "english": "Do you have something a little cheaper?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "cheaper",
            "have",
            "little",
            "price",
            "shopping",
            "something",
            "you"
        ],
        "essential": false
    },
    {
        "id": "shopping-three",
        "category": "shopping",
        "subcategory": "Quantity",
        "japanese": "これを三つください。",
        "kana": "これをみっつください",
        "romaji": "Kore o mittsu kudasai.",
        "english": "Three of these, please.",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "please",
            "quantity",
            "shopping",
            "these",
            "three"
        ],
        "essential": false
    },
    {
        "id": "shopping-does-not-fit",
        "category": "shopping",
        "subcategory": "Size and fit",
        "japanese": "サイズが合いません。",
        "kana": "サイズがあいません",
        "romaji": "Saizu ga aimasen.",
        "english": "The size does not fit.",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "does",
            "fit",
            "not",
            "shopping",
            "size",
            "size and fit",
            "the"
        ],
        "essential": false
    },
    {
        "id": "shopping-made-japan",
        "category": "shopping",
        "subcategory": "Product details",
        "japanese": "これは日本製ですか。",
        "kana": "これはにほんせいですか",
        "romaji": "Kore wa Nihon-sei desu ka?",
        "english": "Is this made in Japan?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "japan",
            "made",
            "product details",
            "shopping",
            "this"
        ],
        "essential": false
    },
    {
        "id": "shopping-close-time",
        "category": "shopping",
        "subcategory": "Hours",
        "japanese": "何時まで営業していますか。",
        "kana": "なんじまでえいぎょうしていますか",
        "romaji": "Nanji made eigyō shite imasu ka?",
        "english": "What time are you open until?",
        "usageNote": "Use this with shop staff; pointing can help.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "are",
            "hours",
            "open",
            "shopping",
            "time",
            "until",
            "what",
            "you"
        ],
        "essential": false
    },
    {
        "id": "hear-try-on",
        "category": "shopping",
        "subcategory": "What you may hear",
        "japanese": "ご試着なさいますか。",
        "kana": "ごしちゃくなさいますか",
        "romaji": "Go-shichaku nasaimasu ka?",
        "english": "Would you like to try it on?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "like",
            "shopping",
            "try",
            "what you may hear",
            "would",
            "you"
        ],
        "essential": false,
        "replyIds": [
            "everyday-yes",
            "everyday-no"
        ]
    },
    {
        "id": "hear-this-okay",
        "category": "shopping",
        "subcategory": "What you may hear",
        "japanese": "こちらでよろしいですか。",
        "kana": "こちらでよろしいですか",
        "romaji": "Kochira de yoroshii desu ka?",
        "english": "Is this one all right?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "all",
            "one",
            "right",
            "shopping",
            "this",
            "what you may hear"
        ],
        "essential": false,
        "replyIds": [
            "everyday-yes",
            "everyday-no"
        ]
    },
    {
        "id": "hear-for-yourself",
        "category": "shopping",
        "subcategory": "What you may hear",
        "japanese": "ご自宅用ですか。",
        "kana": "ごじたくようですか",
        "romaji": "Go-jitaku-yō desu ka?",
        "english": "Is this for yourself?",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "for",
            "shopping",
            "this",
            "what you may hear",
            "yourself"
        ],
        "essential": false,
        "replyIds": [
            "everyday-yes",
            "shopping-gift-wrap"
        ]
    },
    {
        "id": "hear-passport-tax",
        "category": "shopping",
        "subcategory": "What you may hear",
        "japanese": "免税にはパスポートが必要です。",
        "kana": "めんぜいにはパスポートがひつようです",
        "romaji": "Menzei ni wa pasupōto ga hitsuyō desu.",
        "english": "A passport is required for tax-free shopping.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "for",
            "free",
            "passport",
            "required",
            "shopping",
            "tax",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "transport-go-kyoto",
        "category": "transport",
        "subcategory": "Trains",
        "japanese": "この電車は京都に行きますか。",
        "kana": "このでんしゃはきょうとにいきますか",
        "romaji": "Kono densha wa Kyōto ni ikimasu ka?",
        "english": "Does this train go to Kyoto?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "does",
            "kyoto",
            "this",
            "train",
            "trains",
            "transport"
        ],
        "essential": true
    },
    {
        "id": "transport-how-tokyo",
        "category": "transport",
        "subcategory": "Directions",
        "japanese": "東京駅にはどう行けばいいですか。",
        "kana": "とうきょうえきにはどういけばいいですか",
        "romaji": "Tōkyō-eki ni wa dō ikeba ii desu ka?",
        "english": "How do I get to Tokyo Station?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "directions",
            "get",
            "how",
            "station",
            "tokyo",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-platform",
        "category": "transport",
        "subcategory": "Platforms",
        "japanese": "何番線ですか。",
        "kana": "なんばんせんですか",
        "romaji": "Nan-bansen desu ka?",
        "english": "Which platform is it?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "platform",
            "platforms",
            "transport",
            "which"
        ],
        "essential": true
    },
    {
        "id": "transport-transfer",
        "category": "transport",
        "subcategory": "Transfers",
        "japanese": "乗り換えはどこですか。",
        "kana": "のりかえはどこですか",
        "romaji": "Norikae wa doko desu ka?",
        "english": "Where do I transfer?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "transfer",
            "transfers",
            "transport",
            "where"
        ],
        "essential": true
    },
    {
        "id": "transport-local",
        "category": "transport",
        "subcategory": "Train types",
        "japanese": "この電車は各駅停車ですか。",
        "kana": "このでんしゃはかくえきていしゃですか",
        "romaji": "Kono densha wa kakueki-teisha desu ka?",
        "english": "Is this a local train?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "local",
            "this",
            "train",
            "train types",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-rapid",
        "category": "transport",
        "subcategory": "Train types",
        "japanese": "この電車は快速ですか。",
        "kana": "このでんしゃはかいそくですか",
        "romaji": "Kono densha wa kaisoku desu ka?",
        "english": "Is this a rapid train?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "rapid",
            "this",
            "train",
            "train types",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-limited-express",
        "category": "transport",
        "subcategory": "Train types",
        "japanese": "この電車は特急ですか。",
        "kana": "このでんしゃはとっきゅうですか",
        "romaji": "Kono densha wa tokkyū desu ka?",
        "english": "Is this a limited express?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "express",
            "limited",
            "this",
            "train types",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-reserved",
        "category": "transport",
        "subcategory": "Seats",
        "japanese": "指定席はありますか。",
        "kana": "していせきはありますか",
        "romaji": "Shiteiseki wa arimasu ka?",
        "english": "Are reserved seats available?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "are",
            "available",
            "reserved",
            "seats",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-unreserved",
        "category": "transport",
        "subcategory": "Seats",
        "japanese": "自由席はどこですか。",
        "kana": "じゆうせきはどこですか",
        "romaji": "Jiyūseki wa doko desu ka?",
        "english": "Where are the unreserved seats?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "are",
            "seats",
            "the",
            "transport",
            "unreserved",
            "where"
        ],
        "essential": false
    },
    {
        "id": "transport-buy-ticket",
        "category": "transport",
        "subcategory": "Tickets",
        "japanese": "切符はどこで買えますか。",
        "kana": "きっぷはどこでかえますか",
        "romaji": "Kippu wa doko de kaemasu ka?",
        "english": "Where can I buy a ticket?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "buy",
            "can",
            "ticket",
            "tickets",
            "transport",
            "where"
        ],
        "essential": false
    },
    {
        "id": "transport-buy-ic",
        "category": "transport",
        "subcategory": "IC cards",
        "japanese": "ICカードはどこで買えますか。",
        "kana": "アイシーカードはどこでかえますか",
        "romaji": "Ai-shī kādo wa doko de kaemasu ka?",
        "english": "Where can I buy an IC card?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "buy",
            "can",
            "card",
            "ic cards",
            "transport",
            "where"
        ],
        "essential": false
    },
    {
        "id": "transport-charge-ic",
        "category": "transport",
        "subcategory": "IC cards",
        "japanese": "ICカードにチャージしたいです。",
        "kana": "アイシーカードにチャージしたいです",
        "romaji": "Ai-shī kādo ni chāji shitai desu.",
        "english": "I would like to add money to my IC card.",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "add",
            "card",
            "ic cards",
            "like",
            "money",
            "transport",
            "would"
        ],
        "essential": false
    },
    {
        "id": "transport-last-train",
        "category": "transport",
        "subcategory": "Schedules",
        "japanese": "終電は何時ですか。",
        "kana": "しゅうでんはなんじですか",
        "romaji": "Shūden wa nanji desu ka?",
        "english": "What time is the last train?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "last",
            "schedules",
            "the",
            "time",
            "train",
            "transport",
            "what"
        ],
        "essential": true
    },
    {
        "id": "transport-delay",
        "category": "transport",
        "subcategory": "Disruptions",
        "japanese": "電車が遅れていますか。",
        "kana": "でんしゃがおくれていますか",
        "romaji": "Densha ga okurete imasu ka?",
        "english": "Is the train delayed?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "delayed",
            "disruptions",
            "the",
            "train",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-cancelled",
        "category": "transport",
        "subcategory": "Disruptions",
        "japanese": "この電車は運休ですか。",
        "kana": "このでんしゃはうんきゅうですか",
        "romaji": "Kono densha wa unkyū desu ka?",
        "english": "Is this train cancelled?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "cancelled",
            "disruptions",
            "this",
            "train",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-next-train",
        "category": "transport",
        "subcategory": "Schedules",
        "japanese": "次の電車は何時ですか。",
        "kana": "つぎのでんしゃはなんじですか",
        "romaji": "Tsugi no densha wa nanji desu ka?",
        "english": "What time is the next train?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "next",
            "schedules",
            "the",
            "time",
            "train",
            "transport",
            "what"
        ],
        "essential": false
    },
    {
        "id": "transport-bus-airport",
        "category": "transport",
        "subcategory": "Buses",
        "japanese": "このバスは空港に行きますか。",
        "kana": "このバスはくうこうにいきますか",
        "romaji": "Kono basu wa kūkō ni ikimasu ka?",
        "english": "Does this bus go to the airport?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "airport",
            "bus",
            "buses",
            "does",
            "the",
            "this",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-bus-stop",
        "category": "transport",
        "subcategory": "Buses",
        "japanese": "バス停はどこですか。",
        "kana": "バスていはどこですか",
        "romaji": "Basu-tei wa doko desu ka?",
        "english": "Where is the bus stop?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "bus",
            "buses",
            "stop",
            "the",
            "transport",
            "where"
        ],
        "essential": false
    },
    {
        "id": "transport-get-off",
        "category": "transport",
        "subcategory": "Buses",
        "japanese": "ここで降ります。",
        "kana": "ここでおります",
        "romaji": "Koko de orimasu.",
        "english": "I am getting off here.",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "buses",
            "getting",
            "here",
            "off",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-address",
        "category": "transport",
        "subcategory": "Taxis",
        "japanese": "この住所までお願いします。",
        "kana": "このじゅうしょまでおねがいします",
        "romaji": "Kono jūsho made onegaishimasu.",
        "english": "Please take me to this address.",
        "usageNote": "Show the written address to the driver while saying this.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "address",
            "please",
            "take",
            "taxis",
            "this",
            "transport"
        ],
        "essential": true
    },
    {
        "id": "transport-here-taxi",
        "category": "transport",
        "subcategory": "Taxis",
        "japanese": "ここまでお願いします。",
        "kana": "ここまでおねがいします",
        "romaji": "Koko made onegaishimasu.",
        "english": "Please take me here.",
        "usageNote": "Show the destination on your phone or a map.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "here",
            "please",
            "take",
            "taxis",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-how-long",
        "category": "transport",
        "subcategory": "Taxis",
        "japanese": "どのくらい時間がかかりますか。",
        "kana": "どのくらいじかんがかかりますか",
        "romaji": "Dono kurai jikan ga kakarimasu ka?",
        "english": "How long will it take?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "how",
            "long",
            "take",
            "taxis",
            "transport",
            "will"
        ],
        "essential": false
    },
    {
        "id": "transport-fare",
        "category": "transport",
        "subcategory": "Taxis",
        "japanese": "料金はいくらですか。",
        "kana": "りょうきんはいくらですか",
        "romaji": "Ryōkin wa ikura desu ka?",
        "english": "How much is the fare?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "fare",
            "how",
            "much",
            "taxis",
            "the",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-trunk",
        "category": "transport",
        "subcategory": "Taxis",
        "japanese": "トランクに荷物を入れてもいいですか。",
        "kana": "トランクににもつをいれてもいいですか",
        "romaji": "Toranku ni nimotsu o irete mo ii desu ka?",
        "english": "May I put my luggage in the trunk?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "luggage",
            "may",
            "put",
            "taxis",
            "the",
            "transport",
            "trunk"
        ],
        "essential": false
    },
    {
        "id": "transport-locker",
        "category": "transport",
        "subcategory": "Luggage",
        "japanese": "コインロッカーはどこですか。",
        "kana": "コインロッカーはどこですか",
        "romaji": "Koin rokkā wa doko desu ka?",
        "english": "Where are the coin lockers?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "are",
            "coin",
            "lockers",
            "luggage",
            "the",
            "transport",
            "where"
        ],
        "essential": true
    },
    {
        "id": "transport-luggage-storage",
        "category": "transport",
        "subcategory": "Luggage",
        "japanese": "荷物を預けられますか。",
        "kana": "にもつをあずけられますか",
        "romaji": "Nimotsu o azukeraremasu ka?",
        "english": "Can I leave my luggage here?",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "can",
            "here",
            "leave",
            "luggage",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "transport-shinkansen-ticket",
        "category": "transport",
        "subcategory": "Tickets",
        "japanese": "新幹線の切符を買いたいです。",
        "kana": "しんかんせんのきっぷをかいたいです",
        "romaji": "Shinkansen no kippu o kaitai desu.",
        "english": "I would like to buy a Shinkansen ticket.",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "buy",
            "like",
            "shinkansen",
            "ticket",
            "tickets",
            "transport",
            "would"
        ],
        "essential": false
    },
    {
        "id": "transport-change-ticket",
        "category": "transport",
        "subcategory": "Tickets",
        "japanese": "予約を変更したいです。",
        "kana": "よやくをへんこうしたいです",
        "romaji": "Yoyaku o henkō shitai desu.",
        "english": "I would like to change my reservation.",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "change",
            "like",
            "reservation",
            "tickets",
            "transport",
            "would"
        ],
        "essential": false
    },
    {
        "id": "transport-delay-certificate",
        "category": "transport",
        "subcategory": "Disruptions",
        "japanese": "遅延証明書をください。",
        "kana": "ちえんしょうめいしょをください",
        "romaji": "Chien shōmeisho o kudasai.",
        "english": "Please give me a delay certificate.",
        "usageNote": "Use this at stations, on buses, or in a taxi.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "certificate",
            "delay",
            "disruptions",
            "give",
            "please",
            "transport"
        ],
        "essential": false
    },
    {
        "id": "hear-next-shinjuku",
        "category": "transport",
        "subcategory": "What you may hear",
        "japanese": "次は新宿です。",
        "kana": "つぎはしんじゅくです",
        "romaji": "Tsugi wa Shinjuku desu.",
        "english": "The next stop is Shinjuku.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "next",
            "shinjuku",
            "stop",
            "the",
            "transport",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "hear-out-of-service",
        "category": "transport",
        "subcategory": "What you may hear",
        "japanese": "この電車は回送です。",
        "kana": "このでんしゃはかいそうです",
        "romaji": "Kono densha wa kaisō desu.",
        "english": "This train is out of service.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "out",
            "service",
            "this",
            "train",
            "transport",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "hear-depart-soon",
        "category": "transport",
        "subcategory": "What you may hear",
        "japanese": "まもなく発車します。",
        "kana": "まもなくはっしゃします",
        "romaji": "Mamonaku hassha shimasu.",
        "english": "The train will depart shortly.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "depart",
            "shortly",
            "the",
            "train",
            "transport",
            "what you may hear",
            "will"
        ],
        "essential": false
    },
    {
        "id": "hear-watch-step",
        "category": "transport",
        "subcategory": "What you may hear",
        "japanese": "足元にご注意ください。",
        "kana": "あしもとにごちゅういください",
        "romaji": "Ashimoto ni go-chūi kudasai.",
        "english": "Please watch your step.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "please",
            "step",
            "transport",
            "watch",
            "what you may hear",
            "your"
        ],
        "essential": true
    },
    {
        "id": "hear-transfer",
        "category": "transport",
        "subcategory": "What you may hear",
        "japanese": "こちらでお乗り換えです。",
        "kana": "こちらでおのりかえです",
        "romaji": "Kochira de onorikae desu.",
        "english": "Transfer here.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "here",
            "transfer",
            "transport",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "hear-service-suspended",
        "category": "transport",
        "subcategory": "What you may hear",
        "japanese": "運転を見合わせています。",
        "kana": "うんてんをみあわせています",
        "romaji": "Unten o miawasete imasu.",
        "english": "Service is currently suspended.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "currently",
            "service",
            "suspended",
            "transport",
            "what you may hear"
        ],
        "essential": true
    },
    {
        "id": "hotel-check-in",
        "category": "hotel",
        "subcategory": "Check-in",
        "japanese": "チェックインをお願いします。",
        "kana": "チェックインをおねがいします",
        "romaji": "Chekku-in o onegaishimasu.",
        "english": "I would like to check in.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "check",
            "check-in",
            "hotel",
            "like",
            "would"
        ],
        "essential": true
    },
    {
        "id": "hotel-reservation-name",
        "category": "hotel",
        "subcategory": "Check-in",
        "japanese": "予約しています。名前はチャンです。",
        "kana": "よやくしています。なまえはチャンです",
        "romaji": "Yoyaku shite imasu. Namae wa Chan desu.",
        "english": "I have a reservation. The name is Chan.",
        "usageNote": "Replace “Chan” with the reservation name.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "chan",
            "check-in",
            "have",
            "hotel",
            "name",
            "reservation",
            "the"
        ],
        "essential": false
    },
    {
        "id": "hotel-passport",
        "category": "hotel",
        "subcategory": "Check-in",
        "japanese": "パスポートはこちらです。",
        "kana": "パスポートはこちらです",
        "romaji": "Pasupōto wa kochira desu.",
        "english": "Here is my passport.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "check-in",
            "here",
            "hotel",
            "passport"
        ],
        "essential": false
    },
    {
        "id": "hotel-luggage",
        "category": "hotel",
        "subcategory": "Luggage",
        "japanese": "荷物を預かってもらえますか。",
        "kana": "にもつをあずかってもらえますか",
        "romaji": "Nimotsu o azukatte moraemasu ka?",
        "english": "Could you store my luggage?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "could",
            "hotel",
            "luggage",
            "store",
            "you"
        ],
        "essential": true
    },
    {
        "id": "hotel-luggage-before",
        "category": "hotel",
        "subcategory": "Luggage",
        "japanese": "チェックイン前に荷物を預けられますか。",
        "kana": "チェックインまえににもつをあずけられますか",
        "romaji": "Chekku-in mae ni nimotsu o azukeraremasu ka?",
        "english": "Can I leave my luggage before check-in?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "before",
            "can",
            "check",
            "hotel",
            "leave",
            "luggage"
        ],
        "essential": false
    },
    {
        "id": "hotel-luggage-after",
        "category": "hotel",
        "subcategory": "Luggage",
        "japanese": "チェックアウト後に荷物を預けられますか。",
        "kana": "チェックアウトごににもつをあずけられますか",
        "romaji": "Chekku-auto go ni nimotsu o azukeraremasu ka?",
        "english": "Can I leave my luggage after checkout?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "after",
            "can",
            "checkout",
            "hotel",
            "leave",
            "luggage"
        ],
        "essential": false
    },
    {
        "id": "hotel-breakfast",
        "category": "hotel",
        "subcategory": "Amenities",
        "japanese": "朝食は何時からですか。",
        "kana": "ちょうしょくはなんじからですか",
        "romaji": "Chōshoku wa nanji kara desu ka?",
        "english": "What time does breakfast start?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "amenities",
            "breakfast",
            "does",
            "hotel",
            "start",
            "time",
            "what"
        ],
        "essential": false
    },
    {
        "id": "hotel-wifi",
        "category": "hotel",
        "subcategory": "Amenities",
        "japanese": "Wi-Fiのパスワードは何ですか。",
        "kana": "ワイファイのパスワードはなんですか",
        "romaji": "Wai-fai no pasuwādo wa nan desu ka?",
        "english": "What is the Wi-Fi password?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "amenities",
            "hotel",
            "password",
            "the",
            "what"
        ],
        "essential": true
    },
    {
        "id": "hotel-towel",
        "category": "hotel",
        "subcategory": "Requests",
        "japanese": "タオルをもう一枚お願いします。",
        "kana": "タオルをもういちまいおねがいします",
        "romaji": "Taoru o mō ichimai onegaishimasu.",
        "english": "One more towel, please.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "hotel",
            "more",
            "one",
            "please",
            "requests",
            "towel"
        ],
        "essential": false
    },
    {
        "id": "hotel-room-problem",
        "category": "hotel",
        "subcategory": "Room problems",
        "japanese": "部屋に問題があります。",
        "kana": "へやにもんだいがあります",
        "romaji": "Heya ni mondai ga arimasu.",
        "english": "There is a problem with the room.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "hotel",
            "problem",
            "room",
            "room problems",
            "the",
            "there",
            "with"
        ],
        "essential": false
    },
    {
        "id": "hotel-ac",
        "category": "hotel",
        "subcategory": "Room problems",
        "japanese": "エアコンが動きません。",
        "kana": "エアコンがうごきません",
        "romaji": "Eakon ga ugokimasen.",
        "english": "The air conditioner is not working.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "air",
            "conditioner",
            "hotel",
            "not",
            "room problems",
            "the",
            "working"
        ],
        "essential": false
    },
    {
        "id": "hotel-hot-water",
        "category": "hotel",
        "subcategory": "Room problems",
        "japanese": "お湯が出ません。",
        "kana": "おゆがでません",
        "romaji": "Oyu ga demasen.",
        "english": "There is no hot water.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "hot",
            "hotel",
            "room problems",
            "there",
            "water"
        ],
        "essential": false
    },
    {
        "id": "hotel-change-room",
        "category": "hotel",
        "subcategory": "Room problems",
        "japanese": "部屋を変えてもらえますか。",
        "kana": "へやをかえてもらえますか",
        "romaji": "Heya o kaete moraemasu ka?",
        "english": "Could I change rooms?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "change",
            "could",
            "hotel",
            "room problems",
            "rooms"
        ],
        "essential": false
    },
    {
        "id": "hotel-checkout-time",
        "category": "hotel",
        "subcategory": "Checkout",
        "japanese": "チェックアウトは何時ですか。",
        "kana": "チェックアウトはなんじですか",
        "romaji": "Chekku-auto wa nanji desu ka?",
        "english": "What time is checkout?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "checkout",
            "hotel",
            "time",
            "what"
        ],
        "essential": true
    },
    {
        "id": "hotel-call-taxi",
        "category": "hotel",
        "subcategory": "Transportation",
        "japanese": "タクシーを呼んでもらえますか。",
        "kana": "タクシーをよんでもらえますか",
        "romaji": "Takushī o yonde moraemasu ka?",
        "english": "Could you call a taxi for me?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "call",
            "could",
            "for",
            "hotel",
            "taxi",
            "transportation",
            "you"
        ],
        "essential": false
    },
    {
        "id": "hotel-forward-luggage",
        "category": "hotel",
        "subcategory": "Luggage",
        "japanese": "荷物を次のホテルに送りたいです。",
        "kana": "にもつをつぎのホテルにおくりたいです",
        "romaji": "Nimotsu o tsugi no hoteru ni okuritai desu.",
        "english": "I would like to send my luggage to my next hotel.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "hotel",
            "like",
            "luggage",
            "next",
            "send",
            "would"
        ],
        "essential": false
    },
    {
        "id": "hotel-restaurant",
        "category": "hotel",
        "subcategory": "Recommendations",
        "japanese": "近くのおすすめのレストランはありますか。",
        "kana": "ちかくのおすすめのレストランはありますか",
        "romaji": "Chikaku no osusume no resutoran wa arimasu ka?",
        "english": "Is there a restaurant nearby that you recommend?",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "hotel",
            "nearby",
            "recommend",
            "recommendations",
            "restaurant",
            "that",
            "there",
            "you"
        ],
        "essential": false
    },
    {
        "id": "hotel-early-checkout",
        "category": "hotel",
        "subcategory": "Checkout",
        "japanese": "早朝にチェックアウトしたいです。",
        "kana": "そうちょうにチェックアウトしたいです",
        "romaji": "Sōchō ni chekku-auto shitai desu.",
        "english": "I would like to check out early in the morning.",
        "usageNote": "Use this at the front desk or with hotel staff.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "check",
            "checkout",
            "early",
            "hotel",
            "like",
            "morning",
            "out",
            "the",
            "would"
        ],
        "essential": false
    },
    {
        "id": "hear-breakfast-floor",
        "category": "hotel",
        "subcategory": "What you may hear",
        "japanese": "朝食会場は二階です。",
        "kana": "ちょうしょくかいじょうはにかいです",
        "romaji": "Chōshoku kaijō wa nikai desu.",
        "english": "The breakfast room is on the second floor.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "breakfast",
            "floor",
            "hotel",
            "room",
            "second",
            "the",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "hear-room-ready",
        "category": "hotel",
        "subcategory": "What you may hear",
        "japanese": "お部屋の準備ができています。",
        "kana": "おへやのじゅんびができています",
        "romaji": "Oheya no junbi ga dekite imasu.",
        "english": "Your room is ready.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "hotel",
            "ready",
            "room",
            "what you may hear",
            "your"
        ],
        "essential": false
    },
    {
        "id": "hear-pay-checkout",
        "category": "hotel",
        "subcategory": "What you may hear",
        "japanese": "チェックアウト時にお支払いください。",
        "kana": "チェックアウトじにおしはらいください",
        "romaji": "Chekku-auto-ji ni oshiharai kudasai.",
        "english": "Please pay at checkout.",
        "usageNote": "A common phrase you may hear. Open the card to see simple replies.",
        "politeness": "polite",
        "direction": "traveler-hears",
        "tags": [
            "checkout",
            "hotel",
            "pay",
            "please",
            "what you may hear"
        ],
        "essential": false
    },
    {
        "id": "everyday-good-morning",
        "category": "everyday",
        "subcategory": "Greetings",
        "japanese": "おはようございます。",
        "kana": "おはようございます",
        "romaji": "Ohayō gozaimasu.",
        "english": "Good morning.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "good",
            "greetings",
            "morning"
        ],
        "essential": true
    },
    {
        "id": "everyday-hello",
        "category": "everyday",
        "subcategory": "Greetings",
        "japanese": "こんにちは。",
        "kana": "こんにちは",
        "romaji": "Konnichiwa.",
        "english": "Hello.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "greetings",
            "hello"
        ],
        "essential": true
    },
    {
        "id": "everyday-good-evening",
        "category": "everyday",
        "subcategory": "Greetings",
        "japanese": "こんばんは。",
        "kana": "こんばんは",
        "romaji": "Konbanwa.",
        "english": "Good evening.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "evening",
            "everyday",
            "good",
            "greetings"
        ],
        "essential": false
    },
    {
        "id": "everyday-thank-you",
        "category": "everyday",
        "subcategory": "Politeness",
        "japanese": "ありがとうございます。",
        "kana": "ありがとうございます",
        "romaji": "Arigatō gozaimasu.",
        "english": "Thank you very much.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "much",
            "politeness",
            "thank",
            "very",
            "you"
        ],
        "essential": true
    },
    {
        "id": "everyday-youre-welcome",
        "category": "everyday",
        "subcategory": "Politeness",
        "japanese": "どういたしまして。",
        "kana": "どういたしまして",
        "romaji": "Dō itashimashite.",
        "english": "You are welcome.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "are",
            "everyday",
            "politeness",
            "welcome",
            "you"
        ],
        "essential": false
    },
    {
        "id": "everyday-sorry",
        "category": "everyday",
        "subcategory": "Politeness",
        "japanese": "すみません。",
        "kana": "すみません",
        "romaji": "Sumimasen.",
        "english": "Excuse me / I am sorry.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "excuse",
            "politeness",
            "sorry"
        ],
        "essential": true
    },
    {
        "id": "everyday-okay",
        "category": "everyday",
        "subcategory": "Simple replies",
        "japanese": "大丈夫です。",
        "kana": "だいじょうぶです",
        "romaji": "Daijōbu desu.",
        "english": "It is okay / No thank you.",
        "usageNote": "Depending on context, this can mean “I’m okay,” “That’s fine,” or a polite refusal.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "okay",
            "simple replies",
            "thank",
            "you"
        ],
        "essential": true
    },
    {
        "id": "everyday-yes",
        "category": "everyday",
        "subcategory": "Simple replies",
        "japanese": "はい。",
        "kana": "はい",
        "romaji": "Hai.",
        "english": "Yes.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "simple replies",
            "yes"
        ],
        "essential": true
    },
    {
        "id": "everyday-no",
        "category": "everyday",
        "subcategory": "Simple replies",
        "japanese": "いいえ。",
        "kana": "いいえ",
        "romaji": "Iie.",
        "english": "No.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "simple replies"
        ],
        "essential": true
    },
    {
        "id": "everyday-no-thanks",
        "category": "everyday",
        "subcategory": "Simple replies",
        "japanese": "結構です。",
        "kana": "けっこうです",
        "romaji": "Kekkō desu.",
        "english": "No, thank you.",
        "usageNote": "A polite way to decline an offered item or service.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "simple replies",
            "thank",
            "you"
        ],
        "essential": false
    },
    {
        "id": "everyday-english",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "英語を話せますか。",
        "kana": "えいごをはなせますか",
        "romaji": "Eigo o hanasemasu ka?",
        "english": "Do you speak English?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "english",
            "everyday",
            "speak",
            "you"
        ],
        "essential": true
    },
    {
        "id": "everyday-dont-understand",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "日本語がよく分かりません。",
        "kana": "にほんごがよくわかりません",
        "romaji": "Nihongo ga yoku wakarimasen.",
        "english": "I do not understand Japanese very well.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "everyday",
            "japanese",
            "not",
            "understand",
            "very",
            "well"
        ],
        "essential": true
    },
    {
        "id": "everyday-again",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "もう一度お願いします。",
        "kana": "もういちどおねがいします",
        "romaji": "Mō ichido onegaishimasu.",
        "english": "One more time, please.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "everyday",
            "more",
            "one",
            "please",
            "time"
        ],
        "essential": true
    },
    {
        "id": "everyday-slowly",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "ゆっくり話してください。",
        "kana": "ゆっくりはなしてください",
        "romaji": "Yukkuri hanashite kudasai.",
        "english": "Please speak slowly.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "everyday",
            "please",
            "slowly",
            "speak"
        ],
        "essential": true
    },
    {
        "id": "everyday-write",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "書いてもらえますか。",
        "kana": "かいてもらえますか",
        "romaji": "Kaite moraemasu ka?",
        "english": "Could you write it down?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "could",
            "down",
            "everyday",
            "write",
            "you"
        ],
        "essential": false
    },
    {
        "id": "everyday-read",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "これはどう読みますか。",
        "kana": "これはどうよみますか",
        "romaji": "Kore wa dō yomimasu ka?",
        "english": "How do you read this?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "everyday",
            "how",
            "read",
            "this",
            "you"
        ],
        "essential": false
    },
    {
        "id": "everyday-restroom",
        "category": "everyday",
        "subcategory": "Directions",
        "japanese": "トイレはどこですか。",
        "kana": "トイレはどこですか",
        "romaji": "Toire wa doko desu ka?",
        "english": "Where is the restroom?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "directions",
            "everyday",
            "restroom",
            "the",
            "where"
        ],
        "essential": true
    },
    {
        "id": "everyday-station",
        "category": "everyday",
        "subcategory": "Directions",
        "japanese": "駅はどちらですか。",
        "kana": "えきはどちらですか",
        "romaji": "Eki wa dochira desu ka?",
        "english": "Which way is the station?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "directions",
            "everyday",
            "station",
            "the",
            "way",
            "which"
        ],
        "essential": false
    },
    {
        "id": "everyday-directions",
        "category": "everyday",
        "subcategory": "Directions",
        "japanese": "ここへの行き方を教えてください。",
        "kana": "ここへのいきかたをおしえてください",
        "romaji": "Koko e no ikikata o oshiete kudasai.",
        "english": "Please tell me how to get here.",
        "usageNote": "Show the destination on a map while saying this.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "directions",
            "everyday",
            "get",
            "here",
            "how",
            "please",
            "tell"
        ],
        "essential": false
    },
    {
        "id": "everyday-photo-me",
        "category": "everyday",
        "subcategory": "Photos",
        "japanese": "写真を撮ってもらえますか。",
        "kana": "しゃしんをとってもらえますか",
        "romaji": "Shashin o totte moraemasu ka?",
        "english": "Could you take a photo for me?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "could",
            "everyday",
            "for",
            "photo",
            "photos",
            "take",
            "you"
        ],
        "essential": false
    },
    {
        "id": "everyday-photo-allowed",
        "category": "everyday",
        "subcategory": "Photos",
        "japanese": "写真を撮ってもいいですか。",
        "kana": "しゃしんをとってもいいですか",
        "romaji": "Shashin o totte mo ii desu ka?",
        "english": "May I take a photo?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "may",
            "photo",
            "photos",
            "take"
        ],
        "essential": false
    },
    {
        "id": "everyday-open",
        "category": "everyday",
        "subcategory": "Hours",
        "japanese": "何時に開きますか。",
        "kana": "なんじにあきますか",
        "romaji": "Nanji ni akimasu ka?",
        "english": "What time does it open?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "does",
            "everyday",
            "hours",
            "open",
            "time",
            "what"
        ],
        "essential": false
    },
    {
        "id": "everyday-close",
        "category": "everyday",
        "subcategory": "Hours",
        "japanese": "何時に閉まりますか。",
        "kana": "なんじにしまりますか",
        "romaji": "Nanji ni shimarimasu ka?",
        "english": "What time does it close?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "close",
            "does",
            "everyday",
            "hours",
            "time",
            "what"
        ],
        "essential": false
    },
    {
        "id": "everyday-two-tickets",
        "category": "everyday",
        "subcategory": "Tickets",
        "japanese": "入場券を二枚ください。",
        "kana": "にゅうじょうけんをにまいください",
        "romaji": "Nyūjōken o nimai kudasai.",
        "english": "Two admission tickets, please.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "admission",
            "everyday",
            "please",
            "tickets",
            "two"
        ],
        "essential": false
    },
    {
        "id": "everyday-sit",
        "category": "everyday",
        "subcategory": "Permission",
        "japanese": "ここに座ってもいいですか。",
        "kana": "ここにすわってもいいですか",
        "romaji": "Koko ni suwatte mo ii desu ka?",
        "english": "May I sit here?",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "here",
            "may",
            "permission",
            "sit"
        ],
        "essential": false
    },
    {
        "id": "everyday-lost",
        "category": "everyday",
        "subcategory": "Directions",
        "japanese": "道に迷いました。",
        "kana": "みちにまよいました",
        "romaji": "Michi ni mayoimashita.",
        "english": "I am lost.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "directions",
            "everyday",
            "lost"
        ],
        "essential": true
    },
    {
        "id": "everyday-wait",
        "category": "everyday",
        "subcategory": "Communication",
        "japanese": "ちょっと待ってください。",
        "kana": "ちょっとまってください",
        "romaji": "Chotto matte kudasai.",
        "english": "Please wait a moment.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "communication",
            "everyday",
            "moment",
            "please",
            "wait"
        ],
        "essential": false
    },
    {
        "id": "everyday-understood",
        "category": "everyday",
        "subcategory": "Simple replies",
        "japanese": "分かりました。",
        "kana": "わかりました",
        "romaji": "Wakarimashita.",
        "english": "I understand.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "simple replies",
            "understand"
        ],
        "essential": true
    },
    {
        "id": "everyday-dont-know",
        "category": "everyday",
        "subcategory": "Simple replies",
        "japanese": "分かりません。",
        "kana": "わかりません",
        "romaji": "Wakarimasen.",
        "english": "I do not understand / I do not know.",
        "usageNote": "A useful expression for everyday travel in Japan.",
        "politeness": "polite",
        "direction": "traveler-says",
        "tags": [
            "everyday",
            "know",
            "not",
            "simple replies",
            "understand"
        ],
        "essential": true
    },
    {
        "id": "emergency-help",
        "category": "emergency",
        "subcategory": "Urgent help",
        "japanese": "助けてください。",
        "kana": "たすけてください",
        "romaji": "Tasukete kudasai.",
        "english": "Please help me.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "help",
            "please",
            "urgent help"
        ],
        "essential": true
    },
    {
        "id": "emergency-police",
        "category": "emergency",
        "subcategory": "Urgent help",
        "japanese": "警察を呼んでください。",
        "kana": "けいさつをよんでください",
        "romaji": "Keisatsu o yonde kudasai.",
        "english": "Please call the police.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "call",
            "emergency",
            "please",
            "police",
            "the",
            "urgent help"
        ],
        "essential": true
    },
    {
        "id": "emergency-ambulance",
        "category": "emergency",
        "subcategory": "Urgent help",
        "japanese": "救急車を呼んでください。",
        "kana": "きゅうきゅうしゃをよんでください",
        "romaji": "Kyūkyūsha o yonde kudasai.",
        "english": "Please call an ambulance.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "ambulance",
            "call",
            "emergency",
            "please",
            "urgent help"
        ],
        "essential": true
    },
    {
        "id": "emergency-hospital",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "病院はどこですか。",
        "kana": "びょういんはどこですか",
        "romaji": "Byōin wa doko desu ka?",
        "english": "Where is a hospital?",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "hospital",
            "medical",
            "where"
        ],
        "essential": true
    },
    {
        "id": "emergency-pharmacy",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "薬局はどこですか。",
        "kana": "やっきょくはどこですか",
        "romaji": "Yakkyoku wa doko desu ka?",
        "english": "Where is a pharmacy?",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "medical",
            "pharmacy",
            "where"
        ],
        "essential": true
    },
    {
        "id": "emergency-sick",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "気分が悪いです。",
        "kana": "きぶんがわるいです",
        "romaji": "Kibun ga warui desu.",
        "english": "I feel sick.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "feel",
            "medical",
            "sick"
        ],
        "essential": true
    },
    {
        "id": "emergency-pain",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "ここが痛いです。",
        "kana": "ここがいたいです",
        "romaji": "Koko ga itai desu.",
        "english": "It hurts here.",
        "usageNote": "Point to the painful area while saying this.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "here",
            "hurts",
            "medical"
        ],
        "essential": true
    },
    {
        "id": "emergency-fever",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "熱があります。",
        "kana": "ねつがあります",
        "romaji": "Netsu ga arimasu.",
        "english": "I have a fever.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "fever",
            "have",
            "medical"
        ],
        "essential": false
    },
    {
        "id": "emergency-breathing",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "息が苦しいです。",
        "kana": "いきがくるしいです",
        "romaji": "Iki ga kurushii desu.",
        "english": "I am having trouble breathing.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "breathing",
            "emergency",
            "having",
            "medical",
            "trouble"
        ],
        "essential": true
    },
    {
        "id": "emergency-allergic-reaction",
        "category": "emergency",
        "subcategory": "Allergy",
        "japanese": "アレルギー反応が出ています。",
        "kana": "アレルギーはんのうがでています",
        "romaji": "Arerugī hannō ga dete imasu.",
        "english": "I am having an allergic reaction.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "allergic",
            "allergy",
            "emergency",
            "having",
            "reaction"
        ],
        "essential": true
    },
    {
        "id": "emergency-wallet",
        "category": "emergency",
        "subcategory": "Lost items",
        "japanese": "財布をなくしました。",
        "kana": "さいふをなくしました",
        "romaji": "Saifu o nakushimashita.",
        "english": "I lost my wallet.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "lost",
            "lost items",
            "wallet"
        ],
        "essential": false
    },
    {
        "id": "emergency-phone",
        "category": "emergency",
        "subcategory": "Lost items",
        "japanese": "携帯電話をなくしました。",
        "kana": "けいたいでんわをなくしました",
        "romaji": "Keitai denwa o nakushimashita.",
        "english": "I lost my phone.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "lost",
            "lost items",
            "phone"
        ],
        "essential": false
    },
    {
        "id": "emergency-passport",
        "category": "emergency",
        "subcategory": "Lost items",
        "japanese": "パスポートをなくしました。",
        "kana": "パスポートをなくしました",
        "romaji": "Pasupōto o nakushimashita.",
        "english": "I lost my passport.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "lost",
            "lost items",
            "passport"
        ],
        "essential": true
    },
    {
        "id": "emergency-stolen-bag",
        "category": "emergency",
        "subcategory": "Theft",
        "japanese": "バッグを盗まれました。",
        "kana": "バッグをぬすまれました",
        "romaji": "Baggu o nusumaremashita.",
        "english": "My bag was stolen.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "bag",
            "emergency",
            "stolen",
            "theft",
            "was"
        ],
        "essential": true
    },
    {
        "id": "emergency-injured",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "けがをしました。",
        "kana": "けがをしました",
        "romaji": "Kega o shimashita.",
        "english": "I am injured.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "injured",
            "medical"
        ],
        "essential": false
    },
    {
        "id": "emergency-english-doctor",
        "category": "emergency",
        "subcategory": "Medical",
        "japanese": "英語を話せる医師はいますか。",
        "kana": "えいごをはなせるいしはいますか",
        "romaji": "Eigo o hanaseru ishi wa imasu ka?",
        "english": "Is there a doctor who speaks English?",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "doctor",
            "emergency",
            "english",
            "medical",
            "speaks",
            "there",
            "who"
        ],
        "essential": false
    },
    {
        "id": "emergency-contact-person",
        "category": "emergency",
        "subcategory": "Contact",
        "japanese": "この人に連絡してください。",
        "kana": "このひとにれんらくしてください",
        "romaji": "Kono hito ni renraku shite kudasai.",
        "english": "Please contact this person.",
        "usageNote": "Show the contact details on your phone or emergency card.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "contact",
            "emergency",
            "person",
            "please",
            "this"
        ],
        "essential": true
    },
    {
        "id": "emergency-contact-hotel",
        "category": "emergency",
        "subcategory": "Contact",
        "japanese": "私のホテルに連絡してください。",
        "kana": "わたしのホテルにれんらくしてください",
        "romaji": "Watashi no hoteru ni renraku shite kudasai.",
        "english": "Please contact my hotel.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "contact",
            "emergency",
            "hotel",
            "please"
        ],
        "essential": false
    },
    {
        "id": "emergency-diabetes",
        "category": "emergency",
        "subcategory": "Medical information",
        "japanese": "糖尿病です。",
        "kana": "とうにょうびょうです",
        "romaji": "Tōnyōbyō desu.",
        "english": "I have diabetes.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "diabetes",
            "emergency",
            "have",
            "medical information"
        ],
        "essential": false
    },
    {
        "id": "emergency-pregnant",
        "category": "emergency",
        "subcategory": "Medical information",
        "japanese": "妊娠しています。",
        "kana": "にんしんしています",
        "romaji": "Ninshin shite imasu.",
        "english": "I am pregnant.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "emergency",
            "medical information",
            "pregnant"
        ],
        "essential": false
    },
    {
        "id": "emergency-contact-here",
        "category": "emergency",
        "subcategory": "Contact",
        "japanese": "緊急連絡先はここです。",
        "kana": "きんきゅうれんらくさきはここです",
        "romaji": "Kinkyū renrakusaki wa koko desu.",
        "english": "My emergency contact is here.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "contact",
            "emergency",
            "here"
        ],
        "essential": false
    },
    {
        "id": "emergency-dont-know-address",
        "category": "emergency",
        "subcategory": "Directions",
        "japanese": "住所が分かりません。",
        "kana": "じゅうしょがわかりません",
        "romaji": "Jūsho ga wakarimasen.",
        "english": "I do not know the address.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "address",
            "directions",
            "emergency",
            "know",
            "not",
            "the"
        ],
        "essential": false
    },
    {
        "id": "emergency-danger",
        "category": "emergency",
        "subcategory": "Urgent help",
        "japanese": "危険です。",
        "kana": "きけんです",
        "romaji": "Kiken desu.",
        "english": "It is dangerous.",
        "usageNote": "Use this when urgent help or clear communication is needed.",
        "politeness": "emergency",
        "direction": "traveler-says",
        "tags": [
            "dangerous",
            "emergency",
            "urgent help"
        ],
        "essential": false
    }
];
const BREAKDOWNS = {
    "restaurant-excuse-me": [
        {
            "japanese": "すみません",
            "kana": "すみません",
            "romaji": "sumimasen",
            "meaning": "excuse me / sorry",
            "note": "Use it to get attention, apologize, or soften a request."
        }
    ],
    "restaurant-one-person": [
        {
            "japanese": "一人",
            "kana": "ひとり",
            "romaji": "hitori",
            "meaning": "one person"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-two-people": [
        {
            "japanese": "二人",
            "kana": "ふたり",
            "romaji": "futari",
            "meaning": "two people"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-three-people": [
        {
            "japanese": "三人",
            "kana": "さんにん",
            "romaji": "sannin",
            "meaning": "three people"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-four-people": [
        {
            "japanese": "四人",
            "kana": "よにん",
            "romaji": "yonin",
            "meaning": "four people"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-have-reservation": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "しています",
            "kana": "しています",
            "romaji": "shite imasu",
            "meaning": "have made / am holding",
            "note": "Literally “am doing”; here it expresses the current state of having a reservation."
        }
    ],
    "restaurant-no-reservation": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "していません",
            "kana": "していません",
            "romaji": "shite imasen",
            "meaning": "have not made / do not have",
            "note": "Polite negative of しています."
        }
    ],
    "restaurant-name-reservation": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "チャン",
            "kana": "チャン",
            "romaji": "Chan",
            "meaning": "Chan",
            "note": "Replace this with the reservation name."
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "名前",
            "kana": "なまえ",
            "romaji": "namae",
            "meaning": "name"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-change-reservation": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "変更したい",
            "kana": "へんこうしたい",
            "romaji": "henkō shitai",
            "meaning": "want to change",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-cancel-reservation": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "キャンセルしたい",
            "kana": "キャンセルしたい",
            "romaji": "kyanseru shitai",
            "meaning": "want to cancel",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-english-menu": [
        {
            "japanese": "英語",
            "kana": "えいご",
            "romaji": "eigo",
            "meaning": "English"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "メニュー",
            "kana": "メニュー",
            "romaji": "menyū",
            "meaning": "menu"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-photo-menu": [
        {
            "japanese": "写真付き",
            "kana": "しゃしんつき",
            "romaji": "shashin-tsuki",
            "meaning": "with pictures",
            "note": "付き means “with” or “included.”"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "メニュー",
            "kana": "メニュー",
            "romaji": "menyū",
            "meaning": "menu"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-what-is-this": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何",
            "kana": "なん",
            "romaji": "nan",
            "meaning": "what"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-recommendation": [
        {
            "japanese": "おすすめ",
            "kana": "おすすめ",
            "romaji": "osusume",
            "meaning": "recommendation / recommended item"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何",
            "kana": "なん",
            "romaji": "nan",
            "meaning": "what"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-popular-dish": [
        {
            "japanese": "人気",
            "kana": "にんき",
            "romaji": "ninki",
            "meaning": "popular / popularity"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "料理",
            "kana": "りょうり",
            "romaji": "ryōri",
            "meaning": "dish / cuisine"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どれ",
            "kana": "どれ",
            "romaji": "dore",
            "meaning": "which one"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-this-please": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-one-more-same": [
        {
            "japanese": "同じもの",
            "kana": "おなじもの",
            "romaji": "onaji mono",
            "meaning": "the same thing"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "もう",
            "kana": "もう",
            "romaji": "mō",
            "meaning": "another / more / already",
            "note": "Its meaning depends on context; here it usually means “another” or “more.”"
        },
        {
            "japanese": "一つ",
            "kana": "ひとつ",
            "romaji": "hitotsu",
            "meaning": "one item",
            "note": "A general counter for objects."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-water": [
        {
            "japanese": "お水",
            "kana": "おみず",
            "romaji": "omizu",
            "meaning": "water",
            "note": "The お prefix makes the word sound polite."
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-chopsticks": [
        {
            "japanese": "お箸",
            "kana": "おはし",
            "romaji": "ohashi",
            "meaning": "chopsticks",
            "note": "The お prefix makes the word sound polite."
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-spoon": [
        {
            "japanese": "スプーン",
            "kana": "スプーン",
            "romaji": "supūn",
            "meaning": "spoon"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-small-plates": [
        {
            "japanese": "取り皿",
            "kana": "とりざら",
            "romaji": "torizara",
            "meaning": "small sharing plates"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-spicy": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "辛い",
            "kana": "からい",
            "romaji": "karai",
            "meaning": "spicy"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-not-spicy": [
        {
            "japanese": "辛く",
            "kana": "からく",
            "romaji": "karaku",
            "meaning": "spicy",
            "note": "Adverb-like form used before する."
        },
        {
            "japanese": "しないで",
            "kana": "しないで",
            "romaji": "shinaide",
            "meaning": "do not make it",
            "note": "The ～ないで form means “without doing” or “do not do.”"
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "restaurant-no-meat": [
        {
            "japanese": "肉",
            "kana": "にく",
            "romaji": "niku",
            "meaning": "meat"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "食べません",
            "kana": "たべません",
            "romaji": "tabemasen",
            "meaning": "do not eat",
            "note": "Polite negative form of 食べます, “to eat.”"
        }
    ],
    "restaurant-vegetarian": [
        {
            "japanese": "ベジタリアン向け",
            "kana": "ベジタリアンむけ",
            "romaji": "bejitarian-muke",
            "meaning": "intended for vegetarians",
            "note": "向け means “for” or “aimed at.”"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "料理",
            "kana": "りょうり",
            "romaji": "ryōri",
            "meaning": "dishes"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-allergy": [
        {
            "japanese": "アレルギー",
            "kana": "アレルギー",
            "romaji": "arerugī",
            "meaning": "allergy"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        }
    ],
    "restaurant-peanuts": [
        {
            "japanese": "ピーナッツ",
            "kana": "ピーナッツ",
            "romaji": "pīnattsu",
            "meaning": "peanuts"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "入っています",
            "kana": "はいっています",
            "romaji": "haitte imasu",
            "meaning": "is included / contained",
            "note": "The ている form describes the current state of being inside."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-eggs": [
        {
            "japanese": "卵",
            "kana": "たまご",
            "romaji": "tamago",
            "meaning": "eggs"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "入っています",
            "kana": "はいっています",
            "romaji": "haitte imasu",
            "meaning": "is included / contained",
            "note": "The ている form describes the current state of being inside."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-dairy": [
        {
            "japanese": "乳製品",
            "kana": "にゅうせいひん",
            "romaji": "nyūseihin",
            "meaning": "dairy products"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "入っています",
            "kana": "はいっています",
            "romaji": "haitte imasu",
            "meaning": "is included / contained",
            "note": "The ている form describes the current state of being inside."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-wheat": [
        {
            "japanese": "小麦",
            "kana": "こむぎ",
            "romaji": "komugi",
            "meaning": "wheat"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "入っています",
            "kana": "はいっています",
            "romaji": "haitte imasu",
            "meaning": "is included / contained",
            "note": "The ている form describes the current state of being inside."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-shellfish": [
        {
            "japanese": "甲殻類",
            "kana": "こうかくるい",
            "romaji": "kōkakurui",
            "meaning": "crustacean shellfish"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "入っています",
            "kana": "はいっています",
            "romaji": "haitte imasu",
            "meaning": "is included / contained",
            "note": "The ている form describes the current state of being inside."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-bill": [
        {
            "japanese": "お会計",
            "kana": "おかいけい",
            "romaji": "okaikei",
            "meaning": "the bill / checkout"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-separate-checks": [
        {
            "japanese": "別々に",
            "kana": "べつべつに",
            "romaji": "betsubetsu ni",
            "meaning": "separately"
        },
        {
            "japanese": "会計",
            "kana": "かいけい",
            "romaji": "kaikei",
            "meaning": "pay / settle the bill"
        },
        {
            "japanese": "できます",
            "kana": "できます",
            "romaji": "dekimasu",
            "meaning": "can be done / is possible"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-takeout": [
        {
            "japanese": "持ち帰り",
            "kana": "もちかえり",
            "romaji": "mochikaeri",
            "meaning": "takeout / taking it home"
        },
        {
            "japanese": "できます",
            "kana": "できます",
            "romaji": "dekimasu",
            "meaning": "can be done / is possible"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-delicious": [
        {
            "japanese": "とても",
            "kana": "とても",
            "romaji": "totemo",
            "meaning": "very"
        },
        {
            "japanese": "おいしかった",
            "kana": "おいしかった",
            "romaji": "oishikatta",
            "meaning": "was delicious",
            "note": "Past form of おいしい, “delicious.”"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "restaurant-thank-meal": [
        {
            "japanese": "ごちそうさまでした",
            "kana": "ごちそうさまでした",
            "romaji": "gochisōsama deshita",
            "meaning": "thank you for the meal",
            "note": "A set phrase said after eating to show appreciation."
        }
    ],
    "restaurant-last-order": [
        {
            "japanese": "ラストオーダー",
            "kana": "ラストオーダー",
            "romaji": "rasuto ōdā",
            "meaning": "last order"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-nonsmoking": [
        {
            "japanese": "禁煙席",
            "kana": "きんえんせき",
            "romaji": "kin'enseki",
            "meaning": "non-smoking seat"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-draft-beer": [
        {
            "japanese": "生ビール",
            "kana": "なまビール",
            "romaji": "nama bīru",
            "meaning": "draft beer"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "一つ",
            "kana": "ひとつ",
            "romaji": "hitotsu",
            "meaning": "one",
            "note": "A general counter for items."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "restaurant-otoshi": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "お通し",
            "kana": "おとおし",
            "romaji": "otōshi",
            "meaning": "small table appetizer / cover dish",
            "note": "Common at izakaya and often automatically served for a small charge."
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何",
            "kana": "なん",
            "romaji": "nan",
            "meaning": "what"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "restaurant-not-ordered": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "注文していません",
            "kana": "ちゅうもんしていません",
            "romaji": "chūmon shite imasen",
            "meaning": "did not order",
            "note": "Polite negative form of “to order.”"
        }
    ],
    "restaurant-food-not-arrived": [
        {
            "japanese": "注文した",
            "kana": "ちゅうもんした",
            "romaji": "chūmon shita",
            "meaning": "ordered",
            "note": "Past form used to describe the following noun."
        },
        {
            "japanese": "料理",
            "kana": "りょうり",
            "romaji": "ryōri",
            "meaning": "food / dish"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "まだ",
            "kana": "まだ",
            "romaji": "mada",
            "meaning": "still / not yet"
        },
        {
            "japanese": "来ていません",
            "kana": "きていません",
            "romaji": "kite imasen",
            "meaning": "has not come / arrived",
            "note": "Negative ている form describing the current state."
        }
    ],
    "hear-how-many": [
        {
            "japanese": "何名様",
            "kana": "なんめいさま",
            "romaji": "nanmei-sama",
            "meaning": "how many people",
            "note": "A respectful restaurant expression for party size."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-reservation": [
        {
            "japanese": "ご予約",
            "kana": "ごよやく",
            "romaji": "go-yoyaku",
            "meaning": "reservation",
            "note": "The ご prefix makes the word respectful."
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-order-ready": [
        {
            "japanese": "ご注文",
            "kana": "ごちゅうもん",
            "romaji": "go-chūmon",
            "meaning": "your order",
            "note": "The ご prefix makes the word respectful."
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "お決まり",
            "kana": "おきまり",
            "romaji": "okimari",
            "meaning": "decided / ready",
            "note": "A polite noun-like form of “to decide.”"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-eat-here": [
        {
            "japanese": "店内",
            "kana": "てんない",
            "romaji": "tennai",
            "meaning": "inside the store"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "お召し上がり",
            "kana": "おめしあがり",
            "romaji": "omeshiagari",
            "meaning": "eat / dine",
            "note": "Respectful form used for the customer’s action."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-takeout": [
        {
            "japanese": "お持ち帰り",
            "kana": "おもちかえり",
            "romaji": "omochikaeri",
            "meaning": "takeout",
            "note": "Polite form of 持ち帰り."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-wait": [
        {
            "japanese": "少々",
            "kana": "しょうしょう",
            "romaji": "shōshō",
            "meaning": "a moment / a little while",
            "note": "Polite word for a short amount."
        },
        {
            "japanese": "お待ち",
            "kana": "おまち",
            "romaji": "omachi",
            "meaning": "wait",
            "note": "Polite request form built from 待つ."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "hear-last-order": [
        {
            "japanese": "ラストオーダー",
            "kana": "ラストオーダー",
            "romaji": "rasuto ōdā",
            "meaning": "last order"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "お時間",
            "kana": "おじかん",
            "romaji": "ojikan",
            "meaning": "time",
            "note": "The お prefix makes the word polite."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "convenience-no-bag": [
        {
            "japanese": "袋",
            "kana": "ふくろ",
            "romaji": "fukuro",
            "meaning": "bag"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "要りません",
            "kana": "いりません",
            "romaji": "irimasen",
            "meaning": "do not need",
            "note": "Polite negative of 要ります, “to need.”"
        }
    ],
    "convenience-bag": [
        {
            "japanese": "袋",
            "kana": "ふくろ",
            "romaji": "fukuro",
            "meaning": "bag"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "convenience-heat": [
        {
            "japanese": "温めて",
            "kana": "あたためて",
            "romaji": "atatamete",
            "meaning": "heat it",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "convenience-no-heat": [
        {
            "japanese": "温めなくて",
            "kana": "あたためなくて",
            "romaji": "atatamenakute",
            "meaning": "without heating / no need to heat",
            "note": "Negative て-form of 温める, “to heat.”"
        },
        {
            "japanese": "大丈夫",
            "kana": "だいじょうぶ",
            "romaji": "daijōbu",
            "meaning": "okay / fine"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "convenience-chopsticks": [
        {
            "japanese": "お箸",
            "kana": "おはし",
            "romaji": "ohashi",
            "meaning": "chopsticks",
            "note": "The お prefix makes the word sound polite."
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "convenience-spoon": [
        {
            "japanese": "スプーン",
            "kana": "スプーン",
            "romaji": "supūn",
            "meaning": "spoon"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "convenience-straw": [
        {
            "japanese": "ストロー",
            "kana": "ストロー",
            "romaji": "sutorō",
            "meaning": "straw"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "convenience-cash": [
        {
            "japanese": "現金",
            "kana": "げんきん",
            "romaji": "genkin",
            "meaning": "cash"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "払います",
            "kana": "はらいます",
            "romaji": "haraimasu",
            "meaning": "will pay"
        }
    ],
    "convenience-card": [
        {
            "japanese": "カード",
            "kana": "カード",
            "romaji": "kādo",
            "meaning": "card"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "払います",
            "kana": "はらいます",
            "romaji": "haraimasu",
            "meaning": "will pay"
        }
    ],
    "convenience-ic": [
        {
            "japanese": "交通系",
            "kana": "こうつうけい",
            "romaji": "kōtsū-kei",
            "meaning": "transit-system type"
        },
        {
            "japanese": "ICカード",
            "kana": "アイシーカード",
            "romaji": "ai-shī kādo",
            "meaning": "IC card"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "払います",
            "kana": "はらいます",
            "romaji": "haraimasu",
            "meaning": "will pay"
        }
    ],
    "convenience-atm": [
        {
            "japanese": "ATM",
            "kana": "エーティーエム",
            "romaji": "ē-tī-emu",
            "meaning": "ATM"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "convenience-find-item": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "商品",
            "kana": "しょうひん",
            "romaji": "shōhin",
            "meaning": "product / item"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "convenience-stamps": [
        {
            "japanese": "切手",
            "kana": "きって",
            "romaji": "kitte",
            "meaning": "postage stamps"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "convenience-parcel": [
        {
            "japanese": "宅配便",
            "kana": "たくはいびん",
            "romaji": "takuhai-bin",
            "meaning": "parcel-delivery service"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "送りたい",
            "kana": "おくりたい",
            "romaji": "okuritai",
            "meaning": "want to send",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "convenience-ticket": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "チケット",
            "kana": "チケット",
            "romaji": "chiketto",
            "meaning": "ticket"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "発券したい",
            "kana": "はっけんしたい",
            "romaji": "hakken shitai",
            "meaning": "want to issue / print",
            "note": "発券 means to issue or print a ticket; ～たい expresses a desire."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "convenience-receipt": [
        {
            "japanese": "レシート",
            "kana": "レシート",
            "romaji": "reshīto",
            "meaning": "receipt"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "convenience-restroom": [
        {
            "japanese": "トイレ",
            "kana": "トイレ",
            "romaji": "toire",
            "meaning": "restroom"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "convenience-copy": [
        {
            "japanese": "コピー機",
            "kana": "コピーき",
            "romaji": "kopī-ki",
            "meaning": "copy machine"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-bag": [
        {
            "japanese": "袋",
            "kana": "ふくろ",
            "romaji": "fukuro",
            "meaning": "bag"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "ご利用",
            "kana": "ごりよう",
            "romaji": "go-riyō",
            "meaning": "use / need one",
            "note": "A polite service expression; here it asks whether you want to use a bag."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-heat": [
        {
            "japanese": "温めます",
            "kana": "あたためます",
            "romaji": "atatamemasu",
            "meaning": "heat it / warm it"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-chopsticks": [
        {
            "japanese": "お箸",
            "kana": "おはし",
            "romaji": "ohashi",
            "meaning": "chopsticks"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "お付けします",
            "kana": "おつけします",
            "romaji": "otsuke shimasu",
            "meaning": "include / add",
            "note": "Polite service expression meaning “shall I include them?”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-point-card": [
        {
            "japanese": "ポイントカード",
            "kana": "ポイントカード",
            "romaji": "pointo kādo",
            "meaning": "point / loyalty card"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "お持ち",
            "kana": "おもち",
            "romaji": "omochi",
            "meaning": "have / carry",
            "note": "Respectful form used to ask whether the customer has something."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-payment-method": [
        {
            "japanese": "お支払い",
            "kana": "おしはらい",
            "romaji": "oshiharai",
            "meaning": "payment"
        },
        {
            "japanese": "方法",
            "kana": "ほうほう",
            "romaji": "hōhō",
            "meaning": "method / way"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        }
    ],
    "hear-receipt": [
        {
            "japanese": "レシート",
            "kana": "レシート",
            "romaji": "reshīto",
            "meaning": "receipt"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "ご利用",
            "kana": "ごりよう",
            "romaji": "go-riyō",
            "meaning": "use / want one",
            "note": "A polite service expression; here it asks whether you want a receipt."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-price": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "いくら",
            "kana": "いくら",
            "romaji": "ikura",
            "meaning": "how much"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-another-size": [
        {
            "japanese": "別",
            "kana": "べつ",
            "romaji": "betsu",
            "meaning": "different / another"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "サイズ",
            "kana": "サイズ",
            "romaji": "saizu",
            "meaning": "size"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-size-small": [
        {
            "japanese": "Sサイズ",
            "kana": "エスサイズ",
            "romaji": "esu saizu",
            "meaning": "size S / small"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-another-color": [
        {
            "japanese": "別",
            "kana": "べつ",
            "romaji": "betsu",
            "meaning": "different / another"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "色",
            "kana": "いろ",
            "romaji": "iro",
            "meaning": "color"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-try-on": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "試着して",
            "kana": "しちゃくして",
            "romaji": "shichaku shite",
            "meaning": "try on",
            "note": "The て-form connects to the permission pattern that follows."
        },
        {
            "japanese": "も",
            "kana": "も",
            "romaji": "mo",
            "meaning": "also / even",
            "note": "Adds the sense of “also,” “even,” or “as well.”"
        },
        {
            "japanese": "いい",
            "kana": "いい",
            "romaji": "ii",
            "meaning": "good / okay"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-fitting-room": [
        {
            "japanese": "試着室",
            "kana": "しちゃくしつ",
            "romaji": "shichakushitsu",
            "meaning": "fitting room"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-stock": [
        {
            "japanese": "在庫",
            "kana": "ざいこ",
            "romaji": "zaiko",
            "meaning": "stock / inventory"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-tax-free": [
        {
            "japanese": "免税",
            "kana": "めんぜい",
            "romaji": "menzei",
            "meaning": "tax exemption / tax-free"
        },
        {
            "japanese": "できます",
            "kana": "できます",
            "romaji": "dekimasu",
            "meaning": "can be done / is available"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-tax-counter": [
        {
            "japanese": "免税カウンター",
            "kana": "めんぜいカウンター",
            "romaji": "menzei kauntā",
            "meaning": "tax-free counter"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-card": [
        {
            "japanese": "クレジットカード",
            "kana": "クレジットカード",
            "romaji": "kurejitto kādo",
            "meaning": "credit card"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "使えます",
            "kana": "つかえます",
            "romaji": "tsukaemasu",
            "meaning": "can use / is accepted",
            "note": "Potential form of 使います, “to use.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-cash-only": [
        {
            "japanese": "現金",
            "kana": "げんきん",
            "romaji": "genkin",
            "meaning": "cash"
        },
        {
            "japanese": "だけ",
            "kana": "だけ",
            "romaji": "dake",
            "meaning": "only"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-gift-wrap": [
        {
            "japanese": "プレゼント用",
            "kana": "プレゼントよう",
            "romaji": "purezento-yō",
            "meaning": "for a gift",
            "note": "用 means “for the purpose/use of.”"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "包んで",
            "kana": "つつんで",
            "romaji": "tsutsunde",
            "meaning": "wrap it",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "shopping-return": [
        {
            "japanese": "返品",
            "kana": "へんぴん",
            "romaji": "henpin",
            "meaning": "returning an item"
        },
        {
            "japanese": "できます",
            "kana": "できます",
            "romaji": "dekimasu",
            "meaning": "can be done / is possible"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-exchange": [
        {
            "japanese": "交換",
            "kana": "こうかん",
            "romaji": "kōkan",
            "meaning": "exchange"
        },
        {
            "japanese": "できます",
            "kana": "できます",
            "romaji": "dekimasu",
            "meaning": "can be done / is possible"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-looking-for": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "探しています",
            "kana": "さがしています",
            "romaji": "sagashite imasu",
            "meaning": "am looking for",
            "note": "The ている form describes an ongoing search."
        }
    ],
    "shopping-just-looking": [
        {
            "japanese": "見ている",
            "kana": "みている",
            "romaji": "mite iru",
            "meaning": "am looking / browsing",
            "note": "The ている form describes an ongoing action."
        },
        {
            "japanese": "だけ",
            "kana": "だけ",
            "romaji": "dake",
            "meaning": "only / just"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "shopping-call-staff": [
        {
            "japanese": "店員さん",
            "kana": "てんいんさん",
            "romaji": "ten'in-san",
            "meaning": "store staff member",
            "note": "さん adds polite respect when referring to a person."
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "呼んで",
            "kana": "よんで",
            "romaji": "yonde",
            "meaning": "call / get",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "shopping-cheaper": [
        {
            "japanese": "もう少し",
            "kana": "もうすこし",
            "romaji": "mō sukoshi",
            "meaning": "a little more / a little"
        },
        {
            "japanese": "安い",
            "kana": "やすい",
            "romaji": "yasui",
            "meaning": "cheap / inexpensive"
        },
        {
            "japanese": "もの",
            "kana": "もの",
            "romaji": "mono",
            "meaning": "thing / item"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-three": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "三つ",
            "kana": "みっつ",
            "romaji": "mittsu",
            "meaning": "three items",
            "note": "A general counter for objects."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "shopping-does-not-fit": [
        {
            "japanese": "サイズ",
            "kana": "サイズ",
            "romaji": "saizu",
            "meaning": "size"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "合いません",
            "kana": "あいません",
            "romaji": "aimasen",
            "meaning": "does not fit / match",
            "note": "Polite negative of 合います, “to fit or match.”"
        }
    ],
    "shopping-made-japan": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "日本製",
            "kana": "にほんせい",
            "romaji": "Nihon-sei",
            "meaning": "made in Japan",
            "note": "製 means “made/manufactured in.”"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "shopping-close-time": [
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "まで",
            "kana": "まで",
            "romaji": "made",
            "meaning": "to / as far as",
            "note": "Marks the endpoint or destination."
        },
        {
            "japanese": "営業しています",
            "kana": "えいぎょうしています",
            "romaji": "eigyō shite imasu",
            "meaning": "are open / operating",
            "note": "The ている form describes the store’s current operating schedule."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-try-on": [
        {
            "japanese": "ご試着",
            "kana": "ごしちゃく",
            "romaji": "go-shichaku",
            "meaning": "trying it on",
            "note": "The ご prefix makes the expression respectful."
        },
        {
            "japanese": "なさいます",
            "kana": "なさいます",
            "romaji": "nasaimasu",
            "meaning": "will do / would like to do",
            "note": "Respectful form of します, used for the customer’s action."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-this-okay": [
        {
            "japanese": "こちら",
            "kana": "こちら",
            "romaji": "kochira",
            "meaning": "this way / this one / here",
            "note": "A polite, context-dependent way to indicate a place, item, or direction."
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "with this / choosing this",
            "note": "Here で marks the selected option."
        },
        {
            "japanese": "よろしい",
            "kana": "よろしい",
            "romaji": "yoroshii",
            "meaning": "all right / acceptable",
            "note": "Polite form of いい."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-for-yourself": [
        {
            "japanese": "ご自宅",
            "kana": "ごじたく",
            "romaji": "go-jitaku",
            "meaning": "your home / yourself",
            "note": "A respectful way to refer to the customer’s home."
        },
        {
            "japanese": "用",
            "kana": "よう",
            "romaji": "yō",
            "meaning": "for use / intended for"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hear-passport-tax": [
        {
            "japanese": "免税",
            "kana": "めんぜい",
            "romaji": "menzei",
            "meaning": "tax-free shopping"
        },
        {
            "japanese": "には",
            "kana": "には",
            "romaji": "ni wa",
            "meaning": "for / in order to",
            "note": "The combined particles に + は set the purpose or condition."
        },
        {
            "japanese": "パスポート",
            "kana": "パスポート",
            "romaji": "pasupōto",
            "meaning": "passport"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "必要",
            "kana": "ひつよう",
            "romaji": "hitsuyō",
            "meaning": "necessary / required"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "transport-go-kyoto": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "京都",
            "kana": "きょうと",
            "romaji": "Kyōto",
            "meaning": "Kyoto"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "行きます",
            "kana": "いきます",
            "romaji": "ikimasu",
            "meaning": "goes / will go"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-how-tokyo": [
        {
            "japanese": "東京駅",
            "kana": "とうきょうえき",
            "romaji": "Tōkyō-eki",
            "meaning": "Tokyo Station"
        },
        {
            "japanese": "には",
            "kana": "には",
            "romaji": "ni wa",
            "meaning": "to / as for getting to",
            "note": "The combined particles に + は highlight the destination."
        },
        {
            "japanese": "どう",
            "kana": "どう",
            "romaji": "dō",
            "meaning": "how"
        },
        {
            "japanese": "行けば",
            "kana": "いけば",
            "romaji": "ikeba",
            "meaning": "if I go / should I go",
            "note": "Conditional form of 行く; with いい it asks what route would be good."
        },
        {
            "japanese": "いい",
            "kana": "いい",
            "romaji": "ii",
            "meaning": "good / best"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-platform": [
        {
            "japanese": "何番線",
            "kana": "なんばんせん",
            "romaji": "nan-bansen",
            "meaning": "which platform / track number",
            "note": "番 indicates a number and 線 refers to the rail line or track."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-transfer": [
        {
            "japanese": "乗り換え",
            "kana": "のりかえ",
            "romaji": "norikae",
            "meaning": "transfer"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-local": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "各駅停車",
            "kana": "かくえきていしゃ",
            "romaji": "kakueki-teisha",
            "meaning": "local train",
            "note": "Literally “stopping at every station.”"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-rapid": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "快速",
            "kana": "かいそく",
            "romaji": "kaisoku",
            "meaning": "rapid service"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-limited-express": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "特急",
            "kana": "とっきゅう",
            "romaji": "tokkyū",
            "meaning": "limited express"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-reserved": [
        {
            "japanese": "指定席",
            "kana": "していせき",
            "romaji": "shiteiseki",
            "meaning": "reserved seat"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-unreserved": [
        {
            "japanese": "自由席",
            "kana": "じゆうせき",
            "romaji": "jiyūseki",
            "meaning": "unreserved seat"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-buy-ticket": [
        {
            "japanese": "切符",
            "kana": "きっぷ",
            "romaji": "kippu",
            "meaning": "ticket"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "買えます",
            "kana": "かえます",
            "romaji": "kaemasu",
            "meaning": "can buy",
            "note": "Potential form of 買います, “to buy.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-buy-ic": [
        {
            "japanese": "ICカード",
            "kana": "アイシーカード",
            "romaji": "ai-shī kādo",
            "meaning": "IC card"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "買えます",
            "kana": "かえます",
            "romaji": "kaemasu",
            "meaning": "can buy",
            "note": "Potential form of 買います, “to buy.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-charge-ic": [
        {
            "japanese": "ICカード",
            "kana": "アイシーカード",
            "romaji": "ai-shī kādo",
            "meaning": "IC card"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "チャージしたい",
            "kana": "チャージしたい",
            "romaji": "chāji shitai",
            "meaning": "want to add money / recharge",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "transport-last-train": [
        {
            "japanese": "終電",
            "kana": "しゅうでん",
            "romaji": "shūden",
            "meaning": "last train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-delay": [
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "遅れています",
            "kana": "おくれています",
            "romaji": "okurete imasu",
            "meaning": "is delayed / running late",
            "note": "The ている form describes the current delay."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-cancelled": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "運休",
            "kana": "うんきゅう",
            "romaji": "unkyū",
            "meaning": "service cancellation / suspended service"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-next-train": [
        {
            "japanese": "次",
            "kana": "つぎ",
            "romaji": "tsugi",
            "meaning": "next"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-bus-airport": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "バス",
            "kana": "バス",
            "romaji": "basu",
            "meaning": "bus"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "空港",
            "kana": "くうこう",
            "romaji": "kūkō",
            "meaning": "airport"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "行きます",
            "kana": "いきます",
            "romaji": "ikimasu",
            "meaning": "goes / will go"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-bus-stop": [
        {
            "japanese": "バス停",
            "kana": "バスてい",
            "romaji": "basu-tei",
            "meaning": "bus stop"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-get-off": [
        {
            "japanese": "ここ",
            "kana": "ここ",
            "romaji": "koko",
            "meaning": "here / this place"
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "降ります",
            "kana": "おります",
            "romaji": "orimasu",
            "meaning": "get off / will get off"
        }
    ],
    "transport-address": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "住所",
            "kana": "じゅうしょ",
            "romaji": "jūsho",
            "meaning": "address"
        },
        {
            "japanese": "まで",
            "kana": "まで",
            "romaji": "made",
            "meaning": "to / as far as",
            "note": "Marks the endpoint or destination."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "transport-here-taxi": [
        {
            "japanese": "ここ",
            "kana": "ここ",
            "romaji": "koko",
            "meaning": "here / this place"
        },
        {
            "japanese": "まで",
            "kana": "まで",
            "romaji": "made",
            "meaning": "to / as far as",
            "note": "Marks the endpoint or destination."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "transport-how-long": [
        {
            "japanese": "どのくらい",
            "kana": "どのくらい",
            "romaji": "dono kurai",
            "meaning": "about how much / how long"
        },
        {
            "japanese": "時間",
            "kana": "じかん",
            "romaji": "jikan",
            "meaning": "time"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "かかります",
            "kana": "かかります",
            "romaji": "kakarimasu",
            "meaning": "takes / costs"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-fare": [
        {
            "japanese": "料金",
            "kana": "りょうきん",
            "romaji": "ryōkin",
            "meaning": "fare / charge"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "いくら",
            "kana": "いくら",
            "romaji": "ikura",
            "meaning": "how much"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-trunk": [
        {
            "japanese": "トランク",
            "kana": "トランク",
            "romaji": "toranku",
            "meaning": "trunk"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "荷物",
            "kana": "にもつ",
            "romaji": "nimotsu",
            "meaning": "luggage"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "入れて",
            "kana": "いれて",
            "romaji": "irete",
            "meaning": "put in",
            "note": "The て-form connects to the permission pattern that follows."
        },
        {
            "japanese": "も",
            "kana": "も",
            "romaji": "mo",
            "meaning": "also / even",
            "note": "Adds the sense of “also,” “even,” or “as well.”"
        },
        {
            "japanese": "いい",
            "kana": "いい",
            "romaji": "ii",
            "meaning": "good / okay"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-locker": [
        {
            "japanese": "コインロッカー",
            "kana": "コインロッカー",
            "romaji": "koin rokkā",
            "meaning": "coin lockers"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-luggage-storage": [
        {
            "japanese": "荷物",
            "kana": "にもつ",
            "romaji": "nimotsu",
            "meaning": "luggage"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "預けられます",
            "kana": "あずけられます",
            "romaji": "azukeraremasu",
            "meaning": "can leave / can check",
            "note": "Potential form of 預けます, “to entrust or leave for safekeeping.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "transport-shinkansen-ticket": [
        {
            "japanese": "新幹線",
            "kana": "しんかんせん",
            "romaji": "shinkansen",
            "meaning": "Shinkansen / bullet train"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "切符",
            "kana": "きっぷ",
            "romaji": "kippu",
            "meaning": "ticket"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "買いたい",
            "kana": "かいたい",
            "romaji": "kaitai",
            "meaning": "want to buy",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "transport-change-ticket": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "変更したい",
            "kana": "へんこうしたい",
            "romaji": "henkō shitai",
            "meaning": "want to change",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "transport-delay-certificate": [
        {
            "japanese": "遅延証明書",
            "kana": "ちえんしょうめいしょ",
            "romaji": "chien shōmeisho",
            "meaning": "delay certificate"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "hear-next-shinjuku": [
        {
            "japanese": "次",
            "kana": "つぎ",
            "romaji": "tsugi",
            "meaning": "next"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "新宿",
            "kana": "しんじゅく",
            "romaji": "Shinjuku",
            "meaning": "Shinjuku"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hear-out-of-service": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "電車",
            "kana": "でんしゃ",
            "romaji": "densha",
            "meaning": "train"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "回送",
            "kana": "かいそう",
            "romaji": "kaisō",
            "meaning": "out of service / non-revenue movement"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hear-depart-soon": [
        {
            "japanese": "まもなく",
            "kana": "まもなく",
            "romaji": "mamonaku",
            "meaning": "shortly / soon"
        },
        {
            "japanese": "発車します",
            "kana": "はっしゃします",
            "romaji": "hassha shimasu",
            "meaning": "will depart"
        }
    ],
    "hear-watch-step": [
        {
            "japanese": "足元",
            "kana": "あしもと",
            "romaji": "ashimoto",
            "meaning": "the area around your feet / your step"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "ご注意",
            "kana": "ごちゅうい",
            "romaji": "go-chūi",
            "meaning": "attention / caution",
            "note": "The ご prefix makes the request polite."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "hear-transfer": [
        {
            "japanese": "こちら",
            "kana": "こちら",
            "romaji": "kochira",
            "meaning": "this way / this one / here",
            "note": "A polite, context-dependent way to indicate a place, item, or direction."
        },
        {
            "japanese": "で",
            "kana": "で",
            "romaji": "de",
            "meaning": "at / by / with",
            "note": "Marks where an action happens or the method used."
        },
        {
            "japanese": "お乗り換え",
            "kana": "おのりかえ",
            "romaji": "onorikae",
            "meaning": "transfer",
            "note": "The お prefix makes the station announcement polite."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hear-service-suspended": [
        {
            "japanese": "運転",
            "kana": "うんてん",
            "romaji": "unten",
            "meaning": "train operation / service"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "見合わせています",
            "kana": "みあわせています",
            "romaji": "miawasete imasu",
            "meaning": "is being suspended / temporarily held",
            "note": "A standard transit expression for a service suspension."
        }
    ],
    "hotel-check-in": [
        {
            "japanese": "チェックイン",
            "kana": "チェックイン",
            "romaji": "chekku-in",
            "meaning": "check-in"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "hotel-reservation-name": [
        {
            "japanese": "予約",
            "kana": "よやく",
            "romaji": "yoyaku",
            "meaning": "reservation"
        },
        {
            "japanese": "しています",
            "kana": "しています",
            "romaji": "shite imasu",
            "meaning": "have made / am holding",
            "note": "Literally “am doing”; here it expresses the current state of having a reservation."
        },
        {
            "japanese": "名前",
            "kana": "なまえ",
            "romaji": "namae",
            "meaning": "name"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "チャン",
            "kana": "チャン",
            "romaji": "Chan",
            "meaning": "Chan",
            "note": "Replace this with your name."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hotel-passport": [
        {
            "japanese": "パスポート",
            "kana": "パスポート",
            "romaji": "pasupōto",
            "meaning": "passport"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "こちら",
            "kana": "こちら",
            "romaji": "kochira",
            "meaning": "this way / this one / here",
            "note": "A polite, context-dependent way to indicate a place, item, or direction."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hotel-luggage": [
        {
            "japanese": "荷物",
            "kana": "にもつ",
            "romaji": "nimotsu",
            "meaning": "luggage"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "預かって",
            "kana": "あずかって",
            "romaji": "azukatte",
            "meaning": "hold / store",
            "note": "The て-form connects the requested action to もらえます."
        },
        {
            "japanese": "もらえます",
            "kana": "もらえます",
            "romaji": "moraemasu",
            "meaning": "could you do that for me",
            "note": "Literally asks whether the speaker can receive the favor."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-luggage-before": [
        {
            "japanese": "チェックイン",
            "kana": "チェックイン",
            "romaji": "chekku-in",
            "meaning": "check-in"
        },
        {
            "japanese": "前に",
            "kana": "まえに",
            "romaji": "mae ni",
            "meaning": "before",
            "note": "前 means “before”; に connects it to the action."
        },
        {
            "japanese": "荷物",
            "kana": "にもつ",
            "romaji": "nimotsu",
            "meaning": "luggage"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "預けられます",
            "kana": "あずけられます",
            "romaji": "azukeraremasu",
            "meaning": "can leave / can check",
            "note": "Potential form of 預けます, “to leave for safekeeping.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-luggage-after": [
        {
            "japanese": "チェックアウト",
            "kana": "チェックアウト",
            "romaji": "chekku-auto",
            "meaning": "checkout"
        },
        {
            "japanese": "後に",
            "kana": "ごに",
            "romaji": "go ni",
            "meaning": "after",
            "note": "後 means “after”; に connects it to the action."
        },
        {
            "japanese": "荷物",
            "kana": "にもつ",
            "romaji": "nimotsu",
            "meaning": "luggage"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "預けられます",
            "kana": "あずけられます",
            "romaji": "azukeraremasu",
            "meaning": "can leave / can check",
            "note": "Potential form of 預けます, “to leave for safekeeping.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-breakfast": [
        {
            "japanese": "朝食",
            "kana": "ちょうしょく",
            "romaji": "chōshoku",
            "meaning": "breakfast"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "から",
            "kana": "から",
            "romaji": "kara",
            "meaning": "from",
            "note": "Marks a starting point in time or place."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-wifi": [
        {
            "japanese": "Wi-Fi",
            "kana": "ワイファイ",
            "romaji": "wai-fai",
            "meaning": "Wi-Fi"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "パスワード",
            "kana": "パスワード",
            "romaji": "pasuwādo",
            "meaning": "password"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何",
            "kana": "なん",
            "romaji": "nan",
            "meaning": "what"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-towel": [
        {
            "japanese": "タオル",
            "kana": "タオル",
            "romaji": "taoru",
            "meaning": "towel"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "もう",
            "kana": "もう",
            "romaji": "mō",
            "meaning": "another / more / already",
            "note": "Its meaning depends on context; here it usually means “another” or “more.”"
        },
        {
            "japanese": "一枚",
            "kana": "いちまい",
            "romaji": "ichimai",
            "meaning": "one flat item",
            "note": "枚 is the counter for flat objects such as towels, paper, and tickets."
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "hotel-room-problem": [
        {
            "japanese": "部屋",
            "kana": "へや",
            "romaji": "heya",
            "meaning": "room"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "問題",
            "kana": "もんだい",
            "romaji": "mondai",
            "meaning": "problem"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        }
    ],
    "hotel-ac": [
        {
            "japanese": "エアコン",
            "kana": "エアコン",
            "romaji": "eakon",
            "meaning": "air conditioner"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "動きません",
            "kana": "うごきません",
            "romaji": "ugokimasen",
            "meaning": "does not work / move",
            "note": "Polite negative of 動きます."
        }
    ],
    "hotel-hot-water": [
        {
            "japanese": "お湯",
            "kana": "おゆ",
            "romaji": "oyu",
            "meaning": "hot water"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "出ません",
            "kana": "でません",
            "romaji": "demasen",
            "meaning": "does not come out",
            "note": "Polite negative of 出ます, “to come out.”"
        }
    ],
    "hotel-change-room": [
        {
            "japanese": "部屋",
            "kana": "へや",
            "romaji": "heya",
            "meaning": "room"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "変えて",
            "kana": "かえて",
            "romaji": "kaete",
            "meaning": "change",
            "note": "The て-form connects the requested action to もらえます."
        },
        {
            "japanese": "もらえます",
            "kana": "もらえます",
            "romaji": "moraemasu",
            "meaning": "could you do that for me",
            "note": "Literally asks whether the speaker can receive the favor."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-checkout-time": [
        {
            "japanese": "チェックアウト",
            "kana": "チェックアウト",
            "romaji": "chekku-auto",
            "meaning": "checkout"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-call-taxi": [
        {
            "japanese": "タクシー",
            "kana": "タクシー",
            "romaji": "takushī",
            "meaning": "taxi"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "呼んで",
            "kana": "よんで",
            "romaji": "yonde",
            "meaning": "call",
            "note": "The て-form connects the requested action to もらえます."
        },
        {
            "japanese": "もらえます",
            "kana": "もらえます",
            "romaji": "moraemasu",
            "meaning": "could you do that for me",
            "note": "Literally asks whether the speaker can receive the favor."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-forward-luggage": [
        {
            "japanese": "荷物",
            "kana": "にもつ",
            "romaji": "nimotsu",
            "meaning": "luggage"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "次",
            "kana": "つぎ",
            "romaji": "tsugi",
            "meaning": "next"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "ホテル",
            "kana": "ホテル",
            "romaji": "hoteru",
            "meaning": "hotel"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "送りたい",
            "kana": "おくりたい",
            "romaji": "okuritai",
            "meaning": "want to send",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hotel-restaurant": [
        {
            "japanese": "近く",
            "kana": "ちかく",
            "romaji": "chikaku",
            "meaning": "nearby"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "おすすめ",
            "kana": "おすすめ",
            "romaji": "osusume",
            "meaning": "recommended"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "レストラン",
            "kana": "レストラン",
            "romaji": "resutoran",
            "meaning": "restaurant"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "hotel-early-checkout": [
        {
            "japanese": "早朝",
            "kana": "そうちょう",
            "romaji": "sōchō",
            "meaning": "early morning"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "チェックアウトしたい",
            "kana": "チェックアウトしたい",
            "romaji": "chekku-auto shitai",
            "meaning": "want to check out",
            "note": "The ～たい ending expresses what the speaker wants to do."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hear-breakfast-floor": [
        {
            "japanese": "朝食会場",
            "kana": "ちょうしょくかいじょう",
            "romaji": "chōshoku kaijō",
            "meaning": "breakfast venue / breakfast room"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "二階",
            "kana": "にかい",
            "romaji": "nikai",
            "meaning": "second floor"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "hear-room-ready": [
        {
            "japanese": "お部屋",
            "kana": "おへや",
            "romaji": "oheya",
            "meaning": "your room",
            "note": "The お prefix makes the reference polite."
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "準備",
            "kana": "じゅんび",
            "romaji": "junbi",
            "meaning": "preparation"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "できています",
            "kana": "できています",
            "romaji": "dekite imasu",
            "meaning": "is ready / has been completed",
            "note": "The ている form describes the completed current state."
        }
    ],
    "hear-pay-checkout": [
        {
            "japanese": "チェックアウト時",
            "kana": "チェックアウトじ",
            "romaji": "chekku-auto-ji",
            "meaning": "at checkout",
            "note": "時 means “time”; together this means “at the time of checkout.”"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "お支払い",
            "kana": "おしはらい",
            "romaji": "oshiharai",
            "meaning": "payment / paying",
            "note": "Polite noun form of 支払う, “to pay.”"
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "everyday-good-morning": [
        {
            "japanese": "おはよう",
            "kana": "おはよう",
            "romaji": "ohayō",
            "meaning": "good morning"
        },
        {
            "japanese": "ございます",
            "kana": "ございます",
            "romaji": "gozaimasu",
            "meaning": "polite ending",
            "note": "Makes the greeting more polite than おはよう by itself."
        }
    ],
    "everyday-hello": [
        {
            "japanese": "こんにちは",
            "kana": "こんにちは",
            "romaji": "konnichiwa",
            "meaning": "hello / good afternoon",
            "note": "A fixed greeting; the final は is pronounced “wa.”"
        }
    ],
    "everyday-good-evening": [
        {
            "japanese": "こんばんは",
            "kana": "こんばんは",
            "romaji": "konbanwa",
            "meaning": "good evening",
            "note": "A fixed greeting; the final は is pronounced “wa.”"
        }
    ],
    "everyday-thank-you": [
        {
            "japanese": "ありがとう",
            "kana": "ありがとう",
            "romaji": "arigatō",
            "meaning": "thank you"
        },
        {
            "japanese": "ございます",
            "kana": "ございます",
            "romaji": "gozaimasu",
            "meaning": "polite ending",
            "note": "Makes the thanks more formal and polite."
        }
    ],
    "everyday-youre-welcome": [
        {
            "japanese": "どういたしまして",
            "kana": "どういたしまして",
            "romaji": "dō itashimashite",
            "meaning": "you are welcome",
            "note": "A fixed polite response to thanks."
        }
    ],
    "everyday-sorry": [
        {
            "japanese": "すみません",
            "kana": "すみません",
            "romaji": "sumimasen",
            "meaning": "excuse me / I am sorry",
            "note": "Use it to get attention, apologize, or soften a request."
        }
    ],
    "everyday-okay": [
        {
            "japanese": "大丈夫",
            "kana": "だいじょうぶ",
            "romaji": "daijōbu",
            "meaning": "okay / all right / no need",
            "note": "Context determines whether it means “I’m fine,” “that is okay,” or a polite refusal."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "everyday-yes": [
        {
            "japanese": "はい",
            "kana": "はい",
            "romaji": "hai",
            "meaning": "yes / understood"
        }
    ],
    "everyday-no": [
        {
            "japanese": "いいえ",
            "kana": "いいえ",
            "romaji": "iie",
            "meaning": "no"
        }
    ],
    "everyday-no-thanks": [
        {
            "japanese": "結構",
            "kana": "けっこう",
            "romaji": "kekkō",
            "meaning": "enough / no thank you",
            "note": "In service situations, this politely declines an offer."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "everyday-english": [
        {
            "japanese": "英語",
            "kana": "えいご",
            "romaji": "eigo",
            "meaning": "English"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "話せます",
            "kana": "はなせます",
            "romaji": "hanasemasu",
            "meaning": "can speak",
            "note": "Potential form of 話します, “to speak.”"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-dont-understand": [
        {
            "japanese": "日本語",
            "kana": "にほんご",
            "romaji": "nihongo",
            "meaning": "Japanese language"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "よく",
            "kana": "よく",
            "romaji": "yoku",
            "meaning": "well"
        },
        {
            "japanese": "分かりません",
            "kana": "わかりません",
            "romaji": "wakarimasen",
            "meaning": "do not understand / do not know",
            "note": "Polite negative of 分かります."
        }
    ],
    "everyday-again": [
        {
            "japanese": "もう",
            "kana": "もう",
            "romaji": "mō",
            "meaning": "another / more / already",
            "note": "Its meaning depends on context; here it usually means “another” or “more.”"
        },
        {
            "japanese": "一度",
            "kana": "いちど",
            "romaji": "ichido",
            "meaning": "one time / once again"
        },
        {
            "japanese": "お願いします",
            "kana": "おねがいします",
            "romaji": "onegaishimasu",
            "meaning": "please / I request it",
            "note": "A flexible polite request meaning roughly “please do that for me.”"
        }
    ],
    "everyday-slowly": [
        {
            "japanese": "ゆっくり",
            "kana": "ゆっくり",
            "romaji": "yukkuri",
            "meaning": "slowly"
        },
        {
            "japanese": "話して",
            "kana": "はなして",
            "romaji": "hanashite",
            "meaning": "speak",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "everyday-write": [
        {
            "japanese": "書いて",
            "kana": "かいて",
            "romaji": "kaite",
            "meaning": "write it",
            "note": "The て-form connects the requested action to もらえます."
        },
        {
            "japanese": "もらえます",
            "kana": "もらえます",
            "romaji": "moraemasu",
            "meaning": "could you do that for me",
            "note": "Literally asks whether the speaker can receive the favor."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-read": [
        {
            "japanese": "これ",
            "kana": "これ",
            "romaji": "kore",
            "meaning": "this / this one"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どう",
            "kana": "どう",
            "romaji": "dō",
            "meaning": "how"
        },
        {
            "japanese": "読みます",
            "kana": "よみます",
            "romaji": "yomimasu",
            "meaning": "read / pronounce"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-restroom": [
        {
            "japanese": "トイレ",
            "kana": "トイレ",
            "romaji": "toire",
            "meaning": "restroom"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-station": [
        {
            "japanese": "駅",
            "kana": "えき",
            "romaji": "eki",
            "meaning": "station"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どちら",
            "kana": "どちら",
            "romaji": "dochira",
            "meaning": "which way / where",
            "note": "A more polite alternative to どこ in this context."
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-directions": [
        {
            "japanese": "ここ",
            "kana": "ここ",
            "romaji": "koko",
            "meaning": "here / this place"
        },
        {
            "japanese": "へ",
            "kana": "へ",
            "romaji": "e",
            "meaning": "to / toward",
            "note": "Written へ but pronounced “e”; marks direction."
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "行き方",
            "kana": "いきかた",
            "romaji": "ikikata",
            "meaning": "way to go / directions",
            "note": "方 attached to a verb stem means “way of doing.”"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "教えて",
            "kana": "おしえて",
            "romaji": "oshiete",
            "meaning": "tell / teach",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "everyday-photo-me": [
        {
            "japanese": "写真",
            "kana": "しゃしん",
            "romaji": "shashin",
            "meaning": "photo"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "撮って",
            "kana": "とって",
            "romaji": "totte",
            "meaning": "take",
            "note": "The て-form connects the requested action to もらえます."
        },
        {
            "japanese": "もらえます",
            "kana": "もらえます",
            "romaji": "moraemasu",
            "meaning": "could you do that for me",
            "note": "Literally asks whether the speaker can receive the favor."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-photo-allowed": [
        {
            "japanese": "写真",
            "kana": "しゃしん",
            "romaji": "shashin",
            "meaning": "photo"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "撮って",
            "kana": "とって",
            "romaji": "totte",
            "meaning": "take",
            "note": "The て-form connects to the permission pattern that follows."
        },
        {
            "japanese": "も",
            "kana": "も",
            "romaji": "mo",
            "meaning": "also / even",
            "note": "Adds the sense of “also,” “even,” or “as well.”"
        },
        {
            "japanese": "いい",
            "kana": "いい",
            "romaji": "ii",
            "meaning": "good / okay"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-open": [
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "開きます",
            "kana": "あきます",
            "romaji": "akimasu",
            "meaning": "opens"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-close": [
        {
            "japanese": "何時",
            "kana": "なんじ",
            "romaji": "nanji",
            "meaning": "what time"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "閉まります",
            "kana": "しまります",
            "romaji": "shimarimasu",
            "meaning": "closes"
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-two-tickets": [
        {
            "japanese": "入場券",
            "kana": "にゅうじょうけん",
            "romaji": "nyūjōken",
            "meaning": "admission ticket"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "二枚",
            "kana": "にまい",
            "romaji": "nimai",
            "meaning": "two flat items",
            "note": "枚 is the counter for flat objects such as tickets and sheets."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "everyday-sit": [
        {
            "japanese": "ここ",
            "kana": "ここ",
            "romaji": "koko",
            "meaning": "here / this place"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "座って",
            "kana": "すわって",
            "romaji": "suwatte",
            "meaning": "sit",
            "note": "The て-form connects to the permission pattern that follows."
        },
        {
            "japanese": "も",
            "kana": "も",
            "romaji": "mo",
            "meaning": "also / even",
            "note": "Adds the sense of “also,” “even,” or “as well.”"
        },
        {
            "japanese": "いい",
            "kana": "いい",
            "romaji": "ii",
            "meaning": "good / okay"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "everyday-lost": [
        {
            "japanese": "道",
            "kana": "みち",
            "romaji": "michi",
            "meaning": "way / route"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "迷いました",
            "kana": "まよいました",
            "romaji": "mayoimashita",
            "meaning": "got lost",
            "note": "Polite past form of 迷います."
        }
    ],
    "everyday-wait": [
        {
            "japanese": "ちょっと",
            "kana": "ちょっと",
            "romaji": "chotto",
            "meaning": "a little / a moment"
        },
        {
            "japanese": "待って",
            "kana": "まって",
            "romaji": "matte",
            "meaning": "wait",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "everyday-understood": [
        {
            "japanese": "分かりました",
            "kana": "わかりました",
            "romaji": "wakarimashita",
            "meaning": "understood / I understand",
            "note": "Polite past form often used to acknowledge that something is understood."
        }
    ],
    "everyday-dont-know": [
        {
            "japanese": "分かりません",
            "kana": "わかりません",
            "romaji": "wakarimasen",
            "meaning": "do not understand / do not know",
            "note": "Polite negative of 分かります."
        }
    ],
    "emergency-help": [
        {
            "japanese": "助けて",
            "kana": "たすけて",
            "romaji": "tasukete",
            "meaning": "help me",
            "note": "The て-form connects the urgent request to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "emergency-police": [
        {
            "japanese": "警察",
            "kana": "けいさつ",
            "romaji": "keisatsu",
            "meaning": "police"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "呼んで",
            "kana": "よんで",
            "romaji": "yonde",
            "meaning": "call",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "emergency-ambulance": [
        {
            "japanese": "救急車",
            "kana": "きゅうきゅうしゃ",
            "romaji": "kyūkyūsha",
            "meaning": "ambulance"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "呼んで",
            "kana": "よんで",
            "romaji": "yonde",
            "meaning": "call",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "emergency-hospital": [
        {
            "japanese": "病院",
            "kana": "びょういん",
            "romaji": "byōin",
            "meaning": "hospital"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "emergency-pharmacy": [
        {
            "japanese": "薬局",
            "kana": "やっきょく",
            "romaji": "yakkyoku",
            "meaning": "pharmacy"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "どこ",
            "kana": "どこ",
            "romaji": "doko",
            "meaning": "where"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "emergency-sick": [
        {
            "japanese": "気分",
            "kana": "きぶん",
            "romaji": "kibun",
            "meaning": "condition / how I feel"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "悪い",
            "kana": "わるい",
            "romaji": "warui",
            "meaning": "bad / unwell"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "emergency-pain": [
        {
            "japanese": "ここ",
            "kana": "ここ",
            "romaji": "koko",
            "meaning": "here / this place"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "痛い",
            "kana": "いたい",
            "romaji": "itai",
            "meaning": "painful / hurts"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "emergency-fever": [
        {
            "japanese": "熱",
            "kana": "ねつ",
            "romaji": "netsu",
            "meaning": "fever"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "あります",
            "kana": "あります",
            "romaji": "arimasu",
            "meaning": "there is / have / available",
            "note": "Polite form used for things and availability."
        }
    ],
    "emergency-breathing": [
        {
            "japanese": "息",
            "kana": "いき",
            "romaji": "iki",
            "meaning": "breath / breathing"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "苦しい",
            "kana": "くるしい",
            "romaji": "kurushii",
            "meaning": "painful / difficult / distressing"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "emergency-allergic-reaction": [
        {
            "japanese": "アレルギー反応",
            "kana": "アレルギーはんのう",
            "romaji": "arerugī hannō",
            "meaning": "allergic reaction"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "出ています",
            "kana": "でています",
            "romaji": "dete imasu",
            "meaning": "is occurring / has appeared",
            "note": "The ている form describes the reaction’s current state."
        }
    ],
    "emergency-wallet": [
        {
            "japanese": "財布",
            "kana": "さいふ",
            "romaji": "saifu",
            "meaning": "wallet"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "なくしました",
            "kana": "なくしました",
            "romaji": "nakushimashita",
            "meaning": "lost",
            "note": "Polite past form of なくします, “to lose.”"
        }
    ],
    "emergency-phone": [
        {
            "japanese": "携帯電話",
            "kana": "けいたいでんわ",
            "romaji": "keitai denwa",
            "meaning": "mobile phone"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "なくしました",
            "kana": "なくしました",
            "romaji": "nakushimashita",
            "meaning": "lost",
            "note": "Polite past form of なくします, “to lose.”"
        }
    ],
    "emergency-passport": [
        {
            "japanese": "パスポート",
            "kana": "パスポート",
            "romaji": "pasupōto",
            "meaning": "passport"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "なくしました",
            "kana": "なくしました",
            "romaji": "nakushimashita",
            "meaning": "lost",
            "note": "Polite past form of なくします, “to lose.”"
        }
    ],
    "emergency-stolen-bag": [
        {
            "japanese": "バッグ",
            "kana": "バッグ",
            "romaji": "baggu",
            "meaning": "bag"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "盗まれました",
            "kana": "ぬすまれました",
            "romaji": "nusumaremashita",
            "meaning": "was stolen",
            "note": "Passive past form: the speaker was affected by someone stealing it."
        }
    ],
    "emergency-injured": [
        {
            "japanese": "けが",
            "kana": "けが",
            "romaji": "kega",
            "meaning": "injury"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "しました",
            "kana": "しました",
            "romaji": "shimashita",
            "meaning": "did / suffered",
            "note": "Together with けが, this means “was injured.”"
        }
    ],
    "emergency-english-doctor": [
        {
            "japanese": "英語",
            "kana": "えいご",
            "romaji": "eigo",
            "meaning": "English"
        },
        {
            "japanese": "を",
            "kana": "を",
            "romaji": "o",
            "meaning": "object marker",
            "note": "Marks the thing directly affected by the verb."
        },
        {
            "japanese": "話せる",
            "kana": "はなせる",
            "romaji": "hanaseru",
            "meaning": "can speak",
            "note": "Potential form used here to describe the doctor."
        },
        {
            "japanese": "医師",
            "kana": "いし",
            "romaji": "ishi",
            "meaning": "doctor / physician"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "います",
            "kana": "います",
            "romaji": "imasu",
            "meaning": "there is / is present",
            "note": "Polite form normally used for people and animals; it can also complete an ongoing verb form."
        },
        {
            "japanese": "か",
            "kana": "か",
            "romaji": "ka",
            "meaning": "question marker",
            "note": "Turns a polite statement into a question."
        }
    ],
    "emergency-contact-person": [
        {
            "japanese": "この",
            "kana": "この",
            "romaji": "kono",
            "meaning": "this",
            "note": "Placed before a noun: “this …”"
        },
        {
            "japanese": "人",
            "kana": "ひと",
            "romaji": "hito",
            "meaning": "person"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "連絡して",
            "kana": "れんらくして",
            "romaji": "renraku shite",
            "meaning": "contact",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "emergency-contact-hotel": [
        {
            "japanese": "私",
            "kana": "わたし",
            "romaji": "watashi",
            "meaning": "I / me / my"
        },
        {
            "japanese": "の",
            "kana": "の",
            "romaji": "no",
            "meaning": "of / linking particle",
            "note": "Links two nouns, similar to “of” or an apostrophe-s."
        },
        {
            "japanese": "ホテル",
            "kana": "ホテル",
            "romaji": "hoteru",
            "meaning": "hotel"
        },
        {
            "japanese": "に",
            "kana": "に",
            "romaji": "ni",
            "meaning": "to / at / in",
            "note": "Marks a destination, time, location, or target depending on context."
        },
        {
            "japanese": "連絡して",
            "kana": "れんらくして",
            "romaji": "renraku shite",
            "meaning": "contact",
            "note": "The て-form connects the action to ください."
        },
        {
            "japanese": "ください",
            "kana": "ください",
            "romaji": "kudasai",
            "meaning": "please",
            "note": "After a noun it means “please give me”; after a て-form it makes a polite request."
        }
    ],
    "emergency-diabetes": [
        {
            "japanese": "糖尿病",
            "kana": "とうにょうびょう",
            "romaji": "tōnyōbyō",
            "meaning": "diabetes"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "emergency-pregnant": [
        {
            "japanese": "妊娠しています",
            "kana": "にんしんしています",
            "romaji": "ninshin shite imasu",
            "meaning": "am pregnant",
            "note": "The ている form describes the current state."
        }
    ],
    "emergency-contact-here": [
        {
            "japanese": "緊急連絡先",
            "kana": "きんきゅうれんらくさき",
            "romaji": "kinkyū renrakusaki",
            "meaning": "emergency contact"
        },
        {
            "japanese": "は",
            "kana": "は",
            "romaji": "wa",
            "meaning": "topic marker",
            "note": "Written は but pronounced “wa”; marks what the sentence is about."
        },
        {
            "japanese": "ここ",
            "kana": "ここ",
            "romaji": "koko",
            "meaning": "here / this place"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ],
    "emergency-dont-know-address": [
        {
            "japanese": "住所",
            "kana": "じゅうしょ",
            "romaji": "jūsho",
            "meaning": "address"
        },
        {
            "japanese": "が",
            "kana": "が",
            "romaji": "ga",
            "meaning": "subject / focus marker",
            "note": "Highlights the subject or the new information in the sentence."
        },
        {
            "japanese": "分かりません",
            "kana": "わかりません",
            "romaji": "wakarimasen",
            "meaning": "do not know / understand",
            "note": "Polite negative of 分かります."
        }
    ],
    "emergency-danger": [
        {
            "japanese": "危険",
            "kana": "きけん",
            "romaji": "kiken",
            "meaning": "dangerous / danger"
        },
        {
            "japanese": "です",
            "kana": "です",
            "romaji": "desu",
            "meaning": "is / am / are",
            "note": "Polite sentence ending; often not translated word-for-word."
        }
    ]
};
const SCENARIOS = [
    {
        id: 'restaurant-order',
        title: 'Order at a restaurant',
        subtitle: 'From the door to the bill',
        icon: '🍜',
        category: 'restaurant',
        steps: [
            {
                speaker: 'staff',
                promptJapanese: 'いらっしゃいませ。何名様ですか。',
                promptKana: 'いらっしゃいませ。なんめいさまですか',
                promptEnglish: 'Welcome. How many people?',
                choiceIds: ['restaurant-two-people', 'restaurant-recommendation', 'restaurant-english-menu'],
                correctId: 'restaurant-two-people',
                explanation: '二人です directly and politely tells the staff there are two people.'
            },
            {
                speaker: 'staff',
                promptJapanese: 'ご予約はありますか。',
                promptKana: 'ごよやくはありますか',
                promptEnglish: 'Do you have a reservation?',
                choiceIds: ['restaurant-no-reservation', 'restaurant-bill', 'restaurant-water'],
                correctId: 'restaurant-no-reservation',
                explanation: '予約していません means you do not have a reservation.'
            },
            {
                speaker: 'staff',
                promptJapanese: 'ご注文はお決まりですか。',
                promptKana: 'ごちゅうもんはおきまりですか',
                promptEnglish: 'Are you ready to order?',
                choiceIds: ['restaurant-this-please', 'restaurant-two-people', 'restaurant-takeout'],
                correctId: 'restaurant-this-please',
                explanation: 'Point to the menu and say これをお願いします to order the item.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '食事が終わりました。会計を頼みましょう。',
                promptKana: 'しょくじがおわりました。かいけいをたのみましょう',
                promptEnglish: 'You have finished eating. Ask for the bill.',
                choiceIds: ['restaurant-bill', 'restaurant-last-order', 'restaurant-what-is-this'],
                correctId: 'restaurant-bill',
                explanation: 'お会計をお願いします is the standard polite request for the bill.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '店を出るとき、感謝を伝えましょう。',
                promptKana: 'みせをでるとき、かんしゃをつたえましょう',
                promptEnglish: 'As you leave, thank the staff for the meal.',
                choiceIds: ['restaurant-thank-meal', 'everyday-good-morning', 'shopping-just-looking'],
                correctId: 'restaurant-thank-meal',
                explanation: 'ごちそうさまでした is a natural expression of appreciation after a meal.'
            }
        ]
    },
    {
        id: 'convenience-checkout',
        title: 'Convenience-store checkout',
        subtitle: 'Understand rapid counter questions',
        icon: '🏪',
        category: 'convenience',
        steps: [
            {
                speaker: 'staff',
                promptJapanese: '袋はご利用ですか。',
                promptKana: 'ふくろはごりようですか',
                promptEnglish: 'Would you like a bag?',
                choiceIds: ['convenience-no-bag', 'convenience-heat', 'convenience-card'],
                correctId: 'convenience-no-bag',
                explanation: '袋は要りません politely says that you do not need a bag.'
            },
            {
                speaker: 'staff',
                promptJapanese: '温めますか。',
                promptKana: 'あたためますか',
                promptEnglish: 'Would you like this heated?',
                choiceIds: ['convenience-heat', 'convenience-bag', 'convenience-receipt'],
                correctId: 'convenience-heat',
                explanation: '温めてください asks the cashier to heat the food.'
            },
            {
                speaker: 'staff',
                promptJapanese: 'お箸はお付けしますか。',
                promptKana: 'おはしはおつけしますか',
                promptEnglish: 'Would you like chopsticks?',
                choiceIds: ['convenience-chopsticks', 'convenience-straw', 'everyday-dont-understand'],
                correctId: 'convenience-chopsticks',
                explanation: 'お箸をお願いします is a clear, polite request for chopsticks.'
            },
            {
                speaker: 'staff',
                promptJapanese: 'お支払い方法は？',
                promptKana: 'おしはらいほうほうは',
                promptEnglish: 'How would you like to pay?',
                choiceIds: ['convenience-card', 'convenience-atm', 'shopping-price'],
                correctId: 'convenience-card',
                explanation: 'カードで払います tells the cashier you will pay by card.'
            },
            {
                speaker: 'staff',
                promptJapanese: 'レシートはご利用ですか。',
                promptKana: 'レシートはごりようですか',
                promptEnglish: 'Would you like a receipt?',
                choiceIds: ['convenience-receipt', 'restaurant-water', 'transport-platform'],
                correctId: 'convenience-receipt',
                explanation: 'レシートをください means “A receipt, please.”'
            }
        ]
    },
    {
        id: 'train-journey',
        title: 'Find the right train',
        subtitle: 'Platforms, transfers, and disruptions',
        icon: '🚆',
        category: 'transport',
        steps: [
            {
                speaker: 'traveler',
                promptJapanese: '京都へ行く電車か確認しましょう。',
                promptKana: 'きょうとへいくでんしゃかかくにんしましょう',
                promptEnglish: 'Confirm that the train goes to Kyoto.',
                choiceIds: ['transport-go-kyoto', 'transport-bus-airport', 'transport-next-train'],
                correctId: 'transport-go-kyoto',
                explanation: 'この電車は京都に行きますか asks exactly whether this train goes to Kyoto.'
            },
            {
                speaker: 'traveler',
                promptJapanese: 'ホームの番号を聞きましょう。',
                promptKana: 'ホームのばんごうをききましょう',
                promptEnglish: 'Ask which platform you need.',
                choiceIds: ['transport-platform', 'transport-fare', 'transport-locker'],
                correctId: 'transport-platform',
                explanation: '何番線ですか is a compact way to ask which platform or track.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '乗り換える場所が分かりません。',
                promptKana: 'のりかえるばしょがわかりません',
                promptEnglish: 'You do not know where to transfer.',
                choiceIds: ['transport-transfer', 'everyday-photo-me', 'hotel-breakfast'],
                correctId: 'transport-transfer',
                explanation: '乗り換えはどこですか asks where to make the transfer.'
            },
            {
                speaker: 'announcement',
                promptJapanese: '運転を見合わせています。',
                promptKana: 'うんてんをみあわせています',
                promptEnglish: 'What does this announcement mean?',
                choiceIds: ['hear-service-suspended', 'hear-depart-soon', 'hear-watch-step'],
                correctId: 'hear-service-suspended',
                explanation: 'This means service is currently suspended, often because of an incident or weather.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '今夜の最後の電車を確認しましょう。',
                promptKana: 'こんやのさいごのでんしゃをかくにんしましょう',
                promptEnglish: 'Ask what time the last train leaves.',
                choiceIds: ['transport-last-train', 'transport-delay', 'transport-buy-ticket'],
                correctId: 'transport-last-train',
                explanation: '終電 is the last train of the day.'
            }
        ]
    },
    {
        id: 'hotel-checkin',
        title: 'Check in at a hotel',
        subtitle: 'Reservation, luggage, and room needs',
        icon: '🛎️',
        category: 'hotel',
        steps: [
            {
                speaker: 'traveler',
                promptJapanese: 'フロントでチェックインを始めましょう。',
                promptKana: 'フロントでチェックインをはじめましょう',
                promptEnglish: 'Start checking in at the front desk.',
                choiceIds: ['hotel-check-in', 'hotel-checkout-time', 'hotel-call-taxi'],
                correctId: 'hotel-check-in',
                explanation: 'チェックインをお願いします is a direct and polite opening.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '予約名を伝えましょう。',
                promptKana: 'よやくめいをつたえましょう',
                promptEnglish: 'Tell the staff the reservation name.',
                choiceIds: ['hotel-reservation-name', 'restaurant-name-reservation', 'hotel-passport'],
                correctId: 'hotel-reservation-name',
                explanation: 'Replace チャン with the name used for your booking.'
            },
            {
                speaker: 'staff',
                promptJapanese: 'パスポートをお願いします。',
                promptKana: 'パスポートをおねがいします',
                promptEnglish: 'Passport, please.',
                choiceIds: ['hotel-passport', 'emergency-passport', 'shopping-tax-free'],
                correctId: 'hotel-passport',
                explanation: 'パスポートはこちらです means “Here is my passport.”'
            },
            {
                speaker: 'traveler',
                promptJapanese: 'Wi-Fiを使いたいです。',
                promptKana: 'ワイファイをつかいたいです',
                promptEnglish: 'Ask for the Wi-Fi password.',
                choiceIds: ['hotel-wifi', 'hotel-breakfast', 'hotel-towel'],
                correctId: 'hotel-wifi',
                explanation: 'Wi-Fiのパスワードは何ですか asks for the password.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '出発後まで荷物を預けたいです。',
                promptKana: 'しゅっぱつごまでにもつをあずけたいです',
                promptEnglish: 'Ask to leave luggage after checkout.',
                choiceIds: ['hotel-luggage-after', 'hotel-luggage-before', 'transport-trunk'],
                correctId: 'hotel-luggage-after',
                explanation: 'チェックアウト後 specifies that you want storage after checkout.'
            }
        ]
    },
    {
        id: 'allergy-help',
        title: 'Communicate a food allergy',
        subtitle: 'Ask clearly and respond to an emergency',
        icon: '🩺',
        category: 'emergency',
        steps: [
            {
                speaker: 'traveler',
                promptJapanese: 'まず、アレルギーがあることを伝えましょう。',
                promptKana: 'まず、アレルギーがあることをつたえましょう',
                promptEnglish: 'First, tell the staff that you have an allergy.',
                choiceIds: ['restaurant-allergy', 'restaurant-vegetarian', 'restaurant-spicy'],
                correctId: 'restaurant-allergy',
                explanation: 'アレルギーがあります clearly introduces an allergy concern.'
            },
            {
                speaker: 'traveler',
                promptJapanese: 'ピーナッツが含まれるか確認しましょう。',
                promptKana: 'ピーナッツがふくまれるかかくにんしましょう',
                promptEnglish: 'Ask whether the dish contains peanuts.',
                choiceIds: ['restaurant-peanuts', 'restaurant-eggs', 'restaurant-wheat'],
                correctId: 'restaurant-peanuts',
                explanation: 'ピーナッツが入っていますか specifically asks whether peanuts are included.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '呼吸が苦しくなりました。',
                promptKana: 'こきゅうがくるしくなりました',
                promptEnglish: 'You are having trouble breathing.',
                choiceIds: ['emergency-breathing', 'emergency-fever', 'emergency-wallet'],
                correctId: 'emergency-breathing',
                explanation: '息が苦しいです communicates breathing difficulty and should be treated as urgent.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '救急車が必要です。',
                promptKana: 'きゅうきゅうしゃがひつようです',
                promptEnglish: 'Ask someone to call an ambulance.',
                choiceIds: ['emergency-ambulance', 'emergency-police', 'emergency-pharmacy'],
                correctId: 'emergency-ambulance',
                explanation: '救急車を呼んでください is the direct emergency request.'
            },
            {
                speaker: 'traveler',
                promptJapanese: '同行者に連絡してもらいましょう。',
                promptKana: 'どうこうしゃにれんらくしてもらいましょう',
                promptEnglish: 'Ask someone to contact your companion.',
                choiceIds: ['emergency-contact-person', 'emergency-contact-hotel', 'everyday-write'],
                correctId: 'emergency-contact-person',
                explanation: 'Show the contact on your phone and say この人に連絡してください.'
            }
        ]
    }
];
const { useState, useEffect, useMemo, useRef, useCallback } = React;
const PASSCODE_SESSION_KEY = 'nt-passcode-unlocked-v1';
const PASSCODE_HASH = '65913c6b';
const PASSCODE_MAX_ATTEMPTS = 5;
const PASSCODE_LOCKOUT_MS = 30 * 1000;
function passcodeHash(value) {
    const salted = `nihongo-trip:${value}:v1`;
    let hash = 2166136261;
    for (let index = 0; index < salted.length; index += 1) {
        hash ^= salted.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
}
function hasSessionAccess() {
    try {
        return sessionStorage.getItem(PASSCODE_SESSION_KEY) === '1';
    }
    catch (_) {
        return false;
    }
}
const CATEGORY_META = {
    restaurant: { label: 'Restaurants', labelJa: 'レストラン', icon: '🍜', description: 'Order, ask about ingredients, and pay with confidence.' },
    convenience: { label: 'Convenience stores', labelJa: 'コンビニ', icon: '🏪', description: 'Handle bags, heating, utensils, and checkout questions.' },
    shopping: { label: 'Shopping', labelJa: '買い物', icon: '🛍️', description: 'Sizes, colors, tax-free shopping, returns, and payment.' },
    transport: { label: 'Trains & transport', labelJa: '交通', icon: '🚆', description: 'Platforms, transfers, tickets, buses, taxis, and delays.' },
    hotel: { label: 'Hotels', labelJa: 'ホテル', icon: '🛎️', description: 'Check in, store luggage, solve room problems, and check out.' },
    everyday: { label: 'Everyday & sightseeing', labelJa: '日常・観光', icon: '🗺️', description: 'Greetings, directions, photos, tickets, and basic conversation.' },
    emergency: { label: 'Emergency & medical', labelJa: '緊急・医療', icon: '🆘', description: 'Get urgent help and communicate essential medical information.' }
};
const DEFAULT_SETTINGS = {
    showRomaji: true,
    showFurigana: true,
    audioRate: 0.95,
    audioSlowRate: 0.55,
    audioVoice: 'auto-female',
    textScale: 1,
    highContrast: false,
    reducedMotion: false,
    interfaceLanguage: 'en',
    reminders: false,
    offlineEssentials: true
};
const UI_TEXT = {
    en: {
        home: 'Home', situations: 'Situations', practice: 'Practice', saved: 'Saved', settings: 'Settings',
        needPhrase: 'I need a phrase now', searchPlaceholder: 'Search English, 日本語, kana, or romaji',
        todayFive: 'Today’s 5 phrases', quickSituations: 'Quick situations', recent: 'Recently viewed',
        emergency: 'Emergency phrases', say: 'What I can say', hear: 'What I may hear', all: 'All',
        essential: 'Essential only', phraseBuilder: 'Phrase builder', favorites: 'Favorites', noFavorites: 'No saved phrases yet.',
        play: 'Play', slow: 'Slow', show: 'Show phrase', copy: 'Copy', copied: 'Copied', close: 'Close',
        viewAll: 'View all', start: 'Start', continue: 'Continue', complete: 'Complete', next: 'Next',
        offline: 'Offline ready', online: 'Online', install: 'Install app', results: 'results',
        breakdown: 'Break it down', breakdownHelp: 'See how the words and grammar pieces build the phrase.',
        memoryPattern: 'Memory pattern', parts: 'parts', memoryAid: 'Memory aid'
    },
    ja: {
        home: 'ホーム', situations: '場面', practice: '練習', saved: '保存済み', settings: '設定',
        needPhrase: '今すぐフレーズを探す', searchPlaceholder: '英語・日本語・かな・ローマ字で検索',
        todayFive: '今日の5フレーズ', quickSituations: '場面から探す', recent: '最近見たフレーズ',
        emergency: '緊急フレーズ', say: '自分が言う', hear: '相手から聞く', all: 'すべて',
        essential: '必須のみ', phraseBuilder: 'フレーズ作成', favorites: 'お気に入り', noFavorites: '保存したフレーズはありません。',
        play: '再生', slow: 'ゆっくり', show: '大きく表示', copy: 'コピー', copied: 'コピーしました', close: '閉じる',
        viewAll: 'すべて見る', start: '開始', continue: '続ける', complete: '完了', next: '次へ',
        offline: 'オフライン対応', online: 'オンライン', install: 'アプリをインストール', results: '件',
        breakdown: 'フレーズの分解', breakdownHelp: '単語と文法の組み合わせを確認できます。',
        memoryPattern: '覚え方のパターン', parts: 'パーツ', memoryAid: '記憶のヒント'
    }
};
const PHRASE_INDEX = PHRASES.reduce((map, phrase) => {
    map[phrase.id] = phrase;
    return map;
}, {});
function getPhraseBreakdown(phrase) {
    const breakdown = phrase.breakdown || BREAKDOWNS[phrase.id];
    if (breakdown && breakdown.length)
        return breakdown;
    return [{
            japanese: phrase.japanese.replace(/[。！？?!]/g, ''),
            kana: phrase.kana.replace(/[。！？?!]/g, ''),
            romaji: phrase.romaji.replace(/[.!?]$/g, ''),
            meaning: phrase.english
        }];
}
function tr(locale, key) {
    return UI_TEXT[locale][key] || UI_TEXT.en[key] || key;
}
function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    }
    catch (_) {
        return fallback;
    }
}
function useStoredState(key, initial) {
    const [value, setValue] = useState(() => readStorage(key, initial));
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (_) { }
    }, [key, value]);
    return [value, setValue];
}
function normalize(value) {
    return value.toLocaleLowerCase().normalize('NFKC').replace(/[\s.,!?。、「」『』・ー'’]/g, '');
}
function searchPhrases(query, category, direction, essentialsOnly) {
    const needle = normalize(query);
    return PHRASES.filter((phrase) => {
        if (category !== 'all' && phrase.category !== category)
            return false;
        if (direction !== 'all' && phrase.direction !== direction)
            return false;
        if (essentialsOnly && !phrase.essential)
            return false;
        if (!needle)
            return true;
        const haystack = normalize([
            phrase.japanese, phrase.kana, phrase.romaji, phrase.english,
            phrase.subcategory, phrase.usageNote, phrase.tags.join(' '),
            getPhraseBreakdown(phrase).map((part) => [part.japanese, part.kana, part.romaji, part.meaning, part.note || ''].join(' ')).join(' '),
            CATEGORY_META[phrase.category].label
        ].join(' '));
        return haystack.includes(needle);
    });
}
function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i += 1) {
        hash ^= value.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return Math.abs(hash);
}
function seededShuffle(items, seed) {
    const copy = items.slice();
    let state = seed || 1;
    for (let i = copy.length - 1; i > 0; i -= 1) {
        state = (state * 1664525 + 1013904223) >>> 0;
        const j = state % (i + 1);
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}
function todayKey() {
    const now = new Date();
    return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
}
function dailyPhrases(priorities) {
    const essentials = PHRASES.filter((phrase) => phrase.essential && phrase.direction === 'traveler-says');
    const prioritized = essentials.filter((phrase) => priorities.length === 0 || priorities.includes(phrase.category));
    const pool = prioritized.length >= 5 ? prioritized : essentials;
    return seededShuffle(pool, hashString(todayKey())).slice(0, 5);
}
function calculateStreak(dates) {
    const unique = Array.from(new Set(dates)).sort().reverse();
    if (!unique.length)
        return 0;
    const cursor = new Date();
    const today = todayKey();
    const yesterday = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() - 1);
    const yesterdayKey = [yesterday.getFullYear(), String(yesterday.getMonth() + 1).padStart(2, '0'), String(yesterday.getDate()).padStart(2, '0')].join('-');
    if (unique[0] !== today && unique[0] !== yesterdayKey)
        return 0;
    let streak = 0;
    let expected = unique[0] === today ? new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate()) : yesterday;
    for (const date of unique) {
        const expectedKey = [expected.getFullYear(), String(expected.getMonth() + 1).padStart(2, '0'), String(expected.getDate()).padStart(2, '0')].join('-');
        if (date !== expectedKey)
            break;
        streak += 1;
        expected = new Date(expected.getFullYear(), expected.getMonth(), expected.getDate() - 1);
    }
    return streak;
}
const FEMALE_JAPANESE_VOICE_HINTS = [
    'nanami', 'haruka', 'kyoko', 'aoi', 'mayu', 'shiori', 'sakura',
    'ayumi', 'sayaka', 'misaki', 'mizuki', 'female', 'woman', '女性'
];
const MALE_JAPANESE_VOICE_HINTS = [
    'keita', 'daichi', 'naoki', 'masaru', 'haruto', 'otoya', 'ichiro', '男性'
];
const ENHANCED_VOICE_HINTS = ['natural', 'neural', 'enhanced', 'premium', 'siri', 'google', 'online', 'dragonhd'];
const SLOW_ATTACH_TO_PREVIOUS = new Set([
    'は', 'が', 'を', 'に', 'へ', 'で', 'と', 'も', 'の', 'か', 'ね', 'よ',
    'から', 'まで', 'より', 'だけ', 'しか', 'って', 'では', 'には', 'とは',
    'です', 'ます', 'ません', 'でした', 'ませんでした', 'ください'
]);
const SLOW_ATTACH_TO_NEXT = new Set(['お', 'ご', 'この', 'その', 'あの', 'どの']);
let speechRequestSequence = 0;
function voiceDescriptor(voice) {
    return `${voice.name} ${voice.voiceURI} ${voice.lang}`.toLocaleLowerCase().normalize('NFKC');
}
function voiceKey(voice) {
    return voice.voiceURI || `${voice.name}|${voice.lang}`;
}
function isJapaneseVoice(voice) {
    return /^ja(?:[-_]|$)/i.test(voice.lang) || /japanese|日本語/i.test(`${voice.name} ${voice.voiceURI}`);
}
function isRecognizedFemaleJapaneseVoice(voice) {
    const descriptor = voiceDescriptor(voice);
    return FEMALE_JAPANESE_VOICE_HINTS.some((hint) => descriptor.includes(hint));
}
function isRecognizedMaleJapaneseVoice(voice) {
    const descriptor = voiceDescriptor(voice);
    if (descriptor.includes('female'))
        return false;
    return MALE_JAPANESE_VOICE_HINTS.some((hint) => descriptor.includes(hint)) || /(^|[\s(_-])male([\s)_-]|$)/.test(descriptor);
}
function isEnhancedJapaneseVoice(voice) {
    const descriptor = voiceDescriptor(voice);
    return ENHANCED_VOICE_HINTS.some((hint) => descriptor.includes(hint));
}
function japaneseVoiceScore(voice) {
    let score = 0;
    if (/^ja[-_]jp$/i.test(voice.lang))
        score += 25;
    else if (/^ja/i.test(voice.lang))
        score += 15;
    if (isRecognizedFemaleJapaneseVoice(voice))
        score += 120;
    if (isRecognizedMaleJapaneseVoice(voice))
        score -= 180;
    if (isEnhancedJapaneseVoice(voice))
        score += 45;
    if (!voice.localService)
        score += 8;
    if (voice.default)
        score += 3;
    return score;
}
function getJapaneseVoices() {
    if (!('speechSynthesis' in window))
        return [];
    return window.speechSynthesis.getVoices()
        .filter(isJapaneseVoice)
        .sort((a, b) => japaneseVoiceScore(b) - japaneseVoiceScore(a) || a.name.localeCompare(b.name));
}
async function waitForJapaneseVoices() {
    const current = getJapaneseVoices();
    if (current.length || !('speechSynthesis' in window))
        return current;
    const synth = window.speechSynthesis;
    return new Promise((resolve) => {
        let settled = false;
        const finish = () => {
            if (settled)
                return;
            settled = true;
            if (typeof synth.removeEventListener === 'function')
                synth.removeEventListener('voiceschanged', finish);
            resolve(getJapaneseVoices());
        };
        if (typeof synth.addEventListener === 'function')
            synth.addEventListener('voiceschanged', finish);
        else
            synth.onvoiceschanged = finish;
        setTimeout(finish, 900);
    });
}
function selectJapaneseVoice(voices, preference) {
    if (!voices.length)
        return null;
    if (preference && preference !== 'auto-female') {
        const requested = voices.find((voice) => voiceKey(voice) === preference || voice.name === preference);
        if (requested)
            return requested;
    }
    return voices[0] || null;
}
function useJapaneseVoiceOptions() {
    const [voices, setVoices] = useState(() => getJapaneseVoices());
    useEffect(() => {
        if (!('speechSynthesis' in window))
            return;
        const synth = window.speechSynthesis;
        const refresh = () => setVoices(getJapaneseVoices());
        refresh();
        const shortRefresh = setTimeout(refresh, 120);
        const longRefresh = setTimeout(refresh, 700);
        if (typeof synth.addEventListener === 'function')
            synth.addEventListener('voiceschanged', refresh);
        else
            synth.onvoiceschanged = refresh;
        return () => {
            clearTimeout(shortRefresh);
            clearTimeout(longRefresh);
            if (typeof synth.removeEventListener === 'function')
                synth.removeEventListener('voiceschanged', refresh);
            else if (synth.onvoiceschanged === refresh)
                synth.onvoiceschanged = null;
        };
    }, []);
    return voices;
}
function prepareConversationalJapanese(text) {
    let prepared = text.replace(/\s+/g, ' ').replace(/[\/／]+/g, '、').trim();
    prepared = prepared.replace(/か[。.]+$/, 'か？');
    if (!/[。！？!?…]$/.test(prepared))
        prepared += /か$/.test(prepared) ? '？' : '。';
    return prepared;
}
function phraseSpeechChunks(phrase) {
    if (!phrase)
        return [];
    const raw = getPhraseBreakdown(phrase)
        .map((part) => part.japanese.replace(/[。！？!?…]/g, '').trim())
        .filter(Boolean);
    const chunks = [];
    let pending = '';
    raw.forEach((token) => {
        if (SLOW_ATTACH_TO_NEXT.has(token)) {
            pending += token;
            return;
        }
        const combined = `${pending}${token}`;
        pending = '';
        if (SLOW_ATTACH_TO_PREVIOUS.has(token) && chunks.length)
            chunks[chunks.length - 1] += token;
        else
            chunks.push(combined);
    });
    if (pending)
        chunks.push(pending);
    return chunks;
}
function prepareSlowJapanese(text, phrase) {
    var _a;
    const conversational = prepareConversationalJapanese(text);
    const terminal = ((_a = conversational.match(/[。！？!?…]+$/)) === null || _a === void 0 ? void 0 : _a[0]) || '。';
    const chunks = phraseSpeechChunks(phrase);
    if (chunks.length < 2)
        return conversational;
    return `${chunks.join('、')}${terminal}`;
}
function clampSpeechRate(value, fallback, min, max) {
    const numeric = Number.isFinite(value) ? value : fallback;
    return Math.max(min, Math.min(max, numeric));
}
async function speakJapanese(text, settings, slow, notify, phrase) {
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
        notify('Audio is not supported in this browser.');
        return;
    }
    const voices = await waitForJapaneseVoices();
    const voice = selectJapaneseVoice(voices, settings.audioVoice || 'auto-female');
    if (!voice) {
        notify('A Japanese text-to-speech voice is not installed on this device.');
        return;
    }
    const requestId = ++speechRequestSequence;
    const synth = window.speechSynthesis;
    const spokenText = slow ? prepareSlowJapanese(text, phrase) : prepareConversationalJapanese(text);
    const rate = slow
        ? clampSpeechRate(settings.audioSlowRate, 0.55, 0.35, 0.75)
        : clampSpeechRate(settings.audioRate, 0.95, 0.65, 1.25);
    const queue = (candidate, allowOfflineFallback) => {
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.lang = /^ja/i.test(candidate.lang) ? candidate.lang.replace('_', '-') : 'ja-JP';
        utterance.voice = candidate;
        utterance.rate = rate;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.onerror = (event) => {
            if (requestId !== speechRequestSequence || event.error === 'canceled' || event.error === 'interrupted')
                return;
            const fallback = allowOfflineFallback
                ? voices.find((item) => item.localService && voiceKey(item) !== voiceKey(candidate))
                : null;
            if (fallback) {
                notify(`Using the offline Japanese voice “${fallback.name}”.`);
                queue(fallback, false);
            }
            else
                notify(`Audio could not play with “${candidate.name}”. Choose another Japanese voice in Settings.`);
        };
        synth.speak(utterance);
    };
    synth.cancel();
    if (synth.paused)
        synth.resume();
    queue(voice, true);
}
function copyText(text, notify) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => notify('Copied to clipboard.')).catch(() => fallbackCopy());
    }
    else
        fallbackCopy();
    function fallbackCopy() {
        const area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        try {
            document.execCommand('copy');
            notify('Copied to clipboard.');
        }
        catch (_) {
            notify('Copy was not available.');
        }
        area.remove();
    }
}
function categoryLabel(category, locale) {
    return locale === 'ja' ? CATEGORY_META[category].labelJa : CATEGORY_META[category].label;
}
function JapaneseLine({ phrase, settings, size = 'normal' }) {
    const className = `japanese-line japanese-${size}`;
    if (settings.showFurigana && phrase.kana !== phrase.japanese.replace(/。|？|！|\?|!/g, '')) {
        return React.createElement("ruby", { className: className },
            React.createElement("span", null, phrase.japanese),
            React.createElement("rt", null, phrase.kana));
    }
    return React.createElement("div", { className: className }, phrase.japanese);
}
function Badge({ children, tone = 'neutral' }) {
    return React.createElement("span", { className: `badge badge-${tone}` }, children);
}
function IconButton({ label, onClick, children, active = false, className = '' }) {
    return React.createElement("button", { type: "button", className: `icon-button ${active ? 'is-active' : ''} ${className}`, "aria-label": label, title: label, onClick: onClick }, children);
}
function AudioControls({ text, phrase, settings, notify, compact = false }) {
    const spokenText = (phrase === null || phrase === void 0 ? void 0 : phrase.japanese) || text || '';
    return React.createElement("div", { className: `audio-controls ${compact ? 'compact' : ''}` },
        React.createElement("button", { type: "button", className: "audio-button", onClick: () => speakJapanese(spokenText, settings, false, notify, phrase), "aria-label": "Play at conversational speed" },
            React.createElement("span", { "aria-hidden": "true" }, "\u25B6"),
            compact ? '' : ' Conversation'),
        React.createElement("button", { type: "button", className: "audio-button secondary", onClick: () => speakJapanese(spokenText, settings, true, notify, phrase), "aria-label": "Play slowly with learning pauses" },
            React.createElement("span", { "aria-hidden": "true" }, "\u25F7"),
            compact ? '' : ' Slow practice'));
}
function JapaneseExerciseOption({ phrase, label, selected, correct, revealed, disabled, settings, notify, onSelect }) {
    const statusClass = revealed && correct ? 'correct' : revealed && selected ? 'incorrect' : '';
    const statusIcon = revealed && correct ? '✓' : revealed && selected ? '×' : '';
    return React.createElement("div", { className: `exercise-option ${selected ? 'selected' : ''} ${statusClass}` },
        React.createElement("button", { type: "button", className: "exercise-option-select", disabled: disabled, onClick: onSelect, "aria-label": `Choose ${phrase.japanese}` },
            React.createElement("span", { className: "option-key" }, label),
            React.createElement("span", { className: "exercise-option-copy" },
                React.createElement("strong", { lang: "ja" }, phrase.japanese),
                React.createElement("small", { className: "option-kana", lang: "ja" }, phrase.kana),
                settings.showRomaji && React.createElement("small", { className: "option-romaji" }, phrase.romaji)),
            React.createElement("i", { "aria-hidden": "true" }, statusIcon)),
        React.createElement("button", { type: "button", className: "exercise-option-audio", onClick: () => speakJapanese(phrase.japanese, settings, false, notify, phrase), "aria-label": `Play option audio: ${phrase.japanese}`, title: "Play option audio" },
            React.createElement("span", { "aria-hidden": "true" }, "\u25B6"),
            React.createElement("small", null, "Audio")));
}
function AudioFirstCategoryOption({ phrase, label, selected, correct, revealed, disabled, settings, notify, onSelect }) {
    const [showReading, setShowReading] = useState(false);
    const readingVisible = showReading;
    const statusClass = revealed && correct ? 'correct' : revealed && selected ? 'incorrect' : '';
    const statusText = revealed && correct ? 'Correct answer' : revealed && selected ? 'Your choice' : revealed ? 'Other option' : 'Listen first';
    const labelText = String(label);
    return React.createElement("article", { className: `audio-first-option ${selected ? 'selected' : ''} ${statusClass}` },
        React.createElement("div", { className: "audio-first-option-topline" },
            React.createElement("span", { className: "option-key" }, label),
            React.createElement("span", { className: "audio-first-status" }, statusText),
            revealed && (correct || selected) && React.createElement("span", { className: "audio-first-status-icon", "aria-hidden": "true" }, correct ? '✓' : '×')),
        React.createElement("button", { type: "button", className: "audio-first-play", onClick: () => speakJapanese(phrase.japanese, settings, false, notify, phrase), "aria-label": revealed ? `Play option ${labelText}: ${phrase.japanese}` : `Play category drill option ${labelText}` },
            React.createElement("span", { className: "audio-first-play-icon", "aria-hidden": "true" }, "\u25B6"),
            React.createElement("span", null,
                React.createElement("strong", null,
                    "Play option ",
                    label),
                React.createElement("small", null, "Conversation speed"))),
        readingVisible && React.createElement("div", { className: "audio-first-reading", "aria-label": `Reading for option ${labelText}` },
            React.createElement("span", { className: "option-kana", lang: "ja" }, phrase.kana),
            React.createElement("span", { className: "option-romaji" }, phrase.romaji)),
        React.createElement("div", { className: "audio-first-option-actions" },
            React.createElement("button", { type: "button", className: "reading-reveal-button", "aria-expanded": readingVisible, onClick: () => setShowReading((value) => !value) }, readingVisible ? 'Hide reading' : 'Reveal kana + romaji'),
            React.createElement("button", { type: "button", className: "audio-first-select", disabled: disabled, onClick: onSelect, "aria-label": `Choose category drill option ${labelText}` }, revealed && correct ? 'Correct' : revealed && selected ? 'Selected' : revealed ? 'Not selected' : `Choose ${label}`)));
}
function AnswerPhraseSummary({ label, phrase, settings, notify }) {
    return React.createElement("div", { className: "answer-phrase-card" },
        React.createElement("div", { className: "answer-phrase-label" }, label),
        React.createElement("div", { className: "answer-phrase-row" },
            React.createElement("div", null,
                React.createElement("strong", { className: "answer-japanese", lang: "ja" }, phrase.japanese),
                React.createElement("small", { className: "answer-kana", lang: "ja" }, phrase.kana),
                settings.showRomaji && React.createElement("small", { className: "answer-romaji" }, phrase.romaji)),
            React.createElement("button", { type: "button", className: "answer-audio-button", onClick: () => speakJapanese(phrase.japanese, settings, false, notify, phrase), "aria-label": `Play answer audio: ${phrase.japanese}` },
                React.createElement("span", { "aria-hidden": "true" }, "\u25B6"),
                " Hear it")),
        React.createElement("p", { className: "answer-translation" }, phrase.english));
}
function ExerciseFeedback({ correct, selectedPhrase, correctPhrase, explanation, nextLabel, onNext, settings, notify }) {
    return React.createElement("div", { className: `answer-explanation ${correct ? 'correct' : 'incorrect'}`, role: "status", "aria-live": "polite" },
        React.createElement("div", { className: "answer-feedback-content" },
            React.createElement("strong", { className: "answer-outcome" }, correct ? 'Good choice' : 'Not quite'),
            React.createElement("div", { className: `answer-phrase-grid ${correct ? 'single' : ''}` },
                React.createElement(AnswerPhraseSummary, { label: correct ? 'Answer meaning' : 'You chose', phrase: selectedPhrase, settings: settings, notify: notify }),
                !correct && React.createElement(AnswerPhraseSummary, { label: "Correct response", phrase: correctPhrase, settings: settings, notify: notify })),
            explanation && React.createElement("p", { className: "answer-reason" }, explanation)),
        React.createElement("button", { type: "button", className: "button primary answer-next", onClick: onNext },
            nextLabel,
            " \u2192"));
}
function PhraseBreakdown({ phrase, settings, locale, compact = false }) {
    const parts = getPhraseBreakdown(phrase);
    const memoryPattern = parts.map((part) => part.meaning).join(' + ');
    return React.createElement("section", { className: `breakdown-section ${compact ? 'breakdown-compact' : ''}`, "aria-label": tr(locale, 'breakdown') },
        React.createElement("div", { className: "breakdown-header" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, tr(locale, 'memoryAid')),
                React.createElement("h3", null, tr(locale, 'breakdown')),
                React.createElement("p", null, tr(locale, 'breakdownHelp'))),
            React.createElement("span", { className: "breakdown-count" },
                parts.length,
                " ",
                tr(locale, 'parts'))),
        React.createElement("div", { className: "breakdown-grid" }, parts.map((part, index) => {
            const showKana = part.kana !== part.japanese;
            return React.createElement("article", { className: "breakdown-part", key: `${phrase.id}-part-${index}` },
                React.createElement("div", { className: "breakdown-part-topline" },
                    React.createElement("span", { className: "breakdown-number", "aria-hidden": "true" }, index + 1),
                    React.createElement("span", { className: "breakdown-japanese", lang: "ja" }, part.japanese)),
                (showKana || settings.showRomaji) && React.createElement("div", { className: "breakdown-reading" },
                    showKana && React.createElement("span", { lang: "ja" }, part.kana),
                    settings.showRomaji && React.createElement("em", null, part.romaji)),
                React.createElement("div", { className: "breakdown-meaning" }, part.meaning),
                part.note && React.createElement("p", { className: "breakdown-note" }, part.note));
        })),
        React.createElement("div", { className: "memory-pattern" },
            React.createElement("strong", null, tr(locale, 'memoryPattern')),
            React.createElement("span", null, memoryPattern)));
}
function CategoryDrillPhraseReview({ label, phrase, settings, notify, tone = 'neutral' }) {
    const reviewSettings = { ...settings, showRomaji: true };
    return React.createElement("article", { className: `category-drill-review-card review-${tone}` },
        React.createElement("div", { className: "category-drill-review-topline" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, label),
                React.createElement("div", { className: "badge-row" },
                    React.createElement(Badge, { tone: phrase.direction === 'traveler-hears' ? 'listen' : 'say' }, phrase.direction === 'traveler-hears' ? 'You may hear it' : 'You can say it'),
                    React.createElement(Badge, { tone: phrase.politeness === 'emergency' ? 'danger' : 'neutral' }, phrase.politeness.replace('-', ' ')))),
            React.createElement(AudioControls, { phrase: phrase, settings: reviewSettings, notify: notify })),
        React.createElement("div", { className: "category-drill-review-phrase" },
            React.createElement(JapaneseLine, { phrase: phrase, settings: reviewSettings, size: "large" }),
            React.createElement("div", { className: "category-drill-review-kana", lang: "ja" }, phrase.kana),
            React.createElement("div", { className: "category-drill-review-romaji" }, phrase.romaji)),
        React.createElement("section", { className: "category-drill-meaning", "aria-label": "Phrase meaning" },
            React.createElement("div", { className: "eyebrow" }, "Meaning"),
            React.createElement("p", null, phrase.english)),
        React.createElement(PhraseBreakdown, { phrase: phrase, settings: reviewSettings, locale: settings.interfaceLanguage, compact: true }),
        React.createElement("div", { className: "usage-note category-drill-usage" },
            React.createElement("strong", null, "When to use it"),
            React.createElement("p", null, phrase.usageNote)));
}
function CategoryDrillFeedback({ correct, selectedPhrase, correctPhrase, nextLabel, onNext, settings, notify }) {
    return React.createElement("section", { className: `category-drill-feedback ${correct ? 'correct' : 'incorrect'}`, "aria-label": "Category drill answer review" },
        React.createElement("div", { className: "category-drill-feedback-heading", role: "status", "aria-live": "polite" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Answer review"),
                React.createElement("h3", null, correct ? 'Good choice' : 'Not quite—compare both phrases'),
                React.createElement("p", null, correct ? 'Review the meaning, phrase components, and usage before continuing.' : 'Start with what you selected, then study the correct phrase and the difference in meaning and use.'))),
        React.createElement("div", { className: "category-drill-review-stack" },
            React.createElement(CategoryDrillPhraseReview, { label: correct ? 'Selected answer' : 'You selected', phrase: selectedPhrase, settings: settings, notify: notify, tone: correct ? 'correct' : 'incorrect' }),
            !correct && React.createElement(CategoryDrillPhraseReview, { label: "Correct answer", phrase: correctPhrase, settings: settings, notify: notify, tone: "correct" })),
        React.createElement("div", { className: "category-drill-next-row" },
            React.createElement("button", { type: "button", className: "button primary answer-next", onClick: onNext },
                nextLabel,
                " \u2192")));
}
function PhraseCard({ phrase, settings, locale, favorite, onFavorite, onOpen, onShow, notify, compact = false }) {
    return React.createElement("article", { className: `phrase-card ${phrase.category === 'emergency' ? 'emergency-card' : ''} ${compact ? 'compact-card' : ''}` },
        React.createElement("button", { type: "button", className: "phrase-card-main", onClick: () => onOpen(phrase.id), "aria-label": `Open ${phrase.english}` },
            React.createElement("div", { className: "phrase-card-topline" },
                React.createElement(Badge, { tone: phrase.direction === 'traveler-hears' ? 'listen' : 'say' }, phrase.direction === 'traveler-hears' ? tr(locale, 'hear') : tr(locale, 'say')),
                phrase.essential && React.createElement(Badge, { tone: "essential" }, "Essential")),
            React.createElement(JapaneseLine, { phrase: phrase, settings: settings, size: compact ? 'normal' : 'large' }),
            settings.showRomaji && React.createElement("div", { className: "romaji" }, phrase.romaji),
            React.createElement("div", { className: "english" }, phrase.english),
            !compact && React.createElement("div", { className: "phrase-card-info" },
                React.createElement("div", { className: "phrase-meta" },
                    CATEGORY_META[phrase.category].icon,
                    " ",
                    categoryLabel(phrase.category, locale),
                    " \u00B7 ",
                    phrase.subcategory),
                React.createElement("div", { className: "phrase-breakdown-hint" },
                    React.createElement("span", { "aria-hidden": "true" }, "+"),
                    getPhraseBreakdown(phrase).length,
                    " ",
                    tr(locale, 'parts')))),
        React.createElement("div", { className: "phrase-card-actions" },
            React.createElement(AudioControls, { phrase: phrase, settings: settings, notify: notify, compact: true }),
            React.createElement(IconButton, { label: favorite ? 'Remove from saved phrases' : 'Save phrase', active: favorite, onClick: () => onFavorite(phrase.id) }, favorite ? '★' : '☆'),
            React.createElement(IconButton, { label: "Show phrase full screen", onClick: () => onShow(phrase.id) }, "\u2197")));
}
function EmptyState({ icon, title, body }) {
    return React.createElement("div", { className: "empty-state" },
        React.createElement("div", { className: "empty-icon", "aria-hidden": "true" }, icon),
        React.createElement("h3", null, title),
        React.createElement("p", null, body));
}
function SectionHeader({ eyebrow, title, actionLabel, onAction }) {
    return React.createElement("div", { className: "section-header" },
        React.createElement("div", null,
            eyebrow && React.createElement("div", { className: "eyebrow" }, eyebrow),
            React.createElement("h2", null, title)),
        actionLabel && onAction && React.createElement("button", { type: "button", className: "text-button", onClick: onAction },
            actionLabel,
            " ",
            React.createElement("span", { "aria-hidden": "true" }, "\u2192")));
}
function Modal({ children, onClose, label, className = '' }) {
    useEffect(() => {
        const handler = (event) => { if (event.key === 'Escape')
            onClose(); };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [onClose]);
    return React.createElement("div", { className: `modal-backdrop ${className}`, role: "presentation", onMouseDown: (event) => { if (event.target === event.currentTarget)
            onClose(); } },
        React.createElement("div", { className: "modal-shell", role: "dialog", "aria-modal": "true", "aria-label": label }, children));
}
function PhraseDetail({ phrase, settings, locale, favorite, onFavorite, onClose, onShow, onOpen, notify }) {
    const replies = (phrase.replyIds || []).map((id) => PHRASE_INDEX[id]).filter(Boolean);
    return React.createElement(Modal, { onClose: onClose, label: phrase.english, className: "detail-modal" },
        React.createElement("div", { className: "modal-header" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" },
                    CATEGORY_META[phrase.category].icon,
                    " ",
                    categoryLabel(phrase.category, locale),
                    " \u00B7 ",
                    phrase.subcategory),
                React.createElement("div", { className: "badge-row" },
                    React.createElement(Badge, { tone: phrase.direction === 'traveler-hears' ? 'listen' : 'say' }, phrase.direction === 'traveler-hears' ? tr(locale, 'hear') : tr(locale, 'say')),
                    React.createElement(Badge, { tone: phrase.politeness === 'emergency' ? 'danger' : 'neutral' }, phrase.politeness.replace('-', ' ')),
                    phrase.essential && React.createElement(Badge, { tone: "essential" }, "Essential"))),
            React.createElement(IconButton, { label: "Close", onClick: onClose }, "\u00D7")),
        React.createElement("div", { className: "detail-content" },
            React.createElement("div", { className: "detail-japanese" },
                React.createElement(JapaneseLine, { phrase: phrase, settings: settings, size: "hero" })),
            React.createElement("div", { className: "detail-reading" }, phrase.kana),
            settings.showRomaji && React.createElement("div", { className: "detail-romaji" }, phrase.romaji),
            React.createElement("div", { className: "detail-english" }, phrase.english),
            React.createElement(AudioControls, { phrase: phrase, settings: settings, notify: notify }),
            React.createElement(PhraseBreakdown, { phrase: phrase, settings: settings, locale: locale }),
            React.createElement("div", { className: "usage-note" },
                React.createElement("strong", null, "When to use it"),
                React.createElement("p", null, phrase.usageNote)),
            phrase.category === 'emergency' && React.createElement("div", { className: "medical-notice" },
                React.createElement("strong", null, "Emergency communication aid"),
                React.createElement("p", null, "This phrasebook does not replace professional medical advice or emergency services. In Japan, call 119 for an ambulance or fire emergency and 110 for police.")),
            replies.length > 0 && React.createElement("section", { className: "reply-section" },
                React.createElement("h3", null, "Simple replies"),
                React.createElement("p", null, "Tap a reply to open it."),
                React.createElement("div", { className: "reply-list" }, replies.map((reply) => React.createElement("button", { type: "button", key: reply.id, className: "reply-button", onClick: () => onOpen(reply.id) },
                    React.createElement("span", null, reply.japanese),
                    React.createElement("small", null, reply.english)))))),
        React.createElement("div", { className: "modal-footer action-grid" },
            React.createElement("button", { type: "button", className: "button secondary", onClick: () => onFavorite(phrase.id) }, favorite ? '★ Saved' : '☆ Save'),
            React.createElement("button", { type: "button", className: "button secondary", onClick: () => copyText(`${phrase.japanese}\n${phrase.english}`, notify) },
                "\u29C9 ",
                tr(locale, 'copy')),
            React.createElement("button", { type: "button", className: "button primary", onClick: () => onShow(phrase.id) },
                "\u2197 ",
                tr(locale, 'show'))));
}
function FullScreenPhrase({ phrase, settings, locale, onClose, onNavigate, notify }) {
    useEffect(() => {
        const handler = (event) => {
            if (event.key === 'Escape')
                onClose();
            if (event.key === 'ArrowLeft')
                onNavigate(-1);
            if (event.key === 'ArrowRight')
                onNavigate(1);
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [onClose, onNavigate]);
    return React.createElement("div", { className: `show-phrase-screen ${phrase.category === 'emergency' ? 'show-emergency' : ''}`, role: "dialog", "aria-modal": "true", "aria-label": `Show ${phrase.english}` },
        React.createElement("div", { className: "show-topbar" },
            React.createElement("div", { className: "show-category" },
                CATEGORY_META[phrase.category].icon,
                " ",
                categoryLabel(phrase.category, locale)),
            React.createElement("button", { type: "button", className: "show-close", onClick: onClose, "aria-label": "Close full-screen phrase" }, "\u00D7")),
        React.createElement("div", { className: "show-content" },
            React.createElement("div", { className: "show-direction" }, phrase.direction === 'traveler-hears' ? 'You may hear' : 'Show or say this'),
            React.createElement(JapaneseLine, { phrase: phrase, settings: { ...settings, showFurigana: false }, size: "hero" }),
            settings.showFurigana && React.createElement("div", { className: "show-kana" }, phrase.kana),
            settings.showRomaji && React.createElement("div", { className: "show-romaji" }, phrase.romaji),
            React.createElement("div", { className: "show-english" }, phrase.english),
            React.createElement(AudioControls, { phrase: phrase, settings: settings, notify: notify })),
        React.createElement("div", { className: "show-nav" },
            React.createElement("button", { type: "button", onClick: () => onNavigate(-1), "aria-label": "Previous related phrase" },
                "\u2190 ",
                React.createElement("span", null, "Previous")),
            React.createElement("button", { type: "button", onClick: () => copyText(`${phrase.japanese}\n${phrase.english}`, notify), "aria-label": "Copy phrase" },
                "\u29C9 ",
                React.createElement("span", null, "Copy")),
            React.createElement("button", { type: "button", onClick: () => onNavigate(1), "aria-label": "Next related phrase" },
                React.createElement("span", null, "Next"),
                " \u2192")));
}
function SearchOverlay({ settings, locale, favorites, onFavorite, onOpen, onShow, onClose, notify }) {
    const [query, setQuery] = useState('');
    const [direction, setDirection] = useState('all');
    const [essentialOnly, setEssentialOnly] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => { if (inputRef.current)
        inputRef.current.focus(); }, []);
    const results = useMemo(() => searchPhrases(query, 'all', direction, essentialOnly).slice(0, 60), [query, direction, essentialOnly]);
    return React.createElement(Modal, { onClose: onClose, label: "Search phrases", className: "search-modal" },
        React.createElement("div", { className: "search-header" },
            React.createElement("div", { className: "search-field large-search" },
                React.createElement("span", { "aria-hidden": "true" }, "\u2315"),
                React.createElement("input", { id: "global-search-input", ref: inputRef, value: query, onChange: (event) => setQuery(event.target.value), placeholder: tr(locale, 'searchPlaceholder'), "aria-label": "Search phrases" }),
                React.createElement("button", { type: "button", onClick: () => query ? setQuery('') : onClose(), "aria-label": query ? 'Clear search' : 'Close search' }, query ? '×' : 'Done')),
            React.createElement("div", { className: "filter-row" },
                React.createElement("div", { className: "segmented-control", role: "group", "aria-label": "Phrase direction" },
                    React.createElement("button", { type: "button", className: direction === 'all' ? 'active' : '', onClick: () => setDirection('all') }, tr(locale, 'all')),
                    React.createElement("button", { type: "button", className: direction === 'traveler-says' ? 'active' : '', onClick: () => setDirection('traveler-says') }, tr(locale, 'say')),
                    React.createElement("button", { type: "button", className: direction === 'traveler-hears' ? 'active' : '', onClick: () => setDirection('traveler-hears') }, tr(locale, 'hear'))),
                React.createElement("label", { className: "check-filter" },
                    React.createElement("input", { type: "checkbox", checked: essentialOnly, onChange: (event) => setEssentialOnly(event.target.checked) }),
                    React.createElement("span", null, tr(locale, 'essential'))))),
        React.createElement("div", { className: "search-results" },
            React.createElement("div", { className: "result-count" },
                results.length,
                " ",
                tr(locale, 'results'),
                results.length === 60 ? ' shown' : ''),
            results.length ? results.map((phrase) => React.createElement(PhraseCard, { key: phrase.id, phrase: phrase, settings: settings, locale: locale, favorite: favorites.includes(phrase.id), onFavorite: onFavorite, onOpen: onOpen, onShow: onShow, notify: notify, compact: true })) : React.createElement(EmptyState, { icon: "\u2315", title: "No matching phrases", body: "Try a broader English word, Japanese text, kana, or romaji." })));
}
function AppHeader({ locale, online, streak, onSearch }) {
    return React.createElement("header", { className: "app-header" },
        React.createElement("div", { className: "brand-lockup" },
            React.createElement("div", { className: "brand-mark", "aria-hidden": "true" }, "\u65C5"),
            React.createElement("div", null,
                React.createElement("div", { className: "brand-name" }, "Nihongo Trip"),
                React.createElement("div", { className: "brand-subtitle" }, "\u65E5\u672C\u8A9E\u3092\u3001\u65C5\u306E\u5473\u65B9\u306B\u3002"))),
        React.createElement("div", { className: "header-actions" },
            streak > 0 && React.createElement("div", { className: "streak-pill", title: "Practice streak" },
                React.createElement("span", { "aria-hidden": "true" }, "\uD83D\uDD25"),
                " ",
                streak),
            React.createElement("div", { className: `status-pill ${online ? 'online' : 'offline'}` },
                React.createElement("span", { "aria-hidden": "true" }, online ? '●' : '↓'),
                " ",
                online ? tr(locale, 'online') : tr(locale, 'offline')),
            React.createElement(IconButton, { label: "Search phrases", onClick: onSearch, className: "header-search" }, "\u2315")));
}
function BottomNav({ tab, onChange, locale }) {
    const items = [
        { id: 'home', icon: '⌂', label: tr(locale, 'home') },
        { id: 'situations', icon: '▦', label: tr(locale, 'situations') },
        { id: 'practice', icon: '◉', label: tr(locale, 'practice') },
        { id: 'saved', icon: '☆', label: tr(locale, 'saved') },
        { id: 'settings', icon: '⚙', label: tr(locale, 'settings') }
    ];
    return React.createElement("nav", { className: "bottom-nav", "aria-label": "Primary navigation" }, items.map((item) => React.createElement("button", { type: "button", key: item.id, className: tab === item.id ? 'active' : '', onClick: () => onChange(item.id), "aria-current": tab === item.id ? 'page' : undefined },
        React.createElement("span", { className: "nav-icon", "aria-hidden": "true" }, item.icon),
        React.createElement("span", null, item.label))));
}
function Onboarding({ initialSettings, onComplete }) {
    const [step, setStep] = useState(0);
    const [level, setLevel] = useState('none');
    const [priorities, setPriorities] = useState(['restaurant', 'convenience', 'transport']);
    const [showRomaji, setShowRomaji] = useState(initialSettings.showRomaji);
    const [reminders, setReminders] = useState(initialSettings.reminders);
    const [offlineEssentials, setOfflineEssentials] = useState(true);
    const togglePriority = (category) => setPriorities((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
    const finish = () => onComplete({ ...initialSettings, showRomaji, reminders, offlineEssentials }, priorities);
    return React.createElement("main", { className: "onboarding" },
        React.createElement("div", { className: "onboarding-art", "aria-hidden": "true" },
            React.createElement("div", { className: "sun-disc" }),
            React.createElement("div", { className: "route-line" },
                React.createElement("span", null, "\u6771\u4EAC"),
                React.createElement("i", null),
                React.createElement("span", null, "\u4EAC\u90FD"),
                React.createElement("i", null),
                React.createElement("span", null, "\u5927\u962A"))),
        React.createElement("section", { className: "onboarding-card" },
            React.createElement("div", { className: "onboarding-brand" },
                React.createElement("div", { className: "brand-mark" }, "\u65C5"),
                React.createElement("span", null, "Nihongo Trip")),
            React.createElement("div", { className: "progress-dots", "aria-label": `Step ${step + 1} of 3` }, [0, 1, 2].map((item) => React.createElement("span", { key: item, className: item <= step ? 'active' : '' }))),
            step === 0 && React.createElement("div", { className: "onboarding-step" },
                React.createElement("div", { className: "eyebrow" }, "Practical Japanese for your trip"),
                React.createElement("h1", null,
                    "Say what you need.",
                    React.createElement("br", null),
                    "Understand what you hear."),
                React.createElement("p", null, "Fast, natural phrases for restaurants, shops, trains, hotels, and the moments when you need help."),
                React.createElement("fieldset", { className: "choice-list" },
                    React.createElement("legend", null, "How much Japanese do you know?"),
                    [['none', 'None yet', 'Start with the essentials'], ['some', 'A little', 'I know a few words and greetings'], ['basic', 'Basic', 'I can manage simple exchanges']].map((choice) => React.createElement("label", { key: choice[0], className: `choice-card ${level === choice[0] ? 'selected' : ''}` },
                        React.createElement("input", { type: "radio", name: "level", value: choice[0], checked: level === choice[0], onChange: () => setLevel(choice[0]) }),
                        React.createElement("span", null,
                            React.createElement("strong", null, choice[1]),
                            React.createElement("small", null, choice[2])),
                        React.createElement("b", { "aria-hidden": "true" }, "\u2713"))))),
            step === 1 && React.createElement("div", { className: "onboarding-step" },
                React.createElement("div", { className: "eyebrow" }, "Personalize your phrasebook"),
                React.createElement("h1", null, "Which situations matter most?"),
                React.createElement("p", null, "Choose as many as you like. These categories will shape your daily practice."),
                React.createElement("div", { className: "priority-grid" }, Object.keys(CATEGORY_META).map((category) => React.createElement("button", { type: "button", key: category, className: priorities.includes(category) ? 'selected' : '', onClick: () => togglePriority(category) },
                    React.createElement("span", { "aria-hidden": "true" }, CATEGORY_META[category].icon),
                    React.createElement("strong", null, CATEGORY_META[category].label),
                    React.createElement("i", { "aria-hidden": "true" }, priorities.includes(category) ? '✓' : '+'))))),
            step === 2 && React.createElement("div", { className: "onboarding-step" },
                React.createElement("div", { className: "eyebrow" }, "Make it comfortable"),
                React.createElement("h1", null, "Set up your travel view."),
                React.createElement("p", null, "You can change these options at any time in Settings."),
                React.createElement("div", { className: "preference-list" },
                    React.createElement("label", { className: "preference-row" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Show romaji"),
                            React.createElement("small", null, "Display pronunciation using the Latin alphabet")),
                        React.createElement("input", { className: "switch", type: "checkbox", checked: showRomaji, onChange: (event) => setShowRomaji(event.target.checked) })),
                    React.createElement("label", { className: "preference-row" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Daily practice reminder"),
                            React.createElement("small", null, "A gentle prompt to review five phrases")),
                        React.createElement("input", { className: "switch", type: "checkbox", checked: reminders, onChange: (event) => setReminders(event.target.checked) })),
                    React.createElement("label", { className: "preference-row" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Essential content offline"),
                            React.createElement("small", null, "Keep core phrases and progress on this device")),
                        React.createElement("input", { className: "switch", type: "checkbox", checked: offlineEssentials, onChange: (event) => setOfflineEssentials(event.target.checked) }))),
                React.createElement("div", { className: "offline-callout" },
                    React.createElement("span", { "aria-hidden": "true" }, "\u2193"),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Built for spotty travel Wi-Fi"),
                        React.createElement("p", null, "The phrase library, favorites, and practice progress are stored locally.")))),
            React.createElement("div", { className: "onboarding-actions" },
                step > 0 ? React.createElement("button", { type: "button", className: "button secondary", onClick: () => setStep(step - 1) }, "Back") : React.createElement("button", { type: "button", className: "text-button", onClick: finish }, "Skip setup"),
                step < 2 ? React.createElement("button", { type: "button", className: "button primary", onClick: () => setStep(step + 1) },
                    "Continue ",
                    React.createElement("span", { "aria-hidden": "true" }, "\u2192")) : React.createElement("button", { type: "button", className: "button primary", onClick: finish },
                    "Start exploring ",
                    React.createElement("span", { "aria-hidden": "true" }, "\u2192")))));
}
function HomePage({ settings, locale, favorites, recent, priorities, streak, onFavorite, onOpen, onShow, onSearch, onCategory, onTab, notify }) {
    const daily = useMemo(() => dailyPhrases(priorities), [priorities.join('|')]);
    const recentPhrases = recent.map((id) => PHRASE_INDEX[id]).filter(Boolean).slice(0, 3);
    const categories = Object.keys(CATEGORY_META).filter((category) => category !== 'emergency');
    return React.createElement("div", { className: "page home-page" },
        React.createElement("section", { className: "hero-card" },
            React.createElement("div", { className: "hero-copy" },
                React.createElement(Badge, { tone: "light" }, "\u65C5\u5148\u3067\u3059\u3050\u4F7F\u3048\u308B"),
                React.createElement("h1", null,
                    "Japanese for the",
                    React.createElement("br", null),
                    React.createElement("em", null, "moment you\u2019re in.")),
                React.createElement("p", null, "Find a natural phrase, hear it, then show it full screen\u2014before the train doors close or the cashier asks again."),
                React.createElement("div", { className: "hero-actions" },
                    React.createElement("button", { type: "button", className: "button hero-primary", onClick: onSearch },
                        React.createElement("span", { "aria-hidden": "true" }, "\u2315"),
                        " ",
                        tr(locale, 'needPhrase')),
                    React.createElement("button", { type: "button", className: "button hero-secondary", onClick: () => onTab('practice') }, "Practice 5 minutes"))),
            React.createElement("div", { className: "hero-visual", "aria-hidden": "true" },
                React.createElement("div", { className: "ticket-card" },
                    React.createElement("div", { className: "ticket-top" },
                        React.createElement("span", null, "PHRASE PASS"),
                        React.createElement("strong", null, "\u6771\u4EAC \u2192 \u4EAC\u90FD")),
                    React.createElement("div", { className: "ticket-japanese" }, "\u3059\u307F\u307E\u305B\u3093"),
                    React.createElement("div", { className: "ticket-english" }, "Excuse me"),
                    React.createElement("div", { className: "ticket-line" }),
                    React.createElement("div", { className: "ticket-footer" },
                        React.createElement("span", null, "\u805E\u304F \u00B7 \u8A71\u3059 \u00B7 \u65C5\u3059\u308B"),
                        React.createElement("b", null, "01"))),
                React.createElement("div", { className: "stamp stamp-one" }, "\u8A71"),
                React.createElement("div", { className: "stamp stamp-two" }, "\u65C5"))),
        React.createElement("section", { className: "home-status-grid" },
            React.createElement("button", { type: "button", className: "status-card streak-card", onClick: () => onTab('practice') },
                React.createElement("span", { className: "status-icon" }, "\uD83D\uDD25"),
                React.createElement("div", null,
                    React.createElement("strong", null,
                        streak || 0,
                        " day",
                        streak === 1 ? '' : 's'),
                    React.createElement("small", null, "Current practice streak")),
                React.createElement("span", { "aria-hidden": "true" }, "\u2192")),
            React.createElement("button", { type: "button", className: "status-card saved-card", onClick: () => onTab('saved') },
                React.createElement("span", { className: "status-icon" }, "\u2605"),
                React.createElement("div", null,
                    React.createElement("strong", null,
                        favorites.length,
                        " saved"),
                    React.createElement("small", null, "Your pocket phrase list")),
                React.createElement("span", { "aria-hidden": "true" }, "\u2192")),
            React.createElement("button", { type: "button", className: "status-card offline-card", onClick: () => onTab('settings') },
                React.createElement("span", { className: "status-icon" }, "\u2193"),
                React.createElement("div", null,
                    React.createElement("strong", null, "Offline ready"),
                    React.createElement("small", null, "Core content stays available")),
                React.createElement("span", { "aria-hidden": "true" }, "\u2192"))),
        React.createElement("section", { className: "content-section" },
            React.createElement(SectionHeader, { eyebrow: "Find by context", title: tr(locale, 'quickSituations'), actionLabel: tr(locale, 'viewAll'), onAction: () => onTab('situations') }),
            React.createElement("div", { className: "category-grid" }, categories.map((category) => React.createElement("button", { type: "button", key: category, className: `category-card category-${category}`, onClick: () => onCategory(category) },
                React.createElement("span", { className: "category-icon", "aria-hidden": "true" }, CATEGORY_META[category].icon),
                React.createElement("div", null,
                    React.createElement("strong", null, categoryLabel(category, locale)),
                    React.createElement("p", null, CATEGORY_META[category].description),
                    React.createElement("small", null,
                        PHRASES.filter((phrase) => phrase.category === category).length,
                        " phrases")),
                React.createElement("span", { className: "category-arrow", "aria-hidden": "true" }, "\u2197"))))),
        React.createElement("section", { className: "content-section daily-section" },
            React.createElement(SectionHeader, { eyebrow: "Two-minute review", title: tr(locale, 'todayFive'), actionLabel: "Practice these", onAction: () => onTab('practice') }),
            React.createElement("div", { className: "horizontal-phrases" }, daily.map((phrase, index) => React.createElement("div", { className: "daily-card", key: phrase.id },
                React.createElement("div", { className: "daily-number" },
                    "0",
                    index + 1),
                React.createElement(PhraseCard, { phrase: phrase, settings: settings, locale: locale, favorite: favorites.includes(phrase.id), onFavorite: onFavorite, onOpen: onOpen, onShow: onShow, notify: notify, compact: true }))))),
        React.createElement("section", { className: "emergency-banner" },
            React.createElement("div", { className: "emergency-symbol", "aria-hidden": "true" }, "\uFF0B"),
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Keep this within one tap"),
                React.createElement("h2", null, tr(locale, 'emergency')),
                React.createElement("p", null, "Police, ambulance, hospital, allergy, and lost-item phrases in large display mode.")),
            React.createElement("button", { type: "button", className: "button emergency-button", onClick: () => onCategory('emergency') },
                "Open emergency phrases ",
                React.createElement("span", { "aria-hidden": "true" }, "\u2192"))),
        recentPhrases.length > 0 && React.createElement("section", { className: "content-section" },
            React.createElement(SectionHeader, { title: tr(locale, 'recent'), actionLabel: tr(locale, 'viewAll'), onAction: () => onTab('saved') }),
            React.createElement("div", { className: "recent-grid" }, recentPhrases.map((phrase) => React.createElement(PhraseCard, { key: phrase.id, phrase: phrase, settings: settings, locale: locale, favorite: favorites.includes(phrase.id), onFavorite: onFavorite, onOpen: onOpen, onShow: onShow, notify: notify, compact: true })))));
}
function builderBreakdown(template, value, built) {
    const exact = PHRASES.find((phrase) => normalize(phrase.japanese) === normalize(built.japanese));
    if (exact)
        return getPhraseBreakdown(exact);
    const part = (japanese, kana, romaji, meaning, note) => ({ japanese, kana, romaji, meaning, ...(note ? { note } : {}) });
    const wa = part('は', 'は', 'wa', 'topic marker', 'Written は but pronounced "wa"; marks what the sentence is about.');
    const o = part('を', 'を', 'o', 'object marker', 'Marks the thing directly affected by the verb.');
    const ga = part('が', 'が', 'ga', 'subject / focus marker');
    const ni = part('に', 'に', 'ni', 'to / at / in');
    const made = part('まで', 'まで', 'made', 'to / as far as');
    const arimasu = part('あります', 'あります', 'arimasu', 'there is / have / available');
    const ka = part('か', 'か', 'ka', 'question marker', 'Turns a polite statement into a question.');
    const kudasai = part('ください', 'ください', 'kudasai', 'please');
    const onegai = part('お願いします', 'おねがいします', 'onegaishimasu', 'please / I request it');
    if (template === 'taxi') {
        const destinations = {
            hotel: [part('この', 'この', 'kono', 'this'), part('ホテル', 'ホテル', 'hoteru', 'hotel')],
            station: [part('東京駅', 'とうきょうえき', 'Tōkyō-eki', 'Tokyo Station')],
            airport: [part('空港', 'くうこう', 'kūkō', 'airport')],
            here: [part('ここ', 'ここ', 'koko', 'here / this place')]
        };
        return [...(destinations[value] || destinations.here), made, onegai];
    }
    if (template === 'size') {
        const readings = {
            S: { kana: 'エスサイズ', romaji: 'esu saizu', meaning: 'size S / small' },
            M: { kana: 'エムサイズ', romaji: 'emu saizu', meaning: 'size M / medium' },
            L: { kana: 'エルサイズ', romaji: 'eru saizu', meaning: 'size L / large' }
        };
        const selected = readings[value] || readings.S;
        return [part(`${value}サイズ`, selected.kana, selected.romaji, selected.meaning), wa, arimasu, ka];
    }
    if (template === 'quantity') {
        const counters = {
            '1': part('一つ', 'ひとつ', 'hitotsu', 'one item'),
            '2': part('二つ', 'ふたつ', 'futatsu', 'two items'),
            '3': part('三つ', 'みっつ', 'mittsu', 'three items')
        };
        return [part('これ', 'これ', 'kore', 'this / this one'), o, counters[value] || counters['1'], kudasai];
    }
    if (template === 'train') {
        const cities = {
            tokyo: part('東京', 'とうきょう', 'Tōkyō', 'Tokyo'),
            kyoto: part('京都', 'きょうと', 'Kyōto', 'Kyoto'),
            osaka: part('大阪', 'おおさか', 'Ōsaka', 'Osaka'),
            nara: part('奈良', 'なら', 'Nara', 'Nara')
        };
        return [part('この', 'この', 'kono', 'this'), part('電車', 'でんしゃ', 'densha', 'train'), wa, cities[value] || cities.tokyo, ni, part('行きます', 'いきます', 'ikimasu', 'goes / will go'), ka];
    }
    if (template === 'allergy') {
        return [part(built.japanese.replace(/が.*$/, ''), built.kana.replace(/が.*$/, ''), built.romaji.split(' ga ')[0], built.english.replace(/^Does this contain |\?$/g, '')), ga, part('入っています', 'はいっています', 'haitte imasu', 'is included / contained'), ka];
    }
    return [{ japanese: built.japanese.replace(/[。！？?!]/g, ''), kana: built.kana, romaji: built.romaji.replace(/[.!?]$/g, ''), meaning: built.english }];
}
function PhraseBuilder({ settings, locale, onClose, onShowCustom, notify }) {
    const [template, setTemplate] = useState('table');
    const [value, setValue] = useState('2');
    const templates = {
        table: { title: 'A table for…', icon: '🍽️', prompt: 'How many people?', options: [
                { value: '1', label: '1 person', built: { japanese: '一人です。', kana: 'ひとりです', romaji: 'Hitori desu.', english: 'A table for one.' } },
                { value: '2', label: '2 people', built: { japanese: '二人です。', kana: 'ふたりです', romaji: 'Futari desu.', english: 'A table for two.' } },
                { value: '3', label: '3 people', built: { japanese: '三人です。', kana: 'さんにんです', romaji: 'Sannin desu.', english: 'A table for three.' } },
                { value: '4', label: '4 people', built: { japanese: '四人です。', kana: 'よにんです', romaji: 'Yonin desu.', english: 'A table for four.' } }
            ] },
        allergy: { title: 'Does this contain…', icon: '🥜', prompt: 'Choose an allergen', options: [
                { value: 'peanuts', label: 'Peanuts', built: { japanese: 'ピーナッツが入っていますか。', kana: 'ピーナッツがはいっていますか', romaji: 'Pīnattsu ga haitte imasu ka?', english: 'Does this contain peanuts?' } },
                { value: 'eggs', label: 'Eggs', built: { japanese: '卵が入っていますか。', kana: 'たまごがはいっていますか', romaji: 'Tamago ga haitte imasu ka?', english: 'Does this contain eggs?' } },
                { value: 'dairy', label: 'Dairy', built: { japanese: '乳製品が入っていますか。', kana: 'にゅうせいひんがはいっていますか', romaji: 'Nyūseihin ga haitte imasu ka?', english: 'Does this contain dairy?' } },
                { value: 'wheat', label: 'Wheat', built: { japanese: '小麦が入っていますか。', kana: 'こむぎがはいっていますか', romaji: 'Komugi ga haitte imasu ka?', english: 'Does this contain wheat?' } },
                { value: 'shellfish', label: 'Crustacean shellfish', built: { japanese: '甲殻類が入っていますか。', kana: 'こうかくるいがはいっていますか', romaji: 'Kōkakurui ga haitte imasu ka?', english: 'Does this contain crustacean shellfish?' } }
            ] },
        taxi: { title: 'Please take me to…', icon: '🚕', prompt: 'Choose a destination', options: [
                { value: 'hotel', label: 'My hotel', built: { japanese: 'このホテルまでお願いします。', kana: 'このホテルまでおねがいします', romaji: 'Kono hoteru made onegaishimasu.', english: 'Please take me to this hotel.' } },
                { value: 'station', label: 'Tokyo Station', built: { japanese: '東京駅までお願いします。', kana: 'とうきょうえきまでおねがいします', romaji: 'Tōkyō-eki made onegaishimasu.', english: 'Please take me to Tokyo Station.' } },
                { value: 'airport', label: 'The airport', built: { japanese: '空港までお願いします。', kana: 'くうこうまでおねがいします', romaji: 'Kūkō made onegaishimasu.', english: 'Please take me to the airport.' } },
                { value: 'here', label: 'This place on my map', built: { japanese: 'ここまでお願いします。', kana: 'ここまでおねがいします', romaji: 'Koko made onegaishimasu.', english: 'Please take me here.' } }
            ] },
        size: { title: 'Do you have size…', icon: '👕', prompt: 'Choose a size', options: [
                { value: 'S', label: 'Small (S)', built: { japanese: 'Sサイズはありますか。', kana: 'エスサイズはありますか', romaji: 'Esu saizu wa arimasu ka?', english: 'Do you have this in small?' } },
                { value: 'M', label: 'Medium (M)', built: { japanese: 'Mサイズはありますか。', kana: 'エムサイズはありますか', romaji: 'Emu saizu wa arimasu ka?', english: 'Do you have this in medium?' } },
                { value: 'L', label: 'Large (L)', built: { japanese: 'Lサイズはありますか。', kana: 'エルサイズはありますか', romaji: 'Eru saizu wa arimasu ka?', english: 'Do you have this in large?' } }
            ] },
        quantity: { title: 'I would like…', icon: '🔢', prompt: 'Choose a quantity', options: [
                { value: '1', label: 'One', built: { japanese: 'これを一つください。', kana: 'これをひとつください', romaji: 'Kore o hitotsu kudasai.', english: 'One of these, please.' } },
                { value: '2', label: 'Two', built: { japanese: 'これを二つください。', kana: 'これをふたつください', romaji: 'Kore o futatsu kudasai.', english: 'Two of these, please.' } },
                { value: '3', label: 'Three', built: { japanese: 'これを三つください。', kana: 'これをみっつください', romaji: 'Kore o mittsu kudasai.', english: 'Three of these, please.' } }
            ] },
        train: { title: 'Does this train go to…', icon: '🚆', prompt: 'Choose a city', options: [
                { value: 'tokyo', label: 'Tokyo', built: { japanese: 'この電車は東京に行きますか。', kana: 'このでんしゃはとうきょうにいきますか', romaji: 'Kono densha wa Tōkyō ni ikimasu ka?', english: 'Does this train go to Tokyo?' } },
                { value: 'kyoto', label: 'Kyoto', built: { japanese: 'この電車は京都に行きますか。', kana: 'このでんしゃはきょうとにいきますか', romaji: 'Kono densha wa Kyōto ni ikimasu ka?', english: 'Does this train go to Kyoto?' } },
                { value: 'osaka', label: 'Osaka', built: { japanese: 'この電車は大阪に行きますか。', kana: 'このでんしゃはおおさかにいきますか', romaji: 'Kono densha wa Ōsaka ni ikimasu ka?', english: 'Does this train go to Osaka?' } },
                { value: 'nara', label: 'Nara', built: { japanese: 'この電車は奈良に行きますか。', kana: 'このでんしゃはならにいきますか', romaji: 'Kono densha wa Nara ni ikimasu ka?', english: 'Does this train go to Nara?' } }
            ] }
    };
    const selectedTemplate = templates[template];
    useEffect(() => { setValue(selectedTemplate.options[0].value); }, [template]);
    const selected = selectedTemplate.options.find((option) => option.value === value) || selectedTemplate.options[0];
    const pseudoPhrase = {
        id: `builder-${template}-${value}`,
        category: template === 'allergy' || template === 'table' ? 'restaurant' : template === 'taxi' || template === 'train' ? 'transport' : 'shopping',
        subcategory: 'Phrase builder', japanese: selected.built.japanese, kana: selected.built.kana, romaji: selected.built.romaji,
        english: selected.built.english, usageNote: 'A customized phrase generated from your selections.', politeness: 'polite', direction: 'traveler-says', tags: ['builder'], essential: true,
        breakdown: builderBreakdown(template, value, selected.built)
    };
    return React.createElement(Modal, { onClose: onClose, label: "Phrase builder", className: "builder-modal" },
        React.createElement("div", { className: "modal-header" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Build without typing Japanese"),
                React.createElement("h2", null, tr(locale, 'phraseBuilder'))),
            React.createElement(IconButton, { label: "Close", onClick: onClose }, "\u00D7")),
        React.createElement("div", { className: "builder-layout" },
            React.createElement("div", { className: "builder-templates", role: "tablist", "aria-label": "Phrase templates" }, Object.keys(templates).map((id) => React.createElement("button", { type: "button", role: "tab", "aria-selected": template === id, key: id, className: template === id ? 'active' : '', onClick: () => setTemplate(id) },
                React.createElement("span", { "aria-hidden": "true" }, templates[id].icon),
                React.createElement("strong", null, templates[id].title)))),
            React.createElement("div", { className: "builder-workspace" },
                React.createElement("label", { className: "builder-select" },
                    React.createElement("span", null, selectedTemplate.prompt),
                    React.createElement("select", { value: value, onChange: (event) => setValue(event.target.value) }, selectedTemplate.options.map((option) => React.createElement("option", { key: option.value, value: option.value }, option.label)))),
                React.createElement("div", { className: "built-result" },
                    React.createElement("div", { className: "eyebrow" }, "Your phrase"),
                    React.createElement(JapaneseLine, { phrase: pseudoPhrase, settings: settings, size: "hero" }),
                    React.createElement("div", { className: "detail-reading" }, pseudoPhrase.kana),
                    settings.showRomaji && React.createElement("div", { className: "detail-romaji" }, pseudoPhrase.romaji),
                    React.createElement("div", { className: "detail-english" }, pseudoPhrase.english),
                    React.createElement(AudioControls, { phrase: pseudoPhrase, settings: settings, notify: notify })),
                React.createElement(PhraseBreakdown, { phrase: pseudoPhrase, settings: settings, locale: locale, compact: true }),
                template === 'allergy' && React.createElement("div", { className: "medical-notice" },
                    React.createElement("strong", null, "For severe allergies"),
                    React.createElement("p", null, "Use a professionally translated allergy card and confirm cross-contact risks with staff.")))),
        React.createElement("div", { className: "modal-footer action-grid two-actions" },
            React.createElement("button", { type: "button", className: "button secondary", onClick: () => copyText(`${pseudoPhrase.japanese}\n${pseudoPhrase.english}`, notify) }, "\u29C9 Copy"),
            React.createElement("button", { type: "button", className: "button primary", onClick: () => onShowCustom(pseudoPhrase) }, "\u2197 Show full screen")));
}
function SituationsPage({ initialCategory, settings, locale, favorites, onFavorite, onOpen, onShow, onShowCustom, notify }) {
    const [category, setCategory] = useState(initialCategory);
    const [query, setQuery] = useState('');
    const [direction, setDirection] = useState('all');
    const [essentialOnly, setEssentialOnly] = useState(false);
    const [limit, setLimit] = useState(36);
    const [builderOpen, setBuilderOpen] = useState(false);
    useEffect(() => { setCategory(initialCategory); setLimit(36); }, [initialCategory]);
    useEffect(() => { setLimit(36); }, [query, category, direction, essentialOnly]);
    const results = useMemo(() => searchPhrases(query, category, direction, essentialOnly), [query, category, direction, essentialOnly]);
    const shown = results.slice(0, limit);
    return React.createElement("div", { className: "page situations-page" },
        React.createElement("div", { className: "page-title-row" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Immediate-use phrasebook"),
                React.createElement("h1", null, tr(locale, 'situations')),
                React.createElement("p", null, "Find what to say\u2014and the questions you are likely to hear in return.")),
            React.createElement("button", { type: "button", className: "button builder-button", onClick: () => setBuilderOpen(true) },
                React.createElement("span", { "aria-hidden": "true" }, "\uFF0B"),
                " ",
                tr(locale, 'phraseBuilder'))),
        React.createElement("div", { className: "category-tabs", role: "tablist", "aria-label": "Situation category" },
            React.createElement("button", { type: "button", role: "tab", "aria-selected": category === 'all', className: category === 'all' ? 'active' : '', onClick: () => setCategory('all') },
                React.createElement("span", { "aria-hidden": "true" }, "\u2726"),
                " ",
                tr(locale, 'all')),
            Object.keys(CATEGORY_META).map((id) => React.createElement("button", { type: "button", role: "tab", "aria-selected": category === id, key: id, className: category === id ? 'active' : '', onClick: () => setCategory(id) },
                React.createElement("span", { "aria-hidden": "true" }, CATEGORY_META[id].icon),
                " ",
                categoryLabel(id, locale)))),
        React.createElement("div", { className: "phrase-toolbar" },
            React.createElement("div", { className: "search-field" },
                React.createElement("span", { "aria-hidden": "true" }, "\u2315"),
                React.createElement("input", { id: "situations-search", value: query, onChange: (event) => setQuery(event.target.value), placeholder: tr(locale, 'searchPlaceholder'), "aria-label": "Search this phrasebook" }),
                query && React.createElement("button", { type: "button", onClick: () => setQuery(''), "aria-label": "Clear search" }, "\u00D7")),
            React.createElement("div", { className: "segmented-control", role: "group", "aria-label": "Filter by phrase direction" },
                React.createElement("button", { type: "button", className: direction === 'all' ? 'active' : '', onClick: () => setDirection('all') }, tr(locale, 'all')),
                React.createElement("button", { type: "button", className: direction === 'traveler-says' ? 'active' : '', onClick: () => setDirection('traveler-says') }, tr(locale, 'say')),
                React.createElement("button", { type: "button", className: direction === 'traveler-hears' ? 'active' : '', onClick: () => setDirection('traveler-hears') }, tr(locale, 'hear'))),
            React.createElement("label", { className: "check-filter" },
                React.createElement("input", { type: "checkbox", checked: essentialOnly, onChange: (event) => setEssentialOnly(event.target.checked) }),
                React.createElement("span", null, tr(locale, 'essential')))),
        category === 'emergency' && React.createElement("div", { className: "emergency-notice" },
            React.createElement("span", { "aria-hidden": "true" }, "\uFF0B"),
            React.createElement("div", null,
                React.createElement("strong", null, "For urgent situations in Japan"),
                React.createElement("p", null, "Call 119 for an ambulance or fire emergency and 110 for police. These phrases are communication aids, not medical advice."))),
        React.createElement("div", { className: "results-heading" },
            React.createElement("div", null,
                React.createElement("strong", null, results.length),
                " phrases"),
            direction === 'all' && React.createElement("span", null,
                React.createElement("b", { className: "legend-dot say" }),
                " You say it ",
                React.createElement("b", { className: "legend-dot hear" }),
                " You may hear it")),
        shown.length ? React.createElement("div", { className: "phrase-grid" }, shown.map((phrase) => React.createElement(PhraseCard, { key: phrase.id, phrase: phrase, settings: settings, locale: locale, favorite: favorites.includes(phrase.id), onFavorite: onFavorite, onOpen: onOpen, onShow: onShow, notify: notify }))) : React.createElement(EmptyState, { icon: "\u2315", title: "No matching phrases", body: "Try changing the category or removing a filter." }),
        limit < results.length && React.createElement("div", { className: "load-more" },
            React.createElement("button", { type: "button", className: "button secondary", onClick: () => setLimit(limit + 36) },
                "Show more ",
                React.createElement("span", null,
                    "(",
                    results.length - limit,
                    " remaining)"))),
        builderOpen && React.createElement(PhraseBuilder, { settings: settings, locale: locale, onClose: () => setBuilderOpen(false), onShowCustom: (phrase) => { setBuilderOpen(false); onShowCustom(phrase); }, notify: notify }));
}
function choosePracticePhrases(priorities, progress, count, seed, category) {
    const now = Date.now();
    let pool = PHRASES.filter((phrase) => phrase.direction === 'traveler-says' && (!category || phrase.category === category));
    if (!category && priorities.length) {
        const preferred = pool.filter((phrase) => priorities.includes(phrase.category));
        if (preferred.length >= count)
            pool = preferred;
    }
    const due = pool.filter((phrase) => progress[phrase.id] && progress[phrase.id].nextReview <= now);
    const unseen = pool.filter((phrase) => !progress[phrase.id]);
    const remainder = pool.filter((phrase) => progress[phrase.id] && progress[phrase.id].nextReview > now);
    return [...seededShuffle(due, seed + 1), ...seededShuffle(unseen, seed + 2), ...seededShuffle(remainder, seed + 3)].slice(0, count);
}
function makeQuizOptions(current, mode, seed) {
    const candidates = PHRASES.filter((phrase) => phrase.id !== current.id && phrase.direction === current.direction && phrase.category === current.category);
    const fallback = candidates.length >= 3 ? candidates : PHRASES.filter((phrase) => phrase.id !== current.id && phrase.direction === current.direction);
    return seededShuffle([current, ...seededShuffle(fallback, seed).slice(0, 3)], seed + 91);
}
function SessionComplete({ score, total, onClose, onRestart }) {
    const percent = Math.round((score / Math.max(total, 1)) * 100);
    return React.createElement("div", { className: "session-complete" },
        React.createElement("div", { className: "completion-ring", style: { '--score': `${percent * 3.6}deg` } },
            React.createElement("div", null,
                React.createElement("strong", null,
                    percent,
                    "%"),
                React.createElement("span", null, "accuracy"))),
        React.createElement("div", { className: "eyebrow" }, "Session complete"),
        React.createElement("h2", null, percent >= 80 ? 'Ready for the real conversation.' : 'A useful review is already scheduled.'),
        React.createElement("p", null,
            "You answered ",
            score,
            " of ",
            total,
            " correctly. Phrases that need work will appear sooner in your review queue."),
        React.createElement("div", { className: "complete-actions" },
            React.createElement("button", { type: "button", className: "button secondary", onClick: onClose }, "Back to practice"),
            React.createElement("button", { type: "button", className: "button primary", onClick: onRestart }, "Practice again")));
}
function LearningSession({ mode, seed, priorities, category, settings, progress, onRecord, onClose, notify }) {
    const [run, setRun] = useState(0);
    const phrases = useMemo(() => choosePracticePhrases(priorities, progress, 7, seed + run * 117, category), [seed, run, category, priorities.join('|')]);
    const [index, setIndex] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [complete, setComplete] = useState(false);
    useEffect(() => {
        setRun(0);
        setIndex(0);
        setRevealed(false);
        setSelected(null);
        setScore(0);
        setComplete(false);
    }, [mode, seed, category]);
    const current = phrases[index];
    const options = useMemo(() => current ? makeQuizOptions(current, mode === 'listening' ? 'listening' : 'quiz', seed + index * 37 + run * 131) : [], [current && current.id, seed, index, run, mode]);
    const restart = () => { setRun(run + 1); setIndex(0); setRevealed(false); setSelected(null); setScore(0); setComplete(false); };
    const moveNext = () => {
        if (index + 1 >= phrases.length)
            setComplete(true);
        else {
            setIndex(index + 1);
            setRevealed(false);
            setSelected(null);
        }
    };
    const advance = (correct) => {
        if (!current)
            return;
        onRecord(current.id, correct);
        if (correct)
            setScore((value) => value + 1);
        moveNext();
    };
    const choose = (id) => {
        if (selected || !current)
            return;
        setSelected(id);
        const correct = id === current.id;
        onRecord(current.id, correct);
        if (correct)
            setScore((value) => value + 1);
    };
    const selectedPhrase = selected ? PHRASE_INDEX[selected] : null;
    const categoryMeta = category ? CATEGORY_META[category] : null;
    const isCategoryDrill = mode === 'quiz' && !!categoryMeta;
    if (complete)
        return React.createElement("div", { className: "practice-session" },
            React.createElement(SessionComplete, { score: score, total: phrases.length, onClose: onClose, onRestart: restart }));
    if (!current)
        return React.createElement("div", { className: "practice-session" },
            React.createElement(EmptyState, { icon: "\u25C9", title: "No phrases available", body: "Choose another category." }),
            React.createElement("button", { type: "button", className: "button secondary", onClick: onClose }, "Back"));
    const modeTitle = mode === 'flashcard' ? 'Travel flashcards' : isCategoryDrill && categoryMeta ? `${categoryMeta.label} drill` : mode === 'quiz' ? 'Choose the phrase' : 'Listening check';
    return React.createElement("div", { className: "practice-session" },
        React.createElement("div", { className: "session-header" },
            React.createElement("button", { type: "button", className: "icon-button", onClick: onClose, "aria-label": "Exit practice" }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("span", null, modeTitle),
                React.createElement("strong", null,
                    index + 1,
                    " / ",
                    phrases.length))),
        React.createElement("div", { className: "progress-track" },
            React.createElement("span", { style: { width: `${((index + (complete ? 1 : 0)) / phrases.length) * 100}%` } })),
        mode === 'flashcard' && React.createElement("div", { className: "flashcard-stage" },
            React.createElement("div", { className: `learning-card ${revealed ? 'revealed' : ''}` },
                React.createElement("div", { className: "eyebrow" }, "How would you say this?"),
                React.createElement("div", { className: "flashcard-prompt" }, current.english),
                !revealed ? React.createElement("button", { type: "button", className: "reveal-button", onClick: () => setRevealed(true) },
                    React.createElement("span", { "aria-hidden": "true" }, "\u76EE"),
                    " Reveal Japanese") : React.createElement("div", { className: "flashcard-answer" },
                    React.createElement(JapaneseLine, { phrase: current, settings: settings, size: "hero" }),
                    React.createElement("div", { className: "detail-reading" }, current.kana),
                    settings.showRomaji && React.createElement("div", { className: "detail-romaji" }, current.romaji),
                    React.createElement(AudioControls, { phrase: current, settings: settings, notify: notify }),
                    React.createElement(PhraseBreakdown, { phrase: current, settings: settings, locale: settings.interfaceLanguage, compact: true }))),
            revealed && React.createElement("div", { className: "confidence-actions" },
                React.createElement("button", { type: "button", className: "button review-button", onClick: () => advance(false) },
                    React.createElement("span", { "aria-hidden": "true" }, "\u21BB"),
                    React.createElement("strong", null, "Review again"),
                    React.createElement("small", null, "Show it sooner")),
                React.createElement("button", { type: "button", className: "button know-button", onClick: () => advance(true) },
                    React.createElement("span", { "aria-hidden": "true" }, "\u2713"),
                    React.createElement("strong", null, "Got it"),
                    React.createElement("small", null, "Increase interval")))),
        mode === 'quiz' && React.createElement("div", { className: `quiz-stage ${isCategoryDrill ? 'category-drill-stage' : ''}` },
            React.createElement("div", { className: "eyebrow" }, isCategoryDrill && categoryMeta ? `${categoryMeta.icon} ${categoryMeta.label} audio drill` : 'Choose the natural Japanese phrase'),
            React.createElement("h2", null, current.english),
            isCategoryDrill && React.createElement("p", { className: "category-drill-help" }, "Listen to each option first. Reveal kana and romaji only when you need reading support, then choose the phrase that matches the prompt."),
            React.createElement("div", { className: `quiz-options ${isCategoryDrill ? 'audio-first-options' : ''}` }, options.map((option, optionIndex) => {
                const optionLabel = String.fromCharCode(65 + optionIndex);
                return isCategoryDrill ? React.createElement(AudioFirstCategoryOption, { key: `${current.id}-${option.id}`, phrase: option, label: optionLabel, selected: selected === option.id, correct: option.id === current.id, revealed: !!selected, disabled: !!selected, settings: settings, notify: notify, onSelect: () => choose(option.id) }) : React.createElement(JapaneseExerciseOption, { key: option.id, phrase: option, label: optionLabel, selected: selected === option.id, correct: option.id === current.id, revealed: !!selected, disabled: !!selected, settings: settings, notify: notify, onSelect: () => choose(option.id) });
            })),
            selected && selectedPhrase && (isCategoryDrill ? React.createElement(CategoryDrillFeedback, { correct: selected === current.id, selectedPhrase: selectedPhrase, correctPhrase: current, nextLabel: index + 1 === phrases.length ? 'See results' : 'Next question', onNext: moveNext, settings: settings, notify: notify }) : React.createElement(ExerciseFeedback, { correct: selected === current.id, selectedPhrase: selectedPhrase, correctPhrase: current, explanation: "The English meaning is revealed only after you answer. Listen again and compare the kana before moving on.", nextLabel: index + 1 === phrases.length ? 'See results' : 'Next question', onNext: moveNext, settings: settings, notify: notify }))),
        mode === 'listening' && React.createElement("div", { className: "quiz-stage listening-stage" },
            React.createElement("div", { className: "eyebrow" }, "Listen, then choose the matching phrase"),
            React.createElement("button", { type: "button", className: "listening-orb", onClick: () => speakJapanese(current.japanese, settings, false, notify, current), "aria-label": "Play Japanese phrase" },
                React.createElement("span", { "aria-hidden": "true" }, "\u25B6"),
                React.createElement("small", null, "Play audio")),
            React.createElement(AudioControls, { phrase: current, settings: settings, notify: notify }),
            React.createElement("div", { className: "quiz-options" }, options.map((option, optionIndex) => React.createElement(JapaneseExerciseOption, { key: option.id, phrase: option, label: String.fromCharCode(65 + optionIndex), selected: selected === option.id, correct: option.id === current.id, revealed: !!selected, disabled: !!selected, settings: settings, notify: notify, onSelect: () => choose(option.id) }))),
            selected && selectedPhrase && React.createElement(ExerciseFeedback, { correct: selected === current.id, selectedPhrase: selectedPhrase, correctPhrase: current, explanation: "The translation appears after your choice so you can focus first on the sound and written Japanese.", nextLabel: index + 1 === phrases.length ? 'See results' : 'Next clip', onNext: moveNext, settings: settings, notify: notify })));
}
function ScenarioRunner({ scenario, settings, onRecord, onClose, notify }) {
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [complete, setComplete] = useState(false);
    const step = scenario.steps[index];
    const select = (id) => {
        if (selected)
            return;
        setSelected(id);
        const correct = id === step.correctId;
        if (correct)
            setScore(score + 1);
        onRecord(step.correctId, correct);
    };
    const next = () => {
        if (index + 1 >= scenario.steps.length)
            setComplete(true);
        else {
            setIndex(index + 1);
            setSelected(null);
        }
    };
    const selectedPhrase = selected ? PHRASE_INDEX[selected] : null;
    const correctPhrase = PHRASE_INDEX[step.correctId];
    const restart = () => { setIndex(0); setSelected(null); setScore(0); setComplete(false); };
    if (complete)
        return React.createElement("div", { className: "practice-session" },
            React.createElement(SessionComplete, { score: score, total: scenario.steps.length, onClose: onClose, onRestart: restart }));
    return React.createElement("div", { className: "practice-session scenario-session" },
        React.createElement("div", { className: "session-header" },
            React.createElement("button", { type: "button", className: "icon-button", onClick: onClose, "aria-label": "Exit scenario" }, "\u00D7"),
            React.createElement("div", null,
                React.createElement("span", null,
                    scenario.icon,
                    " ",
                    scenario.title),
                React.createElement("strong", null,
                    index + 1,
                    " / ",
                    scenario.steps.length))),
        React.createElement("div", { className: "progress-track" },
            React.createElement("span", { style: { width: `${(index / scenario.steps.length) * 100}%` } })),
        React.createElement("div", { className: "scenario-scene" },
            React.createElement("div", { className: `speaker-avatar ${step.speaker}`, "aria-hidden": "true" }, step.speaker === 'traveler' ? 'YOU' : step.speaker === 'announcement' ? '♪' : '店'),
            React.createElement("div", { className: "speech-bubble" },
                React.createElement("div", { className: "speaker-label" }, step.speaker === 'traveler' ? 'Situation prompt' : step.speaker === 'announcement' ? 'Station announcement' : 'Staff says'),
                React.createElement("div", { className: "scenario-japanese" }, step.promptJapanese),
                React.createElement("div", { className: "scenario-kana" }, step.promptKana),
                React.createElement("div", { className: "scenario-english" }, step.promptEnglish),
                step.speaker !== 'traveler' && React.createElement(AudioControls, { text: step.promptJapanese, settings: settings, notify: notify, compact: true }))),
        React.createElement("div", { className: "scenario-instruction" }, "Choose the best response"),
        React.createElement("div", { className: "scenario-options" }, step.choiceIds.map((id, choiceIndex) => {
            const phrase = PHRASE_INDEX[id];
            return React.createElement(JapaneseExerciseOption, { key: id, phrase: phrase, label: choiceIndex + 1, selected: selected === id, correct: id === step.correctId, revealed: !!selected, disabled: !!selected, settings: settings, notify: notify, onSelect: () => select(id) });
        })),
        selected && selectedPhrase && React.createElement(ExerciseFeedback, { correct: selected === step.correctId, selectedPhrase: selectedPhrase, correctPhrase: correctPhrase, explanation: step.explanation, nextLabel: index + 1 === scenario.steps.length ? 'See results' : 'Next exchange', onNext: next, settings: settings, notify: notify }));
}
function PracticePage({ settings, priorities, progress, practiceDates, onRecord, notify }) {
    const [session, setSession] = useState(null);
    const studied = Object.keys(progress).length;
    const totalCorrect = Object.values(progress).reduce((sum, record) => sum + record.correct, 0);
    const totalSeen = Object.values(progress).reduce((sum, record) => sum + record.seen, 0);
    const due = Object.values(progress).filter((record) => record.nextReview <= Date.now()).length;
    const streak = calculateStreak(practiceDates);
    const startLearning = (mode, category) => setSession({ kind: 'learning', mode, category, seed: Date.now() % 1000000 });
    const startScenario = (id) => setSession({ kind: 'scenario', id });
    if (session && session.kind === 'learning')
        return React.createElement(LearningSession, { key: `${session.mode}-${session.seed}`, mode: session.mode, seed: session.seed, category: session.category, priorities: priorities, settings: settings, progress: progress, onRecord: onRecord, onClose: () => setSession(null), notify: notify });
    if (session && session.kind === 'scenario') {
        const scenario = SCENARIOS.find((item) => item.id === session.id);
        return React.createElement(ScenarioRunner, { key: scenario.id, scenario: scenario, settings: settings, onRecord: onRecord, onClose: () => setSession(null), notify: notify });
    }
    return React.createElement("div", { className: "page practice-page" },
        React.createElement("div", { className: "page-title-row" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Small sessions, useful results"),
                React.createElement("h1", null, "Practice for the trip"),
                React.createElement("p", null, "Review phrases you can use today. No Japanese keyboard required."))),
        React.createElement("section", { className: "practice-overview" },
            React.createElement("div", { className: "practice-hero" },
                React.createElement("div", null,
                    React.createElement(Badge, { tone: "light" }, "Recommended \u00B7 5 minutes"),
                    React.createElement("h2", null, "Mixed travel review"),
                    React.createElement("p", null, "Seven high-value phrases, weighted toward your chosen situations and review queue."),
                    React.createElement("button", { type: "button", className: "button hero-primary", onClick: () => startLearning('flashcard') },
                        "Start today\u2019s review ",
                        React.createElement("span", { "aria-hidden": "true" }, "\u2192"))),
                React.createElement("div", { className: "practice-hero-visual", "aria-hidden": "true" },
                    React.createElement("span", null, "\u8A71"),
                    React.createElement("i", null),
                    React.createElement("b", null, "\u805E"))),
            React.createElement("div", { className: "practice-stats" },
                React.createElement("div", null,
                    React.createElement("span", { "aria-hidden": "true" }, "\uD83D\uDD25"),
                    React.createElement("strong", null, streak),
                    React.createElement("small", null, "day streak")),
                React.createElement("div", null,
                    React.createElement("span", { "aria-hidden": "true" }, "\u2713"),
                    React.createElement("strong", null,
                        totalSeen ? Math.round(totalCorrect / totalSeen * 100) : 0,
                        "%"),
                    React.createElement("small", null, "accuracy")),
                React.createElement("div", null,
                    React.createElement("span", { "aria-hidden": "true" }, "\u5B57"),
                    React.createElement("strong", null, studied),
                    React.createElement("small", null, "phrases studied")),
                React.createElement("div", null,
                    React.createElement("span", { "aria-hidden": "true" }, "\u21BB"),
                    React.createElement("strong", null, due),
                    React.createElement("small", null, "due for review")))),
        React.createElement("section", { className: "content-section" },
            React.createElement(SectionHeader, { eyebrow: "Choose a learning mode", title: "Quick practice" }),
            React.createElement("div", { className: "mode-grid" },
                React.createElement("button", { type: "button", className: "mode-card", onClick: () => startLearning('flashcard') },
                    React.createElement("span", { className: "mode-icon" }, "\u7FFB"),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Flashcards"),
                        React.createElement("p", null, "Recall the phrase, reveal it, then rate your confidence."),
                        React.createElement("small", null, "7 cards \u00B7 3\u20135 min")),
                    React.createElement("b", { "aria-hidden": "true" }, "\u2192")),
                React.createElement("button", { type: "button", className: "mode-card", onClick: () => startLearning('quiz') },
                    React.createElement("span", { className: "mode-icon" }, "\u629E"),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Choose the phrase"),
                        React.createElement("p", null, "Match an English need with natural Japanese."),
                        React.createElement("small", null, "7 questions \u00B7 3 min")),
                    React.createElement("b", { "aria-hidden": "true" }, "\u2192")),
                React.createElement("button", { type: "button", className: "mode-card", onClick: () => startLearning('listening') },
                    React.createElement("span", { className: "mode-icon" }, "\u8074"),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Listening check"),
                        React.createElement("p", null, "Hear a phrase, match it to the written Japanese, then reveal the meaning."),
                        React.createElement("small", null, "7 clips \u00B7 4 min")),
                    React.createElement("b", { "aria-hidden": "true" }, "\u2192")))),
        React.createElement("section", { className: "content-section" },
            React.createElement(SectionHeader, { eyebrow: "Audio-first practice for today\u2019s plans", title: "Category drills" }),
            React.createElement("div", { className: "drill-row" }, Object.keys(CATEGORY_META).map((category) => React.createElement("button", { type: "button", key: category, onClick: () => startLearning('quiz', category) },
                React.createElement("span", { "aria-hidden": "true" }, CATEGORY_META[category].icon),
                React.createElement("strong", null, CATEGORY_META[category].label),
                React.createElement("small", null,
                    "Listen first \u00B7 ",
                    PHRASES.filter((phrase) => phrase.category === category).length,
                    " phrases"))))),
        React.createElement("section", { className: "content-section" },
            React.createElement(SectionHeader, { eyebrow: "Interactive conversations", title: "Scenario practice" }),
            React.createElement("div", { className: "scenario-grid" }, SCENARIOS.map((scenario) => React.createElement("button", { type: "button", key: scenario.id, className: "scenario-card", onClick: () => startScenario(scenario.id) },
                React.createElement("div", { className: "scenario-card-icon", "aria-hidden": "true" }, scenario.icon),
                React.createElement("div", null,
                    React.createElement("strong", null, scenario.title),
                    React.createElement("p", null, scenario.subtitle),
                    React.createElement("small", null,
                        scenario.steps.length,
                        " exchanges")),
                React.createElement("span", { "aria-hidden": "true" }, "\u2197"))))));
}
function SavedPage({ settings, locale, favorites, recent, onFavorite, onOpen, onShow, notify }) {
    const [view, setView] = useState('favorites');
    const [query, setQuery] = useState('');
    const ids = view === 'favorites' ? favorites : recent;
    const phrases = ids.map((id) => PHRASE_INDEX[id]).filter(Boolean).filter((phrase) => !query || searchPhrases(query, 'all', 'all', false).some((match) => match.id === phrase.id));
    return React.createElement("div", { className: "page saved-page" },
        React.createElement("div", { className: "page-title-row" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Your pocket list"),
                React.createElement("h1", null, tr(locale, 'saved')),
                React.createElement("p", null, "Keep high-priority phrases together and return to recently viewed cards."))),
        React.createElement("div", { className: "saved-toolbar" },
            React.createElement("div", { className: "segmented-control saved-segments" },
                React.createElement("button", { type: "button", className: view === 'favorites' ? 'active' : '', onClick: () => setView('favorites') },
                    "\u2605 ",
                    tr(locale, 'favorites'),
                    " ",
                    React.createElement("span", null, favorites.length)),
                React.createElement("button", { type: "button", className: view === 'recent' ? 'active' : '', onClick: () => setView('recent') },
                    "\u25F7 ",
                    tr(locale, 'recent'),
                    " ",
                    React.createElement("span", null, recent.length))),
            React.createElement("div", { className: "search-field" },
                React.createElement("span", { "aria-hidden": "true" }, "\u2315"),
                React.createElement("input", { id: "saved-search", value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search this list", "aria-label": "Search saved phrases" }),
                query && React.createElement("button", { type: "button", onClick: () => setQuery(''), "aria-label": "Clear search" }, "\u00D7"))),
        phrases.length ? React.createElement("div", { className: "phrase-grid saved-grid" }, phrases.map((phrase) => React.createElement(PhraseCard, { key: phrase.id, phrase: phrase, settings: settings, locale: locale, favorite: favorites.includes(phrase.id), onFavorite: onFavorite, onOpen: onOpen, onShow: onShow, notify: notify }))) : React.createElement(EmptyState, { icon: view === 'favorites' ? '☆' : '◷', title: view === 'favorites' ? tr(locale, 'noFavorites') : 'No recently viewed phrases', body: view === 'favorites' ? 'Tap the star on any phrase to keep it here for quick access.' : 'Phrases you open will appear here automatically.' }));
}
function SettingToggle({ title, body, checked, onChange }) {
    return React.createElement("label", { className: "setting-row" },
        React.createElement("span", null,
            React.createElement("strong", null, title),
            React.createElement("small", null, body)),
        React.createElement("input", { className: "switch", type: "checkbox", checked: checked, onChange: (event) => onChange(event.target.checked) }));
}
function SettingsPage({ settings, onSettings, favorites, studied, installPrompt, onInstall, onClearFavorites, onResetProgress, onReplayOnboarding, onLock, notify }) {
    const update = (patch) => onSettings({ ...settings, ...patch });
    const japaneseVoices = useJapaneseVoiceOptions();
    const voicePreference = settings.audioVoice || 'auto-female';
    const selectedVoice = selectJapaneseVoice(japaneseVoices, voicePreference);
    const voiceSelectValue = voicePreference === 'auto-female' || japaneseVoices.some((voice) => voiceKey(voice) === voicePreference || voice.name === voicePreference)
        ? voicePreference
        : 'auto-female';
    const audioSample = PHRASES.find((phrase) => phrase.english === 'Do you have an English menu?') || PHRASES[0];
    const testAudio = (slow) => speakJapanese(audioSample.japanese, settings, slow, notify, audioSample);
    const cacheEssentials = async () => {
        try {
            if ('caches' in window) {
                const cache = await caches.open('nihongo-trip-manual-v1.5');
                await cache.addAll(['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './icons/icon-192.png']);
            }
            update({ offlineEssentials: true });
            notify('Essential app content is saved for offline use.');
        }
        catch (_) {
            notify('Offline download could not be completed in this browser.');
        }
    };
    return React.createElement("div", { className: "page settings-page" },
        React.createElement("div", { className: "page-title-row" },
            React.createElement("div", null,
                React.createElement("div", { className: "eyebrow" }, "Make it yours"),
                React.createElement("h1", null, "Settings"),
                React.createElement("p", null, "Adjust reading support, audio, accessibility, and offline behavior."))),
        React.createElement("div", { className: "settings-layout" },
            React.createElement("div", { className: "settings-main" },
                React.createElement("section", { className: "settings-card" },
                    React.createElement("div", { className: "settings-card-heading" },
                        React.createElement("span", { "aria-hidden": "true" }, "\u3042"),
                        React.createElement("div", null,
                            React.createElement("h2", null, "Japanese display"),
                            React.createElement("p", null, "Choose how much pronunciation support appears."))),
                    React.createElement(SettingToggle, { title: "Show romaji", body: "Display Latin-alphabet pronunciation below phrases.", checked: settings.showRomaji, onChange: (checked) => update({ showRomaji: checked }) }),
                    React.createElement(SettingToggle, { title: "Show furigana", body: "Display kana readings with Japanese text where useful.", checked: settings.showFurigana, onChange: (checked) => update({ showFurigana: checked }) }),
                    React.createElement("label", { className: "setting-row select-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Interface language"),
                            React.createElement("small", null, "Change major navigation and action labels.")),
                        React.createElement("select", { value: settings.interfaceLanguage, onChange: (event) => update({ interfaceLanguage: event.target.value }) },
                            React.createElement("option", { value: "en" }, "English"),
                            React.createElement("option", { value: "ja" }, "\u65E5\u672C\u8A9E")))),
                React.createElement("section", { className: "settings-card" },
                    React.createElement("div", { className: "settings-card-heading" },
                        React.createElement("span", { "aria-hidden": "true" }, "\u266A"),
                        React.createElement("div", null,
                            React.createElement("h2", null, "Audio"),
                            React.createElement("p", null, "Prioritizes natural-sounding Japanese female voices available on your device."))),
                    React.createElement("label", { className: "setting-row select-setting audio-voice-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Japanese voice"),
                            React.createElement("small", null, "Automatic mode favors recognized female and enhanced voices.")),
                        React.createElement("select", { value: voiceSelectValue, disabled: !japaneseVoices.length, onChange: (event) => update({ audioVoice: event.target.value }) },
                            React.createElement("option", { value: "auto-female" }, "Automatic \u2014 best female voice"),
                            japaneseVoices.map((voice, index) => React.createElement("option", { key: `${voiceKey(voice)}-${index}`, value: voiceKey(voice) },
                                voice.name,
                                isRecognizedFemaleJapaneseVoice(voice) ? ' · female' : '',
                                isEnhancedJapaneseVoice(voice) ? ' · enhanced' : '')))),
                    React.createElement("div", { className: "setting-note audio-voice-note" }, selectedVoice
                        ? React.createElement(React.Fragment, null,
                            React.createElement("strong", null,
                                "Selected: ",
                                selectedVoice.name),
                            React.createElement("br", null),
                            isRecognizedFemaleJapaneseVoice(selectedVoice) ? 'Recognized female Japanese voice' : 'Japanese voice',
                            isEnhancedJapaneseVoice(selectedVoice) ? ' · enhanced or natural voice profile' : '',
                            selectedVoice.localService ? ' · available locally' : ' · may require an internet connection',
                            ".")
                        : React.createElement(React.Fragment, null, "No Japanese voice is currently exposed by this browser. Install or enable a Japanese system voice, then reopen the app.")),
                    React.createElement("label", { className: "setting-row range-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Conversation speed"),
                            React.createElement("small", null,
                                settings.audioRate.toFixed(2),
                                "\u00D7 \u2014 normal playback")),
                        React.createElement("input", { type: "range", min: "0.7", max: "1.2", step: "0.05", value: settings.audioRate, onChange: (event) => update({ audioRate: Number(event.target.value) }) })),
                    React.createElement("label", { className: "setting-row range-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Slow-practice speed"),
                            React.createElement("small", null,
                                settings.audioSlowRate.toFixed(2),
                                "\u00D7 \u2014 with phrase-aware pauses")),
                        React.createElement("input", { type: "range", min: "0.35", max: "0.75", step: "0.05", value: settings.audioSlowRate, onChange: (event) => update({ audioSlowRate: Number(event.target.value) }) })),
                    React.createElement("div", { className: "setting-row action-setting audio-test-row" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Compare playback"),
                            React.createElement("small", null, "Use the same phrase to hear the speed and phrasing difference.")),
                        React.createElement("div", { className: "audio-test-buttons" },
                            React.createElement("button", { type: "button", className: "button secondary small", onClick: () => testAudio(false) }, "\u25B6 Conversation"),
                            React.createElement("button", { type: "button", className: "button secondary small", onClick: () => testAudio(true) }, "\u25F7 Slow practice"))),
                    React.createElement("div", { className: "setting-note" }, "Question punctuation is normalized for conversational intonation. Slow practice uses a separate rate and inserts pauses between natural phrase chunks. The app never substitutes an English voice for Japanese.")),
                React.createElement("section", { className: "settings-card" },
                    React.createElement("div", { className: "settings-card-heading" },
                        React.createElement("span", { "aria-hidden": "true" }, "\u25D0"),
                        React.createElement("div", null,
                            React.createElement("h2", null, "Accessibility"),
                            React.createElement("p", null, "Designed around WCAG 2.2 AA principles."))),
                    React.createElement("label", { className: "setting-row range-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Text size"),
                            React.createElement("small", null,
                                Math.round(settings.textScale * 100),
                                "%")),
                        React.createElement("input", { type: "range", min: "0.9", max: "1.25", step: "0.05", value: settings.textScale, onChange: (event) => update({ textScale: Number(event.target.value) }) })),
                    React.createElement(SettingToggle, { title: "High-contrast mode", body: "Increase contrast and strengthen visible borders.", checked: settings.highContrast, onChange: (checked) => update({ highContrast: checked }) }),
                    React.createElement(SettingToggle, { title: "Reduce motion", body: "Disable non-essential movement and transitions.", checked: settings.reducedMotion, onChange: (checked) => update({ reducedMotion: checked }) })),
                React.createElement("section", { className: "settings-card" },
                    React.createElement("div", { className: "settings-card-heading" },
                        React.createElement("span", { "aria-hidden": "true" }, "\u2193"),
                        React.createElement("div", null,
                            React.createElement("h2", null, "Offline & app install"),
                            React.createElement("p", null, "Keep the phrasebook available when mobile data is unreliable."))),
                    React.createElement("div", { className: "setting-row action-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Essential offline content"),
                            React.createElement("small", null, settings.offlineEssentials ? 'Saved on this device' : 'Not manually downloaded')),
                        React.createElement("button", { type: "button", className: "button secondary small", onClick: cacheEssentials }, settings.offlineEssentials ? 'Refresh download' : 'Download')),
                    React.createElement("div", { className: "setting-row action-setting" },
                        React.createElement("span", null,
                            React.createElement("strong", null, "Install Nihongo Trip"),
                            React.createElement("small", null, "Add the app to your home screen for faster access.")),
                        React.createElement("button", { type: "button", className: "button primary small", disabled: !installPrompt, onClick: onInstall }, installPrompt ? 'Install app' : 'Use browser menu')))),
            React.createElement("aside", { className: "settings-sidebar" },
                React.createElement("section", { className: "device-card" },
                    React.createElement("div", { className: "device-icon", "aria-hidden": "true" }, "\u25A3"),
                    React.createElement("h2", null, "Stored on this device"),
                    React.createElement("div", { className: "device-stats" },
                        React.createElement("div", null,
                            React.createElement("strong", null, favorites),
                            React.createElement("span", null, "saved phrases")),
                        React.createElement("div", null,
                            React.createElement("strong", null, studied),
                            React.createElement("span", null, "studied phrases")),
                        React.createElement("div", null,
                            React.createElement("strong", null, PHRASES.length),
                            React.createElement("span", null, "phrases included"))),
                    React.createElement("p", null, "No account is required. Favorites, settings, and learning progress stay in local browser storage.")),
                React.createElement("section", { className: "settings-card compact-settings" },
                    React.createElement("h3", null, "Learning & access"),
                    React.createElement(SettingToggle, { title: "Daily reminders", body: "Preference saved locally; browser notification scheduling can be added later.", checked: settings.reminders, onChange: (checked) => update({ reminders: checked }) }),
                    React.createElement("button", { type: "button", className: "settings-link", onClick: onReplayOnboarding },
                        "Replay onboarding ",
                        React.createElement("span", null, "\u2192")),
                    React.createElement("button", { type: "button", className: "settings-link", onClick: onLock },
                        "Lock site now ",
                        React.createElement("span", { "aria-hidden": "true" }, "\u2197")),
                    React.createElement("button", { type: "button", className: "settings-link danger-link", onClick: onResetProgress },
                        "Reset learning progress ",
                        React.createElement("span", null, "\u2192")),
                    React.createElement("button", { type: "button", className: "settings-link danger-link", onClick: onClearFavorites },
                        "Clear saved phrases ",
                        React.createElement("span", null, "\u2192"))),
                React.createElement("section", { className: "privacy-card" },
                    React.createElement("span", { "aria-hidden": "true" }, "\u25C9"),
                    React.createElement("div", null,
                        React.createElement("strong", null, "Privacy by default"),
                        React.createElement("p", null, "No account, location tracking, microphone recordings, or personal-data collection. Speech is generated by your device\u2019s browser."))),
                React.createElement("section", { className: "about-card" },
                    React.createElement("strong", null, "Nihongo Trip v1.5"),
                    React.createElement("p", null, "A travel phrasebook and lightweight learning PWA. Japanese should be reviewed by a qualified native-language editor before commercial release.")))));
}
function Toast({ message }) {
    return React.createElement("div", { className: "toast", role: "status", "aria-live": "polite" },
        React.createElement("span", { "aria-hidden": "true" }, "\u2713"),
        message);
}
function PasscodeGate({ onUnlock }) {
    const [passcode, setPasscode] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [error, setError] = useState('');
    const [lockedUntil, setLockedUntil] = useState(0);
    const inputRef = useRef(null);
    const locked = lockedUntil > Date.now();
    useEffect(() => {
        if (inputRef.current && !locked)
            inputRef.current.focus();
    }, [locked, passcode.length]);
    useEffect(() => {
        if (!lockedUntil)
            return;
        const remaining = Math.max(0, lockedUntil - Date.now());
        const timer = setTimeout(() => {
            setLockedUntil(0);
            setError('You can try again now.');
            setAttempts(0);
        }, remaining);
        return () => clearTimeout(timer);
    }, [lockedUntil]);
    const updatePasscode = (value) => {
        if (locked)
            return;
        const digits = value.replace(/\D/g, '').slice(0, 4);
        setPasscode(digits);
        if (error)
            setError('');
    };
    const submitPasscode = (event) => {
        if (event && event.preventDefault)
            event.preventDefault();
        if (locked)
            return;
        if (passcode.length !== 4) {
            setError('Enter all four digits.');
            return;
        }
        if (passcodeHash(passcode) === PASSCODE_HASH) {
            try {
                sessionStorage.setItem(PASSCODE_SESSION_KEY, '1');
            }
            catch (_) { }
            setError('');
            onUnlock();
            return;
        }
        const nextAttempts = attempts + 1;
        setPasscode('');
        if (nextAttempts >= PASSCODE_MAX_ATTEMPTS) {
            setAttempts(0);
            setLockedUntil(Date.now() + PASSCODE_LOCKOUT_MS);
            setError('Too many incorrect attempts. Try again in 30 seconds.');
            return;
        }
        setAttempts(nextAttempts);
        const remaining = PASSCODE_MAX_ATTEMPTS - nextAttempts;
        setError(`Incorrect passcode. ${remaining} ${remaining === 1 ? 'attempt' : 'attempts'} remaining.`);
    };
    return React.createElement("main", { className: "passcode-page" },
        React.createElement("div", { className: "passcode-backdrop", "aria-hidden": "true" },
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("i", null)),
        React.createElement("section", { className: "passcode-card", "aria-labelledby": "passcode-title" },
            React.createElement("div", { className: "passcode-brand" },
                React.createElement("span", { className: "passcode-mark", "aria-hidden": "true" }, "\u65C5"),
                React.createElement("span", null,
                    React.createElement("strong", null, "Nihongo Trip"),
                    React.createElement("small", null, "Japanese for travelers"))),
            React.createElement("div", { className: "passcode-copy" },
                React.createElement("div", { className: "eyebrow" }, "Private travel phrasebook"),
                React.createElement("h1", { id: "passcode-title" }, "Enter your passcode"),
                React.createElement("p", null, "This site is limited to invited travelers. Enter the four-digit passcode to continue.")),
            React.createElement("form", { className: "passcode-form", onSubmit: submitPasscode },
                React.createElement("label", { htmlFor: "site-passcode" }, "4-digit passcode"),
                React.createElement("div", { className: `passcode-input-wrap${error ? ' has-error' : ''}${locked ? ' is-locked' : ''}` },
                    React.createElement("span", { className: "passcode-lock", "aria-hidden": "true" }, "\u25CF"),
                    React.createElement("input", { ref: inputRef, id: "site-passcode", "aria-label": "4-digit passcode", "aria-describedby": "passcode-help passcode-error", type: "password", inputMode: "numeric", pattern: "[0-9]*", maxLength: 4, autoComplete: "off", value: passcode, disabled: locked, onChange: (event) => updatePasscode(event.target.value) }),
                    React.createElement("div", { className: "passcode-dots", "aria-hidden": "true" }, [0, 1, 2, 3].map((index) => React.createElement("span", { key: index, className: index < passcode.length ? 'filled' : '' })))),
                React.createElement("div", { id: "passcode-help", className: "passcode-help" }, "Numbers only \u00B7 access remains unlocked for this browser session"),
                React.createElement("div", { id: "passcode-error", className: `passcode-error${error ? ' visible' : ''}`, role: "alert", "aria-live": "assertive" }, error || ' '),
                React.createElement("button", { type: "button", className: "button passcode-submit", disabled: locked || passcode.length !== 4, onClick: submitPasscode },
                    "Enter Nihongo Trip ",
                    React.createElement("span", { "aria-hidden": "true" }, "\u2192"))),
            React.createElement("div", { className: "passcode-footer" },
                React.createElement("span", { "aria-hidden": "true" }, "\u25C9"),
                React.createElement("span", null, "Favorites and practice progress stay on this device."))));
}
function App({ onLock }) {
    const previewMode = new URLSearchParams(window.location.search).get('preview') === '1';
    const [onboarded, setOnboarded] = useStoredState('nt-onboarded', false);
    const [storedSettings, setStoredSettings] = useStoredState('nt-settings', DEFAULT_SETTINGS);
    const settings = { ...DEFAULT_SETTINGS, ...storedSettings };
    const setSettings = (nextSettings) => setStoredSettings({ ...DEFAULT_SETTINGS, ...nextSettings });
    const [priorities, setPriorities] = useStoredState('nt-priorities', ['restaurant', 'convenience', 'transport']);
    const [favorites, setFavorites] = useStoredState('nt-favorites', []);
    const [recent, setRecent] = useStoredState('nt-recent', []);
    const [progress, setProgress] = useStoredState('nt-progress', {});
    const [practiceDates, setPracticeDates] = useStoredState('nt-practice-dates', []);
    const [tab, setTab] = useState('home');
    const [initialCategory, setInitialCategory] = useState('all');
    const [selectedPhraseId, setSelectedPhraseId] = useState(null);
    const [showPhrase, setShowPhrase] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [online, setOnline] = useState(navigator.onLine);
    const [toast, setToast] = useState('');
    const [installPrompt, setInstallPrompt] = useState(null);
    const toastTimer = useRef(null);
    const locale = settings.interfaceLanguage;
    const streak = calculateStreak(practiceDates);
    const notify = useCallback((message) => {
        setToast(message);
        if (toastTimer.current)
            clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(''), 2800);
    }, []);
    useEffect(() => {
        document.documentElement.style.setProperty('--text-scale', String(settings.textScale));
        document.documentElement.classList.toggle('high-contrast', settings.highContrast);
        document.documentElement.classList.toggle('reduce-motion', settings.reducedMotion);
        document.documentElement.lang = locale === 'ja' ? 'ja' : 'en';
    }, [settings.textScale, settings.highContrast, settings.reducedMotion, locale]);
    useEffect(() => {
        const shortcut = window.location.hash.replace('#', '');
        if (shortcut === 'search')
            setSearchOpen(true);
        if (shortcut === 'emergency') {
            setInitialCategory('emergency');
            setTab('situations');
        }
    }, []);
    useEffect(() => {
        const goOnline = () => setOnline(true);
        const goOffline = () => setOnline(false);
        const captureInstall = (event) => { event.preventDefault(); setInstallPrompt(event); };
        window.addEventListener('online', goOnline);
        window.addEventListener('offline', goOffline);
        window.addEventListener('beforeinstallprompt', captureInstall);
        if ('serviceWorker' in navigator && location.protocol !== 'file:')
            navigator.serviceWorker.register('./service-worker.js').catch((error) => console.info('Service worker registration skipped:', error));
        return () => {
            window.removeEventListener('online', goOnline);
            window.removeEventListener('offline', goOffline);
            window.removeEventListener('beforeinstallprompt', captureInstall);
        };
    }, []);
    const toggleFavorite = (id) => {
        setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]);
        notify(favorites.includes(id) ? 'Removed from saved phrases.' : 'Saved for quick access.');
    };
    const remember = (id) => setRecent((current) => [id, ...current.filter((item) => item !== id)].slice(0, 30));
    const openPhrase = (id) => { remember(id); setSelectedPhraseId(id); };
    const displayPhrase = (id) => { const phrase = PHRASE_INDEX[id]; if (phrase) {
        remember(id);
        setSelectedPhraseId(null);
        setShowPhrase(phrase);
    } };
    const displayCustomPhrase = (phrase) => setShowPhrase(phrase);
    const chooseCategory = (category) => { setInitialCategory(category); setTab('situations'); window.scrollTo({ top: 0, behavior: settings.reducedMotion ? 'auto' : 'smooth' }); };
    const changeTab = (next) => { setTab(next); if (next !== 'situations')
        setInitialCategory('all'); window.scrollTo({ top: 0, behavior: settings.reducedMotion ? 'auto' : 'smooth' }); };
    const recordPractice = (id, correct) => {
        setProgress((current) => {
            const old = current[id] || { seen: 0, correct: 0, nextReview: 0 };
            const correctCount = old.correct + (correct ? 1 : 0);
            const interval = correct ? (correctCount <= 1 ? 24 * 60 * 60 * 1000 : correctCount === 2 ? 3 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000) : 10 * 60 * 1000;
            return { ...current, [id]: { seen: old.seen + 1, correct: correctCount, nextReview: Date.now() + interval } };
        });
        setPracticeDates((dates) => dates.includes(todayKey()) ? dates : [...dates, todayKey()]);
    };
    const navigateShownPhrase = (direction) => {
        if (!showPhrase)
            return;
        const pool = PHRASES.filter((phrase) => phrase.category === showPhrase.category && phrase.direction === showPhrase.direction);
        const index = pool.findIndex((phrase) => phrase.id === showPhrase.id);
        if (index < 0)
            return;
        const next = pool[(index + direction + pool.length) % pool.length];
        remember(next.id);
        setShowPhrase(next);
    };
    const install = async () => {
        if (!installPrompt) {
            notify('Use your browser menu and choose “Add to Home Screen.”');
            return;
        }
        installPrompt.prompt();
        await installPrompt.userChoice;
        setInstallPrompt(null);
    };
    const clearFavorites = () => { if (window.confirm('Clear all saved phrases?')) {
        setFavorites([]);
        notify('Saved phrases cleared.');
    } };
    const resetProgress = () => { if (window.confirm('Reset all practice progress and streak history?')) {
        setProgress({});
        setPracticeDates([]);
        notify('Learning progress reset.');
    } };
    const replayOnboarding = () => { setOnboarded(false); window.scrollTo(0, 0); };
    if (!onboarded && !previewMode)
        return React.createElement(Onboarding, { initialSettings: settings, onComplete: (nextSettings, nextPriorities) => { setSettings(nextSettings); setPriorities(nextPriorities); setOnboarded(true); } });
    const selectedPhrase = selectedPhraseId ? PHRASE_INDEX[selectedPhraseId] : null;
    return React.createElement("div", { className: "app-shell" },
        React.createElement(AppHeader, { locale: locale, online: online, streak: streak, onSearch: () => setSearchOpen(true) }),
        React.createElement("main", { className: "main-content" },
            tab === 'home' && React.createElement(HomePage, { settings: settings, locale: locale, favorites: favorites, recent: recent, priorities: priorities, streak: streak, onFavorite: toggleFavorite, onOpen: openPhrase, onShow: displayPhrase, onSearch: () => setSearchOpen(true), onCategory: chooseCategory, onTab: changeTab, notify: notify }),
            tab === 'situations' && React.createElement(SituationsPage, { initialCategory: initialCategory, settings: settings, locale: locale, favorites: favorites, onFavorite: toggleFavorite, onOpen: openPhrase, onShow: displayPhrase, onShowCustom: displayCustomPhrase, notify: notify }),
            tab === 'practice' && React.createElement(PracticePage, { settings: settings, priorities: priorities, progress: progress, practiceDates: practiceDates, onRecord: recordPractice, notify: notify }),
            tab === 'saved' && React.createElement(SavedPage, { settings: settings, locale: locale, favorites: favorites, recent: recent, onFavorite: toggleFavorite, onOpen: openPhrase, onShow: displayPhrase, notify: notify }),
            tab === 'settings' && React.createElement(SettingsPage, { settings: settings, onSettings: setSettings, favorites: favorites.length, studied: Object.keys(progress).length, installPrompt: installPrompt, onInstall: install, onClearFavorites: clearFavorites, onResetProgress: resetProgress, onReplayOnboarding: replayOnboarding, onLock: onLock, notify: notify })),
        React.createElement(BottomNav, { tab: tab, onChange: changeTab, locale: locale }),
        selectedPhrase && React.createElement(PhraseDetail, { phrase: selectedPhrase, settings: settings, locale: locale, favorite: favorites.includes(selectedPhrase.id), onFavorite: toggleFavorite, onClose: () => setSelectedPhraseId(null), onShow: displayPhrase, onOpen: (id) => { remember(id); setSelectedPhraseId(id); }, notify: notify }),
        showPhrase && React.createElement(FullScreenPhrase, { phrase: showPhrase, settings: settings, locale: locale, onClose: () => setShowPhrase(null), onNavigate: navigateShownPhrase, notify: notify }),
        searchOpen && React.createElement(SearchOverlay, { settings: settings, locale: locale, favorites: favorites, onFavorite: toggleFavorite, onOpen: (id) => { setSearchOpen(false); openPhrase(id); }, onShow: (id) => { setSearchOpen(false); displayPhrase(id); }, onClose: () => setSearchOpen(false), notify: notify }),
        toast && React.createElement(Toast, { message: toast }));
}
function ProtectedApp() {
    const [unlocked, setUnlocked] = useState(() => hasSessionAccess());
    const unlock = () => setUnlocked(true);
    const lock = () => {
        try {
            sessionStorage.removeItem(PASSCODE_SESSION_KEY);
        }
        catch (_) { }
        setUnlocked(false);
        window.scrollTo(0, 0);
    };
    return unlocked ? React.createElement(App, { onLock: lock }) : React.createElement(PasscodeGate, { onUnlock: unlock });
}
const mount = document.getElementById('root');
if (!mount)
    throw new Error('Missing #root element.');
ReactDOM.createRoot(mount).render(React.createElement(ProtectedApp, null));
