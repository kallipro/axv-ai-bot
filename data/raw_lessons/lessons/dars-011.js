/* 11-dars: Bulutli xizmatlar va onlayn hamkorlik vositalari (1-qism) */

AVX.dars({
  id: "cs8-011",
  sarlavha: "Bulutli xizmatlar va onlayn hamkorlik vositalari (1-qism): bulutli saqlash",
  kiritish:
    "Fleshka yo'qoladi, kompyuter buziladi, telefon singan &mdash; fayllar qayerda xavfsiz turadi? Javob: <b>bulutda</b>. Bugun biz bulutli xizmatlar nima ekanini, Google Drive, OneDrive va Dropbox qanday ishlashini, fayllarni yuklash, ulashish va ruxsatlarni boshqarishni o'rganamiz.",

  maqsad: [
    "Bulutli xizmatlar tushunchasini va ularning afzalliklarini bilish.",
    "Google Drive, OneDrive, Dropbox kabi xizmatlarni taqqoslash.",
    "Fayllarni bulutga yuklash, yuklab olish va tartibga solishni o'rganish.",
    "Fayllarni ulashish va ruxsatlarni (ko'rish/tahrirlash) boshqarish.",
    "Sinxronizatsiya nima ekanini va uning qulaylik hamda xavfini tushunish.",
  ],

  natija: [
    "Bulutning 5 ta afzalligini sanab beradi.",
    "Faylni to'g'ri nomlab, papkalarga ajratib saqlaydi.",
    "Ulashish havolasini to'g'ri sozlaydi (ko'rish/tahrirlash).",
    "Fayl hajmini kichraytirish (siqish) usulini biladi.",
    "Dublikat fayllarni topib, tartibga soladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: DNS, IP, HTTP/HTTPS."],
    ["5-16 daq", "Mentor tushuntirishi", "\"Faylim qayerda xavfsiz?\" &mdash; bulut g'oyasi."],
    ["16-28 daq", "Nazariya: bulut va xizmatlar", "Turlari, afzalliklari, taqqoslash."],
    ["28-40 daq", "Fayl boshqaruvi", "Nomlash qoidalari, papkalar tuzilmasi, siqish."],
    ["40-56 daq", "Ulashish va ruxsatlar", "Havola, ruxsat turlari, jamoa ishi."],
    ["56-72 daq", "Amaliyot: kod yozamiz", "Fayl siqish, dublikat topish, yuklash simulyatori."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har kim o'z bulut papkasini rejalashtiradi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Bulut nima?",
      matn: [
        "Tasavvur qiling: uyga vazifani fleshkaga yozdingiz. Yo'lda fleshka yo'qoldi &mdash; ish ketdi. Yoki kompyuteringiz buzildi &mdash; barcha rasmlar yo'qoldi. Bunday holatlar juda ko'p uchraydi.",
        "<b>Bulut</b> &mdash; bu Internetdagi serverlarda joylashgan saqlash joyi. Fayllaringiz sizning qurilmangizda emas, uzoqdagi kuchli serverda turadi. Undan istalgan qurilmadan &mdash; kompyuter, telefon, planshetdan kira olasiz.",
        "\"Bulut\" so'zi ramziy: fayllar qayerda ekanini bilmaysiz ham, faqat Internet bo'lsa yetadi. Bu &mdash; <em>raqamli transformatsiyaning eng yaqqol misoli</em>.",
      ],
    },
    {
      sarlavha: "2. Bulutning 5 ta afzalligi",
      matn: [
        "<b>Birinchi: qurilmaga bog'liq emas.</b> Uy kompyuterida boshlagan hujjatni telefonida davom ettirasiz. <b>Ikkinchi: yo'qolmaydi.</b> Kompyuter buzilsa ham fayllar bulutda qoladi.",
        "<b>Uchinchi: hamkorlik.</b> Bir hujjatni bir necha odam bir vaqtda tahrirlashi mumkin &mdash; \"kimda oxirgi versiya?\" muammosi yo'qoladi. <b>To'rtinchi: joy tejaladi.</b> Kompyuteringiz diski to'lib qolmaydi.",
        "<b>Beshinchi: tarix saqlanadi.</b> Ko'p bulutlarda faylning oldingi versiyalariga qaytish mumkin. Xato o'chirib yuborgan bo'lsangiz ham &mdash; tiklash mumkin.",
      ],
    },
    {
      sarlavha: "3. Qaysi xizmatni tanlash kerak?",
      matn: [
        "Uchtasi eng ko'p ishlatiladi: <b>Google Drive</b>, <b>OneDrive</b>, <b>Dropbox</b>. Har birining bepul hajmi va afzalligi bor.",
        "Agar sizda Gmail bo'lsa &mdash; <b>Google Drive</b> qulay, chunki u pochta bilan bog'langan. Windows va Office ishlatsangiz &mdash; <b>OneDrive</b> tabiiy tanlov. Ko'p qurilmalar bilan ishlash va sodda interfeys kerak bo'lsa &mdash; <b>Dropbox</b>.",
        "Muhim maslahat: <em>hammasini bir joyga to'plang.</em> Bir fayl Google'da, ikkinchisi OneDrive'da, uchinchisi telefonda &mdash; bu tartibsizlik. Bittasini tanlab, izchil ishlash kerak.",
      ],
    },
    {
      sarlavha: "4. Ulashish: eng ko'p xato qilinadigan joy",
      matn: [
        "\"Faylni yuboring\" &mdash; ko'pchilik aytadi. Aslida faylni nusxalab yuborish emas, <b>havola ulashish</b> to'g'riroq: shunda faylning yagona versiyasi bo'ladi.",
        "Lekin bu yerda katta xavf bor: havola \"hamma ko'ra oladi\" rejimida bo'lsa, uni bilgan har bir kishi faylni ochadi. Shuning uchun ruxsatni <em>aniq belgilash</em> kerak: kim ko'radi, kim izoh yozadi, kim tahrirlaydi.",
        "Va oltin qoida: <b>shaxsiy ma'lumotli fayllarni (pasport, tibbiy, moliyaviy) ochiq havola bilan hech qachon ulashmang.</b> Hatto sinf guruhiga ham. Bunday faylni faqat aniq manzilga (email orqali) yuborish kerak.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Bulutli xizmatlar turlari",
      matn: [
        "Bulut xizmatlari vazifasiga qarab bir necha turga bo'linadi.",
      ],
      jadval: [
        ["Turi", "Vazifasi", "Misol"],
        ["Fayl saqlash", "Fayllarni saqlash va almashish", "Google Drive, OneDrive, Dropbox"],
        ["Hujjatlar", "Onlayn matn, jadval, taqdimot", "Google Docs, Sheets, Slides, Microsoft 365"],
        ["Rasm va video", "Media fayllar uchun", "Google Photos, YouTube"],
        ["Vazifalar", "Ish rejasini boshqarish", "Trello, Microsoft To Do, Google Tasks"],
        ["Loyiha boshqaruvi", "Jamoa ishi va kod saqlash", "GitHub, GitLab, Notion"],
        ["Zaxira (backup)", "Avtomatik nusxa olish", "Google Backup, iCloud"],
      ],
    },
    {
      sarlavha: "2. Uchta asosiy xizmat taqqoslanishi",
      matn: [
        "Quyidagi jadval tanlashga yordam beradi.",
      ],
      jadval: [
        ["Xizmat", "Bepul hajm", "Afzalligi", "Kimga mos"],
        ["Google Drive", "15 GB", "Gmail va Google hujjatlari bilan bog'langan", "Google ekotizimida ishlaydiganlar"],
        ["OneDrive", "5 GB", "Windows va Office bilan chuqur integratsiya", "Windows foydalanuvchilari"],
        ["Dropbox", "2 GB", "Sodda va tez, ko'p qurilmada yaxshi ishlaydi", "Kichik hajmli fayllar bilan ishlash"],
        ["Mega", "20 GB", "Katta bepul hajm, shifrlash", "Katta fayllar uchun"],
        ["Yandex Disk", "5 GB", "MDH davlatlarida tez ishlaydi", "Yandex xizmatlari foydalanuvchilari"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Hajm haqida",
        matn: "Bepul hajm odatda <b>pochtangiz bilan umumiy</b> bo'ladi. Google'da Gmail, Drive va Photos birgalikda 15 GB ni bo'lishadi. Shuning uchun pochtadagi eski xatlarni o'chirib turish joy bo'shatadi.",
      },
    },
    {
      sarlavha: "3. Fayl nomlash va papkalar tuzilmasi",
      matn: [
        "Bulutda tartib saqlash uchun oddiy qoidalar yetarli. Bu qoidalar keyinchalik kod yozganda ham kerak bo'ladi.",
      ],
      royhatTuri: "ol",
      royhat: [
        "Fayl nomida <b>bo'sh joy o'rniga chiziqcha</b> ishlatish: <code>chorak-hisobot.docx</code>;",
        "Nom boshida <b>sana</b> bo'lsa tartib oson: <code>2026-10-21-loyiha</code>;",
        "Har bir fan yoki loyiha uchun <b>alohida papka</b>;",
        "Papka ichida izchil tuzilma: <code>hujjatlar</code>, <code>rasmlar</code>, <code>kod</code>;",
        "\"Yangi papka (2)\", \"nusxa nusxa\" kabi nomlardan qochish;",
        "Muhim fayllarni papka nomida belgilash: <code>MUHIM-hisobot</code>.",
      ],
    },
    {
      sarlavha: "4. Ruxsat turlari (ulashishda)",
      matn: [
        "Havola orqali ulashganda ruxsatni to'g'ri tanlash juda muhim.",
      ],
      jadval: [
        ["Ruxsat", "Nimani qila oladi", "Qachon berish kerak"],
        ["Ko'rish (Viewer)", "Faqat o'qiydi va ko'radi", "Darslik, qo'llanma, e'lon"],
        ["Izoh yozish (Commenter)", "O'qiydi va izoh qoldiradi", "Tekshirish uchun yuborilganda"],
        ["Tahrirlash (Editor)", "O'zgartiradi va o'chiradi", "Birga ishlaydigan jamoadoshlarga"],
        ["Egasi (Owner)", "Hammasini qila oladi, ruxsat beradi", "Fayl yaratuvchisi"],
      ],
      jadval2: [
        ["Havola turi", "Kim ocha oladi", "Xavf darajasi"],
        ["Aniq odamlar", "Faqat kiritilgan manzillar", "Past (eng xavfsiz)"],
        ["Havolasi bo'lgan har kim", "Havolani bilgan har kim", "O'rtacha"],
        ["Ochiq (Internetda)", "Qidiruvdan ham topiladi", "Yuqori"],
      ],
    },
    {
      sarlavha: "5. Sinxronizatsiya va uning xavfi",
      matn: [
        "<b>Sinxronizatsiya</b> &mdash; bulutdagi fayllar va qurilmangizdagi nusxalar avtomatik bir xil holatda bo'lishi. Kompyuteringizda faylni o'zgartirsangiz, u avtomatik bulutga ham yuboriladi.",
        "Bu juda qulay, lekin bitta xavfi bor: <em>siz qilgan xato ham sinxronlanadi.</em> Faylni xato o'chirsangiz, u bulutdan ham o'chadi.",
        "Shuning uchun muhim fayllar uchun <b>ikkinchi zaxira</b> qilib qo'yish tavsiya etiladi: tashqi diskka yoki boshqa bulutga. \"Bitta nusxa &mdash; nusxa emas\" degan qoida bor.",
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "qiyos",
      "sarlavha": "Flesh xotira va bulut",
      "tushuntirish": "Ikkalasi ham fayl saqlaydi, lekin ishlash usuli butunlay boshqa.",
      "ustunlar": [
        {
          "belgi": "🔌",
          "sarlavha": "Flesh xotira",
          "turi": "brand",
          "royxat": [
            "Fizik qurilma &mdash; yoningizda bo'ladi",
            "Yo'qolsa yoki buzilsa &mdash; fayllar ketadi",
            "Internet kerak emas",
            "Hajmi cheklangan: 16-128 GB",
            "Bir vaqtda faqat bitta odam ishlatadi"
          ]
        },
        {
          "belgi": "☁️",
          "sarlavha": "Bulut",
          "turi": "yaxshi",
          "royxat": [
            "Fayllar <b>serverda</b> turadi",
            "Qurilma yo'qolsa ham fayllar qoladi",
            "Internet kerak",
            "Hajmi katta, kengaytiriladi",
            "Bir vaqtda ko'p kishi ishlatadi"
          ]
        }
      ],
      "izoh": "Eng to'g'ri yo'l &mdash; <b>ikkalasi birga</b>: muhim fayl ham fleshkada, ham bulutda."
    },
    {
      "tur": "sxema",
      "sarlavha": "Bulut qanday ishlaydi?",
      "tushuntirish": "\"Bulut\" &mdash; osmondagi narsa emas. Bu <b>kuchli serverlar</b>, ular sizning fayllaringizni saqlaydi.",
      "svg": "<svg viewBox=\"0 0 700 320\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Bulut qanday ishlaydi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"318\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx11a\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/></marker>\n    <marker id=\"avx11b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#22d3a6\"/></marker>\n  </defs>\n  <rect x=\"24\" y=\"40\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <text x=\"99\" y=\"66\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📱 Telefon</text>\n  <text x=\"99\" y=\"86\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">uy vazifasi.docx</text>\n  <rect x=\"24\" y=\"122\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <text x=\"99\" y=\"148\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">💻 Noutbuk</text>\n  <text x=\"99\" y=\"168\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">uy vazifasi.docx</text>\n  <rect x=\"24\" y=\"204\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <text x=\"99\" y=\"230\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">🖥️ Maktab kompyuteri</text>\n  <text x=\"99\" y=\"250\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">uy vazifasi.docx</text>\n  <rect x=\"260\" y=\"70\" width=\"180\" height=\"170\" rx=\"16\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <text x=\"350\" y=\"118\" fill=\"#e6ecff\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\">BULUT</text>\n  <text x=\"350\" y=\"146\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">fayllarning asl nusxasi</text>\n  <text x=\"350\" y=\"166\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">shu yerda saqlanadi</text>\n  <text x=\"350\" y=\"196\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">🎒 hamyon</text>\n  <rect x=\"520\" y=\"96\" width=\"156\" height=\"118\" rx=\"14\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"598\" y=\"136\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">SERVERLAR</text>\n  <text x=\"598\" y=\"160\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">kuchli kompyuterlar</text>\n  <text x=\"598\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">zaxira va himoya</text>\n  <text x=\"598\" y=\"198\" fill=\"#ffb020\" font-size=\"11.5\" text-anchor=\"middle\">24/7 ishlaydi</text>\n  <line x1=\"178\" y1=\"70\" x2=\"256\" y2=\"110\" stroke=\"#4f8cff\" stroke-width=\"2\" marker-end=\"url(#avx11a)\"/>\n  <line x1=\"178\" y1=\"152\" x2=\"256\" y2=\"152\" stroke=\"#4f8cff\" stroke-width=\"2\" marker-end=\"url(#avx11a)\"/>\n  <line x1=\"178\" y1=\"234\" x2=\"256\" y2=\"196\" stroke=\"#4f8cff\" stroke-width=\"2\" marker-end=\"url(#avx11a)\"/>\n  <line x1=\"256\" y1=\"128\" x2=\"180\" y2=\"88\" stroke=\"#22d3a6\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" marker-end=\"url(#avx11b)\"/>\n  <line x1=\"256\" y1=\"176\" x2=\"180\" y2=\"216\" stroke=\"#22d3a6\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" marker-end=\"url(#avx11b)\"/>\n  <line x1=\"444\" y1=\"155\" x2=\"516\" y2=\"155\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx11a)\"/>\n  <text x=\"350\" y=\"296\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Bir qurilmada o'zgartirsangiz &mdash; qolganlarida ham avtomatik yangilanadi (sinxronlanadi).</text>\n</svg>"
    },
    {
      "tur": "ikonka",
      "sarlavha": "Mashhur bulut xizmatlari",
      "tushuntirish": "Hammasi bir xil ishlaydi: fayl yuklanadi va istalgan qurilmadan ochiladi.",
      "elementlar": [
        {
          "belgi": "🟢",
          "nom": "Google Drive",
          "izoh": "Google hisobi bilan bepul 15 GB"
        },
        {
          "belgi": "🔵",
          "nom": "OneDrive",
          "izoh": "Microsoft hisobi, Windows bilan"
        },
        {
          "belgi": "🔷",
          "nom": "Dropbox",
          "izoh": "Fayl almashish uchun qulay"
        },
        {
          "belgi": "🍎",
          "nom": "iCloud",
          "izoh": "Apple qurilmalari uchun"
        },
        {
          "belgi": "🟡",
          "nom": "Yandex Disk",
          "izoh": "Ko'p qurilmada sinxron"
        },
        {
          "belgi": "✈️",
          "nom": "Telegram (Saved Messages)",
          "izoh": "O'ziga fayl yuborish &mdash; oddiy \"bulut\""
        }
      ],
      "izoh": "Eng muhimi &mdash; bitta xizmatni tanlab, undan <b>doimiy</b> foydalanish. Har safar boshqasini tanlash tartibsizlik keltiradi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Bulutli saqlashning afzalliklari",
      "tushuntirish": "Nega maktab va ishda bulutga o'tilmoqda?",
      "elementlar": [
        {
          "belgi": "🌐",
          "nom": "Istalgan joydan",
          "izoh": "Uyda, maktabda, sayohatda &mdash; bir xil fayllar"
        },
        {
          "belgi": "💾",
          "nom": "Qurilma buzilsa ham",
          "izoh": "Fayllar serverda qoladi"
        },
        {
          "belgi": "👥",
          "nom": "Birgalikda ishlash",
          "izoh": "Bir necha kishi bitta faylni ochadi"
        },
        {
          "belgi": "🕐",
          "nom": "Tarix saqlanadi",
          "izoh": "Eski versiyaga qaytish mumkin"
        },
        {
          "belgi": "📤",
          "nom": "Ulashish oson",
          "izoh": "Fayl emas, havola yuboriladi"
        },
        {
          "belgi": "📈",
          "nom": "Hajm kengayadi",
          "izoh": "Joy tugasa, qo'shimcha sotib olinadi"
        }
      ]
    },
    {
      "tur": "royxat",
      "sarlavha": "Bulutning kamchiliklari va xavflari",
      "tushuntirish": "Har bir yaxshi narsaning narxi bor. Bularni bilib turish kerak.",
      "elementlar": [
        {
          "belgi": "📶",
          "nom": "Internet kerak",
          "izoh": "Aloqa bo'lmasa, faylni ocholmaydi"
        },
        {
          "belgi": "🐢",
          "nom": "Tezlik cheklangan",
          "izoh": "Katta fayl yuklanishi sekin bo'lishi mumkin"
        },
        {
          "belgi": "💰",
          "nom": "Bepul joy kam",
          "izoh": "15 GB tugasa, to'lov boshlanadi"
        },
        {
          "belgi": "🔓",
          "nom": "Maxfiylik",
          "izoh": "Fayllar boshqa kompaniya serverida turadi"
        },
        {
          "belgi": "❌",
          "nom": "Hisob yo'qolsa",
          "izoh": "Parolni tiklab olmasangiz &mdash; fayllar qiyin topiladi"
        },
        {
          "belgi": "⚖️",
          "nom": "Qoidalarga bog'liq",
          "izoh": "Qoidalar o'zgarsa, shartlar ham o'zgaradi"
        }
      ],
      "izoh": "Shu sababli muhim fayllarning <b>ikkinchi nusxasi</b> ham bo'lishi kerak (flesh yoki tashqi disk)."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Bepul va pullik tarif",
      "tushuntirish": "O'quv loyihasi uchun odatda bepul tarif yetarli.",
      "ustunlar": [
        {
          "belgi": "🆓",
          "sarlavha": "Bepul tarif",
          "turi": "brand",
          "royxat": [
            "15 GB atrofida joy",
            "Barcha asosiy imkoniyatlar",
            "Reklama bo'lishi mumkin",
            "O'quv ishlari uchun yetarli"
          ]
        },
        {
          "belgi": "💎",
          "sarlavha": "Pullik tarif",
          "turi": "yaxshi",
          "royxat": [
            "100 GB va undan ko'p",
            "Katta fayllarni yuklash",
            "Qo'shimcha xavfsizlik",
            "Oila a'zolari uchun alohida joy"
          ]
        }
      ],
      "izoh": "Maslahat: avval bepul tarifni sinab ko'ring. Joy yetmasa &mdash; eski fayllarni tartiblash yetarli bo'lishi mumkin."
    },
    {
      "tur": "oyna",
      "sarlavha": "Bulut disk oynasi",
      "tushuntirish": "Bulut diski oddiy papka kabi ko'rinadi &mdash; farqi shundaki, fayllar internetda turadi.",
      "oyna": {
        "nom": "Google Drive — Mening diskim",
        "manzil": "Mening diskim  >  Informatika  >  1-chorak",
        "ustunlar": [
          "Nomi",
          "Egasi",
          "O'zgartirilgan",
          "Hajmi"
        ],
        "qatorlar": [
          [
            "📁 1-chorak",
            "Men",
            "07.10.2026",
            "—"
          ],
          [
            "📄 uyga-vazifa.docx",
            "Men",
            "07.10.2026",
            "24 KB"
          ],
          [
            "📊 jadval.xlsx",
            "Men",
            "06.10.2026",
            "58 KB"
          ],
          [
            "🖼️ sxema.png",
            "Aziza",
            "05.10.2026",
            "180 KB"
          ],
          [
            "🎞️ taqdimot.pptx",
            "Men",
            "04.10.2026",
            "2,1 MB"
          ]
        ]
      },
      "izoh": "Chap tomonda <b>«Mening diskim»</b>, <b>«Menga ulashilgan»</b> va <b>«So'nggi»</b> bo'limlari bo'ladi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Ulashish (share) huquqlari",
      "tushuntirish": "Faylni kimdir bilan bo'lishganda, unga qanday huquq berayotganingizni tanlaysiz.",
      "elementlar": [
        {
          "belgi": "👁️",
          "nom": "Ko'rish (Viewer)",
          "izoh": "Faqat o'qiydi, o'zgartira olmaydi"
        },
        {
          "belgi": "💬",
          "nom": "Izohlash (Commenter)",
          "izoh": "O'qiy va izoh yozadi, matnni o'zgartirmaydi"
        },
        {
          "belgi": "✏️",
          "nom": "Tahrirlash (Editor)",
          "izoh": "Matnni o'zgartiradi &mdash; ehtiyot bo'lish kerak"
        },
        {
          "belgi": "🔗",
          "nom": "Havola bilan",
          "izoh": "Havolasi bor har kim ochadi &mdash; ehtiyot bo'ling"
        },
        {
          "belgi": "🔒",
          "nom": "Yopiq",
          "izoh": "Faqat siz ko'rasiz"
        },
        {
          "belgi": "⏳",
          "nom": "Muddatli ruxsat",
          "izoh": "Belgilangan vaqtdan keyin avtomatik yopiladi"
        }
      ],
      "izoh": "\"<b>Havolaga ega har kim</b>\" ni tanlaganda &mdash; havolani bilgan har kim faylni ochadi. Shaxsiy hujjat uchun bu xavfli."
    },
    {
      "tur": "qadam",
      "sarlavha": "Faylni bulutga yuklash",
      "tushuntirish": "Fayl yuklashning to'g'ri tartibi &mdash; keyin izlashga to'g'ri kelmaydi.",
      "elementlar": [
        {
          "nom": "Papkani tanlash",
          "izoh": "Avval qaysi papkaga yuklashni o'ylash"
        },
        {
          "nom": "«Yuklash» tugmasini bosish",
          "izoh": "Yoki faylni oynaga sudrab tashlash (drag & drop)"
        },
        {
          "nom": "Faylni topish",
          "izoh": "Kompyuterdan kerakli faylni tanlash"
        },
        {
          "nom": "Yuklanishni kutish",
          "izoh": "Pastda yuklash jarayoni ko'rinadi"
        },
        {
          "nom": "Nomni tekshirish",
          "izoh": "Nom tushunarli bo'lsin: <code>aziza-uyga-vazifa.docx</code>"
        },
        {
          "nom": "Ulashishni sozlash",
          "izoh": "Kimga va qanday huquq bilan"
        }
      ]
    },
    {
      "tur": "sxema",
      "sarlavha": "Fayl qanday sinxronlanadi?",
      "tushuntirish": "Bir qurilmada o'zgartirgan fayl boshqa qurilmalarda <b>avtomatik</b> yangilanadi.",
      "svg": "<svg viewBox=\"0 0 700 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Sinxronizatsiya\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"258\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx11c\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#22d3a6\"/></marker>\n  </defs>\n  <rect x=\"40\" y=\"88\" width=\"140\" height=\"80\" rx=\"12\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"110\" y=\"120\" fill=\"#e6ecff\" font-size=\"13\" text-anchor=\"middle\">💻 Noutbuk</text>\n  <text x=\"110\" y=\"142\" fill=\"#22d3a6\" font-size=\"11.5\" text-anchor=\"middle\">1-versiya</text>\n  <rect x=\"280\" y=\"88\" width=\"140\" height=\"80\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <text x=\"350\" y=\"120\" fill=\"#e6ecff\" font-size=\"13\" text-anchor=\"middle\">☁️ BULUT</text>\n  <text x=\"350\" y=\"142\" fill=\"#22d3a6\" font-size=\"11.5\" text-anchor=\"middle\">2-versiya</text>\n  <rect x=\"520\" y=\"88\" width=\"140\" height=\"80\" rx=\"12\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2\"/>\n  <text x=\"590\" y=\"120\" fill=\"#e6ecff\" font-size=\"13\" text-anchor=\"middle\">📱 Telefon</text>\n  <text x=\"590\" y=\"142\" fill=\"#22d3a6\" font-size=\"11.5\" text-anchor=\"middle\">2-versiya</text>\n  <line x1=\"184\" y1=\"128\" x2=\"274\" y2=\"128\" stroke=\"#22d3a6\" stroke-width=\"2.5\" marker-end=\"url(#avx11c)\"/>\n  <line x1=\"424\" y1=\"128\" x2=\"514\" y2=\"128\" stroke=\"#22d3a6\" stroke-width=\"2.5\" marker-end=\"url(#avx11c)\"/>\n  <text x=\"229\" y=\"118\" fill=\"#22d3a6\" font-size=\"11\" text-anchor=\"middle\">yuklanadi</text>\n  <text x=\"469\" y=\"118\" fill=\"#22d3a6\" font-size=\"11\" text-anchor=\"middle\">yuboriladi</text>\n  <text x=\"350\" y=\"212\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Noutbukda o'zgartirdingiz &rarr; bulutga yuklandi &rarr; telefonda ham yangi versiya paydo bo'ldi.</text>\n  <text x=\"350\" y=\"236\" fill=\"#ffb020\" font-size=\"12\" text-anchor=\"middle\">Agar internet bo'lmasa &mdash; o'zgarish navbatda turadi va aloqa tiklanganda yuboriladi.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Bulutda xavfsizlik qoidalari",
      "tushuntirish": "Bulut qulay, lekin hisobingiz xavfsizligi sizning qo'lingizda.",
      "elementlar": [
        {
          "belgi": "🔐",
          "nom": "Kuchli parol",
          "izoh": "Hisob paroli kamida 12 belgi bo'lsin"
        },
        {
          "belgi": "🔑",
          "nom": "2FA yoqish",
          "izoh": "Parol o'g'irlansa ham hisob himoyalanadi"
        },
        {
          "belgi": "🚪",
          "nom": "Umumiy kompyuterda chiqish",
          "izoh": "Ish tugagach <b>hisobdan chiqing</b>"
        },
        {
          "belgi": "🔗",
          "nom": "Havolani tekshirish",
          "izoh": "Kimga yuborayotganingizni bilish"
        },
        {
          "belgi": "📄",
          "nom": "Maxfiy fayl yuklamaslik",
          "izoh": "Pasport, karta rasmini ochiq bulutga qo'ymaslik"
        },
        {
          "belgi": "🗂️",
          "nom": "Ulashilganlarni ko'rib chiqish",
          "izoh": "Kimda ruxsat bor &mdash; vaqti-vaqti bilan tekshirish"
        }
      ]
    },
    {
      "tur": "qadam",
      "sarlavha": "Xato o'chirilgan faylni tiklash",
      "tushuntirish": "Bulutning eng yaxshi tomoni &mdash; o'chirilgan faylni qaytarish mumkin.",
      "elementlar": [
        {
          "nom": "'Savat' bo'limini ochish",
          "izoh": "Bulut diskda «Trash» yoki «Savat» bo'limi bor"
        },
        {
          "nom": "Faylni topish",
          "izoh": "O'chirilgan vaqti bo'yicha qidirish mumkin"
        },
        {
          "nom": "«Tiklash» tugmasi",
          "izoh": "Fayl avvalgi joyiga qaytadi"
        },
        {
          "nom": "Muddatni bilish",
          "izoh": "Odatda 30 kun saqlanadi, keyin butunlay o'chadi"
        },
        {
          "nom": "Versiya tarixini ko'rish",
          "izoh": "Fayl o'zgartirilgan bo'lsa &mdash; eski versiyani tiklash"
        }
      ],
      "izoh": "Fayl <b>butunlay o'chirilgan</b> bo'lsa ham, ko'p xizmatlarda «Versiya tarixi» orqali tiklash mumkin."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Sinxronizatsiya va Zaxira nusxa",
      "tushuntirish": "Bu ikki so'z ko'pincha aralashtiriladi, lekin vazifasi boshqa.",
      "ustunlar": [
        {
          "belgi": "🔄",
          "sarlavha": "Sinxronizatsiya",
          "turi": "brand",
          "royxat": [
            "Fayl bir necha qurilmada <b>bir xil</b> bo'ladi",
            "O'zgartirish darhol ko'rinadi",
            "Xato o'chirsangiz &mdash; hamma joydan o'chadi",
            "Qulaylik uchun ishlatiladi"
          ]
        },
        {
          "belgi": "🛡️",
          "sarlavha": "Zaxira nusxa",
          "turi": "yaxshi",
          "royxat": [
            "Alohida <b>nusxa</b> saqlanadi",
            "Asl fayl o'chsa ham nusxa qoladi",
            "Belgilangan vaqtda yangilanadi",
            "Xavfsizlik uchun ishlatiladi"
          ]
        }
      ],
      "izoh": "Sinxronizatsiya zaxira nusxa <b>o'rnini bosmaydi</b> &mdash; ikkalasi ham kerak."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Bulut qayerda ishlatiladi?",
      "tushuntirish": "Kundalik hayotda bulut allaqachon bor &mdash; ko'pini sezmaysiz.",
      "elementlar": [
        {
          "belgi": "🏫",
          "nom": "Maktab",
          "izoh": "Uyga vazifa va loyihalar"
        },
        {
          "belgi": "📞",
          "nom": "Telefon kontakti",
          "izoh": "Kontakt, rasm, video zaxirasi"
        },
        {
          "belgi": "🎵",
          "nom": "Musiqa va video",
          "izoh": "Playlist va tomosha tarixi"
        },
        {
          "belgi": "🏦",
          "nom": "Bank ilovasi",
          "izoh": "To'lov tarixi va cheklar"
        },
        {
          "belgi": "📷",
          "nom": "Rasm zaxirasi",
          "izoh": "Telefon rasmlari avtomatik yuklanadi"
        },
        {
          "belgi": "🎮",
          "nom": "O'yinlar",
          "izoh": "O'yin natijasi va sozlamalar"
        }
      ],
      "izoh": "Bulut &mdash; bu alohida \"dastur\" emas, balki bugungi texnologiyaning <b>asosi</b>."
    },
    {
      "tur": "qadam",
      "sarlavha": "Bulut hisobini yaratish va sozlash",
      "tushuntirish": "Hisob ochish 5 daqiqa vaqt oladi &mdash; keyin butun o'quv yili davomida foydalanasiz.",
      "elementlar": [
        {
          "nom": "Xizmatni tanlash",
          "izoh": "Google Drive, OneDrive yoki boshqasi"
        },
        {
          "nom": "Hisob ochish",
          "izoh": "Elektron pochta va parol kiritish"
        },
        {
          "nom": "Parolni kuchli qilish",
          "izoh": "Kamida 12 belgi, raqam va belgi aralash"
        },
        {
          "nom": "Telefon raqamini ulash",
          "izoh": "Parolni tiklash va 2FA uchun kerak"
        },
        {
          "nom": "Papkalarni tartiblash",
          "izoh": "Masalan: <b>Informatika &rsaquo; 1-chorak</b>"
        },
        {
          "nom": "Sinab ko'rish",
          "izoh": "Telefondan ham kirib, fayl ko'rinishini tekshirish"
        }
      ],
      "izoh": "Hisob ochishda <b>haqiqiy ma'lumot</b> kiritiladi &mdash; parolni esa hech kimga aytmang."
    }
  ],

  amaliy: [
    "Google Drive yoki OneDrive ga kirib, o'z nomingiz bilan papka yarating.",
    "Ichida <code>Darslar</code>, <code>Rasmlar</code>, <code>Hujjatlar</code> papkalarini yarating.",
    "Bitta faylni (masalan, rasm) bulutga yuklang va yuklanish jarayonini kuzatib, vaqtini o'lchang.",
    "Shu faylni <b>\"Faqat ko'rish\"</b> ruxsati bilan ulashing va havolani sinf guruhiga yuboring.",
    "Havolani boshqa brauzerda (yoki maxfiy rejimda) ochib, faylni haqiqatan ham faqat ko'rish mumkinligini tekshiring.",
    "Bulutdagi papkangizdagi fayllardan birining hajmini ko'ring va uni siqish (ZIP) kerakmi yoki yo'qmi, qaror qiling.",
    "O'zingizning kompyuteringizdagi papkani bulutga ko'chirib, sinxronlanishini kuzatib ko'ring.",
  ],

  uyga: [
    {
      "savol": "Bulutli saqlash va flesh xotirani jadval ko'rinishida solishtiring: joy, yo'qolish xavfi, internet, birgalikda ishlash.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Mezon</th><th>Flesh xotira</th><th>Bulut</th></tr></thead><tbody><tr><td>Joy</td><td>16-128 GB</td><td>Bepul 15 GB, kengaytiriladi</td></tr><tr><td>Yo'qolish xavfi</td><td>Yuqori &mdash; qurilma bilan yo'qoladi</td><td>Past &mdash; serverda qoladi</td></tr><tr><td>Internet</td><td>Kerak emas</td><td>Kerak</td></tr><tr><td>Birgalikda ishlash</td><td>Faqat bitta odam</td><td>Ko'p kishi bir vaqtda</td></tr><tr><td>Narx</td><td>Bir marta sotib olinadi</td><td>Bepul / obuna</td></tr></tbody></table><p>Eng to'g'ri yo'l &mdash; <b>ikkalasi birga</b>.</p>"
    },
    {
      "savol": "Bulutli saqlashning 4 ta afzalligi va 3 ta kamchiligini yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<p><b>Afzalliklari:</b></p><ol><li>Istalgan qurilmadan ochish mumkin;</li><li>Qurilma buzilsa ham fayllar qoladi;</li><li>Havola bilan ulashish va birgalikda ishlash;</li><li>O'zgarishlar tarixi saqlanadi.</li></ol><p><b>Kamchiliklari:</b></p><ol><li>Internet bo'lmasa &mdash; cheklangan;</li><li>Bepul joy kam (15 GB atrofida);</li><li>Maxfiylik &mdash; fayllar boshqa kompaniya serverida.</li></ol>"
    },
    {
      "savol": "Bulut xizmatini tanlang va hisob sozlamalarini bajaring: ichida kamida 3 ta papka va 2 ta fayl bo'lsin. Papka tuzilmasini chizing.",
      "tezlik": "Taxminiy vaqt: 15 daqiqa",
      "javob": "<p><b>Namuna chizma:</b></p><pre><code>☁️ Mening diskim\n  +-- 📁 Informatika\n  |    +-- 📁 1-chorak\n  |    |    +-- 📄 uyga-vazifa.docx\n  |    +-- 📁 2-chorak\n  +-- 📁 Rasmlar\n  |    +-- 🖼️ sxema.png\n  +-- 📁 Loyihalar</code></pre><p>Tekshiriladi: papkalar tartibli nomlanganmi, fayllar to'g'ri joyda va nomi tushunarlimi, telefonda ham ko'rinadimi.</p>"
    },
    {
      "savol": "Faylni ulashish huquqlarining 4 turini yozing va qaysi holatda qaysi biri ishlatilishini ayting.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Ruxsat</th><th>Nima qila oladi</th><th>Qachon ishlatiladi</th></tr></thead><tbody><tr><td>Ko'ruvchi</td><td>Faqat o'qiydi</td><td>Yakuniy natijani ko'rsatishda</td></tr><tr><td>Izohlovchi</td><td>Izoh yozadi, matnni o'zgartirmaydi</td><td>O'qituvchi tekshirganda</td></tr><tr><td>Tahrirlovchi</td><td>Matnni o'zgartiradi</td><td>Jamoada birgalikda ishlaganda</td></tr><tr><td>Havolaga ega har kim</td><td>Havolani bilgan har kim</td><td>Ochiq e'lon qilinganda &mdash; ehtiyot bo'lish kerak</td></tr></tbody></table>"
    },
    {
      "savol": "<b>Sinxronizatsiya</b> va <b>zaxira nusxa</b> o'rtasidagi farqni tushuntiring. Nega sinxronizatsiya zaxirani almashtirmaydi?",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ul><li><b>Sinxronizatsiya</b> &mdash; fayl barcha qurilmalarda <em>bir xil</em> bo'ladi. Bir joyda o'chirsangiz &mdash; hamma joydan o'chadi.</li><li><b>Zaxira nusxa</b> &mdash; alohida <em>nusxa</em> saqlanadi. Asl fayl o'chsa ham nusxa qoladi.</li></ul><p>Shu sababli sinxronizatsiya zaxira <b>o'rnini bosmaydi</b>: xato o'chirilgan fayl barcha qurilmalardan yo'qoladi &mdash; qaytaradigan nusxa bo'lmasa, tiklab bo'lmaydi.</p>"
    },
    {
      "savol": "Bulutda xavfsizlik qoidalaridan 5 tasini yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ol><li>Kuchli parol &mdash; kamida 12 belgi;</li><li>Ikki bosqichli himoya (2FA) yoqish;</li><li>Umumiy kompyuterdan ishlagach <b>hisobdan chiqish</b>;</li><li>Maxfiy hujjat rasmini bulutga yuklamaslik;</li><li>Faylni ulashganda ruxsatni tekshirish va vaqti-vaqti bilan qayta ko'rib chiqish.</li></ol>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): xato o'chirilgan faylni bulutdan tiklash tartibini yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ol><li>Bulut diskda <b>«Savat»</b> (Trash) bo'limini ochish;</li><li>Kerakli faylni topish (o'chirilgan vaqti bo'yicha);</li><li>Faylga o'ng tugma yoki <b>«Tiklash»</b> tugmasini bosish;</li><li>Fayl avvalgi papkasiga qaytadi;</li><li>Agar savat tozalangan bo'lsa &mdash; <b>«Versiya tarixi»</b> orqali eski holatni tiklash mumkin.</li></ol><p>Eslatma: savat odatda 30 kun saqlanadi, keyin fayl butunlay o'chadi.</p>"
    }
  ],

  test: [
    {
      savol: "Bulutli xizmatning asosiy afzalligi nima?",
      variantlar: [
        "Fayllar faqat bitta qurilmada saqlanadi",
        "Fayllarga istalgan qurilmadan kirish mumkin va ular yo'qolmaydi",
        "Internet kerak emas",
        "Fayl hajmi o'z-o'zidan kichrayadi",
      ],
      togri: 1,
      izoh: "Bulut &mdash; Internetdagi serverlarda saqlash: istalgan qurilmadan kirish va yo'qolishdan himoya.",
    },
    {
      savol: "Google Drive bepul qancha hajm beradi?",
      variantlar: ["2 GB", "5 GB", "15 GB", "100 GB"],
      togri: 2,
      izoh: "Google Drive 15 GB bepul beradi, u Gmail va Photos bilan umumiy.",
    },
    {
      savol: "Faylni ulashganda <b>eng xavfsiz</b> usul qaysi?",
      variantlar: [
        "Internetda ochiq qilish",
        "Havolasi bo'lgan har kim ko'radi",
        "Faqat aniq odamlarga (email orqali) ruxsat berish",
        "Havolani ochiq guruhga tashlash",
      ],
      togri: 2,
      izoh: "\"Aniq odamlar\" rejimi eng xavfsiz: faqat kiritilgan manzillar ochadi.",
    },
    {
      savol: "Sinxronizatsiyaning <b>xavfi</b> nimada?",
      variantlar: [
        "Fayllar sekinlashadi",
        "Xato amallar ham bulutga tarqaladi",
        "Internet tezligi oshadi",
        "Fayl nomi o'zgaradi",
      ],
      togri: 1,
      izoh: "Agar faylni xato o'chirsangiz, u bulutdan ham o'chadi. Shuning uchun ikkinchi zaxira kerak.",
    },
    {
      savol: "Dublikat fayllarni topish uchun nima ishlatiladi?",
      variantlar: ["Fayl nomi", "Hash qiymati", "Fayl rangi", "Papka nomi"],
      togri: 1,
      izoh: "Hash &mdash; faylning \"barmoq izi\". Ikki fayl bir xil bo'lsa, hashi ham bir xil bo'ladi.",
    },
    {
      savol: "Bulutdagi fayl nomi uchun qaysi usul <b>to'g'ri</b>?",
      variantlar: [
        "Uyga vazifa 1 (yangi).docx",
        "uyga-vazifa-1.docx",
        "uyga:vazifa?1.docx",
        "UYGA VAZIFA!!!.docx",
      ],
      togri: 1,
      izoh: "Kichik harflar, bo'sh joy o'rniga chiziqcha, maxsus belgilarsiz &mdash; bu eng qulay format.",
    },
  ],

  lugat: [
    { soz: "Bulut (cloud)", izoh: "Internetdagi serverlarda joylashgan saqlash joyi." },
    { soz: "Bulutli xizmat", izoh: "Internet orqali fayl saqlash va almashish xizmati." },
    { soz: "Sinxronizatsiya", izoh: "Qurilma va bulutdagi fayllarning avtomatik bir xil bo'lishi." },
    { soz: "Metadata", izoh: "Fayl haqidagi ma'lumot: nomi, hajmi, sanasi, egasi." },
    { soz: "Ruxsat (permission)", izoh: "Fayl bilan qanday amal bajarish mumkinligi." },
    { soz: "Viewer / Commenter / Editor", izoh: "Ko'rish / izoh yozish / tahrirlash ruxsatlari." },
    { soz: "Havola (link)", izoh: "Faylni ochish uchun manzil." },
    { soz: "Chunk", izoh: "Katta faylni yuklashdagi bo'lak." },
    { soz: "Zaxira (backup)", izoh: "Ma'lumotning qo'shimcha nusxasi." },
    { soz: "Dublikat", izoh: "Bir xil mazmunli ortiqcha fayl." },
  ],

  xatolar: [
    "Shaxsiy ma'lumotli faylni ochiq havola bilan ulashish.",
    "Muhim fayllarning faqat bitta nusxasini saqlash.",
    "Fayllarni \"Yangi papka (2)\" kabi tartibsiz nomlarga solish.",
    "\"Tahrirlash\" ruxsatini hammaga berish &mdash; ko'rish yetarli bo'lsa ham.",
    "Bulutga kirmasdan parolni brauzerga saqlab qo'yish va umumiy kompyuterda qoldirish.",
    "Bir nechta bulutda tarqoq saqlash &mdash; kerakli faylni topib bo'lmaydi.",
    "Katta videolarni siqmasdan yuklash &mdash; vaqt va trafik behuda ketadi.",
  ],

  keyingi:
    "Keyingi darsda <b>bulutli xizmatlarning 2-qismi</b>ni o'rganamiz: onlayn hujjatlar bilan ishlash (Google Docs, Sheets, Slides va Microsoft 365), birgalikda tahrirlash, versiyalar tarixi, hujjatni eksport qilish va chop etish. Bugungi fayl saqlash bilimlari keyingi darsda bevosita kerak bo'ladi.",
});
