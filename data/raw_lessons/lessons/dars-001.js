/* 1-dars: Zamonaviy kompyuterlar va ularning arxitekturasi */

AVX.dars({
  id: "cs8-001",
  sarlavha: "Zamonaviy kompyuterlar va ularning arxitekturasi",
  kiritish:
    "Bugun biz kompyuter ichida nima borligini, u qanday qilib <b>kirish &rarr; qayta ishlash &rarr; chiqarish</b> zanjiri bo'yicha ishlashini o'rganamiz. Darsning oxirida siz kompyuterni tashqi va ichki qurilmalariga qarab ajratib, har birining vazifasini aytib bera olasiz.",

  maqsad: [
    "Kompyuter nima ekanini va uning asosiy vazifasini tushuntirish.",
    "Zamonaviy kompyuterlar turlarini (stol, noutbuk, planshet, server) ajratish.",
    "Kompyuter arxitekturasi: protsessor, xotira, saqlash qurilmalari, kiritish-chiqarish qurilmalari.",
    "Kompyuterning ishlash tamoyili: kirish, qayta ishlash, chiqarish, saqlash.",
    "Texnik ko'rsatkichlar (GHz, yadro soni, RAM hajmi, SSD/HDD) nima ekanini tushunish.",
  ],

  natija: [
    "Kompyuter bloklarini to'g'ri nomlaydi va vazifasini aytadi.",
    "Kompyuterlarni turiga ko'ra ajratadi.",
    "Oddiy jadval tuzib, qurilmalarni tasniflaydi.",
    "Arxitektura haqida kichik HTML sahifa tayyorlaydi.",
    "Kiritish va chiqarish qurilmalarini adashtirmaydi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism va motivatsiya", "Salomlashish, davomat. Ekranga ochiq tizim bloki rasmini chiqarib, \"Bu yerda nima ko'ryapsiz?\" deb so'raymiz."],
    ["5-15 daq", "Mentor tushuntirishi", "Kompyuter nima, u kundalik hayotda qayerda ishlatiladi. \"Arxitektura\" so'zi nimani anglatadi."],
    ["15-30 daq", "Nazariy qism", "Protsessor, RAM, saqlash qurilmalari, kiritish va chiqarish qurilmalari. Har biri doskaga chiziladi."],
    ["30-40 daq", "Klassifikatsiya mashqi", "O'quvchilar qurilmalar nomini 4 guruhga ajratadi: kiritish / chiqarish / saqlash / qayta ishlash."],
    ["40-60 daq", "Amaliyot: kod yozamiz", "HTML sahifa, JS konsol va Python dasturi orqali arxitektura bloklarini modellashtiramiz."],
    ["60-72 daq", "Mustaqil ish", "Har bir o'quvchi mini \"Mening kompyuterim\" sahifasini yozadi."],
    ["72-78 daq", "Umumlashtirish", "Uyga vazifa tushuntiriladi, savollar javoblandi."],
    ["78-80 daq", "Baholash", "Darsga umumiy baho, faol o'quvchilar rag'batlantiriladi."],
  ],

  mentor: [
    {
      sarlavha: "1. Kompyuter nima? (5 daqiqa)",
      matn: [
        "Bolalar, tasavvur qiling: siz qo'lda yozgan 100 betlik daftarni bir soniyada nusxalab, dunyoning narigi chekkasiga yuborish kerak. Odam buni qila oladimi? Yo'q. Aynan shu yerda kompyuter kerak bo'ladi.",
        "Kompyuter &mdash; bu <em>ma'lumotni qabul qiladigan, qayta ishlaydigan, saqlaydigan va natijani chiqaradigan</em> elektron qurilma. Diqqat qiling: bu to'rtta fe'l kompyuterning butun hayoti. Kirish, qayta ishlash, saqlash, chiqarish.",
        "Doskaga shu to'rtta so'zni yozib qo'yaman. Bugun biz shu zanjirning har bir bo'g'inini alohida ko'ramiz.",
      ],
    },
    {
      sarlavha: "2. \"Arxitektura\" so'zi nimani anglatadi?",
      matn: [
        "Uy qurishni olaylik. Uyning <em>arxitekturasi</em> deganda biz devorlar qayerga tushishini, eshik qayerda bo'lishini, oshxona qanday joylashishini aytamiz. Ya'ni arxitektura &mdash; bu <b>qismlarning joylashuvi va o'zaro bog'lanishi</b>.",
        "Kompyuterni ham xuddi shunday tasavvur qiling: protsessor, xotira, disk, klaviatura, monitor. Ularning qaysi biri qayerga ulanadi va ma'lumot qaysi yo'ldan yuradi &mdash; mana shu kompyuter arxitekturasi.",
        "Muhim gap: arxitekturani bilgan odam kompyuter sekinlashganda \"muammo qayerda?\" deb <em>o'ylab topa oladi</em>. Bilmaydigan odam esa shunchaki \"buzilibdi\" deydi.",
      ],
    },
    {
      sarlavha: "3. Eng muhim farq: xotira va saqlash qurilmasi",
      matn: [
        "Bu joyda o'quvchilar eng ko'p adashadi. Yodda saqlang: <b>RAM &mdash; vaqtinchalik, HDD/SSD &mdash; doimiy.</b>",
        "RAM ni parta ustidagi daftar deb tasavvur qiling: dars davomida ishlatasiz, lekin dars tugagach parta yig'ishtiriladi va daftar yo'qoladi. SSD/HDD esa &mdash; uy javoni. Kompyuterni o'chirsangiz ham u yerda hamma narsa turadi.",
        "Shuning uchun ham kompyuter \"qotib qolganda\" odamlar \"saqlab ko'ymagan ekanman\" deb qo'rqadi &mdash; chunki saqlanmagan ish faqat RAM da bo'ladi va u o'chib ketadi.",
      ],
    },
    {
      sarlavha: "4. Texnik ko'rsatkichlarni qanday o'qish kerak",
      matn: [
        "Do'konda kompyuter tanlayotganda siz \"Intel Core i5, 3.2 GHz, 8 yadro, 16 GB RAM, 512 GB SSD\" kabi yozuvni ko'rasiz. Bu yozuvni o'qishni bilsangiz &mdash; sizni aldash qiyin.",
        "<em>GHz</em> &mdash; protsessor bir soniyada necha milliard amal bajarishini bildiradi. <em>Yadro soni</em> &mdash; bir vaqtda nechta ishni parallel bajarishini bildiradi. <em>RAM</em> &mdash; bir vaqtda nechta dasturni bemalol ochish imkonini beradi. <em>SSD</em> &mdash; hammasi qancha joy egallashini va qanchalik tez yuklanishini bildiradi.",
        "Bugun oxirida men sizga bitta savol beraman: \"O'yin o'ynash uchun qaysi ko'rsatkich muhim, ofis ishlari uchun qaysi biri?\" &mdash; javobni o'zingiz topasiz.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Kompyuter turlari",
      matn: [
        "Bugungi kunda kompyuterlar faqat \"quti\" shaklida emas. Ular kattaligi, quvvati va vazifasiga qarab bir necha turga bo'linadi.",
      ],
      jadval: [
        ["Turi", "Tavsifi", "Qayerda ishlatiladi"],
        ["Stol kompyuteri (Desktop)", "Alohida tizim bloki, monitor, klaviatura va sichqonchadan iborat", "Uy, ofis, o'quv xonasi"],
        ["Noutbuk (Laptop)", "Hammasi bitta korpusda, akkumulyator bilan ishlaydi", "Sayohat, o'qish, uyda ishlash"],
        ["Planshet", "Sensorli ekran, klaviatura shart emas", "Kitob o'qish, rasm chizish, video"],
        ["Smartfon", "Kichik, lekin zamonaviy noutbukdan quvvatsiz emas", "Kundalik aloqa, Internet"],
        ["Server", "Uzluksiz ishlashga mo'ljallangan kuchli kompyuter", "Veb-saytlar, banklar, davlat xizmatlari"],
        ["Superkompyuter", "Juda ko'p protsessordan iborat ulkan tizim", "Ilmiy hisob-kitoblar, ob-havo prognozi"],
      ],
    },
    {
      sarlavha: "2. Kompyuter arxitekturasi va asosiy qurilmalar",
      matn: [
        "Zamonaviy kompyuter <b>fon Neyman arxitekturasi</b> asosida qurilgan. Uning mohiyati: dastur ham, ma'lumot ham bitta xotirada saqlanadi va protsessor ularni ketma-ket bajaradi.",
      ],
      royhat: [
        "<b>Protsessor (CPU)</b> &mdash; kompyuterning \"miyasi\". Hisob-kitoblarni bajaradi va barcha qurilmalarni boshqaradi.",
        "<b>Tezkor xotira (RAM)</b> &mdash; vaqtinchalik xotira. Kompyuter o'chsa, ma'lumot yo'qoladi.",
        "<b>Saqlash qurilmasi (HDD/SSD)</b> &mdash; doimiy xotira. O'chirilgandan keyin ham ma'lumot qoladi.",
        "<b>Ona plata (Motherboard)</b> &mdash; barcha qismlarni bir-biriga bog'laydigan asosiy plata.",
        "<b>Videokarta (GPU)</b> &mdash; grafikani, o'yinlar va videolarni qayta ishlaydi.",
        "<b>Quvvat bloki (PSU)</b> &mdash; barcha qismlarga tok beradi.",
      ],
    },
    {
      sarlavha: "3. Ishlash tamoyili: kirish - qayta ishlash - chiqarish",
      matn: [
        "Har qanday kompyuter amali shu to'rt bosqichdan iborat. Misol: kalkulyatorda 25 + 30 ni hisoblash.",
      ],
      jadval: [
        ["Bosqich", "Nima bo'ladi", "Misol"],
        ["Kirish (Input)", "Ma'lumot qabul qilinadi", "Klaviaturadan 25 va 30 teriladi"],
        ["Qayta ishlash (Process)", "Protsessor hisoblaydi", "CPU 25 + 30 ni qo'shadi"],
        ["Chiqarish (Output)", "Natija ko'rsatiladi", "Ekranda 55 chiqadi"],
        ["Saqlash (Storage)", "Natija saqlanadi", "Faylga yoziladi yoki SSD da qoladi"],
      ],
    },
    {
      sarlavha: "4. Texnik ko'rsatkichlar",
      matn: [
        "Kompyuter quvvatini o'lchaydigan asosiy ko'rsatkichlar quyidagilar.",
      ],
      jadval: [
        ["Ko'rsatkich", "O'lchov birligi", "Nimaga ta'sir qiladi"],
        ["Protsessor tezligi", "GHz (gigagerts)", "Umumiy hisoblash tezligiga"],
        ["Yadro soni", "dona", "Bir vaqtda bajariladigan ishlar soniga"],
        ["RAM hajmi", "GB", "Bir vaqtda ochilgan dasturlar soniga"],
        ["Disk hajmi", "GB / TB", "Qancha fayl sig'ishiga"],
        ["Disk turi", "HDD / SSD", "Yuklanish tezligiga"],
        ["Ekran o'lchami", "dyuym", "Ko'rish qulayligiga"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Yodda tuting",
        matn: "Katta raqam har doim ham yaxshi degani emas. Masalan, matn terish uchun 32 GB RAM kerak emas, lekin video montaj qilish uchun 8 GB kamlik qiladi. Kompyuter <b>vazifaga qarab</b> tanlanadi.",
      },
    },
  ],

  rasmlar: [
    {
      "tur": "ikonka",
      "sarlavha": "Kompyuterning asosiy qismlari",
      "tushuntirish": "Stol kompyuteri bir nechta qurilmadan yig'iladi. Har biri o'z ishini bajaradi.",
      "elementlar": [
        {
          "belgi": "🖥️",
          "nom": "Monitor",
          "izoh": "Natijani ko'rsatadi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"><rect x=\"15\" y=\"5\" width=\"18\" height=\"38\" rx=\"4\"/><path d=\"M21 13h6\"/><path d=\"M21 19h6\"/><circle cx=\"24\" cy=\"33\" r=\"3\"/></svg>",
          "nom": "Tizim bloki",
          "izoh": "Asosiy hisob-kitob"
        },
        {
          "belgi": "⌨️",
          "nom": "Klaviatura",
          "izoh": "Matn va buyruq kiritish"
        },
        {
          "belgi": "🖱️",
          "nom": "Sichqoncha",
          "izoh": "Ko'rsatish va tanlash"
        },
        {
          "belgi": "🔊",
          "nom": "Kolonka",
          "izoh": "Ovoz chiqaradi"
        },
        {
          "belgi": "🎤",
          "nom": "Mikrofon",
          "izoh": "Ovoz kiritadi"
        },
        {
          "belgi": "🖨️",
          "nom": "Printer",
          "izoh": "Qog'ozga chiqaradi"
        },
        {
          "belgi": "📷",
          "nom": "Veb-kamera",
          "izoh": "Rasm va video oladi"
        }
      ],
      "izoh": "Tizim bloki ichida <b>protsessor</b>, <b>xotira</b> va <b>disk</b> joylashgan. Qolganlari &mdash; tashqi qurilmalar."
    },
    {
      "tur": "sxema",
      "sarlavha": "Kompyuter qanday ishlaydi?",
      "tushuntirish": "Har qanday kompyuter ishi uch bosqichdan iborat: ma'lumot keladi, qayta ishlanadi, natija chiqadi.",
      "svg": "<svg viewBox=\"0 0 700 290\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Kompyuter ishlash sxemasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"288\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx1ok\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\">\n      <path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/>\n    </marker>\n    <marker id=\"avx1ok2\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\">\n      <path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#22d3a6\"/>\n    </marker>\n  </defs>\n  <rect x=\"26\" y=\"110\" width=\"140\" height=\"86\" rx=\"12\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"96\" y=\"145\" fill=\"#e6ecff\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\">KIRITISH</text>\n  <text x=\"96\" y=\"168\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">klaviatura, sichqon</text>\n  <text x=\"96\" y=\"185\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">mikrofon, skaner</text>\n  <rect x=\"280\" y=\"88\" width=\"140\" height=\"130\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"126\" fill=\"#e6ecff\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\">PROTSESSOR</text>\n  <text x=\"350\" y=\"150\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">ma'lumotni tahlil</text>\n  <text x=\"350\" y=\"167\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">qiladi va hisoblaydi</text>\n  <text x=\"350\" y=\"196\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">(miya)</text>\n  <rect x=\"534\" y=\"110\" width=\"140\" height=\"86\" rx=\"12\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"604\" y=\"145\" fill=\"#e6ecff\" font-size=\"15\" font-weight=\"700\" text-anchor=\"middle\">CHIQARISH</text>\n  <text x=\"604\" y=\"168\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">monitor, printer</text>\n  <text x=\"604\" y=\"185\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">kolonka, proyektor</text>\n  <rect x=\"280\" y=\"238\" width=\"140\" height=\"42\" rx=\"10\" fill=\"#1b2334\" stroke=\"#26304a\"/>\n  <text x=\"350\" y=\"264\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">XOTIRA (RAM, disk)</text>\n  <line x1=\"168\" y1=\"153\" x2=\"274\" y2=\"153\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx1ok)\"/>\n  <line x1=\"422\" y1=\"153\" x2=\"528\" y2=\"153\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx1ok)\"/>\n  <line x1=\"350\" y1=\"220\" x2=\"350\" y2=\"236\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <line x1=\"336\" y1=\"236\" x2=\"336\" y2=\"222\" stroke=\"#22d3a6\" stroke-width=\"2.5\" marker-end=\"url(#avx1ok2)\"/>\n  <text x=\"219\" y=\"143\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">ma'lumot</text>\n  <text x=\"475\" y=\"143\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">natija</text>\n</svg>",
      "izoh": "Inson miyasi qanday ishlasa, kompyuter ham shunga o'xshaydi: <b>ko'radi &rarr; o'ylaydi &rarr; javob beradi</b>."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Kiritish va chiqarish qurilmalari",
      "tushuntirish": "Qurilmalarni ikki guruhga ajratish oson: kompyuterga <b>ma'lumot beradigan</b> va <b>natija beradigan</b>.",
      "ustunlar": [
        {
          "belgi": "⬅️",
          "sarlavha": "Kiritish qurilmalari",
          "turi": "brand",
          "royxat": [
            "Klaviatura &mdash; matn va buyruq",
            "Sichqoncha &mdash; ko'rsatish",
            "Mikrofon &mdash; ovoz",
            "Skaner &mdash; qog'ozdagi rasm",
            "Veb-kamera &mdash; video",
            "Sensorli ekran &mdash; barmoq bilan"
          ]
        },
        {
          "belgi": "➡️",
          "sarlavha": "Chiqarish qurilmalari",
          "turi": "yaxshi",
          "royxat": [
            "Monitor &mdash; tasvir",
            "Printer &mdash; qog'ozga chop",
            "Kolonka &mdash; ovoz",
            "Quloqchin &mdash; shaxsiy ovoz",
            "Proyektor &mdash; katta ekran"
          ]
        }
      ],
      "izoh": "Ba'zi qurilmalar <b>ikkalasi ham</b> bo'ladi: sensorli ekran ham kiritadi, ham chiqaradi. Ular <em>birgalikdagi</em> qurilma deyiladi."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Kiritish qurilmalari &mdash; tanish belgilar",
      "tushuntirish": "Do'konga borsangiz, shu belgilarni eslab qolsangiz, noto'g'ri qurilma sotib olmaysiz.",
      "elementlar": [
        {
          "belgi": "⌨️",
          "nom": "Klaviatura",
          "izoh": "Eng asosiy kiritish"
        },
        {
          "belgi": "🖱️",
          "nom": "Sichqoncha",
          "izoh": "Chap/o'ng tugma"
        },
        {
          "belgi": "🎤",
          "nom": "Mikrofon",
          "izoh": "Ovoz yozadi"
        },
        {
          "belgi": "📷",
          "nom": "Veb-kamera",
          "izoh": "Video"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"7\" y=\"28\" width=\"34\" height=\"11\" rx=\"3\"/><path d=\"M12 28v-9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v9\"/><path d=\"M17 16V10h14v6\"/><path d=\"M13 33.5h11\"/><circle cx=\"34\" cy=\"33.5\" r=\"1.8\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "Skaner",
          "izoh": "Qog'ozni raqamlaydi"
        },
        {
          "belgi": "🎮",
          "nom": "Joystik",
          "izoh": "O'yin uchun"
        }
      ],
      "izoh": "Kiritish qurilmasi &mdash; kompyuterga <b>ma'lumot yuboradigan</b> qurilma."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Chiqarish qurilmalari &mdash; tanish belgilar",
      "tushuntirish": "Bu qurilmalar kompyuter <em>tayyorlagan natijani</em> bizga yetkazadi.",
      "elementlar": [
        {
          "belgi": "🖥️",
          "nom": "Monitor",
          "izoh": "Rasm va matn"
        },
        {
          "belgi": "🖨️",
          "nom": "Printer",
          "izoh": "Qog'ozga chiqaradi"
        },
        {
          "belgi": "🔊",
          "nom": "Kolonka",
          "izoh": "Ovoz"
        },
        {
          "belgi": "🎧",
          "nom": "Quloqchin",
          "izoh": "Shaxsiy ovoz"
        },
        {
          "belgi": "📽️",
          "nom": "Proyektor",
          "izoh": "Devorga tasvir"
        }
      ],
      "izoh": "Printer <b>chiqarish</b> qurilmasi, skaner esa <b>kiritish</b>. Ikkalasi bitta qurilmada bo'lsa &mdash; <em>MFU</em> (ko'p funksiyali qurilma) deyiladi."
    },
    {
      "tur": "sxema",
      "sarlavha": "Protsessor ichida nima bo'ladi?",
      "tushuntirish": "Protsessor &mdash; kompyuterning miyasi. U har bir buyruqni to'rt bosqichda bajaradi, soniyasiga millionlab marta.",
      "svg": "<svg viewBox=\"0 0 700 210\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Protsessor bosqichlari\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"208\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx2ok\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\">\n      <path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/>\n    </marker>\n  </defs>\n  <rect x=\"24\" y=\"62\" width=\"140\" height=\"86\" rx=\"11\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"94\" y=\"95\" fill=\"#e6ecff\" font-size=\"13.5\" font-weight=\"700\" text-anchor=\"middle\">1. OLISH</text>\n  <text x=\"94\" y=\"117\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">buyruqni xotiradan</text>\n  <text x=\"94\" y=\"133\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">oladi</text>\n  <rect x=\"196\" y=\"62\" width=\"140\" height=\"86\" rx=\"11\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"266\" y=\"95\" fill=\"#e6ecff\" font-size=\"13.5\" font-weight=\"700\" text-anchor=\"middle\">2. TAHLIL</text>\n  <text x=\"266\" y=\"117\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">nima qilish</text>\n  <text x=\"266\" y=\"133\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">kerakligini tushunadi</text>\n  <rect x=\"368\" y=\"62\" width=\"140\" height=\"86\" rx=\"11\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"438\" y=\"95\" fill=\"#e6ecff\" font-size=\"13.5\" font-weight=\"700\" text-anchor=\"middle\">3. BAJARISH</text>\n  <text x=\"438\" y=\"117\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">hisob-kitobni</text>\n  <text x=\"438\" y=\"133\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">amalga oshiradi</text>\n  <rect x=\"540\" y=\"62\" width=\"140\" height=\"86\" rx=\"11\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"610\" y=\"95\" fill=\"#e6ecff\" font-size=\"13.5\" font-weight=\"700\" text-anchor=\"middle\">4. NATIJA</text>\n  <text x=\"610\" y=\"117\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">natijani</text>\n  <text x=\"610\" y=\"133\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">saqlaydi</text>\n  <line x1=\"166\" y1=\"105\" x2=\"190\" y2=\"105\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx2ok)\"/>\n  <line x1=\"338\" y1=\"105\" x2=\"362\" y2=\"105\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx2ok)\"/>\n  <line x1=\"510\" y1=\"105\" x2=\"534\" y2=\"105\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx2ok)\"/>\n  <text x=\"350\" y=\"175\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Bu to'rt bosqich soniyasiga milliardlab marta takrorlanadi.</text>\n  <text x=\"350\" y=\"193\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">Ba'zi protsessorlar bir vaqtda 4, 8 yoki 16 ta buyruqni bajaradi.</text>\n</svg>"
    },
    {
      "tur": "qiyos",
      "sarlavha": "Yadro soni nimaga ta'sir qiladi?",
      "tushuntirish": "Yadro (core) &mdash; protsessor ichidagi mustaqil ishlovchi qism. Yadro qancha ko'p bo'lsa, bir vaqtda shuncha ko'p ish bajariladi.",
      "ustunlar": [
        {
          "belgi": "⚙️",
          "sarlavha": "2 yadro",
          "royxat": [
            "Oddiy ishlar uchun",
            "Hujjat, internet",
            "Bir vaqtda 1-2 dastur"
          ]
        },
        {
          "belgi": "⚙️⚙️",
          "sarlavha": "4 yadro",
          "royxat": [
            "O'rtacha daraja",
            "Bir necha dastur birga",
            "Dars va o'yin uchun yetarli"
          ],
          "turi": "brand"
        },
        {
          "belgi": "⚙️⚙️⚙️⚙️",
          "sarlavha": "8+ yadro",
          "royxat": [
            "Og'ir ishlar uchun",
            "Video montaj, dizayn",
            "O'yinlar va dasturlash"
          ],
          "turi": "yaxshi"
        }
      ],
      "izoh": "Yadro soni <b>GHz</b> (chastota) bilan birga muhim. Masalan: <code>4 yadro, 2.5 GHz</code>. Faqat bitta ko'rsatkichga qarab tanlash noto'g'ri."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Xotira qurilmalari",
      "tushuntirish": "Ma'lumot saqlanadigan joylar. Ular tezligi va vazifasi bilan farq qiladi.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"16\" width=\"40\" height=\"14\" rx=\"2\"/><path d=\"M12 30v6M20 30v6M28 30v6M36 30v6\"/><path d=\"M12 21h5v5h-5zM21 21h5v5h-5zM30 21h5v5h-5z\"/></svg>",
          "nom": "RAM (xotira)",
          "izoh": "Tez, vaqtinchalik"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"6.5\"/><circle cx=\"22\" cy=\"24\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M34 20v8\"/></svg>",
          "nom": "HDD disk",
          "izoh": "Katta hajm, sekin"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><path d=\"M12 20h6M12 27h6M22 20h6M22 27h6M32 20h4M32 27h4\"/></svg>",
          "nom": "SSD disk",
          "izoh": "Tez, qimmatroq"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"13\" y=\"23\" width=\"22\" height=\"17\" rx=\"3\"/><path d=\"M19 23v-8h10v8\"/><path d=\"M22 15v-4M26 15v-4\"/></svg>",
          "nom": "Flesh xotira",
          "izoh": "Olib yurish uchun"
        },
        {
          "belgi": "💿",
          "nom": "CD / DVD",
          "izoh": "Eski usul"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><path d=\"M11 4h17l9 9v31H11z\"/><path d=\"M18 13h4v10h-4zM26 13h4v10h-4z\"/></svg>",
          "nom": "Xotira kartasi",
          "izoh": "Telefon, kamera"
        }
      ],
      "izoh": "Eng ko'p chalkashtiriladigan narsa: <b>RAM</b> o'chirilganda tozalanadi, <b>disk</b> esa saqlab qoladi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "RAM va Disk &mdash; asosiy farq",
      "tushuntirish": "Bu farqni bir marta tushunsangiz, kompyuter sekinlashganda nima qilishni bilib olasiz.",
      "ustunlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"16\" width=\"40\" height=\"14\" rx=\"2\"/><path d=\"M12 30v6M20 30v6M28 30v6M36 30v6\"/><path d=\"M12 21h5v5h-5zM21 21h5v5h-5zM30 21h5v5h-5z\"/></svg>",
          "sarlavha": "RAM (operativ xotira)",
          "turi": "brand",
          "royxat": [
            "Juda tez ishlaydi",
            "Kompyuter o'chsa &mdash; <b>tozalanadi</b>",
            "Hajmi kichik: 4 / 8 / 16 GB",
            "Hozir ishlayotgan dasturlar shu yerda"
          ]
        },
        {
          "belgi": "💽",
          "sarlavha": "Disk (doimiy xotira)",
          "turi": "yaxshi",
          "royxat": [
            "RAM dan sekinroq",
            "Kompyuter o'chsa ham &mdash; <b>qoladi</b>",
            "Hajmi katta: 256 GB, 1 TB",
            "Fayllar, rasm, dasturlar shu yerda"
          ]
        }
      ],
      "izoh": "Misol: <em>Word</em> dasturi <b>diskda</b> turadi, lekin siz uni ochganingizda <b>RAM</b> ga ko'chadi. Shuning uchun RAM to'lsa &mdash; kompyuter sekinlashadi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Vazifalar menejeri (Ctrl + Shift + Esc)",
      "tushuntirish": "Kompyuter hozir nima bilan band ekanini shu oynadan ko'rish mumkin. Sekinlashganda birinchi navbatda shu yer ochiladi.",
      "oyna": {
        "nom": "Vazifalar menejeri",
        "manzil": "Jarayonlar  |  Unumdorlik  |  Ilovalar tarixi",
        "ustunlar": [
          "Jarayon (dastur)",
          "Protsessor",
          "Xotira (RAM)"
        ],
        "qatorlar": [
          [
            "Google Chrome",
            "12%",
            "420 MB"
          ],
          [
            "Microsoft Word",
            "2%",
            "180 MB"
          ],
          [
            "File Explorer",
            "1%",
            "65 MB"
          ],
          [
            "Antivirus",
            "3%",
            "140 MB"
          ]
        ]
      },
      "izoh": "<b>Protsessor</b> ustuni &mdash; necha foiz band. <b>Xotira</b> ustuni &mdash; qancha RAM ishlatilayapti. Agar bitta dastur 90% ko'rsatsa, u kompyuterni sekinlashtiryapti."
    },
    {
      "tur": "oyna",
      "sarlavha": "Disklarni ko'rish (Win + E)",
      "tushuntirish": "Fayllar kompyuterda <b>disk</b> deb ataluvchi bo'limlarda saqlanadi. Har bir diskning o'z harfi bo'ladi: C:, D:, E:.",
      "oyna": {
        "nom": "Bu kompyuter",
        "manzil": "Bu kompyuter",
        "ustunlar": [
          "Nom",
          "Turi",
          "Bo'sh joy",
          "Umumiy hajm"
        ],
        "qatorlar": [
          [
            "💽 Disk (C:)",
            "Tizim diski (Windows)",
            "82 GB",
            "256 GB"
          ],
          [
            "💽 Disk (D:)",
            "Ma'lumot diski",
            "410 GB",
            "512 GB"
          ],
          [
            "🔌 USB (E:)",
            "Flesh xotira",
            "12 GB",
            "16 GB"
          ],
          [
            "💿 DVD (F:)",
            "Disk o'quvchi",
            "—",
            "—"
          ]
        ]
      },
      "izoh": "<b>C:</b> diski &mdash; tizim diski. U to'lib qolsa kompyuter sekinlashadi. Shaxsiy fayllar uchun <b>D:</b> disk ishlatilgani ma'qul."
    },
    {
      "tur": "qadam",
      "sarlavha": "Kompyuterni yoqish tartibi",
      "tushuntirish": "Kompyuterni yoqishda tartibga rioya qilish kerak &mdash; aks holda qurilmalar shikastlanishi mumkin.",
      "elementlar": [
        {
          "nom": "Rozetkani tekshirish",
          "izoh": "Kabel va rozetka joyida bo'lsin"
        },
        {
          "nom": "Monitor tugmasi",
          "izoh": "Avval ekran yoqiladi"
        },
        {
          "nom": "Tizim bloki tugmasi",
          "izoh": "Katta yumaloq tugma bosiladi"
        },
        {
          "nom": "Kutish",
          "izoh": "1-2 daqiqa &mdash; Windows yuklanadi"
        },
        {
          "nom": "Parol kiritish",
          "izoh": "Agar parol qo'yilgan bo'lsa"
        }
      ]
    },
    {
      "tur": "qadam",
      "sarlavha": "Kompyuterni to'g'ri o'chirish",
      "tushuntirish": "Kompyuterni <b>shunchaki simdan uzish mumkin emas</b> &mdash; bu fayllarni buzadi va diskni shikastlaydi.",
      "elementlar": [
        {
          "nom": "Ishlarni saqlash",
          "izoh": "Har bir dasturda Ctrl + S bosiladi"
        },
        {
          "nom": "Start tugmasi",
          "izoh": "Chap pastdagi Windows belgisi"
        },
        {
          "nom": "O'chirish (Shut down)",
          "izoh": "Qayta yuklashdan farqi bor"
        },
        {
          "nom": "Kutish",
          "izoh": "Ekran o'chguncha kutiladi"
        },
        {
          "nom": "Kabelni uzish",
          "izoh": "Faqat to'liq o'chgandan keyin"
        }
      ],
      "izoh": "Eslatma: gilamchani tozalash uchun ham kompyuter avval <b>to'g'ri o'chirilishi</b> kerak."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Qo'shimcha (tashqi) qurilmalar",
      "tushuntirish": "Bular kompyuterga keyinchalik ulanadigan qurilmalar. Har biri ishni yengillashtiradi.",
      "elementlar": [
        {
          "belgi": "🖨️",
          "nom": "Printer",
          "izoh": "Chop etish"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"7\" y=\"28\" width=\"34\" height=\"11\" rx=\"3\"/><path d=\"M12 28v-9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v9\"/><path d=\"M17 16V10h14v6\"/><path d=\"M13 33.5h11\"/><circle cx=\"34\" cy=\"33.5\" r=\"1.8\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "Skaner",
          "izoh": "Qog'ozni raqamlash"
        },
        {
          "belgi": "📽️",
          "nom": "Proyektor",
          "izoh": "Katta ekran"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"6.5\"/><circle cx=\"22\" cy=\"24\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M34 20v8\"/></svg>",
          "nom": "Tashqi disk",
          "izoh": "Zaxira nusxa"
        },
        {
          "belgi": "🔋",
          "nom": "UPS",
          "izoh": "Tok o'chsa ham ishlaydi"
        },
        {
          "belgi": "🎧",
          "nom": "Quloqchin / mikrofon",
          "izoh": "Onlayn dars"
        }
      ],
      "izoh": "Maktabda eng ko'p ishlatiladiganlari: <b>proyektor</b>, <b>printer</b> va <b>skaner</b>."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Stol kompyuteri va noutbuk",
      "tushuntirish": "Ikkalasi ham kompyuter, lekin ishlatish maqsadi boshqa.",
      "ustunlar": [
        {
          "belgi": "🖥️",
          "sarlavha": "Stol kompyuteri",
          "royxat": [
            "Doim bir joyda turadi",
            "Ekrani katta va qulay",
            "Qismlarini almashtirish oson",
            "Tokka doim ulangan"
          ]
        },
        {
          "belgi": "💻",
          "sarlavha": "Noutbuk",
          "turi": "yaxshi",
          "royxat": [
            "Olib yurish mumkin",
            "Batareyada ishlaydi",
            "Hammasi bitta korpusda",
            "Dars va sayohat uchun qulay"
          ]
        }
      ],
      "izoh": "O'qish uchun noutbuk, o'yin va montaj uchun esa stol kompyuteri afzal ko'riladi."
    }
  ],

  amaliy: [
    "Kompyuteringizda <b>Win + Pause</b> tugmalarini bosing va tizim ma'lumotlarini ko'ring. Protsessor modeli va RAM hajmini daftaringizga yozing.",
    "<code>cmd</code> oynasini ochib, <code>systeminfo</code> buyrug'ini bajaring. \"Total Physical Memory\" qatorini toping va GB ga aylantiring.",
    "Daftaringizga kompyuteringiz ma'lumotlari jadvalini tuzing: turi, protsessor, RAM hajmi, disk turi va hajmi.",
    "3 ta kiritish va 3 ta chiqarish qurilmasini ikkita ustunga yozib, jadval tuzing.",
    "Internetdan bitta noutbuk va bitta stol kompyuteri e'lonini topib, texnik ko'rsatkichlarini taqqoslang va qaysi biri qaysi vazifaga mos kelishini yozing.",
  ],

  uyga: [
    {
      "savol": "Kompyuter arxitekturasi nima? O'z so'zingiz bilan 3-4 gapda tushuntiring.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<p><b>Arxitektura</b> &mdash; kompyuter qismlarining joylashuvi va ular o'rtasidagi bog'lanish.</p><ul><li>Qaysi qurilma qaysi qurilmaga ulanadi;</li><li>Ma'lumot qaysi yo'ldan yuradi (kiritish &rarr; protsessor &rarr; chiqarish);</li><li>Xotira va disk bu yo'lda qanday qatnashadi.</li></ul><p>Arxitekturani bilgan odam kompyuter sekinlashganda muammo qayerdaligini <b>o'ylab topadi</b>, bilmagan odam esa shunchaki \"buzilibdi\" deydi.</p>"
    },
    {
      "savol": "Quyidagi qurilmalarni to'rt guruhga ajratib, jadval ko'rinishida yozing: klaviatura, monitor, SSD, protsessor, printer, RAM, skaner, fleshka, proyektor, mikrofon.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Guruh</th><th>Qurilmalar</th><th>Nima qiladi</th></tr></thead><tbody><tr><td>Kiritish</td><td>klaviatura, skaner, mikrofon</td><td>Kompyuterga ma'lumot yuboradi</td></tr><tr><td>Chiqarish</td><td>monitor, printer, proyektor</td><td>Natijani bizga yetkazadi</td></tr><tr><td>Ichki</td><td>protsessor, RAM</td><td>Hisoblaydi va vaqtincha saqlaydi</td></tr><tr><td>Saqlash</td><td>SSD, fleshka</td><td>Ma'lumotni doimiy saqlaydi</td></tr></tbody></table><p>Diqqat: <b>RAM</b> ham, <b>SSD</b> ham xotira, lekin RAM vaqtinchalik, SSD doimiydir.</p>"
    },
    {
      "savol": "RAM va SSD o'rtasidagi farqni daftar va javon misolida tushuntiring. Nega saqlamagan ish yo'qolib qoladi?",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<p><b>Daftar</b> &mdash; RAM. Dars davomida ishlatasiz, lekin dars tugab, parta yig'ishtirilgach daftar yo'qoladi.</p><p><b>Javon</b> &mdash; SSD/HDD. Kitob javonga qo'yilsa, ertasi kuni ham o'sha yerda turadi.</p><ul><li>Siz yozayotgan hujjat hozir <b>RAM</b> da turadi &mdash; shuning uchun tez ishlaydi;</li><li><b>Ctrl + S</b> bosganingizda u <b>diskka</b> ko'chiriladi &mdash; endi saqlanib qoladi;</li><li>Tok o'chsa, RAM dagi hamma narsa <b>tozalanadi</b>, diskdagisi qoladi.</li></ul><p>Shu sababli \"saqlamagan ekanman\" degan qo'rquv faqat RAM haqida.</p>"
    },
    {
      "savol": "Sinf xonasi uchun kompyuter tanlayapsiz. Faqat matn yozish va internetga kirish kerak. Qanday ko'rsatkichlar yetarli va nega qimmat kompyuter kerak emas?",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<p>Bunday ishlar uchun yetarli:</p><ul><li><b>Protsessor:</b> 4 yadro yetarli (og'ir hisob-kitob yo'q);</li><li><b>RAM:</b> 8 GB (brauzer va Word birga ishlaydi);</li><li><b>Disk:</b> 256 GB SSD (tez yuklanadi);</li><li><b>Monitor:</b> 19-22 dyuym (matn o'qish uchun qulay);</li><li><b>Video karta:</b> oddiy o'rnatilgan karta kifoya.</li></ul><p>Qimmat (o'yin yoki montaj uchun mo'ljallangan) kompyuter <b>kerak emas</b> &mdash; chunki uning kuchli qismlari ishlatilmaydi, pul esa behuda ketadi.</p>"
    },
    {
      "savol": "Daftaringizga kompyuter arxitekturasi sxemasini chizing: <b>KIRITISH &rarr; PROTSESSOR &rarr; CHIQARISH</b>, pastiga <b>XOTIRA</b> joylashtiring. Har bir blokka 2 tadan misol yozing.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<p><b>Namuna chizma:</b></p><pre><code>  +------------+     +-------------+     +-------------+\n  |  KIRITISH  | --&gt; |  PROTSESSOR | --&gt; |  CHIQARISH  |\n  | klaviatura |     |   (miya)    |     |   monitor   |\n  |  mikrofon  |     |             |     |   printer   |\n  +------------+     +------+------+     +-------------+\n                            |\n                            v\n                     +-------------+\n                     |   XOTIRA    |  RAM, SSD\n                     +-------------+</code></pre><p>Baholanadigan tomonlari: strelkalar yo'nalishi to'g'rimi, har bir blokka kamida 2 ta misol yozilganmi, xotira protsessor bilan bog'langanmi.</p>"
    },
    {
      "savol": "Quyidagi qurilmalarni belgisiga qarab juftlang va yoniga qaysi guruhga tegishli ekanini yozing: monitor, klaviatura, sichqoncha, printer, kolonka, mikrofon, protsessor, xotira.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ul><li>🖥️ <b>Monitor</b> &mdash; chiqarish qurilmasi;</li><li>⌨️ <b>Klaviatura</b> &mdash; kiritish qurilmasi;</li><li>🖱️ <b>Sichqoncha</b> &mdash; kiritish qurilmasi;</li><li>🖨️ <b>Printer</b> &mdash; chiqarish qurilmasi;</li><li>🔊 <b>Kolonka</b> &mdash; chiqarish qurilmasi;</li><li>🎤 <b>Mikrofon</b> &mdash; kiritish qurilmasi;</li><li>🧠 <b>Protsessor</b> &mdash; ichki qurilma (hisoblaydi);</li><li>💾 <b>Xotira</b> &mdash; ichki qurilma (saqlaydi).</li></ul><p>Belgini nom bilan bog'lash &mdash; qurilmani tanib olishning eng tez yo'li.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): uyda ishlatilayotgan 2 ta qurilmani tanlab (masalan, televizor va smartfon), ularni &laquo;kompyuter&raquo; deb hisoblash mumkinmi? Fikringizni asoslang.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<p>Zamonaviy <b>smartfon</b>, <b>televizor</b>, <b>kir yuvish mashinasi</b> &mdash; hammasida protsessor, xotira va dastur bor. Shu ma'noda ular ham kompyuterdir.</p><ul><li><b>Umumiy:</b> protsessor, xotira, kiritish/chiqarish qismlari bor;</li><li><b>Farqi:</b> ular bitta ish uchun mo'ljallangan &mdash; televizor faqat ko'rsatadi, smartfon ko'proq ish qiladi;</li><li>Shuning uchun ular <em>maxsus maqsadli</em> kompyuter deyiladi.</li></ul>"
    }
  ],

  test: [
    {
      savol: "Kompyuterning \"miyasi\" deb ataluvchi qurilma qaysi?",
      variantlar: ["Operativ xotira (RAM)", "Protsessor (CPU)", "Qattiq disk (HDD)", "Videokarta (GPU)"],
      togri: 1,
      izoh: "Protsessor barcha hisob-kitoblarni bajaradi va qurilmalarni boshqaradi.",
    },
    {
      savol: "Kompyuter o'chirilganda qaysi xotiradagi ma'lumot yo'qoladi?",
      variantlar: ["SSD", "HDD", "RAM", "Fleshka"],
      togri: 2,
      izoh: "RAM vaqtinchalik xotira. SSD, HDD va fleshka doimiy saqlash qurilmalaridir.",
    },
    {
      savol: "Qaysi qurilma chiqarish qurilmasi hisoblanadi?",
      variantlar: ["Skaner", "Mikrofon", "Printer", "Klaviatura"],
      togri: 2,
      izoh: "Printer natijani qog'ozga chiqaradi, ya'ni u chiqarish qurilmasi.",
    },
    {
      savol: "1 GB necha MB ga teng?",
      variantlar: ["100 MB", "1000 MB", "1024 MB", "512 MB"],
      togri: 2,
      izoh: "Kompyuter 2-lik sanoq tizimida ishlaydi, shuning uchun 1 GB = 1024 MB.",
    },
    {
      savol: "Ma'lumotni qayta ishlash bosqichini qaysi qurilma bajaradi?",
      variantlar: ["Monitor", "Protsessor", "Klaviatura", "Kolonka"],
      togri: 1,
      izoh: "Hisoblash, ya'ni qayta ishlash ishlarini protsessor bajaradi.",
    },
  ],

  lugat: [
    { soz: "Arxitektura", izoh: "Kompyuter qismlarining tuzilishi va o'zaro bog'lanishi." },
    { soz: "CPU (Protsessor)", izoh: "Kompyuterning asosiy hisoblash qurilmasi." },
    { soz: "RAM", izoh: "Tezkor (vaqtinchalik) xotira; o'chirilganda tozalanadi." },
    { soz: "SSD / HDD", izoh: "Doimiy saqlash qurilmalari. SSD tezroq, HDD arzonroq." },
    { soz: "GPU (Videokarta)", izoh: "Grafik ishlov berish qurilmasi." },
    { soz: "Ona plata", izoh: "Barcha qismlarni bog'lovchi asosiy plata." },
    { soz: "Input / Output", izoh: "Kirish / chiqarish qurilmalari." },
    { soz: "GHz", izoh: "Protsessor tezligining o'lchov birligi (gigagerts)." },
  ],

  xatolar: [
    "RAM ni \"doimiy xotira\" deb aytish &mdash; RAM vaqtinchalik.",
    "Printer va skanerni adashtirish &mdash; printer chiqaradi, skaner kiritadi.",
    "1 GB ni 1000 MB deb hisoblash &mdash; to'g'risi 1024 MB.",
    "Videokartani \"faqat o'yin uchun\" deb o'ylash &mdash; u video montaj va 3D dizaynda ham kerak.",
    "Protsessor tezligini (GHz) yagona sifat ko'rsatkichi deb o'ylash &mdash; yadro soni va RAM hajmi ham muhim.",
  ],

  keyingi:
    "Keyingi darsda kompyuter yoqilganda nima bo'lishini &mdash; ya'ni <b>operatsion tizim</b> nima ekanini va Windows muhitida qanday ishlashni o'rganamiz. Bugun o'rgangan arxitektura bilimlari keyingi darsda bevosita kerak bo'ladi.",
});
