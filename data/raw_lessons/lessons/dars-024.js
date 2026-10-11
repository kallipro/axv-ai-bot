/* 24-dars: Flowgorithmda chiziqli algoritmlar yaratish */

AVX.dars({
  id: "cs8-024",
  sarlavha: "Flowgorithmda chiziqli algoritmlar yaratish",
  kiritish:
    "Oldingi darsda o'zgaruvchi va uning turlarini o'rgandik. Endi bu bilimni birlashtiramiz: dastur ma'lumotni <b>oladi</b>, <b>qayta ishlaydi</b> va <b>natijani chiqaradi</b>. Bloklar yuqoridan pastga, bir marta, navbat bilan bajarilsa &mdash; bu <b>chiziqli algoritm</b> deyiladi. Bugun biz aynan shunday dasturlar yozamiz: yuza hisoblash, o'rtacha baho, harorat o'girish va ikki sonni almashtirish.",

  maqsad: [
    "Chiziqli (ketma-ket) algoritm nima ekanligini tushunish.",
    "Har qanday chiziqli dasturning uch qismini ajratish: kirish, qayta ishlash, chiqish.",
    "Arifmetik amallar va ularning bajarilish tartibini o'zlashtirish.",
    "Flowgorithm da hisoblash bloklarini to'g'ri tuzishni o'rganish.",
    "Yozilgan diagrammani Python kodiga eksport qilib, ikkalasini solishtirish.",
  ],

  natija: [
    "Kirish &rarr; qayta ishlash &rarr; chiqish ketma-ketligida dastur quradi.",
    "Arifmetik ifodalarni to'g'ri yozadi va natijasini oldindan hisoblaydi.",
    "To'g'ri to'rtburchak, doira, o'rtacha baho kabi amaliy masalalarni yechadi.",
    "Ikki o'zgaruvchining qiymatini uchinchi o'zgaruvchi yordamida almashtiradi.",
    "Integer bo'lishning xususiyatini (butun bo'lish va qoldiq) amalda qo'llaydi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: o'zgaruvchi, turlar, Declare va Input."],
    ["5-15 daq", "Mentor tushuntirishi", "Chiziqli algoritm: kirish - qayta ishlash - chiqish."],
    ["15-25 daq", "Nazariya: arifmetik amallar", "Belgilar va amallar tartibi (qavs, daraja, * /, + -)."],
    ["25-40 daq", "Amaliyot: yuza hisoblash", "To'g'ri to'rtburchak va doira yuzasini hisoblash."],
    ["40-55 daq", "Amaliyot: o'rtacha va o'girish", "Uch sonning o'rtachasi, harorat o'girish."],
    ["55-70 daq", "Amaliyot: almashtirish va qoldiq", "Ikki sonni almashtirish, daqiqani soatga o'girish."],
    ["70-77 daq", "Mustaqil ish va uyga vazifa", "Kalkulyator loyihasini tugatish."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Chiziqli algoritm nima?",
      matn: [
        "<b>Chiziqli algoritm</b> - bloklar faqat <em>ketma-ket</em> bajariladigan algoritm. Hech qanday shart (agar...) va takrorlash (sikl) yo'q. Dastur boshidan oxirigacha bir marta, to'g'ri chiziq bo'ylab o'tadi.",
        "Hayotdan misol: choy damlash. Suv qaynaydi &rarr; choynakka choy solinadi &rarr; suv quyiladi &rarr; 5 daqiqa kutish &rarr; quyish. Har bir qadam bir marta, ketma-ket.",
        "Diqqat: real dasturlarda chiziqli algoritm ko'p uchraydi, lekin u eng oddiy tur. Keyingi darslarda shart va takrorlash qo'shiladi &mdash; o'shanda dastur \"aqlli\" bo'ladi.",
      ],
    },
    {
      sarlavha: "2. Uch qism: kirish, qayta ishlash, chiqish",
      matn: [
        "Har qanday chiziqli dastur aynan shu uch qismdan iborat. Bu naqshni eslab qolsangiz, istalgan masalani dasturga aylantira olasiz.",
        "<b>1. Kirish (Input)</b> - kerakli ma'lumot olinadi: son, ism, o'lchov. <b>2. Qayta ishlash (Assign)</b> - hisob-kitob qilinadi, formulalar qo'llanadi. <b>3. Chiqish (Output)</b> - natija ekranga chiqariladi.",
        "Masalani yechishda avval qog'ozda shu uch qismni yozib oling. Keyin Flowgorithm da bloklarga aylantirish oson kechadi.",
      ],
    },
    {
      sarlavha: "3. Arifmetik amallar va tartibi",
      matn: [
        "Flowgorithm da amallar belgilari: <code>+</code> qo'shish, <code>-</code> ayirish, <code>*</code> ko'paytirish, <code>/</code> bo'lish, <code>mod</code> qoldiq, <code>^</code> daraja.",
        "Amallar <em>tartib bilan</em> bajariladi, xuddi matematikadagidek: avval qavs, keyin daraja, keyin ko'paytirish va bo'lish, oxirida qo'shish va ayirish.",
        "Eng ko'p uchraydigan xato: <code>2 + 3 * 4</code> ni <code>20</code> deb hisoblash. Aslida avval <code>3 * 4 = 12</code>, keyin <code>2 + 12 = 14</code>. Agar <code>20</code> kerak bo'lsa, qavs qo'yish shart: <code>(2 + 3) * 4</code>.",
      ],
    },
    {
      sarlavha: "4. Integer bo'lishning xususiyati",
      matn: [
        "Ikkita Integer sonni <code>/</code> bilan bo'lsangiz, natija ham butun son bo'ladi va kasr qismi tashlanadi: <code>7 / 2 = 3</code>.",
        "Qoldiqni olish uchun <code>mod</code> ishlatiladi: <code>7 mod 2 = 1</code>. Ya'ni 7 ni 2 ga bo'lganda qoldiq 1 qoladi.",
        "Bu ikki amal juda foydali: daqiqani soat va daqiqaga aylantirish, sonning juft-toqligini aniqlash, raqamlar yig'indisini topish kabi masalalarda ishlatiladi.",
      ],
    },
    {
      sarlavha: "5. Ikki sonni almashtirish - klassik masala",
      matn: [
        "Savol: <code>a = 5</code>, <code>b = 3</code>. Ularning qiymatlarini almashtirish kerak: <code>a = 3</code>, <code>b = 5</code>. Nega oddiygina <code>a = b</code>, keyin <code>b = a</code> qilish yetarli emas?",
        "Chunki <code>a = b</code> bajarilgach, <code>a</code> ning eski qiymati (5) yo'qoladi. Endi <code>a</code> ham, <code>b</code> ham 3 ga teng bo'lib qoladi.",
        "Yechim: vaqtinchalik uchinchi o'zgaruvchi kerak. <code>vaqtinchalik = a</code> &rarr; <code>a = b</code> &rarr; <code>b = vaqtinchalik</code>. Bu - ikki stakan suvni almashtirish uchun bo'sh uchinchi stakan kerakligiga o'xshaydi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Chiziqli algoritmning tuzilishi",
      matn: [
        "Bloklar faqat pastga qarab, ketma-ket joylashadi. Orqaga qaytish ham, shoxlanish ham yo'q.",
      ],
      jadval: [
        ["Qism", "Blok", "Vazifasi", "Misol"],
        ["Kirish", "/ Input /", "Ma'lumot olish", "/ Input a /"],
        ["Qayta ishlash", "[ = ]", "Hisob-kitob qilish", "[ s = a + b ]"],
        ["Chiqish", "/ Output /", "Natijani ko'rsatish", "/ Output s /"],
      ],
    },
    {
      sarlavha: "2. Arifmetik amallar belgilari",
      matn: [
        "Flowgorithm, Python va boshqa tillarda amallar deyarli bir xil yoziladi.",
      ],
      jadval: [
        ["Amal", "Belgi", "Misol", "Natija"],
        ["Qo'shish", "+", "7 + 3", "10"],
        ["Ayirish", "-", "7 - 3", "4"],
        ["Ko'paytirish", "*", "7 * 3", "21"],
        ["Bo'lish", "/", "7 / 2", "3.5 (Real)"],
        ["Butun bo'lish", "/", "7 / 2 (Integer)", "3"],
        ["Qoldiq", "mod", "7 mod 2", "1"],
        ["Daraja", "^", "2 ^ 3", "8"],
      ],
    },
    {
      sarlavha: "3. Amallar bajarilish tartibi",
      matn: [
        "Tartib matematikadagi bilan bir xil. Chapdan o'ngga qarab, lekin yuqoridagi amallar ustunlik qiladi.",
      ],
      jadval: [
        ["Tartib", "Amal", "Misol", "Hisoblash"],
        ["1", "Qavslar ( )", "(2 + 3) * 4", "5 * 4 = 20"],
        ["2", "Daraja ^", "2 + 3 ^ 2", "2 + 9 = 11"],
        ["3", "Ko'paytirish va bo'lish", "2 + 3 * 4", "2 + 12 = 14"],
        ["4", "Qo'shish va ayirish", "10 - 4 + 2", "6 + 2 = 8"],
      ],
    },
    {
      sarlavha: "4. Integer va Real bo'lish farqi",
      matn: [
        "Bir xil <code>/</code> belgisi turlarga qarab boshqacha ishlaydi. Buni yodda tutish juda muhim.",
      ],
      jadval: [
        ["Ifoda", "Turi", "Natija", "Sabab"],
        ["7 / 2", "Real", "3.5", "Kasr saqlanadi"],
        ["7 / 2", "Integer", "3", "Kasr tashlanadi"],
        ["7 mod 2", "Integer", "1", "Qoldiq qoladi"],
        ["10 / 5", "Integer", "2", "Qoldiq yo'q"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "royxat",
      "sarlavha": "Chiziqli dastur: uch qism",
      "tushuntirish": "Har qanday chiziqli dastur ketma-ket uch qismdan iborat. Bu tartib hech qachon o'zgarmaydi.",
      "elementlar": [
        {
          "belgi": "📥",
          "nom": "1. Kiritish",
          "izoh": "Kerakli ma'lumotlar foydalanuvchidan olinadi"
        },
        {
          "belgi": "🧮",
          "nom": "2. Hisoblash",
          "izoh": "Formulalar bo'yicha natija hisoblanadi"
        },
        {
          "belgi": "📤",
          "nom": "3. Chiqarish",
          "izoh": "Natija tushunarli ko'rinishda ko'rsatiladi"
        }
      ],
      "izoh": "Agar dastur ishlamasa &mdash; avval shu uch qism <b>tartibda</b> turganini tekshiring."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Amallar tartibi: qavs bor va yo'q",
      "tushuntirish": "Qavs natijani butunlay o'zgartirishi mumkin. Shuning uchun formulada tartibni aniq ko'rsatish kerak.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Qavssiz",
          "royxat": [
            "<code>2 + 3 * 4</code> = 14",
            "Avval ko'paytirish bajariladi",
            "Ko'pincha kutilmagan natija beradi"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Qavs bilan",
          "royxat": [
            "<code>(2 + 3) * 4</code> = 20",
            "Avval qavs ichi bajariladi",
            "Natija aniq va tushunarli"
          ]
        }
      ],
      "izoh": "Qoida: shubha bo'lsa &mdash; <b>qavs qo'ying</b>. Ortiqcha qavs hech qachon zarar qilmaydi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Ikki o'zgaruvchi qiymatini almashtirish",
      "tushuntirish": "Klassik masala: ikki qutidagi qiymatni joyini almashtirish kerak. Buning uchun vaqtincha uchinchi quti kerak.",
      "elementlar": [
        {
          "nom": "Vaqtinchalik quti olinadi",
          "izoh": "<code>vaqtincha = a</code> &mdash; a ning qiymati saqlanadi"
        },
        {
          "nom": "a ga b ning qiymati yoziladi",
          "izoh": "<code>a = b</code>"
        },
        {
          "nom": "b ga saqlangan qiymat yoziladi",
          "izoh": "<code>b = vaqtincha</code>"
        },
        {
          "nom": "Natija tekshiriladi",
          "izoh": "Endi qiymatlar joyini almashtirgan"
        }
      ],
      "izoh": "Vaqtinchalik quti bo'lmasa, birinchi qiymat <b>yo'qolib qoladi</b>."
    },
    {
      "tur": "qadam",
      "sarlavha": "Butun bo'lish va qoldiq: daqiqa masalasi",
      "tushuntirish": "250 daqiqa &mdash; necha soat va necha daqiqa? Buni butun bo'lish va qoldiq amallari hal qiladi.",
      "elementlar": [
        {
          "nom": "Butun bo'lish",
          "izoh": "<code>250 / 60</code> ning butun qismi = <b>4 soat</b>"
        },
        {
          "nom": "Qoldiq olish",
          "izoh": "<code>250 mod 60</code> = <b>10 daqiqa</b>"
        },
        {
          "nom": "Natijani birlashtirish",
          "izoh": "4 soat 10 daqiqa"
        },
        {
          "nom": "Tekshirish",
          "izoh": "4 &#215; 60 + 10 = 250 &mdash; to'g'ri"
        }
      ],
      "izoh": "Bu ikki amal vaqt, pul va o'lchov birliklarini hisoblashda doim kerak bo'ladi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Bugungi masalalar va formulalar",
      "tushuntirish": "Chiziqli algoritmga oid masalalar bir joyda &mdash; har biri uchun asosiy formula ko'rsatilgan.",
      "oyna": {
        "nom": "Chiziqli masalalar",
        "ustunlar": [
          "Masala",
          "Formula",
          "Eslatma"
        ],
        "qatorlar": [
          [
            "To'rtburchak yuzasi",
            "S = a &#215; b",
            "bo'yi va eni kiritiladi"
          ],
          [
            "Doira yuzasi",
            "S = pi &#215; r &#215; r",
            "pi doimiy son"
          ],
          [
            "Harorat",
            "F = C &#215; 9 / 5 + 32",
            "tartib muhim"
          ],
          [
            "O'rtacha baho",
            "(a + b + c) / 3",
            "qavs shart"
          ],
          [
            "Xarid summasi",
            "narx &#215; soni &#215; (1 - chegirma)",
            "chegirma foizda"
          ]
        ]
      },
      "izoh": "Har bir masalani avval <b>qo'lda</b> hisoblab, keyin dastur natijasi bilan solishtiring."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Arifmetik amallar bloklari",
      "tushuntirish": "Flowgorithm da amallar <code>Assign</code> bloki ichida yoziladi. Har bir blok bitta hisobni bajaradi.",
      "nom": "amallar.txt",
      "til": "flow",
      "izoh": "Bitta blokda bitta amal qilish o'qishni osonlashtiradi.",
      "kod": "BLOK-SXEMA: Beshta arifmetik amal\n\n        ( START )\n            |\n   [ Declare a As Integer ]\n   [ Declare b As Integer ]\n            |\n   [ a = 17 ]\n   [ b = 5  ]\n            |\n   [ yigindi = a + b ]       -> 22\n   [ ayirma  = a - b ]       -> 12\n   [ kopaytma = a * b ]      -> 85\n   [ bolish  = a / b ]       -> 3   (Integer!)\n   [ qoldiq  = a mod b ]     -> 2\n            |\n   / Output \"Yigindi: \" and yigindi   /\n   / Output \"Ayirma:  \" and ayirma    /\n   / Output \"Kopaytma:\" and kopaytma  /\n   / Output \"Bolish:  \" and bolish    /\n   / Output \"Qoldiq:  \" and qoldiq    /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Yigindi: 22\n  Ayirma:  12\n  Kopaytma:85\n  Bolish:  3\n  Qoldiq:  2\n\n17 / 5 = 3.4 emas, balki 3 - chunki ikkala son Integer.\n17 mod 5 = 2 - qoldiq."
    },
    {
      "sarlavha": "Amallar tartibi va qavs",
      "tushuntirish": "Bir xil ifoda qavs qo'yilganda va qo'yilmaganda butunlay boshqa natija beradi. Buni misolda ko'ramiz.",
      "nom": "tartib.txt",
      "til": "flow",
      "izoh": "Hisoblashda ikkilanib qolsangiz, qavs qo'ying - xato bo'lmaydi.",
      "kod": "BLOK-SXEMA: Amallar tartibi\n\n        ( START )\n            |\n   [ qavssiz = 2 + 3 * 4 ]          -> 14\n   [ qavsli  = (2 + 3) * 4 ]        -> 20\n   [ daraja  = 2 + 3 ^ 2 ]          -> 11\n   [ chapdan = 20 - 8 + 3 ]         -> 15\n            |\n   / Output \"2 + 3 * 4     = \" and qavssiz /\n   / Output \"(2 + 3) * 4   = \" and qavsli  /\n   / Output \"2 + 3 ^ 2     = \" and daraja  /\n   / Output \"20 - 8 + 3    = \" and chapdan /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  2 + 3 * 4     = 14\n  (2 + 3) * 4   = 20\n  2 + 3 ^ 2     = 11\n  20 - 8 + 3    = 15\n\nBirinchi ikki natijani solishtiring: yagona farq - QAVS."
    },
    {
      "sarlavha": "To'g'ri to'rtburchakning yuzasi va perimetri",
      "tushuntirish": "Birinchi haqiqiy masala: bo'yi va eni berilgan to'g'ri to'rtburchakning yuzasi va perimetrini hisoblaymiz.",
      "nom": "tortburchak.txt",
      "til": "flow",
      "izoh": "Formula: yuza = boy * eni, perimetr = 2 * (boy + eni).",
      "kod": "BLOK-SXEMA: To'g'ri to'rtburchak\n\n        ( START )\n            |\n   [ Declare boy As Real  ]\n   [ Declare eni As Real  ]\n   [ Declare yuza As Real ]\n   [ Declare perimetr As Real ]\n            |\n   / Input boy (savol: \"Boyi (m): \") /\n   / Input eni (savol: \"Eni (m): \")  /\n            |\n   [ yuza = boy * eni ]\n   [ perimetr = 2 * (boy + eni) ]\n            |\n   / Output \"Yuza:     \" and yuza and \" m2\" /\n   / Output \"Perimetr: \" and perimetr and \" m\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Boyi (m): 5\n  Eni (m): 3\n  Yuza:     15.0 m2\n  Perimetr: 16.0 m\n\n5 * 3 = 15        - yuza\n2 * (5 + 3) = 16  - perimetr (qavs bo'lmasa 2*5+3 = 13 bo'lardi!)"
    },
    {
      "sarlavha": "Uch sonning yig'indisi va o'rtachasi",
      "tushuntirish": "Uchta bahoning yig'indisini va o'rtachasini topamiz. Bu yerda Integer va Real farqi juda muhim.",
      "nom": "ortacha.txt",
      "til": "flow",
      "izoh": "O'rtacha hisoblashda natija Real bo'lishi kerak, aks holda kasr yo'qoladi.",
      "kod": "BLOK-SXEMA: Uch bahoning o'rtachasi\n\n        ( START )\n            |\n   [ Declare b1 As Integer ]\n   [ Declare b2 As Integer ]\n   [ Declare b3 As Integer ]\n   [ Declare yigindi As Integer ]\n   [ Declare ortacha As Real    ]\n            |\n   / Input b1 (savol: \"1-baho: \") /\n   / Input b2 (savol: \"2-baho: \") /\n   / Input b3 (savol: \"3-baho: \") /\n            |\n   [ yigindi = b1 + b2 + b3 ]\n   [ ortacha = yigindi / 3.0 ]\n            |\n   / Output \"Yigindi:  \" and yigindi  /\n   / Output \"Ortacha:  \" and ortacha  /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  1-baho: 4\n  2-baho: 5\n  3-baho: 3\n  Yigindi:  12\n  Ortacha:  4.0\n\nMUHIM: 12 / 3.0 deb yozdik. Agar 12 / 3 deb yozilsa ham\n4.0 chiqadi, lekin 12 / 5 bo'lganida 2.4 kerak - shuning uchun\no'rtachada doim Real bo'lish xavfsiz."
    },
    {
      "sarlavha": "Doira yuzasi va aylanasi",
      "tushuntirish": "Radius berilgan doiraming yuzasi va aylana uzunligini hisoblaymiz. Bu yerda doimiy son pi ishlatiladi.",
      "nom": "doira.txt",
      "til": "flow",
      "izoh": "pi soni Flowgorithm da tayyor: 3.14159... dan foydalaning.",
      "kod": "BLOK-SXEMA: Doira\n\n        ( START )\n            |\n   [ Declare radius As Real ]\n   [ Declare yuza As Real   ]\n   [ Declare aylana As Real ]\n            |\n   / Input radius (savol: \"Radius (m): \") /\n            |\n   [ yuza = pi * radius ^ 2 ]\n   [ aylana = 2 * pi * radius ]\n            |\n   / Output \"Yuza:   \" and yuza and \" m2\"  /\n   / Output \"Aylana: \" and aylana and \" m\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Radius (m): 5\n  Yuza:   78.5398 m2\n  Aylana: 31.4159 m\n\nFormula: yuza = pi * r^2, aylana = 2 * pi * r.\nE'tibor bering: daraja ^ belgisi bilan yoziladi."
    },
    {
      "sarlavha": "Haroratni Celsiydan Farengeytga o'girish",
      "tushuntirish": "Formula: <code>F = C * 9 / 5 + 32</code>. Bu yerda amallar tartibi juda muhim.",
      "nom": "harorat.txt",
      "til": "flow",
      "izoh": "Avval ko'paytirish va bo'lish, keyin qo'shish bajariladi.",
      "kod": "BLOK-SXEMA: Celsiydan Farengeytga\n\n        ( START )\n            |\n   [ Declare c As Real ]\n   [ Declare f As Real ]\n            |\n   / Input c (savol: \"Harorat (C): \") /\n            |\n   [ f = c * 9 / 5 + 32 ]\n            |\n   / Output c and \" C = \" and f and \" F\" /\n            |\n        ( END )\n\nAMALLAR TARTIBI:\n   c * 9     -> birinchi ko'paytirish\n   / 5       -> keyin bo'lish\n   + 32      -> oxirida qo'shish\n\nAgar noto'g'ri qavs qo'yilsa: (c * 9) / (5 + 32) - natija buziladi!",
      "natija": "Konsol:\n\n  Harorat (C): 25\n  25.0 C = 77.0 F\n\nTekshirish: 25 * 9 = 225, 225 / 5 = 45, 45 + 32 = 77.\n\n  Harorat (C): 0\n  0.0 C = 32.0 F   - suvning muzlash nuqtasi."
    },
    {
      "sarlavha": "Ikki sonni almashtirish (swap)",
      "tushuntirish": "Klassik masala: ikki o'zgaruvchining qiymatini almashtirish. Buning uchun vaqtinchalik uchinchi o'zgaruvchi kerak.",
      "nom": "almashtirish.txt",
      "til": "flow",
      "izoh": "Uchinchi o'zgaruvchisiz almashtirish qiymatlardan birini yo'qotadi.",
      "kod": "BLOK-SXEMA: Ikki sonni almashtirish\n\n        ( START )\n            |\n   [ Declare a As Integer ]\n   [ Declare b As Integer ]\n   [ Declare vaqtinchalik As Integer ]\n            |\n   [ a = 5 ]\n   [ b = 3 ]\n   / Output \"Avval:  a = \" and a and \", b = \" and b /\n            |\n   [ vaqtinchalik = a ]      <- 1-qadam: a ni saqlab qo'yamiz\n   [ a = b ]                 <- 2-qadam: b ni a ga ko'chiramiz\n   [ b = vaqtinchalik ]      <- 3-qadam: saqlangan qiymatni b ga\n            |\n   / Output \"Keyin:  a = \" and a and \", b = \" and b /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Avval:  a = 5, b = 3\n  Keyin:  a = 3, b = 5\n\nTrace table:\n  qadam |  a  |  b  | vaqtinchalik\n    0   |  5  |  3  |     -\n    1   |  5  |  3  |     5\n    2   |  3  |  3  |     5\n    3   |  3  |  5  |     5"
    },
    {
      "sarlavha": "Daqiqani soat va daqiqaga aylantirish",
      "tushuntirish": "Butun bo'lish va qoldiq amalini haqiqiy masalada ko'ramiz: 250 daqiqa necha soat va necha daqiqa?",
      "nom": "daqiqa.txt",
      "til": "flow",
      "izoh": "mod va / amallari aynan shu turdagi masalalar uchun yaratilgan.",
      "kod": "BLOK-SXEMA: Daqiqani soatga aylantirish\n\n        ( START )\n            |\n   [ Declare jamiDaqiqa As Integer ]\n   [ Declare soat As Integer       ]\n   [ Declare daqiqa As Integer     ]\n            |\n   / Input jamiDaqiqa (savol: \"Daqiqa: \") /\n            |\n   [ soat = jamiDaqiqa / 60 ]        <- butun bo'lish\n   [ daqiqa = jamiDaqiqa mod 60 ]    <- qoldiq\n            |\n   / Output jamiDaqiqa and \" daqiqa = \" and soat and \" soat \" and daqiqa and \" daqiqa\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Daqiqa: 250\n  250 daqiqa = 4 soat 10 daqiqa\n\nTekshirish: 250 / 60 = 4 (butun qism), 250 mod 60 = 10 (qoldiq).\n4 * 60 + 10 = 250 - to'g'ri."
    },
    {
      "sarlavha": "Xarid summasi va chegirma",
      "tushuntirish": "Do'kon masalasi: narx va soni kiritiladi, chegirma foizi qo'llanadi, yakuniy summa chiqariladi.",
      "nom": "xarid.txt",
      "til": "flow",
      "izoh": "Foizni hisoblashda 100 ga bo'lish kerak - eng ko'p unutiladigan joy.",
      "kod": "BLOK-SXEMA: Xarid summasi\n\n        ( START )\n            |\n   [ Declare narx As Real      ]\n   [ Declare soni As Integer   ]\n   [ Declare jami As Real      ]\n   [ Declare chegirma As Real  ]\n   [ Declare yakuniy As Real   ]\n            |\n   / Input narx (savol: \"Narx (som): \")    /\n   / Input soni (savol: \"Soni: \")           /\n            |\n   [ jami = narx * soni ]\n   [ chegirma = jami * 10 / 100 ]      <- 10% chegirma\n   [ yakuniy = jami - chegirma ]\n            |\n   / Output \"Jami:      \" and jami /\n   / Output \"Chegirma:  \" and chegirma /\n   / Output \"To'lash:   \" and yakuniy /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Narx (som): 25000\n  Soni: 4\n  Jami:      100000.0\n  Chegirma:  10000.0\n  To'lash:   90000.0\n\n25000 * 4 = 100000; 10% = 10000; 100000 - 10000 = 90000."
    },
    {
      "sarlavha": "Yakuniy loyiha: mini kalkulyator",
      "tushuntirish": "Bugungi darsning yakuni: ikki sonni olib, to'rtta amalni bajaradigan chiziqli kalkulyator.",
      "nom": "kalkulyator.txt",
      "til": "flow",
      "izoh": "Bu loyiha kirish - qayta ishlash - chiqish naqshining to'liq namunasi.",
      "kod": "BLOK-SXEMA: Mini kalkulyator\n\n        ( START )\n            |\n   [ Declare a As Real ]\n   [ Declare b As Real ]\n   [ Declare yigindi As Real ]\n   [ Declare ayirma As Real  ]\n   [ Declare kopaytma As Real ]\n   [ Declare bolish As Real  ]\n            |\n   / Input a (savol: \"1-son: \") /\n   / Input b (savol: \"2-son: \") /\n            |\n   [ yigindi  = a + b ]\n   [ ayirma   = a - b ]\n   [ kopaytma = a * b ]\n   [ bolish   = a / b ]\n            |\n   / Output a and \" + \" and b and \" = \" and yigindi  /\n   / Output a and \" - \" and b and \" = \" and ayirma   /\n   / Output a and \" * \" and b and \" = \" and kopaytma /\n   / Output a and \" / \" and b and \" = \" and bolish   /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  1-son: 12\n  2-son: 4\n  12.0 + 4.0 = 16.0\n  12.0 - 4.0 = 8.0\n  12.0 * 4.0 = 48.0\n  12.0 / 4.0 = 3.0\n\nDiqqat: 0 ga bo'lish mumkin emas. Shart blokini keyingi\ndarsda o'rganamiz - o'shanda buni ham tekshiramiz."
    }
  ],

  amaliy: [
    "Flowgorithm da <code>2 + 3 * 4</code>, <code>(2 + 3) * 4</code> va <code>2 ^ 3 + 1</code> ifodalarini alohida bloklarda hisoblab, natijalarni konsolga chiqaring. Kutilgan javoblar: 14, 20, 9.",
    "To'g'ri to'rtburchakning yuzasi va perimetrini hisoblaydigan dastur tuzing. Qiymatlarni foydalanuvchidan <code>Input</code> orqali oling.",
    "Uch sonning yig'indisi va o'rtachasini toping. O'rtacha natijasi kasr son bo'lishini tekshiring (masalan, 4, 5, 3 uchun javob 4.0).",
    "Haroratni Celsiydan Farengeytga o'giruvchi dastur quring. 0, 25 va 100 qiymatlari uchun natijani tekshiring (javoblar: 32, 77, 212).",
    "Ikki o'zgaruvchining qiymatini uchinchi (vaqtinchalik) o'zgaruvchi yordamida almashtiring. Avval va keyingi holatni ekranga chiqaring.",
    "Foydalanuvchi kiritgan daqiqa sonini soat va daqiqaga aylantiring (<code>/</code> va <code>mod</code> amallari bilan). 250 daqiqa uchun javob: 4 soat 10 daqiqa.",
    "Mini kalkulyator loyihasini tuzib, <code>.fpr</code> nom bilan saqlang. So'ng <b>Tools &rarr; Source Code Viewer</b> orqali Python kodini ham ko'rib chiqing.",
  ],

  uyga: [
    {
      savol: "<b>Chiziqli algoritm</b> nima? U bilan tarmoqlanuvchi va takrorlanuvchi algoritmlar o'rtasidagi farqni yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Chiziqli algoritm</b> - bloklar faqat ketma-ket, bir marta, yuqoridan pastga bajariladigan algoritm. Unda shart ham, takrorlash ham bo'lmaydi.</p>" +
        "<ul>" +
        "<li><b>Chiziqli:</b> boshidan oxirigacha bir marta o'tadi. Misol: yuza hisoblash.</li>" +
        "<li><b>Tarmoqlanuvchi:</b> shartga qarab turli yo'ldan boradi (agar... bo'lsa). Misol: bahoni aniqlash.</li>" +
        "<li><b>Takrorlanuvchi:</b> bir qismini ko'p marta bajaradi (sikl). Misol: 1 dan 10 gacha sonlarni chiqarish.</li>" +
        "</ul>" +
        "<p>Chiziqli algoritm - eng oddiy tur, lekin qolgan ikkalasining asosi ham shu.</p>",
    },
    {
      savol: "Har qanday chiziqli dasturning <b>uch qismini</b> aytib bering va har biriga blok nomini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Kirish</b> &mdash; <code>/ Input /</code> bloki. Foydalanuvchidan ma'lumot olinadi: son, ism, o'lchov.</li>" +
        "<li><b>Qayta ishlash</b> &mdash; <code>[ = ]</code> (Assign) bloki. Formulalar bo'yicha hisob-kitob qilinadi.</li>" +
        "<li><b>Chiqish</b> &mdash; <code>/ Output /</code> bloki. Natija konsolga chiqariladi.</li>" +
        "</ol>" +
        "<p>Bu naqsh har qanday masalani yechishda ishlatiladi: avval nima kirishini, keyin nima hisoblanishini, oxirida nima chiqishini yozib olish kerak.</p>",
    },
    {
      savol: "Quyidagi ifodalarni hisoblang va jarayonni tushuntiring:<br><code>10 + 2 * 5</code>, <code>(10 + 2) * 5</code>, <code>20 / 4 + 3</code>, <code>20 / (4 + 1)</code>.",
      tezlik: "Taxminiy vaqt: 8 daqiqa",
      javob:
        "<ul>" +
        "<li><code>10 + 2 * 5</code> = 10 + 10 = <b>20</b> (avval ko'paytirish);</li>" +
        "<li><code>(10 + 2) * 5</code> = 12 * 5 = <b>60</b> (qavs birinchi);</li>" +
        "<li><code>20 / 4 + 3</code> = 5 + 3 = <b>8</b> (avval bo'lish);</li>" +
        "<li><code>20 / (4 + 1)</code> = 20 / 5 = <b>4</b> (qavs birinchi).</li>" +
        "</ul>" +
        "<p>Qoida: <b>qavs &rarr; daraja &rarr; ko'paytirish va bo'lish &rarr; qo'shish va ayirish</b>. Qavs natijani butunlay o'zgartirishi mumkin.</p>",
    },
    {
      savol: "<code>a = 8</code> va <code>b = 3</code> bo'lsa, <code>a / b</code>, <code>a mod b</code> natijalarini yozing. Ularning ma'nosi nima?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><code>a / b</code> = 8 / 3 = <b>2</b> (Integer bo'lish - kasr qismi tashlanadi).</p>" +
        "<p><code>a mod b</code> = 8 mod 3 = <b>2</b> (qoldiq).</p>" +
        "<p>Ma'nosi: 8 ni 3 ga bo'lganda <b>2 ta to'liq</b> guruh chiqadi va <b>2 ta</b> ortiqcha qoladi.</p>" +
        "<p>Hayotiy misol: 8 ta konfetni 3 bolaga teng bo'lsak, har biriga 2 tadan tegadi, 2 tasi ortib qoladi.</p>" +
        "<p>Agarda <code>a</code> Real turida bo'lsa, <code>8 / 3 = 2.666...</code> bo'lardi.</p>",
    },
    {
      savol: "Nima uchun ikki sonni almashtirishda uchinchi o'zgaruvchi kerak? <code>a = b</code>, <code>b = a</code> ketma-ketligi nima uchun xato?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Boshlanishda <code>a = 5</code>, <code>b = 3</code> bo'lsin.</p>" +
        "<ol>" +
        "<li><code>a = b</code> bajarilgach: <code>a = 3</code> va <code>b = 3</code>. <b>5 raqami yo'qoldi!</b></li>" +
        "<li><code>b = a</code> bajarilgach: <code>b = 3</code> bo'lib qoladi - natija <code>a = 3</code>, <code>b = 3</code>. Xato!</li>" +
        "</ol>" +
        "<p>To'g'ri ketma-ketlik (uchinchi o'zgaruvchi bilan):</p>" +
        "<ol>" +
        "<li><code>vaqtinchalik = a</code> &mdash; 5 ni saqlab qo'yamiz;</li>" +
        "<li><code>a = b</code> &mdash; a ga 3 ni yozamiz;</li>" +
        "<li><code>b = vaqtinchalik</code> &mdash; b ga saqlangan 5 ni yozamiz.</li>" +
        "</ol>" +
        "<p>Natija: <code>a = 3</code>, <code>b = 5</code>. Bu - ikki stakan suvni almashtirish uchun bo'sh uchinchi stakan kerakligi bilan bir xil.</p>",
    },
    {
      savol: "Foydalanuvchi kiritgan <b>sekund</b> sonini soat, daqiqa va sekundga aylantiruvchi dasturning blok-sxemasini yozing (masalan, 3725 sekund = 1 soat 2 daqiqa 5 sekund).",
      tezlik: "Taxminiy vaqt: 10 daqiqa",
      javob:
        "<pre><code>( START )\n" +
        "  [ Declare jami As Integer ]\n" +
        "  [ Declare soat As Integer ]\n" +
        "  [ Declare daqiqa As Integer ]\n" +
        "  [ Declare sekund As Integer ]\n" +
        "  / Input jami (savol: \"Sekund: \") /\n" +
        "  [ soat = jami / 3600 ]\n" +
        "  [ daqiqa = (jami mod 3600) / 60 ]\n" +
        "  [ sekund = jami mod 60 ]\n" +
        "  / Output soat and \" soat \" and daqiqa and \" daqiqa \" and sekund and \" sekund\" /\n" +
        "( END )</code></pre>" +
        "<p><b>Tekshirish:</b> 3725 sekund uchun:</p>" +
        "<ul>" +
        "<li><code>soat = 3725 / 3600 = 1</code>;</li>" +
        "<li><code>jami mod 3600 = 125</code>, keyin <code>125 / 60 = 2</code> daqiqa;</li>" +
        "<li><code>sekund = 3725 mod 60 = 5</code>.</li>" +
        "</ul>" +
        "<p>Natija: <code>1 soat 2 daqiqa 5 sekund</code>. Qavs mod amalidan keyin qo'yilganiga diqqat qiling.</p>",
    },
    {
      savol: "Do'konda xarid qildingiz: 3 ta daftar (narxi 4500 so'm), 2 ta ruchka (narxi 2500 so'm). Umumiy summani va 15% chegirmadan keyingi to'lovni hisoblovchi dastur tuzing.",
      tezlik: "Taxminiy vaqt: 10 daqiqa",
      javob:
        "<p><b>Qo'lda hisoblash:</b></p>" +
        "<ul>" +
        "<li>Daftarlar: <code>3 * 4500 = 13500</code>;</li>" +
        "<li>Ruchkalar: <code>2 * 2500 = 5000</code>;</li>" +
        "<li>Jami: <code>13500 + 5000 = 18500</code>;</li>" +
        "<li>Chegirma: <code>18500 * 15 / 100 = 2775</code>;</li>" +
        "<li>To'lov: <code>18500 - 2775 = 15725</code>.</li>" +
        "</ul>" +
        "<p><b>Blok-sxema qismi:</b></p>" +
        "<pre><code>[ jami = 3 * 4500 + 2 * 2500 ]\n" +
        "[ chegirma = jami * 15 / 100 ]\n" +
        "[ tolov = jami - chegirma ]\n" +
        "/ Output \"Jami: \" and jami /\n" +
        "/ Output \"Chegirmadan keyin: \" and tolov /</code></pre>" +
        "<p><b>Javob:</b> jami 18 500 so'm, chegirmadan keyin 15 725 so'm.</p>",
    },
  ],

  test: [
    {
      savol: "Chiziqli algoritm nima?",
      variantlar: [
        "Shartga qarab yo'nalishni tanlaydigan algoritm",
        "Bloklar ketma-ket, bir marta bajariladigan algoritm",
        "Bir qismni ko'p marta takrorlaydigan algoritm",
        "Faqat sonlarni qo'shadigan algoritm",
      ],
      togri: 1,
      izoh: "Chiziqli algoritmda shart ham, takrorlash ham yo'q - bloklar ketma-ket bajariladi.",
    },
    {
      savol: "Quyidagi ifodaning natijasi nechchi: 2 + 3 * 4 ?",
      variantlar: ["20", "14", "24", "9"],
      togri: 1,
      izoh: "Avval ko'paytirish: 3 * 4 = 12, keyin qo'shish: 2 + 12 = 14.",
    },
    {
      savol: "Integer turida 17 / 5 ning natijasi nechchi?",
      variantlar: ["3.4", "3", "4", "2"],
      togri: 1,
      izoh: "Integer bo'lishda kasr qismi tashlanadi: 17 / 5 = 3. Qoldiq 17 mod 5 = 2.",
    },
    {
      savol: "7 mod 3 ning natijasi nechchi?",
      variantlar: ["2", "3", "2.33", "1"],
      togri: 3,
      izoh: "mod - bo'lishdan qolgan qoldiq. 7 / 3 = 2 (butun qism), 2 * 3 = 6, 7 - 6 = 1. Demak 7 mod 3 = 1.",
    },
    {
      savol: "Chiziqli dasturning uch qismi qaysilar?",
      variantlar: [
        "Boshlanish, tugash, saqlash",
        "Kirish, qayta ishlash, chiqish",
        "Shart, sikl, funksiya",
        "Son, matn, mantiqiy",
      ],
      togri: 1,
      izoh: "Har qanday chiziqli dastur: kirish (Input) - qayta ishlash (Assign) - chiqish (Output).",
    },
    {
      savol: "Ikki sonni almashtirish uchun nima kerak?",
      variantlar: [
        "Hech narsa, a = b va b = a yetarli",
        "Vaqtinchalik uchinchi o'zgaruvchi",
        "Shart bloki",
        "Takrorlash bloki",
      ],
      togri: 1,
      izoh: "a = b dan keyin a ning eski qiymati yo'qoladi. Shu sababli vaqtinchalik o'zgaruvchi kerak.",
    },
  ],

  lugat: [
    { soz: "Chiziqli algoritm", izoh: "Bloklar faqat ketma-ket, bir marta bajariladigan algoritm." },
    { soz: "Kirish (Input)", izoh: "Foydalanuvchidan ma'lumot olish qismi." },
    { soz: "Qayta ishlash", izoh: "Hisob-kitob, formulalar qo'llanadigan qism (Assign bloklari)." },
    { soz: "Chiqish (Output)", izoh: "Natijani ekranga chiqarish qismi." },
    { soz: "Amal tartibi", izoh: "Qavs, daraja, ko'paytirish/bo'lish, qo'shish/ayirish ketma-ketligi." },
    { soz: "mod", izoh: "Bo'lishdan qolgan qoldiqni topuvchi amal: 7 mod 2 = 1." },
    { soz: "Butun bo'lish", izoh: "Integer sonlarni bo'lishda kasr qismi tashlanadi: 17 / 5 = 3." },
    { soz: "Vaqtinchalik o'zgaruvchi", izoh: "Ikki qiymatni almashtirishda oraliq saqlash uchun ishlatiladi." },
    { soz: "Formula", izoh: "Hisoblash qoidasi, masalan yuza = boy * eni." },
    { soz: "pi", izoh: "Aylana uchun doimiy son, taxminan 3.14159." },
    { soz: "divmod", izoh: "Python da bo'lish va qoldiqni bir vaqtda qaytaruvchi funksiya." },
    { soz: "Eksport", izoh: "Flowgorithm diagrammasini Python, C# kabi tilda kodga aylantirish." },
  ],

  xatolar: [
    "Amallar tartibini buzish: <code>2 + 3 * 4</code> ni 20 deb hisoblash (to'g'risi 14).",
    "Kerakli joyda qavs qo'ymaslik - natija butunlay o'zgaradi.",
    "O'rtacha hisoblashda Integer bo'lishdan foydalanish - kasr yo'qoladi.",
    "Foizni hisoblashda 100 ga bo'lishni unutish.",
    "Ikki sonni almashtirishda uchinchi o'zgaruvchisiz urinish - qiymat yo'qoladi.",
    "0 ga bo'lish - dastur xato bilan to'xtaydi.",
    "Formuladagi songa noto'g'ri tur tanlash: narxni Integer qilib kasr yo'qotish.",
    "Chiqishda matn va sonni qo'shib yuborish: <code>\"Natija: \" + son</code> ba'zi tillarda xato beradi.",
    "Dasturni qog'ozda tekshirmaslik - kutilgan natijani oldindan hisoblab ko'rmaslik.",
  ],

  keyingi:
    "Endi siz chiziqli dasturlar tuzishni bilasiz: kirish, qayta ishlash, chiqish. Lekin bunday dastur \"ko'r\": u hech narsani tekshirmaydi va bir yo'ldan boradi. Keyingi darsda dasturga <b>qaror qabul qilish</b> qobiliyatini qo'shamiz &mdash; <b>tarmoqlanuvchi algoritmlar</b> va <b>shartlar</b> (If) yordamida. O'shanda dastur \"agar son musbat bo'lsa...\", \"agar parol to'g'ri bo'lsa...\" kabi savollarga javob bera oladi.",
});
