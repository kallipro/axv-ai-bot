/* 22-dars: Flowgorithm orqali dasturlash tushunchalari - dastur, buyruq, kod va mantiq */

AVX.dars({
  id: "cs8-022",
  sarlavha: "Flowgorithm orqali dasturlash tushunchalari: dastur, buyruq, kod va mantiq",
  kiritish:
    "O'tgan darsda bloklarni chizdik. Bugun savol beramiz: <b>dastur</b> nima? <b>buyruq</b> nima? Nega bir xil masalani Python da ham, JavaScript da ham yozish mumkin? Va nima uchun dastur ishlaydi-yu, <b>natija baribir xato</b> chiqadi? Bugun shu savollarga javob topamiz: dastur, buyruq, kod va <b>mantiq</b> tushunchalarini Flowgorithm va Python misollarida ko'rib chiqamiz.",

  maqsad: [
    "Dastur, buyruq, kod va mantiq tushunchalarini ajratish.",
    "Buyruqlarning asosiy turlarini sanab, vazifasini tushunish.",
    "Mashina kodi, assembler va yuqori darajali tillarni taqqoslash.",
    "Xatolarning uch turi (sintaksis, mantiqiy, ish vaqti) ni farqlash.",
    "Dasturni sinash va xatoni qadamlab topish (debug) usulini o'zlashtirish.",
  ],

  natija: [
    "Dasturni \"buyruqlar ketma-ketligi\" deb tushuntiradi.",
    "Bir masalani ikki xil tilda yozib, mantiq bir xil qolishini ko'rsatadi.",
    "Sintaksis va mantiqiy xatoni ajratadi va tuzatadi.",
    "Ish vaqtidagi xatoni try/except bilan ushlaydi.",
    "Dasturni kichik testlar bilan tekshiradi va xatoni print yordamida topadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: Flowgorithm bloklari."],
    ["5-15 daq", "Mentor tushuntirishi", "Dastur va mantiq: buyruqlar ketma-ketligi."],
    ["15-28 daq", "Buyruq turlari", "Kiritish, chiqarish, o'zlashtirish, shart, sikl."],
    ["28-42 daq", "Tillar darajalari", "Mashina kodi, assembler, yuqori darajali tillar."],
    ["42-58 daq", "Xato turlari", "Sintaksis, mantiqiy, ish vaqtidagi xatolar."],
    ["58-72 daq", "Amaliyot: sinash va debug", "Test yozish va print bilan qadamlab tekshirish."],
    ["72-77 daq", "Mustaqil ish va uyga vazifa", "Kod uslubi va xatolarni tuzatish mashqi."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Dastur - buyruqlar ketma-ketligi",
      matn: [
        "<b>Dastur</b> &mdash; kompyuter bajaradigan buyruqlar (ko'rsatmalar) ketma-ketligi. Algoritm &mdash; g'oya, dastur &mdash; shu g'oyaning kompyuterga yozilgan ko'rinishi.",
        "Misol: kalkulyator dasturi. U quyidagi buyruqlardan iborat: \"birinchi sonni ol\", \"ikkinchi sonni ol\", \"amalni aniqlang\", \"hisoblang\", \"natijani ko'rsat\". Har biri &mdash; bitta buyruq.",
        "Muhim: kompyuter buyruqlarni <b>yozilgan tartibda</b> bajaradi. U \"bu yerda nima kerakligini\" o'zi tushunmaydi. Shuning uchun tartib va aniqlik &mdash; hal qiluvchi.",
      ],
    },
    {
      sarlavha: "2. Kod va mantiq - ikki xil narsa",
      matn: [
        "<b>Kod</b> &mdash; dasturning yozilgan matni (sintaksis). <b>Mantiq</b> &mdash; kod orqasida turgan fikr: nima qanday tartibda, qanday shartda bajariladi.",
        "Kod to'g'ri bo'lishi mumkin, lekin mantiq xato. Masalan, o'rtacha baho hisoblashda qo'shish yozilgan, bo'lish yozilmagan: kod ishlaydi, javob xato.",
        "Shu sababli dasturchi avval <em>mantiqni</em> o'ylaydi (qog'ozda, blok-sxemada), keyin <em>kod</em> yozadi. Flowgorithm aynan shu tartibni o'rgatadi.",
      ],
    },
    {
      sarlavha: "3. Bir mantiq - ko'p til",
      matn: [
        "\"Salom, dunyo!\" chiqarish Python da <code>print(\"Salom, dunyo!\")</code>, JavaScript da <code>console.log(\"Salom, dunyo!\")</code>, C# da <code>Console.WriteLine(\"Salom, dunyo!\")</code>.",
        "Yozilishi boshqa, mantiq bir xil: \"ekranga matn chiqar\". Tillar &mdash; bu <em>asbob</em>. Muhim narsa &mdash; mantiqni to'g'ri qurish.",
        "Shuning uchun bir tilni chuqur o'rgangan odam ikkinchisiga tez o'tadi. Sintaksis 2-3 haftada o'rganiladi, mantiqiy fikrlash esa yillar davomida sayqallanadi.",
      ],
    },
    {
      sarlavha: "4. Xatolar uch xil bo'ladi",
      matn: [
        "<b>Sintaksis xatosi</b> &mdash; yozilish qoidasi buzilgan (qavs yopilmagan, nom xato yozilgan). Dastur umuman ishga tushmaydi va xato qatorni ko'rsatadi. Topish oson.",
        "<b>Mantiqiy xato</b> &mdash; dastur ishlaydi, lekin natija noto'g'ri. Eng qiyin topiladigan xato. Yechim: natijani qo'lda hisoblab solishtirish, kichik testlar yozish.",
        "<b>Ish vaqtidagi xato</b> &mdash; dastur ishlab turib, muayyan holatda to'xtaydi (nolga bo'lish, fayl topilmasligi). Yechim: holatni oldindan tekshirish yoki try/except bilan ushlash.",
      ],
    },
    {
      sarlavha: "5. Xatoni topishning eng oddiy usuli - print",
      matn: [
        "Debugger murakkab ko'rinadi, lekin eng oddiy usul bor: dasturga <code>print()</code> qo'yib, o'zgaruvchilarning qiymatini ko'rish.",
        "Misol: natija noto'g'ri chiqayapti. Sikl ichiga <code>print(i, s)</code> qo'yasiz va qaysi qadamda kutilmagan qiymat paydo bo'lganini ko'rasiz.",
        "Ikkinchi usul &mdash; kichik sonlar bilan sinash. 100 ta ma'lumot o'rniga 3 ta bilan sinab ko'ring: xato darhol ko'rinadi. \"Kichik misolda tekshir\" &mdash; professional odat.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Asosiy tushunchalar",
      matn: [
        "Bu to'rt tushunchani ajratib olish &mdash; dasturlashni tushunishning kaliti.",
      ],
      jadval: [
        ["Tushuncha", "Ta'rif", "Misol"],
        ["Dastur", "Kompyuter bajaradigan buyruqlar ketma-ketligi", "Kalkulyator dasturi"],
        ["Buyruq (ko'rsatma)", "Bitta aniq amal", "\"birinchi sonni ol\""],
        ["Kod", "Dasturning matn ko'rinishi (yozilishi)", "print(\"Salom\")"],
        ["Mantiq", "Kod orqasidagi fikr va tartib", "Avval qo'shish, keyin bo'lish"],
        ["Algoritm", "Masalani yechish g'oyasi (tildan mustaqil)", "O'rtacha hisoblash qadamlari"],
      ],
    },
    {
      sarlavha: "2. Buyruqlarning turlari",
      matn: [
        "Dasturdagi barcha buyruqlar quyidagi 6 turga bo'linadi. Har qanday dastur shu turlardan tuziladi.",
      ],
      jadval: [
        ["Turi", "Vazifasi", "Flowgorithm bloki", "Python misoli"],
        ["Kiritish", "Ma'lumot olish", "Input", "input()"],
        ["Chiqarish", "Natijani ko'rsatish", "Output", "print()"],
        ["O'zlashtirish", "O'zgaruvchiga qiymat berish", "Assign", "s = a + b"],
        ["Shart", "Tanlash (ha/yo'q)", "If", "if baho >= 4:"],
        ["Sikl", "Takrorlash", "While / For", "for i in range(1, 11):"],
        ["Chaqiruv", "Boshqa bo'lakni ishga tushirish", "Call", "baholash(baho)"],
      ],
    },
    {
      sarlavha: "3. Tillar darajalari",
      matn: [
        "Dasturlash tillari kompyuterga yaqinligiga qarab darajalarga bo'linadi.",
      ],
      jadval: [
        ["Daraja", "Til", "Kim yozadi", "Afzalligi", "Kamchiligi"],
        ["Past", "Mashina kodi (0 va 1)", "Amalda hech kim", "Kompyuter to'g'ridan-to'g'ri tushunadi", "O'qib bo'lmaydi"],
        ["Past", "Assembler", "Kamdan-kam hollarda", "Tez ishlaydi", "Juda uzun va qiyin"],
        ["Yuqori", "Python, JavaScript, C#", "Dasturchilar", "O'qish va yozish oson", "Tarjima (kompilyatsiya) kerak"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Tarjimon va kompilyator",
        matn: "Yuqori darajali tilni kompyuter tushunadigan ko'rinishga o'giruvchi dasturlar bor: <b>interpretator</b> (Python - qatorma-qator bajaradi) va <b>kompilyator</b> (C# - avval butun kodni mashina kodiga o'giradi).",
      },
    },
    {
      sarlavha: "4. Xato turlari",
      matn: [
        "Xatolarni tanish &mdash; ularni tez tuzatish demakdir.",
      ],
      jadval: [
        ["Xato turi", "Belgisi", "Natija", "Topish usuli"],
        ["Sintaksis", "Qavs yopilmagan, nom xato", "Dastur umuman ishga tushmaydi", "Xato xabari qatorni ko'rsatadi"],
        ["Mantiqiy", "Kod to'g'ri, fikr xato", "Natija noto'g'ri chiqadi", "Qo'lda hisoblash, test, print"],
        ["Ish vaqtidagi", "Muayyan holatda to'xtaydi", "Dastur ishlab turib to'xtaydi", "try/except, oldindan tekshirish"],
        ["Tur xatosi", "Son o'rniga matn kelgan", "Xato yoki noto'g'ri birlashish", "int() / float() bilan o'girish"],
      ],
    },
    {
      sarlavha: "5. Kod uslubi - o'qiladigan kod",
      matn: [
        "Kod kompyuter uchun yoziladi, lekin <b>o'qilishi</b> odam uchun bo'lishi kerak. Uslub qoidalari:",
      ],
      royhat: [
        "Nomlar mazmunli bo'lsin: <code>ortacha</code>, <code>baholar</code> &mdash; <code>a1</code>, <code>x</code> emas.",
        "Chekinish (indent) bir xil bo'lsin: Python da 4 bo'sh joy.",
        "Har bir bo'lak oldidan qisqa izoh yozish foydali.",
        "Bitta qatorda juda ko'p amal yozmaslik &mdash; bo'laklarga ajratish.",
        "Keraksiz kodni o'chirish: ishlatilmagan o'zgaruvchi va print lar.",
        "Funksiya nomlari fe'l bo'lsin: <code>hisobla()</code>, <code>tekshir()</code>.",
      ],
    },
    {
      sarlavha: "6. Dasturni sinash tartibi",
      matn: [
        "Dastur yozildi. Endi uni sinash kerak. Quyidagi tartib eng samarali.",
      ],
      jadval: [
        ["Qadam", "Nima qilinadi", "Misol"],
        ["1. Oddiy holat", "Kutilgan qiymatlar bilan sinash", "4, 5, 5 -> o'rtacha 4.67"],
        ["2. Chegara holat", "Eng kichik va eng katta qiymat", "0 va 100"],
        ["3. Noto'g'ri kiritish", "Matn, bo'sh joy, nol", "Bo'sh matn kiritilsa nima bo'ladi?"],
        ["4. Takroriy sinash", "Boshqa ma'lumotlar bilan qayta sinash", "10 ta boshqa baho"],
        ["5. Avtomatik test", "Test dasturi yozish", "assert bilan tekshirish"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "royxat",
      "sarlavha": "Dasturlash tillari darajalari",
      "tushuntirish": "Bir xil masalani kompyuterga turli darajadagi tillarda aytish mumkin. Pastga tushgan sari kompyuterga yaqinlashadi.",
      "elementlar": [
        {
          "belgi": "0️⃣1️⃣",
          "nom": "Mashina kodi",
          "izoh": "Faqat 0 va 1 &mdash; kompyuter bevosita tushunadi, odam uchun juda qiyin"
        },
        {
          "belgi": "🔧",
          "nom": "Assembler",
          "izoh": "Qisqa buyruqlar harflari (MOV, ADD) &mdash; mashina kodiga juda yaqin"
        },
        {
          "belgi": "🧱",
          "nom": "Past darajali til",
          "izoh": "Xotirani qo'lda boshqarish kerak &mdash; masalan, C tili"
        },
        {
          "belgi": "🚀",
          "nom": "Yuqori darajali til",
          "izoh": "Inson tiliga yaqin: Python, JavaScript, Java. Yozish oson"
        }
      ],
      "izoh": "Flowgorithm blok-sxemasi &mdash; bu tildan ham <b>yuqori</b> daraja: mantiqni chizma bilan ifodalaydi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Dastur tuzilishi: asosiy qismlar",
      "tushuntirish": "Qanchalik katta dastur bo'lmasin, unda shu qismlar bo'ladi. Ularni tanish &mdash; kodni o'qishni osonlashtiradi.",
      "elementlar": [
        {
          "belgi": "📝",
          "nom": "Izoh (kommentariya)",
          "izoh": "Kodga yozilgan tushuntirish &mdash; kompyuter uni bajarmaydi"
        },
        {
          "belgi": "📥",
          "nom": "Kiritish (input)",
          "izoh": "Foydalanuvchidan ma'lumot olish"
        },
        {
          "belgi": "📦",
          "nom": "O'zgaruvchi",
          "izoh": "Qiymat saqlanadigan nomlangan joy"
        },
        {
          "belgi": "🧮",
          "nom": "Hisoblash",
          "izoh": "Amallar bajariladigan qism"
        },
        {
          "belgi": "📤",
          "nom": "Chiqarish (output)",
          "izoh": "Natijani ekranga ko'rsatish"
        }
      ],
      "izoh": "Dasturni o'qishda avval <b>kiritish</b> va <b>chiqarish</b>ni toping &mdash; o'rtadagi mantiq shunda oydinlashadi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Izoh va nomlash: yaxshi namuna",
      "tushuntirish": "Izohlar kodni tushuntiradi, o'zgaruvchi nomlari esa ma'nosini bildiradi. Ikkalasi ham o'qishni osonlashtiradi.",
      "oyna": {
        "nom": "birinchi_dastur — namunaviy tuzilish",
        "qatorlar": [
          "# O'quvchi bahosini hisoblash dasturi",
          "# Muallif: 8-sinf o'quvchisi",
          "",
          "# 1. Ma'lumot olish",
          "ism = kiritish(\"Ismingizni kiriting:\")",
          "baho1 = kiritish(\"1-baho:\")",
          "baho2 = kiritish(\"2-baho:\")",
          "",
          "# 2. Hisoblash",
          "ortacha = (baho1 + baho2) / 2",
          "",
          "# 3. Natijani chiqarish",
          "chiqarish(ism + \" ning o'rtacha bahosi: \" + ortacha)"
        ]
      },
      "izoh": "Yaxshi nom: <code>ortacha_baho</code>. Yomon nom: <code>a</code>, <code>x1</code> &mdash; ertaga o'zingiz ham tushunmaysiz."
    },
    {
      "tur": "royxat",
      "sarlavha": "O'zlashtirish: = belgisining ma'nosi",
      "tushuntirish": "Dasturlashda <code>=</code> &laquo;teng&raquo; degani emas, balki &laquo;o'ng tomondagi qiymatni chapga joyla&raquo; degani.",
      "elementlar": [
        {
          "belgi": "📥",
          "nom": "o'zgaruvchi = qiymat",
          "izoh": "Qiymat o'zgaruvchiga saqlanadi"
        },
        {
          "belgi": "🔁",
          "nom": "yigindi = yigindi + i",
          "izoh": "Avval o'ng tomon hisoblanadi, keyin chapga yoziladi"
        },
        {
          "belgi": "⚠️",
          "nom": "yosh = \"14\"",
          "izoh": "Qo'shtirnoq ichidagi 14 &mdash; matn, son emas"
        },
        {
          "belgi": "✅",
          "nom": "yosh = 14",
          "izoh": "Qo'shtirnoqsiz &mdash; bu son"
        }
      ],
      "izoh": "Matn va sonni adashtirish &mdash; eng ko'p uchraydigan boshlang'ich xatolardan biri."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Sintaksis va mantiqiy xato",
      "tushuntirish": "Ikki xil xato bor: biri dasturni umuman ishga tushirmaydi, ikkinchisi ishlaydi &mdash; lekin natija noto'g'ri.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "🚫",
          "sarlavha": "Sintaksis xatosi",
          "royxat": [
            "Yozilish qoidasi buzilgan (qavs yopilmagan)",
            "Dastur <b>umuman ishga tushmaydi</b>",
            "Xato joyi ko'rsatiladi &mdash; topish oson"
          ]
        },
        {
          "turi": "yomon",
          "belgi": "🤔",
          "sarlavha": "Mantiqiy xato",
          "royxat": [
            "Kod to'g'ri yozilgan, dastur ishlaydi",
            "Lekin natija <b>noto'g'ri</b>",
            "Xato joyi ko'rsatilmaydi &mdash; topish qiyin"
          ]
        }
      ],
      "izoh": "Mantiqiy xatoni topish uchun dasturni <b>qadamlab</b> kuzatish va oraliq qiymatlarni chiqarish kerak."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Mantiqiy xato va ishlash vaqtidagi xato",
      "tushuntirish": "Ba'zi xatolar faqat ma'lum holatda chiqadi: masalan, nolga bo'lish yoki noto'g'ri tur.",
      "ustunlar": [
        {
          "turi": "brand",
          "belgi": "🤔",
          "sarlavha": "Mantiqiy xato",
          "royxat": [
            "Natija noto'g'ri, lekin dastur to'xtamaydi",
            "Har doim bir xil xato joyda takrorlanadi",
            "Qadamlab kuzatib topiladi"
          ]
        },
        {
          "turi": "yomon",
          "belgi": "💥",
          "sarlavha": "Ishlash vaqtidagi xato",
          "royxat": [
            "Dastur ishlab turib <b>to'xtab qoladi</b>",
            "Nolga bo'lish, noto'g'ri tur, fayl topilmasligi",
            "Xabar chiqadi &mdash; o'sha holatni tekshirish kerak"
          ]
        }
      ],
      "izoh": "Ishlash vaqtidagi xatolarning oldini olish uchun kiritilgan qiymat <b>tekshiriladi</b>."
    },
    {
      "tur": "royxat",
      "sarlavha": "Kod uslubi qoidalari",
      "tushuntirish": "Kod faqat kompyuter uchun emas &mdash; uni odam ham o'qiydi. Tartibli yozilgan kod &mdash; hurmat belgisi.",
      "elementlar": [
        {
          "belgi": "🔤",
          "nom": "Ma'noli nomlar",
          "izoh": "<code>ortacha_baho</code>, <code>oquvchi_soni</code>"
        },
        {
          "belgi": "⬅️",
          "nom": "To'g'ri chekinish",
          "izoh": "Sikl va shart ichidagi qatorlar bir xil masofada"
        },
        {
          "belgi": "💬",
          "nom": "Izoh qoldirish",
          "izoh": "Murakkab joyni tushuntiring &mdash; har qatorga emas"
        },
        {
          "belgi": "🧩",
          "nom": "Kichik qismlarga bo'lish",
          "izoh": "Har qism bir ishni bajarsin"
        },
        {
          "belgi": "🚫",
          "nom": "Takrorlamaslik",
          "izoh": "Bir xil kod ikki joyda bo'lmasin"
        }
      ],
      "izoh": "Qoida: kodni ertaga <b>boshqa odam</b> o'qiydi deb yozing &mdash; o'sha odam siz bo'lishingiz mumkin."
    },
    {
      "tur": "qiyos",
      "sarlavha": "O'qib bo'lmaydigan va tushunarli kod",
      "tushuntirish": "Ikkala dastur ham to'g'ri ishlaydi. Farq &mdash; o'qish qulayligida.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "😵",
          "sarlavha": "O'qib bo'lmaydi",
          "royxat": [
            "Nomsiz o'zgaruvchilar: a, b, c, x1",
            "Hammasi bitta qatorga tiqilgan",
            "Izoh yo'q, mantiq tushunarsiz"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "😊",
          "sarlavha": "Tushunarli",
          "royxat": [
            "Ma'noli nomlar: yigindi, ortacha",
            "Har qadam alohida qatorda",
            "Kerakli joyda qisqa izoh bor"
          ]
        }
      ],
      "izoh": "Xatoni topish uchun ham, jamoaga ko'rsatish uchun ham tushunarli kod kerak."
    },
    {
      "tur": "qadam",
      "sarlavha": "Dasturni ishga tushirish ketma-ketligi",
      "tushuntirish": "Dastur yozildi &mdash; endi uni ishga tushurish tartibini bilish kerak.",
      "elementlar": [
        {
          "nom": "Fayl saqlanadi",
          "izoh": "Nomida bo'sh joy va notanish belgi bo'lmasin"
        },
        {
          "nom": "Dastur ishga tushiriladi",
          "izoh": "Flowgorithm da Run, kodda esa ishga tushirish buyrug'i"
        },
        {
          "nom": "Kiritish so'raladi",
          "izoh": "Foydalanuvchi qiymatlarni kiritadi"
        },
        {
          "nom": "Natija tekshiriladi",
          "izoh": "Kutilgan natijaga mos keladimi?"
        },
        {
          "nom": "Xato bo'lsa &mdash; tuzatish",
          "izoh": "Tuzatib, yana boshidan ishga tushiriladi"
        }
      ],
      "izoh": "Har safar dasturni <b>noldan</b> ishga tushirib ko'rish &mdash; xatoni topishning eng tez yo'li."
    },
    {
      "tur": "oyna",
      "sarlavha": "Loyiha ma'lumotlari fayli",
      "tushuntirish": "Katta loyihalarda dastur haqidagi asosiy ma'lumotlar alohida faylda saqlanadi.",
      "oyna": {
        "nom": "loyiha.json",
        "qatorlar": [
          "{",
          "  \"nom\": \"O'rtacha baho hisoblagich\",",
          "  \"muallif\": \"8-sinf o'quvchisi\",",
          "  \"versiya\": \"1.0.0\",",
          "  \"til\": \"Flowgorithm\",",
          "  \"fayllar\": [\"asosiy.fpr\", \"algoritm.json\"],",
          "  \"izoh\": \"Ikki bahoning o'rtachasini hisoblaydi\"",
          "}"
        ]
      },
      "izoh": "Shu fayl orqali loyiha nima ekanini <b>bir qarashda</b> tushunish mumkin."
    },
    {
      "tur": "qadam",
      "sarlavha": "Test dasturi nima qiladi",
      "tushuntirish": "Har safar qo'lda tekshirish o'rniga, kichik test dasturi buni avtomatik bajaradi.",
      "elementlar": [
        {
          "nom": "Kirish qiymatlari tayyorlanadi",
          "izoh": "Masalan: 5 va 3"
        },
        {
          "nom": "Kutilgan natija yoziladi",
          "izoh": "5 + 3 = 8 bo'lishi kerak"
        },
        {
          "nom": "Algoritm bajariladi",
          "izoh": "Dastur ishga tushiriladi"
        },
        {
          "nom": "Natija solishtiriladi",
          "izoh": "Chiqgan natija kutilganga tengmi?"
        },
        {
          "nom": "Xulosa chiqariladi",
          "izoh": "Mos keldi &mdash; test o'tdi, mos kelmadi &mdash; xato bor"
        }
      ],
      "izoh": "Bir necha test yozilsa, bir soniyada o'nlab holat tekshiriladi &mdash; vaqt va asab tejaladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Debug: xatoni qanday topish",
      "tushuntirish": "Natija noto'g'ri, sabab noma'lum. Eng oddiy yo'l &mdash; dasturni qadamlab kuzatish va oraliq qiymatlarni ko'rish.",
      "elementlar": [
        {
          "nom": "Xatoni takrorlash",
          "izoh": "Qaysi kiritishda xato chiqadi &mdash; aniqlang"
        },
        {
          "nom": "To'xtash nuqtasi qo'yish",
          "izoh": "Shubhali joydan oldin dasturni to'xtating"
        },
        {
          "nom": "O'zgaruvchilarni ko'rish",
          "izoh": "Har qadamdan keyin qiymatlarni kuzating"
        },
        {
          "nom": "Kutilgan qiymat bilan solishtirish",
          "izoh": "Qaysi qadamda qiymat buzildi?"
        },
        {
          "nom": "Tuzatib, qayta sinash",
          "izoh": "O'sha joyni to'g'irlab, yana ishga tushiring"
        }
      ],
      "izoh": "Debug &mdash; taxmin qilish emas, <b>kuzatish</b>. Har bir qadamning qiymatini ko'rish kerak."
    },
    {
      "tur": "oyna",
      "sarlavha": "Uch xato turi jadvali",
      "tushuntirish": "Xato turlarini va ularni topish usullarini bir joyda ko'rish foydali.",
      "oyna": {
        "nom": "Xatolar jadvali",
        "ustunlar": [
          "Xato turi",
          "Belgisi",
          "Topish usuli"
        ],
        "qatorlar": [
          [
            "Sintaksis",
            "Dastur ishga tushmaydi",
            "Xato joyi ko'rsatiladi"
          ],
          [
            "Mantiqiy",
            "Natija noto'g'ri",
            "Qadamlab kuzatish, test"
          ],
          [
            "Ishlash vaqti",
            "Dastur to'xtab qoladi",
            "Xabar chiqadi, o'sha holatni tekshirish"
          ]
        ]
      },
      "izoh": "Xato turini aniqlasangiz &mdash; uni topish yo'li ham o'zi ko'rinadi."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Dastur - buyruqlar ketma-ketligi (kalkulyator)",
      "tushuntirish": "Dasturni \"buyruqlar ro'yxati\" sifatida ko'ramiz. Har bir buyruq bitta aniq ishni bajaradi va tartib muhim.",
      "nom": "kalkulyator-buyruqlari.txt",
      "til": "flow",
      "izoh": "Har bir buyruqni alohida qatorga yozish - o'qishni osonlashtiradi.",
      "kod": "DASTUR: Oddiy kalkulyator\n\n1. BOSHLA\n2. KIRIT: a          (birinchi son)\n3. KIRIT: b          (ikkinchi son)\n4. KIRIT: amal       (+, -, *, /)\n5. AGAR amal = \"+\" bo'lsa -> natija = a + b\n6. AGAR amal = \"-\" bo'lsa -> natija = a - b\n7. AGAR amal = \"*\" bo'lsa -> natija = a * b\n8. AGAR amal = \"/\" bo'lsa -> AGAR b <> 0 bo'lsa natija = a / b\n                              AKS HOLDA \"Nolga bo'lish mumkin emas\"\n9. CHIQAR: natija\n10. TUGAT\n\nTAHLIL:\n  Kiritish buyruqlari  : 3 ta (2, 3, 4-qadamlar)\n  O'zlashtirish        : 5-8-qadamlar\n  Shart (tanlash)      : 5-8-qadamlar\n  Chiqarish            : 9-qadam\n\nBitta dasturda buyruqlarning BARCHA turlari uchraydi.",
      "natija": "Dastur ishlashi:\n\n  Birinchi son: 12\n  Ikkinchi son: 4\n  Amal: /\n  Natija: 3.0\n\nTartib buzilsa - masalan, 9-qadam 5-qadamdan oldin bajarilsa -\ndastur xato ishlaydi."
    },
    {
      "sarlavha": "Buyruqlar turlari bir dasturda",
      "tushuntirish": "Kichik dasturni tahlil qilib, unda qaysi turdagi buyruqlar borligini belgilaymiz.",
      "nom": "buyruq-turlari.txt",
      "til": "flow",
      "izoh": "Bu tahlil keyinchalik katta dasturlarda ham kerak bo'ladi.",
      "kod": "DASTUR: Bahoni baholash\n\nism = input(\"Ismingiz: \")               <- KIRITISH\nbaho = float(input(\"Baho: \"))           <- KIRITISH + tur o'girish\n\nxabar = \"\"                              <- O'ZLASHTIRISH\n\nif baho >= 4.5:                         <- SHART\n    xabar = \"A'lo natija\"               <- O'ZLASHTIRISH\nelif baho >= 3.5:\n    xabar = \"Yaxshi\"\nelse:\n    xabar = \"Mashq qilish kerak\"\n\nfor i in range(3):                      <- SIKL\n    print(\"Natija \" + str(i + 1) + \": \" + xabar)   <- CHIQARISH\n\nprint(\"Tugadi\")                         <- CHIQARISH\n\nTAHLIL JADVALI:\n  Kiritish      : 2 ta\n  O'zlashtirish : 5 ta\n  Shart         : 3 shoxli\n  Sikl          : 1 ta (3 marta aylanadi)\n  Chiqarish     : 4 ta",
      "natija": "Ismingiz: Zuhra\nBaho: 4.7\n\nNatija 1: A'lo natija\nNatija 2: A'lo natija\nNatija 3: A'lo natija\nTugadi"
    }
  ],

  amaliy: [
    "Daftaringizga \"dastur\", \"buyruq\", \"kod\" va \"mantiq\" tushunchalarini yozib, har biriga bittadan misol keltiring.",
    "Dasturning kiritish va chiqarish qismini daftarda yozib ko'rsating: ism va yoshni so'rab, natijani chiqaruvchi 4 qadam.",
    "Arifmetik amallarni daftarda qo'lda hisoblang: butun bo'lish va qoldiq amalini 17 va 5 sonlarida tekshiring.",
    "Darsdagi &laquo;Sintaksis va mantiqiy xato&raquo; jadvaliga qarab, har bir xato turiga bittadan misol yozing.",
    "Mantiqiy xatoning bir misolini o'zingiz o'ylab toping (natija noto'g'ri, lekin dastur ishlaydi) va uni qanday topishni yozing.",
    "Darsdagi &laquo;O'qib bo'lmaydigan va tushunarli kod&raquo; qiyosiga qarab, nomsiz o'zgaruvchilar (a, b, x1) bilan yozilgan namunani mazmunli nomlarga almashtirib qayta yozing.",
    "Darsdagi &laquo;Test dasturi nima qiladi&raquo; qadamlariga qarab, o'z algoritmingiz uchun 2 ta test holatini yozing (masalan 3 ta baho va 1 ta baho).",
    "Darsdagi &laquo;Uch xato turi&raquo; jadvalini daftarga ko'chirib, har bir xato turiga o'zingiz bittadan misol yozing.",
  ],

  uyga: [
    {
      savol: "<b>Dastur</b>, <b>buyruq</b>, <b>kod</b> va <b>mantiq</b> tushunchalarini ajratib tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Tushuncha</th><th>Ta'rif</th><th>Misol</th></tr>" +
        "<tr><td>Dastur</td><td>Kompyuter bajaradigan buyruqlar ketma-ketligi</td><td>Kalkulyator dasturi</td></tr>" +
        "<tr><td>Buyruq</td><td>Bitta aniq amal</td><td>\"birinchi sonni ol\"</td></tr>" +
        "<tr><td>Kod</td><td>Dasturning yozilgan matni (sintaksis)</td><td>print(\"Salom\")</td></tr>" +
        "<tr><td>Mantiq</td><td>Kod orqasidagi fikr va tartib</td><td>Avval qo'shish, keyin bo'lish</td></tr>" +
        "</table>" +
        "<p>Muhim: kod to'g'ri bo'lib, mantiq xato bo'lishi mumkin. Shunda dastur ishlaydi, lekin natija noto'g'ri chiqadi.</p>",
    },
    {
      savol: "Buyruqlarning <b>6 turini</b> yozing va har biriga misol keltiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Kiritish</b> &mdash; foydalanuvchidan ma'lumot olish: <code>input()</code>, Flowgorithm da Input bloki;</li>" +
        "<li><b>Chiqarish</b> &mdash; natijani ko'rsatish: <code>print()</code>, Output bloki;</li>" +
        "<li><b>O'zlashtirish</b> &mdash; o'zgaruvchiga qiymat berish: <code>s = a + b</code>, Assign bloki;</li>" +
        "<li><b>Shart</b> &mdash; tanlash: <code>if baho &gt;= 4:</code>, If bloki;</li>" +
        "<li><b>Sikl</b> &mdash; takrorlash: <code>for i in range(1, 11):</code>, While/For bloki;</li>" +
        "<li><b>Chaqiruv</b> &mdash; boshqa bo'lakni ishga tushirish: <code>baholash(baho)</code>, Call bloki.</li>" +
        "</ol>" +
        "<p>Har qanday dastur shu olti turdagi buyruqlardan tuziladi.</p>",
    },
    {
      savol: "Dasturlash tillarining <b>darajalari</b> qanday? Mashina kodi va Python farqini tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Daraja</th><th>Til</th><th>Xususiyati</th></tr>" +
        "<tr><td>Past</td><td>Mashina kodi (0 va 1)</td><td>Kompyuter to'g'ridan-to'g'ri tushunadi, lekin o'qib bo'lmaydi</td></tr>" +
        "<tr><td>Past</td><td>Assembler</td><td>Buyruqlar qisqa nomlar bilan, lekin juda uzun</td></tr>" +
        "<tr><td>Yuqori</td><td>Python, JavaScript, C#</td><td>O'qish va yozish oson, tarjima kerak</td></tr>" +
        "</table>" +
        "<p>Python dasturi kompyuter tushunishi uchun <b>interpretator</b> (qatorma-qator tarjima qiladi) yoki <b>kompilyator</b> (butun kodni oldindan mashina kodiga o'giradi) ishlatiladi.</p>" +
        "<p>Bir xil mantiq har xil tillarda yozilishi mumkin: <code>print(\"Salom\")</code> va <code>console.log(\"Salom\")</code> &mdash; mantiq bir xil.</p>",
    },
    {
      savol: "Xatolarning <b>uch turini</b> yozing: belgisi, misoli va tuzatish yo'li bilan.",
      tezlik: "Taxminiy vaqt: 8 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Xato turi</th><th>Belgisi</th><th>Misol</th><th>Yechim</th></tr>" +
        "<tr><td>Sintaksis</td><td>Dastur ishga tushmaydi</td><td>Qavs yopilmagan</td><td>Xato xabari ko'rsatgan qatorni tuzatish</td></tr>" +
        "<tr><td>Mantiqiy</td><td>Ishlaydi, natija xato</td><td>Bo'lish qadami yo'q</td><td>Qo'lda tekshirish, test, print</td></tr>" +
        "<tr><td>Ish vaqtidagi</td><td>Muayyan holatda to'xtaydi</td><td>10 / 0, \"abc\" ni songa aylantirish</td><td>Oldindan tekshirish yoki try/except</td></tr>" +
        "</table>" +
        "<p>Eng qiyini &mdash; <b>mantiqiy xato</b>, chunki dastur xato xabari bermaydi. Uni faqat natijani qo'lda hisoblab solishtirish orqali topish mumkin.</p>",
    },
    {
      savol: "<b>O'qiladigan kod</b> nima? Kod uslubining 5 ta muhim qoidasini yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>O'qiladigan kod</b> &mdash; boshqa odam (yoki 6 oydan keyingi o'zingiz) tushunadigan kod. Kod kompyuter uchun yoziladi, lekin o'qilishi odam uchun bo'ladi.</p>" +
        "<ol>" +
        "<li><b>Mazmunli nomlar:</b> <code>ortacha</code>, <code>baholar</code> &mdash; <code>a1</code>, <code>x</code> emas;</li>" +
        "<li><b>Bir xil chekinish:</b> Python da 4 bo'sh joy;</li>" +
        "<li><b>Izohlar:</b> funksiya oldida qisqa izoh va murakkab joylarda \"nima uchun\" tushuntirishi;</li>" +
        "<li><b>Bo'laklarga ajratish:</b> bitta qatorda juda ko'p amal yozmaslik;</li>" +
        "<li><b>Tozalik:</b> ishlatilmagan o'zgaruvchi, sinov uchun qo'yilgan print lar olib tashlanadi.</li>" +
        "</ol>",
    },
    {
      savol: "Dasturni qanday <b>sinash</b> kerak? 5 qadamni yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Oddiy holat:</b> kutilgan qiymatlar bilan sinash (4, 5, 5);</li>" +
        "<li><b>Chegara holat:</b> eng kichik va eng katta qiymatlar (0 va 100);</li>" +
        "<li><b>Noto'g'ri kiritish:</b> bo'sh matn, harflar, nol &mdash; dastur to'xtab qolmasligi kerak;</li>" +
        "<li><b>Takroriy sinash:</b> boshqa ma'lumotlar bilan qayta tekshirish;</li>" +
        "<li><b>Avtomatik test:</b> kichik test dasturi yozib, har o'zgarishdan keyin ishga tushirish.</li>" +
        "</ol>" +
        "<p>Qo'shimcha usul &mdash; <b>debug print</b>: oraliq qiymatlarni ekranga chiqarib, qaysi qadamda xato paydo bo'lganini kuzatish.</p>",
    },
    {
      savol: "Nima uchun bir xil mantiqni bir necha tilda yozish mumkin? Bu nimani o'rgatadi?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Chunki dasturlash tillari &mdash; bu <b>asbob</b>. Ular mantiqni har xil sintaksisda yozishga imkon beradi, lekin bajariladigan ish bir xil bo'ladi.</p>" +
        "<p>Misol: \"ekranga salom chiqar\" mantiqini Python da <code>print(\"Salom\")</code>, JavaScript da <code>console.log(\"Salom\")</code>, C# da <code>Console.WriteLine(\"Salom\")</code> deb yozish mumkin.</p>" +
        "<p>Bu nimani o'rgatadi:</p>" +
        "<ul>" +
        "<li>asosiy e'tibor <b>mantiqqa</b> qaratiladi, sintaksisga emas;</li>" +
        "<li>bir tilni o'rgangan odam ikkinchisiga tez o'tadi (2-3 hafta);</li>" +
        "<li>Flowgorithm dan kod eksport qilish aynan shu g'oyaga asoslangan.</li>" +
        "</ul>",
    },
  ],

  test: [
    {
      savol: "Dastur nima?",
      variantlar: [
        "Kompyuterda o'rnatilgan dastur (Windows, Word)",
        "Kompyuter bajaradigan buyruqlar ketma-ketligi",
        "Dasturlash tili",
        "Fayl nomi",
      ],
      togri: 1,
      izoh: "Dastur - buyruqlar ketma-ketligi. Kompyuter ularni yozilgan tartibda bajaradi.",
    },
    {
      savol: "Kod va mantiq farqi nimada?",
      variantlar: [
        "Farqi yo'q, bir xil narsa",
        "Kod - yozilgan matn, mantiq - u orqasidagi fikr va tartib",
        "Kod faqat Python da bo'ladi",
        "Mantiq faqat matematikada bo'ladi",
      ],
      togri: 1,
      izoh: "Kod to'g'ri yozilib, mantiq xato bo'lishi mumkin - shunda natija noto'g'ri chiqadi.",
    },
    {
      savol: "O'zgaruvchiga qiymat beruvchi buyruq turi qanday ataladi?",
      variantlar: ["Kiritish", "Chiqarish", "O'zlashtirish", "Sikl"],
      togri: 2,
      izoh: "O'zlashtirish (assign): s = a + b. Flowgorithm da Assign bloki.",
    },
    {
      savol: "Dastur ishga tushmayapti va xato qator ko'rsatilyapti. Bu qanday xato turi?",
      variantlar: ["Mantiqiy xato", "Sintaksis xatosi", "Ish vaqtidagi xato", "Tur xatosi"],
      togri: 1,
      izoh: "Sintaksis xatosi - yozilish qoidasi buzilgan. Dastur umuman ishga tushmaydi va xato qatorni ko'rsatadi.",
    },
    {
      savol: "Dastur ishlayapti, lekin o'rtacha baho 4.0 o'rniga 20 chiqyapti. Bu qanday xato?",
      variantlar: ["Sintaksis xatosi", "Mantiqiy xato", "Fayl xatosi", "Tarmoq xatosi"],
      togri: 1,
      izoh: "Mantiqiy xato: bo'lish qadami bajarilmagan. Dastur xato xabari bermaydi - shuning uchun eng qiyin topiladi.",
    },
    {
      savol: "Mantiqiy xatoni topishning eng ishonchli usuli qaysi?",
      variantlar: [
        "Kompyuterni qayta yoqish",
        "Natijani qo'lda hisoblab, dastur natijasi bilan solishtirish va test yozish",
        "Kodni qaytadan yozish",
        "Xato xabarini o'chirish",
      ],
      togri: 1,
      izoh: "Mantiqiy xato xabar bermaydi. Shuning uchun qo'lda tekshirish, kichik testlar va print bilan debug qilish kerak.",
    },
  ],

  lugat: [
    { soz: "Dastur", izoh: "Kompyuter bajaradigan buyruqlar ketma-ketligi." },
    { soz: "Buyruq", izoh: "Dasturdagi bitta aniq amal (ko'rsatma)." },
    { soz: "Kod", izoh: "Dasturning yozilgan matni (sintaksis)." },
    { soz: "Mantiq", izoh: "Kod orqasidagi fikr: nima qanday tartibda bajariladi." },
    { soz: "Sintaksis", izoh: "Tilning yozilish qoidalari (qavslar, ikki nuqta, chekinish)." },
    { soz: "Sintaksis xatosi", izoh: "Yozilish qoidasi buzilgan xato - dastur ishga tushmaydi." },
    { soz: "Mantiqiy xato", izoh: "Dastur ishlaydi, lekin natija noto'g'ri bo'ladigan xato." },
    { soz: "Ish vaqtidagi xato", izoh: "Dastur ishlab turib, muayyan holatda to'xtaydigan xato." },
    { soz: "Interpretator", izoh: "Kodni qatorma-qator tarjima qilib bajaruvchi dastur (Python)." },
    { soz: "Kompilyator", izoh: "Butun kodni oldindan mashina kodiga o'giruvchi dastur." },
    { soz: "Mashina kodi", izoh: "Kompyuter to'g'ridan-to'g'ri tushunadigan 0 va 1 lardan iborat kod." },
    { soz: "Assembler", izoh: "Past darajali til: mashina kodiga yaqin, buyruqlar qisqa nomlar bilan." },
    { soz: "Debug", izoh: "Xatoni topish jarayoni (print, qadamlab tekshirish, test)." },
    { soz: "Test", izoh: "Dastur to'g'ri ishlashini tekshiruvchi kichik tekshiruv." },
    { soz: "try/except", izoh: "Ish vaqtidagi xatoni ushlab, dasturni to'xtatmaslik usuli." },
    { soz: "Kod uslubi", izoh: "Kodning o'qiladigan bo'lishi uchun qoidalar to'plami." },
  ],

  xatolar: [
    "Kod yozishni mantiqni o'ylamasdan boshlash &mdash; keyin hammasini qayta yozishga to'g'ri keladi.",
    "Xato xabarini o'qimasdan, kodni tasodifiy o'zgartirish.",
    "Mantiqiy xatoni kompyuter topib beradi deb o'ylash &mdash; uni faqat odam topa oladi.",
    "input() natijasini songa o'girmasdan hisoblashga urinish (TypeError).",
    "Nolga bo'lishni oldindan tekshirmaslik.",
    "Nomlarni mazmunsiz qo'yish (a1, x, temp) &mdash; kod o'qilmaydi.",
    "Faqat bitta holatda sinab, \"hammasi ishlaydi\" deb hisoblash.",
    "Testdan keyin sinov uchun qo'yilgan print larni olib tashlamaslik.",
  ],

  keyingi:
    "Bu bilan <b>III bobning kirish qismi</b> yakunlandi: algoritm tushunchasi, Flowgorithm interfeysi va dasturlash asoslari. Keyingi darsdan <b>o'zgaruvchilar va ma'lumot turlari</b>ni chuqur o'rganamiz: Integer, Real, String, Boolean turlari, ular bilan arifmetik amallar, tur o'girish (casting), Flowgorithm va Python dagi farqlari hamda amaliy hisob-kitob dasturlari (yuz hisoblash, konvertatsiya, o'rtacha qiymat).",
});
