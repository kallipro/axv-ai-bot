/* 23-dars: Flowgorithmda o'zgaruvchilar va ma'lumot turlari bilan ishlash */

AVX.dars({
  id: "cs8-023",
  sarlavha: "Flowgorithmda o'zgaruvchilar va ma'lumot turlari bilan ishlash",
  kiritish:
    "Tasavvur qiling, dastur sizdan <b>ismingizni</b> so'raydi, keyin <b>yoshingizni</b>, so'ng ikkalasini birlashtirib javob chiqaradi. Dastur bu ma'lumotlarni qayerda eslab qoladi? Javob &mdash; <b>o'zgaruvchi</b> (variable) ichida. Bugun biz Flowgorithm da o'zgaruvchi yaratishni, uning <b>turlari</b> (Integer, Real, String, Boolean) va bir turdan ikkinchisiga o'tishni o'rganamiz.",

  maqsad: [
    "O'zgaruvchi nima ekanligini va u qanday muammoni hal qilishini tushunish.",
    "Flowgorithm da <code>Declare</code> bloki orqali o'zgaruvchi e'lon qilishni o'rganish.",
    "To'rt asosiy ma'lumot turini (Integer, Real, String, Boolean) ajratib olish.",
    "O'zgaruvchi nomlash qoidalariga rioya qilish.",
    "Tur o'girish (konvertatsiya) nima uchun kerakligini va qanday bajarilishini o'zlashtirish.",
  ],

  natija: [
    "Flowgorithm da <code>Declare</code> bloki bilan istalgan turdagi o'zgaruvchini e'lon qiladi.",
    "Integer, Real, String va Boolean turlarini topshiriqdagi ma'lumotga qarab to'g'ri tanlaydi.",
    "<code>Assign</code> bloki bilan o'zgaruvchiga qiymat beradi va uni qayta o'zgartiradi.",
    "<code>Input</code> orqali foydalanuvchidan qiymat olib, uni kerakli turga o'giradi.",
    "Trace table (qiymatlar jadvali) tuzib, dasturning har bir qadamida o'zgaruvchi qiymatini kuzatadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: blok-sxema elementlari, Start/End, eksport."],
    ["5-15 daq", "Mentor tushuntirishi", "O'zgaruvchi - dasturning xotira qutisi. Tur nima uchun kerak?"],
    ["15-27 daq", "Nazariya: to'rt tur", "Integer, Real, String, Boolean. Nomlash qoidalari."],
    ["27-40 daq", "Amaliyot: Declare", "Flowgorithm da o'zgaruvchi e'lon qilish va qiymat berish."],
    ["40-55 daq", "Amaliyot: Input va tur", "Foydalanuvchidan son olish, matnni songa o'girish."],
    ["55-70 daq", "Amaliyot: trace table", "Qiymatlar jadvali tuzib, dasturni qadam-baqadam kuzatish."],
    ["70-77 daq", "Mustaqil ish va uyga vazifa", "Talaba kartochkasi dasturini tugatish."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. O'zgaruvchi - dasturning xotira qutisi",
      matn: [
        "Kompyuter xotirasini qutilari ko'p katta shkaf deb tasavvur qiling. Har bir qutiga <em>nom yozib</em> qo'yamiz va ichiga bitta qiymat solamiz: <code>yosh = 14</code>, <code>ism = \"Aziza\"</code>.",
        "Keyin dastur o'sha nom orqali qutini topadi va ichidagi qiymatni ishlatadi. <b>O'zgaruvchi</b> - nom berilgan xotira qutisi. Uning ichidagi qiymat dastur davomida o'zgarishi mumkin, nomi ham shundan olingan.",
        "Muhim: o'zgaruvchi nomini <em>o'zingiz uchun</em> tanlaysiz. <code>x</code> o'rniga <code>oquvchiYoshi</code> deb yozsangiz, bir haftadan keyin ham dasturni tushunasiz.",
      ],
    },
    {
      sarlavha: "2. Tur nima uchun kerak?",
      matn: [
        "Savol: <code>14</code> va <code>\"14\"</code> bir xilmi? Kompyuter uchun - <b>yo'q</b>. Birinchisi son, u bilan qo'shish mumkin. Ikkinchisi matn, u faqat yonma-yon qo'yiladi.",
        "Shu sababli har bir o'zgaruvchi <b>turi</b> bilan e'lon qilinadi. Tur kompyuterga \"bu qutida qanday ma'lumot yotadi va u bilan nima qilish mumkin\" deb aytadi.",
        "Agar turni noto'g'ri tanlasangiz, dastur ishlagandek tuyuladi-yu, natija kutilmagan bo'ladi: <code>\"5\" + \"3\"</code> natijasi <code>53</code>, lekin <code>5 + 3</code> natijasi <code>8</code>. Bu - boshlovchilarning eng ko'p qiladigan xatosi.",
      ],
    },
    {
      sarlavha: "3. To'rt asosiy tur",
      matn: [
        "<b>Integer</b> - butun sonlar: <code>5</code>, <code>-12</code>, <code>2026</code>. Yosh, odam soni, ball.",
        "<b>Real</b> - kasr sonlar: <code>3.14</code>, <code>-0.5</code>, <code>175.5</code>. Bo'y, narx, o'rtacha baho. Eslatma: kasr <em>nuqta</em> bilan yoziladi, vergul bilan emas.",
        "<b>String</b> - matnlar: <code>\"Aziza\"</code>, <code>\"Chimboy\"</code>, <code>\"Salom!\"</code>. Qo'shtirnoq ichida yoziladi. Raqamdan iborat matn ham String bo'lishi mumkin: <code>\"+998901234567\"</code>.",
        "<b>Boolean</b> - faqat ikki qiymat: <code>true</code> (rost) yoki <code>false</code> (yolg'on).",
      ],
    },
    {
      sarlavha: "4. Nomlash qoidalari",
      matn: [
        "Qoida 1: nom <em>harf</em> bilan boshlanadi (undan keyin raqam bo'lishi mumkin): <code>son1</code> - to'g'ri, <code>1son</code> - xato.",
        "Qoida 2: nom ichida <em>faqat</em> lotin harflari, raqamlar va <code>_</code> ishlatiladi. Bo'sh joy, chiziqcha, kirillcha va o'zbek/qaraqalpaq harflari ishlatilmaydi.",
        "Qoida 3: katta-kichik harf farq qiladi: <code>ism</code> va <code>Ism</code> - ikki xil o'zgaruvchi.",
        "Qoida 4: nom mazmunli bo'lsin. <code>a</code>, <code>b</code>, <code>c</code> o'rniga <code>uzunlik</code>, <code>eni</code>, <code>yuza</code> yozing. Bir necha so'zdan iborat nom uchun <em>camelCase</em> ishlatiladi: <code>oquvchiYoshi</code>.",
      ],
    },
    {
      sarlavha: "5. Tur o'girish - eng ko'p uchraydigan muammo",
      matn: [
        "Foydalanuvchi klaviaturadan nima yozsa ham, dastur uchun u <b>matn</b> bo'lib keladi. Yozgan <code>14</code> ham aslida <code>\"14\"</code>.",
        "Agar siz <code>\"14\"</code> ga <code>1</code> qo'shsangiz, kutilgan <code>15</code> o'rniga <code>\"141\"</code> chiqadi. Shu sababli matnni <em>avval songa o'girish</em> kerak.",
        "O'girish <b>tur konvertatsiyasi</b> deyiladi. Flowgorithm da buni <code>Integer(...)</code>, <code>Real(...)</code>, <code>String(...)</code> funksiyalari bajaradi. Kod tillarida esa <code>int()</code>, <code>float()</code>, <code>str()</code> ko'rinishida bo'ladi.",
      ],
    },
  ],

  test: [
    {
      savol: "O'zgaruvchi nima?",
      variantlar: [
        "Dasturning bir qismi",
        "Nom berilgan xotira joyi, unda bitta qiymat saqlanadi",
        "Faqat sonlarni saqlaydigan joy",
        "Flowgorithm dagi tugma",
      ],
      togri: 1,
      izoh: "O'zgaruvchi - xotiradagi nomlangan joy. Ichidagi qiymat o'zgaradi, nomi o'zgarmaydi.",
    },
    {
      savol: "Kasr sonlar qaysi turda saqlanadi?",
      variantlar: ["Integer", "String", "Real", "Boolean"],
      togri: 2,
      izoh: "Real - kasr sonlar turi: 1.63, 3.14, -0.5. Integer faqat butun sonlar uchun.",
    },
    {
      savol: "O'zgaruvchi nomi qanday boshlanishi kerak?",
      variantlar: ["Raqam bilan", "Harf bilan", "Pastki chiziq bilan", "Qo'shtirnoq bilan"],
      togri: 1,
      izoh: "Nom harf bilan boshlanadi. 1yosh - xato, yosh1 - to'g'ri.",
    },
    {
      savol: "Foydalanuvchi kiritgan qiymat dasturga qanday turda keladi?",
      variantlar: ["Har doim Integer", "Har doim Real", "Har doim String (matn)", "Boolean"],
      togri: 2,
      izoh: "Klaviatura kiritmasi doim matn bo'lib keladi - hisoblash uchun uni songa o'girish kerak.",
    },
    {
      savol: "Quyidagi qaysi nom XATO?",
      variantlar: ["oquvchiYoshi", "narx_2", "juft son", "alochi"],
      togri: 2,
      izoh: "juft son nomida bo'sh joy bor - bu taqiqlangan. To'g'ri shakli: juftSon.",
    },
    {
      savol: "Trace table nima uchun ishlatiladi?",
      variantlar: [
        "Dasturni tezroq ishlatish uchun",
        "O'zgaruvchilar qiymatini qadam-baqadam kuzatish uchun",
        "Faylni saqlash uchun",
        "Kod ranglarini tanlash uchun",
      ],
      togri: 1,
      izoh: "Trace table har bir qadamdan keyin qiymatlarni yozib boradi - xatoni topishning ishonchli yo'li.",
    },
  ],

  lugat: [
    { soz: "O'zgaruvchi (variable)", izoh: "Nom berilgan xotira joyi; ichida bitta qiymat saqlanadi." },
    { soz: "Declare", izoh: "Flowgorithm da o'zgaruvchini e'lon qiluvchi blok: nom va tur yoziladi." },
    { soz: "Assign", izoh: "O'zgaruvchiga qiymat beruvchi blok: [ nom = qiymat ]." },
    { soz: "Input", izoh: "Foydalanuvchidan ma'lumot so'raydigan blok." },
    { soz: "Output", izoh: "Natijani ekranga (konsolga) chiqaradigan blok." },
    { soz: "Integer", izoh: "Butun sonlar turi: 5, -12, 2026." },
    { soz: "Real", izoh: "Kasr sonlar turi: 3.14, 1.63, -0.5." },
    { soz: "String", izoh: "Matnlar turi: \"Aziza\", \"Salom!\"." },
    { soz: "Boolean", izoh: "Mantiqiy tur: faqat true (rost) yoki false (yolg'on)." },
    { soz: "Tur o'girish", izoh: "Bir turdagi qiymatni boshqa turga aylantirish; Integer(), Real(), String()." },
    { soz: "camelCase", izoh: "Ko'p so'zli nom yozish usuli: birinchi so'z kichik, keyingilari katta harf bilan." },
    { soz: "Trace table", izoh: "Dastur qadamlarini va o'zgaruvchi qiymatlarini yozib boruvchi jadval." },
    { soz: "Konsol", izoh: "Flowgorithm oynasining pastidagi natija chiqadigan maydon." },
    { soz: "Konvertatsiya", izoh: "Tur o'girish jarayonining ilmiy nomi." },
  ],

  xatolar: [
    "O'zgaruvchini e'lon qilmasdan ishlatish - Flowgorithm xato beradi.",
    "Turini noto'g'ri tanlash: yoshni Real, narxni Integer qilib e'lon qilish.",
    "Kasr sonni vergul bilan yozish: <code>1,63</code> emas, <code>1.63</code> bo'lishi kerak.",
    "Nomda bo'sh joy, chiziqcha yoki o'zbekcha harf ishlatish: <code>boy</code> emas, <code>boy_metr</code>.",
    "Nomni raqam bilan boshlash: <code>1yosh</code>.",
    "Foydalanuvchi kiritgan matnni songa o'girmasdan hisob-kitob qilish - natija <code>\"141\"</code> bo'lib chiqadi.",
    "Boolean o'zgaruvchiga <code>\"ha\"</code> yoki <code>1</code> yozish - faqat <code>true</code>/<code>false</code> bo'lishi kerak.",
    "Bitta o'zgaruvchini ikki marta e'lon qilish (Duplicate variable).",
    "Trace table tuzmasdan dasturni ko'z bilan tekshirish - xatolar shunda yashirin qoladi.",
  ],

  keyingi:
    "Endi biz ma'lumotni saqlashni, turlarini ajratishni va o'girishni bilamiz. Keyingi darsda bu bilimni <b>chiziqli algoritmlar</b>ga ulaymiz: bloklar faqat ketma-ket bajariladigan dasturlar tuzamiz - to'g'ri to'rtburchak yuzasi, o'rtacha baho, ikki sonni almashtirish va harorat o'girish kabi amaliy loyihalar orqali.",
  nazariya: [
    {
      sarlavha: "1. O'zgaruvchi - nomlangan quti",
      matn: [
        "O'zgaruvchi yaratilganda kompyuter xotiradan joy ajratadi va unga nom beradi. Keyin biz shu nom orqali qiymatni o'qiymiz yoki o'zgartiramiz.",
      ],
      jadval: [
        ["Nom", "Tur", "Qiymat", "Ma'nosi"],
        ["ism", "String", "\"Aziza\"", "O'quvchining ismi"],
        ["yosh", "Integer", "14", "Yoshi (butun son)"],
        ["boy", "Real", "1.62", "Bo'yi metrda (kasr son)"],
        ["faol", "Boolean", "true", "Darsga qatnashyaptimi"],
      ],
    },
    {
      sarlavha: "2. To'rt asosiy tur va ular qachon kerak",
      matn: [
        "Turni tanlashda o'zingizga savol bering: bu ma'lumot bilan <em>hisob-kitob</em> qilamanmi yoki yo'qmi?",
      ],
      jadval: [
        ["Tur", "Nimani saqlaydi", "Misollar", "Qachon ishlatiladi"],
        ["Integer", "Butun son", "5, -12, 2026", "Yosh, ball, soni, yil"],
        ["Real", "Kasr son", "3.14, 1.62, -0.5", "Narx, bo'y, o'rtacha, foiz"],
        ["String", "Matn", "\"Aziza\", \"Salom\"", "Ism, manzil, telefon"],
        ["Boolean", "Rost / yolg'on", "true, false", "Shart javobi: ha/yo'q"],
      ],
    },
    {
      sarlavha: "3. O'zgaruvchi bilan ishlashning uch bosqichi",
      matn: [
        "Har qanday o'zgaruvchi bilan ishlash aynan shu ketma-ketlikda bo'ladi. Tartibni buzish - eng ko'p uchraydigan xato.",
      ],
      jadval: [
        ["Bosqich", "Nomi", "Blok", "Misol"],
        ["1", "E'lon qilish (declare)", "[ Declare ]", "[ Declare yosh As Integer ]"],
        ["2", "Qiymat berish (assign / input)", "[ = ] yoki / Input /", "[ yosh = 14 ]"],
        ["3", "Ishlatish (output, hisob)", "/ Output /", "/ Output yosh /"],
      ],
    },
    {
      sarlavha: "4. Tur o'girish qoidalari",
      matn: [
        "Flowgorithm da o'girish funksiyalari qavs ichidagi qiymatni boshqa turga aylantiradi.",
      ],
      jadval: [
        ["Funksiya", "Nimadan nimaga", "Misol", "Natija"],
        ["Integer(x)", "Real / String dan butun songa", "Integer(3.9)", "3 (kasr tashlanadi)"],
        ["Real(x)", "Integer / String dan kasrga", "Real(5)", "5.0"],
        ["String(x)", "Sondan matnga", "String(14)", "\"14\""],
        ["ToInteger(x)", "Matnni songa o'girish", "ToInteger(\"14\")", "14 (son)"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "royxat",
      "sarlavha": "O'zgaruvchi: nomlangan xotira qutisi",
      "tushuntirish": "O'zgaruvchini xotira qutisi deb tasavvur qiling: qutining nomi bor va ichida bitta qiymat turadi.",
      "elementlar": [
        {
          "belgi": "🏷️",
          "nom": "Nom",
          "izoh": "Qutining yorlig'i &mdash; masalan <code>ism</code>, <code>yosh</code>"
        },
        {
          "belgi": "📦",
          "nom": "Qiymat",
          "izoh": "Qutining ichidagi narsa &mdash; masalan <code>Dilnoza</code>, <code>14</code>"
        },
        {
          "belgi": "🔤",
          "nom": "Tur",
          "izoh": "Qutiga nima sig'adi: sonmi yoki matnmi"
        },
        {
          "belgi": "🔄",
          "nom": "O'zgartirish",
          "izoh": "Yangi qiymat solinsa, eskisi o'chib ketadi"
        }
      ],
      "izoh": "Bitta qutida bir vaqtda faqat bitta qiymat turadi &mdash; yangisi eskisini almashtiradi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Nomlash: to'g'ri va noto'g'ri nomlar",
      "tushuntirish": "O'zgaruvchi nomi ma'noli bo'lishi va qoidalarga mos kelishi kerak.",
      "ustunlar": [
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "To'g'ri",
          "royxat": [
            "<code>ism</code>, <code>yosh</code>, <code>ortacha_baho</code>",
            "Kichik harf bilan boshlanadi",
            "Ma'nosi nomidan ko'rinib turadi"
          ]
        },
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Noto'g'ri",
          "royxat": [
            "<code>1ism</code> &mdash; raqam bilan boshlanmaydi",
            "<code>ism-familiya</code> &mdash; chiziqcha ishlatilmaydi",
            "<code>a</code>, <code>x1</code> &mdash; ma'nosiz nom"
          ]
        }
      ],
      "izoh": "Qoida: nom matndan o'qilganda nima saqlanishi <b>darhol</b> tushunarli bo'lsin."
    },
    {
      "tur": "royxat",
      "sarlavha": "Tur o'girish: kerak bo'lganda",
      "tushuntirish": "Kiritilgan qiymat ko'pincha matn bo'lib keladi. Hisoblash uchun uni songa o'girish kerak.",
      "elementlar": [
        {
          "belgi": "🔤",
          "nom": "Matn sifatida keladi",
          "izoh": "Kiritish bloki qiymatni matn ko'rinishida beradi"
        },
        {
          "belgi": "🔢",
          "nom": "Songa o'girish",
          "izoh": "Hisoblashdan oldin son turiga aylantiriladi"
        },
        {
          "belgi": "🧮",
          "nom": "Hisoblash",
          "izoh": "Endi qo'shish, bo'lish kabi amallar bajariladi"
        },
        {
          "belgi": "⚠️",
          "nom": "O'girmasa nima bo'ladi",
          "izoh": "Matnlar qo'shilganda sonlar yonma-yon yozilib qoladi: 5 + 3 = 53"
        }
      ],
      "izoh": "Bu &mdash; eng ko'p uchraydigan sirli xatolardan biri. Natija g'alati chiqsa, <b>turni</b> tekshiring."
    },
    {
      "tur": "qadam",
      "sarlavha": "Tur o'girish ketma-ketligi",
      "tushuntirish": "Kiritilgan matnni songa aylantirish &mdash; to'rt qadamli oddiy jarayon.",
      "elementlar": [
        {
          "nom": "Qiymat kiritiladi",
          "izoh": "Masalan, foydalanuvchi <code>25</code> yozadi"
        },
        {
          "nom": "Turni aniqlash",
          "izoh": "Kiritilgan qiymat matn sifatida saqlanadi"
        },
        {
          "nom": "O'girish amali bajariladi",
          "izoh": "Matn son turiga aylantiriladi"
        },
        {
          "nom": "Natija tekshiriladi",
          "izoh": "Endi qo'shish to'g'ri ishlaydimi &mdash; sinab ko'riladi"
        }
      ],
      "izoh": "Xatoni sezish uchun oraliq qiymatni ekranga chiqarib ko'rish eng tez usul."
    },
    {
      "tur": "oyna",
      "sarlavha": "Trace table: qog'ozda tekshirish",
      "tushuntirish": "Dasturni qog'ozda tekshirishning ishonchli usuli &mdash; har bir qadamdan keyin qiymatlarni jadvalga yozib borish.",
      "oyna": {
        "nom": "Trace table — yig'indi hisoblash",
        "ustunlar": [
          "Qadam",
          "i",
          "yigindi",
          "Shart"
        ],
        "qatorlar": [
          [
            "Boshlash",
            "—",
            "0",
            "—"
          ],
          [
            "1",
            "1",
            "1",
            "1 <= 3 ha"
          ],
          [
            "2",
            "2",
            "3",
            "2 <= 3 ha"
          ],
          [
            "3",
            "3",
            "6",
            "3 <= 3 ha"
          ],
          [
            "4",
            "4",
            "6",
            "4 <= 3 yo'q — tugadi"
          ]
        ]
      },
      "izoh": "Jadval xatoni <b>aniq qadamda</b> ko'rsatadi &mdash; dasturni o'zgartirmasdan tekshirish mumkin."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Declare bloki: o'zgaruvchini e'lon qilish",
      "tushuntirish": "Flowgorithm da har bir o'zgaruvchi avval e'lon qilinadi: nom va tur. Blok shakli <code>[ Declare nom As Tur ]</code>.",
      "nom": "declare.txt",
      "til": "flow",
      "izoh": "Declare bloki dasturning eng boshida, Start dan keyin turadi.",
      "kod": "BLOK-SXEMA: e'lon qilish\n\n        ( START )\n            |\n   [ Declare ism  As String  ]\n   [ Declare yosh As Integer ]\n   [ Declare boy  As Real    ]\n   [ Declare faol As Boolean ]\n            |\n        ( END )\n\nBLOK SHAKLI:\n   [ Declare  <nom>  As  <tur> ]\n        |        |        |\n        |        |        +-- Integer / Real / String / Boolean\n        |        +----------- o'zingiz tanlagan nom\n        +-------------------- blok nomi",
      "natija": "Declare bloki natija chiqarmaydi - u faqat joy tayyorlaydi.\n\nXuddi sayohatdan oldin chamadon tayyorlashga o'xshaydi:\nqiymat hali yo'q, lekin joy allaqachon ajratilgan."
    },
    {
      "sarlavha": "To'rt asosiy tur bitta dasturda",
      "tushuntirish": "Bir dasturda to'rt xil turdagi o'zgaruvchilar birga ishlatiladi. Har biri o'z ishini bajaradi.",
      "nom": "turlar.txt",
      "til": "flow",
      "izoh": "Turni ma'lumotning mazmuniga qarab tanlang, taxmin qilib emas.",
      "kod": "BLOK-SXEMA: Talabaning ma'lumotlari\n\n        ( START )\n            |\n   [ Declare ism    As String  ]   <- \"Dilnoza\"\n   [ Declare yosh   As Integer ]   <- 14\n   [ Declare boy    As Real    ]   <- 1.63\n   [ Declare alochi As Boolean ]   <- true\n            |\n   / Output \"Ism:  \" and ism  /\n   / Output \"Yosh: \" and yosh /\n   / Output \"Boy:  \" and boy  /\n   / Output \"Alochi: \" and alochi /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Ism:  Dilnoza\n  Yosh: 14\n  Boy:  1.63\n  Alochi: true\n\nE'tibor bering: 14 sonini hisoblash mumkin, \"Dilnoza\" ni esa yo'q.\nShuning uchun ular har xil turda."
    },
    {
      "sarlavha": "Integer: butun sonlar bilan ishlash",
      "tushuntirish": "Integer - butun sonlar uchun. Ular bilan qo'shish, ayirish, ko'paytirish bemalol bajariladi.",
      "nom": "butunSon.txt",
      "til": "flow",
      "izoh": "Integer ga kasr son yozsangiz Flowgorithm uni yaxlitlab tashlaydi - bu xatoga olib keladi.",
      "kod": "BLOK-SXEMA: Guruhdagi o'quvchilar soni\n\n        ( START )\n            |\n   [ Declare oquvchilar As Integer ]\n   [ Declare qizlar     As Integer ]\n   [ Declare ogillar    As Integer ]\n            |\n   [ oquvchilar = 26 ]\n   [ qizlar = 12 ]\n   [ ogillar = oquvchilar - qizlar ]\n            |\n   / Output \"Jami o'quvchi: \" and oquvchilar /\n   / Output \"O'g'il bolalar: \" and ogillar  /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Jami o'quvchi: 26\n  O'g'il bolalar: 14\n\n26 - 12 = 14 - bu yerda hisob-kitob to'g'ri bajarildi,\nchunki ikkala o'zgaruvchi ham Integer turida."
    },
    {
      "sarlavha": "Real: kasr sonlar bilan ishlash",
      "tushuntirish": "Real - kasr sonlar uchun. Narx, bo'y, o'rtacha baho kabi qiymatlar shu turda saqlanadi.",
      "nom": "kasrSon.txt",
      "til": "flow",
      "izoh": "Kasr qismi nuqta bilan ajratiladi: 1.63 (vergul bilan emas).",
      "kod": "BLOK-SXEMA: Do'kon narxi\n\n        ( START )\n            |\n   [ Declare narx As Real    ]\n   [ Declare soni As Integer ]\n   [ Declare jami As Real    ]\n            |\n   [ narx = 12.5 ]\n   [ soni = 4    ]\n   [ jami = narx * soni ]\n            |\n   / Output \"Jami summa: \" and jami /\n            |\n        ( END )\n\nDIQQAT: narxni Integer qilib e'lon qilsangiz 12.5 soni 12 bo'lib\nqoladi va natija noto'g'ri chiqadi.",
      "natija": "Konsol:\n\n  Jami summa: 50.0\n\n12.5 * 4 = 50.0 - Real turida natija kasr son bo'lib chiqadi.\nAgar kasr qismi bo'lmasa ham, Real .0 bilan ko'rsatiladi."
    },
    {
      "sarlavha": "String: matn bilan ishlash",
      "tushuntirish": "String - matnlar uchun. Matnlar qo'shtirnoq ichida yoziladi va <code>and</code> bilan birlashtiriladi.",
      "nom": "matn.txt",
      "til": "flow",
      "izoh": "String bilan birlashtirish yopishtirish degani, matematik qo'shish emas.",
      "kod": "BLOK-SXEMA: To'liq ism yasash\n\n        ( START )\n            |\n   [ Declare familiya As String ]\n   [ Declare ism      As String ]\n   [ Declare toliqIsm As String ]\n            |\n   [ familiya = \"Jumanazarov\" ]\n   [ ism = \"Kallibek\"         ]\n   [ toliqIsm = ism and \" \" and familiya ]\n            |\n   / Output \"Salom, \" and toliqIsm and \"!\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Salom, Kallibek Jumanazarov!\n\nString bilan ishlaganda raqamlar ham matnga aylanadi:\n  \"14\" and \"5\"   ->  \"145\"   (birlashtirish)\n  14 + 5         ->  19      (matematik qo'shish)"
    },
    {
      "sarlavha": "Boolean: rost yoki yolg'on",
      "tushuntirish": "Boolean faqat <code>true</code> yoki <code>false</code> qiymatini oladi. U shartlarni tekshirish uchun ishlatiladi.",
      "nom": "mantiqiy.txt",
      "til": "flow",
      "izoh": "Boolean o'zgaruvchi keyingi darsdagi If (shart) blokining asosi bo'ladi.",
      "kod": "BLOK-SXEMA: Darsga tayyorgarlik\n\n        ( START )\n            |\n   [ Declare uygaVazifaBajarildi As Boolean ]\n   [ Declare darsgaKeldi         As Boolean ]\n   [ Declare darsgaTayyor        As Boolean ]\n            |\n   [ uygaVazifaBajarildi = true ]\n   [ darsgaKeldi = true         ]\n   [ darsgaTayyor = uygaVazifaBajarildi and darsgaKeldi ]\n            |\n   / Output \"Darsga tayyor: \" and darsgaTayyor /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Darsga tayyor: true\n\nBoolean ni faqat true yoki false qiymati bilan yozish kerak.\n\"Muvaffaqiyatli\", \"ha\", \"1\" - bular Boolean emas, String."
    },
    {
      "sarlavha": "Assign: qiymat berish va o'zgartirish",
      "tushuntirish": "O'zgaruvchiga qiymat <code>[ nom = qiymat ]</code> ko'rinishida beriladi. Bir o'zgaruvchiga ko'p marta qiymat berish mumkin.",
      "nom": "assign.txt",
      "til": "flow",
      "izoh": "O'ng tomondagi qiymat hisoblanadi, keyin chapdagi o'zgaruvchiga saqlanadi.",
      "kod": "BLOK-SXEMA: Ball yig'ish\n\n        ( START )\n            |\n   [ Declare ball As Integer ]\n            |\n   [ ball = 10 ]\n   / Output \"Birinchi: \" and ball /\n            |\n   [ ball = 15 ]\n   / Output \"Keyin:    \" and ball /\n            |\n   [ ball = ball + 5 ]\n   / Output \"Oxirida:  \" and ball /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Birinchi: 10\n  Keyin:    15\n  Oxirida:  20\n\n[ ball = ball + 5 ] bloki quyidagicha o'qiladi:\n  ball ning hozirgi qiymatiga 5 ni qo'shib, natijani yana\n  ball ga yoz."
    },
    {
      "sarlavha": "Input: foydalanuvchidan qiymat olish",
      "tushuntirish": "<code>Input</code> bloki foydalanuvchidan ma'lumot so'raydi va uni o'zgaruvchiga saqlaydi.",
      "nom": "input.txt",
      "til": "flow",
      "izoh": "Konsolda foydalanuvchi yozgan javob o'zgaruvchiga tushadi.",
      "kod": "BLOK-SXEMA: Ism va yoshni so'rash\n\n        ( START )\n            |\n   [ Declare ism  As String  ]\n   [ Declare yosh As Integer ]\n            |\n   / Input ism  (savol: \"Ismingizni kiriting: \")  /\n   / Input yosh (savol: \"Yoshingizni kiriting: \") /\n            |\n   / Output \"Salom, \" and ism and \"!\"        /\n   / Output \"Siz \" and yosh and \" yoshdasiz.\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Ismingizni kiriting: Aziza\n  Yoshingizni kiriting: 14\n  Salom, Aziza!\n  Siz 14 yoshdasiz.\n\nAgar yosh o'zgaruvchisi String bo'lganda, hisob-kitob qilib\nbo'lmasdi."
    },
    {
      "sarlavha": "Tur o'girish bloklari",
      "tushuntirish": "Flowgorithm da tur o'girish <code>Assign</code> bloki ichida funksiya orqali bajariladi.",
      "nom": "tur_ogirish.txt",
      "til": "flow",
      "izoh": "Bitta qiymatni turli turga o'girib, natijalarni solishtiring.",
      "kod": "BLOK-SXEMA: Tur o'girish\n\n        ( START )\n            |\n   [ Declare matn As String  ]\n   [ Declare son  As Integer ]\n   [ Declare kasr As Real    ]\n            |\n   [ matn = \"14\" ]\n            |\n   [ son = ToInteger(matn) ]\n   / Output \"Son + 1 = \" and (son + 1) /\n            |\n   [ kasr = ToReal(matn) ]\n   / Output \"Kasr + 0.5 = \" and (kasr + 0.5) /\n            |\n   [ matn = String(son) ]\n   / Output \"Matn: \" and matn /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Son + 1 = 15\n  Kasr + 0.5 = 14.5\n  Matn: 14\n\nBitta qiymat \"14\" -> 14 -> 14.5 -> \"14\" bo'lib o'zgardi.\nMantiq o'zgarmadi, faqat TURI o'zgardi."
    },
    {
      "sarlavha": "Mini loyiha: Talaba kartochkasi",
      "tushuntirish": "To'rt turdagi o'zgaruvchini birlashtirib, kichik loyiha yasaymiz: ma'lumotlarni olib, kartochka ko'rinishida chiqaramiz.",
      "nom": "talaba_kartochkasi.txt",
      "til": "flow",
      "izoh": "Bu loyiha bugungi darsning yakuniy amaliyotidir.",
      "kod": "BLOK-SXEMA: Talaba kartochkasi\n\n        ( START )\n            |\n   [ Declare ism      As String  ]\n   [ Declare familiya As String  ]\n   [ Declare yosh     As Integer ]\n   [ Declare boy      As Real    ]\n            |\n   / Input ism      (savol: \"Ism: \")      /\n   / Input familiya (savol: \"Familiya: \") /\n   / Input yosh     (savol: \"Yosh: \")     /\n   / Input boy      (savol: \"Boy (m): \")  /\n            |\n   / Output \"===== TALABA KARTOCHKASI =====\" /\n   / Output \"F.I.Sh: \" and familiya and \" \" and ism /\n   / Output \"Yoshi:  \" and yosh /\n   / Output \"Boyi:   \" and boy and \" m\" /\n   / Output \"==============================\" /\n            |\n        ( END )",
      "natija": "Konsol:\n\n  Ism: Aziza\n  Familiya: Jumanazarova\n  Yosh: 14\n  Boy (m): 1.63\n  ===== TALABA KARTOCHKASI =====\n  F.I.Sh: Jumanazarova Aziza\n  Yoshi:  14\n  Boyi:   1.63 m\n  ==============================\n\nBu loyihada 4 xil tur ishlatildi: String, String, Integer, Real."
    }
  ],

  amaliy: [
    "Flowgorithm ni ochib, yangi diagramma yarating va unda <code>Declare</code> bloki yordamida <code>ism As String</code>, <code>yosh As Integer</code>, <code>boy As Real</code> o'zgaruvchilarini e'lon qiling.",
    "Uchta o'zgaruvchiga <code>Assign</code> bloki orqali o'z qiymatlaringizni kiriting (ismingiz, yoshingiz, bo'yingiz) va <code>Output</code> bilan ekranga chiqaring.",
    "Bitta o'zgaruvchini (masalan <code>ball</code>) uch marta o'zgartirib, har o'zgarishdan keyin qiymatini chiqaring. Konsolda uch xil qiymat ko'rinishini isbotlang.",
    "Foydalanuvchidan yosh so'raydigan dastur tuzing. Yoshni <code>String</code> va <code>Integer</code> turlarida sinab ko'ring - qaysi holatda xato chiqishini yozib oling.",
    "Tur o'girish qiling: foydalanuvchi <code>\"25\"</code> matnini kiritsin, dastur esa uni songa o'girib, ustiga 5 qo'shib chiqarsin (javob: 30).",
    "Quyidagi dasturning trace table ini to'ldiring: <code>a = 3</code>, <code>b = a * 2</code>, <code>a = b + 1</code>, <code>b = a - b</code>. Oxirida <code>a</code> va <code>b</code> qanday qiymatga ega bo'ladi?",
    "Talaba kartochkasi loyihasini to'rt turdagi o'zgaruvchi bilan qurib, ekranga chiqaring. Diagrammani <code>.fpr</code> fayl sifatida saqlang.",
  ],

  uyga: [
    {
      savol: "O'zgaruvchi nima? Uni <b>xotira qutisi</b> misolida 4-5 gap bilan tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>O'zgaruvchi</b> - kompyuter xotirasida nom berilgan joy; uning ichida bitta qiymat saqlanadi.</p>" +
        "<p>Buni qutilari bo'lgan shkafga o'xshatish mumkin. Har bir qutiga yorliq (nom) yopishtiriladi: <em>yosh</em>, <em>ism</em>. Qutining ichiga esa bitta qiymat solinadi: <code>14</code>, <code>\"Aziza\"</code>.</p>" +
        "<ul>" +
        "<li>Quti <b>nomi</b> dastur tugaguncha o'zgarmaydi;</li>" +
        "<li>Quti <b>ichidagi qiymat</b> esa o'zgarib turadi - nomi ham shundan;</li>" +
        "<li>Yangi qiymat solsangiz, eskisi o'chib ketadi;</li>" +
        "<li>Har bir quti ma'lum <b>turda</b> bo'ladi (son, matn va h.k.).</li>" +
        "</ul>",
    },
    {
      savol: "To'rt asosiy turni yozing va har biriga <b>hayotdan</b> 2 tadan misol keltiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Integer</b> (butun son): sinfdagi o'quvchilar soni <code>26</code>; tug'ilgan yil <code>2012</code>.</li>" +
        "<li><b>Real</b> (kasr son): havo harorati <code>23.5</code>; kunlik o'rtacha baho <code>4.4</code>.</li>" +
        "<li><b>String</b> (matn): maktab nomi <code>\"1-maktab\"</code>; telefon raqami <code>\"+998901234567\"</code>.</li>" +
        "<li><b>Boolean</b> (rost/yolg'on): <code>true</code> - uyga vazifa bajarilgan; <code>false</code> - darsga kelmagan.</li>" +
        "</ol>" +
        "<p>Diqqat: telefon raqami sonlarga o'xshasa ham String, chunki u bilan qo'shish-ayirish qilinmaydi.</p>",
    },
    {
      savol: "Quyidagi nomlardan qaysilari <b>to'g'ri</b>, qaysilari xato? Sababini yozing: <code>yosh</code>, <code>1sinf</code>, <code>oquvchi_ismi</code>, <code>boy</code>, <code>juft son</code>, <code>narx2</code>.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ul>" +
        "<li><code>yosh</code> - <b>to'g'ri</b>: harf bilan boshlangan, faqat lotin harflari.</li>" +
        "<li><code>1sinf</code> - <b>xato</b>: raqam bilan boshlanmaydi.</li>" +
        "<li><code>oquvchi_ismi</code> - <b>to'g'ri</b>: pastki chiziq ishlatilgan.</li>" +
        "<li><code>boy</code> - <b>to'g'ri</b>: faqat lotin harflari.</li>" +
        "<li><code>juft son</code> - <b>xato</b>: bo'sh joy bor. To'g'ri shakli: <code>juftSon</code>.</li>" +
        "<li><code>narx2</code> - <b>to'g'ri</b>: harf bilan boshlanib, raqam bilan davom etgan.</li>" +
        "</ul>",
    },
    {
      savol: "<b>Tur o'girish</b> nima va u nima uchun kerak? <code>\"7\" + 3</code> misolida tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Tur o'girish</b> - bir turdagi qiymatni boshqa turga aylantirish. U <code>Integer()</code>, <code>Real()</code>, <code>String()</code> funksiyalari orqali bajariladi.</p>" +
        "<p><code>\"7\"</code> - matn, <code>3</code> - son. Ular ustida amal bajarishdan oldin turni tenglashtirish kerak:</p>" +
        "<ul>" +
        "<li><code>\"7\" + 3</code> - xato yoki kutilmagan natija (ba'zi tillarda <code>\"73\"</code>);</li>" +
        "<li><code>ToInteger(\"7\") + 3</code> - to'g'ri natija: <code>10</code>.</li>" +
        "</ul>" +
        "<p>Sababi: foydalanuvchi klaviaturadan kiritgan har qanday qiymat dasturga <b>matn</b> bo'lib keladi. Hisoblash uchun uni avval songa o'girish shart.</p>",
    },
    {
      savol: "Quyidagi dastur uchun <b>trace table</b> tuzing va yakuniy natijani yozing:<br><code>a = 5</code>, <code>b = 2</code>, <code>a = a * b</code>, <code>c = a + b</code>, <code>b = c - a</code>.",
      tezlik: "Taxminiy vaqt: 8 daqiqa",
      javob:
        "<table class=\"reja-table\"><thead><tr><th>Qadam</th><th>a</th><th>b</th><th>c</th></tr></thead><tbody>" +
        "<tr><td>0 (boshlanish)</td><td>-</td><td>-</td><td>-</td></tr>" +
        "<tr><td>1. a = 5</td><td>5</td><td>-</td><td>-</td></tr>" +
        "<tr><td>2. b = 2</td><td>5</td><td>2</td><td>-</td></tr>" +
        "<tr><td>3. a = a * b</td><td>10</td><td>2</td><td>-</td></tr>" +
        "<tr><td>4. c = a + b</td><td>10</td><td>2</td><td>12</td></tr>" +
        "<tr><td>5. b = c - a</td><td>10</td><td>2</td><td>12</td></tr>" +
        "</tbody></table>" +
        "<p><b>Yakuniy natija:</b> <code>a = 10</code>, <code>b = 2</code>, <code>c = 12</code>.</p>" +
        "<p>Oxirgi qadamda <code>b = 12 - 10 = 2</code> bo'ladi - ya'ni <code>b</code> ning qiymati o'zgarishsiz qoladi. Buni ko'p o'quvchilar noto'g'ri hisoblaydi, trace table esa xatoni darhol ko'rsatadi.</p>",
    },
    {
      savol: "Nima uchun <code>Real</code> turidagi ma'lumotni <code>Integer</code> qilib e'lon qilish <b>xavfli</b>? Misol bilan tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Integer faqat butun sonlarni saqlaydi. Unga kasr son berilsa, kasr qismi <b>yo'qoladi</b> (yaxlitlanmaydi, balki butunlay tashlanadi).</p>" +
        "<p>Misol: narx <code>12.9</code>, soni <code>3</code>.</p>" +
        "<ul>" +
        "<li>Agar narx <b>Integer</b> bo'lsa: <code>12 * 3 = 36</code>;</li>" +
        "<li>Agar narx <b>Real</b> bo'lsa: <code>12.9 * 3 = 38.7</code>.</li>" +
        "</ul>" +
        "<p>Ya'ni mijozdan 2.7 so'm kam hisoblanadi. Pul, o'lchov va foiz bilan ishlaganda har doim <code>Real</code> ishlatish kerak.</p>",
    },
    {
      savol: "O'zingiz haqingizda ma'lumot chiqaradigan dastur yozing: ism (String), yosh (Integer), bo'y (Real), sport bilan shug'ullanasizmi (Boolean). Konsol natijasini ko'rsating.",
      tezlik: "Taxminiy vaqt: 8 daqiqa",
      javob:
        "<p>Namuna blok-sxemasi:</p>" +
        "<pre><code>( START )\n" +
        "  [ Declare ism As String ]\n" +
        "  [ Declare yosh As Integer ]\n" +
        "  [ Declare boy As Real ]\n" +
        "  [ Declare sportchi As Boolean ]\n" +
        "  [ ism = \"Kallibek\" ]\n" +
        "  [ yosh = 29 ]\n" +
        "  [ boy = 1.75 ]\n" +
        "  [ sportchi = true ]\n" +
        "  / Output \"Men \" and ism and \" yoshdaman.\" /\n" +
        "  / Output \"Boyim \" and boy and \" metr.\" /\n" +
        "  / Output \"Sport: \" and sportchi /\n" +
        "( END )</code></pre>" +
        "<p><b>Konsol natijasi:</b></p>" +
        "<pre><code>Men Kallibek yoshdaman.\n" +
        "Boyim 1.75 metr.\n" +
        "Sport: true</code></pre>" +
        "<p>Tekshirish: har bir o'zgaruvchi mazmuniga mos turda e'lon qilingan - matn String, yosh Integer, bo'y Real, ha/yo'q Boolean.</p>",
    },
  ],
});
