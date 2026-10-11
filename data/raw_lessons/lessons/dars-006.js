/* 6-dars: Kompyuter xavfsizligi va antivirus dasturlari */

AVX.dars({
  id: "cs8-006",
  sarlavha: "Kompyuter xavfsizligi va antivirus dasturlari",
  kiritish:
    "Internet juda ko'p imkoniyat beradi &mdash; lekin u bilan birga <b>xavflar</b> ham keladi. Bugun zararli dasturlar (virus, troyan, ransomware) nima ekanini, antiviruslar qanday ishlashini, <b>kuchli parol</b> yasashni, 2FA nima ekanini va fleshka hamda pochtadan xavfsiz foydalanish qoidalarini o'rganamiz.",

  maqsad: [
    "Kompyuter xavfsizligi tushunchasini va asosiy qoidalarini bilish.",
    "Zararli dasturlarning turlarini ajratish: virus, troyan, spyware, ransomware.",
    "Antiviruslarning vazifasini va Windows Defender imkoniyatlarini tushunish.",
    "Kuchli parol yaratish va 2FA (ikki bosqichli tasdiqlash) ni qo'llash.",
    "Fleshka, Internet va elektron pochtadan xavfsiz foydalanish yo'llarini o'rganish.",
  ],

  natija: [
    "Zararli dasturlarni turiga qarab taniy oladi.",
    "Kuchli parol yasaydi va uni qayerda saqlashni biladi.",
    "Antivirus tekshiruvini mustaqil ishga tushira oladi.",
    "Shubhali fayl va havolani aniqlab, xavfsiz qaror chiqaradi.",
    "Fleshkani xavfsiz ochish va tozalash tartibini biladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: brauzer tugmalari, qidiruv operatorlari."],
    ["5-17 daq", "Mentor tushuntirishi", "\"Eshikni ochiq qoldiramizmi?\" &mdash; xavfsizlik nima uchun kerakligi."],
    ["17-30 daq", "Nazariya: zararli dasturlar", "Virus, troyan, spyware, ransomware, worm, adware. Jadval bilan ajratamiz."],
    ["30-42 daq", "Antiviruslar", "Qanday ishlaydi, qanday tekshirish kerak, Windows Defender."],
    ["42-56 daq", "Parol va 2FA", "Kuchli parol qoidalari, parolni qayerda saqlash, ikki bosqichli tasdiqlash."],
    ["56-72 daq", "Amaliyot: kod yozamiz", "Parol tekshiruvchi, hash bilan fayl tekshirish, firewall holati."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har bir o'quvchi o'z xavfsizlik rejasini yozadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Uyingizni qanday himoya qilasiz?",
      matn: [
        "Savol beraman: kechasi uydan chiqayotganda eshikni qulflaysizmi? Nega? Chunki o'g'ri kirishi mumkin. Derazani ham yopasiz. Hatto qimmat narsalaringizni ko'zga tashlanadigan joyga qo'ymaysiz.",
        "Kompyuter ham xuddi sizning uyingiz. Uning ichida <em>sizning ma'lumotlaringiz</em> bor: rasmlar, hujjatlar, parollar, yozishmalar. Va Internet &mdash; bu katta shahar, unda faqat yaxshi odamlar yashamaydi.",
        "Xavfsizlik &mdash; bu qo'rqish emas, balki <b>to'g'ri odat</b>. Bugun biz shu odatlarni o'rganamiz. Oxirida o'zingiz \"kompyuterimni qanday himoya qilaman\" degan savolga to'liq javob bera olasiz.",
      ],
    },
    {
      sarlavha: "2. Zararli dasturlar &mdash; ular bir xil emas",
      matn: [
        "Ko'pchilik hammasini \"virus\" deb ataydi. Aslida xavfli dasturlarning turlari bor va ularning ishi boshqacha.",
        "<b>Virus</b> &mdash; boshqa fayllarga yopishib tarqaladi. <b>Troyan</b> &mdash; foydali dastur niqobida keladi, lekin orqa tomondan zarar qiladi. <b>Spyware</b> &mdash; sizni kuzatadi, klaviaturada terganingizni yozib oladi. <b>Ransomware</b> &mdash; fayllaringizni shifrlab, pul so'raydi.",
        "Nega bilib olish kerak? Chunki <em>har bir turga qarshi kurash boshqacha.</em> Ammo umumiy qoida bitta: <b>noma'lum faylni ochmaslik</b> va <b>ishonchsiz manbadan yuklamaslik.</b>",
      ],
    },
    {
      sarlavha: "3. Parol &mdash; uyingizning kaliti",
      matn: [
        "Endi eng ko'p qilinadigan xatoni aytaman: parol sifatida <code>123456</code>, <code>qwerty</code>, <code>parol</code> yoki tug'ilgan sanani ishlatish. Bunday parolni kompyuter <em>bir soniyada</em> topadi.",
        "Kuchli parol qanday bo'ladi? Uchta shart: <b>uzun</b> (12+ belgi), <b>aralash</b> (katta-kichik harf, raqam, belgi) va <b>takrorlanmagan</b> (har bir sayt uchun alohida).",
        "Eng qulay usul &mdash; <em>parol jumlasi</em>: <code>Quyosh@2026#Maktab</code> yoki <code>Mening-Kitobim-3!Sevimli</code>. Bunday parolni yodda saqlash oson, topish esa juda qiyin. Va hech qachon parolni qog'ozga yozib monitorga yopishtirmang!",
      ],
    },
    {
      sarlavha: "4. 2FA &mdash; ikkinchi qulf",
      matn: [
        "Tasavvur qiling, o'g'ri kalitingizni topdi. Eshik ochiladimi? Agar ikkinchi qulf bo'lsa &mdash; yo'q. <b>2FA (ikki bosqichli tasdiqlash)</b> &mdash; aynan shu ikkinchi qulf.",
        "U qanday ishlaydi? Parolingizni kiritdingiz &mdash; tamom emas. Telefoningizga 6 xonali kod keladi yoki ilovada kod paydo bo'ladi. Faqat shu kodni kiritgandan keyin hisobingiz ochiladi.",
        "Ya'ni parolingiz o'g'irlansa ham, jinoyatchi telefoningizsiz kira olmaydi. Shu sababli <b>pochta, Telegram va barcha muhim hisoblarda 2FA ni yoqing.</b> Bu &mdash; 5 daqiqalik ish, lekin butun hayotingizni himoya qiladi.",
      ],
    },
    {
      sarlavha: "5. Fleshka: eng ko'p tarqaladigan xavf",
      matn: [
        "Maktabda fleshka bilan fayl almashish odatiy hol. Lekin bilasizmi, viruslarning katta qismi aynan fleshka orqali tarqaladi? Sababi oddiy: fleshka bir kompyuterdan ikkinchisiga o'tadi.",
        "Fleshkani ulaganingizda <code>autorun.inf</code> nomli fayl bo'lsa &mdash; bu shubhali belgi. Ba'zi viruslar shu fayl orqali avtomatik ishga tushadi.",
        "Qoida: <b>Windowsda avtomatik ishga tushirish (Autoplay) ni o'chirib qo'ying.</b> Fleshkani ulaganda hech narsa avtomatik ochilmasin. Va har doim, hatto o'z fleshkangizni ham, <em>avval antivirus bilan tekshirib</em>, keyin oching.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Zararli dasturlar turlari",
      matn: [
        "Zararli dasturlarni (malware) turlarga ajratib o'rganish muhim &mdash; chunki belgilari va himoya usullari farq qiladi.",
      ],
      jadval: [
        ["Turi", "Nima qiladi", "Belgisi"],
        ["Virus", "Boshqa fayllarga yopishib tarqaladi va ularni buzadi", "Fayllar ishlamaydi, hajmi o'zgaradi"],
        ["Troyan", "Foydali dastur niqobida keladi, orqadan zarar qiladi", "O'ynamaydigan o'yin, soxta dastur"],
        ["Spyware", "Kuzatadi, parol va tugmalarni yozib oladi", "Kamera o'zi yonadi, internet sekinlashadi"],
        ["Ransomware", "Fayllarni shifrlab, pul talab qiladi", "Barcha fayllar ochilmaydi, to'lov talab xati"],
        ["Worm (chuvalchang)", "Tarmoq orqali o'zi ko'payib tarqaladi", "Tarmoq sekinlashadi, do'stlardan xat keladi"],
        ["Adware", "Reklama chiqaradi, brauzerni o'zgartiradi", "Bosh sahifa o'zgargan, reklama oynalari"],
        ["Keylogger", "Har bir bosilgan tugmani yozib boradi", "Klaviatura kechikadi, noma'lum jarayon"],
      ],
      callout: {
        turi: "danger",
        sarlavha: "Eng muhim qoida",
        matn: "Agar kompyuteringizda <b>ransomware</b> bo'lsa &mdash; to'lov qilmang. To'lov fayllarni qaytarishga kafolat bermaydi, aksincha jinoyatchilarni rag'batlantiradi. Yagona haqiqiy himoya &mdash; <b>zaxira nusxa (backup)</b>.",
      },
    },
    {
      sarlavha: "2. Antivirus dasturlari",
      matn: [
        "Antivirus &mdash; zararli dasturlarni topib, zararsizlantiruvchi dastur. U quyidagi usullarda ishlaydi.",
      ],
      royhat: [
        "<b>Imzo (signature) usuli:</b> ma'lum viruslarning \"barmoq izi\" bilan solishtiradi &mdash; tez, lekin yangi viruslarni topa olmaydi.",
        "<b>Evristik tahlil:</b> dasturning <em>xatti-harakatini</em> kuzatadi &mdash; noma'lum virusni ham sezishi mumkin.",
        "<b>Real vaqt himoyasi:</b> fayl ochilayotganda darhol tekshiradi.",
        "<b>To'liq tekshiruv (Full Scan):</b> butun diskni chuqur tekshiradi &mdash; sekin, lekin puxta.",
      ],
      jadval: [
        ["Antivirus", "Narxi", "Izoh"],
        ["Windows Defender", "Bepul", "Windows ichida o'rnatilgan, asosiy himoya uchun yetarli"],
        ["Kaspersky", "Pulli (sinov bepul)", "Kuchli himoya, ko'p funksiya"],
        ["ESET NOD32", "Pulli", "Yengil, tez ishlaydi"],
        ["Avast / AVG", "Bepul versiyasi bor", "Oddiy foydalanuvchi uchun mos"],
        ["Malwarebytes", "Bepul versiyasi bor", "Spyware va adware tozalashda kuchli"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Diqqat",
        matn: "Bir vaqtda <b>ikkita antivirus</b> o'rnatish tavsiya etilmaydi &mdash; ular bir-biriga xalaqit beradi va kompyuterni sekinlashtiradi. Bitta antivirus + vaqti-vaqti bilan Malwarebytes bilan tekshirish &mdash; eng yaxshi usul.",
      },
    },
    {
      sarlavha: "3. Kuchli parol qoidalari",
      matn: [
        "Parol kuchini quyidagi qoidalar orqali baholash mumkin.",
      ],
      jadval: [
        ["Parol", "Uzunlik", "Topilish vaqti", "Baho"],
        ["123456", "6", "Bir zumda", "Juda yomon"],
        ["parol2026", "9", "2 soniya", "Yomon"],
        ["Kallibek2010", "11", "3 daqiqa", "O'rtacha"],
        ["Quyosh@2026#Maktab", "18", "million yillar", "Juda kuchli"],
        ["Mening-Kitobim-3!Sevimli", "24", "hisoblab bo'lmaydi", "Eng kuchli"],
      ],
      royhat: [
        "Kamida <b>12 belgi</b> bo'lsin.",
        "<b>Katta va kichik harf</b>, raqam, belgi (@ # ! -) aralash bo'lsin.",
        "Shaxsiy ma'lumot (ism, tug'ilgan sana, telefon) ishlatilmasin.",
        "<b>Har bir sayt uchun alohida parol</b> &mdash; bittasi ochilsa, qolganlari xavfsiz qoladi.",
        "Parolni qog'ozga yozib, ko'zga tashlanadigan joyga qo'ymaslik.",
        "Parolni hech kimga (hatto do'stga) aytmaslik.",
      ],
    },
    {
      sarlavha: "4. Xavfsizlik qoidalari: fleshka, Internet, pochta",
      matn: [
        "Quyidagi qoidalar &mdash; amalda eng ko'p yordam beradigan 10 ta odat.",
      ],
      royhatTuri: "ol",
      royhat: [
        "<b>Fleshkani</b> har doim avval antivirusdan o'tkazing, keyin oching. Windowsda Autoplay ni o'chiring.",
        "Noma'lum <b>.exe</b> faylni hech qachon ochmang &mdash; hatto do'stingiz yuborgan bo'lsa ham (uning kompyuteri viruslangan bo'lishi mumkin).",
        "<b>Shubhali havolani</b> bosmang; domen nomini diqqat bilan o'qing (g00gle.com kabi hiylalarga e'tibor bering).",
        "Bepul Wi-Fi'da bank va pochta bilan ishlamang &mdash; ma'lumot ushlanishi mumkin.",
        "Dasturni faqat <b>rasmiy saytdan</b> yuklab oling (kracksiz, aktivatorsiz).",
        "Muhim fayllarni <b>zaxira</b> qilib qo'ying: tashqi disk yoki bulutga.",
        "Operatsion tizim va dasturlarni <b>yangilab</b> turing &mdash; yangilanishlar xavfsizlik teshiklarini yopadi.",
        "Muhim hisoblarda <b>2FA</b> ni yoqing.",
        "Bank kartasining <b>CVV kodi</b> va SMS kodini hech kimga aytmang.",
        "Kompyuterdan uzoqlashayotganda <b>Win + L</b> bilan bloklang.",
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "ikonka",
      "sarlavha": "Kompyuterga qanday xavflar bor?",
      "tushuntirish": "Xavf har doim ham \"virus\" deb ataladi, lekin ularning turlari boshqa-boshqa va zarari ham har xil.",
      "elementlar": [
        {
          "belgi": "🦠",
          "nom": "Virus",
          "izoh": "Fayllarga yopishib, ularni buzadi"
        },
        {
          "belgi": "🐴",
          "nom": "Troyan",
          "izoh": "Foydali dastur niqobida keladi"
        },
        {
          "belgi": "🎣",
          "nom": "Fishing",
          "izoh": "Parolni aldab olishga urinadi"
        },
        {
          "belgi": "🔒",
          "nom": "Ransomware",
          "izoh": "Fayllarni bloklab, pul so'raydi"
        },
        {
          "belgi": "👁️",
          "nom": "Shpion (spyware)",
          "izoh": "Yashirin kuzatib, ma'lumot yuboradi"
        },
        {
          "belgi": "📧",
          "nom": "Spam",
          "izoh": "Keraksiz xat va reklama oqimi"
        }
      ],
      "izoh": "Eng ko'p uchraydigan xavf &mdash; <b>fishing</b>. U texnik emas, <em>odamni aldaydigan</em> usul."
    },
    {
      "tur": "sxema",
      "sarlavha": "Virus kompyuterga qanday kiradi?",
      "tushuntirish": "Virus o'zi \"kelib qolmaydi\" &mdash; uni kompyuterga <b>biz o'zimiz</b> olib kiramiz. To'rt asosiy yo'l bor.",
      "svg": "<svg viewBox=\"0 0 700 340\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Virus kirish yollari\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"338\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx6a\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#ff6b6b\"/></marker>\n  </defs>\n  <rect x=\"270\" y=\"130\" width=\"160\" height=\"86\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"164\" fill=\"#e6ecff\" font-size=\"14.5\" font-weight=\"700\" text-anchor=\"middle\">KOMPYUTER</text>\n  <text x=\"350\" y=\"188\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">xavf ostida</text>\n  <rect x=\"24\" y=\"30\" width=\"180\" height=\"56\" rx=\"10\" fill=\"#1b2334\" stroke=\"#ff6b6b\"/>\n  <text x=\"114\" y=\"54\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">📧 Pochta ilovasi</text>\n  <text x=\"114\" y=\"72\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">\"hisobot.pdf.exe\"</text>\n  <rect x=\"496\" y=\"30\" width=\"180\" height=\"56\" rx=\"10\" fill=\"#1b2334\" stroke=\"#ff6b6b\"/>\n  <text x=\"586\" y=\"54\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">🌐 Shubhali sayt</text>\n  <text x=\"586\" y=\"72\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">\"yuklab oling\" tugmasi</text>\n  <rect x=\"24\" y=\"252\" width=\"180\" height=\"56\" rx=\"10\" fill=\"#1b2334\" stroke=\"#ff6b6b\"/>\n  <text x=\"114\" y=\"276\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">🔌 Begona fleshka</text>\n  <text x=\"114\" y=\"294\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">topilgan yoki sovg'a</text>\n  <rect x=\"496\" y=\"252\" width=\"180\" height=\"56\" rx=\"10\" fill=\"#1b2334\" stroke=\"#ff6b6b\"/>\n  <text x=\"586\" y=\"276\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\">⬇️ Buzilgan dastur</text>\n  <text x=\"586\" y=\"294\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">\"bepul\" o'yin va cracklar</text>\n  <line x1=\"204\" y1=\"72\" x2=\"290\" y2=\"128\" stroke=\"#ff6b6b\" stroke-width=\"2.5\" marker-end=\"url(#avx6a)\"/>\n  <line x1=\"496\" y1=\"72\" x2=\"410\" y2=\"128\" stroke=\"#ff6b6b\" stroke-width=\"2.5\" marker-end=\"url(#avx6a)\"/>\n  <line x1=\"204\" y1=\"272\" x2=\"290\" y2=\"222\" stroke=\"#ff6b6b\" stroke-width=\"2.5\" marker-end=\"url(#avx6a)\"/>\n  <line x1=\"496\" y1=\"272\" x2=\"410\" y2=\"222\" stroke=\"#ff6b6b\" stroke-width=\"2.5\" marker-end=\"url(#avx6a)\"/>\n  <text x=\"350\" y=\"324\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Har bir yo'lda himoya bir xil: ochishdan oldin o'ylash va tekshirish.</text>\n</svg>"
    },
    {
      "tur": "qiyos",
      "sarlavha": "Kuchsiz va kuchli parol",
      "tushuntirish": "Parol kuchi uning <b>uzunligi</b> va <b>turli belgilaridan</b> kelib chiqadi.",
      "ustunlar": [
        {
          "belgi": "❌",
          "sarlavha": "Kuchsiz parollar",
          "turi": "yomon",
          "royxat": [
            "<code>123456</code> &mdash; eng ko'p ishlatiladi",
            "<code>parol</code> &mdash; lug'atdagi so'z",
            "<code>qwerty</code> &mdash; klaviatura tartibi",
            "<code>kallibek2012</code> &mdash; ism va yil",
            "<code>aaaaaa</code> &mdash; takrorlanuvchi belgi"
          ]
        },
        {
          "belgi": "✅",
          "sarlavha": "Kuchli parol",
          "turi": "yaxshi",
          "royxat": [
            "Kamida <b>12 ta belgi</b>",
            "Katta va kichik harflar aralash",
            "Raqam va belgi bor: <code>!</code>, <code>#</code>, <code>%</code>",
            "Shaxsiy ma'lumot yo'q",
            "Misol: <code>Olma#2026Yoz!</code>"
          ]
        }
      ],
      "izoh": "Parolni hech kimga aytmang &mdash; hatto <b>do'stingizga</b> ham. Bir xil parolni bir necha joyda ishlatmang."
    },
    {
      "tur": "royxat",
      "sarlavha": "Parol va hisob xavfsizligi qoidalari",
      "tushuntirish": "Bu qoidalarga rioya qilish eng ko'p uchraydigan muammolarni oldini oladi.",
      "elementlar": [
        {
          "belgi": "🔑",
          "nom": "Uzun va aralash parol",
          "izoh": "Kamida 12 belgi, harf + raqam + belgi"
        },
        {
          "belgi": "🚫",
          "nom": "Shaxsiy ma'lumot yo'q",
          "izoh": "Ism, tug'ilgan yil, telefon raqami ishlatilmasin"
        },
        {
          "belgi": "♻️",
          "nom": "Har joyda boshqa parol",
          "izoh": "Bitta parol buzilsa, qolganlari saqlanadi"
        },
        {
          "belgi": "🤐",
          "nom": "Hech kimga aytmaslik",
          "izoh": "Hatto o'qituvchi ham parolingizni so'ramaydi"
        },
        {
          "belgi": "🔄",
          "nom": "Vaqti-vaqti bilan almashtirish",
          "izoh": "Yiliga kamida bir marta"
        },
        {
          "belgi": "🚪",
          "nom": "Hisobdan chiqish",
          "izoh": "Umumiy kompyuterda ishlagandan keyin <b>chiqib ketish</b>"
        }
      ],
      "izoh": "Agar parolingiz o'g'irlangan bo'lsa &mdash; darhol almashtiring va <b>2FA</b> ni yoqing."
    },
    {
      "tur": "qadam",
      "sarlavha": "Kuchli parolni qanday o'ylab topish mumkin?",
      "tushuntirish": "Yodda qoladigan, lekin topib bo'lmaydigan parol yasash usuli.",
      "elementlar": [
        {
          "nom": "3-4 ta tasodifiy so'z tanlash",
          "izoh": "Masalan: olma, yoz, daryo, kitob"
        },
        {
          "nom": "Harflarni aralashtirish",
          "izoh": "Bosh harflar qo'shish: Olma Yoz Daryo Kitob"
        },
        {
          "nom": "Raqam qo'shish",
          "izoh": "Yil emas, tasodifiy son: 47"
        },
        {
          "nom": "Belgi qo'shish",
          "izoh": "So'zlar orasiga <code>#</code> yoki <code>!</code>"
        },
        {
          "nom": "Tekshirish",
          "izoh": "Natija: <code>Olma#Yoz47Daryo!</code> &mdash; uzun va yodda qoladi"
        }
      ],
      "izoh": "Bunday parolni \"topib bo'lmaydi\", lekin siz uni bir necha kunda eslab qolasiz."
    },
    {
      "tur": "oyna",
      "sarlavha": "Antivirus dasturining oynasi",
      "tushuntirish": "Antivirus kompyuterni doimiy kuzatib turadi. Tekshiruv natijasi shu oynada ko'rinadi.",
      "oyna": {
        "nom": "Windows xavfsizligi — Virus va tahdid himoyasi",
        "manzil": "Himoya tarixi  |  Virus va tahdid  |  Hisob himoyasi",
        "ustunlar": [
          "Bo'lim",
          "Holati",
          "Nima qilinadi"
        ],
        "qatorlar": [
          [
            "🛡️ Joriy tahdidlar",
            "✅ Tahdid yo'q",
            "Hech narsa kerak emas"
          ],
          [
            "🔄 Virus bazasi",
            "⚠️ 3 kun yangilanmagan",
            "«Yangilash» tugmasini bosish"
          ],
          [
            "🔍 Tezkor tekshiruv",
            "Oxirgi: 6 kun oldin",
            "Haftada bir marta bajarish"
          ],
          [
            "📁 Karantin",
            "2 ta fayl",
            "Zararsiz ekaniga ishonch hosil qilib, o'chirish"
          ]
        ]
      },
      "izoh": "Antivirusni <b>o'chirib qo'ymang</b> &mdash; sekinlashtirayotgandek tuyulsa ham, u himoya qiladi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Antivirus nima qiladi?",
      "tushuntirish": "Antivirusning vazifasi faqat \"virus topish\" emas.",
      "elementlar": [
        {
          "belgi": "🔍",
          "nom": "Fayllarni tekshiradi",
          "izoh": "Yuklangan va ochilayotgan har bir faylni"
        },
        {
          "belgi": "🛡️",
          "nom": "Himoya qiladi",
          "izoh": "Zararli sayt va fayllarni darhol to'xtatadi"
        },
        {
          "belgi": "📦",
          "nom": "Karantinga oladi",
          "izoh": "Shubhali faylni o'chiradi emas, ajratib qo'yadi"
        },
        {
          "belgi": "🔄",
          "nom": "Bazasini yangilaydi",
          "izoh": "Har kuni yangi virus imzolari qo'shiladi"
        },
        {
          "belgi": "⏱️",
          "nom": "Rejali tekshiruv",
          "izoh": "Belgilangan vaqtda to'liq skanerlaydi"
        },
        {
          "belgi": "📊",
          "nom": "Hisobot beradi",
          "izoh": "Nima topilganini tarixda ko'rsatadi"
        }
      ],
      "izoh": "Bepul antiviruslar ham bor: <b>Windows Defender</b> (o'rnatilgan), Avast, Kaspersky Free. Faqat rasmiy saytdan!"
    },
    {
      "tur": "sxema",
      "sarlavha": "Fishing xatni qanday taniydi?",
      "tushuntirish": "Fishing xat \"rasmiy\" ko'rinadi, lekin ichida doim bir nechta shubhali belgi bo'ladi.",
      "svg": "<svg viewBox=\"0 0 700 360\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Fishing xat belgilari\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"358\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"40\" y=\"34\" width=\"620\" height=\"220\" rx=\"10\" fill=\"#1b2334\" stroke=\"#2b3550\"/>\n  <rect x=\"40\" y=\"34\" width=\"620\" height=\"34\" rx=\"10\" fill=\"#232d45\"/>\n  <text x=\"58\" y=\"56\" fill=\"#e6ecff\" font-size=\"12.5\">Kimdan: <tspan fill=\"#ff6b6b\">xavfsizlik@bank-himoya.uz</tspan></text>\n  <text x=\"58\" y=\"94\" fill=\"#e6ecff\" font-size=\"15\" font-weight=\"700\">Sizning hisobingiz bloklandi!</text>\n  <text x=\"58\" y=\"122\" fill=\"#93a0bd\" font-size=\"12.5\">Darhol havolani bosing va ma'lumotlaringizni tasdiqlang.</text>\n  <text x=\"58\" y=\"144\" fill=\"#93a0bd\" font-size=\"12.5\">Aks holda 24 soat ichida hisob o'chiriladi.</text>\n  <rect x=\"58\" y=\"164\" width=\"240\" height=\"34\" rx=\"8\" fill=\"#4f8cff\" opacity=\"0.85\"/>\n  <text x=\"178\" y=\"186\" fill=\"#ffffff\" font-size=\"12.5\" text-anchor=\"middle\">http://bank-himoya.uz-verify.xyz</text>\n  <text x=\"58\" y=\"226\" fill=\"#93a0bd\" font-size=\"12\">Hurmat bilan, «Bank» xavfsizlik xizmati</text>\n  <circle cx=\"58\" cy=\"48\" r=\"11\" fill=\"#ff6b6b\"/><text x=\"58\" y=\"52\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\">1</text>\n  <circle cx=\"666\" cy=\"94\" r=\"11\" fill=\"#ff6b6b\"/><text x=\"666\" y=\"98\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\">2</text>\n  <circle cx=\"666\" cy=\"134\" r=\"11\" fill=\"#ff6b6b\"/><text x=\"666\" y=\"138\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\">3</text>\n  <circle cx=\"320\" cy=\"181\" r=\"11\" fill=\"#ff6b6b\"/><text x=\"320\" y=\"185\" fill=\"#fff\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"700\">4</text>\n  <text x=\"60\" y=\"284\" fill=\"#ff6b6b\" font-size=\"12\">1 &mdash; Yuboruvchi manzil rasmiy domenga o'xshaydi, lekin boshqa;</text>\n  <text x=\"60\" y=\"304\" fill=\"#ff6b6b\" font-size=\"12\">2 &mdash; Qo'rqitish va shoshirish (\"bloklandi!\", \"24 soat\");</text>\n  <text x=\"60\" y=\"324\" fill=\"#ff6b6b\" font-size=\"12\">3 &mdash; Shaxsiy ma'lumot so'ralmoqda (bank bunday so'ramaydi);</text>\n  <text x=\"60\" y=\"344\" fill=\"#ff6b6b\" font-size=\"12\">4 &mdash; Havola <tspan fill=\"#e6ecff\">http</tspan> va notanish domen <tspan fill=\"#e6ecff\">.xyz</tspan>.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Shubhali xatning belgilari",
      "tushuntirish": "Xatni ochishdan oldin shu 6 ta belgiga qarang. Bittasi bo'lsa ham &mdash; ehtiyot bo'ling.",
      "elementlar": [
        {
          "belgi": "🎭",
          "nom": "Tanish nom, notanish manzil",
          "izoh": "\"Bank\" deb yozilgan, lekin manzil gmail.com"
        },
        {
          "belgi": "⏰",
          "nom": "Shoshirish",
          "izoh": "\"Darhol!\", \"24 soat ichida!\", \"Aks holda...\""
        },
        {
          "belgi": "🏆",
          "nom": "Oson yutuq",
          "izoh": "\"Siz yutdingiz!\" &mdash; bepul hech narsa bo'lmaydi"
        },
        {
          "belgi": "🔗",
          "nom": "G'alati havola",
          "izoh": "Domen oxiri .xyz, .top, ko'p chiziqcha"
        },
        {
          "belgi": "📎",
          "nom": "Kutilmagan fayl",
          "izoh": "Siz so'ramagan ilova yoki hujjat"
        },
        {
          "belgi": "🔑",
          "nom": "Ma'lumot so'rash",
          "izoh": "Parol, karta raqami, SMS kod &mdash; hech qachon!"
        }
      ],
      "izoh": "Shubha bo'lsa: <b>havolani bosmang</b>, <b>faylni ochmang</b>, tashkilotga o'zingiz qo'ng'iroq qilib tekshiring."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Rasmiy manba va soxta manba",
      "tushuntirish": "Dasturni yuklashda faqat ishlab chiqaruvchining rasmiy sayti ishlatiladi.",
      "ustunlar": [
        {
          "belgi": "✅",
          "sarlavha": "Rasmiy manba",
          "turi": "yaxshi",
          "royxat": [
            "Ishlab chiqaruvchi sayti: <b>microsoft.com</b>",
            "Ilova do'koni: Microsoft Store",
            "Saytda aloqa va litsenziya bor",
            "Yangilanish o'zi keladi"
          ]
        },
        {
          "belgi": "❌",
          "sarlavha": "Soxta manba",
          "turi": "yomon",
          "royxat": [
            "\"Bepul, tez, ro'yxatdan o'tmasdan\" saytlar",
            "Fayl nomi <b>.exe</b> bilan tugaydi",
            "Bir vaqtda 5 ta dastur o'rnatiladi",
            "Brauzerda reklama oynalari ochiladi"
          ]
        }
      ],
      "izoh": "Bepul dastur ko'p bo'ladi &mdash; lekin <b>manba</b> ishonchli bo'lishi shart."
    },
    {
      "tur": "qadam",
      "sarlavha": "Ikki bosqichli himoya (2FA) yoqish",
      "tushuntirish": "2FA &mdash; parol o'g'irlansa ham hisobni himoya qiladi. Ikkinchi qadam: SMS kod yoki ilovadagi kod.",
      "elementlar": [
        {
          "nom": "Hisob sozlamalarini ochish",
          "izoh": "Masalan, Google yoki pochta hisobi"
        },
        {
          "nom": "«Xavfsizlik» bo'limini tanlash",
          "izoh": "Security yoki Himoya bo'limi"
        },
        {
          "nom": "«Ikki bosqichli tasdiqlash» ni yoqish",
          "izoh": "2-Step Verification"
        },
        {
          "nom": "Telefon raqamini ulash",
          "izoh": "SMS kod keladi yoki ilova ulanadi"
        },
        {
          "nom": "Zaxira kodlarni saqlash",
          "izoh": "Telefon yo'qolsa, shu kodlar bilan kiriladi"
        }
      ],
      "izoh": "2FA yoqilgandan keyin parolni bilsa ham, <b>kodni bilmagan odam kira olmaydi</b>."
    },
    {
      "tur": "royxat",
      "sarlavha": "Zaxira nusxa: 3-2-1 qoidasi",
      "tushuntirish": "Fayllaringizni yo'qotmaslik uchun eng ishonchli qoida. Uchta qoida &mdash; uchta raqam.",
      "elementlar": [
        {
          "belgi": "3️⃣",
          "nom": "3 ta nusxa",
          "izoh": "Asl fayl + 2 ta zaxira nusxa"
        },
        {
          "belgi": "2️⃣",
          "nom": "2 xil vosita",
          "izoh": "Masalan: tashqi disk + bulutli saqlash"
        },
        {
          "belgi": "1️⃣",
          "nom": "1 tasi boshqa joyda",
          "izoh": "Uydan tashqarida (bulutda) saqlanadi"
        },
        {
          "belgi": "🗓️",
          "nom": "Muntazam yangilash",
          "izoh": "Haftada yoki oyda bir marta"
        },
        {
          "belgi": "🧪",
          "nom": "Tiklashni sinash",
          "izoh": "Zaxira ishlayotganiga ishonch hosil qilish"
        }
      ],
      "izoh": "Misol: hujjat <b>kompyuterda</b> + <b>flesh xotirada</b> + <b>bulutda</b> = 3-2-1 bajarildi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Kompyuterga virus kirgan bo'lsa nima qilinadi?",
      "tushuntirish": "Vahimaga tushmasdan, tartib bilan harakat qilish kerak.",
      "elementlar": [
        {
          "nom": "Kompyuterni internetdan uzish",
          "izoh": "Virus tashqariga ma'lumot yubormasin"
        },
        {
          "nom": "Antivirusni yangilash",
          "izoh": "Eski baza yangi virusni topmaydi"
        },
        {
          "nom": "To'liq tekshiruv boshlash",
          "izoh": "Tezkor emas, <b>to'liq</b> (Full scan)"
        },
        {
          "nom": "Topilganlarni karantinga olish",
          "izoh": "Antivirus taklif qilgan amalni bajarish"
        },
        {
          "nom": "Parollarni almashtirish",
          "izoh": "Boshqa qurilmadan turib almashtirish"
        },
        {
          "nom": "Mutaxassisga murojaat",
          "izoh": "Tiklansa ham, tekshirib qo'yilsin"
        }
      ]
    },
    {
      "tur": "ikonka",
      "sarlavha": "Xavfsizlikni oshiruvchi kundalik odatlar",
      "tushuntirish": "Xavfsizlik &mdash; bir martalik ish emas, har kungi odat.",
      "elementlar": [
        {
          "belgi": "🔄",
          "nom": "Yangilash",
          "izoh": "Windows va dasturlarni vaqtida yangilash"
        },
        {
          "belgi": "💾",
          "nom": "Zaxiralash",
          "izoh": "Muhim fayllarni nusxalab qo'yish"
        },
        {
          "belgi": "🔍",
          "nom": "Tekshirish",
          "izoh": "Flesh va yuklamalarni antivirus bilan"
        },
        {
          "belgi": "🚪",
          "nom": "Chiqish",
          "izoh": "Umumiy kompyuterdan hisobdan chiqish"
        },
        {
          "belgi": "🤔",
          "nom": "O'ylash",
          "izoh": "Havola yoki faylni ochishdan oldin"
        },
        {
          "belgi": "🔒",
          "nom": "Bloklash",
          "izoh": "Win + L bilan kompyuterni qulflash"
        }
      ],
      "izoh": "Eng arzon va eng kuchli himoya &mdash; <b>o'ylab ish tutish</b>."
    },
    {
      "tur": "oyna",
      "sarlavha": "Windows xavfsizligi: tezkor sozlamalar",
      "tushuntirish": "Windows ichida tayyor himoya sozlamalari bor. Ularni tekshirib chiqish foydali.",
      "oyna": {
        "nom": "Windows xavfsizligi",
        "manzil": "Start → Sozlamalar → Maxfiylik va xavfsizlik → Windows xavfsizligi",
        "ustunlar": [
          "Sozlama",
          "Nima qiladi",
          "Tavsiya"
        ],
        "qatorlar": [
          [
            "🛡️ Virus va tahdid himoyasi",
            "Fayllarni real vaqtda tekshiradi",
            "Yoqilgan bo'lsin"
          ],
          [
            "🔥 Tarmoq himoyasi",
            "Kirmoqchi bo'lgan ulanishlarni to'xtatadi",
            "Yoqilgan bo'lsin"
          ],
          [
            "🔐 Hisob himoyasi",
            "Windows Hello, 2FA",
            "Yoqilgan bo'lsin"
          ],
          [
            "👨‍👩‍👧 Oila sozlamalari",
            "Bolalar uchun cheklov",
            "Maktab kompyuterida sozlanadi"
          ],
          [
            "🗂️ Ilova va brauzer boshqaruvi",
            "Sayt va yuklamalarni tekshiradi",
            "Standart holatda qoldirish"
          ]
        ]
      },
      "izoh": "Bu bo'limni <b>Start</b> menyusidan \"Windows xavfsizligi\" deb qidirib ham topish mumkin."
    }
  ],

  amaliy: [
    "Windows Defender ni ochib (Start &rarr; \"Windows Security\"), <b>Quick Scan</b> ni ishga tushiring.",
    "Telegram yoki pochta hisobingizga <b>2FA</b> (ikki bosqichli tasdiqlash) ni yoqing.",
    "O'zingizga <b>16 belgili kuchli parol</b> yasang va uni faqat yodda saqlang.",
    "Brauzerda <b>Ctrl + Shift + N</b> bilan maxfiy rejimni sinab ko'ring va nega u parol kiritish uchun mos emasligini tushunib oling.",
    "Kompyuteringizda <code>Autoplay</code> (avtomatik ishga tushirish) ni o'chirib qo'ying: Settings &rarr; Bluetooth &amp; devices &rarr; AutoPlay.",
    "<code>cmd</code> da <code>netstat -an | findstr ESTABLISHED</code> buyrug'ini bajarib, kompyuteringiz kim bilan aloqa qilayotganini ko'ring.",
    "PowerShell da <code>Get-MpComputerStatus</code> buyrug'i bilan antivirus holatini tekshiring.",
  ],

  uyga: [
    {
      "savol": "Kompyuterga tahdid qiluvchi 4 ta xavf turini yozing va har biriga bir qatorlik izoh bering.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ul><li><b>Virus</b> &mdash; fayllarga yopishib, ularni buzadi;</li><li><b>Troyan</b> &mdash; foydali dastur niqobida keladi va zarar yetkazadi;</li><li><b>Fishing</b> &mdash; aldash orqali parol va karta ma'lumotini oladi;</li><li><b>Ransomware</b> &mdash; fayllarni bloklab, pul so'raydi;</li><li><b>Shpion (spyware)</b> &mdash; yashirin kuzatib, ma'lumot yuboradi.</li></ul>"
    },
    {
      "savol": "3 ta kuchli parol o'ylab toping va nima uchun kuchli ekanini tushuntiring. \"Kuchli\" mezonlarini sanab bering.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<p><b>Meyzonlar:</b> kamida 12 belgi; katta va kichik harflar; raqam; maxsus belgi; shaxsiy ma'lumot yo'q.</p><p><b>Namunalar:</b></p><ul><li><code>Olma#Yoz47Daryo!</code> &mdash; 4 ta so'z + raqam + belgi;</li><li><code>Kitob-9Yulduz%Osmon</code> &mdash; uzun va aralash;</li><li><code>Bahor!12Tog'2026</code> &mdash; yodda qoladigan, lekin topib bo'lmaydigan.</li></ul><p>Bunday parollarni \"topib bo'lmaydi\", lekin egasi bir necha kunda yodlaydi.</p>"
    },
    {
      "savol": "Parol va hisob xavfsizligi qoidalaridan 5 tasini yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ol><li>Parol kamida 12 belgidan iborat bo'lsin;</li><li>Ism, tug'ilgan yil, telefon raqami ishlatilmasin;</li><li>Har xil saytda <b>boshqa-boshqa</b> parol ishlatilsin;</li><li>Parolni hech kimga aytmaslik (hatto do'stga ham);</li><li>Umumiy kompyuterdan ishlagandan keyin <b>chiqib ketish</b>.</li></ol>"
    },
    {
      "savol": "Antivirus dasturi qanday vazifalarni bajaradi? Kamida 4 tasini yozing.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ul><li>Yuklangan va ochilayotgan <b>fayllarni tekshiradi</b>;</li><li>Zararli sayt va fayllarni <b>to'xtatadi</b>;</li><li>Shubhali faylni <b>karantinga</b> oladi (o'chirmasdan ajratib qo'yadi);</li><li>Virus <b>bazasini yangilab</b> turadi;</li><li>Belgilangan vaqtda <b>rejali tekshiruv</b> o'tkazadi.</li></ul>"
    },
    {
      "savol": "Fishing (aldash) xatning 5 ta belgisini yozing va ularni qanday aniqlashni tushuntiring.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ol><li><b>Yuboruvchi manzil</b> rasmiy nomga o'xshaydi, lekin boshqa domen (<code>bank-himoya.uz</code>);</li><li><b>Shoshirish</b>: \"Darhol!\", \"24 soat ichida\", \"Aks holda...\";</li><li><b>Oson yutuq</b>: \"Siz yutdingiz!\" &mdash; bepul hech narsa bo'lmaydi;</li><li><b>G'alati havola</b>: <code>http</code> (himoyasiz), domen oxiri <code>.xyz</code>;</li><li><b>Ma'lumot so'rash</b>: parol, karta raqami, SMS kod &mdash; rasmiy tashkilot hech qachon so'ramaydi.</li></ol>"
    },
    {
      "savol": "Zaxira nusxa <b>3-2-1</b> qoidasini o'z fayllaringizga qo'llang: nima, qayerga va qachon nusxalanadi?",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Qoida</th><th>Menda qanday bo'ladi</th></tr></thead><tbody><tr><td><b>3</b> ta nusxa</td><td>Kompyuterdagi asl fayl + flesh xotira + bulut</td></tr><tr><td><b>2</b> xil vosita</td><td>Flesh xotira (USB) va Google Drive</td></tr><tr><td><b>1</b> tasi boshqa joyda</td><td>Bulutdagi nusxa &mdash; uydan tashqarida</td></tr></tbody></table><p>Qachon: haftaning har juma kuni, darsdan keyin. Har oy oxirida bulutdagi nusxa ochib ko'riladi &mdash; tiklanadimi yoki yo'qmi.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): <b>2FA</b> (ikki bosqichli himoya) nima va nega kerak? U qanday ishlaydi?",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<p><b>2FA</b> &mdash; hisobga kirishda <em>ikki</em> qadam talab qilinadi: parol + ikkinchi tasdiq (SMS kod yoki ilovadagi kod).</p><ol><li>Parol kiritiladi;</li><li>Telefonga bir martalik 6 xonali kod keladi;</li><li>Kod kiritilgandan keyingina hisobga kiriladi.</li></ol><p>Nega kerak: parolingiz o'g'irlangan bo'lsa ham, <b>telefonsiz</b> hech kim kira olmaydi. Zaxira kodlarni xavfsiz joyda saqlash kerak.</p>"
    }
  ],

  test: [
    {
      savol: "Fayllarni shifrlab, ochish uchun pul talab qiladigan zararli dastur qaysi?",
      variantlar: ["Adware", "Ransomware", "Spyware", "Worm"],
      togri: 1,
      izoh: "Ransomware fayllarni shifrlaydi va to'lov talab qiladi. Yagona himoya &mdash; zaxira nusxa.",
    },
    {
      savol: "Quyidagi parollardan qaysi biri <b>eng kuchli</b>?",
      variantlar: ["123456", "parol2026", "Quyosh@2026#Maktab", "admin123"],
      togri: 2,
      izoh: "Uzun, harf-raqam va maxsus belgi aralash parol eng kuchli hisoblanadi.",
    },
    {
      savol: "2FA nima vazifani bajaradi?",
      variantlar: [
        "Internetni tezlashtiradi",
        "Hisobga kirishda qo'shimcha tasdiqlash talab qiladi",
        "Fayllarni arxivlaydi",
        "Virusni o'chiradi",
      ],
      togri: 1,
      izoh: "2FA &mdash; ikkinchi qulf: parol yetarli emas, qo'shimcha kod ham kerak.",
    },
    {
      savol: "Antivirus qaysi usulda ishlamaydi?",
      variantlar: [
        "Imzo (signature) bilan solishtirish",
        "Fayl xatti-harakatini kuzatish (evristika)",
        "Foydalanuvchi parolini o'zgartirish",
        "Real vaqt himoyasi",
      ],
      togri: 2,
      izoh: "Antivirus parolni o'zgartirmaydi. U imzo, evristika va real vaqt usullarida ishlaydi.",
    },
    {
      savol: "Fleshkani kompyuterga ulaganda birinchi navbatda nima qilish kerak?",
      variantlar: [
        "Darhol barcha fayllarni ochish",
        "Avval antivirus bilan tekshirish",
        "Formatlash",
        "Fayllarni o'chirish",
      ],
      togri: 1,
      izoh: "Fleshka virus tarqalishining asosiy yo'li. Shuning uchun avval tekshirish shart.",
    },
    {
      savol: "Hash qiymati nima uchun ishlatiladi?",
      variantlar: [
        "Fayl hajmini kichraytirish uchun",
        "Fayl o'zgartirilmaganini tekshirish uchun",
        "Faylni shifrlash uchun",
        "Faylni o'chirish uchun",
      ],
      togri: 1,
      izoh: "Hash &mdash; faylning noyob \"barmoq izi\". Bir belgi o'zgarsa, hash butunlay o'zgaradi.",
    },
  ],

  lugat: [
    { soz: "Malware", izoh: "Zararli dasturlarning umumiy nomi." },
    { soz: "Virus", izoh: "Fayllarga yopishib tarqaladigan zararli dastur." },
    { soz: "Troyan", izoh: "Foydali dastur niqobidagi zararli dastur." },
    { soz: "Spyware", izoh: "Foydalanuvchini yashirin kuzatuvchi dastur." },
    { soz: "Ransomware", izoh: "Fayllarni shifrlab, to'lov talab qiluvchi dastur." },
    { soz: "Antivirus", izoh: "Zararli dasturlarni topib, zararsizlantiruvchi dastur." },
    { soz: "2FA", izoh: "Ikki bosqichli tasdiqlash." },
    { soz: "Phishing", izoh: "Aldash yo'li bilan ma'lumot olishga qaratilgan hujum." },
    { soz: "Firewall", izoh: "Tarmoq himoyasi &mdash; ruxsatsiz ulanishlarni to'sadi." },
    { soz: "Hash", izoh: "Fayl yoki matnning noyob kodlash natijasi." },
    { soz: "Backup", izoh: "Zaxira nusxa &mdash; yo'qotishdan himoya usuli." },
    { soz: "Shifrlash", izoh: "Ma'lumotni boshqalarga tushunarsiz ko'rinishga o'tkazish." },
  ],

  xatolar: [
    "Parol sifatida tug'ilgan sana, ism yoki 123456 ishlatish.",
    "Bir xil parolni hamma saytda ishlatish.",
    "Parolni qog'ozga yozib monitorga yopishtirish.",
    "Noma'lum .exe faylni ochish &mdash; hatto do'stdan kelgan bo'lsa ham.",
    "Antivirusni o'chirib qo'yish chunki \"kompyuter sekinlashdi\" &mdash; sekinlikni boshqa yo'l bilan hal qilish kerak.",
    "Ikki antivirusni birga o'rnatish &mdash; ular bir-biriga xalaqit beradi.",
    "Muhim fayllardan zaxira nusxa olmaslik &mdash; ransomware holatida hamma narsa yo'qoladi.",
    "Bank kartasi CVV kodi va SMS kodini boshqalarga aytish.",
  ],

  keyingi:
    "I bob shu bilan yakunlanadi. Keyingi darsdan <b>II bob &mdash; Zamonaviy IT yo'nalishlari va raqamli infratuzilma asoslari</b> boshlanadi: klaviaturada tez va to'g'ri yozish ko'nikmalari, raqamli savodxonlik va raqamli madaniyat. Bugungi xavfsizlik bilimlari butun kurs davomida asos bo'lib xizmat qiladi.",
});
