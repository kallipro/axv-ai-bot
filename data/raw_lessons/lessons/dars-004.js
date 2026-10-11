/* 4-dars: Kompyuterning asosiy va qo'shimcha qurilmalari */

AVX.dars({
  id: "cs8-004",
  sarlavha: "Kompyuterning asosiy va qo'shimcha qurilmalari",
  kiritish:
    "Birinchi darsda kompyuter arxitekturasini umumiy ko'rinishda o'rgandik. Bugun esa <b>tizim blokining ichiga kirib</b> qaraymiz: protsessor, RAM, ona plata, disk, quvvat bloki &mdash; hammasi qanday joylashgan? So'ng tashqi qurilmalar: printer, skaner, proyektor, veb-kamera &mdash; ular qanday ulanadi va <b>xavfsiz</b> ishlatiladi?",

  maqsad: [
    "Kompyuterning asosiy qurilmalarini sanash va vazifasini aytish.",
    "Tizim blokining ichki qismlarini (CPU, RAM, ona plata, disk, PSU) ajratish.",
    "Qo'shimcha (periferiya) qurilmalarni turlarga bo'lish.",
    "Ulanish portlarini (USB, HDMI, RJ-45, audio) tanish va farqlash.",
    "Qurilmalarni to'g'ri va xavfsiz ulash, uzish tartibini o'rganish.",
  ],

  natija: [
    "Tizim blokini ochib (statik tokdan saqlanib) qismlarni ko'rsata oladi.",
    "Har bir portga qaysi qurilma ulanishini aytadi.",
    "Printer, skaner va MFP farqini tushuntiradi.",
    "Qurilma ishlamasa, oddiy tekshirish bosqichlarini bajaradi.",
    "Fleshkani xavfsiz chiqarishni biladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: bayt, kengaytma, Ctrl+C va Ctrl+X farqi."],
    ["5-16 daq", "Mentor tushuntirishi", "\"Quti ichida nima bor?\" &mdash; tizim bloki qismlari haqida suhbat."],
    ["16-30 daq", "Nazariya", "Ichki qismlar jadvali, asosiy va qo'shimcha qurilmalar tasnifi."],
    ["30-42 daq", "Portlar bilan tanishish", "USB, HDMI, VGA, RJ-45, audio jack, Type-C. Doskaga chizib ko'rsatamiz."],
    ["42-62 daq", "Amaliyot: kod yozamiz", "Qurilmalar katalogi (HTML/CSS), port tekshiruvchi va narx kalkulyatori (Python/JS)."],
    ["62-74 daq", "Mustaqil ish", "Har bir o'quvchi o'z kompyuterining qurilmalar ro'yxatini tuzadi."],
    ["74-78 daq", "Umumlashtirish va uyga vazifa", "Savollar javoblanadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. \"Quti\" ichida nima bor?",
      matn: [
        "Ko'pchilik kompyuterni \"monitor\" deb o'ylaydi. Aslida esa asosiy ish <em>tizim blokida</em> bo'ladi. Tizim bloki &mdash; kompyuterning \"yuragi\" joylashgan quti.",
        "Ichida 6 ta asosiy qism bor: <b>ona plata</b> (hammani bog'laydi), <b>protsessor</b> (hisoblaydi), <b>RAM</b> (vaqtinchalik xotira), <b>SSD/HDD</b> (doimiy xotira), <b>quvvat bloki</b> (tok beradi) va <b>videokarta</b> (grafik ishlov beradi).",
        "Muhim qoida: qutini ochishdan oldin <em>tokdan uzish</em> kerak. Va ichida <b>statik tok</b> yig'ilishi mumkin &mdash; shuning uchun ishni boshlashdan oldin qo'lni temir narsaga tegizib \"zaryadni tushirish\" tavsiya etiladi. Aks holda nozik mikrosxemalar shikastlanadi.",
      ],
    },
    {
      sarlavha: "2. Asosiy va qo'shimcha qurilmalar farqi",
      matn: [
        "Asosiy qurilmalar &mdash; kompyuter <b>ishlamay qolmasligi uchun</b> zarur bo'lganlari: tizim bloki, monitor, klaviatura, sichqoncha. Ulardan biri bo'lmasa, kompyuterdan to'liq foydalanib bo'lmaydi.",
        "Qo'shimcha qurilmalar (periferiya) &mdash; kompyuterga qulaylik va <em>yangi imkoniyat</em> qo'shadi: printer, skaner, proyektor, veb-kamera, kolonka. Ularsiz kompyuter ishlayveradi, lekin imkoniyati kamayadi.",
        "Bugun siz <b>printer, skaner va MFP</b> ni ajratishni o'rganasiz. MFP &mdash; ko'p funksiyali qurilma: chop etadi, skanerlaydi, nusxa ko'chiradi va ba'zilari faks ham yuboradi. Bitta qurilma &mdash; to'rt ish.",
      ],
    },
    {
      sarlavha: "3. Portlar &mdash; qurilmalar \"eshigi\"",
      matn: [
        "Qurilmalar tizim blokiga <em>port</em> orqali ulanadi. Har bir portning o'z vazifasi va shakli bor &mdash; noto'g'ri portga kuch bilan tiqish &mdash; qurilmani buzishning eng tez yo'li.",
        "<b>USB</b> &mdash; eng ko'p ishlatiladigan port: sichqoncha, klaviatura, fleshka, printer. <b>HDMI</b> &mdash; monitor yoki proyektorni ulash (ovoz ham uzatadi). <b>RJ-45</b> &mdash; tarmoq kabeli (Internet). <b>3.5 mm audio jack</b> &mdash; quloqchin va mikrofon.",
        "Diqqat qiling: <em>hech qachon kuch ishlatmang.</em> Portga kirmayotgan kabel &mdash; noto'g'ri port. Ayniqsa USB Type-C va micro-USB ni adashtirib bo'lmaydi, ular shakli bilan farqlanadi.",
      ],
    },
    {
      sarlavha: "4. Qurilma ishlamasa &mdash; nima qilish kerak?",
      matn: [
        "Qurilma ishlamaganda odamlar darhol \"buzilibdi\" deydi. Aslida 10 holatdan 8 tasida muammo oddiy bo'ladi. Quyidagi tartibda tekshirish kerak.",
        "Birinchi: <b>kabel ulanganmi?</b> Ko'p hollarda kabel sal chiqib ketgan bo'ladi. Ikkinchi: <b>tok bormi?</b> Printerning o'z quvvat tugmasi bor, uni ham yoqish kerak. Uchinchi: <b>drayver o'rnatilganmi?</b> Yangi printer ko'pincha drayversiz ishlamaydi.",
        "To'rtinchi: <b>qurilma ro'yxatida ko'rinadimi?</b> Buni <em>Device Manager</em> (Qurilmalar dispetcheri) orqali tekshiramiz. Agar qurilma nomi yonida sariq \"!\" belgisi bo'lsa &mdash; drayver muammosi. Beshinchi: <b>qayta ishga tushirib ko'ring.</b> Bu maslahat kulgili tuyuladi, lekin haqiqatan ham ishlaydi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Asosiy qurilmalar",
      matn: [
        "Kompyuterning ishlashi uchun zarur bo'lgan qurilmalar quyidagilar.",
      ],
      jadval: [
        ["Qurilma", "Vazifasi", "Tegishli guruh"],
        ["Tizim bloki", "Hisoblash va saqlash qismlari joylashgan korpus", "Asosiy"],
        ["Monitor", "Ma'lumotni ekranga chiqaradi", "Chiqarish"],
        ["Klaviatura", "Matn va buyruqlarni kiritadi", "Kiritish"],
        ["Sichqoncha", "Kursor orqali buyruq beradi", "Kiritish"],
      ],
    },
    {
      sarlavha: "2. Tizim blokining ichki qismlari",
      matn: [
        "Tizim bloki &mdash; kompyuterning asosiy \"uyi\". Ichidagi qismlar birgalikda ishlaydi.",
      ],
      jadval: [
        ["Qism", "Vazifasi", "Muhim izoh"],
        ["Ona plata", "Barcha qismlarni bog'laydi", "Uning ustiga hamma narsa o'rnatiladi"],
        ["Protsessor (CPU)", "Hisob-kitob qiladi", "Radiator va ventilyator o'rnatiladi"],
        ["RAM (operativ xotira)", "Vaqtinchalik xotirada ma'lumot saqlaydi", "O'chirilganda tozalanadi"],
        ["SSD / HDD", "Doimiy xotira", "SSD tez, HDD arzon"],
        ["Videokarta (GPU)", "Grafikani qayta ishlaydi", "Kuchli o'yinlar uchun zarur"],
        ["Quvvat bloki (PSU)", "Barcha qismlarga tok beradi", "Quvvati vatt (W) bilan o'lchanadi"],
        ["Sovutish tizimi", "Isitishni kamaytiradi", "Ventilyator va radiatorlardan iborat"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Xavfsizlik",
        matn: "Tizim blokini ochishdan oldin albatta <b>tokdan uzing</b> va qo'lingizdagi statik zaryadni tushiring. Qurilma ichida <b>kafolat yorlig'i</b> bo'lishi mumkin &mdash; u yorlig'ni buzish kafolatdan mahrum qilishi mumkin.",
      },
    },
    {
      sarlavha: "3. Qo'shimcha (periferiya) qurilmalari",
      matn: [
        "Qo'shimcha qurilmalar kompyuterga yangi imkoniyat qo'shadi. Ular kiritish yoki chiqarish guruhiga bo'linadi.",
      ],
      jadval: [
        ["Qurilma", "Guruh", "Vazifasi"],
        ["Printer", "Chiqarish", "Ma'lumotni qog'ozga chiqaradi"],
        ["Skaner", "Kiritish", "Qog'ozdagi rasm yoki matnni raqamli ko'rinishga o'tkazadi"],
        ["MFP", "Kiritish + Chiqarish", "Chop etadi, skanerlaydi, nusxa ko'chiradi"],
        ["Proyektor", "Chiqarish", "Tasvirni katta ekranga tushiradi"],
        ["Veb-kamera", "Kiritish", "Video suratga oladi (onlayn darslar)"],
        ["Mikrofon", "Kiritish", "Ovoz yozadi"],
        ["Kolonka / Quloqchin", "Chiqarish", "Ovoz chiqaradi"],
        ["Plotter", "Chiqarish", "Katta formatdagi chizmalarni chop etadi"],
        ["Tashqi disk", "Saqlash", "Qo'shimcha xotira hajmi"],
        ["Gamepad", "Kiritish", "O'yinlarni boshqarish uchun"],
        ["UPS", "Himoya", "Tok o'chganda vaqtincha quvvat beradi"],
      ],
    },
    {
      sarlavha: "4. Ulanish portlari",
      matn: [
        "Quyidagi portlarni farqlashni bilish &mdash; har bir foydalanuvchi uchun majburiy.",
      ],
      jadval: [
        ["Port", "Tashqi ko'rinishi", "Nima ulanadi", "Izoh"],
        ["USB Type-A", "To'rtburchak, keng", "Fleshka, sichqoncha, printer", "Eng ko'p ishlatiladigan"],
        ["USB Type-C", "Kichik, oval, ikki tomonlama", "Telefon, yangi noutbuklar", "Tez uzatadi"],
        ["HDMI", "Kichik trapetsiya", "Monitor, proyektor, televizor", "Ovoz ham uzatadi"],
        ["VGA", "Moviy, ko'p teshikli", "Eski monitorlar", "Faqat tasvir (ovozsiz)"],
        ["RJ-45 (LAN)", "Keng, telefon-jakka o'xshash", "Tarmoq kabeli (Internet)", "8 ta kontakt"],
        ["3.5 mm jack", "Dumaloq, yashil/pushti", "Quloqchin, mikrofon, kolonka", "Yashil - ovoz chiqarish"],
        ["DisplayPort", "To'rtburchak, bir tomoni qiyshiq", "Zamonaviy monitorlar", "HDMI dan kuchliroq"],
        ["PS/2", "Dumaloq, 6 pin", "Eski klaviatura/sichqoncha", "Hozir kamdan-kam"],
      ],
    },
    {
      sarlavha: "5. Qurilmalarni xavfsiz ulash va uzish qoidalari",
      matn: [
        "Bu qoidalar oddiy, lekin ularga rioya qilmaslik qurilmani buzishi mumkin.",
      ],
      royhatTuri: "ol",
      royhat: [
        "Kabelni <b>kuch bilan tiqmang</b>. Kirmasa &mdash; port noto'g'ri yoki kabel aylanmagan.",
        "Fleshka va tashqi diskni uzishdan oldin <b>\"Xavfsiz chiqarish\"</b> buyrug'ini bering.",
        "Qurilmani ulaganda <b>tokdan uzilgan</b> holatda ulash xavfsizroq (ayniqsa printer).",
        "Bir USB portga <b>hub (ko'paytirgich)</b> orqali 4-5 dan ortiq qurilma ulamang &mdash; tok yetmaydi.",
        "Suyuqliklar kompyuter yoniga qo'yilmasin &mdash; to'kilsa, tizim bloki butunlay ishdan chiqadi.",
        "Kabelni <b>tortib uzmaslik</b> kerak &mdash; port shikastlanadi, ta'mirlash qimmatga tushadi.",
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "ikonka",
      "sarlavha": "Tizim bloki ichida nima bor?",
      "tushuntirish": "Tizim bloki &mdash; kompyuterning <b>yuragi</b>. Ichidagi qismlar birgalikda ishlaydi.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"10\" width=\"38\" height=\"28\" rx=\"3\"/><rect x=\"12\" y=\"17\" width=\"11\" height=\"11\" rx=\"2\"/><path d=\"M29 18h9M29 24h9M29 30h9M10 15v18\"/></svg>",
          "nom": "Anakart",
          "izoh": "Hammasini bog'lovchi plata"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"14\" y=\"14\" width=\"20\" height=\"20\" rx=\"3\"/><rect x=\"20\" y=\"20\" width=\"8\" height=\"8\" rx=\"1.5\"/><path d=\"M20 14V7M28 14V7M20 34v7M28 34v7M14 20H7M14 28H7M34 20h7M34 28h7\"/></svg>",
          "nom": "Protsessor",
          "izoh": "Hisob-kitob markazi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"16\" width=\"40\" height=\"14\" rx=\"2\"/><path d=\"M12 30v6M20 30v6M28 30v6M36 30v6\"/><path d=\"M12 21h5v5h-5zM21 21h5v5h-5zM30 21h5v5h-5z\"/></svg>",
          "nom": "RAM xotira",
          "izoh": "Vaqtinchalik xotira"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"14\" width=\"40\" height=\"18\" rx=\"3\"/><circle cx=\"16\" cy=\"23\" r=\"5\"/><circle cx=\"31\" cy=\"23\" r=\"3.2\"/><path d=\"M10 32v5h28v-5\"/></svg>",
          "nom": "Video karta",
          "izoh": "Tasvirni hisoblaydi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"11\" width=\"30\" height=\"24\" rx=\"3\"/><circle cx=\"24\" cy=\"23\" r=\"6\"/><path d=\"M18 35v6M30 35v6\"/></svg>",
          "nom": "Quvvat bloki",
          "izoh": "Tokni taqsimlaydi"
        },
        {
          "belgi": "🌀",
          "nom": "Sovutgich",
          "izoh": "Qizib ketishdan saqlaydi"
        }
      ],
      "izoh": "Noutbukda bu qismlar <b>kichraytirilgan</b> va bitta korpusga joylashtirilgan. Shuning uchun ularni almashtirish qiyin."
    },
    {
      "tur": "sxema",
      "sarlavha": "Anakart va unga ulanadigan qismlar",
      "tushuntirish": "Anakart &mdash; shahar xaritasi kabi: barcha qurilmalar shu plata orqali bir-biri bilan gaplashadi.",
      "svg": "<svg viewBox=\"0 0 700 380\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Anakart sxemasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"378\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"40\" y=\"46\" width=\"620\" height=\"300\" rx=\"12\" fill=\"#0f1626\" stroke=\"#2b3550\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"34\" fill=\"#93a0bd\" font-size=\"13\" text-anchor=\"middle\" letter-spacing=\"1\">ANAKART (Motherboard)</text>\n  <rect x=\"90\" y=\"120\" width=\"132\" height=\"132\" rx=\"8\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"156\" y=\"180\" fill=\"#e6ecff\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">PROTSESSOR</text>\n  <text x=\"156\" y=\"202\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">(CPU)</text>\n  <rect x=\"252\" y=\"96\" width=\"24\" height=\"180\" rx=\"5\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <rect x=\"284\" y=\"96\" width=\"24\" height=\"180\" rx=\"5\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"280\" y=\"300\" fill=\"#4f8cff\" font-size=\"12\" text-anchor=\"middle\">RAM uyalari</text>\n  <rect x=\"352\" y=\"130\" width=\"150\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"427\" y=\"166\" fill=\"#e6ecff\" font-size=\"13\" text-anchor=\"middle\">VIDEO KARTA</text>\n  <rect x=\"352\" y=\"212\" width=\"150\" height=\"52\" rx=\"8\" fill=\"#1b2334\" stroke=\"#26304a\"/>\n  <text x=\"427\" y=\"243\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Qattiq disk (SATA)</text>\n  <rect x=\"540\" y=\"120\" width=\"96\" height=\"70\" rx=\"8\" fill=\"#1b2334\" stroke=\"#26304a\"/>\n  <text x=\"588\" y=\"151\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">Quvvat</text>\n  <text x=\"588\" y=\"169\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">ulagichi</text>\n  <rect x=\"540\" y=\"212\" width=\"96\" height=\"52\" rx=\"8\" fill=\"#1b2334\" stroke=\"#26304a\"/>\n  <text x=\"588\" y=\"243\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">Portlar</text>\n  <line x1=\"222\" y1=\"186\" x2=\"248\" y2=\"186\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <line x1=\"308\" y1=\"186\" x2=\"348\" y2=\"176\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <line x1=\"502\" y1=\"160\" x2=\"536\" y2=\"152\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"336\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Barcha qurilmalar anakart orqali bir-biriga ulanadi &mdash; ma'lumot shu yo'ldan yuradi.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Ichki qurilmalar va ularning vazifasi",
      "tushuntirish": "Bu qismlar tizim bloki ichida turadi va ko'rinmaydi.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"10\" width=\"38\" height=\"28\" rx=\"3\"/><rect x=\"12\" y=\"17\" width=\"11\" height=\"11\" rx=\"2\"/><path d=\"M29 18h9M29 24h9M29 30h9M10 15v18\"/></svg>",
          "nom": "Anakart",
          "izoh": "Barcha qismlarni bog'laydi va tok yetkazadi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"14\" y=\"14\" width=\"20\" height=\"20\" rx=\"3\"/><rect x=\"20\" y=\"20\" width=\"8\" height=\"8\" rx=\"1.5\"/><path d=\"M20 14V7M28 14V7M20 34v7M28 34v7M14 20H7M14 28H7M34 20h7M34 28h7\"/></svg>",
          "nom": "Protsessor (CPU)",
          "izoh": "Hisob-kitobni bajaradi &mdash; \"miya\""
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"16\" width=\"40\" height=\"14\" rx=\"2\"/><path d=\"M12 30v6M20 30v6M28 30v6M36 30v6\"/><path d=\"M12 21h5v5h-5zM21 21h5v5h-5zM30 21h5v5h-5z\"/></svg>",
          "nom": "Operativ xotira (RAM)",
          "izoh": "Ishlayotgan dasturlarni vaqtincha saqlaydi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"14\" width=\"40\" height=\"18\" rx=\"3\"/><circle cx=\"16\" cy=\"23\" r=\"5\"/><circle cx=\"31\" cy=\"23\" r=\"3.2\"/><path d=\"M10 32v5h28v-5\"/></svg>",
          "nom": "Video karta (GPU)",
          "izoh": "Tasvir va videoni hisoblaydi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"6.5\"/><circle cx=\"22\" cy=\"24\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M34 20v8\"/></svg>",
          "nom": "Qattiq disk / SSD",
          "izoh": "Fayllarni doimiy saqlaydi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"11\" width=\"30\" height=\"24\" rx=\"3\"/><circle cx=\"24\" cy=\"23\" r=\"6\"/><path d=\"M18 35v6M30 35v6\"/></svg>",
          "nom": "Quvvat bloki (PSU)",
          "izoh": "Rozetkadagi tokni kompyuterga moslaydi"
        }
      ],
      "izoh": "Kompyuter sekin ishlasa, ko'pincha <b>RAM</b> yetishmaydi yoki <b>disk (HDD)</b> eskirgan bo'ladi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Tashqi portlar &mdash; qurilmalar shu yerga ulanadi",
      "tushuntirish": "Port &mdash; tizim blokining orqa yoki old tomonidagi ulagich. Har birining shakli va vazifasi boshqa.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"17\" width=\"30\" height=\"15\" rx=\"2\"/><path d=\"M14 22h8M14 27h8\"/></svg>",
          "nom": "USB",
          "izoh": "Sichqoncha, klaviatura, flesh, telefon"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><path d=\"M8 20h32v9l-5 6H13l-5-6z\"/><path d=\"M16 20v-5h16v5\"/></svg>",
          "nom": "HDMI",
          "izoh": "Monitor va proyektorga tasvir"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><path d=\"M8 19h32v10H8z\"/><circle cx=\"17\" cy=\"24\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"31\" cy=\"24\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "VGA",
          "izoh": "Eski monitorlar uchun"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"11\" y=\"18\" width=\"26\" height=\"16\" rx=\"2\"/><path d=\"M18 18v-5h12v5\"/></svg>",
          "nom": "LAN (RJ-45)",
          "izoh": "Kabel orqali internet"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"><circle cx=\"24\" cy=\"24\" r=\"10\"/><circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "Audio (3,5 mm)",
          "izoh": "Kolonka va quloqchin"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"><circle cx=\"24\" cy=\"25\" r=\"10\"/><path d=\"M24 11v11\"/></svg>",
          "nom": "Quvvat",
          "izoh": "Tok kabeli ulanadi"
        }
      ],
      "izoh": "Eng ko'p chalkashtiriladigan ikkitasi: <b>HDMI</b> &mdash; tasvir va ovoz, <b>LAN</b> &mdash; internet."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Qurilmalar uch guruhga bo'linadi",
      "tushuntirish": "Ba'zi qurilmalar ikkala vazifani ham bajaradi.",
      "ustunlar": [
        {
          "belgi": "⬅️",
          "sarlavha": "Kiritish",
          "turi": "brand",
          "royxat": [
            "Klaviatura",
            "Sichqoncha",
            "Mikrofon",
            "Skaner",
            "Veb-kamera"
          ]
        },
        {
          "belgi": "➡️",
          "sarlavha": "Chiqarish",
          "turi": "yaxshi",
          "royxat": [
            "Monitor",
            "Printer",
            "Kolonka",
            "Quloqchin",
            "Proyektor"
          ]
        },
        {
          "belgi": "🔁",
          "sarlavha": "Ikkalasi ham",
          "royxat": [
            "Sensorli ekran",
            "MFU (printer + skaner)",
            "Modem / router",
            "Tashqi disk"
          ]
        }
      ]
    },
    {
      "tur": "ikonka",
      "sarlavha": "Asosiy qurilmalar",
      "tushuntirish": "Busiz kompyuter ishlamaydi. To'rttasi &mdash; eng zarur to'plam.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"><rect x=\"15\" y=\"5\" width=\"18\" height=\"38\" rx=\"4\"/><path d=\"M21 13h6\"/><path d=\"M21 19h6\"/><circle cx=\"24\" cy=\"33\" r=\"3\"/></svg>",
          "nom": "Tizim bloki",
          "izoh": "Hisob-kitob markazi"
        },
        {
          "belgi": "🖥️",
          "nom": "Monitor",
          "izoh": "Natijani ko'rsatadi"
        },
        {
          "belgi": "⌨️",
          "nom": "Klaviatura",
          "izoh": "Matn va buyruq kiritadi"
        },
        {
          "belgi": "🖱️",
          "nom": "Sichqoncha",
          "izoh": "Ko'rsatadi va tanlaydi"
        }
      ],
      "izoh": "Ba'zi kompyuterlarda (masalan, <em>monoblok</em>) tizim bloki monitorga birlashtirilgan bo'ladi."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Qo'shimcha (tashqi) qurilmalar",
      "tushuntirish": "Zaruriyat bo'lsa ulanadi. Har biri ishni yengillashtiradi.",
      "elementlar": [
        {
          "belgi": "🖨️",
          "nom": "Printer",
          "izoh": "Qog'ozga chiqaradi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"7\" y=\"28\" width=\"34\" height=\"11\" rx=\"3\"/><path d=\"M12 28v-9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v9\"/><path d=\"M17 16V10h14v6\"/><path d=\"M13 33.5h11\"/><circle cx=\"34\" cy=\"33.5\" r=\"1.8\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "Skaner",
          "izoh": "Qog'ozni raqamlaydi"
        },
        {
          "belgi": "📽️",
          "nom": "Proyektor",
          "izoh": "Devorga katta tasvir"
        },
        {
          "belgi": "🔊",
          "nom": "Kolonka",
          "izoh": "Ovoz chiqaradi"
        },
        {
          "belgi": "📷",
          "nom": "Veb-kamera",
          "izoh": "Video va rasm"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><circle cx=\"22\" cy=\"24\" r=\"6.5\"/><circle cx=\"22\" cy=\"24\" r=\"1.6\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M34 20v8\"/></svg>",
          "nom": "Tashqi disk",
          "izoh": "Zaxira nusxa uchun"
        }
      ]
    },
    {
      "tur": "oyna",
      "sarlavha": "Qurilmalar menejeri (Device Manager)",
      "tushuntirish": "Kompyuterga ulangan barcha qurilmalar ro'yxati. Muammoli qurilma <b>sariq belgi</b> bilan ko'rinadi.",
      "oyna": {
        "nom": "Qurilmalar menejeri",
        "manzil": "Win + X → Qurilmalar menejeri",
        "ustunlar": [
          "Qurilma",
          "Holati"
        ],
        "qatorlar": [
          [
            "🖥️ Monitors",
            "✅ Yaxshi ishlayapti"
          ],
          [
            "⌨️ Keyboards",
            "✅ Yaxshi ishlayapti"
          ],
          [
            "🖱️ Mice and other pointing devices",
            "✅ Yaxshi ishlayapti"
          ],
          [
            "🖨️ Printers",
            "⚠️ Drayver kerak"
          ],
          [
            "🔊 Sound video and game controllers",
            "✅ Yaxshi ishlayapti"
          ],
          [
            "💽 Disk drives",
            "✅ Yaxshi ishlayapti"
          ]
        ]
      },
      "izoh": "Sariq uchburchakli belgi &mdash; qurilma to'g'ri ishlamayapti. Ko'pincha <b>drayver</b> o'rnatilmagan bo'ladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Printerni ulash va sozlash",
      "tushuntirish": "Yangi qurilma ulanganda tartib shu bo'ladi.",
      "elementlar": [
        {
          "nom": "Qurilmani yoqish",
          "izoh": "Printer quvvatga ulanadi va yoqiladi"
        },
        {
          "nom": "Kabelni ulash",
          "izoh": "USB yoki tarmoq kabeli kompyuterga ulanadi"
        },
        {
          "nom": "Windows qurilmani taniydi",
          "izoh": "Pastda \"Qurilma aniqlandi\" xabari chiqadi"
        },
        {
          "nom": "Drayverni o'rnatish",
          "izoh": "Ishlab chiqaruvchi saytidan yoki diskdan"
        },
        {
          "nom": "Sinab ko'rish",
          "izoh": "Bitta sahifa chop etib, ishlashini tekshirish"
        }
      ],
      "izoh": "Noutbuk va printer bir xil Wi-Fi tarmog'ida bo'lsa, <b>kabelsiz ham</b> chop etish mumkin."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Simli va simsiz qurilmalar",
      "tushuntirish": "Ikkalasining afzalligi va kamchiligi bor.",
      "ustunlar": [
        {
          "belgi": "🔌",
          "sarlavha": "Simli (kabelli)",
          "turi": "brand",
          "royxat": [
            "Aloqa barqaror",
            "Tezlik yuqori",
            "Quvvat kerak emas",
            "Kabellar chigal bo'ladi"
          ]
        },
        {
          "belgi": "📶",
          "sarlavha": "Simsiz",
          "turi": "yaxshi",
          "royxat": [
            "Kabel yo'q &mdash; tartibli",
            "Olib yurish qulay",
            "Batareya kerak",
            "Ba'zan aloqa uziladi"
          ]
        }
      ],
      "izoh": "Maktabda proyektor ko'pincha <b>kabel</b> bilan ulanadi &mdash; tasvir kechikmasligi uchun."
    },
    {
      "tur": "royxat",
      "sarlavha": "Qurilma ishlamasa &mdash; tekshirish tartibi",
      "tushuntirish": "Ko'p muammolar oddiy sababdan bo'ladi. Tartib bilan tekshirish kerak.",
      "elementlar": [
        {
          "belgi": "1️⃣",
          "nom": "Kabelni tekshirish",
          "izoh": "Ikki tomoni ham mahkam ulanganmi?"
        },
        {
          "belgi": "2️⃣",
          "nom": "Quvvatni tekshirish",
          "izoh": "Qurilma yoqilganmi, chiroq yonib turibdimi?"
        },
        {
          "belgi": "3️⃣",
          "nom": "Boshqa portni sinash",
          "izoh": "Boshqa USB uyasiga ulab ko'ring"
        },
        {
          "belgi": "4️⃣",
          "nom": "Boshqa kompyuterda sinash",
          "izoh": "Qurilmaning o'zi buzuqmi yoki yo'qmi?"
        },
        {
          "belgi": "5️⃣",
          "nom": "Drayverni tekshirish",
          "izoh": "Qurilmalar menejerida sariq belgi bormi?"
        },
        {
          "belgi": "6️⃣",
          "nom": "O'chirib, qayta yoqish",
          "izoh": "Qurilma va kompyuterni qayta ishga tushirish"
        }
      ],
      "izoh": "Agar shularning hammasi yordam bermasa &mdash; <b>o'qituvchiga yoki mutaxassisga</b> murojaat qilinadi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Chop etish navbati",
      "tushuntirish": "Bir necha hujjat chop etilsa, ular <b>navbatga</b> turadi. Navbatni shu oynadan ko'rish mumkin.",
      "oyna": {
        "nom": "HP LaserJet — Navbat",
        "manzil": "Sozlamalar → Bluetooth va qurilmalar → Printerlar",
        "ustunlar": [
          "Hujjat",
          "Holati",
          "Sahifalar"
        ],
        "qatorlar": [
          [
            "uyga-vazifa.docx",
            "Chop etilmoqda",
            "1 / 3"
          ],
          [
            "jadval.xlsx",
            "Navbatda",
            "—"
          ],
          [
            "taqdimot.pptx",
            "Navbatda",
            "—"
          ]
        ]
      },
      "izoh": "Xato ketgan bo'lsa, navbatni <b>tozalash</b> mumkin: har bir hujjatni o'ng tugma bilan o'chirish."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Tizim bloki va noutbuk qurilmalari",
      "tushuntirish": "Noutbukda ham xuddi shu qurilmalar bor, lekin ular kichik va birlashtirilgan.",
      "ustunlar": [
        {
          "belgi": "🖥️",
          "sarlavha": "Tizim bloki (stol)",
          "turi": "brand",
          "royxat": [
            "Qismlar katta va alohida",
            "Almashtirish oson",
            "Yangi qism qo'shish mumkin",
            "Sovutish yaxshi"
          ]
        },
        {
          "belgi": "💻",
          "sarlavha": "Noutbuk",
          "royxat": [
            "Hammasi bitta korpusda",
            "Klaviatura va ekran birlashgan",
            "Batareya bor",
            "Almashtirish qiyin va qimmat"
          ]
        }
      ],
      "izoh": "Noutbukda <b>xotira va disk</b> ko'p modellarda almashtiriladi, <b>protsessor va video karta</b> esa odatda o'zgarmaydi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Qurilma tanlashda nimaga qaraladi?",
      "tushuntirish": "Do'konda kompyuter tanlayotganda shu ko'rsatkichlarga e'tibor bering.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"14\" y=\"14\" width=\"20\" height=\"20\" rx=\"3\"/><rect x=\"20\" y=\"20\" width=\"8\" height=\"8\" rx=\"1.5\"/><path d=\"M20 14V7M28 14V7M20 34v7M28 34v7M14 20H7M14 28H7M34 20h7M34 28h7\"/></svg>",
          "nom": "Protsessor",
          "izoh": "Nomi va yadro soni: masalan, 4 yadro"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"16\" width=\"40\" height=\"14\" rx=\"2\"/><path d=\"M12 30v6M20 30v6M28 30v6M36 30v6\"/><path d=\"M12 21h5v5h-5zM21 21h5v5h-5zM30 21h5v5h-5z\"/></svg>",
          "nom": "RAM hajmi",
          "izoh": "Bugungi kun uchun kamida 8 GB"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"6\" y=\"13\" width=\"36\" height=\"22\" rx=\"4\"/><path d=\"M12 20h6M12 27h6M22 20h6M22 27h6M32 20h4M32 27h4\"/></svg>",
          "nom": "Disk turi",
          "izoh": "SSD &mdash; tez, HDD &mdash; arzon va katta"
        },
        {
          "belgi": "🖥️",
          "nom": "Ekran o'lchami",
          "izoh": "Dars uchun 15,6 dyuym qulay"
        },
        {
          "belgi": "🔋",
          "nom": "Batareya",
          "izoh": "Noutbuk uchun &mdash; kamida 4-5 soat"
        },
        {
          "belgi": "🔌",
          "nom": "Portlar soni",
          "izoh": "USB, HDMI, LAN bormi?"
        }
      ],
      "izoh": "Faqat \"arzon\" yoki \"qimmat\" ga qarab tanlash noto'g'ri &mdash; <b>maqsad</b>ga qarab tanlanadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Qaysi qurilma qaysi portga ulanadi?",
      "tushuntirish": "Har bir qurilmaning o'z ulagichi bor. Portlarning shakli har xil &mdash; shuning uchun noto'g'ri joyga ulab bo'lmaydi.",
      "elementlar": [
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><path d=\"M8 20h32v9l-5 6H13l-5-6z\"/><path d=\"M16 20v-5h16v5\"/></svg>",
          "nom": "Monitor / proyektor  →  HDMI",
          "izoh": "Tasvir va ovoz birga uzatiladi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"17\" width=\"30\" height=\"15\" rx=\"2\"/><path d=\"M14 22h8M14 27h8\"/></svg>",
          "nom": "Sichqoncha, klaviatura, flesh  →  USB",
          "izoh": "Eng universal port"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><rect x=\"11\" y=\"18\" width=\"26\" height=\"16\" rx=\"2\"/><path d=\"M18 18v-5h12v5\"/></svg>",
          "nom": "Internet kabeli  →  LAN (RJ-45)",
          "izoh": "Kabel orqali tarmoqqa ulaydi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"><circle cx=\"24\" cy=\"24\" r=\"10\"/><circle cx=\"24\" cy=\"24\" r=\"3\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "Kolonka, quloqchin  →  Audio",
          "izoh": "3,5 mm jak uyasi"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linejoin=\"round\"><path d=\"M8 19h32v10H8z\"/><circle cx=\"17\" cy=\"24\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"31\" cy=\"24\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/></svg>",
          "nom": "Eski monitor  →  VGA",
          "izoh": "Faqat tasvir, ovozsiz"
        },
        {
          "rasm": "<svg viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\"><circle cx=\"24\" cy=\"25\" r=\"10\"/><path d=\"M24 11v11\"/></svg>",
          "nom": "Quvvat kabeli  →  Power",
          "izoh": "Tok manbaiga ulanadi"
        }
      ],
      "izoh": "Portga <b>kuch ishlatib tiqish mumkin emas</b> &mdash; shakli to'g'ri kelmasa, boshqa port qidiriladi."
    }
  ],

  amaliy: [
    "<b>Win + Pause</b> tugmalarini bosib, Device Manager (Qurilmalar dispetcheri) ni oching va qurilmalar ro'yxatini ko'ring.",
    "Monitorga ulangan kabelni toping va uning turini aniqlang: HDMI, VGA yoki DisplayPort?",
    "Tizim blokining orqa tomonidagi portlarni sanang: nechta USB, nechta audio, nechta tarmoq porti bor?",
    "<code>cmd</code> da <code>wmic logicaldisk get caption,size,freespace</code> buyrug'ini bajaring va disklaringiz hajmini yozib oling.",
    "Fleshkani ulang, undan faylni nusxalang va <b>\"Xavfsiz chiqarish\"</b> tugmasi orqali uzib ko'ring.",
    "PowerShell da <code>Get-PnpDevice | Where-Object Status -ne 'OK'</code> buyrug'ini bajarib, muammoli qurilma bor-yo'qligini tekshiring.",
    "Darsdagi portlar jadvalidan foydalanib, yana 5 ta qurilma qaysi portga ulanishini daftaringizga yozing.",
  ],

  uyga: [
    {
      "savol": "Kompyuterning asosiy va qo'shimcha qurilmalarini ajratib yozing. Har biriga kamida 4 tadan misol keltiring.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Guruh</th><th>Misollar</th><th>Nega shunday</th></tr></thead><tbody><tr><td><b>Asosiy</b></td><td>Tizim bloki, monitor, klaviatura, sichqoncha</td><td>Busiz kompyuter ishlamaydi</td></tr><tr><td><b>Qo'shimcha</b></td><td>Printer, skaner, proyektor, kolonka, veb-kamera, tashqi disk</td><td>Zarur bo'lganda ulanadi</td></tr></tbody></table><p>Ba'zi qurilmalar (masalan, monoblok) asosiy qismlarni bitta korpusga birlashtiradi.</p>"
    },
    {
      "savol": "Tizim blokining ichidagi qismlarni sanang va har birining vazifasini bir qatordan yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ul><li><b>Anakart</b> &mdash; barcha qismlarni bog'laydi va tok yetkazadi;</li><li><b>Protsessor (CPU)</b> &mdash; hisob-kitobni bajaradi;</li><li><b>RAM</b> &mdash; ishlayotgan dasturlarni vaqtincha saqlaydi;</li><li><b>Video karta (GPU)</b> &mdash; tasvir va videoni hisoblaydi;</li><li><b>Disk (HDD/SSD)</b> &mdash; fayllarni doimiy saqlaydi;</li><li><b>Quvvat bloki</b> &mdash; rozetkadagi tokni kompyuterga moslaydi;</li><li><b>Sovutgich</b> &mdash; qizib ketishdan saqlaydi.</li></ul>"
    },
    {
      "savol": "Quyidagi qurilmalar qaysi portga ulanadi? Monitor, Sichqoncha, Internet kabeli, Quloqchin, Telefon, Proyektor.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Qurilma</th><th>Port</th></tr></thead><tbody><tr><td>Monitor</td><td>HDMI (yoki VGA)</td></tr><tr><td>Sichqoncha</td><td>USB</td></tr><tr><td>Internet kabeli</td><td>LAN (RJ-45)</td></tr><tr><td>Quloqchin</td><td>Audio (3,5 mm)</td></tr><tr><td>Telefon (zaryadlash)</td><td>USB</td></tr><tr><td>Proyektor</td><td>HDMI (yoki VGA)</td></tr></tbody></table>"
    },
    {
      "savol": "Printer ishlamayapti. Muammoni aniqlash uchun qanday bosqichlarni tekshirasiz? Kamida 5 bosqichni yozing.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ol><li>Printer <b>yoqilganmi</b> va chirog'i yonib turibdimi?</li><li>Kabel (yoki Wi-Fi) ulanishi <b>joyidami</b>?</li><li>Qog'oz va siyoh/kartrij <b>bormi</b>?</li><li>Kompyuterda printer <b>tanlanganmi</b> (standart printer)?</li><li>Chop etish <b>navbatida</b> eski xato hujjat qolib ketmaganmi?</li><li>Qurilmalar menejerida <b>sariq belgi</b> (drayver muammosi) yo'qmi?</li></ol>"
    },
    {
      "savol": "Daftaringizga 6 ta portning shaklini chizib, nomini va vazifasini yozing: USB, HDMI, VGA, LAN, Audio, Quvvat.",
      "tezlik": "Taxminiy vaqt: 12 daqiqa",
      "javob": "<pre><code>USB        HDMI         VGA          LAN         AUDIO       POWER\n+------+   +------+     +--------+   +------+    +-----+     +-----+\n| ____ |   |______|     | ● ● ●  |   |  __  |    |  ●  |     |  ●  |\n|______|   |      |     +--------+   +------+    +-----+     +-----+\n+------+   +------+     (3 qator)    (RJ-45)     (3,5mm)     (quvvat)\n to'rtburchak trapezoid   kichik       to'rtburchak  doira      doira\n                                      + qisqich</code></pre><p>Vazifalari: <b>USB</b> &mdash; universal qurilmalar; <b>HDMI</b> &mdash; tasvir va ovoz; <b>VGA</b> &mdash; faqat tasvir; <b>LAN</b> &mdash; internet kabeli; <b>Audio</b> &mdash; ovoz; <b>Quvvat</b> &mdash; tok kabeli.</p>"
    },
    {
      "savol": "Qurilmalar menejerini ochib (Win + X &rarr; Qurilmalar menejeri), kompyuterga ulangan 6 ta qurilmani ro'yxatga oling: nomi va holati bilan. Muammoli qurilma bormi?",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<p>Namuna ro'yxat:</p><table class=\"reja-table\"><thead><tr><th>Qurilma</th><th>Holati</th></tr></thead><tbody><tr><td>Monitors</td><td>✅ Yaxshi ishlayapti</td></tr><tr><td>Keyboards</td><td>✅ Yaxshi ishlayapti</td></tr><tr><td>Mice and other pointing devices</td><td>✅ Yaxshi ishlayapti</td></tr><tr><td>Sound, video and game controllers</td><td>✅ Yaxshi ishlayapti</td></tr><tr><td>Disk drives</td><td>✅ Yaxshi ishlayapti</td></tr><tr><td>Printers</td><td>⚠️ Drayver kerak bo'lishi mumkin</td></tr></tbody></table><p><b>Sariq uchburchak</b> belgisi &mdash; qurilma to'g'ri ishlamayapti. Ko'pincha drayverni yangilash kerak bo'ladi.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): kompyuter yig'ish uchun o'z budjetingizni tuzing. 5 000 000 so'm ichida qanday qismlar tanlaysiz? Sababini yozing.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<p>Namuna budjet (narxlar taxminiy):</p><table class=\"reja-table\"><thead><tr><th>Qism</th><th>Tanlov</th><th>Sabab</th></tr></thead><tbody><tr><td>Protsessor</td><td>4 yadro</td><td>Dars va o'yin uchun yetarli</td></tr><tr><td>RAM</td><td>8-16 GB</td><td>Brauzer va dasturlar birga ishlaydi</td></tr><tr><td>Disk</td><td>512 GB SSD</td><td>Tez yuklanadi, joy yetarli</td></tr><tr><td>Anakart</td><td>4 RAM uyali</td><td>Kelajakda kengaytirish mumkin</td></tr><tr><td>Quvvat bloki</td><td>500 W</td><td>Ehtiyot uchun zaxira quvvat</td></tr></tbody></table><p>Baholanadi: tanlov <b>maqsadga mos</b>mi va har biriga sabab yozilganmi.</p>"
    }
  ],

  test: [
    {
      savol: "Quyidagilardan qaysi biri <b>asosiy</b> qurilma hisoblanadi?",
      variantlar: ["Printer", "Proyektor", "Monitor", "Skaner"],
      togri: 2,
      izoh: "Monitor, tizim bloki, klaviatura va sichqoncha &mdash; asosiy qurilmalar.",
    },
    {
      savol: "Tizim blokining qaysi qismi barcha boshqa qismlarni bir-biriga bog'laydi?",
      variantlar: ["Protsessor", "Ona plata", "RAM", "Quvvat bloki"],
      togri: 1,
      izoh: "Ona plata (motherboard) &mdash; barcha qismlar o'rnatiladigan asosiy plata.",
    },
    {
      savol: "Printer va skanerning farqi nimada?",
      variantlar: [
        "Farqi yo'q",
        "Printer chiqaradi, skaner kiritadi",
        "Skaner chiqaradi, printer kiritadi",
        "Ikkalasi ham saqlash qurilmasi",
      ],
      togri: 1,
      izoh: "Printer ma'lumotni qog'ozga chiqaradi (chiqarish), skaner qog'ozni raqamlashtiradi (kiritish).",
    },
    {
      savol: "Ekran va proyektorni ulash uchun eng ko'p ishlatiladigan port qaysi?",
      variantlar: ["USB", "RJ-45", "HDMI", "3.5 mm jack"],
      togri: 2,
      izoh: "HDMI tasvirni (va ovozni) yuqori sifatda uzatadi.",
    },
    {
      savol: "Tizim blokini ochishdan oldin nima qilish <b>shart</b>?",
      variantlar: [
        "Suv sepish",
        "Tokdan uzish va statik zaryadni tushirish",
        "Darhol qismlarni sug'urib olish",
        "Ventilyatorni to'xtatish",
      ],
      togri: 1,
      izoh: "Tokdan uzmasdan ishlash xavfli. Statik zaryad esa nozik mikrosxemalarni buzadi.",
    },
    {
      savol: "MFP nima?",
      variantlar: [
        "Faqat chop etuvchi qurilma",
        "Ko'p funksiyali qurilma (chop etadi, skanerlaydi, nusxa ko'chiradi)",
        "Tashqi xotira qurilmasi",
        "Tarmoq kabeli",
      ],
      togri: 1,
      izoh: "MFP (Multi-Function Printer) bir necha vazifani bitta qurilmada bajaradi.",
    },
  ],

  lugat: [
    { soz: "Periferiya", izoh: "Qo'shimcha (tashqi) qurilmalar &mdash; printer, skaner va boshqalar." },
    { soz: "Ona plata", izoh: "Barcha qismlarni bog'lovchi asosiy plata." },
    { soz: "Quvvat bloki (PSU)", izoh: "Barcha qismlarga tok yetkazib beruvchi qurilma." },
    { soz: "GPU", izoh: "Videokarta &mdash; grafik ishlov berish qurilmasi." },
    { soz: "Port", izoh: "Qurilma ulanadigan ulanish nuqtasi (USB, HDMI...)." },
    { soz: "MFP", izoh: "Ko'p funksiyali printer: chop etadi, skanerlaydi, nusxa ko'chiradi." },
    { soz: "Drayver", izoh: "Qurilma bilan operatsion tizim o'rtasidagi aloqa dasturi." },
    { soz: "UPS", izoh: "Uzluksiz quvvat manbai &mdash; tok o'chganda vaqtincha quvvat beradi." },
    { soz: "Statik zaryad", izoh: "Tana yig'adigan elektr zaryadi; mikrosxemaga zarar yetkazadi." },
    { soz: "Device Manager", izoh: "Windowsdagi qurilmalarni boshqarish oynasi." },
  ],

  xatolar: [
    "Kabelni portga kuch bilan tiqish &mdash; port va kabel shikastlanadi.",
    "Fleshkani \"Xavfsiz chiqarish\" qilmasdan sug'urib olish &mdash; fayllar buzilishi mumkin.",
    "Tizim blokini tokdan uzmasdan ochish &mdash; elektr toki urishi xavfi.",
    "Qurilmani suyuqlik yoniga qo'yish &mdash; to'kilishi tizim blokini butunlay buzadi.",
    "Bir USB portga 5-6 ta qurilma ulash &mdash; tok yetmay, qurilmalar ishlamaydi.",
    "Printerning drayverini o'rnatmaslik &mdash; qurilma ulangan bo'lsa ham ishlamaydi.",
  ],

  keyingi:
    "Keyingi darsda <b>Internet, brauzerlar va elektron pochta</b> bilan ishlashni o'rganamiz: brauzer qanday ishlaydi, qidiruvni qanday samarali qilish kerak, elektron pochta yaratish va xat yozish qoidalari, xat xavfsizligi. Bugungi port va qurilma bilimlari Internetga ulanish mavzusida kerak bo'ladi.",
});
