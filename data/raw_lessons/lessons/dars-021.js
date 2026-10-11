/* 21-dars: Flowgorithm interfeysi va blok-sxema elementlari bilan ishlash */

AVX.dars({
  id: "cs8-021",
  sarlavha: "Flowgorithm interfeysi va blok-sxema elementlari bilan ishlash",
  kiritish:
    "O'tgan darsda algoritmni <b>blok-sxema</b> ko'rinishida ifodalashni o'rgandik. Endi bu ishni qo'lda emas, balki <b>Flowgorithm</b> dasturida bajarishni o'rganamiz. Flowgorithm &mdash; blok-sxema chizib, uni darhol <b>ishga tushirish</b> va boshqa dasturlash tillariga <b>aylantirish</b> imkonini beruvchi bepul dastur. Bugun interfeys bilan tanishamiz va birinchi ishlaydigan dasturimizni yaratamiz.",

  maqsad: [
    "Flowgorithm dasturini o'rnatish va ishga tushirish tartibini bilish.",
    "Interfeys qismlarini (menyu, diagramma maydoni, bloklar paneli, konsol) ajratish.",
    "Asosiy bloklarni (Start, End, Declare, Assign, Input, Output) ishlatish.",
    "Shart va sikl bloklarini diagrammaga qo'shishni o'rganish.",
    "Blok-sxemani Python yoki JavaScript kodiga aylantirish (eksport).",
  ],

  natija: [
    "Flowgorithm ni o'rnatib, yangi diagramma ochadi.",
    "Console oynasi orqali natijani o'qiydi.",
    "O'zgaruvchi e'lon qilib, qiymat beradi va ekranga chiqaradi.",
    "Shart va sikl bloklarini to'g'ri joylashtiradi.",
    "Tayyor diagrammani <code>.fpr</code> fayl qilib saqlaydi va kodga eksport qiladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: algoritm xossalari va turlari."],
    ["5-15 daq", "Mentor tushuntirishi", "Nega blok-sxema chizish foydali?"],
    ["15-30 daq", "Interfeys bilan tanishuv", "Menyu, diagramma maydoni, bloklar paneli, konsol."],
    ["30-45 daq", "Asosiy bloklar", "Start/End, Declare, Assign, Input, Output."],
    ["45-60 daq", "Shart va sikl bloklari", "If, While, For bloklarini qo'llash."],
    ["60-72 daq", "Amaliyot: birinchi dastur", "O'rtacha bahoni hisoblovchi diagramma tuzish."],
    ["72-77 daq", "Mustaqil ish va uyga vazifa", "Eksport va .fpr fayl bilan ishlash."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Nega blok-sxemani dasturda chizamiz?",
      matn: [
        "Qog'ozda blok-sxema chizish foydali, lekin uni <em>ishga tushirib bo'lmaydi</em>. Flowgorithm da esa chizilgan sxema darhol bajariladi: natija pastdagi <b>Console</b> oynasida ko'rinadi.",
        "Bu juda muhim: yangi boshlovchi kod yozmasdan turib, o'z mantiqini sinab ko'radi. Xato bo'lsa, xato qaysi blokda ekanini ham ko'rsatadi.",
        "Ikkinchi foyda: Flowgorithm diagrammani bir tugma bilan Python, C#, Java, JavaScript yoki C++ kodiga aylantira oladi. Ya'ni blok-sxemada o'ylagan mantiqingiz kodbga aylanadi.",
      ],
    },
    {
      sarlavha: "2. Bloklar ketma-ket joylashadi",
      matn: [
        "Flowgorithm da bloklar <b>yuqoridan pastga</b> zanjir bo'lib turadi. Bir blok ikkinchisiga o'q bilan ulanadi &mdash; xuddi biz qog'ozda chizgan sxema kabi.",
        "Yangi blok qo'shish uchun qo'shni bloklar orasidagi <b>o'q chizig'iga</b> yoki blokning <b>yuqori yoki past tomoniga</b> bosiladi. So'ng kerakli blok turi tanlanadi.",
        "Blokni <b>ikki marta bosish</b> (double click) uning sozlamalarini ochadi: o'zgaruvchi nomi, ifoda, chiqariladigan matn. Blokni o'chirish uchun belgilab, Delete tugmasi bosiladi.",
      ],
    },
    {
      sarlavha: "3. Har bir blok bitta savolga javob beradi",
      matn: [
        "Dastur tuzishda \"bu blok nima qiladi?\" deb so'rash foydali. <b>Declare</b> &mdash; \"qanday o'zgaruvchi kerak?\", <b>Assign</b> &mdash; \"unga qanday qiymat beriladi?\"",
        "<b>Input</b> &mdash; \"foydalanuvchidan nima so'raymiz?\", <b>Output</b> &mdash; \"ekranga nima chiqaramiz?\", <b>If</b> &mdash; \"qanday shartni tekshiramiz?\", <b>While/For</b> &mdash; \"nimani necha marta takrorlaymiz?\"",
        "Shu savollarga javob bersangiz, diagramma o'z-o'zidan to'g'ri tuzila boshlaydi. Chalkashib qolsangiz, qog'ozga chizib oling &mdash; keyin dasturga ko'chirasiz.",
      ],
    },
    {
      sarlavha: "4. Xatoni konsol o'zi aytadi",
      matn: [
        "Dasturni ishga tushirganda (<b>F5</b>) pastdagi konsolda natija chiqadi. Xato bo'lsa, Flowgorithm xato turi va qatorni ko'rsatadi.",
        "Eng ko'p uchraydigan xato &mdash; <em>o'zgaruvchi e'lon qilinmagan</em>. Bloklarda ishlatilgan har bir o'zgaruvchi avval Declare bloki orqali e'lon qilinishi kerak.",
        "Ikkinchi tez-tez uchraydigan xato &mdash; <em>blok ulanmagan</em> yoki diagramma tugallanmagan. Har bir diagrammada Start va End bloklari bo'lishi shart.",
      ],
    },
    {
      sarlavha: "5. Blok-sxemadan kodbga - eksport",
      matn: [
        "Diagramma tayyor bo'lgach, <b>Tools &rarr; Source Code Viewer</b> menyusi orqali kodni ko'rish mumkin. U yerda tilni tanlash mumkin: Python, C#, Java, JavaScript, C++, Visual Basic.",
        "Bu juda qiziqarli tajriba: bir xil mantiq har xil tillarda qanday yozilishini yonma-yon ko'rasiz. Til sintaksisi boshqa, lekin bloklar ketma-ketligi bir xil.",
        "Muhim: eksport qilingan kod odatda \"o'quv uslubida\" bo'ladi &mdash; chiroyli va qisqa emas. Lekin u ishlaydi va mantiqni tushunishga yordam beradi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Flowgorithm oynasining tuzilishi",
      matn: [
        "Dastur oynasi bir necha qismdan iborat. Har bir qismning vazifasini bilish kerak.",
      ],
      jadval: [
        ["Qism", "Qayerda", "Vazifasi"],
        ["Menyu qatori", "Eng yuqorida", "File, Edit, View, Program, Tools, Help"],
        ["Asboblar paneli", "Menyu ostida", "Yangi, Ochish, Saqlash, Run (ishga tushirish)"],
        ["Diagramma maydoni", "O'rtada", "Bloklar shu yerda joylashadi"],
        ["Bloklar paneli", "O'ng tomonda", "Qo'shiladigan bloklar ro'yxati"],
        ["Konsol (Console)", "Pastda", "Natijalar, kiritish maydoni va xato xabarlari"],
        ["Holat qatori", "Eng pastda", "Fayl nomi va diagramma haqida ma'lumot"],
      ],
    },
    {
      sarlavha: "2. Asosiy bloklar",
      matn: [
        "Birinchi darslarda quyidagi 6 blok yetarli bo'ladi. Ularni yodlab olish kerak.",
      ],
      jadval: [
        ["Blok", "Belgisi", "Vazifasi", "Misol"],
        ["Start", "Oval (boshi)", "Dasturni boshlaydi", "Avtomatik qo'yiladi"],
        ["End", "Oval (oxiri)", "Dasturni tugatadi", "Avtomatik qo'yiladi"],
        ["Declare", "To'rtburchak (o'zgaruvchi)", "O'zgaruvchi e'lon qiladi", "Declare yosh As Integer"],
        ["Assign", "To'rtburchak", "Qiymat beradi", "s = s + b"],
        ["Input", "Parallelogramma", "Foydalanuvchidan ma'lumot oladi", "Input n"],
        ["Output", "Parallelogramma", "Natijani ekranga chiqaradi", "Output \"Natija: \" and s"],
      ],
    },
    {
      sarlavha: "3. Qo'shimcha bloklar",
      matn: [
        "Murakkabroq dasturlar uchun quyidagi bloklar ishlatiladi.",
      ],
      jadval: [
        ["Blok", "Vazifasi", "Qachon kerak"],
        ["If", "Shartni tekshiradi (ha/yo'q)", "Ikki yo'ldan birini tanlashda"],
        ["While", "Shart bajarilguncha takrorlaydi", "Oldindan soni noma'lum bo'lsa"],
        ["For", "Belgilangan marta takrorlaydi", "Soni ma'lum bo'lsa (1 dan 10 gacha)"],
        ["Do", "Kamida bir marta bajarib, keyin tekshiradi", "Avval bajarilishi shart bo'lgan amalda"],
        ["Call", "Boshqa diagramma (funksiya) ni chaqiradi", "Kodni bo'laklarga ajratishda"],
        ["Return", "Qiymat qaytaradi", "Funksiyadan natija qaytarishda"],
      ],
    },
    {
      sarlavha: "4. O'zgaruvchi turlari",
      matn: [
        "Flowgorithm da o'zgaruvchi e'lon qilinganda uning turi tanlanadi. Tur &mdash; o'zgaruvchi qanday ma'lumot saqlashini bildiradi.",
      ],
      jadval: [
        ["Tur", "Saqlaydigan ma'lumot", "Misol qiymat"],
        ["Integer", "Butun son", "5, -12, 100"],
        ["Real", "O'nlik son", "3.14, 4.75"],
        ["String", "Matn", "\"Salom\", \"Zuhra\""],
        ["Boolean", "Mantiqiy qiymat", "True yoki False"],
        ["Char", "Bitta belgi", "\"A\""],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Turni to'g'ri tanlang",
        matn: "<code>Integer</code> turiga <b>4.5</b> yozsangiz, dastur xato beradi yoki qiymatni butunlaydi. O'nli sonlar uchun <code>Real</code> tanlanishi kerak. Baho hisoblashda ko'pincha Real kerak bo'ladi.",
      },
    },
    {
      sarlavha: "5. Foydali tugmalar va menyular",
      matn: [
        "Ishni tezlashtiradigan tugmalar. Ularni bilib olsangiz, vaqtni tejaysiz.",
      ],
      jadval: [
        ["Amal", "Tugma / menyu", "Natija"],
        ["Ishga tushirish", "F5 yoki Run", "Dastur bajariladi, konsol ochiladi"],
        ["Saqlash", "Ctrl + S", ".fpr fayl saqlanadi"],
        ["Boshqa nom bilan saqlash", "File &rarr; Save As", "Yangi fayl yaratiladi"],
        ["Yangi diagramma", "Ctrl + N", "Bo'sh diagramma ochiladi"],
        ["Kodni ko'rish", "Tools &rarr; Source Code Viewer", "Eksport qilingan kod"],
        ["Blokni tahrirlash", "Blokni ikki marta bosish", "Sozlamalar oynasi ochiladi"],
        ["Zoom", "View &rarr; Zoom", "Diagrammani kattalashtirish yoki kichraytirish"],
      ],
    },
    {
      sarlavha: "6. Fayl formati",
      matn: [
        "Flowgorithm fayllari <code>.fpr</code> kengaytmasi bilan saqlanadi. Ichida diagramma tuzilishi XML ko'rinishida yozilgan.",
      ],
      jadval: [
        ["Fayl", "Nima saqlanadi", "Foydasi"],
        ["diagramma.fpr", "Butun diagramma va o'zgaruvchilar", "Keyin ochib davom ettirish mumkin"],
        ["diagramma.py", "Eksport qilingan Python kodi", "Python muhitida ishlatish"],
        ["diagramma.js", "Eksport qilingan JavaScript kodi", "Brauzerda sinab ko'rish"],
        ["diagramma.cs", "Eksport qilingan C# kodi", "Visual Studio da ishlatish"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "royxat",
      "sarlavha": "Flowgorithm fayllari",
      "tushuntirish": "Dasturni ishlab chiqishda bir necha turdagi fayl bilan ishlaymiz. Har biri o'z vazifasini bajaradi.",
      "elementlar": [
        {
          "belgi": "📄",
          "nom": ".fpr fayli",
          "izoh": "Flowgorithm saqlaydigan asosiy fayl &mdash; ichida diagramma turadi"
        },
        {
          "belgi": "🖼️",
          "nom": "Rasm (PNG)",
          "izoh": "Diagrammani uyga vazifaga yoki taqdimotga qo'yish uchun"
        },
        {
          "belgi": "💻",
          "nom": "Eksport qilingan kod",
          "izoh": "Diagrammadan olingan Python yoki JavaScript fayli"
        },
        {
          "belgi": "⚙️",
          "nom": "Ochish skripti (.bat)",
          "izoh": "Diagrammani ikki bosishda ochish uchun kichik buyruq fayli"
        }
      ],
      "izoh": "Uyga vazifa qilib topshirishda odatda <b>.fpr</b> fayli va diagramma rasmi so'raladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Diagrammani kodga eksport qilish",
      "tushuntirish": "Flowgorithm bitta diagrammani turli dasturlash tillariga aylantira oladi.",
      "elementlar": [
        {
          "nom": "Menyudan Tools bo'limi",
          "izoh": "Yuqoridagi menyudan <b>Tools</b> tanlanadi"
        },
        {
          "nom": "Source Code Viewer",
          "izoh": "Diagramma kodi ko'rinadi"
        },
        {
          "nom": "Til tanlanadi",
          "izoh": "Python, JavaScript, C++, Java va boshqalar"
        },
        {
          "nom": "Kod nusxalanadi",
          "izoh": "Faylga saqlash yoki nusxalab qo'yish mumkin"
        },
        {
          "nom": "Mantiq solishtiriladi",
          "izoh": "Bloklar tartibi kodda ham saqlanadi"
        }
      ],
      "izoh": "Muhim: avval <b>diagramma</b> to'g'ri bo'lishi kerak &mdash; kod undan kelib chiqadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Kiritish va chiqarish bloklari",
      "tushuntirish": "Dasturning foydalanuvchi bilan gaplashadigan qismi &mdash; aynan shu ikki blok.",
      "elementlar": [
        {
          "belgi": "📥",
          "nom": "Input (kiritish)",
          "izoh": "Parallelogram blok &mdash; foydalanuvchidan ma'lumot so'raydi"
        },
        {
          "belgi": "📤",
          "nom": "Output (chiqarish)",
          "izoh": "Parallelogram blok &mdash; natijani ekranga chiqaradi"
        },
        {
          "belgi": "📦",
          "nom": "O'zgaruvchi",
          "izoh": "Kiritilgan qiymat vaqtincha shu yerda saqlanadi"
        },
        {
          "belgi": "🔗",
          "nom": "Matn birlashtirish",
          "izoh": "Chiqarishda matn va o'zgaruvchi birga ko'rsatiladi"
        }
      ],
      "izoh": "Kiritish bo'lmasa dastur doim bir xil natija beradi; kiritish bilan u <b>har xil</b> holatda ishlaydi."
    },
    {
      "tur": "qadam",
      "sarlavha": "If bloki: shart qanday ishlaydi",
      "tushuntirish": "Shart bloki romb shaklida bo'ladi va ikkita chiqishga ega: ha va yo'q.",
      "elementlar": [
        {
          "nom": "Shart tekshiriladi",
          "izoh": "Masalan: <code>baho >= 60</code>"
        },
        {
          "nom": "Ha (true) shoxobchasi",
          "izoh": "Shart to'g'ri bo'lsa bajariladigan qadamlar"
        },
        {
          "nom": "Yo'q (false) shoxobchasi",
          "izoh": "Shart noto'g'ri bo'lsa bajariladigan qadamlar"
        },
        {
          "nom": "Shoxobchalar birlashadi",
          "izoh": "Ikkala yo'l ham bitta nuqtaga qaytadi va dastur davom etadi"
        }
      ],
      "izoh": "Shart bloki dasturga qaror qabul qilishni o'rgatadi &mdash; bu dasturlashning asosiy ko'nikmasi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "While va For bloklari",
      "tushuntirish": "Ikkalasi ham takrorlaydi, lekin qachon ishlatilishi farq qiladi.",
      "ustunlar": [
        {
          "turi": "brand",
          "belgi": "🔁",
          "sarlavha": "While",
          "royxat": [
            "Shart to'g'ri bo'lguncha takrorlanadi",
            "Necha marta takrorlanishi <b>oldindan noma'lum</b>",
            "Masalan: &laquo;to'g'ri sonni topguncha&raquo;"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "🔂",
          "sarlavha": "For",
          "royxat": [
            "Belgilangan sonda takrorlanadi",
            "Necha marta kerakligi <b>ma'lum</b>",
            "Masalan: &laquo;1 dan 10 gacha chiqar&raquo;"
          ]
        }
      ],
      "izoh": "Adashsangiz, savol bering: &laquo;necha marta takrorlanishini bilamanmi?&raquo; Bilasizmi &mdash; For, bilmasangiz &mdash; While."
    },
    {
      "tur": "qadam",
      "sarlavha": "Dasturni qadamlab bajarish (debug)",
      "tushuntirish": "Diagrammani qadamlab bajarib, har bir blokdan keyin o'zgaruvchilar qiymatini kuzatish mumkin.",
      "elementlar": [
        {
          "nom": "Bajarishni boshlash",
          "izoh": "Run tugmasi bosiladi"
        },
        {
          "nom": "Bitta qadam",
          "izoh": "Step tugmasi bilan bitta blok bajariladi"
        },
        {
          "nom": "O'zgaruvchilarni kuzatish",
          "izoh": "Har qadamdan keyin qiymatlar o'zgarishini ko'rasiz"
        },
        {
          "nom": "Xatoni topish",
          "izoh": "Kutilmagan qiymat &mdash; xato o'sha blokda"
        },
        {
          "nom": "Tuzatish va qayta sinash",
          "izoh": "Blok tahrirlanadi va yana bajariladi"
        }
      ],
      "izoh": "Bu usul &laquo;natija nima uchun bunday chiqdi?&raquo; degan savolga eng tez javob beradi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Bloklarni tuzilmali saqlash",
      "tushuntirish": "Bloklar ro'yxatini tuzilmali faylga yozib qo'ysak, keyinchalik dastur ularni avtomatik o'qiy oladi.",
      "elementlar": [
        {
          "belgi": "📋",
          "nom": "Har blokka nom",
          "izoh": "Input, Output, Declare, If, While, For"
        },
        {
          "belgi": "🔢",
          "nom": "Tartib raqami",
          "izoh": "Qaysi blok ketma-ket keladi"
        },
        {
          "belgi": "🔗",
          "nom": "Bog'lanish",
          "izoh": "Qaysi blok qaysi blokka olib boradi"
        },
        {
          "belgi": "💾",
          "nom": "Tuzilmali fayl",
          "izoh": "Keyinchalik diagrammani avtomatik yasash mumkin"
        }
      ],
      "izoh": "Bu &mdash; blok-sxemani <b>dastur</b> sifatida ko'rishning birinchi qadami."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Ko'p uchraydigan xatolar va yechimi",
      "tushuntirish": "Yangi boshlovchilar deyarli bir xil xatolarni takrorlaydi. Ularni oldindan bilsa &mdash; vaqt tejaladi.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Xato",
          "royxat": [
            "Start bloki qo'yilmagan",
            "O'zgaruvchi e'lon qilinmagan",
            "Strelkalar ulanmagan &mdash; blok yetim qolgan",
            "Sikl tugash sharti yo'q"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Yechim",
          "royxat": [
            "Har diagramma Start bilan boshlanadi",
            "Avval Declare, keyin ishlatish",
            "Har blokdan chiqish yo'li bo'lishi shart",
            "Shart bir nuqtada noto'g'ri bo'lishini ta'minlash"
          ]
        }
      ],
      "izoh": "Xato chiqsa &mdash; avval <b>strelkalar</b> va <b>e'lon qilingan o'zgaruvchilar</b>ni tekshiring."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Flowgorithm oynasining xaritasi",
      "tushuntirish": "Dastur oynasini sxematik ko'rinishda tasvirlaymiz. Har bir qism nima uchun kerakligini eslab qolish oson bo'ladi.",
      "nom": "oyna-xaritasi.txt",
      "til": "flow",
      "izoh": "Bu xaritani daftarga chizib qo'ying - dasturda adashmaysiz.",
      "kod": "+--------------------------------------------------------------+\n| File  Edit  View  Program  Tools  Help      <- MENYU          |\n|--------------------------------------------------------------|\n| [Yangi] [Ochish] [Saqlash]      [> Run]      <- ASBOBLAR      |\n|--------------------------------------------------------------|\n|                                    |                          |\n|      ( START )                     |   BLOKLAR PANELI         |\n|          |                         |   - Assign               |\n|      [ Declare ... ]               |   - Declare              |\n|          |                         |   - If                   |\n|      / Input ... /                 |   - While                |\n|          |                         |   - For                  |\n|      [ s = a + b ]                 |   - Input                |\n|          |                         |   - Output               |\n|      / Output ... /                |                          |\n|          |                         |                          |\n|      ( END )                       |                          |\n|                                    |                          |\n|--------------------------------------------------------------|\n| KONSOL:                                                      |\n|   Ismingizni kiriting: Kallibek                              |\n|   Salom, Kallibek!                                           |\n|--------------------------------------------------------------|\n                     <- HOLAT QATORI                              ",
      "natija": "Asosiy e'tibor: bloklar O'RTADAGI diagramma maydonida joylashadi,\nnatija esa PASTDAGI konsolda ko'rinadi.\n\nO'ng tomondagi paneldan bloklar tanlanadi."
    },
    {
      "sarlavha": "Asosiy bloklarning ko'rinishi",
      "tushuntirish": "Har bir blok o'z shakli va nomi bilan ajralib turadi. Quyidagi diagramma chiziqli algoritmni ko'rsatadi.",
      "nom": "bloklar.txt",
      "til": "flow",
      "izoh": "Bloklarni qo'shish tartibi: avval Start, keyin pastga qarab boshqalari, oxirida End.",
      "kod": "CHIZIQLI ALGORITM BLOKLARI\n\n        ( START )                <- dastur boshi (avtomatik qo'yiladi)\n            |\n   [ Declare a As Integer ]      <- o'zgaruvchi e'lon qilish\n   [ Declare b As Integer ]\n   [ Declare s As Integer ]\n            |\n        / Input a /              <- foydalanuvchidan ma'lumot\n        / Input b /\n            |\n   [ s = a + b ]                 <- hisoblash (Assign)\n            |\n    / Output \"Yig'indi: \" and s /  <- natijani ko'rsatish\n            |\n        ( END )                  <- dastur oxiri\n\nTARTIB QOIDASI:\n1. Avval e'lon qil (Declare)\n2. Keyin qiymat ol (Input)\n3. Keyin hisobla (Assign)\n4. Oxirida chiqar (Output)",
      "natija": "Dastur ishga tushganda konsolda:\n\n  a = 7\n  b = 5\n  Yig'indi: 12\n\nHar bir blok bitta ishni bajaradi - bu o'qishni osonlashtiradi."
    },
    {
      "sarlavha": "Birinchi dastur: salomlashish",
      "tushuntirish": "Eng sodda dastur &mdash; foydalanuvchidan ismini so'rab, salomlashish. Bu dasturda faqat uch blok ishlatiladi.",
      "nom": "salom.txt",
      "til": "flow",
      "izoh": "Input blokida savol matni yoziladi, javob esa o'zgaruvchiga saqlanadi.",
      "kod": "BLOK-SXEMA: Salomlashish\n\n        ( START )\n            |\n   [ Declare ism As String ]\n            |\n   / Input ism                    /\n   / (savol: \"Ismingizni kiriting: \") /\n            |\n   / Output \"Salom, \" and ism and \"!\" /\n            |\n        ( END )\n\nIZOH:\n- Declare  -> ism degan matn o'zgaruvchisi yaratiladi\n- Input    -> foydalanuvchi yozgan matn ism ga saqlanadi\n- Output   -> and yordamida matnlar birlashtiriladi",
      "natija": "Konsol:\n\n  Ismingizni kiriting: Kallibek\n  Salom, Kallibek!\n\nDasturni 5 marta ishga tushirsangiz - 5 xil ism bilan salomlashadi.\nBu algoritmning \"ommaviylik\" xossasidir."
    },
    {
      "sarlavha": "Declare va Assign bloklari: o'rtacha baho",
      "tushuntirish": "O'zgaruvchilarni e'lon qilish va ularga qiymat berish. Bu &mdash; har qanday dasturning boshlanishi.",
      "nom": "ortacha.txt",
      "til": "flow",
      "izoh": "Bir o'zgaruvchi bir marta e'lon qilinadi, lekin ko'p marta o'zgartirilishi mumkin.",
      "kod": "BLOK-SXEMA: 5 ta bahoning o'rtachasi\n\n        ( START )\n            |\n   [ Declare b1 As Integer ]\n   [ Declare b2 As Integer ]\n   [ Declare b3 As Integer ]\n   [ Declare b4 As Integer ]\n   [ Declare b5 As Integer ]\n   [ Declare yigindi As Integer ]\n   [ Declare ortacha As Real ]      <- ONLIK tur: Real\n            |\n        / Input b1 /                 <- savol: \"1-bahoni kiriting: \"\n        / Input b2 /\n        / Input b3 /\n        / Input b4 /\n        / Input b5 /\n            |\n   [ yigindi = b1 + b2 + b3 + b4 + b5 ]\n   [ ortacha = yigindi / 5 ]\n            |\n   / Output \"O'rtacha baho: \" and ortacha /\n            |\n        ( END )\n\nMUHIM: ortacha uchun Integer emas, REAL turi tanlangan -\naks holda 4.4 o'rniga 4 chiqadi.",
      "natija": "Konsol:\n\n  1-bahoni kiriting: 4\n  2-bahoni kiriting: 5\n  3-bahoni kiriting: 5\n  4-bahoni kiriting: 3\n  5-bahoni kiriting: 3\n  O'rtacha baho: 4\n\n5 ta Integer yig'indisi 20, 20 / 5 = 4 -> Real natija 4.0"
    },
    {
      "sarlavha": "If bloki blok-sxemada",
      "tushuntirish": "Shart bloki ikki yo'lga bo'linadi. Flowgorithm da romb shaklida ko'rinadi va ikkita chiqishi bo'ladi: True va False.",
      "nom": "if-blok.txt",
      "til": "flow",
      "izoh": "Romb ichidagi shart mantiqiy ifoda bo'lishi kerak: baho >= 4 kabi.",
      "kod": "BLOK-SXEMA: Bahoni baholash (tarmoqlanuvchi)\n\n        ( START )\n            |\n   [ Declare baho As Real ]\n            |\n      / Input baho /\n            |\n      < baho >= 4.0 ? >\n        /        \\\n    True/          \\False\n      |              |\n / Output \"Yaxshi\" /  / Output \"Yordam kerak\" /\n      |              |\n       \\            /\n        \\          /\n         \\        /\n           ( END )\n\nFLOWGORITHM DA:\n- Romb tanlanadi (If bloki)\n- Shart: baho >= 4.0\n- True shoxiga Output \"Yaxshi\" qo'yiladi\n- False shoxiga Output \"Yordam kerak\" qo'yiladi",
      "natija": "baho = 5  ->  Yaxshi\nbaho = 3  ->  Yordam kerak\n\nIf bloki dasturga \"qaror qabul qilish\" imkonini beradi.\nShartsiz dastur faqat bitta yo'l bilan ishlaydi."
    },
    {
      "sarlavha": "While sikl bloki blok-sxemada",
      "tushuntirish": "While bloki &mdash; shart to'g'ri bo'lguncha takrorlanadi. Flowgorithm da strelka blokning o'ziga qaytib turadi.",
      "nom": "while-blok.txt",
      "til": "flow",
      "izoh": "While blokining ichida hisoblagichni oshirish bloki bo'lishi SHART, aks holda sikl cheksiz aylanadi.",
      "kod": "BLOK-SXEMA: 1 dan 10 gacha yig'indi (While bilan)\n\n        ( START )\n            |\n   [ Declare i As Integer ]\n   [ Declare s As Integer ]\n            |\n   [ i = 1 ]                    <- boshlang'ich qiymat\n   [ s = 0 ]\n            |\n     +--> < i <= 10 ? >\n     |      /       \\\n     |    True      False\n     |      |          |\n     |      |      / Output \"Yig'indi: \" and s /\n     |      |          |\n     |      |        ( END )\n     |      |\n     |  [ s = s + i ]\n     |  [ i = i + 1 ]            <- qadamni oshirish\n     |      |\n     +------+   (orqaga shartga qaytadi)",
      "natija": "Sikl 10 marta aylanadi:\n\ni=1:  s = 1\ni=2:  s = 3\ni=3:  s = 6\n...\ni=10: s = 55\n\ni=11 bo'lganda shart (11 <= 10) bajarilmaydi -> sikl tugaydi.\nKonsolda: Yig'indi: 55"
    },
    {
      "sarlavha": "For bloki: soni ma'lum bo'lgan takrorlash",
      "tushuntirish": "Agar necha marta takrorlash oldindan ma'lum bo'lsa, <code>For</code> bloki qulay: u qadamni o'zi oshiradi.",
      "nom": "for-blok.txt",
      "til": "flow",
      "izoh": "For bloki While dan qisqaroq: boshlang'ich qiymat, oxirgi qiymat va qadam bitta blokda yoziladi.",
      "kod": "FOR BLOKI (Flowgorithm)\n\n        ( START )\n            |\n   [ Declare i As Integer ]\n   [ Declare s As Integer ]\n   [ s = 0 ]\n            |\n   [ For i = 1 to 10 step 1 ]        <- bitta blokda: boshi, oxiri, qadam\n            |\n   [ s = s + i ]                     <- sikl tanasi\n            |\n   / Output \"Yig'indi: \" and s /\n            |\n        ( END )\n\nFOR va WHILE FARQI:\n  For   - takrorlash soni OLDINDAN ma'lum (1..10)\n  While - shart bajarilguncha davom etadi, soni noma'lum\n\nFlowgorithm da qadam ko'rsatilmasa, standart qadam = 1 bo'ladi.",
      "natija": "Konsol: Yig'indi: 55\n\nFor bloki ichida i = i + 1 yozish KERAK EMAS -\nu qadamni o'zi oshiradi. Bu - For ning qulayligi."
    }
  ],

  amaliy: [
    "Flowgorithm dasturini flowgorithm.org saytidan yuklab o'rnating va ishga tushiring.",
    "Interfeys qismlarini toping: menyu qatori, asboblar paneli, diagramma maydoni, bloklar paneli va konsol.",
    "Darsdagi &laquo;Salomlashish&raquo; diagrammasini tuzing: Declare, Input, Output bloklaridan foydalaning. F5 bilan ishga tushirib, konsolda natijani ko'ring.",
    "Diagrammani <code>salomlashish.fpr</code> nomi bilan saqlang va <b>Tools &rarr; Source Code Viewer</b> orqali Python kodini ko'ring.",
    "Darsdagi o'rtacha baho diagrammasini tuzing: 5 ta baho kiritib, o'rtachani chiqaring. O'rtacha uchun Real turini tanlang.",
    "Darsdagi If blokini qo'shing: agar o'rtacha 4 dan katta bo'lsa &laquo;Yaxshi&raquo;, aks holda &laquo;Yordam kerak&raquo; chiqarilsin.",
    "Darsdagi While blokini qo'llab, 1 dan 10 gacha yig'indini hisoblovchi diagramma tuzing.",
    "Darsdagi &laquo;Ko'p uchraydigan xatolar va yechimi&raquo; jadvalini ko'rib chiqing va diagrammangizda shunday xatolar yo'qligiga ishonch hosil qiling.",
  ],

  uyga: [
    {
      savol: "<b>Flowgorithm</b> nima va u oddiy blok-sxema chizishdan qanday farq qiladi?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Flowgorithm</b> &mdash; bepul dastur bo'lib, unda blok-sxema chizish, uni darhol <b>ishga tushirish</b> va boshqa dasturlash tillariga <b>aylantirish</b> mumkin.</p>" +
        "<p>Qog'ozdagi blok-sxemadan farqi:</p>" +
        "<ul>" +
        "<li>chizilgan sxema darhol bajariladi (F5) va natija konsolda ko'rinadi;</li>" +
        "<li>xato bo'lsa, dastur xato turi va joyini ko'rsatadi;</li>" +
        "<li>diagrammani Python, C#, Java, JavaScript yoki C++ kodiga eksport qilish mumkin;</li>" +
        "<li>ish <code>.fpr</code> faylida saqlanadi va keyin davom ettiriladi.</li>" +
        "</ul>",
    },
    {
      savol: "Flowgorithm oynasining asosiy qismlarini va ularning vazifasini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Qism</th><th>Vazifasi</th></tr>" +
        "<tr><td>Menyu qatori</td><td>File, Edit, View, Program, Tools, Help bo'limlari</td></tr>" +
        "<tr><td>Asboblar paneli</td><td>Yangi, Ochish, Saqlash va Run (ishga tushirish) tugmalari</td></tr>" +
        "<tr><td>Diagramma maydoni</td><td>Bloklar shu yerda joylashadi</td></tr>" +
        "<tr><td>Bloklar paneli</td><td>Qo'shiladigan bloklar ro'yxati (Assign, Declare, If, While...)</td></tr>" +
        "<tr><td>Konsol</td><td>Natijalar, kiritish maydoni va xato xabarlari</td></tr>" +
        "</table>" +
        "<p>Foydali tugmalar: <b>F5</b> &mdash; ishga tushirish, <b>Ctrl+S</b> &mdash; saqlash, blokni ikki marta bosish &mdash; tahrirlash.</p>",
    },
    {
      savol: "Asosiy bloklarni (Start, End, Declare, Assign, Input, Output) va ularning vazifasini yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Blok</th><th>Shakli</th><th>Vazifasi</th></tr>" +
        "<tr><td>Start / End</td><td>Oval</td><td>Dasturning boshlanishi va tugashi</td></tr>" +
        "<tr><td>Declare</td><td>To'rtburchak</td><td>O'zgaruvchini e'lon qilish va turini tanlash</td></tr>" +
        "<tr><td>Assign</td><td>To'rtburchak</td><td>O'zgaruvchiga qiymat berish (s = s + i)</td></tr>" +
        "<tr><td>Input</td><td>Parallelogramma</td><td>Foydalanuvchidan ma'lumot olish</td></tr>" +
        "<tr><td>Output</td><td>Parallelogramma</td><td>Natijani ekranga chiqarish</td></tr>" +
        "</table>" +
        "<p>Tartib qoidasi: avval e'lon qil, keyin qiymat ol, keyin hisobla, oxirida chiqar.</p>",
    },
    {
      savol: "O'zgaruvchi <b>turlari</b> qanday va nima uchun turni to'g'ri tanlash muhim?",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Tur</th><th>Saqlaydigan ma'lumot</th><th>Misol</th></tr>" +
        "<tr><td>Integer</td><td>Butun son</td><td>5, -12</td></tr>" +
        "<tr><td>Real</td><td>O'nlik son</td><td>4.5, 3.14</td></tr>" +
        "<tr><td>String</td><td>Matn</td><td>\"Zuhra\"</td></tr>" +
        "<tr><td>Boolean</td><td>Mantiqiy qiymat</td><td>True / False</td></tr>" +
        "</table>" +
        "<p>Nima uchun muhim: agar o'rtacha baho uchun <b>Integer</b> tanlansa, natija <b>4.5</b> emas, balki <b>4</b> bo'lib chiqadi (kasr qismi yo'qoladi). Shuning uchun o'nlik natija kerak bo'lsa &mdash; <b>Real</b> turi tanlanadi.</p>",
    },
    {
      savol: "<b>If</b>, <b>While</b> va <b>For</b> bloklarini taqqoslang: qaysi holatda qaysi biri ishlatiladi?",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Blok</th><th>Vazifasi</th><th>Qachon ishlatiladi</th><th>Chiqish yo'li</th></tr>" +
        "<tr><td>If</td><td>Shartni tekshiradi</td><td>Ikki yo'ldan birini tanlashda</td><td>2 ta (True / False)</td></tr>" +
        "<tr><td>While</td><td>Shart bajarilguncha takrorlaydi</td><td>Takrorlash soni noma'lum bo'lsa</td><td>2 ta (sikl / chiqish)</td></tr>" +
        "<tr><td>For</td><td>Belgilangan marta takrorlaydi</td><td>Soni oldindan ma'lum bo'lsa (1..10)</td><td>1 ta</td></tr>" +
        "</table>" +
        "<p>Misol: \"10 ta bahoni kiritib o'rtacha hisoblash\" &mdash; For qulay. \"Foydalanuvchi to'g'ri son kiritguncha so'rash\" &mdash; While qulay. \"Bahosi 4 dan katta bo'lsa maqtash\" &mdash; If kerak.</p>" +
        "<p>Diqqat: While va For da qadamni oshirish (yoki For ning o'zi) bo'lmasa, sikl cheksiz aylanadi.</p>",
    },
    {
      savol: "Flowgorithm da diagrammani <b>kodga aylantirish</b> qanday amalga oshiriladi? Nega bu foydali?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Tartib quyidagicha:</p>" +
        "<ol>" +
        "<li>Diagrammani tuzib, <b>F5</b> bilan ishga tushirib tekshirish;</li>" +
        "<li><b>Ctrl+S</b> bilan <code>.fpr</code> fayl qilib saqlash;</li>" +
        "<li><b>Tools &rarr; Source Code Viewer</b> menyusini ochish;</li>" +
        "<li><b>Language</b> ro'yxatidan tilni tanlash: Python, C#, Java, JavaScript, C++, Visual Basic;</li>" +
        "<li>Kodni ko'chirib olish (Copy) yoki fayl qilib saqlash.</li>" +
        "</ol>" +
        "<p>Foydasi: bir xil mantiq turli tillarda qanday yozilishini ko'rish mumkin. Bloklar ketma-ketligi bir xil qoladi, faqat sintaksis o'zgaradi. Bu esa bir tildan ikkinchisiga o'tishni osonlashtiradi.</p>",
    },
    {
      savol: "Flowgorithm da eng ko'p uchraydigan <b>3 xato</b> va ularning yechimini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<ol>" +
        "<li><b>\"The variable has not been declared\"</b> &mdash; blokda ishlatilgan o'zgaruvchi e'lon qilinmagan. Yechim: diagramma boshiga Declare bloki qo'shish;</li>" +
        "<li><b>Sikl to'xtamayapti (cheksiz aylanish)</b> &mdash; siklda qadamni oshirish bloki yo'q. Yechim: <code>i = i + 1</code> blokini sikl ichiga qo'shish;</li>" +
        "<li><b>Natija 4.5 o'rniga 4 chiqyapti</b> &mdash; o'zgaruvchi Integer turida e'lon qilingan. Yechim: turni <b>Real</b> ga o'zgartirish.</li>" +
        "</ol>" +
        "<p>Qo'shimcha: blok ulanmagan bo'lsa yoki End bloki yo'q bo'lsa, dastur umuman ishga tushmaydi. Xato xabari konsolda ko'rinadi.</p>",
    },
  ],

  test: [
    {
      savol: "Flowgorithm dasturining asosiy vazifasi nima?",
      variantlar: [
        "Matn yozish",
        "Blok-sxema chizib, uni ishga tushirish va kodga aylantirish",
        "Rasm tahrirlash",
        "Musiqa yaratish",
      ],
      togri: 1,
      izoh: "Flowgorithm - bepul dastur: blok-sxema chiziladi, F5 bilan bajariladi va til kodiga eksport qilinadi.",
    },
    {
      savol: "O'zgaruvchini e'lon qilish uchun qaysi blok ishlatiladi?",
      variantlar: ["Assign", "Declare", "Output", "If"],
      togri: 1,
      izoh: "Declare - o'zgaruvchini e'lon qiladi va turini tanlaydi. Assign esa qiymat beradi.",
    },
    {
      savol: "Foydalanuvchidan ma'lumot olish uchun qaysi blok kerak?",
      variantlar: ["Input", "Output", "While", "Start"],
      togri: 0,
      izoh: "Input bloki savol ko'rsatadi va kiritilgan qiymatni o'zgaruvchiga saqlaydi.",
    },
    {
      savol: "Takrorlash soni oldindan ma'lum bo'lsa, qaysi blok qulay?",
      variantlar: ["If", "For", "Output", "Declare"],
      togri: 1,
      izoh: "For - soni ma'lum bo'lganda (1 dan 10 gacha). While - soni noma'lum bo'lganda ishlatiladi.",
    },
    {
      savol: "Dastur 4.5 o'rniga 4 chiqaryapti. Sababi nima bo'lishi mumkin?",
      variantlar: [
        "Konsol oynasi yopilgan",
        "O'zgaruvchi Integer turida e'lon qilingan",
        "Fayl saqlanmagan",
        "Blok noto'g'ri joylashgan",
      ],
      togri: 1,
      izoh: "Integer turi kasr qismini yo'qotadi. O'nlik natija uchun Real turi kerak.",
    },
    {
      savol: "Flowgorithm da diagrammani ishga tushirish uchun qaysi tugma bosiladi?",
      variantlar: ["Ctrl+S", "F5", "F1", "Delete"],
      togri: 1,
      izoh: "F5 - ishga tushirish. Ctrl+S - saqlash, Delete - blokni o'chirish.",
    },
  ],

  lugat: [
    { soz: "Flowgorithm", izoh: "Blok-sxema chizib, ishga tushirish va kodga aylantirish mumkin bo'lgan bepul dastur." },
    { soz: "Diagramma maydoni", izoh: "Bloklar joylashadigan asosiy maydon." },
    { soz: "Konsol", izoh: "Natijalar, kiritish va xato xabarlari ko'rinadigan oyna." },
    { soz: "Blok", izoh: "Dasturning bitta aniq amalini bajaruvchi shakl." },
    { soz: "Start / End", izoh: "Dasturning boshlanishi va tugashi (oval shakl)." },
    { soz: "Declare", izoh: "O'zgaruvchini e'lon qilish bloki." },
    { soz: "Assign", izoh: "O'zgaruvchiga qiymat berish bloki." },
    { soz: "Input", izoh: "Foydalanuvchidan ma'lumot olish bloki." },
    { soz: "Output", izoh: "Natijani ekranga chiqarish bloki." },
    { soz: "If", izoh: "Shartni tekshiruvchi blok (romb, ikki chiqishli)." },
    { soz: "While", izoh: "Shart bajarilguncha takrorlovchi sikl bloki." },
    { soz: "For", izoh: "Belgilangan marta takrorlovchi sikl bloki." },
    { soz: "Eksport", izoh: "Diagrammani dasturlash tili kodiga aylantirish." },
    { soz: ".fpr", izoh: "Flowgorithm diagrammasi saqlanadigan fayl kengaytmasi." },
    { soz: "Integer", izoh: "Butun sonlar uchun o'zgaruvchi turi." },
    { soz: "Real", izoh: "O'nlik sonlar uchun o'zgaruvchi turi." },
  ],

  xatolar: [
    "O'zgaruvchini e'lon qilmasdan ishlatish &mdash; \"not declared\" xatosi chiqadi.",
    "O'nlik son uchun Integer turini tanlash &mdash; kasr qismi yo'qoladi.",
    "Siklda qadamni oshirishni unutish &mdash; cheksiz sikl.",
    "If blokining faqat bitta shoxiga blok qo'yib, ikkinchisini bo'sh qoldirish.",
    "End blokini qo'ymaslik yoki bloklarni bir-biriga ulamaslik.",
    "Input blokida savol matnini yozmaslik &mdash; foydalanuvchi nima kiritishini bilmaydi.",
    "Diagrammani saqlamasdan eksport qilishga urinish.",
    "Bloklarni juda ko'p bitta chiziqqa tiqishtirish &mdash; o'qish qiyinlashadi (bo'laklarga bo'lish kerak).",
  ],

  keyingi:
    "Endi Flowgorithm da ishlashni bilamiz. Keyingi darsda <b>dasturlash tushunchalarini</b> chuqurroq o'rganamiz: dastur, buyruq, kod va mantiq nima ekani, buyruqlarning turlari (kiritish, chiqarish, o'zlashtirish, shart, sikl), dasturning tuzilishi, xatolarning uch turi (sintaksis, mantiqiy, ish vaqti) va dasturni sinash usullari. Shundan keyin har bir yozgan kodimiz nima uchun aynan shunday yozilishini chuqur tushunasiz.",
});
