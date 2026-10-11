/* 12-dars: Bulutli xizmatlar va onlayn hamkorlik vositalari (2-qism) */

AVX.dars({
  id: "cs8-012",
  sarlavha: "Bulutli xizmatlar (2-qism): onlayn hujjatlar va birgalikda ishlash",
  kiritish:
    "O'tgan darsda fayllarni bulutga saqlashni o'rgandik. Bugun esa <b>onlayn hujjatlar</b> bilan ishlaymiz: Google Docs, Sheets, Slides va Microsoft 365. Hamkorlikda tahrirlash, versiyalar tarixi, jadval hisob-kitoblari va tayyor hujjatni eksport qilish &mdash; hammasini ko'ramiz.",

  maqsad: [
    "Onlayn hujjatlar bilan ishlash vositalarini bilish (Docs, Sheets, Slides, Forms).",
    "Birgalikda tahrirlash va izoh qoldirish tartibini o'rganish.",
    "Versiyalar tarixi nima uchun kerakligini tushunish.",
    "Jadvalda formulalar va hisob-kitoblarni bajarish.",
    "Hujjatni eksport qilish va chop etishga tayyorlash.",
  ],

  natija: [
    "To'rt turdagi onlayn hujjatni ajratadi va vazifasini aytadi.",
    "Hujjatni jamoadoshlar bilan ulashib, birgalikda tahrirlaydi.",
    "Versiyalar tarixidan oldingi holatga qaytadi.",
    "Jadvalda SUM, AVERAGE kabi hisob-kitoblarni bajaradi.",
    "Hujjatni PDF yoki DOCX ko'rinishida eksport qiladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: bulut, ulashish, ruxsatlar."],
    ["5-16 daq", "Mentor tushuntirishi", "\"Bir hujjat &mdash; bir necha muallif\" g'oyasi."],
    ["16-28 daq", "Nazariya: hujjat turlari", "Docs, Sheets, Slides, Forms va Microsoft 365."],
    ["28-42 daq", "Birgalikda tahrirlash", "Ruxsatlar, izohlar, versiyalar tarixi."],
    ["42-58 daq", "Jadvallar va formulalar", "SUM, AVERAGE, IF va foiz hisoblash."],
    ["58-72 daq", "Amaliyot: kod yozamiz", "Matn tahlili, jadval hisoboti, versiyalar simulyatori."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har kim onlayn jurnal tuzadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. \"Kimda oxirgi versiya?\" muammosi",
      matn: [
        "Guruh loyihasi boshlandi. Siz hujjatni yozdingiz va do'stingizga yubordingiz. U o'zgartirib, qaytardi. Siz yana o'zgartirdingiz. Endi fayl nomi <code>hisobot-final-final-2-yangi.docx</code> bo'lib qoldi. Va eng yomoni: kimning o'zgarishi qolganini bilmaysiz.",
        "Bu muammo &mdash; qog'oz davri odati. <b>Onlayn hujjat</b> esa bitta nusxada yashaydi va uni bir necha odam <em>bir vaqtda</em> tahrirlay oladi.",
        "Bunda hech kim nusxa ko'chirmaydi, hech kim \"kimda oxirgi versiya\" deb so'ramaydi. Har bir o'zgarish avtomatik saqlanadi va <b>kim</b> yozgani ham tarixda qoladi.",
      ],
    },
    {
      sarlavha: "2. To'rt turdagi onlayn hujjat",
      matn: [
        "<b>Hujjat (Docs / Word)</b> &mdash; matn yozish uchun: insho, hisobot, reja. <b>Jadval (Sheets / Excel)</b> &mdash; sonlar va hisob-kitoblar uchun: baholar, byudjet, statistika.",
        "<b>Taqdimot (Slides / PowerPoint)</b> &mdash; slaydlar bilan chiqish uchun. <b>So'rovnoma (Forms)</b> &mdash; savollar yig'ish va natijalarni avtomatik jadvalga tushirish uchun.",
        "Diqqat qiling: har bir turning o'z kuchi bor. Ba'zilar hamma narsani jadvalda qiladi &mdash; bu xato. Matn matnda, son son &#8203;jadvalda bo'lgani mantiqiy.",
      ],
    },
    {
      sarlavha: "3. Birgalikda tahrirlash &mdash; haqiqiy imkoniyat",
      matn: [
        "Google Docs da bir hujjatni 20 kishi bir vaqtda ochishi mumkin. Har kimning kursori o'z rangida ko'rinadi va o'zgarishlar <em>soniyalar ichida</em> hammaga yetib boradi.",
        "Asosiy imkoniyatlar: <b>izoh (comment)</b> qoldirish &mdash; matnni o'zgartirmasdan taklif aytish; <b>taklif rejimi (suggesting)</b> &mdash; o'zgarishni \"taklif\" sifatida kiritish; <b>chat</b> &mdash; hujjat ichida yozishish.",
        "Va eng foydalisi: <b>versiyalar tarixi</b>. U orqali \"kim, qachon, nimani o'zgartirgan\" ko'rinadi va istalgan vaqtga <em>qaytish</em> mumkin. Xato o'chirib yuborsangiz ham ish yo'qolmaydi.",
      ],
    },
    {
      sarlavha: "4. Jadval &mdash; dasturlashning birinchi qadami",
      matn: [
        "Google Sheets va Excel &mdash; bu shunchaki jadval emas, kichik dasturlash muhiti. Formulalar, mantiqiy shartlar (<code>IF</code>), hatto skriptlar ham bor.",
        "Eng ko'p ishlatiladigan to'rt formula: <code>SUM</code> (yig'indi), <code>AVERAGE</code> (o'rtacha), <code>MAX</code>/<code>MIN</code> (eng katta/kichik), <code>IF</code> (shart bo'yicha natija).",
        "Muhim afzallik: formulalarni qo'lda hisoblashdan farqli o'laroq, ma'lumot o'zgarsa natija <b>avtomatik yangilanadi</b>. Baholar o'zgardi &mdash; o'rtacha o'zi qayta hisoblandi. Bu &mdash; avtomatlashtirishning eng qulay ko'rinishi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Onlayn hujjat turlari",
      matn: [
        "Google va Microsoft taklif qiladigan asosiy hujjat turlari quyidagilar.",
      ],
      jadval: [
        ["Turi", "Google", "Microsoft", "Nima uchun"],
        ["Matnli hujjat", "Docs", "Word", "Insho, hisobot, reja, xat"],
        ["Jadval", "Sheets", "Excel", "Baholar, byudjet, statistika"],
        ["Taqdimot", "Slides", "PowerPoint", "Slaydlar bilan chiqish"],
        ["So'rovnoma", "Forms", "Forms", "Savol yig'ish, testlar"],
        ["Eslatma", "Keep", "OneNote", "Tez yozib qo'yish, ro'yxatlar"],
      ],
    },
    {
      sarlavha: "2. Birgalikda ishlash imkoniyatlari",
      matn: [
        "Onlayn hujjatning klassik hujjatdan asosiy farqi &mdash; jamoa bilan ishlash imkoniyati.",
      ],
      jadval: [
        ["Imkoniyat", "Nima qiladi", "Qanday chaqiriladi"],
        ["Izoh (Comment)", "Matnni o'zgartirmasdan fikr yozish", "Ctrl + Alt + M"],
        ["Taklif rejimi", "O'zgarishni taklif sifatida kiritish", "Rejim menyusidan"],
        ["Tahrir tarixi", "Kim qachon nimani o'zgartirganini ko'rish", "Fayl &rarr; Versiya tarixi"],
        ["Chat", "Hujjat ichida yozishish", "O'ng yuqoridagi belgi"],
        ["Real vaqtda ko'rish", "Kim hozir hujjatda ekanini ko'rish", "Yuqoridagi rasm belgilari"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Muhim maslahat",
        matn: "Uyga vazifani ustozga yuborishda <b>\"Izoh yozish\"</b> ruxsatini bering &mdash; ustoz izoh qoldiradi, lekin matningizni o'zgartirmaydi. Bu &mdash; eng to'g'ri usul.",
      },
    },
    {
      sarlavha: "3. Asosiy formulalar",
      matn: [
        "Jadvalda eng ko'p ishlatiladigan formulalar. Ular har doim <code>=</code> belgisidan boshlanadi.",
      ],
      jadval: [
        ["Formula", "Vazifasi", "Misol"],
        ["SUM", "Yig'indi hisoblaydi", "=SUM(B2:B11)"],
        ["AVERAGE", "O'rtacha qiymat", "=AVERAGE(B2:B11)"],
        ["MAX / MIN", "Eng katta / kichik qiymat", "=MAX(B2:B11)"],
        ["COUNT", "Nechta son bor", "=COUNT(B2:B11)"],
        ["IF", "Shart bo'yicha natija", "=IF(B2>=70; \"O'tdi\"; \"O'tmadi\")"],
        ["ROUND", "Sonni yumaloqlash", "=ROUND(B2; 1)"],
        ["PERCENT", "Foizni hisoblash", "=B2/B12*100"],
      ],
      jadval2: [
        ["Belgi", "Ma'nosi", "Misol"],
        [":", "Oraliq", "A1:A10"],
        [";", "Argumentlar ajratgichi", "IF(shart; ha; yo'q)"],
        ["$", "Mutlaq manzil (qotirish)", "=A1/$C$1"],
        ["%", "Foiz belgisi", "=B2/B12"],
      ],
    },
    {
      sarlavha: "4. Eksport va chop etish",
      matn: [
        "Onlayn hujjatni turli ko'rinishda yuklab olish (eksport) mumkin.",
      ],
      jadval: [
        ["Format", "Qachon ishlatiladi", "Kim ocha oladi"],
        ["PDF", "Tayyor hujjat, o'zgarmasligi kerak", "Hamma"],
        ["DOCX / XLSX / PPTX", "Tahrirlash uchun kerak bo'lsa", "Word, Excel, PowerPoint"],
        ["HTML", "Veb-saytga joylash uchun", "Brauzer"],
        ["CSV", "Ma'lumotlarni dasturga uzatish uchun", "Excel, Python"],
        ["TXT", "Oddiy matn kerak bo'lganda", "Notepad"],
      ],
      royhat: [
        "Chop etishdan oldin <b>oldindan ko'rish</b> (Print preview) ni tekshiring.",
        "Sahifa o'lchami va yo'nalishini (A4, portret/landshaft) sozlang.",
        "Har bir sahifada sarlavha takrorlanishi uchun <b>kolontitul</b> qo'shing.",
        "Jadvalni chop etishda <b>sahifa uzilishini</b> tekshiring &mdash; ustunlar bo'linib ketmasin.",
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "qiyos",
      "sarlavha": "Oflayn fayl va onlayn hujjat",
      "tushuntirish": "Bir xil hujjat &mdash; ikki xil ishlash usuli. Farqi \"birgalikda ishlash\"da.",
      "ustunlar": [
        {
          "belgi": "📁",
          "sarlavha": "Oflayn fayl (Word)",
          "turi": "brand",
          "royxat": [
            "Kompyuterda turadi",
            "Faqat bitta odam tahrirlaydi",
            "Nusxa yuboriladi: <code>doc-v2-yakuniy.docx</code>",
            "Qaysi nusxa yangi &mdash; chalkash",
            "Internet kerak emas"
          ]
        },
        {
          "belgi": "☁️",
          "sarlavha": "Onlayn hujjat",
          "turi": "yaxshi",
          "royxat": [
            "Serverda turadi, havola bilan ochiladi",
            "Bir vaqtda <b>ko'p kishi</b> tahrirlaydi",
            "Nusxa yo'q &mdash; hamma bir hujjatda",
            "Har o'zgarish avtomatik saqlanadi",
            "Internet bo'lmasa &mdash; oflayn rejim"
          ]
        }
      ],
      "izoh": "Eng katta farq: <code>doc-v2-yakuniy-tuzatilgan.docx</code> muammosi <b>yo'qoladi</b>."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Onlayn hujjat turlari",
      "tushuntirish": "Har bir tur o'z vazifasi uchun. Hammasi bir xil hisobda bo'ladi.",
      "elementlar": [
        {
          "belgi": "📘",
          "nom": "Hujjat (Docs)",
          "izoh": "Matn yozish &mdash; Word o'rnida"
        },
        {
          "belgi": "📗",
          "nom": "Jadval (Sheets)",
          "izoh": "Hisob-kitob &mdash; Excel o'rnida"
        },
        {
          "belgi": "📙",
          "nom": "Taqdimot (Slides)",
          "izoh": "Slayd &mdash; PowerPoint o'rnida"
        },
        {
          "belgi": "📝",
          "nom": "So'rovnoma (Forms)",
          "izoh": "Test va anketalar"
        },
        {
          "belgi": "🎨",
          "nom": "Chizma (Drawings)",
          "izoh": "Sxema va oddiy grafikalar"
        },
        {
          "belgi": "🌐",
          "nom": "Sayt (Sites)",
          "izoh": "Oddiy veb sahifa yig'ish"
        }
      ],
      "izoh": "Bularning hammasi <b>bepul</b> va brauzerda ishlaydi &mdash; dastur o'rnatish shart emas."
    },
    {
      "tur": "sxema",
      "sarlavha": "Birgalikda tahrirlash qanday ishlaydi?",
      "tushuntirish": "Uch o'quvchi bitta hujjatni bir vaqtda tahrirlaydi va bir-birini ko'radi.",
      "svg": "<svg viewBox=\"0 0 700 320\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Birgalikda tahrirlash\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"318\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"238\" y=\"40\" width=\"224\" height=\"240\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"70\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">BITTA HUJJAT</text>\n  <line x1=\"262\" y1=\"96\" x2=\"438\" y2=\"96\" stroke=\"#2b3550\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"262\" y1=\"122\" x2=\"416\" y2=\"122\" stroke=\"#2b3550\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"262\" y1=\"148\" x2=\"438\" y2=\"148\" stroke=\"#2b3550\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"262\" y1=\"174\" x2=\"350\" y2=\"174\" stroke=\"#2b3550\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"372\" y1=\"174\" x2=\"430\" y2=\"174\" stroke=\"#4f8cff\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"262\" y1=\"200\" x2=\"404\" y2=\"200\" stroke=\"#ffb020\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <line x1=\"262\" y1=\"226\" x2=\"330\" y2=\"226\" stroke=\"#c58cff\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n  <text x=\"436\" y=\"170\" fill=\"#4f8cff\" font-size=\"10.5\">Aziza</text>\n  <text x=\"410\" y=\"196\" fill=\"#ffb020\" font-size=\"10.5\">Bekzod</text>\n  <text x=\"336\" y=\"222\" fill=\"#c58cff\" font-size=\"10.5\">Dilnoza</text>\n  <rect x=\"26\" y=\"86\" width=\"150\" height=\"52\" rx=\"10\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <text x=\"101\" y=\"117\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">Aziza &mdash; tahrirlaydi</text>\n  <rect x=\"26\" y=\"158\" width=\"150\" height=\"52\" rx=\"10\" fill=\"#1b2334\" stroke=\"#ffb020\"/>\n  <text x=\"101\" y=\"189\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">Bekzod &mdash; izoh yozadi</text>\n  <rect x=\"26\" y=\"230\" width=\"150\" height=\"52\" rx=\"10\" fill=\"#1b2334\" stroke=\"#c58cff\"/>\n  <text x=\"101\" y=\"261\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">Dilnoza &mdash; taklif beradi</text>\n  <rect x=\"524\" y=\"120\" width=\"150\" height=\"80\" rx=\"12\" fill=\"#1b2334\" stroke=\"#26304a\"/>\n  <text x=\"599\" y=\"152\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">HAR 2-3</text>\n  <text x=\"599\" y=\"172\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">SEKUNDDA</text>\n  <text x=\"599\" y=\"192\" fill=\"#22d3a6\" font-size=\"11\" text-anchor=\"middle\">avtomatik saqlanadi</text>\n  <text x=\"350\" y=\"304\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Kim o'zgartirgani rangli kursorda ko'rinib turadi &mdash; bir-birini bosib ketmaydi.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Onlayn hujjatning afzalliklari",
      "tushuntirish": "Maktab loyihalari uchun ayniqsa qulay.",
      "elementlar": [
        {
          "belgi": "👥",
          "nom": "Birgalikda ishlash",
          "izoh": "Bir vaqtda ko'p kishi &mdash; nusxa yuborish shart emas"
        },
        {
          "belgi": "💾",
          "nom": "Avtomatik saqlash",
          "izoh": "Ctrl + S bosishni unutish muammo emas"
        },
        {
          "belgi": "🕐",
          "nom": "Tarix",
          "izoh": "Eski versiyaga qaytish va kim o'zgartirganini ko'rish"
        },
        {
          "belgi": "💬",
          "nom": "Izoh va taklif",
          "izoh": "O'qituvchi matnni buzmasdan fikr yozadi"
        },
        {
          "belgi": "🌐",
          "nom": "Har qurilmada",
          "izoh": "Telefon, planshet, kompyuter &mdash; bir xil ko'rinadi"
        },
        {
          "belgi": "🔗",
          "nom": "Havola bilan ulashish",
          "izoh": "Fayl emas, havola yuboriladi"
        }
      ],
      "izoh": "Muhimi: hujjat <b>hamma uchun bir xil</b> bo'ladi &mdash; \"qaysi nusxa yangi?\" degan savol yo'qoladi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Onlayn hujjat muharriri",
      "tushuntirish": "Ko'rinishi oddiy matn muharririga o'xshaydi, lekin yuqorida qo'shimcha tugmalar bor.",
      "oyna": {
        "nom": "8-sinf loyiha hujjati",
        "manzil": "Fayl  Tahrirlash  Ko'rish  Kiritish  Format  Asboblar  Yordam",
        "ustunlar": [
          "Qism",
          "Vazifasi"
        ],
        "qatorlar": [
          [
            "📂 Fayl",
            "Yangi, ochish, nusxa yaratish, yuklab olish"
          ],
          [
            "✏️ Tahrirlash",
            "Bekor qilish, qaytarish, topish va almashtirish"
          ],
          [
            "👁️ Ko'rish",
            "Rejim tanlash (tahrirlash, taklif, o'qish)"
          ],
          [
            "📊 Kiritish",
            "Jadval, rasm, havola, chizma qo'shish"
          ],
          [
            "🔤 Format",
            "Shrift, sarlavha, ro'yxat, tekislash"
          ],
          [
            "🕐 Versiya tarixi",
            "Eski holatga qaytish"
          ],
          [
            "🔗 Ulashish",
            "Kim ko'rishini va tahrirlashini belgilash"
          ]
        ]
      },
      "izoh": "Yuqori o'ng burchakda <b>«Ulashish»</b> tugmasi &mdash; hujjatni boshqalarga ochish shu yerdan boshlanadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Hujjatda kim nima qila oladi?",
      "tushuntirish": "Ruxsatni to'g'ri tanlash &mdash; hujjatni tasodifan buzilishdan saqlaydi.",
      "elementlar": [
        {
          "belgi": "👑",
          "nom": "Egasi (Owner)",
          "izoh": "Hujjatni yaratgan &mdash; hammasini qila oladi"
        },
        {
          "belgi": "✏️",
          "nom": "Tahrirlovchi (Editor)",
          "izoh": "Matnni o'zgartiradi, boshqalarni ham chaqiradi"
        },
        {
          "belgi": "💬",
          "nom": "Izohlovchi (Commenter)",
          "izoh": "Matnni o'zgartirmaydi, faqat izoh yozadi"
        },
        {
          "belgi": "👁️",
          "nom": "Ko'ruvchi (Viewer)",
          "izoh": "Faqat o'qiydi"
        },
        {
          "belgi": "🔒",
          "nom": "Ruxsat berilmagan",
          "izoh": "Havolasi bo'lsa ham ocholmaydi"
        }
      ],
      "izoh": "O'qituvchiga tekshirish uchun odatda <b>«Izohlovchi»</b> ruxsati beriladi &mdash; u matnni buzmaydi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Ulashish oynasi",
      "tushuntirish": "Hujjatni ulashganda shu oyna ochiladi. Ehtiyot bo'lish kerak bo'lgan joy &mdash; havola turi.",
      "oyna": {
        "nom": "Ulashish",
        "manzil": "Kimda ruxsat bor  |  Umumiy kirish  |  Havolani nusxalash",
        "ustunlar": [
          "Kim",
          "Ruxsat",
          "Holat"
        ],
        "qatorlar": [
          [
            "O'qituvchi",
            "Izohlovchi",
            "✅ Xabar yuborilgan"
          ],
          [
            "Aziza",
            "Tahrirlovchi",
            "✅ Xabar yuborilgan"
          ],
          [
            "Bekzod",
            "Ko'ruvchi",
            "⏳ Taklif kutilmoqda"
          ],
          [
            "Havolaga ega har kim",
            "Ko'ruvchi",
            "⚠️ Ehtiyot bo'ling"
          ]
        ]
      },
      "izoh": "Eng xavfli variant &mdash; <b>«Havolaga ega har kim &mdash; Tahrirlovchi»</b>: havolani bilgan har kim matnni o'chirib tashlashi mumkin."
    },
    {
      "tur": "royxat",
      "sarlavha": "Izoh va taklif &mdash; qanday ishlatiladi?",
      "tushuntirish": "Bu ikki imkoniyat matnni o'zgartirmasdan fikr bildirishga yordam beradi.",
      "elementlar": [
        {
          "belgi": "💬",
          "nom": "Izoh (Comment)",
          "izoh": "Belgilangan joyga fikr yoziladi &mdash; muallif javob beradi"
        },
        {
          "belgi": "✏️",
          "nom": "Taklif (Suggest)",
          "izoh": "O'zgarish ko'rinadi, egasi tasdiqlamaguncha kirmaydi"
        },
        {
          "belgi": "✅",
          "nom": "Qabul qilish",
          "izoh": "Taklif tasdiqlanadi va matnga kiradi"
        },
        {
          "belgi": "❌",
          "nom": "Rad etish",
          "izoh": "Taklif bekor qilinadi, matn o'zgarmaydi"
        },
        {
          "belgi": "📌",
          "nom": "Hal qilish (Resolve)",
          "izoh": "Izoh yopiladi &mdash; tarixda qoladi"
        },
        {
          "belgi": "@",
          "nom": "Belgilash (@ism)",
          "izoh": "Do'stni izohga chaqirish va xabar yuborish"
        }
      ],
      "izoh": "O'qituvchi shu yo'l bilan tekshiradi: <b>matnni buzmasdan</b>, aniq joyga izoh yozadi."
    },
    {
      "tur": "sxema",
      "sarlavha": "Tahrir tarixi va versiyalar",
      "tushuntirish": "Har bir o'zgarish yozib boriladi. Xato qilsangiz &mdash; orqaga qaytish mumkin.",
      "svg": "<svg viewBox=\"0 0 700 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Versiya tarixi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"248\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <line x1=\"60\" y1=\"120\" x2=\"640\" y2=\"120\" stroke=\"#2b3550\" stroke-width=\"4\"/>\n  <circle cx=\"100\" cy=\"120\" r=\"13\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <circle cx=\"230\" cy=\"120\" r=\"13\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <circle cx=\"360\" cy=\"120\" r=\"13\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <circle cx=\"490\" cy=\"120\" r=\"13\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2.5\"/>\n  <circle cx=\"610\" cy=\"120\" r=\"13\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <text x=\"100\" y=\"76\" fill=\"#4f8cff\" font-size=\"12\" text-anchor=\"middle\">09:10</text>\n  <text x=\"100\" y=\"160\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Aziza</text>\n  <text x=\"100\" y=\"176\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Sarlavha qo'shdi</text>\n  <text x=\"230\" y=\"76\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">09:34</text>\n  <text x=\"230\" y=\"160\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Bekzod</text>\n  <text x=\"230\" y=\"176\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Jadval qo'shdi</text>\n  <text x=\"360\" y=\"76\" fill=\"#ffb020\" font-size=\"12\" text-anchor=\"middle\">10:05</text>\n  <text x=\"360\" y=\"160\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">O'qituvchi</text>\n  <text x=\"360\" y=\"176\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Izoh yozdi</text>\n  <text x=\"490\" y=\"76\" fill=\"#c58cff\" font-size=\"12\" text-anchor=\"middle\">10:22</text>\n  <text x=\"490\" y=\"160\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Dilnoza</text>\n  <text x=\"490\" y=\"176\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Xatoni tuzatdi</text>\n  <text x=\"610\" y=\"76\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">10:40</text>\n  <text x=\"610\" y=\"160\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Aziza</text>\n  <text x=\"610\" y=\"176\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Yakunladi</text>\n  <text x=\"350\" y=\"216\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Har bir nuqta &mdash; saqlangan holat. Istalganiga qaytish mumkin.</text>\n</svg>"
    },
    {
      "tur": "qadam",
      "sarlavha": "Yangi hujjat yaratish",
      "tushuntirish": "Birinchi hujjatni yaratish tartibi.",
      "elementlar": [
        {
          "nom": "Bulut diskni ochish",
          "izoh": "Mening diskim bo'limiga kirish"
        },
        {
          "nom": "«Yangi» tugmasini bosish",
          "izoh": "Kerakli turni tanlash: Hujjat, Jadval, Taqdimot"
        },
        {
          "nom": "Nom berish",
          "izoh": "Yuqoridagi «Nomsiz hujjat» yozuvini bosib o'zgartirish"
        },
        {
          "nom": "Papkani belgilash",
          "izoh": "Faylni kerakli papkaga ko'chirish"
        },
        {
          "nom": "Matnni yozish",
          "izoh": "Avtomatik saqlanadi &mdash; hech narsa bosish shart emas"
        },
        {
          "nom": "Ulashish",
          "izoh": "Kerakli odamlarga ruxsat berish"
        }
      ],
      "izoh": "Nom berishni <b>darhol</b> qiling &mdash; keyin \"Nomsiz hujjat (3)\" lar orasida adashasiz."
    },
    {
      "tur": "qadam",
      "sarlavha": "Birgalikda ishlash tartibi",
      "tushuntirish": "Jamoa bo'lib hujjat yozishda tartib bo'lmasa, ish ikki marta bajariladi.",
      "elementlar": [
        {
          "nom": "Rejani kelishish",
          "izoh": "Kim qaysi qismni yozadi &mdash; oldindan aytiladi"
        },
        {
          "nom": "Hujjat tuzilmasini tayyorlash",
          "izoh": "Sarlavhalar va bo'limlar oldindan belgilanadi"
        },
        {
          "nom": "Har kim o'z qismini yozadi",
          "izoh": "Bir vaqtda ishlash mumkin &mdash; rangli kursorlar ko'rinadi"
        },
        {
          "nom": "Izoh va taklif orqali almashish",
          "izoh": "Matnni o'chirmasdan fikr bildirish"
        },
        {
          "nom": "Yakuniy tahrir",
          "izoh": "Bitta odam birlashtiradi va uslubni tekislaydi"
        },
        {
          "nom": "Muddatni kuzatish",
          "izoh": "Tarix orqali kim qachon ishlaganini ko'rish"
        }
      ],
      "izoh": "Qoida: <b>boshqaning matnini o'chirmasdan</b> &mdash; izoh yoki taklif orqali aytish."
    },
    {
      "tur": "royxat",
      "sarlavha": "Formatlash asoslari",
      "tushuntirish": "Hujjatni o'qishga qulay qilish uchun eng kerakli amallar.",
      "elementlar": [
        {
          "belgi": "🅰️",
          "nom": "Sarlavha (Heading)",
          "izoh": "Bo'lim boshini ajratadi &mdash; mundarija shundan yasaladi"
        },
        {
          "belgi": "•",
          "nom": "Ro'yxatlar",
          "izoh": "Tartibli va tartibsiz ro'yxat"
        },
        {
          "belgi": "▦",
          "nom": "Jadval",
          "izoh": "Ma'lumotni ustunlarga bo'lib ko'rsatadi"
        },
        {
          "belgi": "🖼️",
          "nom": "Rasm",
          "izoh": "Matnni tushuntiradi; ostiga izoh yozish kerak"
        },
        {
          "belgi": "🔗",
          "nom": "Havola",
          "izoh": "Manbaga havola qo'yish"
        },
        {
          "belgi": "🎨",
          "nom": "Ranglar",
          "izoh": "Ko'p rang ishlatmaslik &mdash; 2-3 ta yetarli"
        }
      ],
      "izoh": "Formatlash qoidalari: asosiy matn <b>12-14 shrift</b>, sarlavhalar kattaroq, oraliq joy yetarli."
    },
    {
      "tur": "royxat",
      "sarlavha": "Ko'p uchraydigan xatolar",
      "tushuntirish": "Bu xatolar hujjatni buzadi yoki bahoni tushiradi.",
      "elementlar": [
        {
          "belgi": "🚫",
          "nom": "Boshqaning matnini o'chirish",
          "izoh": "Izoh yoki taklif ishlatish kerak"
        },
        {
          "belgi": "⚠️",
          "nom": "«Tahrirlovchi»ni hammaga berish",
          "izoh": "Havolaga ega har kim o'zgartira oladi"
        },
        {
          "belgi": "📄",
          "nom": "Nusxa yaratib yuborish",
          "izoh": "Onlayn hujjatda nusxa kerak emas &mdash; havola yuboriladi"
        },
        {
          "belgi": "📝",
          "nom": "Nom va sarlavhasiz hujjat",
          "izoh": "Kim nima ekanini tushunmaydi"
        },
        {
          "belgi": "🎨",
          "nom": "Hamma matnni rangli qilish",
          "izoh": "O'qish qiyinlashadi, diqqat tarqaydi"
        },
        {
          "belgi": "🗑️",
          "nom": "Savatni tozalamasdan qoldirish",
          "izoh": "Eski keraksiz nusxalar chalkashlik keltiradi"
        }
      ]
    },
    {
      "tur": "qadam",
      "sarlavha": "Hujjatni yakunlash va topshirish",
      "tushuntirish": "Ish tugagach &mdash; to'g'ri yakunlash ham o'rganish kerak bo'lgan qadam.",
      "elementlar": [
        {
          "nom": "Imloni tekshirish",
          "izoh": "«Asboblar → Imlo va grammatika»"
        },
        {
          "nom": "Formatni tekislash",
          "izoh": "Sarlavhalar bir xil, shrift bir xil bo'lsin"
        },
        {
          "nom": "Izohlarni hal qilish",
          "izoh": "Hal qilinmagan izohlar qolmasin"
        },
        {
          "nom": "PDF qilib yuklab olish",
          "izoh": "«Fayl → Yuklab olish → PDF» &mdash; o'zgarmas shakl"
        },
        {
          "nom": "Havolani to'g'ri ulashish",
          "izoh": "O'qituvchiga <b>Ko'ruvchi</b> yoki <b>Izohlovchi</b> ruxsati"
        }
      ],
      "izoh": "PDF &mdash; hujjatning \"muzlatilgan\" nusxasi: boshqa kompyuterda ham bir xil ko'rinadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Hujjatni ulashishning uch usuli",
      "tushuntirish": "Vaziyatga qarab uchtasidan biri tanlanadi. Har birining o'z o'rni bor.",
      "elementlar": [
        {
          "belgi": "🔗",
          "nom": "Havola bilan ulashish",
          "izoh": "Birgalikda ishlash uchun eng qulay. Ruxsatni tanlash shart."
        },
        {
          "belgi": "✉️",
          "nom": "Pochta orqali yuborish",
          "izoh": "Ruxsat avtomatik beriladi va xabar boradi. Bitta odamga yuboriladi."
        },
        {
          "belgi": "📄",
          "nom": "PDF qilib yuborish",
          "izoh": "Faqat <b>o'qish</b> uchun. Matnni o'zgartirib bo'lmaydi."
        },
        {
          "belgi": "📥",
          "nom": "Faylni yuklab olish",
          "izoh": ".docx shaklida saqlab, boshqa joyda ishlatish"
        },
        {
          "belgi": "🖨️",
          "nom": "Chop etish",
          "izoh": "Qog'oz kerak bo'lganda &mdash; oxirgi chora"
        }
      ],
      "izoh": "Qoida: <b>birgalikda ishlash</b> kerak bo'lsa &mdash; havola; <b>yakuniy natija</b> kerak bo'lsa &mdash; PDF."
    }
  ],

  amaliy: [
    "Google Drive yoki OneDrive da yangi <b>hujjat (Docs/Word)</b> yarating va unga bugungi dars haqida 10 qator yozing.",
    "Hujjatni sinfdoshingizga <b>\"Izoh yozish\"</b> ruxsati bilan ulashing. U sizga izoh qoldirsin, siz javob yozing.",
    "Fayl menyusidan <b>\"Versiya tarixi\"</b> ni ochib, qanday o'zgarishlar bo'lganini ko'ring.",
    "Yangi <b>jadval (Sheets/Excel)</b> yarating: 5 o'quvchi va 3 fan bahosini kiriting. <code>=SUM</code> va <code>=AVERAGE</code> formulalarini yozing.",
    "Jadvalga <code>=IF</code> formulasini qo'shib, o'rtacha 3.5 dan katta bo'lsa \"O'tdi\" deb chiqaring.",
    "Tayyor hujjatni <b>PDF</b> ko'rinishida yuklab oling va ochib tekshiring.",
    "3 ta slayddan iborat kichik taqdimot tayyorlab, sinfdoshingiz bilan birgalikda tahrirlang.",
  ],

  uyga: [
    {
      "savol": "Oflayn Word fayli va onlayn hujjatni jadval ko'rinishida solishtiring: tahrirlash, nusxa, saqlash, ulashish.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Mezon</th><th>Oflayn (Word)</th><th>Onlayn hujjat</th></tr></thead><tbody><tr><td>Tahrirlash</td><td>Bitta odam</td><td>Bir vaqtda ko'p kishi</td></tr><tr><td>Nusxa</td><td>doc-v2-yakuniy.docx kabi nusxalar paydo bo'ladi</td><td>Nusxa shart emas &mdash; bitta hujjat</td></tr><tr><td>Saqlash</td><td>Ctrl + S kerak</td><td>Avtomatik saqlanadi</td></tr><tr><td>Ulashish</td><td>Faylni yuborish</td><td>Havola yuborish + ruxsat tanlash</td></tr><tr><td>Internet</td><td>Shart emas</td><td>Kerak (oflayn rejim ham bor)</td></tr></tbody></table>"
    },
    {
      "savol": "Onlayn hujjat turlarini yozing va har birining vazifasini ayting (Docs, Sheets, Slides, Forms).",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ul><li><b>Docs (Hujjat)</b> &mdash; matn yozish; Word o'rnida;</li><li><b>Sheets (Jadval)</b> &mdash; hisob-kitob va jadvallar; Excel o'rnida;</li><li><b>Slides (Taqdimot)</b> &mdash; slaydlar tayyorlash; PowerPoint o'rnida;</li><li><b>Forms (So'rovnoma)</b> &mdash; test va anketalar yaratish, natijalarni avtomatik yig'ish;</li><li><b>Drawings</b> &mdash; oddiy sxema va grafikalar; <b>Sites</b> &mdash; oddiy veb sahifa.</li></ul>"
    },
    {
      "savol": "Birgalikda tahrirlashning 4 ta afzalligini yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ol><li><b>Nusxa yo'q</b> &mdash; hamma bitta hujjatda ishlaydi, chalkashlik bo'lmaydi;</li><li><b>Bir vaqtda ishlash</b> &mdash; kim kimni kutmaydi, rangli kursordan ko'rinadi;</li><li><b>Avtomatik saqlash</b> &mdash; ish yo'qolmaydi;</li><li><b>Tarix</b> &mdash; kim, qachon, nimani o'zgartirgani ko'rinadi.</li></ol>"
    },
    {
      "savol": "Hujjatdagi ruxsat turlarini yozing (egasi, tahrirlovchi, izohlovchi, ko'ruvchi) va o'qituvchiga qaysi biri berilishini sabablab tushuntiring.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ul><li><b>Egasi</b> &mdash; hujjatni yaratgan; o'chirish va ruxsat berish huquqi bor;</li><li><b>Tahrirlovchi</b> &mdash; matnni o'zgartiradi;</li><li><b>Izohlovchi</b> &mdash; matnni o'zgartirmaydi, faqat izoh yozadi;</li><li><b>Ko'ruvchi</b> &mdash; faqat o'qiydi.</li></ul><p>O'qituvchiga odatda <b>«Izohlovchi»</b> beriladi: u matnni buzmasdan, aniq joyga fikr yozadi. Agar baho qo'yishi kerak bo'lsa &mdash; <b>«Tahrirlovchi»</b> berilishi mumkin.</p>"
    },
    {
      "savol": "<b>Izoh</b> va <b>taklif</b> o'rtasidagi farqni tushuntiring. Qaysi holatda qaysi biri ishlatiladi?",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ul><li><b>Izoh (Comment)</b> &mdash; matnning yoniga fikr yoziladi. Matn o'zgarmaydi. Savol berish yoki taklif bildirish uchun ishlatiladi.</li><li><b>Taklif (Suggest)</b> &mdash; o'zgarish ko'rinadi, lekin egasi <b>tasdiqlamaguncha</b> matnga kirmaydi.</li></ul><p>Qoida: <b>fikr aytish</b> kerak bo'lsa &mdash; izoh; <b>o'zgartirish taklif qilish</b> kerak bo'lsa &mdash; taklif.</p>"
    },
    {
      "savol": "Birgalikda hujjat yozish tartibini ketma-ket yozing (kamida 5 qadam).",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ol><li><b>Rejani kelishish</b> &mdash; kim qaysi qismni yozadi;</li><li><b>Tuzilma tayyorlash</b> &mdash; sarlavhalar va bo'limlar oldindan;</li><li><b>Har kim o'z qismini yozadi</b> &mdash; bir vaqtda ishlash mumkin;</li><li><b>Izoh va taklif orqali almashish</b> &mdash; matnni o'chirmasdan;</li><li><b>Yakuniy tahrir</b> &mdash; bitta odam birlashtiradi va uslubni tekislaydi;</li><li><b>Tekshirish va topshirish</b> &mdash; imlo, format, havola.</li></ol>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): hujjatni yakunlash va topshirish tartibini yozing. Nega PDF shaklda ham yuboriladi?",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ol><li>Imloni tekshirish (Asboblar &rarr; Imlo);</li><li>Formatni tekislash &mdash; bir xil shrift va sarlavhalar;</li><li>Hal qilinmagan izohlarni yopish;</li><li>PDF qilib yuklab olish (Fayl &rarr; Yuklab olish &rarr; PDF);</li><li>Havolani to'g'ri ulashish &mdash; o'qituvchiga Ko'ruvchi yoki Izohlovchi ruxsati.</li></ol><p><b>Nega PDF:</b> u \"muzlatilgan\" nusxa &mdash; boshqa kompyuterda ham bir xil ko'rinadi, tasodifan o'zgartirilmaydi.</p>"
    }
  ],

  test: [
    {
      savol: "Baholar yoki budjet bilan ishlash uchun qaysi hujjat turi mos?",
      variantlar: ["Hujjat (Docs)", "Jadval (Sheets)", "Taqdimot (Slides)", "So'rovnoma (Forms)"],
      togri: 1,
      izoh: "Sonlar va hisob-kitoblar uchun jadval (Sheets/Excel) ishlatiladi.",
    },
    {
      savol: "Onlayn hujjatning oddiy fayldan asosiy afzalligi nima?",
      variantlar: [
        "Fayl hajmi kichik bo'ladi",
        "Bir necha odam bir vaqtda tahrirlay oladi",
        "Internet kerak emas",
        "Ranglar ko'proq bo'ladi",
      ],
      togri: 1,
      izoh: "Onlayn hujjat bitta nusxada yashaydi va uni bir nechta odam bir vaqtda tahrirlaydi.",
    },
    {
      savol: "<code>=AVERAGE(B2:B11)</code> formulasi nima qiladi?",
      variantlar: [
        "Sonlarni qo'shadi",
        "O'rtacha qiymatni hisoblaydi",
        "Eng katta sonni topadi",
        "Sonlarni sanaydi",
      ],
      togri: 1,
      izoh: "AVERAGE &mdash; berilgan oraliqdagi sonlarning o'rtachasini hisoblaydi.",
    },
    {
      savol: "\"Versiyalar tarixi\" nima uchun kerak?",
      variantlar: [
        "Hujjatni chop etish uchun",
        "Kim, qachon, nimani o'zgartirganini ko'rish va orqaga qaytish uchun",
        "Fayl hajmini kamaytirish uchun",
        "Yangi hujjat yaratish uchun",
      ],
      togri: 1,
      izoh: "Versiya tarixi o'zgarishlarni kuzatish va xato holatda oldingi ko'rinishga qaytish imkonini beradi.",
    },
    {
      savol: "Uyga vazifani ustozga yuborishda qaysi ruxsat <b>eng to'g'ri</b>?",
      variantlar: [
        "Tahrirlash (Editor)",
        "Izoh yozish (Commenter)",
        "Ko'rish (Viewer)",
        "Ochiq havola",
      ],
      togri: 1,
      izoh: "\"Izoh yozish\" &mdash; ustoz izoh qoldiradi, lekin matningiz o'zgartirilmaydi.",
    },
    {
      savol: "Tayyor hujjatni o'zgarmas holida yuborish uchun qaysi format ishlatiladi?",
      variantlar: ["DOCX", "CSV", "PDF", "TXT"],
      togri: 2,
      izoh: "PDF &mdash; format va ko'rinish saqlanadi, hujjat o'zgartirilmaydi.",
    },
  ],

  lugat: [
    { soz: "Onlayn hujjat", izoh: "Internetda yashaydigan, birgalikda tahrirlanadigan hujjat." },
    { soz: "Docs / Sheets / Slides", izoh: "Google'ning matn, jadval va taqdimot vositalari." },
    { soz: "Izoh (comment)", izoh: "Matnni o'zgartirmasdan fikr bildirish." },
    { soz: "Taklif rejimi", izoh: "O'zgarishni \"taklif\" sifatida kiritish." },
    { soz: "Versiya tarixi", izoh: "Hujjatdagi barcha o'zgarishlar tarixi." },
    { soz: "Formula", izoh: "Jadvalda hisob-kitob qiluvchi ifoda (=SUM, =AVERAGE)." },
    { soz: "Eksport", izoh: "Hujjatni boshqa formatda yuklab olish." },
    { soz: "CSV", izoh: "Jadval ma'lumotlarini saqlashning oddiy matnli formati." },
    { soz: "Avtomatik saqlash", izoh: "Har o'zgarishni avtomatik saqlash (autosave)." },
    { soz: "Word count", izoh: "Hujjatdagi so'zlar sonini hisoblash funksiyasi." },
  ],

  xatolar: [
    "Hujjatni tahrirlash uchun hammaga ruxsat berish.",
    "Hujjatni PDF emas, DOCX ko'rinishida yuborish &mdash; format buzilishi mumkin.",
    "Jadvalda formulalar o'rniga qo'lda hisoblash &mdash; xato va vaqt yo'qotish.",
    "Versiyalar tarixini bilmaslik &mdash; xato o'chirilganda ishni tiklay olmay qolish.",
    "Hujjat nomiga sana qo'ymaslik &mdash; keyin qaysi versiya ekanini aniqlash qiyin.",
    "Bir hujjatga hamma mavzuni tiqishtirish &mdash; qidirish va tahrirlash qiyinlashadi.",
    "Chop etishdan oldin oldindan ko'rishni tekshirmaslik &mdash; jadval ustunlari bo'linib ketadi.",
  ],

  keyingi:
    "Keyingi darsda <b>bulutli xizmatlarning 3-qismi</b>ni o'rganamiz: onlayn vazifalar va jamoa bilan ishlash vositalari (Trello, Microsoft To Do, Google Tasks), vazifalarni taqsimlash, muddatlarni kuzatish va loyiha ustida birgalikda ishlash. Bugungi hujjat va jadval bilimlari keyingi darsda bevosita kerak bo'ladi.",
});
