/* 5-dars: Internet, brauzerlar va elektron pochta bilan ishlash */

AVX.dars({
  id: "cs8-005",
  sarlavha: "Internet, brauzerlar va elektron pochta bilan ishlash",
  kiritish:
    "Kompyuterni o'rgandik, qurilmalarni ham bildik. Endi dunyoning eng katta tarmog'i &mdash; <b>Internet</b> bilan tanishamiz: u nima, unda qanday xizmatlar bor, brauzer nima uchun kerak, qidiruvni qanday qilib <b>tez va aniq</b> qilish mumkin va elektron pochta orqali xat yozishni o'rganamiz.",

  maqsad: [
    "Internet nima ekanini va uning asosiy xizmatlarini bilish.",
    "Brauzerlar bilan ishlash: tablar, xatcho'p, tarix, yuklash, sozlamalar.",
    "Qidiruv tizimlaridan samarali foydalanish (qidiruv operatorlari).",
    "Elektron pochta yaratish, xat yozish va fayl biriktirish tartibi.",
    "Internet va elektron pochtadan xavfsiz foydalanish qoidalari.",
  ],

  natija: [
    "Internet xizmatlarini (veb, pochta, bulut, messenjer) ajratadi.",
    "Brauzerda kamida 8 ta tezkor tugmani ishlatadi.",
    "Qidiruvda aniq natija olish uchun operatorlardan foydalanadi.",
    "Elektron xat yozadi va unga fayl biriktiradi.",
    "Shubhali xat va havoladan saqlanishni biladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: port, MFP, drayver nima edi?"],
    ["5-16 daq", "Mentor tushuntirishi", "\"Internet nima?\" &mdash; pochta tarmog'i misolida tushuntirish."],
    ["16-28 daq", "Nazariya: Internet va brauzerlar", "Internet xizmatlari, brauzerlar va ularning imkoniyatlari."],
    ["28-40 daq", "Qidiruv san'ati", "Qidiruv operatorlari, natijalarni tekshirish, feyk ma'lumotdan saqlanish."],
    ["40-56 daq", "Elektron pochta", "Pochta yaratish tartibi, xat tuzilishi, CC va BCC, fayl biriktirish."],
    ["56-72 daq", "Amaliyot: kod yozamiz", "Qidiruv formasi, pochta shabloni, havolani tahlil qilish dasturlari."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har bir o'quvchi o'z nomidan xat yozadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Internet nima?",
      matn: [
        "Bugun ertalab siz uyg'onganingizda ob-havoni ko'rdingizmi? Balki videoni ko'rgandirsiz yoki do'stingizga xabar yozgandirsiz. Bularning hammasi <em>Internet</em> orqali bo'ldi.",
        "Internet &mdash; dunyo bo'ylab millionlab kompyuterlarni bog'laydigan <b>ulkan tarmoq</b>. Bitta oddiy taqqoslash: pochta tizimini tasavvur qiling. Siz xat yozasiz, konvertga manzil yozasiz, pochta uni olib boradi. Internetda ham xuddi shunday &mdash; faqat juda, juda tez.",
        "Internetning o'zi bitta kompaniya emas, bitta kompyuter ham emas. U <em>ko'p kompyuterlarning kelishuvi</em>. Shu sababli hech kim Internetni \"o'chira\" olmaydi &mdash; u bo'laklab joylashgan.",
      ],
    },
    {
      sarlavha: "2. Internet qanday xizmatlar beradi?",
      matn: [
        "Ko'pchilik Internet deganda faqat veb-saytlarni tushunadi. Aslida u <b>ko'p xizmatlar</b>dan iborat.",
        "<b>Veb (WWW)</b> &mdash; saytlar. <b>Elektron pochta</b> &mdash; xat yozish. <b>Bulutli saqlash</b> &mdash; fayllarni onlayn saqlash. <b>Messenjerlar</b> &mdash; tezkor xabar. <b>Video va musiqa</b> &mdash; tomosha va tinglash. <b>Onlayn dars va video-aloqa</b> &mdash; masofadan o'qish.",
        "Bu hammasi <em>bitta kabel</em> orqali ishlaydi. Buyuk ixtiro &mdash; shu: turli xizmatlar bir tarmoqda birga yashay oladi.",
      ],
    },
    {
      sarlavha: "3. Brauzer &mdash; Internetga \"eshik\"",
      matn: [
        "Brauzer (Chrome, Edge, Firefox, Safari) &mdash; veb-saytlarni ko'rish uchun dastur. U siz va sayt o'rtasida tarjimon bo'ladi: sayt HTML kod yuboradi, brauzer uni chiroyli sahifaga aylantiradi.",
        "Brauzerda 5 ta muhim imkoniyat bor va ularni bilish shart: <b>tablar</b> (bir vaqtda ko'p sayt ochish), <b>xatcho'plar</b> (Bookmarks &mdash; muhim saytlarni saqlash), <b>tarix</b> (History &mdash; qayerdaligangingizni topish), <b>yuklamalar</b> (Ctrl + J) va <b>maxfiy rejim</b> (Incognito).",
        "Va yana bitta: <em>F12</em> tugmasi. Bu &mdash; dasturchilar uchun eng muhim tugma. U saytning kodini ko'rsatadi. Biz keyingi darslarda bu tugmani juda ko'p ishlatamiz.",
      ],
    },
    {
      sarlavha: "4. Qidiruvni bilish &mdash; zamonaviy savodxonlik",
      matn: [
        "Ko'pchilik qidiradi, lekin kam odam <em>to'g'ri</em> qidiradi. Farqni ko'rsataman: \"fizika\" deb qidirsangiz &mdash; minglab natija chiqadi. \"Nyutonning ikkinchi qonuni formula misol 8-sinf\" deb qidirsangiz &mdash; kerakli natija birinchi sahifada bo'ladi.",
        "Bugun biz <b>qidiruv operatorlari</b>ni o'rganamiz. Masalan, <code>&quot;aynan shu so'zlar&quot;</code> &mdash; qo'shtirnoq ichidagi matnni aynan topadi. <code>site:edu.uz</code> &mdash; faqat shu saytdan qidiradi. <code>-so'z</code> &mdash; shu so'zni natijadan chiqarib tashlaydi.",
        "Va eng muhim qoida: <em>ko'rgan hamma narsa haqiqat emas.</em> Har bir ma'lumotni kamida 2-3 manbadan tekshirish kerak. Bu &mdash; raqamli madaniyatning birinchi qoidasi.",
      ],
    },
    {
      sarlavha: "5. Elektron pochta &mdash; rasmiy muloqot vositasi",
      matn: [
        "Messenjerda yozgan xabaringiz bir kunda unutiladi, lekin <b>elektron xat</b> &mdash; rasmiy hujjat hisoblanadi. Universitetga hujjat topshirishda, ishga ariza yozishda, o'qituvchiga murojaat qilishda aynan pochta ishlatiladi.",
        "Xat qanday tuziladi? <b>Kimga</b> (To) &mdash; asosiy manzil. <b>Nusxa</b> (CC) &mdash; boshqalarga ham ko'rinadi. <b>Maxfiy nusxa</b> (BCC) &mdash; boshqalarga ko'rinmaydi. <b>Mavzu</b> (Subject) &mdash; xat nima haqidaligi. <b>Matn</b> &mdash; xatning o'zi. <b>Biriktirma</b> &mdash; fayl.",
        "Bugungi amaliy vazifa: har biringiz o'z nomingizdan menga xat yozasiz. Mavzu qismiga \"5-dars uyga vazifasi\" deb yozasiz, matnida bugun o'rgangan 3 ta narsani sanaysiz va bitta rasm biriktirasiz.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Internet va uning xizmatlari",
      matn: [
        "Internet &mdash; xalqaro kompyuter tarmoqlarining birlashmasi. U orqali ma'lumot almashinadi. Asosiy xizmatlari quyidagilar.",
      ],
      jadval: [
        ["Xizmat", "Vazifasi", "Misol"],
        ["Veb (WWW)", "Saytlarni ko'rish", "google.com, wikipedia.org"],
        ["Elektron pochta", "Xat yozish va fayl yuborish", "gmail.com, mail.ru"],
        ["Bulutli saqlash", "Fayllarni onlayn saqlash", "Google Drive, OneDrive"],
        ["Messenjerlar", "Tezkor xabar almashish", "Telegram, WhatsApp"],
        ["Video-aloqa", "Onlayn suhbat va darslar", "Zoom, Google Meet"],
        ["Video va musiqa", "Tomosha va tinglash", "YouTube, Spotify"],
        ["Onlayn xizmatlar", "Davlat va bank xizmatlari", "my.gov.uz, bank ilovalari"],
      ],
    },
    {
      sarlavha: "2. Brauzerlar va ularning imkoniyatlari",
      matn: [
        "Brauzer &mdash; Internetga kirish dasturi. Eng ko'p ishlatiladiganlari quyidagilar.",
      ],
      jadval: [
        ["Brauzer", "Ishlab chiqaruvchi", "Xususiyati"],
        ["Google Chrome", "Google", "Eng ko'p ishlatiladi, kengaytmalari ko'p"],
        ["Microsoft Edge", "Microsoft", "Windowsda standart, tez"],
        ["Mozilla Firefox", "Mozilla", "Maxfiylikka e'tibor beradi"],
        ["Safari", "Apple", "Mac va iPhone uchun"],
        ["Opera", "Opera Software", "Ichida VPN va reklama bloklagich bor"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Muhim imkoniyat: yuklamalar",
        matn: "Brauzerda yuklab olingan fayllar <b>Ctrl + J</b> tugmasi bilan ko'riladi. Xuddi shu joyda faylni qayerga yuklaganingizni ham ko'rish mumkin. Yuklagan faylni topolmasangiz &mdash; birinchi navbatda shu tugmani bosing.",
      },
    },
    {
      sarlavha: "3. Brauzerning tezkor tugmalari",
      matn: [
        "Bu tugmalar ishlash tezligini sezilarli oshiradi.",
      ],
      jadval: [
        ["Tugma", "Vazifasi"],
        ["Ctrl + T", "Yangi tab ochish"],
        ["Ctrl + W", "Joriy tabni yopish"],
        ["Ctrl + Shift + T", "Yopilgan tabni qayta tiklash"],
        ["Ctrl + Tab", "Tablardan keyingisiga o'tish"],
        ["Ctrl + D", "Sahifani xatcho'pga qo'shish"],
        ["Ctrl + Shift + B", "Xatcho'plar panelini ko'rsatish"],
        ["Ctrl + H", "Tarixni ko'rish"],
        ["Ctrl + J", "Yuklamalarni ko'rish"],
        ["Ctrl + Shift + N", "Maxfiy (Incognito) rejim"],
        ["Ctrl + F", "Sahifada so'z qidirish"],
        ["Ctrl + 0 / Ctrl + +", "Masshtabni tiklash / kattalashtirish"],
        ["F5 / Ctrl + R", "Sahifani yangilash"],
        ["F12", "Dasturchi panelini ochish (kod ko'rish)"],
      ],
    },
    {
      sarlavha: "4. Qidiruv tizimlari va qidiruv operatorlari",
      matn: [
        "Qidiruv tizimi &mdash; Internetdagi ma'lumotni topib beruvchi xizmat. Eng kattalari: Google, Bing, Yandex, DuckDuckGo.",
        "Oddiy qidiruv ko'pincha yetarli emas. Quyidagi operatorlar natijani aniq qiladi.",
      ],
      jadval: [
        ["Operator", "Vazifasi", "Misol"],
        ["&quot;...&quot;", "Aynan shu iborani topadi", "&quot;qoraqalpoq tili&quot;"],
        ["site:", "Faqat shu saytdan qidiradi", "site:edu.uz informatika"],
        ["filetype:", "Faqat shu turdagi fayllar", "filetype:pdf algebra"],
        ["-", "Shu so'zni chiqarib tashlaydi", "python -django"],
        ["OR", "Ikkalasidan birini qidiradi", "html OR css darslik"],
        ["*", "Yetishmayotgan so'z o'rnida", "eng * dasturlash tili"],
        ["..", "Sonlar oralig'i", "2024..2026 yangiliklar"],
        ["define:", "So'zning ta'rifini topadi", "define:algoritm"],
      ],
    },
    {
      sarlavha: "5. Elektron pochta tuzilishi",
      matn: [
        "Elektron pochta manzili quyidagicha tuzilgan: <code>nomi@server.zone</code>",
      ],
      jadval: [
        ["Qism", "Misol", "Nima uchun"],
        ["Foydalanuvchi nomi", "kallibek", "Sizni tanitadi"],
        ["@ belgisi", "@", "Nom va serverni ajratadi (\"at\" deb o'qiladi)"],
        ["Server nomi", "gmail", "Qaysi pochtada ekanligi"],
        ["Zona", ".com", "Shu sayt turini bildiradi"],
      ],
      royhat: [
        "<b>To (Kimga):</b> asosiy qabul qiluvchi manzil.",
        "<b>CC:</b> boshqa odamlar ham xatni ko'radi (nusxa).",
        "<b>BCC:</b> yashirin nusxa &mdash; boshqa qabul qiluvchilar ko'rmaydi.",
        "<b>Subject (Mavzu):</b> xat nima haqidaligi &mdash; qisqa va aniq bo'lsin.",
        "<b>Matn:</b> salomlashish, mazmun, xayrlashish va imzo.",
        "<b>Biriktirma (Attachment):</b> fayl; hajmi odatda 25 MB gacha.",
      ],
      callout: {
        turi: "warn",
        sarlavha: "Xavfsizlik",
        matn: "\"Siz yutuq yutdingiz!\", \"Hisobingiz bloklanadi, havolani bosing\" kabi xatlar &mdash; <b>phishing</b> hiylasi. Bunday havolani hech qachon bosmang. Rasmiy xat ham har doim sizning manzilingizga keladi, boshqasiga emas.",
      },
    },
  ],

  rasmlar: [
    {
      "tur": "qiyos",
      "sarlavha": "Internet va Veb &mdash; bir narsa emas",
      "tushuntirish": "Bu ikki so'z ko'p chalkashtiriladi. Farqini bir marta tushunib olsangiz, yetarli.",
      "ustunlar": [
        {
          "belgi": "🌍",
          "sarlavha": "Internet",
          "turi": "brand",
          "royxat": [
            "Butun dunyo kompyuterlari tarmog'i",
            "Kabel, Wi-Fi, sun'iy yo'ldosh orqali",
            "1980-yillardan boshlangan",
            "Pochta, video, o'yin &mdash; hammasi shu yerda"
          ]
        },
        {
          "belgi": "🌐",
          "sarlavha": "Veb (WWW)",
          "turi": "yaxshi",
          "royxat": [
            "Internetdagi <b>sahifalar</b> tizimi",
            "Brauzer orqali ochiladi",
            "1991-yilda paydo bo'lgan",
            "Faqat bitta xizmat &mdash; pochtadan boshqa"
          ]
        }
      ],
      "izoh": "Internet &mdash; <em>yo'l tarmog'i</em>, veb esa &mdash; <em>o'sha yo'ldagi do'konlardan biri</em>."
    },
    {
      "tur": "sxema",
      "sarlavha": "Internetda ma'lumot qanday boradi?",
      "tushuntirish": "Siz havolani bosganingizda so'rov <b>serverga</b> uchib boradi, javob esa qaytib keladi. Bu jarayon soniyaning ulushida bo'ladi.",
      "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Mijoz va server sxemasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx5a\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/></marker>\n    <marker id=\"avx5b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#22d3a6\"/></marker>\n  </defs>\n  <rect x=\"30\" y=\"86\" width=\"170\" height=\"120\" rx=\"12\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"115\" y=\"122\" fill=\"#e6ecff\" font-size=\"14.5\" font-weight=\"700\" text-anchor=\"middle\">SIZ (mijoz)</text>\n  <text x=\"115\" y=\"146\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Kompyuter / telefon</text>\n  <text x=\"115\" y=\"166\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Brauzer ochilgan</text>\n  <text x=\"115\" y=\"188\" fill=\"#4f8cff\" font-size=\"12\" text-anchor=\"middle\">sahifani so'raydi</text>\n  <rect x=\"500\" y=\"86\" width=\"170\" height=\"120\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"585\" y=\"122\" fill=\"#e6ecff\" font-size=\"14.5\" font-weight=\"700\" text-anchor=\"middle\">SERVER</text>\n  <text x=\"585\" y=\"146\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Kuchli kompyuter</text>\n  <text x=\"585\" y=\"166\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Sayt fayllari turadi</text>\n  <text x=\"585\" y=\"188\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">javob yuboradi</text>\n  <rect x=\"250\" y=\"120\" width=\"200\" height=\"52\" rx=\"10\" fill=\"#0f1626\" stroke=\"#26304a\"/>\n  <text x=\"350\" y=\"142\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">Internet tarmog'i</text>\n  <text x=\"350\" y=\"160\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">(DNS, router, provayder)</text>\n  <line x1=\"204\" y1=\"132\" x2=\"244\" y2=\"140\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx5a)\"/>\n  <line x1=\"456\" y1=\"140\" x2=\"496\" y2=\"132\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx5a)\"/>\n  <line x1=\"496\" y1=\"172\" x2=\"456\" y2=\"176\" stroke=\"#22d3a6\" stroke-width=\"2.5\" marker-end=\"url(#avx5b)\"/>\n  <line x1=\"244\" y1=\"176\" x2=\"204\" y2=\"172\" stroke=\"#22d3a6\" stroke-width=\"2.5\" marker-end=\"url(#avx5b)\"/>\n  <text x=\"222\" y=\"118\" fill=\"#4f8cff\" font-size=\"11.5\" text-anchor=\"middle\">so'rov</text>\n  <text x=\"478\" y=\"118\" fill=\"#4f8cff\" font-size=\"11.5\" text-anchor=\"middle\">so'rov</text>\n  <text x=\"478\" y=\"196\" fill=\"#22d3a6\" font-size=\"11.5\" text-anchor=\"middle\">javob</text>\n  <text x=\"222\" y=\"196\" fill=\"#22d3a6\" font-size=\"11.5\" text-anchor=\"middle\">javob</text>\n  <text x=\"350\" y=\"248\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Butun yo'l &mdash; ikki tomonlama: so'rov boradi, javob qaytadi.</text>\n  <text x=\"350\" y=\"270\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">Shu sababli sahifa ochilishi bir necha soniya davom etishi mumkin.</text>\n</svg>"
    },
    {
      "tur": "ikonka",
      "sarlavha": "Internet qanday xizmatlar beradi?",
      "tushuntirish": "Internet &mdash; faqat saytlar emas. Uning ustida ko'plab xizmatlar ishlaydi.",
      "elementlar": [
        {
          "belgi": "🌐",
          "nom": "Veb saytlar",
          "izoh": "Ma'lumot va yangiliklar"
        },
        {
          "belgi": "✉️",
          "nom": "Elektron pochta",
          "izoh": "Xat yuborish"
        },
        {
          "belgi": "🎬",
          "nom": "Video xizmatlari",
          "izoh": "Video ko'rish va joylash"
        },
        {
          "belgi": "💬",
          "nom": "Muloqot",
          "izoh": "Chat va ijtimoiy tarmoq"
        },
        {
          "belgi": "☁️",
          "nom": "Bulutli saqlash",
          "izoh": "Fayllarni onlayn saqlash"
        },
        {
          "belgi": "🗺️",
          "nom": "Xarita va navigatsiya",
          "izoh": "Yo'l topish"
        }
      ],
      "izoh": "Maktabda eng ko'p ishlatiladiganlari: <b>veb saytlar</b>, <b>elektron pochta</b> va <b>video xizmatlari</b>."
    },
    {
      "tur": "sxema",
      "sarlavha": "Havola (URL) qismlarga bo'linadi",
      "tushuntirish": "Har bir havola ma'lum tuzilishga ega. Qismlarini bilsangiz, havola xavflimi yoki yo'qmi &mdash; tez ilg'aysiz.",
      "svg": "<svg viewBox=\"0 0 700 280\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Havola tuzilishi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"278\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <text x=\"350\" y=\"74\" fill=\"#e6ecff\" font-size=\"22\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">https://maktab.uz/darslar?sinf=8</text>\n  <rect x=\"128\" y=\"52\" width=\"92\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <rect x=\"220\" y=\"52\" width=\"112\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <rect x=\"332\" y=\"52\" width=\"102\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <rect x=\"434\" y=\"52\" width=\"148\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#c58cff\" stroke-width=\"2.5\"/>\n  <line x1=\"174\" y1=\"86\" x2=\"174\" y2=\"120\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"174\" y=\"142\" fill=\"#4f8cff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">PROTOKOL</text>\n  <text x=\"174\" y=\"162\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">https &mdash; xavfsiz</text>\n  <text x=\"174\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">http &mdash; himoyasiz</text>\n  <line x1=\"276\" y1=\"86\" x2=\"276\" y2=\"120\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"276\" y=\"142\" fill=\"#22d3a6\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">DOMEN</text>\n  <text x=\"276\" y=\"162\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">Sayt nomi</text>\n  <text x=\"276\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">.uz &mdash; davlat belgisi</text>\n  <line x1=\"383\" y1=\"86\" x2=\"383\" y2=\"120\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"383\" y=\"142\" fill=\"#ffb020\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">YO'L</text>\n  <text x=\"383\" y=\"162\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">Sayt ichidagi</text>\n  <text x=\"383\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">sahifa nomi</text>\n  <line x1=\"508\" y1=\"86\" x2=\"508\" y2=\"120\" stroke=\"#c58cff\" stroke-width=\"2\"/>\n  <text x=\"508\" y=\"142\" fill=\"#c58cff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">PARAMETR</text>\n  <text x=\"508\" y=\"162\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">Qo'shimcha ma'lumot</text>\n  <text x=\"508\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">(sozlovchi belgilar)</text>\n  <text x=\"350\" y=\"224\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">Eng muhimi &mdash; chap tomondagi qism: <tspan fill=\"#22d3a6\" font-weight=\"700\">domen</tspan> va <tspan fill=\"#4f8cff\" font-weight=\"700\">protokol</tspan>.</text>\n  <text x=\"350\" y=\"248\" fill=\"#ffb020\" font-size=\"12.5\" text-anchor=\"middle\">Manzilda qo'shimcha chiziqchalar ko'p bo'lsa &mdash; ehtiyot bo'ling.</text>\n</svg>"
    },
    {
      "tur": "ikonka",
      "sarlavha": "Brauzerlar &mdash; internetga chiqish darchasi",
      "tushuntirish": "Brauzer &mdash; veb sahifalarni ko'rsatuvchi dastur. Har bir kompyuterda bir nechtasi bo'ladi.",
      "elementlar": [
        {
          "belgi": "🔵",
          "nom": "Google Chrome",
          "izoh": "Eng ko'p ishlatiladi"
        },
        {
          "belgi": "🟠",
          "nom": "Mozilla Firefox",
          "izoh": "Bepul va ochiq"
        },
        {
          "belgi": "🔷",
          "nom": "Microsoft Edge",
          "izoh": "Windows bilan keladi"
        },
        {
          "belgi": "🧭",
          "nom": "Safari",
          "izoh": "Apple qurilmalarida"
        },
        {
          "belgi": "🔴",
          "nom": "Opera",
          "izoh": "Tejamkor rejimi bor"
        },
        {
          "belgi": "🌐",
          "nom": "Boshqalar",
          "izoh": "Brave, Vivaldi, Yandex"
        }
      ],
      "izoh": "Barcha brauzerlar bir xil veb sahifani ochadi &mdash; farq tezligi va qulayliklarida."
    },
    {
      "tur": "oyna",
      "sarlavha": "Brauzer oynasining tuzilishi",
      "tushuntirish": "Brauzer oynasidagi asosiy qismlarni bilsangiz, kerakli joyni tez topasiz.",
      "oyna": {
        "nom": "Google Chrome",
        "manzil": "https://maktab.uz/darslar",
        "ustunlar": [
          "Qism",
          "Vazifasi"
        ],
        "qatorlar": [
          [
            "⬅️ ➡️ ↻",
            "Orqaga, oldinga, yangilash tugmalari"
          ],
          [
            "🏠 Uy",
            "Bosh sahifaga qaytaradi"
          ],
          [
            "📑 Yorliqlar (tablar)",
            "Bir vaqtda bir necha sahifa ochish"
          ],
          [
            "⭐ Yulduzcha",
            "Sahifani xatcho'pga (Bookmark) qo'shadi"
          ],
          [
            "🔒 Qulf belgisi",
            "Sayt xavfsiz (https) ekanini bildiradi"
          ],
          [
            "⋮ Menyu",
            "Sozlamalar, tarix, kengaytmalar"
          ]
        ]
      },
      "izoh": "Manzil satri &mdash; brauzerning eng muhim qismi: qidiruv so'zini ham, to'liq havolani ham shu yerga yozsa bo'ladi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Brauzerda eng kerakli tugmalar",
      "tushuntirish": "Bu tugmalar ish tezligini bir necha barobar oshiradi.",
      "elementlar": [
        {
          "belgi": "📑",
          "nom": "Ctrl + T",
          "izoh": "Yangi yorliq (tab) ochadi"
        },
        {
          "belgi": "❌",
          "nom": "Ctrl + W",
          "izoh": "Joriy yorliqni yopadi"
        },
        {
          "belgi": "↩️",
          "nom": "Ctrl + Shift + T",
          "izoh": "Xato yopilgan yorliqni qaytaradi"
        },
        {
          "belgi": "🔄",
          "nom": "F5  /  Ctrl + R",
          "izoh": "Sahifani yangilaydi"
        },
        {
          "belgi": "⭐",
          "nom": "Ctrl + D",
          "izoh": "Sahifani xatcho'pga qo'shadi"
        },
        {
          "belgi": "🔍",
          "nom": "Ctrl + F",
          "izoh": "Sahifadagi so'zni qidiradi"
        },
        {
          "belgi": "⌨️",
          "nom": "Ctrl + L",
          "izoh": "Manzil satriga o'tadi"
        },
        {
          "belgi": "🕶️",
          "nom": "Ctrl + Shift + N",
          "izoh": "Maxfiy oyna ochadi"
        }
      ],
      "izoh": "<b>Ctrl + Shift + N</b> &mdash; umumiy kompyuterda ishlaganda qidiruv tarixi qolmasligi uchun ishlatiladi."
    },
    {
      "tur": "sxema",
      "sarlavha": "Elektron pochta manzili qanday tuzilgan?",
      "tushuntirish": "Manzilning ikki qismi bo'ladi: <b>foydalanuvchi nomi</b> va <b>pochta serveri</b>. Ular <b>@</b> belgisi bilan ajratiladi.",
      "svg": "<svg viewBox=\"0 0 700 240\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Elektron pochta manzili tuzilishi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"238\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <text x=\"350\" y=\"82\" fill=\"#e6ecff\" font-size=\"26\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">kallibek.maktab@gmail.com</text>\n  <rect x=\"130\" y=\"58\" width=\"196\" height=\"34\" rx=\"6\" fill=\"none\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <circle cx=\"348\" cy=\"75\" r=\"16\" fill=\"none\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <text x=\"348\" y=\"81\" fill=\"#ffb020\" font-size=\"17\" text-anchor=\"middle\">@</text>\n  <rect x=\"386\" y=\"58\" width=\"186\" height=\"34\" rx=\"6\" fill=\"none\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <line x1=\"228\" y1=\"96\" x2=\"228\" y2=\"126\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"228\" y=\"148\" fill=\"#4f8cff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">FOYDALANUVCHI NOMI</text>\n  <text x=\"228\" y=\"168\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">O'zingiz tanlaysiz (noyob bo'lishi kerak)</text>\n  <line x1=\"348\" y1=\"96\" x2=\"348\" y2=\"126\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"348\" y=\"148\" fill=\"#ffb020\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">@</text>\n  <text x=\"348\" y=\"168\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">\"at\" deb o'qiladi</text>\n  <line x1=\"479\" y1=\"96\" x2=\"479\" y2=\"126\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"479\" y=\"148\" fill=\"#22d3a6\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">POCHTA SERVERI</text>\n  <text x=\"479\" y=\"168\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">gmail.com, mail.ru, umail.uz</text>\n  <text x=\"350\" y=\"210\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Bitta @ belgisi bo'ladi. Ikki @ bo'lsa &mdash; manzil xato.</text>\n</svg>"
    },
    {
      "tur": "oyna",
      "sarlavha": "Elektron pochta qutisi",
      "tushuntirish": "Xatlar pochta qutisiga keladi. O'qilmagan xat <b>qalin</b> shriftda ko'rinadi.",
      "oyna": {
        "nom": "Kiruvchi xatlar (Inbox)",
        "manzil": "Yozish  |  Kiruvchi  |  Yuborilgan  |  Spam  |  Savat",
        "ustunlar": [
          "Kimdan",
          "Mavzu",
          "Sana",
          "Holat"
        ],
        "qatorlar": [
          [
            "👩‍🏫 O'qituvchi",
            "Uyga vazifa tekshiruvi",
            "07.10, 09:15",
            "🆕 yangi"
          ],
          [
            "📚 Kutubxona",
            "Kitob qaytarish eslatmasi",
            "06.10, 14:02",
            "✅ o'qilgan"
          ],
          [
            "🏫 Maktab",
            "Ota-onalar yig'ilishi",
            "05.10, 11:40",
            "✅ o'qilgan"
          ],
          [
            "❓ Noma'lum",
            "Siz yutdingiz! Havolani bosing",
            "05.10, 03:12",
            "⚠️ shubhali"
          ]
        ]
      },
      "izoh": "Xat <b>mavzusi</b> (Subject) qisqa bo'lishi kerak: \"Uyga vazifa\" &mdash; yaxshi, \"Salom\" &mdash; yomon."
    },
    {
      "tur": "royxat",
      "sarlavha": "To'g'ri xat yozish tartibi",
      "tushuntirish": "Xat yozishda bu tartibga rioya qilinsa, xat tushunarli bo'ladi.",
      "elementlar": [
        {
          "belgi": "✉️",
          "nom": "Kimga (To)",
          "izoh": "Manzilni tekshirib yozing &mdash; xato bo'lsa boshqa odamga ketadi"
        },
        {
          "belgi": "🏷️",
          "nom": "Mavzu (Subject)",
          "izoh": "Qisqa va aniq: \"8-sinf uyga vazifasi\""
        },
        {
          "belgi": "👋",
          "nom": "Murojaat",
          "izoh": "\"Assalomu alaykum, [ism]\" bilan boshlang"
        },
        {
          "belgi": "📝",
          "nom": "Asosiy matn",
          "izoh": "Qisqa gap, aniq savol yoki ma'lumot"
        },
        {
          "belgi": "📎",
          "nom": "Fayl (ilova)",
          "izoh": "Kerak bo'lsa biriktiring, nomi tushunarli bo'lsin"
        },
        {
          "belgi": "✅",
          "nom": "Imzo va tekshiruv",
          "izoh": "Ismingizni yozing, yuborishdan oldin qayta o'qing"
        }
      ],
      "izoh": "Xat yozganda <b>KATTA HARFLARDA</b> yozmang &mdash; bu baqirish deb qabul qilinadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Qidiruvni kuchaytiruvchi belgilar",
      "tushuntirish": "Qidiruv tizimiga qo'shimcha belgilar yozsangiz, natija ancha aniq chiqadi.",
      "elementlar": [
        {
          "belgi": "❝❞",
          "nom": "\"aniq jumla\"",
          "izoh": "So'zlar aynan shu tartibda qidiriladi"
        },
        {
          "belgi": "➖",
          "nom": "so'z -keraksiz",
          "izoh": "Keraksiz so'zni natijadan chiqarib tashlaydi"
        },
        {
          "belgi": "🌐",
          "nom": "site:maktab.uz",
          "izoh": "Faqat shu saytdan qidiradi"
        },
        {
          "belgi": "📄",
          "nom": "filetype:pdf",
          "izoh": "Faqat PDF fayllarni topadi"
        },
        {
          "belgi": "🔢",
          "nom": "8-sinf informatika",
          "izoh": "Aniq sinf va fanni yozish"
        },
        {
          "belgi": "🇺🇿",
          "nom": "o'zbek tilida",
          "izoh": "Qidiruv sozlamasida tilni tanlash"
        }
      ],
      "izoh": "Misol: <code>\"kompyuter arxitekturasi\" filetype:pdf -reklama</code> &mdash; aniq va toza natija beradi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Xavfsiz va shubhali havola",
      "tushuntirish": "Havolani bosishdan oldin <b>domenga</b> qarang &mdash; bu eng muhim qoida.",
      "ustunlar": [
        {
          "belgi": "✅",
          "sarlavha": "Xavfsiz havola",
          "turi": "yaxshi",
          "royxat": [
            "<b>https</b> bilan boshlanadi (qulf belgisi)",
            "Domen qisqa va tanish: <b>maktab.uz</b>",
            "Qo'shimcha chiziqcha va raqamlar yo'q",
            "Manzil xato yozilmagan"
          ]
        },
        {
          "belgi": "⚠️",
          "sarlavha": "Shubhali havola",
          "turi": "yomon",
          "royxat": [
            "Faqat <b>http</b> &mdash; himoyasiz",
            "Tanish domenga o'xshagan, lekin boshqa: <b>maktab-uz.som</b>",
            "Manzilda <b>@</b> yoki ko'p <b>-</b> belgisi",
            "\"Yutdingiz!\", \"Shoshiling!\" kabi bosim"
          ]
        }
      ],
      "izoh": "Shubha bo'lsa &mdash; <b>havolani bosmang</b>. Do'stingizdan kelgan bo'lsa ham, avval qo'ng'iroq qilib so'rang."
    },
    {
      "tur": "qadam",
      "sarlavha": "Internetdan kerakli ma'lumotni topish",
      "tushuntirish": "Qidiruvni to'g'ri qurish &mdash; natijaning yarmi. Bu tartib vaqtni tejaydi.",
      "elementlar": [
        {
          "nom": "Savolni aniqlashtirish",
          "izoh": "Nima qidirayotganingizni bir jumlada yozib oling"
        },
        {
          "nom": "Kalit so'zlarni tanlash",
          "izoh": "3-5 ta asosiy so'z yetarli, butun gap shart emas"
        },
        {
          "nom": "Qidiruvga yozish",
          "izoh": "Kerak bo'lsa qo'shtirnoq va <code>site:</code> qo'shing"
        },
        {
          "nom": "Natijalarni solishtirish",
          "izoh": "3-4 ta saytdan tekshiring &mdash; biri xato bo'lishi mumkin"
        },
        {
          "nom": "Manbani baholash",
          "izoh": "Sayt rasmiymi? Muallif ko'rsatilganmi? Sana bormi?"
        },
        {
          "nom": "Ma'lumotni saqlash",
          "izoh": "Havola va sayt nomini yozib qo'ying &mdash; keyin kerak bo'ladi"
        }
      ]
    },
    {
      "tur": "royxat",
      "sarlavha": "Netiket: internetda muloqot odobi",
      "tushuntirish": "Internetda muloqot &mdash; xuddi sinfdagi muloqot kabi, faqat yozma. Xuddi shu qoidalar amal qiladi.",
      "elementlar": [
        {
          "belgi": "🙋",
          "nom": "Salomlashish",
          "izoh": "Xat yoki izohni salomlashuvdan boshlang"
        },
        {
          "belgi": "🔤",
          "nom": "Katta harflar",
          "izoh": "BUTUN MATNNI KATTA HARFDA yozmang"
        },
        {
          "belgi": "🧠",
          "nom": "O'ylab yozish",
          "izoh": "Yozganingiz o'chirilsa ham, nusxasi qolishi mumkin"
        },
        {
          "belgi": "🤝",
          "nom": "Hurmatsizlik qilmaslik",
          "izoh": "Haqorat, masxara va tahdid &mdash; mumkin emas"
        },
        {
          "belgi": "🔒",
          "nom": "Shaxsiy ma'lumot",
          "izoh": "Manzil, telefon, parolni ochiq joyga yozmang"
        },
        {
          "belgi": "📵",
          "nom": "Spam yubormaslik",
          "izoh": "Bir xil xabarni ko'p marta yubormang"
        }
      ],
      "izoh": "Qoida: <b>yuzma-yuz aytmagan gapingizni internetda ham yozmang</b>."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Internetga ulanish usullari",
      "tushuntirish": "Uyda ham, maktabda ham internetga ikki asosiy yo'l bilan ulanadi.",
      "ustunlar": [
        {
          "belgi": "🔌",
          "sarlavha": "Kabel (LAN)",
          "turi": "brand",
          "royxat": [
            "Aloqa barqaror va tez",
            "Kechikish deyarli sezilmaydi",
            "Kabel kompyuterga ulanadi",
            "Kompyuter bir joyga bog'lanadi"
          ]
        },
        {
          "belgi": "📶",
          "sarlavha": "Wi-Fi (simsiz)",
          "turi": "yaxshi",
          "royxat": [
            "Kabel kerak emas",
            "Telefon, planshet ham ulanadi",
            "Devordan o'tsa zaiflashadi",
            "Parol bilan himoyalanadi"
          ]
        }
      ],
      "izoh": "Maktab kompyuter sinfida odatda <b>kabel</b>, uyda esa <b>Wi-Fi</b> ishlatiladi. Ikkalasi bir vaqtda ham ishlashi mumkin."
    }
  ],

  amaliy: [
    "Brauzeringizda <b>Ctrl + T</b>, <b>Ctrl + W</b> va <b>Ctrl + Shift + T</b> tugmalarini navbat bilan sinab ko'ring.",
    "Uchta foydali saytni xatcho'pga qo'shing (<b>Ctrl + D</b>) va ularga nom bering.",
    "<b>Ctrl + J</b> bilan yuklamalar ro'yxatini ochib, oxirgi yuklagan faylingizni toping.",
    "Google'da <code>&quot;Flowgorithm&quot; site:edu.uz</code> deb qidirib ko'ring, keyin oddiy qidiruv bilan solishtiring.",
    "<code>filetype:pdf informatika 8-sinf</code> so'rovi bilan faqat PDF fayllarni qidiring.",
    "O'zingizga elektron pochta manzili ochib, o'qituvchiga \"Salom, men ...\" mavzusida xat yuboring.",
    "<code>cmd</code> da <code>ping google.com</code> va <code>nslookup google.com</code> buyruqlarini bajaring, natijasini daftarga yozing.",
  ],

  uyga: [
    {
      "savol": "<b>Internet</b> va <b>Veb (WWW)</b> o'rtasidagi farqni 3-4 gapda tushuntiring va hayotiy misol keltiring.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<p><b>Internet</b> &mdash; butun dunyo kompyuterlarini bog'lovchi <em>tarmoq</em>. U kabel, Wi-Fi va sun'iy yo'ldosh orqali ishlaydi.</p><p><b>Veb (WWW)</b> &mdash; internet ustida ishlaydigan <em>xizmatlardan biri</em>: brauzerda ochiladigan sahifalar tizimi.</p><p>Misol: Internet &mdash; shahar yo'llari tarmog'i, veb esa &mdash; o'sha yo'ldagi do'konlardan biri. Pochta, video va o'yin ham internetda, lekin ular veb emas.</p>"
    },
    {
      "savol": "Quyidagi havolani qismlarga ajratib yozing: <code>https://maktab.uz/darslar?sinf=8</code> &mdash; protokol, domen, yo'l, parametr.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Qism</th><th>Qiymat</th><th>Ma'nosi</th></tr></thead><tbody><tr><td>Protokol</td><td><code>https</code></td><td>Xavfsiz ulanish (http dan farqli, \"s\" &mdash; secure)</td></tr><tr><td>Domen</td><td><code>maktab.uz</code></td><td>Sayt nomi; <code>.uz</code> &mdash; davlat belgisi</td></tr><tr><td>Yo'l</td><td><code>/darslar</code></td><td>Sayt ichidagi sahifa</td></tr><tr><td>Parametr</td><td><code>?sinf=8</code></td><td>Qo'shimcha ma'lumot (8-sinf)</td></tr></tbody></table><p>Havola xavfsizligini baholashda eng avval <b>protokol</b> va <b>domen</b>ga qaraladi.</p>"
    },
    {
      "savol": "Brauzerda mashq qiling: 3 ta yorliq (tab) oching, bittasini yoping, so'ng <b>Ctrl + Shift + T</b> bosing. Nima bo'ldi? Yozib oling.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ol><li><b>Ctrl + T</b> bilan 3 ta yangi yorliq ochiladi;</li><li>Bittasi <b>Ctrl + W</b> bilan yopiladi &mdash; u yo'qoladi;</li><li><b>Ctrl + Shift + T</b> bosilganda &mdash; yopilgan yorliq <b>qaytib keladi</b>.</li></ol><p>Bu tugma xato yopib qo'yilgan sahifani tiklaydi. Bir necha marta bosilsa &mdash; oxirgi yopilganlar ketma-ket qaytadi.</p>"
    },
    {
      "savol": "Elektron pochta manzilining tuzilishini chizma ko'rinishida ko'rsating. So'ng 2 ta to'g'ri va 2 ta xato manzil yozib, sababini ayting.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<pre><code>   foydalanuvchi nomi        pochta serveri\n        |                        |\n   kallibek.maktab   @   gmail.com\n                     ^\n                 \"at\" deb o'qiladi</code></pre><p><b>To'g'ri manzillar:</b> <code>aziza@mail.ru</code>, <code>sinf8a@umail.uz</code></p><p><b>Xato manzillar:</b></p><ul><li><code>aziza.mail.ru</code> &mdash; <b>@</b> belgisi yo'q;</li><li><code>aziza@@mail.ru</code> &mdash; ikki marta @ bo'lgan.</li></ul>"
    },
    {
      "savol": "O'qituvchingizga uyga vazifangizni elektron pochta orqali yuboring. Xatda: murojaat, qisqa mavzu, asosiy matn va imzo bo'lsin.",
      "tezlik": "Taxminiy vaqt: 12 daqiqa",
      "javob": "<p><b>Namuna xat:</b></p><ul><li><b>Kimga:</b> oqituvchi@maktab.uz</li><li><b>Mavzu:</b> 8-«A» sinf, uyga vazifa &mdash; Internet mavzusi</li><li><b>Matn:</b> \"Assalomu alaykum, [ism-sharif]. Internet mavzusi bo'yicha uyga vazifamni yubordim. Havolani qismlarga ajratdim va pochta manzili chizmasini tayyorladim. Fayl ilova qilindi.\"</li><li><b>Imzo:</b> \"Hurmat bilan, Aziza. 8-«A\" sinf, 07.10.2026\"</li></ul><p>Baholanadi: mavzu qisqami, murojaat bormi, fayl nomi tushunarlimi (masalan, <code>aziza-uyga-vazifa.docx</code>).</p>"
    },
    {
      "savol": "Qidiruv mashqi: <b>kompyuter arxitekturasi</b> so'zini avval oddiy, keyin qo'shtirnoq ichida qidirib ko'ring. Natijalar farqini yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Qidiruv</th><th>Natija</th></tr></thead><tbody><tr><td><code>kompyuter arxitekturasi</code></td><td>So'zlar alohida-alohida uchraydigan minglab sahifa &mdash; natija keng</td></tr><tr><td><code>\"kompyuter arxitekturasi\"</code></td><td>Faqat shu ibora aynan uchraydigan sahifalar &mdash; natija aniq</td></tr></tbody></table><p>Qo'shimcha belgilar: <code>-reklama</code> (keraksiz so'zni chiqarish), <code>filetype:pdf</code> (faqat PDF), <code>site:maktab.uz</code> (faqat shu sayt).</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): shubhali xatning 5 ta belgisini yozing va har biriga qarshi nima qilish kerakligini ayting.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Belgisi</th><th>Nima qilinadi</th></tr></thead><tbody><tr><td>Tanish nom, notanish manzil</td><td>Manzilni diqqat bilan o'qish</td></tr><tr><td>Shoshirish (\"24 soat ichida!\")</td><td>Shoshilmaslik, xatni o'chirishga tayyor turish</td></tr><tr><td>Oson yutuq va'dasi</td><td>Havolani bosmaslik</td></tr><tr><td>G'alati havola (<code>.xyz</code>, ko'p chiziqcha)</td><td>Domenni tekshirish</td></tr><tr><td>Parol yoki karta raqami so'ralishi</td><td>Hech qachon bermaslik, tashkilotga qo'ng'iroq qilish</td></tr></tbody></table>"
    }
  ],

  test: [
    {
      savol: "Internet &mdash; bu nima?",
      variantlar: [
        "Bitta kompaniyaning tarmog'i",
        "Dunyo bo'ylab kompyuterlarni bog'lovchi ulkan tarmoq",
        "Faqat veb-saytlar to'plami",
        "Bitta dastur",
      ],
      togri: 1,
      izoh: "Internet millionlab kompyuterlarni bog'laydigan xalqaro tarmoqdir.",
    },
    {
      savol: "Brauzerda yuklab olingan fayllar ro'yxatini qaysi tugma ochadi?",
      variantlar: ["Ctrl + H", "Ctrl + J", "Ctrl + D", "Ctrl + T"],
      togri: 1,
      izoh: "Ctrl + J &mdash; yuklamalar (Downloads). Ctrl + H &mdash; tarix, Ctrl + D &mdash; xatcho'p.",
    },
    {
      savol: "<code>site:edu.uz</code> operatori nima qiladi?",
      variantlar: [
        "Saytni o'chiradi",
        "Faqat shu domendagi natijalarni qidiradi",
        "Fayl turini tanlaydi",
        "Tarixni tozalaydi",
      ],
      togri: 1,
      izoh: "site: operatori qidiruvni faqat ko'rsatilgan sayt bilan cheklaydi.",
    },
    {
      savol: "Elektron pochtada <b>BCC</b> nima uchun ishlatiladi?",
      variantlar: [
        "Xatni o'chirish uchun",
        "Yashirin nusxa yuborish uchun",
        "Fayl biriktirish uchun",
        "Xatni tarjima qilish uchun",
      ],
      togri: 1,
      izoh: "BCC &mdash; yashirin nusxa: boshqa qabul qiluvchilar kimga yuborilganini ko'rmaydi.",
    },
    {
      savol: "Qaysi xat <b>eng xavfli</b> hisoblanadi?",
      variantlar: [
        "O'qituvchidan kelgan uyga vazifa xati",
        "\"Yutuq yutdingiz, havolani bosing\" degan xat",
        "Onlayn do'kondan xarid cheki",
        "Kutubxonadan eslatma",
      ],
      togri: 1,
      izoh: "Bunday xatlar phishing hiylasi bo'ladi &mdash; havola orqali shaxsiy ma'lumot o'g'irlanadi.",
    },
    {
      savol: "Havolaning tuzilishida <b>domen</b> qaysi qism?",
      variantlar: [
        "https://",
        "alxorazmiy.uz",
        "/darslar/python",
        "?bolim=1",
      ],
      togri: 1,
      izoh: "Domen &mdash; saytning nomi. https:// protokol, /darslar/python yo'l, ?bolim=1 parametr.",
    },
  ],

  lugat: [
    { soz: "Internet", izoh: "Kompyuterlarni bog'lovchi xalqaro tarmoq." },
    { soz: "Brauzer", izoh: "Veb-saytlarni ko'rish dasturi (Chrome, Edge, Firefox)." },
    { soz: "Tab", izoh: "Brauzerdagi alohida sahifa oynasi." },
    { soz: "Xatcho'p (Bookmark)", izoh: "Muhim sahifani keyin ochish uchun saqlash." },
    { soz: "Incognito", izoh: "Maxfiy rejim &mdash; tarix saqlanmaydi." },
    { soz: "Qidiruv operatori", izoh: "Qidiruvni aniqroq qiluvchi maxsus belgi (site:, filetype:)." },
    { soz: "Elektron pochta", izoh: "Internet orqali xat yozish xizmati." },
    { soz: "CC / BCC", izoh: "Ochiq nusxa / yashirin nusxa." },
    { soz: "Biriktirma", izoh: "Xatga qo'shilgan fayl." },
    { soz: "Phishing", izoh: "Aldash orqali shaxsiy ma'lumotni olishga qaratilgan hiyla." },
    { soz: "URL", izoh: "Veb-sahifaning manzili." },
  ],

  xatolar: [
    "Qidiruvda savolni to'liq yozmaslik &mdash; aniq so'rov natijani 10 baravar yaxshilaydi.",
    "Birinchi natijaga darhol ishonish &mdash; kamida 2-3 manbadan tekshirish kerak.",
    "Ochiq Wi-Fi tarmog'ida parol kiritish &mdash; ma'lumot o'g'irlanishi mumkin.",
    "Bir xil parolni hamma joyda ishlatish &mdash; bittasi ochilsa, hammasi xavf ostida qoladi.",
    "Shubhali havolani bosish &mdash; domen nomini diqqat bilan o'qish kerak.",
    "\"Yutuq\", \"bepul pul\", \"hisobingiz bloklandi\" kabi xatlarga ishonish.",
    "Elektron xat mavzusini bo'sh qoldirish yoki \"salom\" deb yozish &mdash; mavzu aniq bo'lishi kerak.",
  ],

  keyingi:
    "Keyingi darsda <b>kompyuter xavfsizligi va antivirus dasturlari</b> mavzusini o'rganamiz: zararli dasturlarning turlari, kuchli parol yaratish, 2FA, fleshka va elektron pochtadan xavfsiz foydalanish. Bugungi phishing haqidagi bilim keyingi darsda yana chuqurlashadi.",
});
