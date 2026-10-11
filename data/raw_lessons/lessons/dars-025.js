/* 25-dars: Flowgorithmda tarmoqlanuvchi algoritmlar va shartlar bilan ishlash (1-qism) */

AVX.dars({
  id: "cs8-025",
  sarlavha: "Flowgorithmda tarmoqlanuvchi algoritmlar va shartlar bilan ishlash (1-qism)",
  kiritish:
    "Hozirgacha bizning dasturlarimiz \"ko'r\" edi: ular hech narsani tekshirmasdan bir yo'ldan borardi. Lekin haqiqiy dastur qaror qabul qilishi kerak: <em>agar parol to'g'ri bo'lsa &mdash; kirit, aks holda &mdash; rad et</em>. Bugun biz dasturga <b>tanlash</b> qobiliyatini qo'shamiz &mdash; <b>tarmoqlanuvchi algoritmlar</b> va <b>If (shart)</b> bloki yordamida.",

  maqsad: [
    "Tarmoqlanuvchi algoritm nima ekanligini va u chiziqli algoritmdan qanday farq qilishini tushunish.",
    "Taqqoslash operatorlarini (= , <>, <, >, <=, >=) to'g'ri qo'llashni o'rganish.",
    "Mantiqiy amallar (AND, OR, NOT) bilan murakkab shartlar tuzishni o'zlashtirish.",
    "Flowgorithm dagi If blokining True va False shoxobchalarini to'g'ri ulashni o'rganish.",
    "Ichma-ich (nested) shartlarni tuzish va If-Else-If zanjirini qurish.",
  ],

  natija: [
    "Shart ifodasini o'qib, uning true yoki false bo'lishini oldindan aytadi.",
    "Sodda If blokini tuzib, faqat shart bajarilganda ishlaydigan qism yaratadi.",
    "If-Else bloki bilan ikki xil yo'lni to'g'ri ajratadi.",
    "AND, OR, NOT yordamida bir nechta shartni birlashtiradi.",
    "Ichma-ich shartlar va If-Else-If zanjirini ishlatib, bahoni aniqlaydigan dastur yozadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: chiziqli algoritm, kirish - qayta ishlash - chiqish."],
    ["5-15 daq", "Mentor tushuntirishi", "Nima uchun dastur qaror qabul qilishi kerak? Shart g'oyasi."],
    ["15-27 daq", "Nazariya: taqqoslash", "Operatorlar jadvali: = , <> , < , > , <= , >= ."],
    ["27-38 daq", "Nazariya: mantiqiy amallar", "AND, OR, NOT va haqiqat jadvali."],
    ["38-52 daq", "Amaliyot: If va If-Else", "Flowgorithm da shart bloklarini ulash."],
    ["52-68 daq", "Amaliyot: ichma-ich shartlar", "Bahoni aniqlash va login tekshiruvi."],
    ["68-77 daq", "Mustaqil ish va uyga vazifa", "Juft-toq, kattasi, dam olish kuni masalalari."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Dastur nima uchun qaror qabul qiladi?",
      matn: [
        "Hayotda har kuni shartlarga duch kelamiz: <em>agar yomg'ir yog'sa - soyabon olaman</em>, <em>agar bahom 5 bo'lsa - xursand bo'laman</em>, <em>agar vaqt 8 dan o'tsa - kechikdim</em>.",
        "Dastur ham xuddi shunday ishlashi kerak. Busiz u faqat \"kalkulyator\" bo'lib qoladi. <b>Tarmoqlanuvchi algoritm</b> - shartga qarab turli yo'ldan boradigan algoritm.",
        "Nomidagi \"tarmoq\" so'zi yo'lning ayrilishini bildiradi: yo'l ikkiga bo'linadi va dastur qaysi shart bajarilganiga qarab birini tanlaydi.",
      ],
    },
    {
      sarlavha: "2. Shart - bu rost yoki yolg'on savol",
      matn: [
        "Shart - javobi faqat <b>true</b> (rost) yoki <b>false</b> (yolg'on) bo'ladigan savol. Masalan: <code>yosh >= 14</code>, <code>parol = \"1234\"</code>, <code>son mod 2 = 0</code>.",
        "Flowgorithm dagi <code>If</code> bloki aynan shu savolni beradi. Javob <em>true</em> bo'lsa - bir yo'ldan, <em>false</em> bo'lsa - boshqa yo'ldan boradi.",
        "Diqqat: shart ichida doimo <em>taqqoslash</em> bo'ladi. \"son = 5\" degani \"son 5 ga tengmi?\" degan savol. Javob ha yoki yo'q.",
      ],
    },
    {
      sarlavha: "3. Taqqoslash operatorlari",
      matn: [
        "Flowgorithm da tenglik <em>bitta</em> <code>=</code> belgisi bilan, teng emaslik esa <code>&lt;&gt;</code> bilan yoziladi. Bu boshqa tillardan farq qiladi.",
        "Katta-kichiklik: <code>&lt;</code> kichik, <code>&gt;</code> katta, <code>&lt;=</code> kichik yoki teng, <code>&gt;=</code> katta yoki teng.",
        "Eng ko'p uchraydigan xato: <code>&gt;</code> va <code>&lt;</code> ni tenglik bilan aralashtirish. \"5 dan katta\" va \"5 dan katta yoki teng\" - butunlay boshqa shartlar!",
      ],
    },
    {
      sarlavha: "4. Mantiqiy amallar: AND, OR, NOT",
      matn: [
        "<b>AND</b> (va) - ikkala shart ham rost bo'lishi shart. \"Darsga keldim <em>va</em> uyga vazifa qildim\". Bittasi yolg'on bo'lsa - natija yolg'on.",
        "<b>OR</b> (yoki) - shartlardan <em>kamida bittasi</em> rost bo'lsa yetarli. \"Shanba <em>yoki</em> yakshanba\" - hafta oxiri tekshiruvi.",
        "<b>NOT</b> (inkor) - mantiqni teskarisiga aylantiradi. <code>NOT true = false</code>, <code>NOT false = true</code>.",
      ],
    },
    {
      sarlavha: "5. Ichma-ich shartlar va If-Else-If zanjiri",
      matn: [
        "Ba'zan bitta shart yetmaydi. Masalan: \"agar yosh 14 dan katta bo'lsa, agar hujjat bo'lsa, kirit\". Bunda shart <em>ichida</em> yana shart yoziladi - bu <b>ichma-ich shart</b>.",
        "Boshqa holat: bir necha variantdan birini tanlash kerak. Bahoni aniqlashda: 5 bo'lsa \"a'lo\", 4 bo'lsa \"yaxshi\", 3 bo'lsa \"qoniqarli\", aks holda \"qoniqarsiz\". Bu - <b>If-Else-If zanjiri</b>.",
        "Zanjir yuqoridan pastga tekshiriladi va <em>birinchi</em> rost bo'lgan shartda to'xtaydi. Shu sababli shartlar tartibi muhim: avval kattaroq yoki aniqroq shart yoziladi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Chiziqli va tarmoqlanuvchi algoritm",
      matn: [
        "Ikki algoritm turini solishtiramiz. Farqni tushunish mavzuning butun mantiqini ochadi.",
      ],
      jadval: [
        ["Belgisi", "Chiziqli algoritm", "Tarmoqlanuvchi algoritm"],
        ["Yo'nalish", "Faqat bitta, to'g'ri chiziq", "Shartga qarab ikkiga (yoki ko'pga) bo'linadi"],
        ["Bloklar", "Input, Assign, Output", "Qo'shimcha: If (shart)"],
        ["Qaror", "Yo'q", "Bor: true yoki false"],
        ["Misol", "Yuza hisoblash", "Parolni tekshirish"],
      ],
    },
    {
      sarlavha: "2. Taqqoslash operatorlari",
      matn: [
        "Shart ichida faqat shu operatorlar ishlatiladi. Har birining ma'nosini yodlab olish kerak.",
      ],
      jadval: [
        ["Operator", "Ma'nosi", "Misol", "Javob"],
        ["=", "teng", "5 = 5", "true"],
        ["<>", "teng emas", "5 <> 3", "true"],
        ["<", "kichik", "3 < 5", "true"],
        [">", "katta", "3 > 5", "false"],
        ["<=", "kichik yoki teng", "5 <= 5", "true"],
        [">=", "katta yoki teng", "4 >= 5", "false"],
      ],
    },
    {
      sarlavha: "3. Mantiqiy amallar haqiqat jadvali",
      matn: [
        "AND va OR natijasi ikki shartning qiymatiga bog'liq. Quyidagi jadvalni yodlab olish juda foydali.",
      ],
      jadval: [
        ["A", "B", "A AND B", "A OR B", "NOT A"],
        ["true", "true", "true", "true", "false"],
        ["true", "false", "false", "true", "false"],
        ["false", "true", "false", "true", "true"],
        ["false", "false", "false", "false", "true"],
      ],
    },
    {
      sarlavha: "4. If blokining turlari",
      matn: [
        "Flowgorithm da If bloki uch xil ko'rinishda ishlatiladi. Har biri o'z vazifasiga ega.",
      ],
      jadval: [
        ["Turi", "Shakli", "Qachon ishlatiladi"],
        ["Sodda If", "Shart true bo'lsa - ish bajariladi", "Faqat bir holatni tekshirish"],
        ["If-Else", "True uchun bir yo'l, False uchun boshqa yo'l", "Ikki variantdan birini tanlash"],
        ["If-Else-If", "Bir necha shart ketma-ket", "Ko'p variantdan birini tanlash (baho)"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "qiyos",
      "sarlavha": "Sodda if va if-else",
      "tushuntirish": "Shart bloki ikki xil bo'ladi: faqat &laquo;ha&raquo; holatni bajaradigani va ikkala holatni ham bajaradigani.",
      "ustunlar": [
        {
          "turi": "brand",
          "belgi": "1️⃣",
          "sarlavha": "Sodda if",
          "royxat": [
            "Faqat shart to'g'ri bo'lsa ish bajariladi",
            "Aks holda hech narsa qilinmaydi",
            "Masalan: &laquo;agar baho 90+ bo'lsa, maqtov yoz&raquo;"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "2️⃣",
          "sarlavha": "if-else",
          "royxat": [
            "Ikkala yo'l ham ish bajaradi",
            "Ha &mdash; bir xabar, yo'q &mdash; boshqa xabar",
            "Masalan: &laquo;o'tdi&raquo; yoki &laquo;o'tmadi&raquo;"
          ]
        }
      ],
      "izoh": "Tarmoqlanuvchi algoritmda ikkala yo'l ham <b>albatta</b> bitta nuqtada birlashadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Mantiqiy amallar: AND, OR, NOT",
      "tushuntirish": "Bir necha shartni birlashtirish uchun mantiqiy amallar ishlatiladi.",
      "elementlar": [
        {
          "belgi": "🔗",
          "nom": "AND (va)",
          "izoh": "Ikkala shart ham to'g'ri bo'lishi kerak &mdash; login va parol to'g'ri bo'lsa"
        },
        {
          "belgi": "🔀",
          "nom": "OR (yoki)",
          "izoh": "Kamida bittasi to'g'ri bo'lsa yetadi &mdash; naqd yoki karta"
        },
        {
          "belgi": "🚫",
          "nom": "NOT (emas)",
          "izoh": "Shartni teskarisiga o'giradi &mdash; foydalanuvchi bloklanmagan bo'lsa"
        },
        {
          "belgi": "🧮",
          "nom": "Juft/toq",
          "izoh": "Qoldiq amali bilan tekshiriladi: 2 ga bo'linsa &mdash; juft"
        }
      ],
      "izoh": "Zanjirli shart kerak bo'lsa (baho bo'yicha 5, 4, 3, 2) &mdash; keyingi darsda batafsil ko'ramiz."
    },
    {
      "tur": "oyna",
      "sarlavha": "Zanjirli shart: baho jadvali",
      "tushuntirish": "Bir necha variantdan birini tanlash kerak bo'lsa, shartlar ketma-ket tekshiriladi.",
      "oyna": {
        "nom": "Baho aniqlash",
        "ustunlar": [
          "Baho",
          "Shart",
          "Xulosa"
        ],
        "qatorlar": [
          [
            "90 and yuqori",
            "baho >= 90",
            "A'lo"
          ],
          [
            "70 - 89",
            "baho >= 70",
            "Yaxshi"
          ],
          [
            "50 - 69",
            "baho >= 50",
            "Qoniqarli"
          ],
          [
            "50 dan past",
            "else",
            "Qoniqarsiz"
          ]
        ]
      },
      "izoh": "Tartib muhim: shartlar <b>kattadan kichikka</b> qarab tekshiriladi, aks holda noto'g'ri ishlaydi."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Taqqoslash operatorlari amalda",
      "tushuntirish": "Flowgorithm da shartlar <code>Assign</code> blokida Boolean o'zgaruvchiga saqlanishi mumkin. Natijani birma-bir ko'ramiz.",
      "nom": "taqqoslash.txt",
      "til": "flow",
      "izoh": "Har bir shartning qiymati true yoki false - boshqa variant yo'q.",
      "kod": "BLOK-SXEMA: Taqqoslash natijalari\n\n        ( START )\n            |\n   [ Declare a As Integer ]\n   [ Declare b As Integer ]\n            |\n   [ a = 7 ]\n   [ b = 3 ]\n            |\n   / Output \"a = b   -> \" and (a = b)   /    -> false\n   / Output \"a <> b  -> \" and (a <> b)  /    -> true\n   / Output \"a > b   -> \" and (a > b)   /    -> true\n   / Output \"a < b   -> \" and (a < b)   /    -> false\n   / Output \"a >= b  -> \" and (a >= b)  /    -> true\n   / Output \"a <= b  -> \" and (a <= b)  /    -> false\n   / Output \"a >= 7  -> \" and (a >= 7)  /    -> true\n            |\n        ( END )",
      "natija": "Konsol:\n\n  a = b   -> false\n  a <> b  -> true\n  a > b   -> true\n  a < b   -> false\n  a >= b  -> true\n  a <= b  -> false\n  a >= 7  -> true\n\n7 va 3 sonlarini solishtirib chiqdik. \"a = b\" faqat\nular teng bo'lganda true bo'ladi."
    },
    {
      "sarlavha": "Mantiqiy amallar: AND, OR, NOT",
      "tushuntirish": "Bir nechta shartni birlashtirish uchun mantiqiy amallar ishlatiladi. Har birining natijasini ko'ramiz.",
      "nom": "mantiqiy.txt",
      "til": "flow",
      "izoh": "AND - ikkalasi shart, OR - bittasi yetarli, NOT - teskarisiga aylantiradi.",
      "kod": "BLOK-SXEMA: Mantiqiy amallar\n\n        ( START )\n            |\n   [ Declare yosh As Integer ]\n   [ Declare hujjat As Boolean ]\n            |\n   [ yosh = 15 ]\n   [ hujjat = true ]\n            |\n   [ natija1 = (yosh >= 14) and (hujjat = true) ]   -> true\n   / Output \"14+ va hujjat: \" and natija1 /\n            |\n   [ natija2 = (yosh >= 18) and (hujjat = true) ]   -> false\n   / Output \"18+ va hujjat: \" and natija2 /\n            |\n   [ natija3 = (yosh >= 18) or (hujjat = true) ]    -> true\n   / Output \"18+ yoki hujjat: \" and natija3 /\n            |\n   [ natija4 = NOT (yosh >= 18) ]                   -> true\n   / Output \"18 dan kichik: \" and natija4 /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  14+ va hujjat: true\n  18+ va hujjat: false\n  18+ yoki hujjat: true\n  18 dan kichik: true\n\nAND - ikkala shart ham rost bo'lishi kerak.\nOR  - bittasi rost bo'lsa yetarli.\nNOT - natijani teskarisiga aylantiradi."
    },
    {
      "sarlavha": "Sodda If: musbat sonni aniqlash",
      "tushuntirish": "Eng oddiy tarmoqlanish: shart bajarilgandagina ish bajariladi. Aks holda hech narsa qilinmaydi.",
      "nom": "sodda_if.txt",
      "til": "flow",
      "izoh": "Sodda If da false shoxobchasi bo'sh qoladi - bu normal holat.",
      "kod": "BLOK-SXEMA: Sodda If\n\n        ( START )\n            |\n   [ Declare son As Integer ]\n            |\n   / Input son (savol: \"Son kiriting: \") /\n            |\n        < son > 0 ? >\n       true |     | false\n            |     |\n            |     +-----------> (hech narsa qilinmaydi)\n            |\n   / Output \"Bu son musbat!\" /\n            |\n        ( END )",
      "natija": "1-marta ishga tushirish:\n  Son kiriting: 7\n  Bu son musbat!\n\n2-marta ishga tushirish:\n  Son kiriting: -3\n  (hech narsa chiqmaydi - chunki shart false bo'ldi)\n\nSodda If faqat shart true bo'lganda ishlaydi."
    },
    {
      "sarlavha": "If-Else: musbat yoki manfiy",
      "tushuntirish": "Endi ikkala yo'l ham ish bajaradi: true uchun bir xabar, false uchun boshqa xabar.",
      "nom": "if_else.txt",
      "til": "flow",
      "izoh": "If-Else da ikkala shoxobcha ham to'ldiriladi - bu ikki variantni ajratadi.",
      "kod": "BLOK-SXEMA: Musbat yoki manfiy\n\n        ( START )\n            |\n   [ Declare son As Integer ]\n            |\n   / Input son (savol: \"Son kiriting: \") /\n            |\n        < son >= 0 ? >\n       true |        | false\n            |        |\n   / Output \"Musbat\" /   / Output \"Manfiy\" /\n            |        |\n            \\___  __/\n                |\n        ( END )",
      "natija": "1-marta:\n  Son kiriting: 7\n  Musbat\n\n2-marta:\n  Son kiriting: -3\n  Manfiy\n\n3-marta:\n  Son kiriting: 0\n  Musbat      <- 0 >= 0 bo'lgani uchun\n\nEndi dastur HAR QANDAY holatda javob beradi."
    },
    {
      "sarlavha": "Juft yoki toq son",
      "tushuntirish": "Juftlikni aniqlash uchun <code>mod</code> amali ishlatiladi: son 2 ga bo'linsa va qoldiq 0 bo'lsa - juft.",
      "nom": "juft_toq.txt",
      "til": "flow",
      "izoh": "son mod 2 = 0 sharti - juft sonning eng aniq belgisi.",
      "kod": "BLOK-SXEMA: Juft yoki toq\n\n        ( START )\n            |\n   [ Declare son As Integer ]\n            |\n   / Input son (savol: \"Son kiriting: \") /\n            |\n        < son mod 2 = 0 ? >\n       true |           | false\n            |           |\n   / Output \"Juft\" /   / Output \"Toq\" /\n            |           |\n            \\___   ___/\n                |\n        ( END )",
      "natija": "Konsol:\n\n  Son kiriting: 8\n  Juft\n\n  Son kiriting: 7\n  Toq\n\nTekshirish:\n  8 mod 2 = 0  -> juft\n  7 mod 2 = 1  -> toq\n  0 mod 2 = 0  -> juft"
    },
    {
      "sarlavha": "Ikki sonning kattasini topish",
      "tushuntirish": "If-Else yordamida ikki sonning kattasini aniqlaymiz. Bu - eng ko'p ishlatiladigan masalalardan biri.",
      "nom": "kattasi.txt",
      "til": "flow",
      "izoh": "Shart true bo'lsa a ni, false bo'lsa b ni natijaga yozamiz.",
      "kod": "BLOK-SXEMA: Ikki sonning kattasi\n\n        ( START )\n            |\n   [ Declare a As Integer ]\n   [ Declare b As Integer ]\n   [ Declare katta As Integer ]\n            |\n   / Input a (savol: \"1-son: \") /\n   / Input b (savol: \"2-son: \") /\n            |\n        < a > b ? >\n       true |     | false\n            |     |\n   [ katta = a ]  [ katta = b ]\n            |     |\n            \\__ __/\n               |\n   / Output \"Kattasi: \" and katta /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  1-son: 12\n  2-son: 27\n  Kattasi: 27\n\n1-son: 100\n2-son: 34\nKattasi: 100\n\nTrace: katta o'zgaruvchisi ikki shoxobchadan faqat bittasida\nqiymat oladi - bu juda muhim!"
    },
    {
      "sarlavha": "Bahoni aniqlash: If-Else-If zanjiri",
      "tushuntirish": "Bir necha variantdan birini tanlash kerak bo'lsa, shartlar ketma-ket yoziladi va birinchisi rost bo'lganda to'xtaydi.",
      "nom": "baho.txt",
      "til": "flow",
      "izoh": "Tartib muhim: avval eng katta shart tekshiriladi.",
      "kod": "BLOK-SXEMA: Bahoni so'z bilan aniqlash\n\n        ( START )\n            |\n   [ Declare baho As Integer ]\n            |\n   / Input baho (savol: \"Baho (2-5): \") /\n            |\n        < baho = 5 ? >   --true-->  / Output \"Alo\" /\n            |\n          false\n            |\n        < baho = 4 ? >   --true-->  / Output \"Yaxshi\" /\n            |\n          false\n            |\n        < baho = 3 ? >   --true-->  / Output \"Qoniqarli\" /\n            |\n          false\n            |\n   / Output \"Qoniqarsiz\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Baho (2-5): 5\n  Alo\n\n  Baho (2-5): 4\n  Yaxshi\n\n  Baho (2-5): 3\n  Qoniqarli\n\n  Baho (2-5): 2\n  Qoniqarsiz\n\nDastur tartib bo'yicha tekshiradi va BIRINCHI rost bo'lgan\nshartda to'xtaydi - qolganlarini tekshirmaydi."
    },
    {
      "sarlavha": "Ichma-ich shartlar (nested If)",
      "tushuntirish": "Ba'zan bitta shart yetmaydi: birinchi shart bajarilgandan keyin yana bir shart tekshirilishi kerak.",
      "nom": "ichma_ich.txt",
      "til": "flow",
      "izoh": "Ichkaridagi shart faqat tashqaridagi shart true bo'lgandagina tekshiriladi.",
      "kod": "BLOK-SXEMA: Ichma-ich shart\n\n        ( START )\n            |\n   [ Declare yosh As Integer ]\n   [ Declare hujjat As Boolean ]\n            |\n   / Input yosh (savol: \"Yosh: \") /\n            |\n        < yosh >= 16 ? >\n       true |          | false\n            |          |\n   < hujjat = true ? > |      / Output \"Kira olmaysiz\" /\n      true |    | false\n           |    |\n  / Output \"Xush kelibsiz!\" /  / Output \"Hujjat kerak\" /\n           |    |\n           \\_ _/\n              |\n        ( END )",
      "natija": "Konsol natijalari:\n\n  Yosh: 20, hujjat = true   -> Xush kelibsiz!\n  Yosh: 20, hujjat = false  -> Hujjat kerak\n  Yosh: 14, (hujjat muhim emas) -> Kira olmaysiz\n\nIchkaridagi shart faqat yosh 16 dan katta bo'lganda tekshiriladi.\nAks holda dastur to'g'ridan-to'g'ri \"Kira olmaysiz\" shoxobchasiga o'tadi."
    },
    {
      "sarlavha": "AND amali: login va parolni tekshirish",
      "tushuntirish": "Ikkala shart ham rost bo'lishi kerak bo'lsa, <code>AND</code> ishlatiladi. Bu - xavfsizlikning asosi.",
      "nom": "login.txt",
      "til": "flow",
      "izoh": "AND tufayli bitta shart yolg'on bo'lsa ham kirish rad etiladi.",
      "kod": "BLOK-SXEMA: Login tekshiruvi\n\n        ( START )\n            |\n   [ Declare login As String ]\n   [ Declare parol As String ]\n            |\n   / Input login (savol: \"Login: \") /\n   / Input parol (savol: \"Parol: \") /\n            |\n        < (login = \"admin\") and (parol = \"1234\") ? >\n       true |                            | false\n            |                            |\n   / Output \"Xush kelibsiz!\" /   / Output \"Login yoki parol xato\" /\n            |                            |\n            \\___________  ______________/\n                        |\n        ( END )",
      "natija": "Konsol:\n\n  Login: admin\n  Parol: 1234\n  Xush kelibsiz!\n\n  Login: admin\n  Parol: 1111\n  Login yoki parol xato\n\nAND tufayli IKKALA shart ham to'g'ri bo'lishi kerak.\nBittasi xato bo'lsa ham kirish mumkin emas - bu xavfsizlik uchun muhim."
    },
    {
      "sarlavha": "OR amali: dam olish kuni",
      "tushuntirish": "Shartlardan kamida bittasi rost bo'lishi kerak bo'lsa, <code>OR</code> ishlatiladi.",
      "nom": "dam_olish.txt",
      "til": "flow",
      "izoh": "OR bilan yozilgan shartda oltita kundan ikkitasida true bo'ladi.",
      "kod": "BLOK-SXEMA: Dam olish kuni\n\n        ( START )\n            |\n   [ Declare kun As String ]\n            |\n   / Input kun (savol: \"Hafta kuni: \") /\n            |\n        < (kun = \"shanba\") or (kun = \"yakshanba\") ? >\n       true |                                      | false\n            |                                      |\n   / Output \"Dam olish kuni!\" /          / Output \"Ish kuni\" /\n            |                                      |\n            \\__________________  _________________/\n                               |\n        ( END )",
      "natija": "Konsol:\n\n  Hafta kuni: shanba\n  Dam olish kuni!\n\n  Hafta kuni: dushanba\n  Ish kuni\n\nOR: yetti kundan faqat shanba va yakshanba true beradi.\nQolgan besh kunda shart false bo'ladi."
    },
    {
      "sarlavha": "Keng tarqalgan xatolar: = va <>",
      "tushuntirish": "Shart yozishda uchraydigan asosiy xatolarni ko'rib chiqamiz - ularni oldindan bilib qo'yish foydali.",
      "nom": "xatolar.txt",
      "til": "flow",
      "izoh": "Shart ichida qiymat berib bo'lmaydi - faqat taqqoslash yoziladi.",
      "kod": "TO'G'RI VA XATO SHARTLAR\n------------------------------------------------------------\n XATO                                 SABAB\n------------------------------------------------------------\n [ son = 5 ]        shart sifatida      bu QIYMAT BERISH.\n                                        Flowgorithm da shart\n                                        < ... > blokida yoziladi.\n\n < son = 5 >        Flowgorithm da      = - tenglik belgisi.\n                    to'g'ri             Bu to'g'ri!\n\n < son == 5 >       Python uchun        Flowgorithm da == yo'q,\n                    to'g'ri             lekin Python da shart.\n\n < son > 5 >        XATO                > va < ishlatilgan,\n                                        lekin ma'no chalkash.\n------------------------------------------------------------\nTIL FARQI:\n                Flowgorithm        Python\n  teng              =                 ==\n  teng emas         <>                !=\n  katta             >                 >\n  kichik            <                 <\n------------------------------------------------------------",
      "natija": "Bu jadvalni daftarga ko'chirib qo'ying.\n\nEng ko'p xato: Python da if son = 5: deb yozish.\nTo'g'risi:      if son == 5:\n\nFlowgorithm da esa aksincha: bitta = to'g'ri."
    },
    {
      "sarlavha": "Mini loyiha: xavfsiz kalkulyator",
      "tushuntirish": "Oldingi darsdagi kalkulyatorni yaxshilaymiz: endi dastur 0 ga bo'lishni tekshiradi.",
      "nom": "kalkulyator.txt",
      "til": "flow",
      "izoh": "Bu - tarmoqlanishning eng foydali qo'llanishi: xatoni oldini olish.",
      "kod": "BLOK-SXEMA: Xavfsiz kalkulyator\n\n        ( START )\n            |\n   [ Declare a As Real ]\n   [ Declare b As Real ]\n   [ Declare natija As Real ]\n            |\n   / Input a (savol: \"1-son: \") /\n   / Input b (savol: \"2-son: \") /\n            |\n   [ natija = a + b ]\n   / Output a and \" + \" and b and \" = \" and natija /\n            |\n   [ natija = a - b ]\n   / Output a and \" - \" and b and \" = \" and natija /\n            |\n        < b = 0 ? >\n       true |     | false\n            |     |\n   / Output \"0 ga bolish mumkin emas!\" /   [ natija = a / b ]\n            |                              / Output \" / = \" and natija /\n            \\___________  ________________/\n                        |\n        ( END )",
      "natija": "Konsol:\n\n  1-son: 12\n  2-son: 0\n  12.0 + 0.0 = 12.0\n  12.0 - 0.0 = 12.0\n  0 ga bolish mumkin emas!\n\n  1-son: 12\n  2-son: 4\n  12.0 + 4.0 = 16.0\n  12.0 - 4.0 = 8.0\n   / = 3.0\n\nShart bo'lmasa, 12 / 0 dasturni to'xtatib qo'yardi."
    }
  ],

  amaliy: [
    "Flowgorithm da <code>If</code> blokini qo'yib, <code>son &gt; 0</code> shartini tekshiring: musbat bo'lsa \"Musbat\", aks holda \"Musbat emas\" chiqaring. Uch marta turli son bilan sinab ko'ring.",
    "Juft-toq aniqlovchi dastur tuzing. <code>son mod 2 = 0</code> shartidan foydalaning va 0, 7, 8, 15 sonlarida tekshiring.",
    "Ikki sonning kattasini topuvchi dastur quring. <code>katta</code> o'zgaruvchisi ikki shoxobchadan faqat bittasida qiymat olishiga e'tibor bering.",
    "Bahoni so'z bilan aniqlovchi zanjir tuzing: 5 - \"Alo\", 4 - \"Yaxshi\", 3 - \"Qoniqarli\", qolganlari - \"Qoniqarsiz\".",
    "Login va parolni tekshiruvchi dastur quring. <code>AND</code> amalidan foydalaning. To'g'ri va xato parollarni sinab ko'ring.",
    "Ichma-ich shart yozing: avval yoshni <code>&gt;= 16</code> deb tekshiring, keyin hujjat borligini. Uch xil holatni ko'rsatib bering.",
    "0 ga bo'lishni tekshiruvchi xavfsiz kalkulyator tuzing. Xato holatda dastur to'xtamasligi kerak.",
  ],

  uyga: [
    {
      savol: "<b>Tarmoqlanuvchi algoritm</b> nima? U chiziqli algoritmdan qanday farq qiladi? Misol keltiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Tarmoqlanuvchi algoritm</b> - shartga qarab turli yo'ldan boradigan algoritm. Unda <code>If</code> (shart) bloki ishlatiladi.</p>" +
        "<ul>" +
        "<li><b>Chiziqli:</b> bitta yo'l, bloklar ketma-ket. Misol: yuza hisoblash.</li>" +
        "<li><b>Tarmoqlanuvchi:</b> yo'l shartga qarab ikkiga bo'linadi. Misol: son musbatmi yoki manfiymi.</li>" +
        "</ul>" +
        "<p>Farqning mohiyati: chiziqli algoritm <em>qaror qabul qilmaydi</em>, tarmoqlanuvchi algoritm esa <em>qaror qabul qiladi</em>.</p>",
    },
    {
      savol: "Quyidagi shartlarning natijasini yozing (<code>a = 10</code>, <code>b = 4</code>):<br><code>a &gt; b</code>, <code>a &lt; b</code>, <code>a = b</code>, <code>a &lt;&gt; b</code>, <code>a &gt;= 10</code>, <code>b &lt;= 3</code>.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<ul>" +
        "<li><code>a &gt; b</code> &rarr; <b>true</b> (10 &gt; 4);</li>" +
        "<li><code>a &lt; b</code> &rarr; <b>false</b> (10 &lt; 4 emas);</li>" +
        "<li><code>a = b</code> &rarr; <b>false</b> (10 va 4 teng emas);</li>" +
        "<li><code>a &lt;&gt; b</code> &rarr; <b>true</b> (ular teng emas);</li>" +
        "<li><code>a &gt;= 10</code> &rarr; <b>true</b> (10 dan katta yoki teng);</li>" +
        "<li><code>b &lt;= 3</code> &rarr; <b>false</b> (4, 3 dan katta).</li>" +
        "</ul>",
    },
    {
      savol: "<b>AND</b> va <b>OR</b> amallarining farqini tushuntiring. Har biriga bittadan hayotiy misol keltiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>AND</b> (va) - <em>ikkala</em> shart ham rost bo'lishi kerak.</p>" +
        "<p>Hayotiy misol: \"Konsertga borish uchun <b>pulim bor</b> <em>va</em> <b>vaqtim bor</b>\". Ikkalasidan biri bo'lmasa - bormayman.</p>" +
        "<p><b>OR</b> (yoki) - shartlardan <em>kamida bittasi</em> rost bo'lsa yetarli.</p>" +
        "<p>Hayotiy misol: \"Uyga borish uchun <b>avtobus</b> <em>yoki</em> <b>taksi</b> kerak\". Ikkalasidan biri bo'lsa yetarli.</p>" +
        "<p>Jadval:</p>" +
        "<table class=\"reja-table\"><thead><tr><th>A</th><th>B</th><th>A AND B</th><th>A OR B</th></tr></thead><tbody>" +
        "<tr><td>true</td><td>true</td><td>true</td><td>true</td></tr>" +
        "<tr><td>true</td><td>false</td><td>false</td><td>true</td></tr>" +
        "<tr><td>false</td><td>true</td><td>false</td><td>true</td></tr>" +
        "<tr><td>false</td><td>false</td><td>false</td><td>false</td></tr>" +
        "</tbody></table>",
    },
    {
      savol: "Son <b>juft</b> yoki <b>toq</b> ekanini aniqlovchi dasturning blok-sxemasini yozing va 0 soni uchun natijani ayting.",
      tezlik: "Taxminiy vaqt: 8 daqiqa",
      javob:
        "<pre><code>( START )\n" +
        "  [ Declare son As Integer ]\n" +
        "  / Input son (savol: \"Son: \") /\n" +
        "  &lt; son mod 2 = 0 ? &gt;\n" +
        "      true -&gt; / Output \"Juft\" /\n" +
        "      false -&gt; / Output \"Toq\" /\n" +
        "( END )</code></pre>" +
        "<p><b>0 soni uchun:</b> <code>0 mod 2 = 0</code>, ya'ni shart <em>true</em>. Dastur <b>\"Juft\"</b> deb javob beradi.</p>" +
        "<p>Bu matematik jihatdan ham to'g'ri: 0 soni 2 ga qoldiqsiz bo'linadi, demak u juft son.</p>",
    },
    {
      savol: "Nima uchun <code>If-Else-If</code> zanjirida shartlar <b>tartibi</b> muhim? Misol bilan tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p>Zanjir yuqoridan pastga tekshiriladi va <b>birinchi rost bo'lgan</b> shartda to'xtaydi. Qolganlari tekshirilmaydi.</p>" +
        "<p>Misol: bahoni aniqlashda " +
        "<code>if baho &gt;= 3</code> deb boshlasak, 5 baho uchun ham \"Qoniqarli\" chiqadi - chunki 5 &gt;= 3 sharti birinchi bo'lib rost bo'ladi va zanjir to'xtaydi.</p>" +
        "<p>To'g'ri tartib - <em>aniqroq va kattaroq</em> shartdan boshlash:</p>" +
        "<ol>" +
        "<li><code>baho = 5</code> &rarr; \"Alo\";</li>" +
        "<li><code>baho = 4</code> &rarr; \"Yaxshi\";</li>" +
        "<li><code>baho = 3</code> &rarr; \"Qoniqarli\";</li>" +
        "<li><code>else</code> &rarr; \"Qoniqarsiz\".</li>" +
        "</ol>",
    },
    {
      savol: "Talaba imtihondan o'tgan yoki o'tmaganini aniqlovchi dastur tuzing: o'tish bahosi 60 ball. Natijani <b>AND</b> ishlatib ham yozib ko'ring: \"o'tdi\" uchun ball 60 dan katta yoki teng <b>va</b> davomat 80% dan yuqori bo'lishi kerak.",
      tezlik: "Taxminiy vaqt: 9 daqiqa",
      javob:
        "<p><b>Sodda variant:</b></p>" +
        "<pre><code>/ Input ball /\n" +
        "&lt; ball &gt;= 60 ? &gt;\n" +
        "  true  -&gt; / Output \"Otdi\" /\n" +
        "  false -&gt; / Output \"Otmadi\" /</code></pre>" +
        "<p><b>AND bilan variant:</b></p>" +
        "<pre><code>/ Input ball (savol: \"Ball: \") /\n" +
        "/ Input davomat (savol: \"Davomat %: \") /\n" +
        "&lt; (ball &gt;= 60) and (davomat &gt; 80) ? &gt;\n" +
        "  true  -&gt; / Output \"Otdi\" /\n" +
        "  false -&gt; / Output \"Otmadi\" /</code></pre>" +
        "<p><b>Misol:</b> ball = 75, davomat = 90 &rarr; ikkala shart ham rost &rarr; \"O'tdi\".<br>" +
        "ball = 75, davomat = 50 &rarr; ikkinchi shart yolg'on &rarr; \"O'tmadi\" (AND tufayli).</p>",
    },
    {
      savol: "Uch sonning eng kattasini topuvchi dasturning blok-sxemasini yozing (ichma-ich shartlar yoki AND/OR yordamida).",
      tezlik: "Taxminiy vaqt: 10 daqiqa",
      javob:
        "<p><b>1-usul - ketma-ket solishtirish (tavsiya etiladi):</b></p>" +
        "<pre><code>( START )\n" +
        "  [ Declare a, b, c, katta As Integer ]\n" +
        "  / Input a /  / Input b /  / Input c /\n" +
        "  [ katta = a ]\n" +
        "  &lt; b &gt; katta ? &gt;   true -&gt; [ katta = b ]\n" +
        "  &lt; c &gt; katta ? &gt;   true -&gt; [ katta = c ]\n" +
        "  / Output \"Eng katta: \" and katta /\n" +
        "( END )</code></pre>" +
        "<p><b>2-usul - AND bilan:</b> <code>(a &gt;= b) and (a &gt;= c)</code> &rarr; a eng katta.</p>" +
        "<p>Birinchi usul qisqaroq va xatosizroq: <code>katta</code> o'zgaruvchisi bosqichma-bosqich yangilanib boradi.</p>" +
        "<p><b>Tekshirish:</b> a = 5, b = 9, c = 7 &rarr; avval katta = 5, keyin 9 ga aylanadi, oxirida 9 qoladi.</p>",
    },
  ],

  test: [
    {
      savol: "Tarmoqlanuvchi algoritm nima?",
      variantlar: [
        "Bloklar ketma-ket bajariladigan algoritm",
        "Shartga qarab turli yo'ldan boradigan algoritm",
        "Bir qismni ko'p marta takrorlaydigan algoritm",
        "Faqat sonlarni qo'shadigan algoritm",
      ],
      togri: 1,
      izoh: "Tarmoqlanuvchi algoritmda If (shart) bloki bo'ladi va yo'l shartga qarab bo'linadi.",
    },
    {
      savol: "Flowgorithm da teng emas qaysi belgi bilan yoziladi?",
      variantlar: ["!=", "<>", "=/=", "not ="],
      togri: 1,
      izoh: "Flowgorithm da teng emaslik <> bilan. Python da esa != ishlatiladi.",
    },
    {
      savol: "<code>son = 7</code> bo'lsa, <code>son mod 2 = 0</code> shartining natijasi qanday?",
      variantlar: ["true", "false", "xato", "7"],
      togri: 1,
      izoh: "7 mod 2 = 1, demak 1 = 0 sharti false. Bu son toq.",
    },
    {
      savol: "<code>AND</code> amali qachon true beradi?",
      variantlar: [
        "Shartlardan bittasi true bo'lsa yetarli",
        "Ikkala shart ham true bo'lsa",
        "Ikkala shart ham false bo'lsa",
        "Har doim",
      ],
      togri: 1,
      izoh: "AND - ikkala shart ham rost bo'lishi shart. OR da esa bittasi yetarli.",
    },
    {
      savol: "Python da tenglikni tekshirish uchun qaysi belgi ishlatiladi?",
      variantlar: ["=", "==", "equals", "<>"],
      togri: 1,
      izoh: "Python da = qiymat beradi, == tenglikni tekshiradi. Bu eng ko'p uchraydigan xato.",
    },
    {
      savol: "If-Else-If zanjirida nechta shoxobcha bajariladi?",
      variantlar: [
        "Hammasi",
        "Hech biri",
        "Birinchi true bo'lgani (faqat bittasi)",
        "Oxirgisi",
      ],
      togri: 2,
      izoh: "Zanjir yuqoridan pastga tekshiriladi va birinchi true bo'lgan shartda to'xtaydi - faqat bitta yo'l tanlanadi.",
    },
  ],

  lugat: [
    { soz: "Tarmoqlanuvchi algoritm", izoh: "Shartga qarab turli yo'ldan boradigan algoritm." },
    { soz: "Shart", izoh: "Javobi faqat true yoki false bo'ladigan savol." },
    { soz: "If bloki", izoh: "Flowgorithm da shartni tekshiruvchi blok (romb shaklida)." },
    { soz: "If-Else", izoh: "True uchun bir yo'l, false uchun boshqa yo'l beruvchi tuzilma." },
    { soz: "If-Else-If zanjiri", izoh: "Bir necha shartni ketma-ket tekshiruvchi tuzilma." },
    { soz: "Ichma-ich shart", izoh: "Shart ichida yana shart yozish (nested if)." },
    { soz: "AND", izoh: "Mantiqiy 'va' - ikkala shart ham rost bo'lishi kerak." },
    { soz: "OR", izoh: "Mantiqiy 'yoki' - kamida bittasi rost bo'lsa yetarli." },
    { soz: "NOT", izoh: "Inkor amali - natijani teskarisiga aylantiradi." },
    { soz: "Taqqoslash operatori", izoh: "= , <> , < , > , <= , >= belgilari." },
    { soz: "Haqiqat jadvali", izoh: "Mantiqiy amallar natijasini ko'rsatuvchi jadval." },
    { soz: "Indent", izoh: "Python da kod blokini belgilovchi bo'sh joy (4 ta)." },
  ],

  xatolar: [
    "Flowgorithm da shartni <code>[ son = 5 ]</code> blokida yozish - u qiymat beradi, tekshirmaydi.",
    "Flowgorithm da <code>==</code> yozish - u yerda bitta <code>=</code> ishlatiladi.",
    "Python da <code>if son = 5:</code> deb yozish - to'g'risi <code>if son == 5:</code>.",
    "<code>&gt;</code> va <code>&gt;=</code> ni aralashtirish - katta va katta yoki teng boshqa shartlar.",
    "AND o'rniga OR ishlatib, xavfsizlikni buzish (login tekshiruvida).",
    "If-Else-If da shartlar tartibini noto'g'ri tanlash - noto'g'ri javob chiqadi.",
    "Python da 4 bo'sh joy (indent) qo'ymaslik - <code>IndentationError</code> xatosi.",
    "Ichma-ich shartlarda shoxobchalarni chalkashtirib yuborish - har bir If ni tekshirish kerak.",
    "Shartni qog'ozda tekshirmaslik - ayniqsa chegaraviy qiymatlarni (0, teng holat).",
  ],

  keyingi:
    "Endi dasturimiz qaror qabul qila oladi: shart true bo'lsa bir yo'l, false bo'lsa boshqa yo'l. Keyingi darsda (26-dars, shu mavzuning 2-qismi) biz shartlarni yanada chuqurroq o'rganamiz: murakkab mantiqiy ifodalar, chegara holatlari, shartlar bilan bir nechta amaliy loyihalar (talaba baholash tizimi) va tez-tez uchraydigan mantiqiy xatolarni tuzatish usullarini ko'rib chiqamiz.",
});
