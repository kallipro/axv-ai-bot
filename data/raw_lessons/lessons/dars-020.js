/* 20-dars: Algoritm tushunchasi va algoritmik fikrlash */

AVX.dars({
  id: "cs8-020",
  sarlavha: "Algoritm tushunchasi va algoritmik fikrlash",
  kiritish:
    "Ertalab uyg'onish, yuz yuvish, nonushta qilish, maktabga borish &mdash; bularning hammasi ma'lum bir <b>tartibda</b> bajariladi. Tartib buzilsa, natija ham buziladi: avval poyabzal kiyib, keyin paypoq kiysangiz qanday bo'ladi? Bugun biz <b>algoritm</b> nima ekanini, uning xossalarini va turlarini o'rganamiz. Bu bilim keyingi barcha dasturlash darslarining poydevori bo'ladi.",

  maqsad: [
    "Algoritm tushunchasini kundalik hayotdagi misollar orqali tushunish.",
    "Algoritmning asosiy xossalarini bilish va tekshira olish.",
    "Algoritmning turlarini (chiziqli, tarmoqlanuvchi, takrorlanuvchi) farqlash.",
    "Algoritmni ifodalash usullarini o'zlashtirish: so'z, blok-sxema, pseudo-kod.",
    "Algoritmik fikrlashni rivojlantirish: masalani qadamlarga bo'lish va xatoni topish.",
  ],

  natija: [
    "Berilgan kundalik masalani qadamlar ketma-ketligiga bo'ladi.",
    "Algoritmning xossalarini (aniqlik, natijalilik, ommaviylik) tekshiradi.",
    "Algoritmni blok-sxema ko'rinishida chizadi.",
    "Chiziqli, tarmoqlanuvchi va takrorlanuvchi algoritmlarni ajratadi.",
    "Algoritmdagi xatoni topib, tuzatilgan variantini tuzadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: xavfsizlik va shaxsiy ma'lumotlar."],
    ["5-16 daq", "Mentor tushuntirishi", "Algoritm - bu retsept: palov tayyorlash misoli."],
    ["16-30 daq", "Nazariya: xossalar", "Aniqlik, natijalilik, ommaviylik, diskretlik."],
    ["30-44 daq", "Ifodalash usullari", "So'z bilan, blok-sxema, pseudo-kod."],
    ["44-58 daq", "Algoritm turlari", "Chiziqli, tarmoqlanuvchi, takrorlanuvchi."],
    ["58-72 daq", "Amaliyot: masalani bo'lish", "Kundalik masalalarni qadamlarga bo'lish va xatoni topish."],
    ["72-77 daq", "Mustaqil ish va uyga vazifa", "Blok-sxema chizish va algoritm tuzish."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Algoritm - bu retsept",
      matn: [
        "Onangiz palov tayyorlashni aytib bersa, u qanday gapiradi? \"Guruchni yuvasan, sabzini to'g'raysan, yog'ni qizdirasan, go'shtni qovurasan...\" Bu &mdash; <b>algoritm</b>: aniq qadamlar ketma-ketligi.",
        "Algoritmning eng oddiy ta'rifi: <b>masalani yechish uchun bajariladigan aniq qadamlar ketma-ketligi</b>. Har bir qadam tushunarli, tartib esa qat'iy bo'lishi kerak.",
        "Dasturlash &mdash; bu algoritmni kompyuter tushunadigan shaklda yozish. Ya'ni <em>avval algoritm, keyin kod</em>. Kod yozishni darhol boshlasangiz, o'rtada chalkashasiz.",
      ],
    },
    {
      sarlavha: "2. Kompyuter aqlli emas, lekin juda tez",
      matn: [
        "Inson \"guruchni yuvib qo'y\" degan gapni tushunadi. Kompyuter esa tushunmaydi: qancha suv? qaysi idishda? qancha vaqt? Hammasini aniq aytish kerak.",
        "Shu sababli algoritm qadamlari juda aniq bo'lishi shart. \"Biroz tuz sol\" &mdash; yomon qadam. \"1 choy qoshiq tuz sol\" &mdash; yaxshi qadam.",
        "Lekin kompyuterning kuchli tomoni bor: bir xil qadamni million marta xatosiz takrorlay oladi. Inson zerikadi va xato qiladi, kompyuter esa charchamaydi.",
      ],
    },
    {
      sarlavha: "3. Algoritmik fikrlash - masalani bo'lish",
      matn: [
        "\"Xonamni yig'ishtir\" degan vazifa juda katta. Uni qismlarga bo'lish kerak: kitoblarni javonga qo'yish, kiyimlarni yig'ish, polni supurish, changni artish.",
        "Algoritmik fikrlash &mdash; <b>katta masalani kichik, bajariladigan qadamlarga bo'lish</b> ko'nikmasi. Bu faqat dasturlashda emas, hayotda ham kerak: darsga tayyorgarlik, taqdimot tayyorlash, sayohat rejasi.",
        "Amaliy usul: masalani yozing, so'ng \"keyin nima?\" deb so'rab, qadamlarni ketma-ket yozib chiqing. Oxirida tekshiring: hech narsa tushib qolmaganmi?",
      ],
    },
    {
      sarlavha: "4. Bir masala - bir necha algoritm",
      matn: [
        "Bitta masalani har xil yo'l bilan yechish mumkin. Masalan, 10 ta sonni tartiblash: biri sekin, boshqasi tez usul bilan bajariladi. Natija bir xil, vaqt va qadamlar soni boshqa.",
        "Shu sababli dasturchi \"ishlaydigan\" yechim bilan to'xtamaydi. U yechim <em>samarali</em>mi, ya'ni kam qadam va kam vaqt talab qiladimi &mdash; shuni ham o'ylaydi.",
        "8-sinf uchun muhim xulosa: avval <em>ishlaydigan</em> algoritm tuzing, keyin uni yaxshilash haqida o'ylang. Mukammallikka intilib, umuman boshlamaslik &mdash; eng katta xato.",
      ],
    },
    {
      sarlavha: "5. Xatolar algoritmda boshlanadi",
      matn: [
        "Dasturdagi xatolar ko'pincha kodda emas, <b>algoritmda</b> bo'ladi. Kod to'g'ri yozilgan, lekin mantiq noto'g'ri &mdash; natija xato chiqadi.",
        "Misol: o'rtacha bahoni hisoblashda qo'shish to'g'ri, lekin <em>bo'lish</em> qadami unutilgan. Kod ishlaydi, lekin javob noto'g'ri. Bunday xatoni topish eng qiyini.",
        "Shuning uchun har bir algoritmni qog'ozda kichik sonlar bilan sinab ko'rish odat qilinsin: 3 ta o'quvchi, 3 ta baho. Qo'lda hisoblab, dastur natijasi bilan solishtirish kerak.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Algoritmning xossalari",
      matn: [
        "Har qanday yaxshi algoritm quyidagi xossalarga ega bo'lishi kerak. Ulardan biri buzilsa, algoritm ishonchsiz bo'ladi.",
      ],
      jadval: [
        ["Xossa", "Ma'nosi", "Misol"],
        ["Aniqlik (determinizm)", "Har bir qadam aniq, ikki xil tushunilmaydi", "\"1 choy qoshiq tuz\" - \"biroz tuz\" emas"],
        ["Diskretlik", "Algoritm alohida qadamlardan iborat", "1-qadam, 2-qadam, 3-qadam"],
        ["Natijalilik", "Har doim aniq natijaga olib keladi", "Yig'indi hisoblanadi - bo'sh tugamaydi"],
        ["Ommaviylik", "Bir turdagi masalalar uchun ishlaydi", "Har qanday 5 son uchun o'rtacha hisoblaydi"],
        ["Tushunarlilik", "Bajaruvchi uchun tushunarli", "Inson o'qiydigan yoki kompyuter tushunadigan shaklda"],
        ["Cheklanganlik", "Chekli qadamdan keyin tugaydi", "Sikl cheksiz aylanib qolmasligi kerak"],
      ],
    },
    {
      sarlavha: "2. Algoritmni ifodalash usullari",
      matn: [
        "Bitta algoritmni uch xil ko'rinishda yozish mumkin. Har birining o'z o'rni bor.",
      ],
      jadval: [
        ["Usul", "Ko'rinishi", "Afzalligi", "Kamchiligi"],
        ["So'z bilan", "Raqamlangan qadamlar", "Hamma tushunadi", "Uzun va noaniq bo'lishi mumkin"],
        ["Blok-sxema", "Shakllar va strelkalar", "Ko'zga ko'rinadi, qayerga oqishini ko'rsatadi", "Katta algoritmda joy yetmaydi"],
        ["Pseudo-kod", "Dasturga o'xshash matn", "Kodga o'tish oson", "Ba'zi qoidalarni bilish kerak"],
        ["Dastur kodi", "Python, JavaScript va h.k.", "Kompyuter bajaradi", "Xatoni topish qiyinroq"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Tavsiya",
        matn: "Yangi masalani yechishda avval <b>so'z bilan</b> yozing, keyin <b>blok-sxema</b> chizing, oxirida <b>kod</b> yozing. Bu tartib xatolarni 3-4 baravar kamaytiradi.",
      },
    },
    {
      sarlavha: "3. Blok-sxema elementlari",
      matn: [
        "Blok-sxemada har bir qadam ma'lum shakl bilan ko'rsatiladi. Shakllarni chalkashtirmaslik kerak.",
      ],
      jadval: [
        ["Shakl", "Nomi", "Vazifasi", "Misol"],
        ["Oval", "Boshlash / Tugatish", "Algoritmning boshi va oxiri", "BOSHLA, TUGAT"],
        ["To'rtburchak", "Jarayon (hisoblash)", "Hisoblash yoki o'zlashtirish", "s = a + b"],
        ["Parallelogramma", "Kiritish / Chiqarish", "Ma'lumot olish yoki chiqarish", "KIRIT: a yoki CHIQAR: s"],
        ["Romb", "Shart (qaror)", "Savol: ha yoki yo'q", "a &gt; b ?"],
        ["O'q (strelka)", "Yo'nalish", "Qadamlar tartibini ko'rsatadi", "BOSHDAN OXIRGA"],
        ["Doira / tutashtiruvchi", "Ulagich", "Katta sxemani bo'laklarga ulaydi", "A, B belgilari"],
      ],
    },
    {
      sarlavha: "4. Algoritmning turlari",
      matn: [
        "Algoritmlar tuzilishiga qarab uch asosiy turga bo'linadi. Har bir dastur shu uchtadan tuziladi.",
      ],
      jadval: [
        ["Turi", "Tuzilishi", "Blok-sxemada", "Kundalik misol"],
        ["Chiziqli", "Qadamlar ketma-ket, shartsiz", "Faqat to'rtburchak va parallelogramma", "Choy damlash"],
        ["Tarmoqlanuvchi", "Shartga qarab ikki yo'ldan biri", "Romb (shart) + ikki shox", "Sovuq bo'lsa - palto kiy"],
        ["Takrorlanuvchi", "Amal bir necha marta takrorlanadi", "Sikl bloki (orqaga qaytish strelkasi)", "10 ta mashqni bajarish"],
      ],
    },
    {
      sarlavha: "5. Algoritmik fikrlashning 5 qadami",
      matn: [
        "Har qanday masalani yechishda quyidagi ketma-ketlik yordam beradi.",
      ],
      jadval: [
        ["Qadam", "Savol", "Misol: o'quvchilar bahosini hisoblash"],
        ["1. Tushunish", "Masala nima talab qilyapti?", "5 ta bahoning o'rtachasini topish"],
        ["2. Ma'lumot", "Nima berilgan, natija nima bo'lishi kerak?", "Berilgan: 5 ta baho. Natija: o'rtacha son"],
        ["3. Reja", "Qanday qadamlar kerak?", "Baholarni qo'shish, songa bo'lish, chiqarish"],
        ["4. Tekshirish", "Kichik misolda to'g'rimi?", "4, 5, 5, 3, 3 = 20 / 5 = 4"],
        ["5. Yaxshilash", "Soddalashtirish mumkinmi?", "Bo'sh kiritishni ham tekshirish kerak"],
      ],
    },
    {
      sarlavha: "6. Kundalik hayotdagi algoritmlar",
      matn: [
        "Algoritmlar faqat kompyuterda emas. Quyidagi jadvalda kundalik misollar va ularning turi ko'rsatilgan.",
      ],
      jadval: [
        ["Vazifa", "Qadamlar", "Turi"],
        ["Choy damlash", "Suv qaynatish, choy solish, damlash", "Chiziqli"],
        ["Kiyim tanlash", "Ob-havoga qarab issiq yoki yengil kiyim", "Tarmoqlanuvchi"],
        ["Xonani supurish", "Har bir burchakni navbat bilan supurish", "Takrorlanuvchi"],
        ["Kutubxonada kitob qidirish", "Katalogdan qidirish, javonga borish, olib kelish", "Chiziqli (ba'zan tarmoqli)"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "royxat",
      "sarlavha": "Algoritmning xossalari",
      "tushuntirish": "Har qanday algoritm quyidagi besh xossaga ega bo'lishi kerak. Bittasi buzilsa &mdash; bu algoritm emas.",
      "elementlar": [
        {
          "belgi": "🔚",
          "nom": "Cheklanganlik",
          "izoh": "Algoritm albatta tugashi kerak &mdash; cheksiz davom etmasin"
        },
        {
          "belgi": "🎯",
          "nom": "Aniqlik",
          "izoh": "Har bir qadam aniq va bir xilda tushunilarli bo'lsin"
        },
        {
          "belgi": "📥",
          "nom": "Kirish",
          "izoh": "Algoritmga ma'lumot berilishi mumkin (0 yoki undan ko'p)"
        },
        {
          "belgi": "📤",
          "nom": "Chiqish",
          "izoh": "Natija albatta bo'ladi &mdash; kamida bitta"
        },
        {
          "belgi": "🧩",
          "nom": "Ommaviylik",
          "izoh": "Bir xil turdagi masalalarning hammasiga yaraydi"
        }
      ],
      "izoh": "Misol: choy damlash algoritmi tugaydi, aniq, kirishi (suv, choy) va chiqishi (tayyor choy) bor."
    },
    {
      "tur": "royxat",
      "sarlavha": "Blok-sxema shakllari va ma'nosi",
      "tushuntirish": "Blok-sxemada har bir shakl o'z ma'nosiga ega. Shaklni bilsangiz, sxemani o'qish oson.",
      "elementlar": [
        {
          "belgi": "⬭",
          "nom": "Oval",
          "izoh": "<b>Boshlash / tugash</b> &mdash; algoritmning chegarasi"
        },
        {
          "belgi": "▭",
          "nom": "To'rtburchak",
          "izoh": "<b>Amal</b> &mdash; hisoblash yoki buyruq bajarish"
        },
        {
          "belgi": "▱",
          "nom": "Parallelogram",
          "izoh": "<b>Kiritish / chiqarish</b> &mdash; ma'lumot olish yoki natija berish"
        },
        {
          "belgi": "◇",
          "nom": "Romb",
          "izoh": "<b>Shart</b> &mdash; savol: ha yoki yo'q?"
        },
        {
          "belgi": "→",
          "nom": "Strelka",
          "izoh": "<b>Yo'nalish</b> &mdash; qadamlar tartibini ko'rsatadi"
        }
      ],
      "izoh": "Shakllar rang bilan ham ajratiladi &mdash; sxema yanada tushunarli bo'ladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Chiziqli algoritm",
      "tushuntirish": "Eng sodda turi: qadamlar ketma-ket bajariladi. Shart ham, sikl ham yo'q.",
      "elementlar": [
        {
          "nom": "Boshlash",
          "izoh": "Oval blok"
        },
        {
          "nom": "Ma'lumot kiritish",
          "izoh": "Masalan, ikkita son"
        },
        {
          "nom": "Hisoblash",
          "izoh": "O'rtacha qiymatni topish"
        },
        {
          "nom": "Natijani chiqarish",
          "izoh": "Ekranda ko'rsatish"
        },
        {
          "nom": "Tugash",
          "izoh": "Oval blok"
        }
      ],
      "izoh": "Tartib almashsa &mdash; natija ham o'zgaradi. Shu sababli ketma-ketlik muhim."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Bitta algoritm, har xil yozilishi",
      "tushuntirish": "Mantiq bir xil qoladi &mdash; faqat yozilish shakli o'zgaradi. Algoritm tildan tashqarida yashaydi.",
      "ustunlar": [
        {
          "turi": "yaxshi",
          "belgi": "🧩",
          "sarlavha": "Blok-sxemada",
          "royxat": [
            "Oval, to'rtburchak, strelkalar",
            "Ko'z bilan bir qarashda tushunarli",
            "Tildan mustaqil"
          ]
        },
        {
          "turi": "brand",
          "belgi": "📝",
          "sarlavha": "Pseudo-kodda",
          "royxat": [
            "Qadamlar oddiy matn bilan",
            "Kodga o'xshaydi, lekin qat'iy qoida yo'q",
            "Yozish tez, o'qish oson"
          ]
        },
        {
          "turi": "brand",
          "belgi": "💻",
          "sarlavha": "Dasturlash tilida",
          "royxat": [
            "Qat'iy sintaksis qoidalari",
            "Kompyuter bevosita bajaradi",
            "Masalan: Python, JavaScript"
          ]
        }
      ],
      "izoh": "Avval mantiqni tuzasiz, keyin uni kerakli tilga o'girasiz &mdash; tartib shunday."
    },
    {
      "tur": "qadam",
      "sarlavha": "Tarmoqlanuvchi algoritm: hayotiy misol",
      "tushuntirish": "Shart bo'lsa, algoritm ikki yo'lga bo'linadi. Blok-sxemada bu romb bilan ko'rsatiladi.",
      "elementlar": [
        {
          "nom": "Yosh kiritiladi",
          "izoh": "Masalan, 12"
        },
        {
          "nom": "Shart tekshiriladi",
          "izoh": "Yosh 7 dan katta va 18 dan kichikmi?"
        },
        {
          "nom": "Ha bo'lsa",
          "izoh": "Bolalar chiptasi narxi qo'llanadi"
        },
        {
          "nom": "Yo'q bo'lsa",
          "izoh": "Kattalar chiptasi narxi qo'llanadi"
        },
        {
          "nom": "Narx chiqariladi",
          "izoh": "Ikkala yo'l ham shu yerda birlashadi"
        }
      ],
      "izoh": "Chipta narxini hisoblash &mdash; tarmoqlanuvchi algoritmning eng tanish misoli."
    },
    {
      "tur": "sxema",
      "sarlavha": "Sikl: takrorlanuvchi qadamlar",
      "tushuntirish": "Sikl &mdash; bir amalni bir necha marta bajarish. Blok-sxemada strelka orqaga qaytadi.",
      "svg": "<svg viewBox=\"0 0 780 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Sikl sxemasi\">\n  <rect x=\"1\" y=\"1\" width=\"778\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <g font-size=\"13\" text-anchor=\"middle\">\n    <ellipse cx=\"200\" cy=\"44\" rx=\"70\" ry=\"22\" fill=\"#16203a\" stroke=\"#4f8cff\"/>\n    <text x=\"200\" y=\"49\" fill=\"#e8eeff\">Boshlash</text>\n\n    <rect x=\"120\" y=\"86\" width=\"160\" height=\"42\" rx=\"8\" fill=\"#16203a\" stroke=\"#3a68c8\"/>\n    <text x=\"200\" y=\"112\" fill=\"#e8eeff\">yigindi = 0</text>\n\n    <rect x=\"120\" y=\"148\" width=\"160\" height=\"42\" rx=\"8\" fill=\"#16203a\" stroke=\"#3a68c8\"/>\n    <text x=\"200\" y=\"174\" fill=\"#e8eeff\">i = 1</text>\n\n    <path d=\"M200 214 l78 26 -78 26 -78 -26 z\" fill=\"#16203a\" stroke=\"#f0b429\"/>\n    <text x=\"200\" y=\"245\" fill=\"#e8eeff\">i &lt;= n ?</text>\n\n    <rect x=\"400\" y=\"212\" width=\"210\" height=\"56\" rx=\"8\" fill=\"#16203a\" stroke=\"#22d3a6\"/>\n    <text x=\"505\" y=\"236\" fill=\"#e8eeff\">yigindi = yigindi + i</text>\n    <text x=\"505\" y=\"256\" fill=\"#9fb2d6\" font-size=\"12\">i = i + 1</text>\n\n    <ellipse cx=\"660\" cy=\"44\" rx=\"70\" ry=\"22\" fill=\"#16203a\" stroke=\"#4f8cff\"/>\n    <text x=\"660\" y=\"49\" fill=\"#e8eeff\">Tugash</text>\n  </g>\n  <g stroke=\"#4f8cff\" stroke-width=\"2.2\" fill=\"none\">\n    <path d=\"M200 66 v18\"/><path d=\"M200 128 v18\"/><path d=\"M200 190 v22\"/>\n    <path d=\"M278 240 h120\"/>\n    <path d=\"M610 240 h50 v-172\"/>\n  </g>\n  <path d=\"M510 214 v-58 h-310 v-8\" stroke=\"#f0b429\" stroke-width=\"2.2\" fill=\"none\"/>\n  <path d=\"M196 156 l4 -10 4 10\" fill=\"#f0b429\"/>\n  <text x=\"330\" y=\"146\" fill=\"#f0b429\" font-size=\"12\">ha (yana takrorlanadi)</text>\n  <text x=\"420\" y=\"290\" fill=\"#6f82a8\" font-size=\"12\">1 dan n gacha sonlar yig'indisi</text>\n</svg>",
      "izoh": "Sikl tugashi uchun shart albatta bir nuqtada <b>yo'q</b> bo'lishi kerak &mdash; aks holda algoritm cheksiz davom etadi."
    },
    {
      "tur": "qadam",
      "sarlavha": "O'yin namunasi: sonni topish",
      "tushuntirish": "Algoritmik fikrlashni o'yin orqali sinash mumkin. Kompyuter son o'ylaydi, o'quvchi topadi.",
      "elementlar": [
        {
          "nom": "Kompyuter son o'ylaydi",
          "izoh": "Masalan, 1 dan 100 gacha"
        },
        {
          "nom": "O'quvchi taxmin aytadi",
          "izoh": "Masalan, 50"
        },
        {
          "nom": "Shart tekshiriladi",
          "izoh": "Taxmin kattami, kichikmi yoki to'g'rimi?"
        },
        {
          "nom": "Maslahat beriladi",
          "izoh": "&laquo;Kattaroq&raquo; yoki &laquo;kichikroq&raquo;"
        },
        {
          "nom": "To'g'ri topilguncha takrorlanadi",
          "izoh": "Bu &mdash; sikl va shart birgalikda"
        }
      ],
      "izoh": "Har taxminda oraliq ikki barobar qisqaradi &mdash; 100 sonni 7 taxminda topish mumkin."
    },
    {
      "tur": "oyna",
      "sarlavha": "Algoritmni mashina o'qiy oladigan shaklda saqlash",
      "tushuntirish": "Qadamlar ro'yxatini tuzilmali faylga yozsak, dastur uni o'qib bajarishi mumkin.",
      "oyna": {
        "nom": "algoritm.json",
        "qatorlar": [
          "{",
          "  \"nom\": \"O'rtacha qiymat\",",
          "  \"qadamlar\": [",
          "    \"Boshlash\",",
          "    \"Ikki sonni kiritish\",",
          "    \"Yig'indini 2 ga bo'lish\",",
          "    \"Natijani chiqarish\",",
          "    \"Tugash\"",
          "  ]",
          "}"
        ]
      },
      "izoh": "Tuzilmali saqlash algoritmni <b>avtomatik tekshirish</b> va boshqa dasturlarda ishlatish imkonini beradi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Bir masala, ikki yechim",
      "tushuntirish": "Bitta masalani har xil yechish mumkin. Qadamlar sonini sanab, samaralirog'ini tanlash kerak.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "🐢",
          "sarlavha": "Sekin yechim",
          "royxat": [
            "1 dan n gacha hammasini birma-bir qo'shish",
            "1000 son uchun &mdash; 1000 qadam",
            "n oshsa, qadamlar ham oshadi"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "⚡",
          "sarlavha": "Tez yechim",
          "royxat": [
            "Formula: n &#215; (n + 1) / 2",
            "1000 son uchun &mdash; 3 qadam",
            "n qanchalik katta bo'lsa ham, qadam soni o'zgarmaydi"
          ]
        }
      ],
      "izoh": "Dasturchining ishi &mdash; ishlaydigan yechim emas, <b>samarali</b> yechim topish."
    },
    {
      "tur": "royxat",
      "sarlavha": "Algoritmni tekshirish savollari",
      "tushuntirish": "Algoritm yozib bo'lgach, quyidagi savollarga javob bering. Bu &mdash; xatolarni oldini oladi.",
      "elementlar": [
        {
          "belgi": "❓",
          "nom": "Barcha holat qamrab olinganmi?",
          "izoh": "Katta, kichik, nol va manfiy sonlar ham sinab ko'rildi"
        },
        {
          "belgi": "❓",
          "nom": "Cheksiz takrorlanish yo'qmi?",
          "izoh": "Sikl albatta tugaydimi?"
        },
        {
          "belgi": "❓",
          "nom": "Bo'lishda nol bo'lishi mumkinmi?",
          "izoh": "Nolga bo'lish &mdash; klassik xato"
        },
        {
          "belgi": "❓",
          "nom": "Qadamlar tartibi to'g'rimi?",
          "izoh": "Almashib ketsa natija buzilmaydimi?"
        },
        {
          "belgi": "❓",
          "nom": "Natija to'g'rimi?",
          "izoh": "Oddiy misolda qo'lda hisoblab tekshiring"
        }
      ],
      "izoh": "Tekshiruv &mdash; algoritmning eng muhim qismi. Yozishdan ko'ra ko'proq vaqt oladi."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Chiziqli algoritm so'z bilan: choy damlash",
      "tushuntirish": "Eng oddiy algoritm turi &mdash; chiziqli: qadamlar ketma-ket, hech qanday shart yo'q. Har bir qadam aniq bo'lishi kerak.",
      "nom": "choy-algoritmi.txt",
      "til": "flow",
      "izoh": "Diqqat: har bir qadamda \"qancha\" va \"qanday\" aniq ko'rsatilgan.",
      "kod": "CHOY DAMLASH ALGORITMI\n\n1. BOSHLA\n2. Choynakni 500 ml suv bilan to'ldir\n3. Choynakni o'choqqa qo'y\n4. Suv qaynaguncha kut (100 daraja)\n5. Choynakdan suvni choy piyolaga quy\n6. Choy bargidan 1 choy qoshiq sol\n7. 5 daqiqa damlash uchun qoldir\n8. Piyolani stolga qo'y\n9. TUGAT\n\nTEKSHIRUV:\n- Qadamlar soni: 7 ta amal\n- Shart yo'q        -> chiziqli algoritm\n- Har bir qadam aniq -> aniqlik xossasi bajarilgan",
      "natija": "Natija: bir piyola damlangan choy.\n\nAlgoritm to'g'ri bo'lsa, har safar natija bir xil bo'ladi.\nAgar 5-qadamni va 6-qadamni almashtirsangiz, natija noto'g'ri chiqadi."
    },
    {
      "sarlavha": "Buzilgan algoritm: xatoni toping",
      "tushuntirish": "Algoritmdagi tartib xatosi natijani buzadi. Quyida ikki variant: noto'g'ri va to'g'ri.",
      "nom": "xato-algoritm.txt",
      "til": "flow",
      "izoh": "Bunday topshiriqlar \"xatoni topish\" ko'nikmasini rivojlantiradi - bu dasturlashda eng kerakli ko'nikma.",
      "kod": "NOTO'G'RI ALGORITM (qo'l yuvish):\n1. Suvni yop\n2. Sovun bilan qo'lni yuv\n3. Qo'lni ho'lla\n4. Suvni och\n5. Sochiqni olib artib qo'y\n\nTO'G'RI ALGORITM (qo'l yuvish):\n1. Suvni och\n2. Qo'lni ho'lla\n3. Sovun bilan qo'lni yuv\n4. Suvni yop\n5. Sochiq bilan qurit\n6. TUGAT",
      "natija": "XATO: 1-qadamda suv yopilgan, keyin qo'lni yuvish mumkin emas.\nXATO: 4-qadamda suv ochilyapti - tartib teskari.\n\nXulosa: bitta qadamni joyidan o'zgartirish butun algoritmni buzadi.\nShu sababli algoritmni yozgandan keyin albatta tekshirish kerak."
    },
    {
      "sarlavha": "Pseudo-kod: maktabga borish",
      "tushuntirish": "Pseudo-kod &mdash; dastur tiliga o'xshash, lekin qat'iy qoidalarsiz yozilgan algoritm. U koddan oldingi qadam.",
      "nom": "pseudo-kod.txt",
      "til": "flow",
      "izoh": "Pseudo-kodda BOSHLA/TUGAT, KIRIT/CHIQAR, AGAR/AKS HOLDA, TAKRORLA kabi so'zlar ishlatiladi.",
      "kod": "ALGORITM Maktabga_borish\n\nBOSHLA\n  UYGON\n  YUZNI_YUV\n  NONUSHTA_QIL\n  sumkani = \"darsliklar, daftar, ruchka\"\n  AGAR ob-havo = \"sovuq\" AKS HOLDA\n     palto_kiy\n  AKS HOLDA\n     yengil_kiyim_kiy\n  TAKRORLA (qadam = 1 dan 15 gacha)\n     maktabga_qarab_yur\n  20 daqiqa_yur(qadam)\n  AGAR (vaqt < dars_boshlanishi) AKS HOLDA\n     eshikni_och\n     sinfga_kir\n  AKS HOLDA\n     sinfga_yugurib_kir\nTUGAT",
      "natija": "Pseudo-kod koddan farqi: yozilishi erkin, lekin mantiq aniq.\n\nDiqqat qiling:\n- AGAR ... AKS HOLDA  -> tarmoqlanuvchi qism\n- TAKRORLA ...        -> takrorlanuvchi (sikl) qism\n\nYa'ni bitta masalada uch turdagi tuzilma ham uchrashi mumkin."
    },
    {
      "sarlavha": "Tarmoqlanuvchi algoritm blok-sxemasi",
      "tushuntirish": "Shart bo'lsa, algoritm ikki yo'lga bo'linadi. Blok-sxemada bu romb bilan ko'rsatiladi.",
      "nom": "tarmoq-sxema.txt",
      "til": "flow",
      "izoh": "Romb ichida har doim \"ha / yo'q\" javobli savol bo'ladi.",
      "kod": "ALGORITM Bahoni_baholash  (tarmoqlanuvchi)\n\n            ( BOSHLA )\n                 |\n          / KIRIT: baho /\n                 |\n            < baho >= 4? >\n            /            \\\n        ha /              \\ yo'q\n          |                |\n   /\"Yaxshi\"/      < baho >= 3? >\n          |          /          \\\n          |      ha /            \\ yo'q\n          |        |              |\n          |  /\"Qoniqarli\"/   /\"Yordam kerak\"/\n           \\      |              /\n            \\     |             /\n             \\    |            /\n              ( TUGAT )\n\nIZOH: romb ichida faqat savol, shoxlarda faqat yo'nalish.",
      "natija": "Kirim: baho = 5  -> chiqim: \"Yaxshi\"\nKirim: baho = 3  -> chiqim: \"Qoniqarli\"\nKirim: baho = 2  -> chiqim: \"Yordam kerak\"\n\nBir xil kirim har doim bir xil chiqim beradi (aniqlik xossasi)."
    },
    {
      "sarlavha": "Takrorlanuvchi algoritm blok-sxemasi",
      "tushuntirish": "Sikl &mdash; bir amalni bir necha marta bajarish. Blok-sxemada strelka orqaga qaytadi.",
      "nom": "sikl-sxema.txt",
      "til": "flow",
      "izoh": "Siklning uchta muhim qismi bor: boshlang'ich qiymat, shart, qadamni oshirish.",
      "kod": "ALGORITM Yigindi_topish  (takrorlanuvchi)\n\n        ( BOSHLA )\n             |\n      / KIRIT: n /\n             |\n       s = 0, i = 1        <- boshlang'ich qiymat\n             |\n             v\n      < i <= n ? > --------- yo'q ------> / CHIQAR: s / ---> ( TUGAT )\n             |\n            ha\n             |\n        s = s + i          <- sikldagi amal\n             |\n        i = i + 1          <- qadamni oshirish\n             |\n             +------ (orqaga shartga qaytadi)\n\nIZOH: agar \"i = i + 1\" qatori tushib qolsa, sikl cheksiz aylanadi!",
      "natija": "n = 5 uchun qadamlar:\ni=1: s = 0+1 = 1\ni=2: s = 1+2 = 3\ni=3: s = 3+3 = 6\ni=4: s = 6+4 = 10\ni=5: s = 10+5 = 15\ni=6: shart bajarilmadi -> sikl tugadi\n\nCHIQAR: 15"
    }
  ],

  amaliy: [
    "Daftaringizga \"maktab sumkasini yig'ish\" algoritmini 7 qadam bilan yozing va uni tekshirish ro'yxati bo'yicha tekshiring.",
    "Quyidagi masalalardan qaysi biri chiziqli, qaysi biri tarmoqlanuvchi, qaysi biri takrorlanuvchi ekanini aniqlang: choy damlash, ob-havoga qarab kiyim tanlash, 20 ta mashq bajarish, kitobni javonga qo'yish.",
    "Darsdagi &laquo;Blok-sxema shakllari&raquo; jadvalidan foydalanib, oddiy chiziqli algoritmni qog'ozga chizing: oval, to'rtburchak, parallelogramma va strelkalar.",
    "O'z baholaringizning o'rtachasini qo'lda hisoblab, chiziqli algoritm qadamlarini daftaringizga yozing.",
    "Darsdagi &laquo;Tarmoqlanuvchi algoritm&raquo; qadamlariga ikkita yangi shart qo'shing: &laquo;90%+ davomat&raquo; va &laquo;uyga vazifa bajarildi&raquo;.",
    "Darsdagi sikl diagrammasi bo'yicha 1 dan 5 gacha sonlar yig'indisini trace table usulida qadamlab hisoblang.",
    "Darsdagi &laquo;sonni topish&raquo; o'yini qadamlarini yozing va qaysi shart o'zgarsa sikl cheksiz davom etishini tushuntiring.",
    "Darsdagi &laquo;Algoritmni tekshirish savollari&raquo; ro'yxati bo'yicha o'zingiz yozgan algoritmni tekshirib chiqing.",
  ],

  uyga: [
    {
      savol: "<b>Algoritm</b> nima? Unga ikkita kundalik hayot misoli keltiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Algoritm</b> &mdash; masalani yechish uchun bajariladigan <b>aniq qadamlar ketma-ketligi</b>. Har bir qadam tushunarli, tartib esa qat'iy bo'ladi.</p>" +
        "<p>Kundalik misollar:</p>" +
        "<ol>" +
        "<li><b>Choy damlash:</b> suv qaynatish, choy solish, damlash, quyish;</li>" +
        "<li><b>Maktabga borish:</b> uyg'onish, yuz yuvish, nonushta, sumkani olish, yo'lga chiqish.</li>" +
        "</ol>" +
        "<p>Muhim: algoritm faqat kompyuterda emas, hayotda ham har qadamda uchraydi.</p>",
    },
    {
      savol: "Algoritmning <b>5 xossasini</b> yozing va har biriga bir jumla izoh bering.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Aniqlik (determinizm)</b> &mdash; har bir qadam ikki xil tushunilmaydi: \"1 choy qoshiq\" deyiladi, \"biroz\" emas;</li>" +
        "<li><b>Diskretlik</b> &mdash; algoritm alohida qadamlardan iborat (1-qadam, 2-qadam...);</li>" +
        "<li><b>Natijalilik</b> &mdash; algoritm har doim aniq natijaga olib keladi;</li>" +
        "<li><b>Ommaviylik</b> &mdash; bir turdagi masalalarning hammasi uchun ishlaydi (har qanday sonlar uchun o'rtacha hisoblaydi);</li>" +
        "<li><b>Cheklanganlik</b> &mdash; chekli qadamdan keyin tugaydi, cheksiz aylanmaydi.</li>" +
        "</ol>" +
        "<p>Qo'shimcha: <b>tushunarlilik</b> &mdash; algoritm bajaruvchi uchun tushunarli bo'lishi kerak.</p>",
    },
    {
      savol: "Algoritmni ifodalashning <b>4 usulini</b> yozing va qaysi biri nimaga qulay ekanini tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Usul</th><th>Ko'rinishi</th><th>Qachon qulay</th></tr>" +
        "<tr><td>So'z bilan</td><td>Raqamlangan qadamlar</td><td>Masalani tushunish bosqichida</td></tr>" +
        "<tr><td>Blok-sxema</td><td>Shakllar va strelkalar</td><td>Yo'nalish va tarmoqlarni ko'rsatishda</td></tr>" +
        "<tr><td>Pseudo-kod</td><td>Dasturga o'xshash matn</td><td>Kod yozishdan oldin mantiqni tekshirishda</td></tr>" +
        "<tr><td>Dastur kodi</td><td>Python, JavaScript va h.k.</td><td>Kompyuterda bajarish uchun</td></tr>" +
        "</table>" +
        "<p>Tavsiya: yangi masalani avval so'z bilan yozing, keyin blok-sxema chizing, oxirida kod yozing.</p>",
    },
    {
      savol: "<b>Chiziqli</b>, <b>tarmoqlanuvchi</b> va <b>takrorlanuvchi</b> algoritmlarni farqlang. Har biriga misol keltiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Turi</th><th>Belgisi</th><th>Blok-sxemada</th><th>Misol</th></tr>" +
        "<tr><td>Chiziqli</td><td>Qadamlar ketma-ket, shartsiz</td><td>Faqat to'rtburchak va parallelogramma</td><td>Choy damlash</td></tr>" +
        "<tr><td>Tarmoqlanuvchi</td><td>Shartga qarab yo'l tanlanadi</td><td>Romb (shart) va ikki shox</td><td>Sovuq bo'lsa palto kiyish</td></tr>" +
        "<tr><td>Takrorlanuvchi</td><td>Amal bir necha marta bajariladi</td><td>Sikl bloki va orqaga qaytish strelkasi</td><td>20 ta mashqni bajarish</td></tr>" +
        "</table>" +
        "<p>Ko'p dasturlarda uch turi birga uchraydi: masalan, o'yinda sikl ichida shart tekshiriladi.</p>",
    },
    {
      savol: "Blok-sxemadagi asosiy shakllarni yozing va har biri nima uchun ishlatilishini tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Shakl</th><th>Nomi</th><th>Vazifasi</th></tr>" +
        "<tr><td>Oval</td><td>Boshlash / Tugatish</td><td>Algoritmning boshi va oxiri (BOSHLA, TUGAT)</td></tr>" +
        "<tr><td>To'rtburchak</td><td>Jarayon</td><td>Hisoblash yoki qiymat berish (s = a + b)</td></tr>" +
        "<tr><td>Parallelogramma</td><td>Kiritish / Chiqarish</td><td>Ma'lumot olish yoki natijani chiqarish</td></tr>" +
        "<tr><td>Romb</td><td>Shart</td><td>Savol: ha yoki yo'q (a &gt; b ?)</td></tr>" +
        "<tr><td>Strelka</td><td>Yo'nalish</td><td>Qadamlar tartibini ko'rsatadi</td></tr>" +
        "</table>" +
        "<p>Blok-sxemani o'qish oson, chunki ko'z bilan yo'nalishni kuzatish mumkin.</p>",
    },
    {
      savol: "Nega <b>avval algoritm</b>, keyin kod yozish kerak? Misol bilan tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Chunki xatolarning katta qismi kodda emas, <b>mantiqda</b> bo'ladi. Kod to'g'ri yozilgan bo'lishi mumkin, lekin algoritm noto'g'ri bo'lsa natija xato chiqadi.</p>" +
        "<p>Misol: o'rtacha bahoni hisoblashda qo'shish qadami bajarilgan, lekin <b>bo'lish</b> qadami unutilgan. Dastur ishlaydi, lekin javob 20 bo'lib qoladi (o'rtacha 4 o'rniga).</p>" +
        "<p>Algoritmni qog'ozda yozib, kichik sonlar bilan tekshirsangiz, bunday xato kod yozishdan oldin topiladi. Bu vaqtni tejaydi va asablarni saqlaydi.</p>",
    },
    {
      savol: "<b>Sikl</b> nima? Sikl to'g'ri ishlashi uchun qanday uchta qism bo'lishi shart?",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>Sikl</b> &mdash; bir amalni bir necha marta takrorlash tuzilmasi (takrorlanuvchi algoritm).</p>" +
        "<p>Sikl to'g'ri ishlashi uchun uch qism bo'lishi shart:</p>" +
        "<ol>" +
        "<li><b>Boshlang'ich qiymat:</b> s = 0, i = 1;</li>" +
        "<li><b>To'xtash sharti:</b> i &lt;= n &mdash; shart bajarilmasa sikl tugaydi;</li>" +
        "<li><b>Qadamni oshirish:</b> i = i + 1 &mdash; usiz sikl cheksiz aylanadi.</li>" +
        "</ol>" +
        "<p>Misol: 1 dan 5 gacha yig'indi uchun sikl 5 marta aylanadi va s = 15 natija beradi.</p>",
    },
  ],

  test: [
    {
      savol: "Algoritm nima?",
      variantlar: [
        "Dasturlash tili",
        "Masalani yechish uchun aniq qadamlar ketma-ketligi",
        "Kompyuter dasturi",
        "Matematik formula",
      ],
      togri: 1,
      izoh: "Algoritm - qadamlar ketma-ketligi. Dastur esa shu algoritmning kompyuter tilidagi ko'rinishi.",
    },
    {
      savol: "Algoritmda \"1 choy qoshiq tuz sol\" deb yozish qaysi xossaga tegishli?",
      variantlar: ["Ommaviylik", "Aniqlik", "Cheklanganlik", "Diskretlik"],
      togri: 1,
      izoh: "Aniqlik - har bir qadam ikki xil tushunilmaydi. \"Biroz tuz\" noaniq bo'lardi.",
    },
    {
      savol: "Shartga qarab ikki yo'ldan biri tanlanadigan algoritm qaysi turga kiradi?",
      variantlar: ["Chiziqli", "Tarmoqlanuvchi", "Takrorlanuvchi", "Aralash"],
      togri: 1,
      izoh: "Tarmoqlanuvchi algoritm blok-sxemada romb (shart) bilan ko'rsatiladi.",
    },
    {
      savol: "Blok-sxemada shart (savol) qaysi shakl bilan ko'rsatiladi?",
      variantlar: ["Oval", "To'rtburchak", "Romb", "Parallelogramma"],
      togri: 2,
      izoh: "Romb - shart. Oval - boshlash/tugatish, to'rtburchak - jarayon, parallelogramma - kiritish/chiqarish.",
    },
    {
      savol: "Sikl to'xtab qolmasligi uchun nima shart?",
      variantlar: [
        "Qadamni oshirish qatori va to'xtash sharti bo'lishi",
        "Sikl kamida 100 marta aylanishi",
        "Sikl ichida faqat print bo'lishi",
        "O'zgaruvchi ishlatilmasligi",
      ],
      togri: 0,
      izoh: "Boshlang'ich qiymat, to'xtash sharti va qadamni oshirish - siklning uch sharti.",
    },
    {
      savol: "O'rtacha bahoni hisoblashda bo'lish qadami unutilsa, qanday xato yuzaga keladi?",
      variantlar: [
        "Sintaksis xatosi",
        "Mantiqiy xato - natija noto'g'ri bo'ladi",
        "Dastur ishga tushmaydi",
        "Kompyuter o'chib qoladi",
      ],
      togri: 1,
      izoh: "Bunday xato mantiqiy xato deyiladi: dastur ishlaydi, lekin javob xato. Eng qiyin topiladigan xato turi.",
    },
  ],

  lugat: [
    { soz: "Algoritm", izoh: "Masalani yechish uchun aniq qadamlar ketma-ketligi." },
    { soz: "Aniqlik", izoh: "Har bir qadam ikki xil tushunilmasligi (determinizm)." },
    { soz: "Diskretlik", izoh: "Algoritm alohida qadamlardan iborat bo'lishi." },
    { soz: "Natijalilik", izoh: "Algoritm har doim aniq natijaga olib kelishi." },
    { soz: "Ommaviylik", izoh: "Algoritm bir turdagi masalalarning hammasiga yaroqli bo'lishi." },
    { soz: "Blok-sxema", izoh: "Algoritmning shakllar va strelkalar bilan ifodalanishi." },
    { soz: "Pseudo-kod", izoh: "Dastur tiliga o'xshash, lekin erkin yozilgan algoritm." },
    { soz: "Chiziqli algoritm", izoh: "Qadamlar ketma-ket bajariladigan, shartsiz algoritm." },
    { soz: "Tarmoqlanuvchi algoritm", izoh: "Shartga qarab yo'l tanlanadigan algoritm." },
    { soz: "Takrorlanuvchi algoritm", izoh: "Amal bir necha marta takrorlanadigan algoritm (sikl)." },
    { soz: "Shart", izoh: "\"Ha\" yoki \"yo'q\" javobli savol (romb)." },
    { soz: "Sikl", izoh: "Takrorlanadigan amallar bloki." },
    { soz: "Boshlang'ich qiymat", izoh: "Sikl yoki hisoblashning boshlanish qiymati (s = 0)." },
    { soz: "Qadamni oshirish", izoh: "Siklda hisoblagichni oshirish (i = i + 1)." },
    { soz: "Cheksiz sikl", izoh: "To'xtash sharti bajarilmaydigan, aylanib qoladigan sikl." },
    { soz: "Mantiqiy xato", izoh: "Dastur ishlaydi, lekin natija noto'g'ri bo'ladigan xato." },
  ],

  xatolar: [
    "Qadamlarni noaniq yozish (\"biroz\", \"tezroq\", \"yaxshiroq\") &mdash; aniqlik xossasi buziladi.",
    "Qadamlar tartibini chalkashtirish &mdash; natija butunlay boshqa bo'ladi.",
    "Siklda qadamni oshirishni unutish &mdash; cheksiz sikl paydo bo'ladi.",
    "Blok-sxemada shakllarni aralashtirish (shartni to'rtburchakda yozish).",
    "Shartlar tartibini noto'g'ri qo'yish &mdash; \"A'lo\" sharti oxirida qolsa, hech kim A'lo olmaydi.",
    "Kod yozishdan oldin algoritmni qog'ozda tekshirmaslik.",
    "Kichik sonlar bilan qo'lda sinab ko'rmaslik &mdash; xato faqat katta ma'lumotda ko'rinadi.",
    "Algoritmni juda katta bitta qadam qilib yozish &mdash; uni tekshirish va tuzatish qiyinlashadi.",
  ],

  keyingi:
    "Endi nazariya bilan tanishdik. Keyingi darsda <b>Flowgorithm</b> dasturiga o'tamiz: interfeys bilan tanishish, blok-sxema elementlarini sichqoncha bilan chizish, o'zgaruvchilarni e'lon qilish, kiritish va chiqarish bloklarini qo'llash hamda birinchi ishlaydigan dasturimizni yaratish. Bugun o'rgangan chiziqli, tarmoqlanuvchi va takrorlanuvchi tuzilmalar aynan Flowgorithm da bloklar ko'rinishida turadi.",
});
