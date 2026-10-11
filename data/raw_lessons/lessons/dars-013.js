/* 13-dars: Bulutli xizmatlar (3-qism) - vazifalar va jamoa bilan ishlash */

AVX.dars({
  id: "cs8-013",
  sarlavha: "Bulutli xizmatlar (3-qism): onlayn vazifalar va jamoa bilan ishlash",
  kiritish:
    "Vazifalar ro'yxatini qog'ozga yozsangiz, u yo'qoladi. Telefon eslatmasini esa jamoa ko'rmaydi. Bugun biz <b>Trello</b>, <b>Microsoft To Do</b> va <b>Google Tasks</b> kabi vositalarni o'rganamiz: vazifalarni taqsimlash, muddatlarni kuzatish va <b>jamoa bo'lib ishlash</b>ni.",

  maqsad: [
    "Vazifalar va loyiha boshqaruvining asosiy tushunchalarini bilish.",
    "Trello, Microsoft To Do va Google Tasks imkoniyatlarini o'rganish.",
    "Vazifani to'g'ri shakllantirish: nom, mas'ul, muddat, ustuvorlik.",
    "Kanban doska usuli bilan ish jarayonini kuzatish.",
    "Jamoada vazifalarni taqsimlash va hisobot tuzish.",
  ],

  natija: [
    "Vazifani 4 qism bilan to'g'ri yozadi (nima, kim, qachon, muhimlik).",
    "Kanban doskada vazifa holatini o'zgartiradi.",
    "Muddatni kuzatib, kechikkan vazifalarni aniqlaydi.",
    "Jamoa a'zolari bo'yicha yuklamani hisoblaydi.",
    "Haftalik hisobot tuzadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: onlayn hujjat, jadval formulalari."],
    ["5-16 daq", "Mentor tushuntirishi", "\"Nima qilish kerak?\" &mdash; vazifani boshqarish san'ati."],
    ["16-28 daq", "Nazariya: vositalar", "Trello, To Do, Google Tasks, Notion."],
    ["28-42 daq", "Kanban usuli", "Uch ustun: qilinishi kerak / bajarilmoqda / bajarildi."],
    ["42-56 daq", "Jamoa bilan ishlash", "Rollar, mas'uliyat, muddat, hisobot."],
    ["56-72 daq", "Amaliyot: kod yozamiz", "Vazifa paneli, Kanban doska, statistika va muddat tekshiruvi."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har kim o'z loyihasi doskasini tuzadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Nega vazifani boshqarish kerak?",
      matn: [
        "Uyga 5 ta vazifa berildi. Birinchisini yozib qo'ydingiz, ikkinchisini eslab qoldim deb o'yladingiz, uchinchisini butunlay unutdingiz. Ertasi kuni nima bo'ldi? Muammo.",
        "Tadqiqotlarga ko'ra, <b>boshda turgan ish</b> unutilish ehtimoli 70% ga yaqin. Faqat <em>yozib qo'yilgan</em> ish bajariladi. Shu sababli vazifalar ro'yxati &mdash; bu shunchaki odat emas, samaradorlik vositasi.",
        "Jamoada esa bu yanada muhim: kim nima qilayotganini bilmasa, ikki kishi bitta ishni qiladi, uchinchi ish esa umuman qilinmaydi.",
      ],
    },
    {
      sarlavha: "2. Yaxshi vazifa qanday yoziladi?",
      matn: [
        "Yomon vazifa: <em>\"Taqdimot qilish kerak\"</em>. Bu vazifa emas, umumiy gap. Kim qiladi? Qachon? Nima kerak?",
        "Yaxshi vazifa 4 qismdan iborat: <b>nima qilinadi</b>, <b>kim qiladi</b>, <b>qachon tugaydi</b> va <b>qanchalik muhim</b>.",
        "Misol: <em>\"Chorak taqdimotining 1-3 slaydlarini Zuhra 25-oktabr soat 18:00 gacha tayyorlaydi (yuqori ustuvorlik)\"</em>. Mana bunday vazifani bajarish oson va tekshirish ham oson.",
      ],
    },
    {
      sarlavha: "3. Kanban &mdash; doskaga qarab ishlash",
      matn: [
        "<b>Kanban</b> &mdash; yaponcha \"ko'rinadigan karta\" degani. Ish uchta ustunga bo'linadi: <b>qilinishi kerak</b>, <b>bajarilmoqda</b>, <b>bajarildi</b>.",
        "Har bir vazifa &mdash; alohida kartochka. Ish boshlansa, kartochka o'ngga o'tadi. Bu usulning kuchi &mdash; <em>hamma bir qarashda holatni ko'radi</em>. Kim ortiqcha ish bilan band, kim bo'sh &mdash; darhol ko'rinadi.",
        "Muhim qoida: bir vaqtda <b>\"bajarilmoqda\"</b> ustunida 2-3 tadan ko'p kartochka bo'lmasin. Aks holda hech biri tugamaydi. Bu &mdash; \"ko'p ishni birga\" qilish emas, balki <em>tartib bilan tugatish</em> usuli.",
      ],
    },
    {
      sarlavha: "4. Jamoada ishlash qoidalari",
      matn: [
        "Jamoada eng ko'p uchraydigan muammo &mdash; <b>\"kim qiladi?\"</b> degan savolning javobsiz qolishi. Shuning uchun har bir vazifaga <em>aniq mas'ul</em> biriktirilishi shart.",
        "Ikkinchi muhim narsa &mdash; <b>muddat</b>. Muddat bo'lmasa, ish cho'zilib ketadi. Uchinchisi &mdash; <b>hisobot</b>: kim nima qildi, nima qolmadi. Haftada bir marta qisqa yig'ilish (15 daqiqa) yetarli.",
        "Va to'rtinchi: <b>bloklovchi vazifalarni</b> darhol aytish kerak. \"Men buni qila olmayapman, chunki menga fayl kelmagan\" &mdash; bu sharmandalik emas, balki professional xatti-harakat.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Vazifa boshqaruv vositalari",
      matn: [
        "Bugungi kunda eng ko'p ishlatiladigan vositalar va ularning vazifasi.",
      ],
      jadval: [
        ["Vosita", "Turi", "Nima uchun qulay"],
        ["Trello", "Kanban doska", "Jamoa ishini ko'rinadigan qiladi, doskalar va ro'yxatlar"],
        ["Microsoft To Do", "Shaxsiy vazifalar", "Kundalik ro'yxat, eslatma, telefonda ham"],
        ["Google Tasks", "Shaxsiy vazifalar", "Gmail va Kalendar bilan bog'langan"],
        ["Notion", "Hujjat + vazifa", "Hujjat, jadval va vazifa bir joyda"],
        ["Asana / ClickUp", "Loyiha boshqaruvi", "Katta jamoalar uchun, hisobotlar bilan"],
        ["Google Sheets", "Jadval", "Oddiy vazifa ro'yxati uchun eng sodda usul"],
      ],
    },
    {
      sarlavha: "2. Vazifaning 4 ta qismi",
      matn: [
        "Har bir vazifa quyidagi 4 qismdan iborat bo'lishi kerak.",
      ],
      jadval: [
        ["Qism", "Savol", "Misol"],
        ["Nima", "Aniq ish nima?", "1-3 slaydlarni tayyorlash"],
        ["Kim", "Kim bajaradi?", "Zuhra"],
        ["Qachon", "Muddat qanday?", "25-oktabr, 18:00"],
        ["Muhimlik", "Ustuvorlik darajasi?", "Yuqori / O'rta / Past"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Ko'p uchraydigan xato",
        matn: "Vazifani <b>katta va umumiy</b> yozish: \"Veb-sayt yasash\". Uni bajarish qiyin, tekshirish ham qiyin. To'g'risi &mdash; kichik qismlarga bo'lish: \"Bosh sahifa tuzilishi\", \"Ranglar tanlash\", \"Forma qo'shish\".",
      },
    },
    {
      sarlavha: "3. Kanban doska tuzilishi",
      matn: [
        "Kanban doskaning klassik ko'rinishi &mdash; uch ustun. Katta loyihalarda ustunlar ko'payadi.",
      ],
      jadval: [
        ["Ustun", "Ma'nosi", "Karta holati"],
        ["Qilinishi kerak (To Do)", "Rejalashtirilgan ishlar", "Hali boshlanmagan"],
        ["Bajarilmoqda (Doing)", "Hozir ustida ishlanayotgan", "2-3 tadan ko'p bo'lmasin"],
        ["Tekshirilmoqda (Review)", "Tayyor, tekshiruv kutilmoqda", "Mas'ul tekshirishi kerak"],
        ["Bajarildi (Done)", "Tugallangan ishlar", "Natija tasdiqlangan"],
      ],
    },
    {
      sarlavha: "4. Muddatni kuzatish va hisobot",
      matn: [
        "Muddatni kuzatishning oddiy usullari.",
      ],
      jadval: [
        ["Holat", "Ma'nosi", "Nima qilish kerak"],
        ["Muddat yaqin (1-2 kun)", "Vaqt oz qoldi", "Ustuvorlikni oshirish"],
        ["Bugun tugaydi", "Oxirgi kun", "Boshqa ishlarni to'xtatib, shunga o'tish"],
        ["Kechikdi", "Muddat o'tdi", "Sababini aytish va yangi muddat so'rash"],
        ["Bajarildi", "Tugallandi", "Hisobotga kiritish"],
        ["Bloklangan", "Tashqi sabab", "Muammoni darhol aytish"],
      ],
      royhat: [
        "Haftalik hisobot: nechta vazifa bajarildi, nechtasi qoldi.",
        "Kim eng ko'p yuklamada &mdash; ishni qayta taqsimlash kerakmi?",
        "Qaysi vazifalar doim kechikadi &mdash; reja xatomi yoki sabab boshqami?",
        "Keyingi hafta rejasi: 3-5 ta asosiy vazifa.",
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "ikonka",
      "sarlavha": "Jamoa ishi qanday vositalar bilan yuritiladi?",
      "tushuntirish": "Qog'oz doska va og'zaki kelishuv o'rniga &mdash; onlayn vositalar. Hamma bir joyda ko'radi.",
      "elementlar": [
        {
          "belgi": "📋",
          "nom": "Vazifalar doskasi",
          "izoh": "Kim nima qilayotgani ko'rinib turadi"
        },
        {
          "belgi": "📅",
          "nom": "Kalendar",
          "izoh": "Muddat va uchrashuvlar"
        },
        {
          "belgi": "💬",
          "nom": "Chat",
          "izoh": "Tezkor savol-javob"
        },
        {
          "belgi": "📁",
          "nom": "Umumiy papka",
          "izoh": "Fayllar bitta joyda"
        },
        {
          "belgi": "📝",
          "nom": "Hujjat",
          "izoh": "Reja va natijalar yoziladi"
        },
        {
          "belgi": "🔔",
          "nom": "Eslatmalar",
          "izoh": "Muddat yaqinlashganda xabar"
        }
      ],
      "izoh": "Eng muhimi &mdash; <b>hamma bir xil ma'lumotni ko'radi</b>. \"Men bilmasdim\" degan bahona qolmaydi."
    },
    {
      "tur": "sxema",
      "sarlavha": "Kanban doskasi qanday ishlaydi?",
      "tushuntirish": "Vazifa bitta ustundan ikkinchisiga <b>ko'chib</b> boradi. Shu bilan ish qayerda turgani ko'rinadi.",
      "svg": "<svg viewBox=\"0 0 700 340\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Kanban doskasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"338\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"22\" y=\"46\" width=\"200\" height=\"266\" rx=\"12\" fill=\"#1b2334\" stroke=\"#93a0bd\"/>\n  <text x=\"122\" y=\"76\" fill=\"#93a0bd\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">REJADA</text>\n  <rect x=\"38\" y=\"92\" width=\"168\" height=\"46\" rx=\"8\" fill=\"#131a29\" stroke=\"#26304a\"/>\n  <text x=\"50\" y=\"112\" fill=\"#e6ecff\" font-size=\"11.5\">Tadqiqot qilish</text>\n  <text x=\"50\" y=\"128\" fill=\"#93a0bd\" font-size=\"10.5\">Aziza &middot; 10.10</text>\n  <rect x=\"38\" y=\"148\" width=\"168\" height=\"46\" rx=\"8\" fill=\"#131a29\" stroke=\"#26304a\"/>\n  <text x=\"50\" y=\"168\" fill=\"#e6ecff\" font-size=\"11.5\">Rasm tayyorlash</text>\n  <text x=\"50\" y=\"184\" fill=\"#93a0bd\" font-size=\"10.5\">Dilnoza &middot; 11.10</text>\n  <rect x=\"248\" y=\"46\" width=\"200\" height=\"266\" rx=\"12\" fill=\"#1b2334\" stroke=\"#ffb020\"/>\n  <text x=\"348\" y=\"76\" fill=\"#ffb020\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">BAJARILMOQDA</text>\n  <rect x=\"264\" y=\"92\" width=\"168\" height=\"46\" rx=\"8\" fill=\"#131a29\" stroke=\"#26304a\"/>\n  <text x=\"276\" y=\"112\" fill=\"#e6ecff\" font-size=\"11.5\">Slayd yasash</text>\n  <text x=\"276\" y=\"128\" fill=\"#93a0bd\" font-size=\"10.5\">Bekzod &middot; 12.10</text>\n  <rect x=\"474\" y=\"46\" width=\"200\" height=\"266\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\"/>\n  <text x=\"574\" y=\"76\" fill=\"#22d3a6\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">TAYYOR</text>\n  <rect x=\"490\" y=\"92\" width=\"168\" height=\"46\" rx=\"8\" fill=\"#131a29\" stroke=\"#26304a\"/>\n  <text x=\"502\" y=\"112\" fill=\"#e6ecff\" font-size=\"11.5\">Mavzu tanlash</text>\n  <text x=\"502\" y=\"128\" fill=\"#22d3a6\" font-size=\"10.5\">✅ Yakunlandi</text>\n  <rect x=\"490\" y=\"148\" width=\"168\" height=\"46\" rx=\"8\" fill=\"#131a29\" stroke=\"#26304a\"/>\n  <text x=\"502\" y=\"168\" fill=\"#e6ecff\" font-size=\"11.5\">Reja tuzish</text>\n  <text x=\"502\" y=\"184\" fill=\"#22d3a6\" font-size=\"10.5\">✅ Yakunlandi</text>\n  <text x=\"350\" y=\"332\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Vazifa tayyor bo'lsa &mdash; karta o'ngga ko'chiriladi.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Kanban ustunlari nimani bildiradi?",
      "tushuntirish": "Har bir ustun &mdash; ishning bir holati. Ustunlar soni loyihaga qarab o'zgaradi.",
      "elementlar": [
        {
          "belgi": "📥",
          "nom": "Rejada (To Do)",
          "izoh": "Vazifa qo'yilgan, lekin hali boshlanmagan"
        },
        {
          "belgi": "⚙️",
          "nom": "Bajarilmoqda (Doing)",
          "izoh": "Ayni paytda ustida ishlanmoqda"
        },
        {
          "belgi": "🔍",
          "nom": "Tekshirilmoqda (Review)",
          "izoh": "Ish tugadi, lekin tekshirilishi kerak"
        },
        {
          "belgi": "✅",
          "nom": "Tayyor (Done)",
          "izoh": "Tekshirildi va qabul qilindi"
        },
        {
          "belgi": "🚧",
          "nom": "To'siq (Blocked)",
          "izoh": "Biror sabab bilan to'xtab qolgan &mdash; yordam kerak"
        }
      ],
      "izoh": "Qoida: <b>bir vaqtda bajarilmoqda</b> ustunida 2-3 tadan ko'p vazifa turmasin &mdash; aks holda hech biri tugamaydi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Vazifalar doskasi oynasi",
      "tushuntirish": "Har bir vazifada: nom, mas'ul, muddat va holat bo'ladi. Bularning hammasi ko'rinib turadi.",
      "oyna": {
        "nom": "8-sinf loyihasi — Vazifalar",
        "manzil": "Doska  |  Ro'yxat  |  Kalendar  |  A'zolar",
        "ustunlar": [
          "Vazifa",
          "Mas'ul",
          "Muddat",
          "Holat"
        ],
        "qatorlar": [
          [
            "Tadqiqot qilish",
            "Aziza",
            "10.10",
            "📥 Rejada"
          ],
          [
            "Rasm va sxemalar",
            "Dilnoza",
            "11.10",
            "📥 Rejada"
          ],
          [
            "Slayd tayyorlash",
            "Bekzod",
            "12.10",
            "⚙️ Bajarilmoqda"
          ],
          [
            "Mavzu tanlash",
            "Jamoa",
            "05.10",
            "✅ Tayyor"
          ],
          [
            "Reja tuzish",
            "Aziza",
            "06.10",
            "✅ Tayyor"
          ],
          [
            "Matnni tekshirish",
            "O'qituvchi",
            "13.10",
            "🔍 Tekshirilmoqda"
          ]
        ]
      },
      "izoh": "Har bir vazifaning <b>mas'uli</b> ko'rsatilgani muhim &mdash; \"kimdir qiladi\" degan vazifa hech qachon bajarilmaydi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Yaxshi va yomon vazifa",
      "tushuntirish": "Vazifa qanchalik aniq yozilgan bo'lsa, uni bajarish shunchalik oson.",
      "ustunlar": [
        {
          "belgi": "❌",
          "sarlavha": "Yomon vazifa",
          "turi": "yomon",
          "royxat": [
            "\"Loyihani qilish\" &mdash; juda katta",
            "\"Slaydni yaxshilash\" &mdash; nimani?",
            "Mas'ul ko'rsatilmagan",
            "Muddat yo'q",
            "\"Tezroq\" &mdash; aniq emas"
          ]
        },
        {
          "belgi": "✅",
          "sarlavha": "Yaxshi vazifa",
          "turi": "yaxshi",
          "royxat": [
            "\"3-6-slaydlarni yozish\" &mdash; aniq hajm",
            "\"Rasmlarni 1200px qilib kichraytirish\" &mdash; aniq amal",
            "Mas'ul: Bekzod",
            "Muddat: 12.10, 18:00",
            "Natija: tayyor fayl havolasi"
          ]
        }
      ],
      "izoh": "Qoida: vazifani <b>boshqa odam o'qib tushunadigan</b> qilib yozing."
    },
    {
      "tur": "royxat",
      "sarlavha": "Vazifani to'g'ri yozish: 4 savol",
      "tushuntirish": "Har bir vazifani yozganda shu to'rt savolga javob bo'lishi kerak.",
      "elementlar": [
        {
          "belgi": "❓",
          "nom": "Nima qilinadi?",
          "izoh": "Aniq natija: \"3 slayd yoziladi\", \"5 rasm tanlanadi\""
        },
        {
          "belgi": "👤",
          "nom": "Kim qiladi?",
          "izoh": "Bitta mas'ul &mdash; \"jamoa\" emas"
        },
        {
          "belgi": "📅",
          "nom": "Qachongacha?",
          "izoh": "Sana va vaqt: 12.10, 18:00 gacha"
        },
        {
          "belgi": "✅",
          "nom": "Qanday tekshiriladi?",
          "izoh": "Natija qanday ko'rinishda bo'ladi"
        }
      ],
      "izoh": "Bu to'rttasi bo'lmasa &mdash; vazifa emas, shunchaki <b>tilak</b> bo'lib qoladi."
    },
    {
      "tur": "sxema",
      "sarlavha": "Jamoada ish qanday harakatlanadi?",
      "tushuntirish": "Vazifa qo'yilgandan tayyor bo'lguncha to'rt bosqichdan o'tadi.",
      "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Jamoa ishi zanjiri\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx13a\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/></marker>\n  </defs>\n  <rect x=\"22\" y=\"100\" width=\"146\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"95\" y=\"134\" fill=\"#e6ecff\" font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">1. VAZIFA</text>\n  <text x=\"95\" y=\"156\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">rahbar qo'yadi</text>\n  <text x=\"95\" y=\"174\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">mas'ul belgilanadi</text>\n  <rect x=\"192\" y=\"100\" width=\"146\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"265\" y=\"134\" fill=\"#e6ecff\" font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">2. BAJARISH</text>\n  <text x=\"265\" y=\"156\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">mas'ul ishlaydi</text>\n  <text x=\"265\" y=\"174\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">savol bo'lsa &mdash; chat</text>\n  <rect x=\"362\" y=\"100\" width=\"146\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2\"/>\n  <text x=\"435\" y=\"134\" fill=\"#e6ecff\" font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">3. TEKSHIRUV</text>\n  <text x=\"435\" y=\"156\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">boshqa a'zo yoki</text>\n  <text x=\"435\" y=\"174\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">o'qituvchi ko'radi</text>\n  <rect x=\"532\" y=\"100\" width=\"146\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"605\" y=\"134\" fill=\"#e6ecff\" font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">4. TAYYOR</text>\n  <text x=\"605\" y=\"156\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">qabul qilindi</text>\n  <text x=\"605\" y=\"174\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">keyingi bosqichga</text>\n  <line x1=\"170\" y1=\"148\" x2=\"188\" y2=\"148\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx13a)\"/>\n  <line x1=\"340\" y1=\"148\" x2=\"358\" y2=\"148\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx13a)\"/>\n  <line x1=\"510\" y1=\"148\" x2=\"528\" y2=\"148\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx13a)\"/>\n  <path d=\"M435 200 L435 228 L95 228 L95 200\" fill=\"none\" stroke=\"#ffb020\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/>\n  <text x=\"265\" y=\"250\" fill=\"#ffb020\" font-size=\"11.5\" text-anchor=\"middle\">Tuzatish kerak bo'lsa &mdash; vazifa qaytadi</text>\n  <text x=\"350\" y=\"278\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Har bir qadam doskada ko'rinib turadi &mdash; hech kim \"bilmasdim\" demaydi.</text>\n</svg>"
    },
    {
      "tur": "ikonka",
      "sarlavha": "Jamoadagi rollar",
      "tushuntirish": "Har bir a'zo bir necha rol bajaradi. Rollar kelishib olinadi &mdash; o'z-o'zidan bo'linmaydi.",
      "elementlar": [
        {
          "belgi": "🧭",
          "nom": "Rahbar",
          "izoh": "Vazifalarni taqsimlaydi, muddatni kuzatadi"
        },
        {
          "belgi": "🔍",
          "nom": "Tadqiqotchi",
          "izoh": "Ma'lumot yig'adi va tekshiradi"
        },
        {
          "belgi": "🎨",
          "nom": "Dizayner",
          "izoh": "Rasm, sxema va ko'rinish"
        },
        {
          "belgi": "✍️",
          "nom": "Yozuvchi",
          "izoh": "Matn tayyorlaydi"
        },
        {
          "belgi": "🎤",
          "nom": "Taqdimotchi",
          "izoh": "Natijani himoya qiladi"
        },
        {
          "belgi": "🧪",
          "nom": "Tekshiruvchi",
          "izoh": "Xatolarni topadi, sifatni kuzatadi"
        }
      ],
      "izoh": "Yaxshi jamoada har kim o'z rolini biladi. Rollar almashsa ham &mdash; <b>aniq</b> bo'lishi kerak."
    },
    {
      "tur": "qadam",
      "sarlavha": "Vazifani bajarish tartibi",
      "tushuntirish": "Bitta vazifa ustida ishlaganda shu tartib vaqtni tejaydi.",
      "elementlar": [
        {
          "nom": "Vazifani o'qib chiqish",
          "izoh": "Natija nima bo'lishini aniq tushunish"
        },
        {
          "nom": "Kartani «Bajarilmoqda»ga ko'chirish",
          "izoh": "Jamoa siz ishlayotganingizni ko'radi"
        },
        {
          "nom": "Ishni boshlash",
          "izoh": "Vazifa kichik bo'lsa &mdash; bo'laklarga bo'lish"
        },
        {
          "nom": "To'siq bo'lsa &mdash; aytish",
          "izoh": "Chatga yozish yoki kartaga belgi qo'yish"
        },
        {
          "nom": "Natijani joylash",
          "izoh": "Fayl havolasini vazifaga biriktirish"
        },
        {
          "nom": "Kartani «Tekshirilmoqda»ga o'tkazish",
          "izoh": "Endi javobni kutish"
        }
      ],
      "izoh": "Eng ko'p qilinadigan xato &mdash; <b>to'siqni aytmaslik</b>. Vaqtida aytilgan savol kunlarni tejaydi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Umumiy kalendar",
      "tushuntirish": "Muddat va uchrashuvlar bitta kalendarda bo'lsa, hech kim unutmaydi.",
      "oyna": {
        "nom": "Noyabr — jamoa kalendari",
        "manzil": "Kun  |  Hafta  |  Oy  |  Ro'yxat",
        "ustunlar": [
          "Sana",
          "Voqea",
          "Kim uchun",
          "Eslatma"
        ],
        "qatorlar": [
          [
            "10.11",
            "Tadqiqot yakunlanishi",
            "Aziza",
            "🔔 1 kun oldin"
          ],
          [
            "11.11",
            "Rasmlar tayyor",
            "Dilnoza",
            "🔔 1 kun oldin"
          ],
          [
            "12.11",
            "Slaydlar yakunlanadi",
            "Bekzod",
            "🔔 2 kun oldin"
          ],
          [
            "13.11",
            "Jamoa uchrashuvi",
            "Hamma",
            "🕒 15:00, onlayn"
          ],
          [
            "15.11",
            "Loyiha topshiriladi",
            "Jamoa",
            "🔴 Yakuniy muddat"
          ]
        ]
      },
      "izoh": "Kalendarga <b>eslatma</b> qo'yish &mdash; eng foydali odat. Muddatni yodda saqlash shart emas."
    },
    {
      "tur": "royxat",
      "sarlavha": "Muddatni boshqarish qoidalari",
      "tushuntirish": "Vaqtni to'g'ri taqsimlash &mdash; jamoa ishining yarmi.",
      "elementlar": [
        {
          "belgi": "📅",
          "nom": "Muddatni kalendarga yozish",
          "izoh": "Faqat rejada emas &mdash; kalendarda ham"
        },
        {
          "belgi": "⏪",
          "nom": "Zaxira vaqt qoldirish",
          "izoh": "Topshirishdan 1 kun oldin tugatish maqsadi"
        },
        {
          "belgi": "🔪",
          "nom": "Katta ishni bo'lish",
          "izoh": "\"Taqdimot\" emas &mdash; 5-6 ta kichik vazifa"
        },
        {
          "belgi": "⏱️",
          "nom": "Vaqtni hisoblash",
          "izoh": "Har vazifaga taxminiy vaqt belgilash"
        },
        {
          "belgi": "🚫",
          "nom": "Oxirgi kunga qoldirmaslik",
          "izoh": "Bitta o'quvchi kechiksa &mdash; hamma kechikadi"
        },
        {
          "belgi": "📊",
          "nom": "Har hafta tekshirish",
          "izoh": "Nima bajarildi, nima qoldi"
        }
      ]
    },
    {
      "tur": "qiyos",
      "sarlavha": "Individual va jamoa ishi",
      "tushuntirish": "Ikkalasi ham kerak. Jamoa ishida mas'uliyat bo'lishish &mdash; asosiy farq.",
      "ustunlar": [
        {
          "belgi": "👤",
          "sarlavha": "Individual ish",
          "turi": "brand",
          "royxat": [
            "Hammasini o'zingiz qilasiz",
            "Tez qaror qabul qilinadi",
            "Reja o'zingizga bog'liq",
            "Hajmi cheklangan"
          ]
        },
        {
          "belgi": "👥",
          "sarlavha": "Jamoa ishi",
          "turi": "yaxshi",
          "royxat": [
            "Vazifalar bo'linadi",
            "Kelishish kerak",
            "Boshqaning ishiga bog'liq",
            "Kattaroq natija chiqadi"
          ]
        }
      ],
      "izoh": "Jamoa ishining eng qiyin qismi &mdash; <b>kelishuv</b>. Eng qimmatli qismi ham shu."
    },
    {
      "tur": "royxat",
      "sarlavha": "Kelishmovchilik chiqsa nima qilish kerak?",
      "tushuntirish": "Fikrlar mos kelmasligi normal. Muhimi &mdash; uni to'g'ri hal qilish.",
      "elementlar": [
        {
          "belgi": "👂",
          "nom": "Tinglash",
          "izoh": "Gapni bo'lmasdan, oxirigacha eshitish"
        },
        {
          "belgi": "❓",
          "nom": "Savol berish",
          "izoh": "\"Nega shunday o'ylaysiz?\" &mdash; sababini bilish"
        },
        {
          "belgi": "⚖️",
          "nom": "Mezon tanlash",
          "izoh": "Qaysi variant foydaliroq &mdash; faktlar bo'yicha"
        },
        {
          "belgi": "🤝",
          "nom": "Kelishuv",
          "izoh": "Ikkala tomon ma'qul variant topish"
        },
        {
          "belgi": "🗳️",
          "nom": "Ovoz berish",
          "izoh": "Kelishuv bo'lmasa &mdash; jamoa ovoz beradi"
        },
        {
          "belgi": "🧑‍🏫",
          "nom": "Kattaga murojaat",
          "izoh": "Hal bo'lmasa &mdash; o'qituvchi yordam beradi"
        }
      ],
      "izoh": "Qoida: <b>fikrni tanqid qilish mumkin, odamni emas</b>."
    },
    {
      "tur": "royxat",
      "sarlavha": "Uchrashuvdan oldin va keyin",
      "tushuntirish": "Onlayn uchrashuv samarali bo'lishi uchun tayyorgarlik kerak.",
      "elementlar": [
        {
          "belgi": "📋",
          "nom": "Oldin: kun tartibi",
          "izoh": "Nimalar muhokama qilinishini oldindan yozish"
        },
        {
          "belgi": "⏰",
          "nom": "Oldin: vaqtni belgilash",
          "izoh": "30-40 daqiqadan oshmasin"
        },
        {
          "belgi": "🔇",
          "nom": "Oldin: mikrofon va internet",
          "izoh": "Texnikani sinab ko'rish"
        },
        {
          "belgi": "📝",
          "nom": "Davomida: qarorlarni yozish",
          "izoh": "Kim nima qiladi &mdash; yozib boriladi"
        },
        {
          "belgi": "📤",
          "nom": "Keyin: qarorni yuborish",
          "izoh": "Hammaga qisqa xulosa yuboriladi"
        },
        {
          "belgi": "✅",
          "nom": "Keyin: vazifalarni doskaga qo'yish",
          "izoh": "Kelishilgan ishlar kartaga aylanadi"
        }
      ],
      "izoh": "Uchrashuvdan keyin <b>yozma xulosa</b> bo'lmasa &mdash; qarorlar unutiladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Loyihani rejalashtirish",
      "tushuntirish": "Yangi loyihani boshlaganda shu tartib bo'yicha yurilsa, ish tartibli bo'ladi.",
      "elementlar": [
        {
          "nom": "Maqsadni aniqlash",
          "izoh": "Loyiha oxirida nima tayyor bo'ladi?"
        },
        {
          "nom": "Ishlarni bo'laklarga ajratish",
          "izoh": "Katta ish &mdash; 10-15 ta kichik vazifa"
        },
        {
          "nom": "Mas'ullarni belgilash",
          "izoh": "Har vazifaga bitta javobgar"
        },
        {
          "nom": "Muddatlarni qo'yish",
          "izoh": "Har vazifaga sana, umumiy muddatga zaxira"
        },
        {
          "nom": "Doska va kalendar sozlash",
          "izoh": "Vazifalar va uchrashuvlar joylanadi"
        },
        {
          "nom": "Har hafta tekshirib borish",
          "izoh": "Reja bilan solishtirish va tuzatish"
        }
      ],
      "izoh": "Loyiha oxirida <b>taqdimot</b> bo'lishini unutmang &mdash; uni ham oldindan vazifa qilib qo'ying."
    }
  ],

  amaliy: [
    "Trello yoki Microsoft To Do da hisob ochib, \"Mening vazifalarim\" doskasini yarating.",
    "Uchta ustun yarating: <b>Qilinishi kerak</b>, <b>Bajarilmoqda</b>, <b>Bajarildi</b>.",
    "Bugungi 5 ta vazifangizni kartochka ko'rinishida qo'shing: nom, mas'ul va muddat bilan.",
    "Vazifalardan birini \"Bajarilmoqda\" ustuniga, keyin \"Bajarildi\" ga ko'chiring.",
    "Haftalik kalendarga vazifalarni kunlar bo'yicha joylashtiring (har kunda 2 tadan ko'p emas).",
    "Guruh a'zolaringiz va ularning vazifalarini jadval ko'rinishida daftaringizga yozing.",
  ],

  uyga: [
    {
      "savol": "Kanban ustunlarini yozing va har biri nimani bildirishini tushuntiring.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Ustun</th><th>Ma'nosi</th></tr></thead><tbody><tr><td>📥 Rejada (To Do)</td><td>Vazifa qo'yilgan, lekin boshlanmagan</td></tr><tr><td>⚙️ Bajarilmoqda (Doing)</td><td>Ayni paytda ustida ishlanmoqda</td></tr><tr><td>🔍 Tekshirilmoqda (Review)</td><td>Ish tugadi, tekshirilishi kerak</td></tr><tr><td>✅ Tayyor (Done)</td><td>Tekshirildi va qabul qilindi</td></tr><tr><td>🚧 To'siq (Blocked)</td><td>Biror sabab bilan to'xtagan &mdash; yordam kerak</td></tr></tbody></table><p>Qoida: <b>«Bajarilmoqda»</b> ustunida 2-3 tadan ko'p vazifa turmasin.</p>"
    },
    {
      "savol": "Yaxshi vazifa qanday yoziladi? 4 ta savolga javob bo'lishi kerak &mdash; o'z misolingiz bilan ko'rsating.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ol><li><b>Nima qilinadi?</b> &mdash; aniq natija;</li><li><b>Kim qiladi?</b> &mdash; bitta mas'ul;</li><li><b>Qachongacha?</b> &mdash; sana va vaqt;</li><li><b>Qanday tekshiriladi?</b> &mdash; natijaning ko'rinishi.</li></ol><p><b>Yomon:</b> \"Taqdimotni qilish\" &mdash; noaniq, mas'ulsiz, muddatsiz.</p><p><b>Yaxshi:</b> \"3-6-slaydlarni yozish. Mas'ul: Bekzod. Muddat: 12.10, 18:00. Natija: havola yuboriladi.\"</p>"
    },
    {
      "savol": "Jamoadagi rollarni sanang va har birining vazifasini yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ul><li><b>Rahbar</b> &mdash; vazifalarni taqsimlaydi, muddatni kuzatadi;</li><li><b>Tadqiqotchi</b> &mdash; ma'lumot yig'adi va tekshiradi;</li><li><b>Dizayner</b> &mdash; rasm, sxema va ko'rinish tayyorlaydi;</li><li><b>Yozuvchi</b> &mdash; matnni yozadi;</li><li><b>Taqdimotchi</b> &mdash; natijani himoya qiladi;</li><li><b>Tekshiruvchi</b> &mdash; xatolarni topadi, sifatni kuzatadi.</li></ul><p>Kichik jamoada bitta odam 2 ta rol bajarishi mumkin &mdash; lekin <b>aniq</b> bo'lishi kerak.</p>"
    },
    {
      "savol": "Muddatni boshqarishning 4 ta qoidasini yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ol><li>Muddatni <b>kalendarga</b> yozish va eslatma qo'yish;</li><li><b>Zaxira vaqt</b> qoldirish &mdash; topshirishdan 1 kun oldin tugatish;</li><li>Katta ishni <b>kichik vazifalarga</b> bo'lish (taqdimot &rarr; 5-6 vazifa);</li><li>Har hafta <b>tekshirib borish</b> &mdash; nima bajarildi, nima qoldi.</li></ol>"
    },
    {
      "savol": "Jamoada kelishmovchilik chiqsa nima qilish kerak? 5 qadamni yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ol><li><b>Tinglash</b> &mdash; gapni bo'lmasdan, oxirigacha eshitish;</li><li><b>Savol berish</b> &mdash; \"Nega shunday o'ylaysiz?\" sababini bilish;</li><li><b>Mezon tanlash</b> &mdash; qaysi variant foydaliroq, faktlar bo'yicha;</li><li><b>Kelishuv izlash</b> &mdash; ikkala tomonga ma'qul variant;</li><li><b>Ovoz berish yoki kattaga murojaat</b> &mdash; hal bo'lmasa.</li></ol><p>Qoida: <b>fikrni tanqid qilish mumkin, odamni emas</b>.</p>"
    },
    {
      "savol": "Onlayn uchrashuvdan oldin va keyin nima qilish kerak? Yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<p><b>Oldin:</b></p><ul><li>Kun tartibini yozib qo'yish &mdash; nima muhokama qilinadi;</li><li>Vaqtni belgilash &mdash; 30-40 daqiqadan oshmasin;</li><li>Mikrofon va internetni sinab ko'rish.</li></ul><p><b>Davomida:</b> qarorlarni yozib borish &mdash; kim nima qiladi.</p><p><b>Keyin:</b></p><ul><li>Qisqa xulosani hammaga yuborish;</li><li>Kelishilgan ishlarni doskaga vazifa qilib qo'yish.</li></ul>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): o'z jamoangiz uchun Kanban doskasini qog'ozda chizing &mdash; kamida 3 ustun va 6 ta vazifa bo'lsin.",
      "tezlik": "Taxminiy vaqt: 12 daqiqa",
      "javob": "<pre><code>+----------------+----------------+----------------+\n|    REJADA      |  BAJARILMOQDA  |     TAYYOR     |\n+----------------+----------------+----------------+\n| Tadqiqot       | Slayd yasash   | Mavzu tanlash  |\n| [Aziza 10.10]  | [Bekzod 12.10] | [Jamoa 05.10]  |\n+----------------+----------------+----------------+\n| Rasm tayyorlash| Matn yozish    | Reja tuzish    |\n| [Dilnoza 11.10]| [Aziza 12.10]  | [Aziza 06.10]  |\n+----------------+----------------+----------------+</code></pre><p>Har bir kartada: <b>vazifa nomi</b>, <b>mas'ul</b> va <b>muddat</b> bo'lishi shart.</p>"
    }
  ],

  test: [
    {
      savol: "Kanban doskada ish boshlangan vazifalar qaysi ustunda turadi?",
      variantlar: ["Qilinishi kerak", "Bajarilmoqda", "Bajarildi", "Arxiv"],
      togri: 1,
      izoh: "Bajarilmoqda ustuni &mdash; hozir ustida ishlanayotgan vazifalar uchun.",
    },
    {
      savol: "Yaxshi vazifa qanday qismlardan iborat bo'lishi kerak?",
      variantlar: [
        "Faqat nom",
        "Nima, kim, qachon, muhimlik",
        "Faqat muddat",
        "Faqat mas'ul",
      ],
      togri: 1,
      izoh: "Vazifaning 4 qismi: nima qilinadi, kim qiladi, qachon tugaydi, qanchalik muhim.",
    },
    {
      savol: "\"Bajarilmoqda\" ustunida bir vaqtda nechta vazifa bo'lishi tavsiya etiladi?",
      variantlar: ["2-3 tadan ko'p emas", "10 ta", "Cheklov yo'q", "Faqat 1 ta"],
      togri: 0,
      izoh: "Bir vaqtda 2-3 tadan ko'p ish olinsa, hech biri to'liq tugamaydi.",
    },
    {
      savol: "Vazifa kechikkanda <b>eng to'g'ri</b> xatti-harakat qaysi?",
      variantlar: [
        "Yashirish va kutish",
        "Darhol aytish va yangi muddat taklif qilish",
        "Vazifani o'chirib tashlash",
        "Boshqa odamga ayblov qo'yish",
      ],
      togri: 1,
      izoh: "Kechikish muammo emas &mdash; uni yashirish muammo.",
    },
    {
      savol: "Pomodoro usulida ish va dam vaqti qanday taqsimlanadi?",
      variantlar: [
        "50 daqiqa ish, 10 daqiqa dam",
        "25 daqiqa ish, 5 daqiqa dam",
        "15 daqiqa ish, 15 daqiqa dam",
        "90 daqiqa ish, 30 daqiqa dam",
      ],
      togri: 1,
      izoh: "Klassik Pomodoro: 25 daqiqa diqqat bilan ishlash, 5 daqiqa tanaffus.",
    },
    {
      savol: "Jamoada ish taqsimlanganda yuklama kim uchun hisoblanadi?",
      variantlar: [
        "Faqat rahbar uchun",
        "Faqat yangi a'zolar uchun",
        "Barcha a'zolar uchun",
        "Hisoblash shart emas",
      ],
      togri: 2,
      izoh: "Barcha a'zolar yuklamasi solishtiriladi &mdash; kim bo'sh, kim ortiqcha band.",
    },
  ],

  lugat: [
    { soz: "Kanban", izoh: "Ishni ustunlar va kartochkalar orqali kuzatish usuli." },
    { soz: "Kartochka (card)", izoh: "Kanban doskadagi bitta vazifa." },
    { soz: "Ustuvorlik", izoh: "Vazifaning muhimlik darajasi (yuqori, o'rta, past)." },
    { soz: "Mas'ul", izoh: "Vazifani bajarish uchun javobgar shaxs." },
    { soz: "Muddat (deadline)", izoh: "Vazifa tugallanishi kerak bo'lgan vaqt." },
    { soz: "Bloklangan vazifa", izoh: "Tashqi sabab tufayli bajarib bo'lmayotgan vazifa." },
    { soz: "Pomodoro", izoh: "25 daqiqa ish, 5 daqiqa dam usuli." },
    { soz: "Yuklama", izoh: "Bir a'zoga tushgan ish hajmi." },
    { soz: "Haftalik hisobot", izoh: "Hafta davomida bajarilgan va qolgan ishlar tahlili." },
    { soz: "Trello / To Do", izoh: "Vazifa va loyiha boshqaruv vositalari." },
  ],

  xatolar: [
    "Vazifani umumiy yozish: \"sayt yasash\" &mdash; kichik qismlarga bo'lish kerak.",
    "Vazifaga mas'ul belgilamaslik &mdash; \"kim qiladi?\" degan savol javobsiz qoladi.",
    "Muddat qo'ymaslik &mdash; ish cho'zilib ketadi.",
    "\"Bajarilmoqda\" ustuniga 5-6 vazifani tiqishtirish.",
    "Kechikishni yashirish &mdash; jamoa vaqtida chora ko'ra olmaydi.",
    "Bir a'zoga hamma ishni yuklash, boshqasini bo'sh qoldirish.",
    "Hisobot tuzmaslik &mdash; natija ko'rinmaydi, xatolar takrorlanadi.",
  ],

  keyingi:
    "Bu bilan <b>bulutli xizmatlar bloki</b> (3 dars) yakunlandi. Keyingi darsdan <b>Git va GitHub bilan tanishuv</b> mavzusi boshlanadi (4 darsdan iborat): versiya nazorati, repository, commit, branch, GitHub akkaunt yaratish va loyihani joylash, Git asosiy buyruqlari. Bugungi jamoa bilan ishlash bilimlari Git mavzusida bevosita kerak bo'ladi.",
});
