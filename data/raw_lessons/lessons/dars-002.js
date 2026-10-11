/* 2-dars: Operatsion tizimlar va Windows muhitida ishlash */

AVX.dars({
  id: "cs8-002",
  sarlavha: "Operatsion tizimlar va Windows muhitida ishlash",
  kiritish:
    "O'tgan darsda kompyuter qismlarini o'rgandik. Lekin qismlar yig'ilgan bo'lsa ham, ularni <b>boshqaradigan</b> narsa bo'lmasa kompyuter ishlamaydi. Bugun shu \"boshqaruvchi\" &mdash; <b>operatsion tizim</b> bilan tanishamiz va Windows muhitida ishlashni o'rganamiz.",

  maqsad: [
    "Operatsion tizim nima ekanini va qanday vazifalarni bajarishini tushuntirish.",
    "Operatsion tizimlarning turlarini (Windows, Linux, macOS, Android, iOS) ajratish.",
    "Windows ish stoli, Start menyusi va oynalar bilan ishlashni o'rganish.",
    "Dasturlarni ishga tushirish, o'rnatish va o'chirish tartibini bilish.",
    "Buyruq satri (CMD) orqali tizim haqida ma'lumot olishni o'rganish.",
  ],

  natija: [
    "Operatsion tizimning vazifalarini sanab beradi.",
    "Windows oynasi bilan ishlash tugmalarini biladi (yig'ish, kattalashtirish, yopish).",
    "Dasturni to'g'ri o'rnatadi va keraksizini xavfsiz o'chiradi.",
    "CMD oynasini ochib, 3-4 ta buyruqni mustaqil bajaradi.",
    "Ishlab turgan dasturlar ro'yxatini ko'rishni biladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni 3 savol bilan takrorlash: CPU, RAM, SSD nima?"],
    ["5-18 daq", "Mentor tushuntirishi", "Operatsion tizim nima, nega kerak. \"Dispetcher\" misoli orqali tushuntirish."],
    ["18-30 daq", "Nazariy qism", "Operatsion tizim turlari, vazifalari, Windows interfeysi elementlari."],
    ["30-45 daq", "Amaliyot: Windows bilan ishlash", "Ish stoli, Start menyusi, oyna tugmalari, dastur o'rnatish va o'chirish."],
    ["45-65 daq", "Buyruq satri (CMD)", "CMD oynasini ochish, 10+ buyruq bilan tizim haqida ma'lumot olish."],
    ["65-74 daq", "Mustaqil ish", "Har bir o'quvchi CMD da 3 ta buyruq bajarib, natijasini daftarga yozadi."],
    ["74-78 daq", "Umumlashtirish", "Uyga vazifa tushuntiriladi."],
    ["78-80 daq", "Baholash", "Faol o'quvchilar rag'batlantiriladi."],
  ],

  mentor: [
    {
      sarlavha: "1. Nega operatsion tizim kerak?",
      matn: [
        "Tasavvur qiling, maktabda 300 nafar o'quvchi bor, lekin birorta o'qituvchi, direktor va qo'ng'iroq yo'q. Har kim xohlagan vaqtda sinfga kirib, xohlagan ishni qiladi. Natija qanday bo'ladi? Tartibsizlik.",
        "Kompyuterda ham xuddi shunday. Protsessor, RAM, disk, klaviatura &mdash; hammasi bor. Lekin ularni kim boshqaradi? Kim \"sen hozir shu ishni qil\" deb aytadi? <em>Mana shu boshqaruvchi &mdash; operatsion tizim.</em>",
        "Operatsion tizim (OS) &mdash; bu kompyuterning barcha qurilmalarini va dasturlarini boshqaradigan asosiy dastur. Siz ekranga sichqoncha bilan bosganingizda, aslida operatsion tizim shu buyruqni olib, kerakli dasturga va kerakli qurilmaga yetkazadi.",
      ],
    },
    {
      sarlavha: "2. Operatsion tizimning 5 ta vazifasi",
      matn: [
        "<b>Birinchi vazifa &mdash; boshqarish.</b> Protsessor vaqti kimga qancha berilishini taqsimlaydi. Shu sababli siz bir vaqtda musiqa eshitib, brauzerda ishlashingiz mumkin.",
        "<b>Ikkinchi vazifa &mdash; xotirani taqsimlash.</b> Har bir dasturga qancha RAM berilishini belgilaydi. Ko'p dastur ochib, \"xotira yetmadi\" degan xabarni ko'rgan bo'lsangiz &mdash; bu OS ning ishi.",
        "<b>Uchinchi vazifa &mdash; fayllar bilan ishlash.</b> Qaysi fayl qayerga saqlanishini, uni kim o'qib, kim o'zgartira olishini boshqaradi.",
        "<b>To'rtinchi vazifa &mdash; qurilmalar bilan aloqa.</b> Printer, sichqoncha, kolonka &mdash; bularning hammasiga OS <b>drayver</b> orqali buyruq beradi.",
        "<b>Beshinchi vazifa &mdash; interfeys.</b> Ya'ni sizga ekranda tugmalar, oynalar va menyular ko'rsatadi. Shu sababli siz dastur ichida nima bo'layotganini ko'rmasangiz ham qulay ishlay olasiz.",
      ],
    },
    {
      sarlavha: "3. Windows bilan ishlash: oynalar va tugmalar",
      matn: [
        "Windows so'zi \"oynalar\" degan ma'noni bildiradi. Chunki bu tizimda har bir dastur alohida oynada ochiladi. Oynaning o'ng yuqorisidagi uchta tugmani hamma bilishi kerak: <b>_</b> (kichraytirish), <b>□</b> (kattalashtirish) va <b>✕</b> (yopish).",
        "Diqqat qiling, bu yerda kelajakdagi ishimiz uchun muhim qoida bor: <em>yopish va kichraytirish bir narsa emas.</em> Kichraytirganda dastur orqa fonda ishlashda davom etadi, yopganda to'xtatiladi.",
        "Start menyusi &mdash; kompyuterdagi barcha dasturlarga kirish \"eshigi\". Uni <b>Win</b> tugmasi bilan yoki chap pastdagi tugma bilan ochish mumkin. Bugun biz Start menyusidan topishni ham o'rganamiz.",
      ],
    },
    {
      sarlavha: "4. Buyruq satri: kompyuter bilan yozishib gaplashish",
      matn: [
        "Hozirgacha biz sichqoncha bilan \"bosib\" buyruq berardik. Endi esa buyruqni <b>yozib</b> berishni o'rganamiz. Bu &mdash; buyruq satri (Command Prompt, CMD).",
        "Nega dasturchi buyruq satrini bilishi kerak? Chunki qulaylik o'zgaradi: sichqoncha bilan 20 marta bosish o'rniga bitta buyruq yozasiz. Keyinchalik Git bilan ishlashda, serverni boshqarishda bu <em>asosiy vosita</em> bo'ladi.",
        "O'sha oyna: <b>Win + R</b> tugmasini bosing &rarr; <code>cmd</code> yozing &rarr; Enter. Oyna ochildi. Endi <code>help</code> deb yozib ko'ring &mdash; buyruqlar ro'yxati chiqadi.",
      ],
    },
    {
      sarlavha: "5. Dastur o'rnatish va o'chirish &mdash; xavfsizlik qoidasi",
      matn: [
        "Dastur o'rnatishning to'g'ri yo'li: dasturning <b>rasmiy saytidan</b> yuklab olish. \"Bepul kurs, bepul o'yin\" deb chiqqan saytlardan yuklangan fayl &mdash; virusning eng ko'p tarqalish yo'li.",
        "Windowsda dasturni o'chirish uchun <em>Settings &rarr; Apps &rarr; Installed apps</em> yoki <em>Control Panel &rarr; Programs</em> ishlatiladi. Dasturni shunchaki papkasidan o'chirib tashlash &mdash; xato usul, chunki uning izlari registrda qolib ketadi.",
        "Va eng muhim maslahat: papkalarni tozalash paytida <code>Windows</code>, <code>Program Files</code>, <code>System32</code> papkalariga tegmang. Ular tizimning o'zi uchun kerak.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Operatsion tizim nima?",
      matn: [
        "Operatsion tizim (OS) &mdash; kompyuterning texnik qismlari (hardware) bilan dasturlar (software) o'rtasida turuvchi asosiy dastur. U kompyuter yoqilgandan so'ng <b>birinchi bo'lib</b> ishga tushadi va kompyuter o'chgunga qadar doim ishlab turadi.",
        "OS sizga to'g'ridan-to'g'ri ko'rinmaydi, lekin siz qilgan har bir ish &mdash; sichqonchani bosish, klaviatura tugmasi, fayl nusxalash &mdash; aslida OS orqali bajariladi.",
      ],
      royhat: [
        "<b>Resurslarni boshqarish:</b> protsessor vaqti, RAM, disk, tarmoq taqsimlanadi.",
        "<b>Dasturlar bilan ishlash:</b> ishga tushirish, to'xtatish, ustuvorlik berish.",
        "<b>Fayl tizimi:</b> fayllarni saqlash, nomlash, ruxsatlar berish.",
        "<b>Qurilmalar:</b> printer, sichqoncha, kamera kabi qurilmalar bilan aloqa.",
        "<b>Foydalanuvchi interfeysi:</b> ish stoli, oynalar, menyular.",
        "<b>Xavfsizlik:</b> foydalanuvchi parollari, huquqlar, tizim himoyasi.",
      ],
    },
    {
      sarlavha: "2. Operatsion tizimlarning turlari",
      matn: [
        "Bugungi kunda ishlatiladigan asosiy operatsion tizimlar quyidagilar. Har biri o'z vazifasiga ega.",
      ],
      jadval: [
        ["Tizim", "Ishlab chiqaruvchi", "Qayerda ishlatiladi", "Xususiyati"],
        ["Windows", "Microsoft", "Kompyuter, noutbuk", "Eng ko'p ishlatiladi, o'yinlar uchun qulay"],
        ["Linux (Ubuntu, Fedora)", "Ochiq kodli jamiyat", "Server, kompyuter", "Bepul, xavfsiz, dasturchilar uchun"],
        ["macOS", "Apple", "Mac kompyuterlari", "Chiroyli interfeys, dizaynerlar uchun"],
        ["Android", "Google", "Smartfon, planshet", "Sensorli ekran uchun, ochiq kodli"],
        ["iOS", "Apple", "iPhone, iPad", "Yopiq tizim, xavfsizlik kuchli"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Qiziqarli fakt",
        matn: "Dunyodagi <b>barcha serverlarning</b> katta qismi Linux tizimida ishlaydi. Siz kirib ko'rgan veb-saytlarning aksariyati Linux serverlarida turadi. Shu sababli keyingi kursda Linux buyruqlari ham kerak bo'ladi.",
      },
    },
    {
      sarlavha: "3. Windows interfeysining elementlari",
      matn: [
        "Windows bilan ishlashni boshlash uchun quyidagi elementlarni bilish kerak.",
      ],
      jadval: [
        ["Element", "Vazifasi"],
        ["Ish stoli (Desktop)", "Asosiy ekran; yorliqlar va fayllar joylashadi"],
        ["Vazifalar paneli (Taskbar)", "Pastdagi chiziq; ochiq dasturlar va Start tugmasi"],
        ["Start menyusi", "Barcha dasturlar va sozlamalar ro'yxati"],
        ["Yorliq (Shortcut)", "Dasturni tez ochish uchun belgi (nomi ostida o'q bo'ladi)"],
        ["Oyna (Window)", "Dasturning ekrandagi ko'rinishi"],
        ["Soat va tizim belgilari", "Vaqt, tarmoq, ovoz, batareya holati"],
        ["Xabarlar markazi", "Tizim bildirishnomalari"],
      ],
    },
    {
      sarlavha: "4. Oynani boshqarish tugmalari va asosiy amallar",
      matn: [
        "Har bir oynaning yuqori o'ng burchagida uchta tugma bo'ladi.",
      ],
      jadval: [
        ["Tugma", "Nomi", "Vazifasi"],
        ["_", "Kichraytirish (Minimize)", "Oynani yashirib, dasturni orqa fonda qoldiradi"],
        ["□", "Kattalashtirish (Maximize)", "Oynani butun ekranga yoyadi"],
        ["✕", "Yopish (Close)", "Dasturni butunlay to'xtatadi"],
        ["Win + ← / →", "Yonma-yon joylash", "Oynani ekranning yarmiga joylashtiradi"],
        ["Alt + Tab", "Almashish", "Ochiq oynalar orasida o'tadi"],
        ["Win + D", "Ish stolini ko'rsatish", "Barcha oynalarni yig'adi"],
        ["Win + L", "Bloklash", "Kompyuterni parol bilan bloklaydi"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "ikonka",
      "sarlavha": "Operatsion tizim nima qiladi?",
      "tushuntirish": "Operatsion tizim (OT) &mdash; kompyuter va foydalanuvchi o'rtasidagi <b>vositachi dastur</b>. Usiz kompyuter shunchaki temir to'plami bo'lardi.",
      "elementlar": [
        {
          "belgi": "🧩",
          "nom": "Qurilmalarni boshqaradi",
          "izoh": "Klaviatura, printer, disk"
        },
        {
          "belgi": "🪟",
          "nom": "Oynalarni ko'rsatadi",
          "izoh": "Ekranda ishlash muhiti"
        },
        {
          "belgi": "📁",
          "nom": "Fayllarni saqlaydi",
          "izoh": "Papka va fayl tizimi"
        },
        {
          "belgi": "🚀",
          "nom": "Dasturlarni ishga tushiradi",
          "izoh": "Word, brauzer, o'yin"
        },
        {
          "belgi": "🔐",
          "nom": "Xavfsizlikni ta'minlaydi",
          "izoh": "Parol, huquqlar"
        },
        {
          "belgi": "👥",
          "nom": "Foydalanuvchilarni ajratadi",
          "izoh": "Har kimga o'z ish stoli"
        }
      ],
      "izoh": "Eng mashhur operatsion tizimlar: <b>Windows</b>, <b>Linux</b>, <b>macOS</b>, <b>Android</b>, <b>iOS</b>."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Uchta mashhur operatsion tizim",
      "tushuntirish": "Har biri o'z ishi uchun qulay.",
      "ustunlar": [
        {
          "belgi": "🪟",
          "sarlavha": "Windows",
          "turi": "brand",
          "royxat": [
            "Eng ko'p ishlatiladi",
            "Ko'p dasturlar mos keladi",
            "O'yinlar uchun qulay",
            "Maktab va idoralarda"
          ]
        },
        {
          "belgi": "🐧",
          "sarlavha": "Linux",
          "royxat": [
            "Bepul va ochiq",
            "Serverlarda ishlatiladi",
            "Xavfsiz hisoblanadi",
            "Kuchsiz kompyuterda ham ishlaydi"
          ]
        },
        {
          "belgi": "🍎",
          "sarlavha": "macOS",
          "royxat": [
            "Faqat Apple kompyuterlarida",
            "Dizayn va montaj uchun",
            "Qimmatroq",
            "Barqaror ishlaydi"
          ]
        }
      ],
      "izoh": "Qo'l telefonlaridagi <b>Android</b> ham Linux asosida, <b>iOS</b> esa macOS asosida qurilgan."
    },
    {
      "tur": "sxema",
      "sarlavha": "Windows ish stolining tuzilishi",
      "tushuntirish": "Kompyuterni yoqqaningizda birinchi ko'radigan ekran &mdash; <b>ish stoli</b> (Desktop).",
      "svg": "<svg viewBox=\"0 0 700 400\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Windows ish stoli tuzilishi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"398\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"26\" y=\"26\" width=\"648\" height=\"304\" rx=\"10\" fill=\"#0c1220\" stroke=\"#2b3550\"/>\n  <text x=\"350\" y=\"185\" fill=\"#242e46\" font-size=\"22\" text-anchor=\"middle\" letter-spacing=\"2\">FON RASMI</text>\n  <rect x=\"48\" y=\"48\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#4f8cff\" opacity=\"0.9\"/>\n  <text x=\"63\" y=\"94\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Kompyuter</text>\n  <rect x=\"48\" y=\"112\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#22d3a6\" opacity=\"0.9\"/>\n  <text x=\"63\" y=\"158\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Papka</text>\n  <rect x=\"48\" y=\"176\" width=\"30\" height=\"30\" rx=\"6\" fill=\"#ffb020\" opacity=\"0.9\"/>\n  <text x=\"63\" y=\"222\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">Word</text>\n  <text x=\"63\" y=\"252\" fill=\"#4f8cff\" font-size=\"11\" text-anchor=\"middle\">IKONKALAR</text>\n  <rect x=\"26\" y=\"300\" width=\"648\" height=\"30\" fill=\"#1b2334\"/>\n  <rect x=\"34\" y=\"305\" width=\"20\" height=\"20\" rx=\"4\" fill=\"#4f8cff\"/>\n  <text x=\"62\" y=\"320\" fill=\"#e6ecff\" font-size=\"11\">⊞</text>\n  <text x=\"86\" y=\"320\" fill=\"#93a0bd\" font-size=\"11\">Qidiruv</text>\n  <rect x=\"200\" y=\"305\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#2b3550\"/>\n  <rect x=\"224\" y=\"305\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#2b3550\"/>\n  <rect x=\"248\" y=\"305\" width=\"18\" height=\"18\" rx=\"3\" fill=\"#2b3550\"/>\n  <text x=\"300\" y=\"320\" fill=\"#4f8cff\" font-size=\"11\">ISHLAYOTGAN DASTURLAR</text>\n  <text x=\"600\" y=\"320\" fill=\"#e6ecff\" font-size=\"11\" text-anchor=\"middle\">🔔</text>\n  <text x=\"655\" y=\"320\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"end\">14:30</text>\n  <text x=\"350\" y=\"352\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">VAZIFALAR PANELI (Taskbar)</text>\n  <text x=\"350\" y=\"378\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">Start tugmasi ≡ chap tomonda, soat va bildirishnoma o'ng tomonda</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Ish stolining asosiy elementlari",
      "tushuntirish": "Bu to'rttasini bilsangiz, Windows'da adashmaysiz.",
      "elementlar": [
        {
          "belgi": "🖼️",
          "nom": "Fon rasmi",
          "izoh": "Ekranning orqa ko'rinishi (xohlagancha o'zgartiriladi)"
        },
        {
          "belgi": "🗂️",
          "nom": "Ikonkalar",
          "izoh": "Dastur va papkalarni ochish uchun belgilar"
        },
        {
          "belgi": "📊",
          "nom": "Vazifalar paneli",
          "izoh": "Start, qidiruv, ishlayotgan dasturlar, soat"
        },
        {
          "belgi": "🪟",
          "nom": "Oynalar",
          "izoh": "Har bir ochilgan dasturning alohida oynasi"
        },
        {
          "belgi": "🔔",
          "nom": "Bildirishnoma markazi",
          "izoh": "Xabarlar va tezkor sozlamalar"
        },
        {
          "belgi": "🗑️",
          "nom": "Savat (Recycle Bin)",
          "izoh": "O'chirilgan fayllar vaqtincha shu yerda turadi"
        }
      ]
    },
    {
      "tur": "oyna",
      "sarlavha": "Fayl Explorer oynasi",
      "tushuntirish": "Papka va fayllar shu oynada ko'rinadi. Chap tomonda joylar ro'yxati, o'rtada fayllar jadvali.",
      "oyna": {
        "nom": "Darslar",
        "manzil": "Bu kompyuter > Disk (C:) > Darslar",
        "ustunlar": [
          "Nom",
          "O'zgartirilgan",
          "Turi",
          "Hajmi"
        ],
        "qatorlar": [
          [
            "📁 1-chorak",
            "02.10.2026",
            "Papka",
            "—"
          ],
          [
            "📁 2-chorak",
            "10.01.2027",
            "Papka",
            "—"
          ],
          [
            "📄 uyga-vazifa.docx",
            "05.10.2026",
            "Word hujjati",
            "24 KB"
          ],
          [
            "🖼️ sxema.png",
            "04.10.2026",
            "Rasm",
            "180 KB"
          ]
        ]
      },
      "izoh": "Ikkita bosish (double click) fayl yoki papkani ochadi. Manzil satri &mdash; hozir qayerda turganingizni ko'rsatadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Oynaning uchta asosiy tugmasi",
      "tushuntirish": "Har qanday dastur oynasining o'ng yuqori burchagida shu uchta tugma bo'ladi.",
      "elementlar": [
        {
          "belgi": "➖",
          "nom": "Yig'ish (Minimize)",
          "izoh": "Oyna vazifalar paneliga tushadi, dastur ishlashda davom etadi"
        },
        {
          "belgi": "🔳",
          "nom": "Kattalashtirish (Maximize)",
          "izoh": "Oyna butun ekranni egallaydi. Yana bossangiz kichrayadi"
        },
        {
          "belgi": "❌",
          "nom": "Yopish (Close)",
          "izoh": "Oynani va dasturni yopadi. Saqlamagan ish yo'qoladi!"
        }
      ],
      "izoh": "❗ <b>Yopish</b> bilan <b>Yig'ish</b>ni aralashtirmang: yig'ilgan dastur ishlashda davom etadi, yopilgani to'xtaydi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Yangi papka yaratish tartibi",
      "tushuntirish": "Fayllarni tartibda saqlash uchun avval papka yaratiladi.",
      "elementlar": [
        {
          "nom": "Kerakli joyni ochish",
          "izoh": "Masalan: Disk (C:) → Darslar"
        },
        {
          "nom": "Bo'sh joyga o'ng tugma",
          "izoh": "Sichqonchaning o'ng tugmasi bosiladi"
        },
        {
          "nom": "«Yangi» bo'limini tanlash",
          "izoh": "Menyudan Yangi → Papka"
        },
        {
          "nom": "Nom yozish",
          "izoh": "Masalan: 1-chorak. Nomida \\ / : * ? \" < > | bo'lmasin"
        },
        {
          "nom": "Enter bosish",
          "izoh": "Papka tayyor va ochishga tayyor"
        }
      ]
    },
    {
      "tur": "sxema",
      "sarlavha": "Papka va fayllar daraxti",
      "tushuntirish": "Disk ichida papkalar, papka ichida yana papkalar bo'ladi. Bu &mdash; <b>daraxt</b> ko'rinishidagi tuzilma.",
      "svg": "<svg viewBox=\"0 0 700 330\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Papka va fayllar daraxti\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"328\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <line x1=\"60\" y1=\"60\" x2=\"60\" y2=\"290\" stroke=\"#26304a\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"110\" x2=\"110\" y2=\"110\" stroke=\"#26304a\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"180\" x2=\"110\" y2=\"180\" stroke=\"#26304a\" stroke-width=\"2\"/>\n  <line x1=\"60\" y1=\"250\" x2=\"110\" y2=\"250\" stroke=\"#26304a\" stroke-width=\"2\"/>\n  <line x1=\"200\" y1=\"180\" x2=\"200\" y2=\"228\" stroke=\"#26304a\" stroke-width=\"2\"/>\n  <line x1=\"200\" y1=\"228\" x2=\"250\" y2=\"228\" stroke=\"#26304a\" stroke-width=\"2\"/>\n  <rect x=\"24\" y=\"44\" width=\"72\" height=\"32\" rx=\"7\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"60\" y=\"65\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">Disk (C:)</text>\n  <rect x=\"110\" y=\"94\" width=\"90\" height=\"32\" rx=\"7\" fill=\"#1b2334\" stroke=\"#22d3a6\"/>\n  <text x=\"155\" y=\"115\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📁 Darslar</text>\n  <rect x=\"110\" y=\"164\" width=\"90\" height=\"32\" rx=\"7\" fill=\"#1b2334\" stroke=\"#22d3a6\"/>\n  <text x=\"155\" y=\"185\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📁 Rasmlar</text>\n  <rect x=\"110\" y=\"234\" width=\"90\" height=\"32\" rx=\"7\" fill=\"#1b2334\" stroke=\"#ffb020\"/>\n  <text x=\"155\" y=\"255\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📄 info.txt</text>\n  <rect x=\"250\" y=\"212\" width=\"120\" height=\"32\" rx=\"7\" fill=\"#1b2334\" stroke=\"#22d3a6\"/>\n  <text x=\"310\" y=\"233\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📁 1-chorak</text>\n  <rect x=\"420\" y=\"212\" width=\"180\" height=\"32\" rx=\"7\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <text x=\"510\" y=\"233\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📄 uyga-vazifa.docx</text>\n  <text x=\"350\" y=\"292\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Har bir fayl biror papka ichida turadi. Fayl nomi butun diskda takrorlanmasligi shart emas -</text>\n  <text x=\"350\" y=\"312\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">muhimi, manzili (yo'li) aniq bo'lishi kerak.</text>\n</svg>"
    },
    {
      "tur": "qiyos",
      "sarlavha": "Papka va Fayl &mdash; farqi nimada?",
      "tushuntirish": "Ikkalasi ham ish stolida ko'rinadi, lekin vazifasi boshqa.",
      "ustunlar": [
        {
          "belgi": "📁",
          "sarlavha": "Papka",
          "turi": "brand",
          "royxat": [
            "Ichiga boshqa narsalar sig'adi",
            "O'zi hajm egallamaydi",
            "Tartib uchun ishlatiladi",
            "Nomida kengaytma bo'lmaydi"
          ]
        },
        {
          "belgi": "📄",
          "sarlavha": "Fayl",
          "turi": "yaxshi",
          "royxat": [
            "Ichida ma'lumot saqlanadi",
            "Hajmi bo'ladi: KB, MB, GB",
            "Kengaytmasi bor: .docx, .jpg",
            "Ochish uchun dastur kerak"
          ]
        }
      ],
      "izoh": "Papka &mdash; <em>shkaf tortmasi</em>, fayl esa &mdash; <em>uning ichidagi hujjat</em>."
    },
    {
      "tur": "royxat",
      "sarlavha": "Eng kerakli tezkor tugmalar",
      "tushuntirish": "Sichqonchadan tezroq ishlash uchun klaviatura tugmalari. Ko'p ishlatiladiganlarini yodlab oling.",
      "elementlar": [
        {
          "belgi": "⊞",
          "nom": "Win",
          "izoh": "Start menyusini ochadi"
        },
        {
          "belgi": "⊞",
          "nom": "Win + E",
          "izoh": "Fayl Explorer (papkalar) ochiladi"
        },
        {
          "belgi": "⊞",
          "nom": "Win + D",
          "izoh": "Ish stolini ko'rsatadi / tiklaydi"
        },
        {
          "belgi": "⌨️",
          "nom": "Alt + Tab",
          "izoh": "Ochiq oynalar orasida almashish"
        },
        {
          "belgi": "🗺️",
          "nom": "Win + ←  /  Win + →",
          "izoh": "Oynani chap yoki o'ng yarimga o'tkazadi"
        },
        {
          "belgi": "🔐",
          "nom": "Win + L",
          "izoh": "Kompyuterni bloklaydi (parol so'raydi)"
        },
        {
          "belgi": "📋",
          "nom": "Ctrl + Alt + Del",
          "izoh": "Xavfsizlik oynasi, vazifalar menejeri"
        },
        {
          "belgi": "🔍",
          "nom": "Win + S",
          "izoh": "Qidiruv oynasi"
        }
      ],
      "izoh": "<b>Win</b> &mdash; klaviaturaning chap pastidagi to'rt kvadratli tugma. O'ng tomonida ham bo'ladi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Sozlamalar oynasi (Win + I)",
      "tushuntirish": "Kompyuter sozlamalari shu yerda o'zgartiriladi: til, vaqt, fon rasmi, dasturlar, tarmoq.",
      "oyna": {
        "nom": "Sozlamalar",
        "manzil": "Tizim  |  Bluetooth  |  Tarmoq  |  Shaxsiylashtirish  |  Hisoblar",
        "ustunlar": [
          "Bo'lim",
          "Nima o'zgartiriladi"
        ],
        "qatorlar": [
          [
            "🖥️ Display",
            "Ekran yorqinligi va o'lchami"
          ],
          [
            "🔊 Sound",
            "Ovoz balandligi, dinamik tanlash"
          ],
          [
            "🕐 Vaqt va til",
            "Sana, vaqt, klaviatura tili"
          ],
          [
            "🖼️ Shaxsiylashtirish",
            "Fon rasmi, ranglar, mavzu"
          ],
          [
            "🎮 Dasturlar",
            "O'rnatish va o'chirish"
          ],
          [
            "🌐 Tarmoq va internet",
            "Wi-Fi, kabel, uchastka"
          ]
        ]
      },
      "izoh": "Tezroq yo'l: <b>Win + I</b>. Yoki Start tugmasini bosib, tishli g'ildirak belgisini tanlash."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Ish stolidagi tanish belgilar",
      "tushuntirish": "Bu belgilarni bilsangiz, kerakli dasturni tez topasiz.",
      "elementlar": [
        {
          "belgi": "🖥️",
          "nom": "Bu kompyuter",
          "izoh": "Disklar ro'yxati"
        },
        {
          "belgi": "🗑️",
          "nom": "Savat",
          "izoh": "O'chirilgan fayllar"
        },
        {
          "belgi": "🌐",
          "nom": "Brauzer",
          "izoh": "Internetga chiqish"
        },
        {
          "belgi": "📄",
          "nom": "Word",
          "izoh": "Hujjat yozish"
        },
        {
          "belgi": "📊",
          "nom": "Excel",
          "izoh": "Jadval tuzish"
        },
        {
          "belgi": "⚙️",
          "nom": "Sozlamalar",
          "izoh": "Tizim sozlamalari"
        }
      ],
      "izoh": "Dasturning yorlig'i (icon) ish stolida, vazifalar panelida va Start menyusida bir xil ko'rinadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Windows bilan birga keladigan dasturlar",
      "tushuntirish": "Kompyuterga qo'shimcha hech narsa o'rnatmasdan ham shu dasturlardan foydalanish mumkin.",
      "elementlar": [
        {
          "belgi": "📝",
          "nom": "Notepad (Bloknot)",
          "izoh": "Oddiy matn yozish"
        },
        {
          "belgi": "🎨",
          "nom": "Paint",
          "izoh": "Rasm chizish va tahrirlash"
        },
        {
          "belgi": "🧮",
          "nom": "Calculator (Kalkulyator)",
          "izoh": "Hisob-kitob"
        },
        {
          "belgi": "📁",
          "nom": "File Explorer",
          "izoh": "Fayl va papkalar"
        },
        {
          "belgi": "📊",
          "nom": "Task Manager",
          "izoh": "Jarayonlar va tezlik nazorati"
        },
        {
          "belgi": "✂️",
          "nom": "Snipping Tool",
          "izoh": "Ekrandan rasm olish"
        }
      ],
      "izoh": "Notepad'da yozilgan matn <b>.txt</b>, Paint'da saqlangan rasm <b>.png</b> kengaytmasi bilan saqlanadi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Dastur ishlamay qolganda nima qilinadi?",
      "tushuntirish": "Bu tartib kompyuterni qayta yoqmasdan muammoni hal qilishga yordam beradi.",
      "elementlar": [
        {
          "nom": "Kutish",
          "izoh": "10-15 soniya &mdash; dastur o'zi tiklanishi mumkin"
        },
        {
          "nom": "Ctrl + Alt + Del",
          "izoh": "Vazifalar menejerini ochish"
        },
        {
          "nom": "Muammoli dasturni topish",
          "izoh": "\"Javob bermayapti\" deb yozilgan bo'ladi"
        },
        {
          "nom": "\"Vazifani bekor qilish\"",
          "izoh": "O'sha dasturni majburan yopish"
        },
        {
          "nom": "Saqlab qo'yish",
          "izoh": "Keyingi safar ishni tez-tez saqlashni odat qilish"
        }
      ],
      "izoh": "Kompyuterni <b>tugmasidan bosib o'chirmang</b> &mdash; bu fayllarni buzadi. Faqat oxirgi chora sifatida ishlatiladi."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Vazifalar panelining o'ng tomonidagi belgilar",
      "tushuntirish": "Bu belgilar kompyuterning hozirgi holatini ko'rsatadi. Ularni bosib, tez sozlash mumkin.",
      "elementlar": [
        {
          "belgi": "📶",
          "nom": "Wi-Fi",
          "izoh": "Simsiz tarmoqqa ulanish"
        },
        {
          "belgi": "🔊",
          "nom": "Ovoz",
          "izoh": "Balandlikni sozlash"
        },
        {
          "belgi": "🔋",
          "nom": "Batareya",
          "izoh": "Noutbukda quvvat qoldig'i"
        },
        {
          "belgi": "🔔",
          "nom": "Bildirishnoma",
          "izoh": "Xabarlar ro'yxati"
        },
        {
          "belgi": "⌨️",
          "nom": "Klaviatura tili",
          "izoh": "UZ / EN almashtirish"
        },
        {
          "belgi": "🕐",
          "nom": "Soat va sana",
          "izoh": "Joriy vaqt va kun"
        }
      ],
      "izoh": "Klaviatura tilini almashtirish uchun <b>Alt + Shift</b> yoki <b>Win + Space</b> ishlatiladi."
    }
  ],

  amaliy: [
    "<b>Win + R</b> tugmalarini bosib, <code>cmd</code> yozib buyruq satrini oching. <code>ver</code>, <code>hostname</code>, <code>whoami</code> buyruqlarini bajaring va natijalarni daftarga yozing.",
    "<code>systeminfo</code> buyrug'ini bajaring va \"Total Physical Memory\" qatorini topib, GB ga aylantiring.",
    "Notepad ochib, ichida <code>echo Salom, dunyo!</code> va <code>pause</code> yozilgan <code>salom.bat</code> faylini yarating (fayl turi: <em>Barcha fayllar</em>) va ishga tushirib ko'ring.",
    "Ish stolida yangi papka yarating, uning nomini F2 bilan o'zgartiring, so'ng uni o'chirib, Savatdan qayta tiklang.",
    "Birorta dasturni (masalan, Paint) oching, <b>Alt + Tab</b> bilan boshqa oynaga o'ting, <b>Win + ←</b> bilan yonma-yon joylashtiring.",
    "<code>Get-PSDrive -PSProvider FileSystem</code> buyrug'ini PowerShell da bajarib, diskingizdagi bo'sh joyni aniqlang.",
  ],

  uyga: [
    {
      "savol": "Operatsion tizim nima va u qanday vazifalarni bajaradi? Kamida 4 ta vazifasini yozing.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<p><b>Operatsion tizim (OT)</b> &mdash; kompyuter va foydalanuvchi o'rtasidagi vositachi dastur. Usiz qurilmalar ishlamaydi.</p><ol><li>Qurilmalarni boshqaradi (klaviatura, printer, disk);</li><li>Fayl va papkalar tizimini yuritadi;</li><li>Dasturlarni ishga tushiradi va to'xtatadi;</li><li>Xavfsizlikni ta'minlaydi (parol, huquqlar);</li><li>Bir vaqtda ishlayotgan dasturlar o'rtasida resurs taqsimlaydi.</li></ol>"
    },
    {
      "savol": "Windows, Linux, macOS, Android va iOS tizimlarini qaysi qurilmada ishlatilishiga qarab jadval ko'rinishida yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Tizim</th><th>Qurilma</th><th>Kim ishlab chiqaradi</th></tr></thead><tbody><tr><td>Windows</td><td>Kompyuter, noutbuk</td><td>Microsoft</td></tr><tr><td>Linux</td><td>Kompyuter, server</td><td>Ochiq jamiyat (bepul)</td></tr><tr><td>macOS</td><td>Apple kompyuterlari</td><td>Apple</td></tr><tr><td>Android</td><td>Telefon, planshet</td><td>Google</td></tr><tr><td>iOS</td><td>iPhone, iPad</td><td>Apple</td></tr></tbody></table>"
    },
    {
      "savol": "Oynadagi <b>&#8211;</b> (kichraytirish) va <b>&#10005;</b> (yopish) tugmalari o'rtasidagi farqni tushuntiring. Misol keltiring.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<ul><li><b>Kichraytirish (&#8211;):</b> oyna vazifalar paneliga tushadi, lekin dastur <em>ishlashda davom etadi</em>. Masalan, musiqa ijro etilishi to'xtamaydi.</li><li><b>Yopish (&#10005;):</b> dastur butunlay to'xtaydi. Saqlamagan ishni saqlash taklifi chiqishi mumkin.</li></ul><p>Misol: brauzerda bir sahifa ochiq, oynani kichraytirsangiz musiqa davom etadi; yopsangiz musiqa ham to'xtaydi.</p>"
    },
    {
      "savol": "Nega dasturni faqat rasmiy saytdan yuklab olish kerak? 3-4 gapda tushuntiring.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<p>Noma'lum saytlardagi \"bepul\" dasturlarga ko'pincha <b>virus</b> yoki <b>reklama qo'shimchasi</b> joylashtirilgan bo'ladi.</p><ul><li>Rasmiy saytda dastur tekshirilgan va imzolangan bo'ladi;</li><li>Noma'lum manbadan yuklansa, parol va fayllaringiz o'g'irlanishi mumkin;</li><li>Yangilanishlar ham rasmiy manbadan keladi &mdash; bu xavfsizlikni saqlaydi.</li></ul>"
    },
    {
      "savol": "Ish stolining elementlarini daftaringizga chizib, har biriga nom yozing: fon rasmi, ikonkalar, vazifalar paneli, Start tugmasi, soat.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<p><b>Namuna chizma (to'rtburchak &mdash; ekran):</b></p><pre><code>+--------------------------------------------------+\n|  [ikonka] [ikonka] [ikonka]        FON RASMI     |\n|                                                  |\n|  [ikonka] [ikonka]                               |\n|                                                  |\n+--------------------------------------------------+\n| [Start] [Qidiruv]    ...dasturlar...      14:30  |\n+--------------------------------------------------+\n        VAZIFALAR PANELI</code></pre><p>Baholanadi: 5 ta element ham belgilanganmi, Start va soat to'g'ri joyda ko'rsatilganmi.</p>"
    },
    {
      "savol": "Kompyuterda 3 ta papka va 2 ta fayl yarating. So'ng bitta faylni <b>nusxalab</b> (Copy), ikkinchisini <b>ko'chirib</b> (Cut) boshqa papkaga joylang. Natijani yozing: qaysi fayl ikki joyda qoldi?",
      "tezlik": "Taxminiy vaqt: 12 daqiqa",
      "javob": "<p>Bajarish tartibi:</p><ol><li>Papka yaratish: o'ng tugma &rarr; Yangi &rarr; Papka (3 marta);</li><li>Fayl yaratish: Notepad'da 2 ta matn yozib, <b>.txt</b> qilib saqlash;</li><li>1-faylni belgilab <b>Ctrl + C</b>, boshqa papkaga kirib <b>Ctrl + V</b>;</li><li>2-faylni belgilab <b>Ctrl + X</b>, boshqa papkaga kirib <b>Ctrl + V</b>.</li></ol><p><b>Natija:</b> Copy qilingan fayl <b>ikki joyda</b> qoladi (eski va yangi papkada), Cut qilingani esa <b>faqat yangi papkada</b> bo'ladi.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): vazifalar panelidagi belgilarni kuzating &mdash; Wi-Fi, ovoz va batareya. Har biri hozir nimani ko'rsatyapti? Yozib oling.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<p>Namuna javob:</p><ul><li><b>Wi-Fi:</b> to'ldirilgan belgi &mdash; internetga ulangan; savol belgisi &mdash; ulanish yo'q;</li><li><b>Ovoz:</b> dinamik belgisi &mdash; ovoz yoqilgan; chizilgan dinamik &mdash; ovoz o'chirilgan;</li><li><b>Batareya:</b> faqat noutbukda ko'rinadi; yashil &mdash; quvvat yetarli, qizil &mdash; quvvat kam.</li></ul><p>Bu belgilarni bosib, tegishli sozlamani bir zumda o'zgartirish mumkin.</p>"
    }
  ],

  test: [
    {
      savol: "Operatsion tizimning asosiy vazifasi nima?",
      variantlar: [
        "Faqat o'yin o'ynash",
        "Kompyuter qurilmalarini va dasturlarini boshqarish",
        "Faqat fayllarni o'chirish",
        "Internetga ulanish",
      ],
      togri: 1,
      izoh: "OS kompyuterning barcha qurilmalarini va dasturlarini boshqaradi.",
    },
    {
      savol: "Oynani kichraytirganda dastur nima bo'ladi?",
      variantlar: [
        "Butunlay yopiladi",
        "Orqa fonda ishlashda davom etadi",
        "O'chib qoladi",
        "Qayta o'rnatiladi",
      ],
      togri: 1,
      izoh: "Kichraytirish oynani yashiradi, lekin dastur ishlashda davom etadi.",
    },
    {
      savol: "Qaysi buyruq kompyuterdagi ishlab turgan jarayonlar ro'yxatini chiqaradi?",
      variantlar: ["dir", "cls", "tasklist", "hostname"],
      togri: 2,
      izoh: "tasklist &mdash; ishlab turgan barcha jarayonlar ro'yxatini chiqaradi.",
    },
    {
      savol: "Qaysi operatsion tizim <b>bepul va ochiq kodli</b>?",
      variantlar: ["Windows", "macOS", "Linux", "iOS"],
      togri: 2,
      izoh: "Linux bepul va ochiq kodli tizim bo'lib, serverlarda keng qo'llaniladi.",
    },
    {
      savol: "Buyruq satrini ochish uchun qaysi tugmalar kombinatsiyasi ishlatiladi?",
      variantlar: ["Ctrl + C", "Win + R", "Alt + F4", "Shift + Tab"],
      togri: 1,
      izoh: "Win + R &mdash; \"Ishga tushirish\" oynasini ochadi. U yerga cmd yozib buyruq satrini ochamiz.",
    },
  ],

  lugat: [
    { soz: "Operatsion tizim (OS)", izoh: "Qurilmalar va dasturlarni boshqaruvchi asosiy dastur." },
    { soz: "Interfeys", izoh: "Foydalanuvchi bilan tizim o'rtasidagi muloqot ko'rinishi (oynalar, tugmalar)." },
    { soz: "Ish stoli (Desktop)", izoh: "Windows yoqilganda ko'rinadigan asosiy ekran." },
    { soz: "Taskbar", izoh: "Ekranning pastidagi vazifalar paneli." },
    { soz: "Yorliq (Shortcut)", izoh: "Dastur yoki faylni tez ochish uchun belgi." },
    { soz: "Drayver", izoh: "Operatsion tizim bilan qurilma o'rtasidagi aloqa dasturi." },
    { soz: "CMD", izoh: "Windows buyruq satri (Command Prompt)." },
    { soz: "Jarayon (Process)", izoh: "Ishlab turgan dasturning xotiradagi nusxasi." },
    { soz: "PowerShell", izoh: "Windowsning zamonaviy buyruq muhiti." },
    { soz: "BAT fayl", izoh: "Ichida CMD buyruqlari yozilgan skript fayl." },
  ],

  xatolar: [
    "Kichraytirish bilan yopishni aralashtirish &mdash; kichraytirilgan dastur ishlashda davom etadi.",
    "Dasturni papkasidan o'chirib tashlash &mdash; to'g'ri usuli Settings &rarr; Apps orqali o'chirish.",
    "BAT faylni \".txt\" kengaytmasi bilan saqlash &mdash; u ishlamaydi, kengaytma <code>.bat</code> bo'lishi kerak.",
    "BAT fayl nomida o'zbekcha harflar ishlatish &mdash; CMD ularni noto'g'ri o'qiydi, faqat lotin harflar ishlatilsin.",
    "System32 va Windows papkalaridagi fayllarni o'chirish &mdash; bu tizimni butunlay buzadi.",
  ],

  keyingi:
    "Keyingi darsda kompyuter xotirasi qanday o'lchanishini &mdash; <b>bit, bayt, KB, MB, GB</b> va <b>fayl turlarini</b> o'rganamiz. Fayl va papkalarni yaratish, nusxalash, ko'chirish hamda tezkor tugmalarni ham batafsil ko'ramiz.",
});
