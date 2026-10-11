/* 3-dars: Axborot o'lchov birliklari va fayl turlari. Fayl va papkalar bilan ishlash */

AVX.dars({
  id: "cs8-003",
  sarlavha: "Axborot o'lchov birliklari va fayl turlari. Fayl va papkalar bilan ishlash (Hot keys)",
  kiritish:
    "Kompyuterda hamma narsa <b>fayl</b> ko'rinishida saqlanadi: rasm, musiqa, hujjat, dastur. Bugun fayl nima ekanini, ular qanday turlarga bo'linishini, hajmi qanday o'lchanishini va <b>tezkor tugmalar</b> yordamida qanday tez ishlashni o'rganamiz.",

  maqsad: [
    "Axborot o'lchov birliklarini bilish: bit, bayt, KB, MB, GB, TB.",
    "Fayl tushunchasi, fayl nomi va kengaytmasi qanday tuzilganini tushunish.",
    "Asosiy fayl turlarini kengaytmasi bo'yicha ajratish.",
    "Windowsda fayl va papka yaratish, nomlash, nusxalash, ko'chirish, o'chirish.",
    "Tezkor tugmalar (Hot keys) yordamida ishlash tezligini oshirish.",
  ],

  natija: [
    "Fayl hajmini to'g'ri birliklarda aytadi (masalan, 2 MB rasm).",
    "Kengaytmaga qarab fayl turini aniqlaydi (.docx &mdash; hujjat, .png &mdash; rasm).",
    "Papkalar tuzilmasini (daraxt ko'rinishida) tuzadi.",
    "Kamida 10 ta tezkor tugmani bilib, amalda qo'llaydi.",
    "Faylni o'chirib, Savatdan qayta tiklashi mumkin.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: OS nima, CMD qanday ochiladi."],
    ["5-15 daq", "Mentor tushuntirishi", "\"Kompyuterda hamma narsa fayl\" g'oyasi. Suv idishi misolida o'lchov birliklari."],
    ["15-28 daq", "Nazariya: o'lchov birliklari", "Bit, bayt, KB, MB, GB, TB. Amaliy misollar bilan hisoblash."],
    ["28-40 daq", "Nazariya: fayl turlari", "Kengaytmalar jadvali, fayl nomlash qoidalari, taqiqlangan belgilar."],
    ["40-58 daq", "Amaliyot: papkalar daraxti", "Loyiha papkasi yaratish, nusxalash, ko'chirish, o'chirish va qayta tiklash."],
    ["58-72 daq", "Tezkor tugmalar mashqi", "Ctrl+C/V/X/Z, F2, Delete, Win+E. Har biri amalda bajariladi."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har bir o'quvchi o'z papka tuzilmasini yaratadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Kompyuterda hamma narsa fayl",
      matn: [
        "Telefoningizdagi rasm, sevimli qo'shirchangiz, o'qituvchi bergan hujjat, o'ynagan o'yiningiz &mdash; bularning hammasi kompyuter uchun <em>fayl</em>. Hatto dasturlarning o'zi ham fayllardan yig'ilgan.",
        "Fayl &mdash; bu kompyuter xotirasida alohida nom bilan saqlanadigan ma'lumot to'plami. Uning ikkita muhim qismi bor: <b>nom</b> va <b>kengaytma</b>. Masalan, <code>rasm.png</code> &mdash; bu yerda <code>rasm</code> nomi, <code>.png</code> esa kengaytma.",
        "Nega kengaytma kerak? Chunki u kompyuterga \"bu faylni qaysi dastur bilan ochish kerak\"ligini aytadi. <code>.png</code> ko'rsa &mdash; rasm dasturini ochadi, <code>.mp3</code> ko'rsa &mdash; musiqa pleyerini.",
      ],
    },
    {
      sarlavha: "2. O'lchov birliklarini qanday tasavvur qilish kerak",
      matn: [
        "Suv idishlarini eslang: stakan, chelak, bochka. Fayl hajmi ham xuddi shunday bosqichma-bosqich ortadi.",
        "<b>Bit</b> &mdash; eng kichik birlik. U 0 yoki 1 qiymatini oladi, ya'ni \"bor-yo'q\". <b>Bayt</b> &mdash; 8 bitdan iborat. Bitta harf (masalan, \"A\") taxminan 1 bayt joy egallaydi.",
        "Keyin: <b>KB</b> &mdash; kichik matn, <b>MB</b> &mdash; bitta rasm yoki qo'shiq, <b>GB</b> &mdash; film yoki katta dastur, <b>TB</b> &mdash; butun disk. Diqqat qiling: har bir qadam <em>1024 marta</em> katta, 1000 emas!",
      ],
    },
    {
      sarlavha: "3. Papkalar &mdash; tartibning kaliti",
      matn: [
        "Agar hamma fayl bitta joyda yotgan bo'lsa, kerakli faylni topish qiyin bo'ladi. Papka &mdash; fayllarni mavzularga ajratib saqlash uchun \"konvert\".",
        "Dasturchining qoidasi: har bir loyiha uchun <b>alohida papka</b>. Ichida esa <code>css</code>, <code>js</code>, <code>img</code> kabi kichik papkalar. Keyingi darslarda biz shunday tuzilmada ishlaymiz.",
        "Muhim maslahat: fayl nomini berishda <b>bo'sh joy o'rniga chiziqcha (-)</b> ishlatish yaxshi: <code>uyga-vazifa-1.docx</code>. Veb-saytlarda esa bu <em>majburiy</em> qoidaga aylanadi.",
      ],
    },
    {
      sarlavha: "4. Tezkor tugmalar &mdash; vaqtni tejaydigan sehr",
      matn: [
        "Sichqoncha bilan ishlash ham yaxshi, lekin tezkor tugmalar sizni <em>2-3 baravar</em> tezlashtiradi. Buni bir misolda ko'rsataman: faylni nusxalash uchun sichqoncha bilan 4-5 marta bosish kerak. Klaviatura bilan esa: <b>Ctrl + C</b>, <b>Ctrl + V</b>. Tamom.",
        "Bugun biz 12 tadan ortiq tezkor tugmani o'rganamiz. Ularning 6 tasini <em>o'z qo'lingiz bilan</em> sinab ko'rmasangiz, esda qolmaydi. Shuning uchun hozir hammangiz kompyuteringizni ochib, men bilan birga takrorlaysiz.",
        "Ayniqsa <b>Ctrl + Z</b> ni yodda tuting &mdash; bu \"orqaga qaytarish\" tugmasi. Dasturchilikda xato qilish odatiy hol, lekin uni qaytarishni bilish &mdash; haqiqiy mahorat.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Axborot o'lchov birliklari",
      matn: [
        "Kompyuterda ma'lumot hajmi quyidagi birliklarda o'lchanadi. Har bir keyingi birlik oldingisidan <b>1024 marta</b> katta.",
      ],
      jadval: [
        ["Birlik", "Belgisi", "Nimaga teng", "Amaliy misol"],
        ["Bit", "bit", "0 yoki 1", "Eng kichik o'lchov birligi"],
        ["Bayt", "B", "8 bit", "Bitta harf (\"A\") taxminan 1 bayt"],
        ["Kilobayt", "KB", "1024 bayt", "Kichik matnli fayl, eslatma"],
        ["Megabayt", "MB", "1024 KB", "Bitta rasm, 3-5 daqiqalik qo'shiq"],
        ["Gigabayt", "GB", "1024 MB", "Bitta film, katta dastur"],
        ["Terabayt", "TB", "1024 GB", "Tashqi qattiq disk hajmi"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Diqqat!",
        matn: "Ko'p odamlar 1 GB ni 1000 MB deb o'ylaydi. Aslida <b>1 GB = 1024 MB</b>. Sababi &mdash; kompyuter 2-lik sanoq tizimida ishlaydi va 2<sup>10</sup> = 1024. Disk ishlab chiqaruvchilar esa 1000 hisobida yozadi &mdash; shuning uchun \"500 GB disk\" aslida 465 GB ko'rinadi.",
      },
    },
    {
      sarlavha: "2. Fayl nomi qanday tuzilgan?",
      matn: [
        "Fayl nomi ikki qismdan iborat: <b>nom.kengaytma</b>. Masalan <code>dars-rejasi.docx</code>.",
      ],
      jadval: [
        ["Qism", "Misol", "Vazifasi"],
        ["Nom", "dars-rejasi", "Faylni tanib olishga yordam beradi"],
        ["Nuqta", ".", "Nom va kengaytmani ajratadi"],
        ["Kengaytma", ".docx", "Fayl turini va ochiladigan dasturni belgilaydi"],
      ],
      royhat: [
        "<b>Mumkin:</b> lotin harflari, raqamlar, chiziqcha (-), pastki chiziq (_).",
        "<b>Mumkin emas:</b> <code>\\ / : * ? \" &lt; &gt; |</code> belgilari.",
        "<b>Maslahat:</b> bo'sh joy o'rniga chiziqcha ishlatish (<code>uy-vazifa-1</code>).",
        "<b>Maslahat:</b> nom qisqa va mazmunli bo'lsin &mdash; <code>ish.docx</code> emas, <code>chorak-hisobot.docx</code>.",
        "<b>Diqqat:</b> <code>.exe</code> kengaytmali faylni faqat ishonchli manbadan oling.",
      ],
    },
    {
      sarlavha: "3. Asosiy fayl turlari (kengaytmalar)",
      matn: [
        "Fayllar vazifasiga qarab guruhlarga bo'linadi. Quyidagi jadvalni yodlab olsangiz, har qanday faylni nomidan taniy olasiz.",
      ],
      jadval: [
        ["Guruh", "Kengaytmalar", "Ochiladigan dastur"],
        ["Matnli hujjatlar", ".txt, .docx, .pdf, .rtf", "Notepad, Word, PDF o'quvchi"],
        ["Jadvallar", ".xlsx, .csv", "Excel, Google Sheets"],
        ["Taqdimotlar", ".pptx", "PowerPoint, Google Slides"],
        ["Rasmlar", ".png, .jpg, .gif, .svg, .webp", "Rasm ko'ruvchi, brauzer"],
        ["Audio", ".mp3, .wav, .ogg", "Musiqa pleyeri"],
        ["Video", ".mp4, .avi, .mkv", "Video pleyer"],
        ["Arxivlar", ".zip, .rar, .7z", "WinRAR, 7-Zip"],
        ["Dasturlar", ".exe, .msi, .bat", "Operatsion tizim"],
        ["Veb-sahifalar", ".html, .css, .js", "Brauzer, VS Code"],
      ],
    },
    {
      sarlavha: "4. Fayl va papkalar bilan asosiy amallar",
      matn: [
        "Windowsda fayl va papkalar bilan bajariladigan asosiy amallar quyidagilar.",
      ],
      jadval: [
        ["Amal", "Nima qilinadi", "Tezkor tugma"],
        ["Yaratish", "Yangi papka yoki fayl ochish", "Ctrl + Shift + N (papka)"],
        ["Nusxalash", "Faylning ikkinchi nusxasi qoladi", "Ctrl + C &rarr; Ctrl + V"],
        ["Ko'chirish", "Fayl boshqa joyga o'tadi", "Ctrl + X &rarr; Ctrl + V"],
        ["Nomini o'zgartirish", "Fayl nomini almashtirish", "F2"],
        ["O'chirish", "Faylni Savatga tashlash", "Delete"],
        ["Butunlay o'chirish", "Savatga tashlamasdan o'chirish", "Shift + Delete"],
        ["Qaytarish", "Oxirgi amalni bekor qilish", "Ctrl + Z"],
        ["Belgilash (hammasi)", "Papkadagi barcha fayllar", "Ctrl + A"],
        ["Fayl qidirish", "Papkada qidirish", "Ctrl + F"],
        ["Xususiyatlar", "Fayl hajmi va turi", "Alt + Enter"],
      ],
    },
    {
      sarlavha: "5. Windowsda eng kerakli tezkor tugmalar",
      matn: [
        "Quyidagi tugmalarni bugun amalda sinab ko'rish shart.",
      ],
      jadval: [
        ["Tugma", "Vazifasi"],
        ["Win + E", "Fayl menejerini (Explorer) ochish"],
        ["Win + D", "Ish stolini ko'rsatish / qaytarish"],
        ["Win + L", "Kompyuterni bloklash"],
        ["Alt + Tab", "Ochiq oynalar orasida o'tish"],
        ["Ctrl + Shift + N", "Yangi papka yaratish"],
        ["F2", "Nomini o'zgartirish"],
        ["F5", "Yangilash"],
        ["Alt + ←", "Orqaga (oldingi papkaga)"],
        ["Ctrl + Z / Ctrl + Y", "Bekor qilish / qaytarish"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "sxema",
      "sarlavha": "Axborot o'lchov birliklari",
      "tushuntirish": "Kompyuterda hamma ma'lumot <b>bit</b> va <b>bayt</b> bilan o'lchanadi. Har bir keyingi birlik oldingisidan <b>1024 marta</b> katta.",
      "svg": "<svg viewBox=\"0 0 700 370\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Axborot olchov birliklari zinapoyasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"368\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx3ok\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\">\n      <path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#22d3a6\"/>\n    </marker>\n  </defs>\n  <rect x=\"28\" y=\"290\" width=\"86\" height=\"46\" rx=\"9\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"71\" y=\"312\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">bit</text>\n  <text x=\"71\" y=\"328\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">0 yoki 1</text>\n  <rect x=\"140\" y=\"250\" width=\"86\" height=\"46\" rx=\"9\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"183\" y=\"272\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">bayt</text>\n  <text x=\"183\" y=\"288\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">8 bit</text>\n  <rect x=\"252\" y=\"210\" width=\"86\" height=\"46\" rx=\"9\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"295\" y=\"232\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">KB</text>\n  <text x=\"295\" y=\"248\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">1 024 bayt</text>\n  <rect x=\"364\" y=\"170\" width=\"86\" height=\"46\" rx=\"9\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"407\" y=\"192\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">MB</text>\n  <text x=\"407\" y=\"208\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">1 024 KB</text>\n  <rect x=\"476\" y=\"130\" width=\"86\" height=\"46\" rx=\"9\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"519\" y=\"152\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">GB</text>\n  <text x=\"519\" y=\"168\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">1 024 MB</text>\n  <rect x=\"588\" y=\"90\" width=\"86\" height=\"46\" rx=\"9\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"631\" y=\"112\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">TB</text>\n  <text x=\"631\" y=\"128\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">1 024 GB</text>\n  <line x1=\"114\" y1=\"313\" x2=\"136\" y2=\"283\" stroke=\"#22d3a6\" stroke-width=\"2\" marker-end=\"url(#avx3ok)\"/>\n  <line x1=\"226\" y1=\"273\" x2=\"248\" y2=\"243\" stroke=\"#22d3a6\" stroke-width=\"2\" marker-end=\"url(#avx3ok)\"/>\n  <line x1=\"338\" y1=\"233\" x2=\"360\" y2=\"203\" stroke=\"#22d3a6\" stroke-width=\"2\" marker-end=\"url(#avx3ok)\"/>\n  <line x1=\"450\" y1=\"193\" x2=\"472\" y2=\"163\" stroke=\"#22d3a6\" stroke-width=\"2\" marker-end=\"url(#avx3ok)\"/>\n  <line x1=\"562\" y1=\"153\" x2=\"584\" y2=\"123\" stroke=\"#22d3a6\" stroke-width=\"2\" marker-end=\"url(#avx3ok)\"/>\n  <text x=\"350\" y=\"340\" fill=\"#22d3a6\" font-size=\"12.5\" text-anchor=\"middle\">bit &#8594; bayt: &#215;8         qolgan har bir qadam: &#215;1024</text>\n  <text x=\"350\" y=\"360\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Kompyuter 1024 bilan hisoblaydi (2 ning 10-darajasi), odamlar esa ko'pincha 1000 deb aytadi.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Har bir birlik nimaga teng?",
      "tushuntirish": "Bu jadvalni yodlab olsangiz, fayl hajmini bemalol o'qiy olasiz.",
      "elementlar": [
        {
          "belgi": "🔢",
          "nom": "1 bit",
          "izoh": "Eng kichik birlik: 0 yoki 1"
        },
        {
          "belgi": "🔤",
          "nom": "1 bayt = 8 bit",
          "izoh": "Bitta lotin harfi taxminan 1 bayt"
        },
        {
          "belgi": "📝",
          "nom": "1 KB = 1024 bayt",
          "izoh": "Kichik matn fayli"
        },
        {
          "belgi": "🖼️",
          "nom": "1 MB = 1024 KB",
          "izoh": "Bitta rasm yoki 1 daqiqalik qo'shiq"
        },
        {
          "belgi": "🎬",
          "nom": "1 GB = 1024 MB",
          "izoh": "Bitta film yoki o'yin"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"6.5\"/><circle cx=\"22\" cy=\"24\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M34 20v8\"/></svg>",
          "nom": "1 TB = 1024 GB",
          "izoh": "Katta qattiq disk hajmi"
        }
      ],
      "izoh": "Qisqartmalar: <b>KB</b> &mdash; kilobayt, <b>MB</b> &mdash; megabayt, <b>GB</b> &mdash; gigabayt, <b>TB</b> &mdash; terabayt."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Hajm qanday ko'rinadi?",
      "tushuntirish": "Birliklarni hayotiy narsalar bilan solishtiramiz.",
      "ustunlar": [
        {
          "belgi": "📝",
          "sarlavha": "Kichik (KB)",
          "royxat": [
            "1 bet matn &asymp; 2 KB",
            "Slayd taqdimoti &asymp; 500 KB",
            "Kichik rasm &asymp; 80 KB"
          ]
        },
        {
          "belgi": "🎵",
          "sarlavha": "O'rtacha (MB)",
          "turi": "brand",
          "royxat": [
            "1 daqiqalik qo'shiq &asymp; 1-3 MB",
            "Telefon rasmi &asymp; 3-5 MB",
            "Bir necha sahifali PDF &asymp; 2 MB"
          ]
        },
        {
          "belgi": "🎬",
          "sarlavha": "Katta (GB)",
          "turi": "yaxshi",
          "royxat": [
            "1 soatlik film &asymp; 1-2 GB",
            "Zamonaviy o'yin &asymp; 30-80 GB",
            "Butun Windows tizimi &asymp; 25 GB"
          ]
        }
      ]
    },
    {
      "tur": "ikonka",
      "sarlavha": "Hujjat fayllari",
      "tushuntirish": "Kengaytma (nuqtadan keyingi harflar) fayl turini bildiradi. Windows shunga qarab tegishli dasturda ochadi.",
      "elementlar": [
        {
          "belgi": "📄",
          "nom": ".docx",
          "izoh": "Word hujjati"
        },
        {
          "belgi": "📊",
          "nom": ".xlsx",
          "izoh": "Excel jadvali"
        },
        {
          "belgi": "📽️",
          "nom": ".pptx",
          "izoh": "PowerPoint taqdimoti"
        },
        {
          "belgi": "📕",
          "nom": ".pdf",
          "izoh": "O'qish uchun hujjat"
        },
        {
          "belgi": "📝",
          "nom": ".txt",
          "izoh": "Oddiy matn"
        },
        {
          "belgi": "📃",
          "nom": ".rtf",
          "izoh": "Formatlangan matn"
        }
      ],
      "izoh": "Maktabda eng ko'p ishlatiladigan: <b>.docx</b>, <b>.pptx</b> va <b>.pdf</b>."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Rasm, ovoz va video fayllari",
      "tushuntirish": "Media fayllar kengaytmasi bo'yicha ajratiladi.",
      "elementlar": [
        {
          "belgi": "🖼️",
          "nom": ".jpg / .png",
          "izoh": "Rasm"
        },
        {
          "belgi": "🎞️",
          "nom": ".gif",
          "izoh": "Harakatlanuvchi rasm"
        },
        {
          "belgi": "🎵",
          "nom": ".mp3",
          "izoh": "Musiqa"
        },
        {
          "belgi": "🎤",
          "nom": ".wav",
          "izoh": "Sifatli ovoz yozuvi"
        },
        {
          "belgi": "🎬",
          "nom": ".mp4",
          "izoh": "Video"
        },
        {
          "belgi": "🎨",
          "nom": ".svg",
          "izoh": "Kattalashtirsa buzilmaydigan rasm"
        }
      ]
    },
    {
      "tur": "ikonka",
      "sarlavha": "Dastur va boshqa fayllar",
      "tushuntirish": "Bu turdagi fayllar bilan ishlashda ehtiyot bo'lish kerak &mdash; ayniqsa <b>.exe</b> bilan.",
      "elementlar": [
        {
          "belgi": "⚙️",
          "nom": ".exe",
          "izoh": "Ishga tushadigan dastur"
        },
        {
          "belgi": "📦",
          "nom": ".zip / .rar",
          "izoh": "Arxiv (siqilgan fayllar)"
        },
        {
          "belgi": "🌐",
          "nom": ".html",
          "izoh": "Veb sahifa"
        },
        {
          "belgi": "🐍",
          "nom": ".py",
          "izoh": "Python dasturi"
        },
        {
          "belgi": "💿",
          "nom": ".iso",
          "izoh": "Disk obrazi"
        },
        {
          "belgi": "🧾",
          "nom": ".json",
          "izoh": "Ma'lumot fayli"
        }
      ],
      "izoh": "Internetdan kelgan <b>.exe</b> faylni ishga tushirishdan oldin <b>antivirus bilan tekshirish</b> shart."
    },
    {
      "tur": "sxema",
      "sarlavha": "Fayl nomi qismlarga bo'linadi",
      "tushuntirish": "Fayl nomi ikki qismdan iborat: <b>asosiy nom</b> va <b>kengaytma</b>. Ular nuqta bilan ajratiladi.",
      "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Fayl nomining tuzilishi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"180\" y=\"80\" width=\"340\" height=\"60\" rx=\"10\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"120\" fill=\"#e6ecff\" font-size=\"26\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">uyga-vazifa.docx</text>\n  <rect x=\"180\" y=\"80\" width=\"248\" height=\"60\" rx=\"10\" fill=\"none\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <rect x=\"428\" y=\"80\" width=\"92\" height=\"60\" rx=\"10\" fill=\"none\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <line x1=\"304\" y1=\"148\" x2=\"304\" y2=\"196\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"304\" y=\"218\" fill=\"#4f8cff\" font-size=\"13.5\" text-anchor=\"middle\" font-weight=\"700\">ASOSIY NOM</text>\n  <text x=\"304\" y=\"238\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Fayl nima haqida ekanini bildiradi</text>\n  <line x1=\"474\" y1=\"148\" x2=\"474\" y2=\"196\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"474\" y=\"218\" fill=\"#ffb020\" font-size=\"13.5\" text-anchor=\"middle\" font-weight=\"700\">NUQTA</text>\n  <text x=\"474\" y=\"238\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Ajratuvchi belgi</text>\n  <line x1=\"596\" y1=\"110\" x2=\"640\" y2=\"110\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"646\" y=\"106\" fill=\"#22d3a6\" font-size=\"13\" font-weight=\"700\">KENGAYTMA</text>\n  <text x=\"646\" y=\"124\" fill=\"#93a0bd\" font-size=\"12\">Fayl turini bildiradi</text>\n  <text x=\"350\" y=\"276\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Kengaytmani o'zgartirsangiz, dastur faylni ocholmay qolishi mumkin.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Fayl nomida ishlatilmaydigan belgilar",
      "tushuntirish": "Bu belgilar Windows'da maxsus ma'noga ega. Nomda bo'lsa, fayl saqlanmaydi yoki xato beradi.",
      "elementlar": [
        {
          "belgi": "🚫",
          "nom": "\\",
          "izoh": "Papkalar yo'lini ajratadi"
        },
        {
          "belgi": "🚫",
          "nom": "/",
          "izoh": "Veb manzillarda ishlatiladi"
        },
        {
          "belgi": "🚫",
          "nom": ":",
          "izoh": "Disk harfidan keyin qo'yiladi (C:)"
        },
        {
          "belgi": "🚫",
          "nom": "*  va  ?",
          "izoh": "Qidiruvda ishlatiladi"
        },
        {
          "belgi": "🚫",
          "nom": "\"  va  < >",
          "izoh": "Maxsus belgilar"
        },
        {
          "belgi": "🚫",
          "nom": "|",
          "izoh": "Buyruqlarda ishlatiladi"
        }
      ],
      "izoh": "Yaxshi nom: <b>uyga-vazifa-oktabr.docx</b>. Yomon nom: <b>uyga/vazifa:oktabr?.docx</b>."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Nusxalash va Ko'chirish farqi",
      "tushuntirish": "Ikkalasi bir xil ko'rinadi, lekin natijasi boshqa. Buni bilmaslik fayllarni yo'qotishga olib keladi.",
      "ustunlar": [
        {
          "belgi": "📄",
          "sarlavha": "Nusxalash (Copy)",
          "turi": "brand",
          "royxat": [
            "Fayl <b>ikki joyda</b> qoladi",
            "Eskisi o'z joyida turadi",
            "Ctrl + C &rarr; Ctrl + V",
            "Zaxira nusxa uchun ishlatiladi"
          ]
        },
        {
          "belgi": "➡️",
          "sarlavha": "Ko'chirish (Cut)",
          "turi": "yomon",
          "royxat": [
            "Fayl <b>faqat yangi joyda</b> qoladi",
            "Eski joyidan o'chib ketadi",
            "Ctrl + X &rarr; Ctrl + V",
            "Tartibga solish uchun ishlatiladi"
          ]
        }
      ],
      "izoh": "Chalkashsangiz: <b>Copy</b> &mdash; ko'chirma olib qo'yish, <b>Cut</b> &mdash; qirqib olish."
    },
    {
      "tur": "royxat",
      "sarlavha": "Fayl bilan ishlashning tezkor tugmalari",
      "tushuntirish": "Bu tugmalarni bilsangiz, sichqonchaga deyarli ehtiyoj qolmaydi.",
      "elementlar": [
        {
          "belgi": "📋",
          "nom": "Ctrl + C",
          "izoh": "Nusxalash"
        },
        {
          "belgi": "✂️",
          "nom": "Ctrl + X",
          "izoh": "Qirqib olish (ko'chirish)"
        },
        {
          "belgi": "📥",
          "nom": "Ctrl + V",
          "izoh": "Qo'yish (joylashtirish)"
        },
        {
          "belgi": "↩️",
          "nom": "Ctrl + Z",
          "izoh": "Oxirgi amalni bekor qilish"
        },
        {
          "belgi": "💾",
          "nom": "Ctrl + S",
          "izoh": "Saqlash"
        },
        {
          "belgi": "🔤",
          "nom": "Ctrl + A",
          "izoh": "Hammasini belgilash"
        },
        {
          "belgi": "🗑️",
          "nom": "Delete",
          "izoh": "Savatga tashlash"
        },
        {
          "belgi": "🧹",
          "nom": "Shift + Delete",
          "izoh": "Savatga solmasdan o'chirish (qaytarib bo'lmaydi!)"
        }
      ],
      "izoh": "Ctrl + S ni <b>har 5 daqiqada</b> bosish odatini qiling &mdash; tok o'chsa ham ishingiz saqlanadi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Fayl xususiyatlari oynasi",
      "tushuntirish": "Faylning hajmi, turi va joyini bilish uchun unga <b>o'ng tugma</b> bosib, <b>«Xususiyatlar»</b> (Properties) tanlanadi.",
      "oyna": {
        "nom": "uyga-vazifa.docx — Xususiyatlar",
        "manzil": "Umumiy  |  Xavfsizlik  |  Tafsilotlar",
        "ustunlar": [
          "Ko'rsatkich",
          "Qiymat"
        ],
        "qatorlar": [
          [
            "Turi",
            "Microsoft Word hujjati (.docx)"
          ],
          [
            "Joylashuvi",
            "C:\\Users\\Kallibek\\Documents"
          ],
          [
            "Hajmi",
            "24,5 KB (25 088 bayt)"
          ],
          [
            "Yaratilgan",
            "05.10.2026, 14:32"
          ],
          [
            "O'zgartirilgan",
            "07.10.2026, 09:15"
          ]
        ]
      },
      "izoh": "Hajm qavs ichida <b>baytlarda</b> ko'rsatiladi. 25 088 bayt &asymp; 24,5 KB."
    },
    {
      "tur": "royxat",
      "sarlavha": "Fayl bilan qilinadigan asosiy amallar",
      "tushuntirish": "Fayl ustida o'ng tugma bosganda shu amallar chiqadi.",
      "elementlar": [
        {
          "belgi": "📂",
          "nom": "Ochish (Open)",
          "izoh": "Tegishli dasturda ochiladi"
        },
        {
          "belgi": "✏️",
          "nom": "Nomini o'zgartirish",
          "izoh": "F2 tugmasi yoki «Rename»"
        },
        {
          "belgi": "📋",
          "nom": "Nusxalash / Ko'chirish",
          "izoh": "Zaxira yoki tartibga solish"
        },
        {
          "belgi": "🗑️",
          "nom": "O'chirish",
          "izoh": "Savatga tashlanadi"
        },
        {
          "belgi": "📦",
          "nom": "Arxivga joylash",
          "izoh": "Bitta fayl qilib o'rash"
        },
        {
          "belgi": "🔒",
          "nom": "Xususiyatlar",
          "izoh": "Faqat o'qish uchun qilib belgilash"
        }
      ]
    },
    {
      "tur": "qadam",
      "sarlavha": "Faylni savatdan tiklash",
      "tushuntirish": "Xato o'chirib yuborilgan faylni qaytarish mumkin &mdash; agar savat bo'shatilmagan bo'lsa.",
      "elementlar": [
        {
          "nom": "Savatni ochish",
          "izoh": "Ish stolidagi 🗑️ belgisiga ikki marta bosish"
        },
        {
          "nom": "Kerakli faylni topish",
          "izoh": "O'chirilgan vaqtini eslab qolish foydali"
        },
        {
          "nom": "O'ng tugma",
          "izoh": "Menyudan «Qaytarish» (Restore) tanlanadi"
        },
        {
          "nom": "Fayl o'z joyiga qaytadi",
          "izoh": "Avval turgan papkasiga tushadi"
        },
        {
          "nom": "Savatni bo'shatish",
          "izoh": "«Savatni tozalash» &mdash; hammasi butunlay o'chadi"
        }
      ],
      "izoh": "<b>Shift + Delete</b> bilan o'chirilgan faylni savatdan topib bo'lmaydi &mdash; u darhol yo'qoladi."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Windows'da fayllar qanday ko'rinadi",
      "tushuntirish": "Kengaytma dasturga bog'langan bo'lsa, Windows o'z belgisini ko'rsatadi. Shundan fayl turini bir qarashda bilish mumkin.",
      "elementlar": [
        {
          "belgi": "🔵",
          "nom": "Word belgisi",
          "izoh": "Ko'k rangli hujjat"
        },
        {
          "belgi": "🟢",
          "nom": "Excel belgisi",
          "izoh": "Yashil rangli jadval"
        },
        {
          "belgi": "🟠",
          "nom": "PowerPoint belgisi",
          "izoh": "Qizg'ish rangli taqdimot"
        },
        {
          "belgi": "🔴",
          "nom": "PDF belgisi",
          "izoh": "O'qish uchun hujjat"
        },
        {
          "belgi": "🖼️",
          "nom": "Rasm belgisi",
          "izoh": "Rasmning kichik ko'rinishi"
        },
        {
          "belgi": "❓",
          "nom": "Noma'lum belgisi",
          "izoh": "Bu turni ochadigan dastur yo'q"
        }
      ],
      "izoh": "Agar fayl belgisi <b>oq varaq</b> bo'lib tursa &mdash; bu turni ochadigan dastur o'rnatilmagan."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Saqlash vositalari sig'imi",
      "tushuntirish": "Vaqt o'tgan sari saqlash hajmi o'sib bordi.",
      "ustunlar": [
        {
          "belgi": "💾",
          "sarlavha": "Eski vositalar",
          "turi": "yomon",
          "royxat": [
            "Floppi disk &mdash; 1,44 MB",
            "CD disk &mdash; 700 MB",
            "DVD disk &mdash; 4,7 GB",
            "Flesh xotira (eski) &mdash; 512 MB"
          ]
        },
        {
          "belgi": "⚡",
          "sarlavha": "Zamonaviy vositalar",
          "turi": "yaxshi",
          "royxat": [
            "Flesh xotira &mdash; 16-128 GB",
            "Xotira kartasi &mdash; 32-512 GB",
            "Tashqi disk &mdash; 1-4 TB",
            "Bulutli xotira &mdash; cheksizga yaqin"
          ]
        }
      ],
      "izoh": "Bitta DVD (4,7 GB) ichiga taxminan <b>3 300 ta</b> floppi disk sig'adi."
    }
  ],

  amaliy: [
    "<b>Win + E</b> bilan fayl menejerini oching va ish stolida <code>Darslar</code> papkasini yarating.",
    "Ichida <code>rasmlar</code>, <code>hujjatlar</code>, <code>kod</code> nomli uchta papka yarating (Ctrl + Shift + N).",
    "Har bir papkaga mos fayl joylashtiring: rasm, matnli hujjat va <code>index.html</code> fayli.",
    "Bitta faylni <b>Ctrl + C</b> va <b>Ctrl + V</b> bilan nusxalang, keyin <b>F2</b> bilan nomini o'zgartiring.",
    "Faylni <b>Delete</b> bilan o'chirib, <b>Savatdan</b> qayta tiklang. So'ng <b>Ctrl + Z</b> ni sinab ko'ring.",
    "<code>cmd</code> da <code>tree /F</code> buyrug'ini bajarib, yaratgan papkangiz daraxtini ko'ring.",
    "Windows Explorer da bitta faylni belgilab, <b>Alt + Enter</b> bosing &mdash; uning hajmi va turi ko'rsatiladi.",
  ],

  uyga: [
    {
      "savol": "Quyidagi hajmlarni to'g'ri birlikka aylantiring: a) 2048 KB = ? MB &nbsp; b) 3 GB = ? MB &nbsp; c) 4096 MB = ? GB &nbsp; d) 1 TB = ? GB",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ul><li>a) 2048 KB = <b>2 MB</b> (2048 &divide; 1024);</li><li>b) 3 GB = <b>3072 MB</b> (3 &times; 1024);</li><li>c) 4096 MB = <b>4 GB</b> (4096 &divide; 1024);</li><li>d) 1 TB = <b>1024 GB</b>.</li></ul><p>Qoida: kichik birlikdan kattaga o'tsangiz &mdash; <b>bo'lasiz</b>, kattadan kichikka &mdash; <b>ko'paytirasiz</b>. Har safar 1024 ga.</p>"
    },
    {
      "savol": "Fayl nomi qanday qismlardan tuzilgan? <code>chorak-hisobot.docx</code> misolida tushuntiring.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<p>Fayl nomi ikki qismdan iborat, ular <b>nuqta</b> bilan ajratiladi:</p><ul><li><b>chorak-hisobot</b> &mdash; asosiy nom (fayl nima haqida ekanini bildiradi);</li><li><b>.docx</b> &mdash; kengaytma (fayl turini bildiradi).</li></ul><p>Kengaytma Windows'ga faylni qaysi dasturda ochishni aytadi. Shu sababli uni o'zgartirish tavsiya etilmaydi &mdash; fayl ochilmay qolishi mumkin.</p>"
    },
    {
      "savol": "Quyidagi kengaytmalar qaysi turga tegishli? <code>.png, .pdf, .mp3, .zip, .html, .exe, .xlsx, .mp4</code>",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Kengaytma</th><th>Turi</th><th>Ochadigan dastur</th></tr></thead><tbody><tr><td>.png</td><td>Rasm</td><td>Photos / Paint</td></tr><tr><td>.pdf</td><td>Hujjat (o'qish uchun)</td><td>Brauzer, Acrobat</td></tr><tr><td>.mp3</td><td>Musiqa</td><td>Media Player</td></tr><tr><td>.zip</td><td>Arxiv</td><td>WinRAR, Explorer</td></tr><tr><td>.html</td><td>Veb sahifa</td><td>Brauzer</td></tr><tr><td>.exe</td><td>Dastur</td><td>Windows o'zi</td></tr><tr><td>.xlsx</td><td>Jadval</td><td>Excel</td></tr><tr><td>.mp4</td><td>Video</td><td>Media Player</td></tr></tbody></table>"
    },
    {
      "savol": "<b>Ctrl + C</b> va <b>Ctrl + X</b> o'rtasidagi farqni tushuntiring. Qaysi holatda qaysi biri ishlatiladi?",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<ul><li><b>Ctrl + C (Copy)</b> &mdash; nusxa oladi. Eski fayl o'z joyida qoladi. <em>Zaxira nusxa</em> kerak bo'lganda ishlatiladi.</li><li><b>Ctrl + X (Cut)</b> &mdash; qirqib oladi. Fayl yangi joyga qo'yilgach, eskisidan o'chadi. <em>Tartibga solish</em> uchun ishlatiladi.</li></ul><p>Ikkalasi ham <b>Ctrl + V</b> bilan yakunlanadi. Chalkashsangiz: Copy &mdash; ko'chirma, Cut &mdash; qirqib olish.</p>"
    },
    {
      "savol": "Daftaringizga o'lchov birliklari zinapoyasini chizing: <b>bit &rarr; bayt &rarr; KB &rarr; MB &rarr; GB &rarr; TB</b>. Har bir qadam yoniga necha marta kattalashishini yozing.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<pre><code>                            +------+\n                            |  TB  |  1 024 GB\n                     +------+------+\n                     |  GB  |      1 024 MB\n              +------+------+\n              |  MB  |           1 024 KB\n       +------+------+\n       |  KB  |                1 024 bayt\n+------+------+\n| bayt |                     8 bit\n+------+\n| bit  |                     0 yoki 1\n+------+</code></pre><p>Muhim: <b>bit &rarr; bayt</b> qadami <b>&times;8</b>, qolgan barcha qadamlar <b>&times;1024</b>.</p>"
    },
    {
      "savol": "O'zingizning o'quv loyihangiz uchun papka tuzilmasini daftaringizga chizing va keyin uni kompyuterda yarating. Ichida kamida 4 ta papka va 5 ta fayl bo'lsin.",
      "tezlik": "Taxminiy vaqt: 12 daqiqa",
      "javob": "<p><b>Namuna chizma:</b></p><pre><code>Disk (C:) &rsaquo; Mening-loyiham\n  +-- 1-chorak\n  |    +-- uyga-vazifa.docx\n  |    +-- sxema.png\n  +-- 2-chorak\n  |    +-- jadval.xlsx\n  +-- rasmlar\n  |    +-- kompyuter.jpg\n  +-- hujjatlar\n       +-- rejam.txt</code></pre><p>Baholanadi: papkalar tartibli nomlanganmi, fayllar to'g'ri kengaytmada saqlanganmi, nomlarida taqiqlangan belgi yo'qmi.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): o'z papkangizdagi 5 ta faylni tanlab, jadval tuzing &mdash; nomi, kengaytmasi, turi va hajmi.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<p>Namuna jadval (raqamlar sizda boshqacha bo'ladi):</p><table class=\"reja-table\"><thead><tr><th>Nomi</th><th>Kengaytma</th><th>Turi</th><th>Hajmi</th></tr></thead><tbody><tr><td>uyga-vazifa</td><td>.docx</td><td>Word hujjati</td><td>24 KB</td></tr><tr><td>jadval</td><td>.xlsx</td><td>Excel jadvali</td><td>56 KB</td></tr><tr><td>sxema</td><td>.png</td><td>Rasm</td><td>180 KB</td></tr><tr><td>qoshiq</td><td>.mp3</td><td>Musiqa</td><td>3,2 MB</td></tr><tr><td>arxiv</td><td>.zip</td><td>Arxiv</td><td>1,4 MB</td></tr></tbody></table><p>Hajmni bilish uchun faylga o'ng tugma bosib, <b>«Xususiyatlar»</b> ni tanlang.</p>"
    }
  ],

  test: [
    {
      savol: "1 KB necha baytga teng?",
      variantlar: ["100 bayt", "1000 bayt", "1024 bayt", "8 bayt"],
      togri: 2,
      izoh: "1 KB = 1024 bayt. Kompyuter 2-lik sanoq tizimida ishlagani uchun 2^10 = 1024.",
    },
    {
      savol: "1 bayt necha bitdan iborat?",
      variantlar: ["4 bit", "8 bit", "16 bit", "1024 bit"],
      togri: 1,
      izoh: "1 bayt = 8 bit. Bu &mdash; xalqaro standart.",
    },
    {
      savol: "Qaysi kengaytma rasm fayliga tegishli?",
      variantlar: [".mp3", ".png", ".docx", ".zip"],
      togri: 1,
      izoh: ".png &mdash; rasm formati. .mp3 audio, .docx hujjat, .zip arxiv.",
    },
    {
      savol: "Fayl nomini o'zgartirish uchun qaysi tugma ishlatiladi?",
      variantlar: ["F2", "F5", "Delete", "Ctrl + Z"],
      togri: 0,
      izoh: "F2 &mdash; fayl nomini tahrirlash rejimini ochadi. F5 &mdash; yangilash.",
    },
    {
      savol: "Qaysi belgilar fayl nomida ishlatilishi <b>mumkin emas</b>?",
      variantlar: ["Chiziqcha (-)", "Pastki chiziq (_)", "Yulduzcha (*)", "Raqamlar (0-9)"],
      togri: 2,
      izoh: "Windowsda \\ / : * ? \" < > | belgilarini fayl nomida ishlatish mumkin emas.",
    },
    {
      savol: "Faylni Savatga tashlamasdan butunlay o'chirish uchun qaysi tugmalar bosiladi?",
      variantlar: ["Ctrl + D", "Shift + Delete", "Alt + F4", "Ctrl + Shift + Z"],
      togri: 1,
      izoh: "Shift + Delete &mdash; faylni Savatga tashlamasdan darhol o'chiradi. Ehtiyot bo'lish kerak!",
    },
  ],

  lugat: [
    { soz: "Fayl", izoh: "Xotirada alohida nom bilan saqlanadigan ma'lumot to'plami." },
    { soz: "Kengaytma", izoh: "Fayl turini belgilovchi qism (.docx, .png)." },
    { soz: "Papka (yig'ma jild)", izoh: "Fayllarni mavzularga ajratib saqlash uchun joy." },
    { soz: "Bit", izoh: "Eng kichik o'lchov birligi; 0 yoki 1 qiymatini oladi." },
    { soz: "Bayt", izoh: "8 bitdan iborat o'lchov birligi." },
    { soz: "KB / MB / GB / TB", izoh: "1024 martalik bosqichlar bilan ortib boruvchi hajm birliklari." },
    { soz: "Tezkor tugma (Hot key)", izoh: "Klaviaturadagi tugmalar kombinatsiyasi orqali buyruq berish." },
    { soz: "Nusxalash / Ko'chirish", izoh: "Ctrl+C - nusxa oladi; Ctrl+X - joyidan olib turadi." },
    { soz: "Savat (Recycle Bin)", izoh: "O'chirilgan fayllar vaqtincha saqlanadigan joy." },
    { soz: "Validatsiya", izoh: "Kiritilgan ma'lumot to'g'riligini tekshirish." },
  ],

  xatolar: [
    "1 GB ni 1000 MB deb hisoblash &mdash; to'g'risi 1024 MB.",
    "Fayl nomida bo'sh joy va o'zbekcha harflarni ishlatish &mdash; keyinchalik muammo bo'ladi.",
    "Telefon yoki fleshkani \"Xavfsiz chiqarish\" qilmasdan sug'urib olish &mdash; fayllar buzilishi mumkin.",
    "Muhim faylni savatga tashlab, keyin Savatni bo'shatib yuborish &mdash; fayl butunlay yo'qoladi.",
    "Ish stoliga hamma faylni tashlash &mdash; papkalarga ajratib saqlash kerak.",
    "\".exe\" kengaytmali faylni ishonchsiz manbadan ochish &mdash; virus yuqish xavfi katta.",
  ],

  keyingi:
    "Keyingi darsda kompyuterning <b>asosiy va qo'shimcha qurilmalari</b>ni batafsil o'rganamiz: tizim blokining ichki qismlari, printer, skaner, proyektor kabi qurilmalar va ularni kompyuterga xavfsiz ulash qoidalari. Bugungi papka va fayl ko'nikmalari keyingi darslarda doim kerak bo'ladi.",
});
