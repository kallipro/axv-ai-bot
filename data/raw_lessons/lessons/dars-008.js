/* 8-dars: Raqamli savodxonlik va raqamli madaniyat */

AVX.dars({
  id: "cs8-008",
  sarlavha: "Raqamli savodxonlik va raqamli madaniyat",
  kiritish:
    "Internetda bo'lish &mdash; bu katta shaharda yashash kabidir. Unda ham odob bor, xavf bor va mas'uliyat bor. Bugun <b>raqamli savodxonlik</b> nima ekanini, internet odobini (<b>netiket</b>), <b>raqamli iz</b> nima uchun muhimligini va <b>feyk ma'lumotni</b> qanday aniqlashni o'rganamiz.",

  maqsad: [
    "Raqamli savodxonlik tushunchasini va asosiy ko'nikmalarini bilish.",
    "Raqamli madaniyat va internetda muloqot odobini (netiket) o'zlashtirish.",
    "Raqamli iz (digital footprint) nima ekanini va uning oqibatlarini tushunish.",
    "Shaxsiy ma'lumotlarni himoya qilish va onlayn mas'uliyatni anglash.",
    "Ishonchli axborotni aniqlash va feyk ma'lumotlardan saqlanish usullarini o'rganish.",
  ],

  natija: [
    "Raqamli savodxonlikning 5 ta asosiy ko'nikmasini sanaydi.",
    "Internetda muloqot qilishning 7 ta odob qoidasini biladi.",
    "O'z raqamli izini tahlil qilib, xulosa chiqaradi.",
    "Ma'lumotning ishonchliligini 5 mezon bo'yicha baholaydi.",
    "Feyk yangilikni aniqlash dasturini yozadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: WPM, asosiy qator, to'g'ri o'tirish."],
    ["5-16 daq", "Mentor tushuntirishi", "\"Katta shahar\" misoli orqali raqamli madaniyat."],
    ["16-28 daq", "Raqamli savodxonlik", "5 ta asosiy ko'nikma, kundalik hayotdagi misollar."],
    ["28-40 daq", "Netiket va raqamli iz", "Muloqot odobi, raqamli iz tushunchasi, oqibatlari."],
    ["40-56 daq", "Feyk ma'lumot", "Ishonchlilikni tekshirish mezonlari, amaliy misollar."],
    ["56-72 daq", "Amaliyot: kod yozamiz", "Ishonchlilik baholovchi, feyk aniqlovchi va raqamli iz tahlili dasturlari."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har kim o'z raqamli izini yozadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Katta shahar misoli",
      matn: [
        "Tasavvur qiling, siz katta, notanish shaharga keldingiz. Ko'chada baland ovozda qichqirsangiz nima bo'ladi? Odamlar sizga g'alati qaraydi. Notanish odamga qo'pol gapirsangiz? Muammo chiqadi. Notanish joyda qimmat narsangizni ochiq qoldirsangiz? Yo'qotish mumkin.",
        "Internet ham xuddi shunday &mdash; u <em>katta shahar</em>. Faqat unda ko'cha emas, sahifa; qo'shni emas, foydalanuvchi. Va eng muhimi: internetda siz aytgan har bir so'z <b>yozib qo'yiladi</b> va o'chib ketmaydi.",
        "Shuning uchun bizga ikki narsa kerak: <b>raqamli savodxonlik</b> (nima qilishni bilish) va <b>raqamli madaniyat</b> (qanday qilishni bilish). Biri bilim, ikkinchisi &mdash; odob.",
      ],
    },
    {
      sarlavha: "2. Raqamli savodxonlik &mdash; 5 ko'nikma",
      matn: [
        "<b>Birinchi:</b> qurilma va dasturlardan foydalanish &mdash; telefon, kompyuter, brauzer, ilovalar. <b>Ikkinchi:</b> axborot izlash va saralash &mdash; kerakli ma'lumotni topib, keraksizini tashlab ketish.",
        "<b>Uchinchi:</b> axborotni baholash &mdash; bu to'g'rimi, manbasi kim, ishonchlimi? <b>To'rtinchi:</b> yaratish &mdash; matn, rasm, video, kod yaratish. <b>Beshinchi:</b> xavfsizlik &mdash; o'zingizni va ma'lumotlaringizni himoya qilish.",
        "Diqqat qiling: <em>ko'pchilik faqat birinchi ko'nikmani biladi.</em> Ijtimoiy tarmoqda soatlab o'tirish &mdash; bu savodxonlik emas. Savodxonlik &mdash; ma'lumotni topish, tekshirish va undan foydalanish.",
      ],
    },
    {
      sarlavha: "3. Netiket &mdash; internet odobi",
      matn: [
        "Netiket (net + etiquette) &mdash; internetda muloqot qilish odobi. Uning asosi oddiy: <b>ekranning narigi tomonida ham odam bor.</b>",
        "Asosiy qoidalar: yozganingizdan oldin <em>o'qib chiqing</em>. Katta harflarda yozish &mdash; baqirish degani. Kimningdir xatosini ochiq masxara qilmaslik. Boshqalarning shaxsiy ma'lumotlarini ruxsatsiz e'lon qilmaslik (bu \"doxxing\" deb ataladi).",
        "Va bitta oltin qoida: <b>onlayn ham, oflayn ham bir xil odob bo'lishi kerak.</b> Sirtdan yozib, yuzma-yuz aytib bo'lmaydigan gaplarni yozish &mdash; eng katta madaniyatsizlik.",
      ],
    },
    {
      sarlavha: "4. Raqamli iz &mdash; o'chirilmaydigan tarix",
      matn: [
        "Siz internetda qoldirgan har bir iz &mdash; post, izoh, layk, qidiruv, rasm, hatto \"o'chirilgan\" xabar ham &mdash; <b>raqamli iz</b> (digital footprint) deyiladi.",
        "Ikki turi bor: <b>faol iz</b> &mdash; siz o'zingiz qoldirgan (post, izoh, rasm). <b>Passiv iz</b> &mdash; siz sezmagan holda qolgan (qidiruv tarixi, joylashuv, saytlarda qancha vaqt turganingiz).",
        "Nega bu muhim? Chunki <em>universitetga hujjat topshirganda, ishga ariza berganda</em> ish beruvchilar sizning ochiq profilini ko'rishadi. 3 yil oldin \"hazil\" uchun yozgan izohingiz bugun sizga to'sqinlik qilishi mumkin.",
        "Qoida: <b>yozishdan oldin o'ylang.</b> \"Buni onam yoki ustozim ko'rsa, uyalarmidim?\" &mdash; agar javob \"ha\" bo'lsa, yozmaslik kerak.",
      ],
    },
    {
      sarlavha: "5. Feyk ma'lumot &mdash; hech qachon darhol ishonmang",
      matn: [
        "Internetda har kuni minglab yolg'on xabarlar tarqaladi. Ular ko'pincha <em>hayajonli sarlavha</em> bilan keladi: \"Shoshilinch!\", \"Buni hech kim aytmaydi!\", \"100% isbotlangan!\".",
        "Tekshirishning 5 mezoni: <b>manba</b> kim? <b>Sana</b> qachon? <b>Muallif</b> bormi? <b>Boshqa manbalar</b> ham shuni yozganmi? <b>Rasmiy manba</b> (vazirlik, universitet) nima deydi?",
        "Eng oson usul &mdash; <em>teskari qidiruv</em>: yangilikdagi asosiy jumlani qo'shtirnoq ichida Google'ga tashlang. Agar faqat bitta sayt yozgan bo'lsa &mdash; shubhali. Agar 10 ta ishonchli manba yozgan bo'lsa &mdash; ehtimol haqiqat.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Raqamli savodxonlik: 5 asosiy ko'nikma",
      matn: [
        "Raqamli savodxonlik &mdash; raqamli texnologiyalardan samarali va xavfsiz foydalanish qobiliyati.",
      ],
      jadval: [
        ["Ko'nikma", "Nimani o'z ichiga oladi", "Kundalik misol"],
        ["Qurilmadan foydalanish", "Kompyuter, telefon, ilovalar", "Faylni topish, dastur o'rnatish"],
        ["Axborot izlash", "Qidiruv, saralash, filtr", "Dars uchun material topish"],
        ["Axborotni baholash", "Manbani tekshirish, solishtirish", "Yangilik haqiqiyligini aniqlash"],
        ["Yaratish", "Matn, rasm, video, kod", "Taqdimot tayyorlash"],
        ["Xavfsizlik", "Parol, 2FA, maxfiylik", "Hisobni himoyalash"],
      ],
    },
    {
      sarlavha: "2. Netiket: internetda muloqot qoidalari",
      matn: [
        "Quyidagi qoidalarga rioya qilish &mdash; raqamli madaniyatning asosi.",
      ],
      royhatTuri: "ol",
      royhat: [
        "Yozishdan oldin <b>o'qib chiqing</b> &mdash; savolingizga javob allaqachon berilgan bo'lishi mumkin.",
        "<b>Katta harflarda yozmang</b> &mdash; internetda bu baqirish hisoblanadi.",
        "Xato qilgan odamni <b>ochiq masxara qilmang</b> &mdash; shaxsiy xabar yozib, muloyimlik bilan ayting.",
        "Boshqalarning <b>shaxsiy ma'lumotlarini</b> ruxsatsiz e'lon qilmang.",
        "Rasm yoki videoni <b>ruxsat so'rab</b> joylang.",
        "Xabar yozganda <b>qisqa va aniq</b> bo'ling; \"salom\" deb yozib, javob kutib o'tirmang.",
        "Munozarada <b>fikrga</b> qarshi chiqing, <b>odamga</b> emas.",
      ],
    },
    {
      sarlavha: "3. Raqamli iz: faol va passiv",
      matn: [
        "Raqamli iz ikki turga bo'linadi. Ikkalasini ham bilish muhim.",
      ],
      jadval: [
        ["Turi", "Nima kiradi", "Kim qoldiradi"],
        ["Faol iz", "Post, izoh, rasm, video, layk", "Foydalanuvchining o'zi"],
        ["Passiv iz", "Qidiruv tarixi, joylashuv, saytda turgan vaqt, cookie", "Avtomatik yig'iladi"],
      ],
      callout: {
        turi: "danger",
        sarlavha: "O'chirib bo'lmaydigan iz",
        matn: "Internetda <b>o'chirish</b> degani ko'pincha \"siz uchun o'chirish\" demakdir. Boshqalar ekran suratini olgan, qidiruv tizimi keshlagan yoki arxiv sayti saqlab qolgan bo'lishi mumkin. Shu sababli eng yaxshi himoya &mdash; <b>boshidan yozmaslik</b>.",
      },
    },
    {
      sarlavha: "4. Shaxsiy ma'lumotlar va onlayn mas'uliyat",
      matn: [
        "Shaxsiy ma'lumot &mdash; sizni tanitadigan har qanday ma'lumot. Ularni ochiq joyda e'lon qilish xavfli.",
      ],
      jadval: [
        ["Ma'lumot", "Xavf darajasi", "Sabab"],
        ["Ism va familiya", "O'rtacha", "Yolg'on xabar yuborishda ishlatiladi"],
        ["Uy manzili", "Yuqori", "Jismoniy xavf"],
        ["Telefon raqami", "Yuqori", "Spam, firibgarlik"],
        ["Tug'ilgan sana", "Yuqori", "Parolni tiklashda ishlatiladi"],
        ["Pasport ma'lumoti", "Juda yuqori", "Firibgarlik, o'g'irlik"],
        ["Bank karta raqami", "Juda yuqori", "Pul o'g'irlash"],
        ["Joylashuv (geolokatsiya)", "Yuqori", "Qayerda ekaningizni aniqlaydi"],
        ["Parollar", "Juda yuqori", "Hisoblarni egallash"],
      ],
    },
    {
      sarlavha: "5. Feyk ma'lumotni aniqlash: 5 mezon",
      matn: [
        "Har qanday ma'lumotni quyidagi 5 mezon bo'yicha tekshirish kerak.",
      ],
      jadval: [
        ["Mezon", "Savol", "Yaxshi belgi", "Yomon belgi"],
        ["Manba", "Kim yozgan?", "Rasmiy sayt, taniqli nashr", "Noma'lum blog, guruh"],
        ["Sana", "Qachon yozilgan?", "Aniq sana ko'rsatilgan", "Sana yo'q yoki eski"],
        ["Muallif", "Muallif bormi?", "Ism, aloqa ma'lumoti bor", "Anonim, \"admin\" deb yozilgan"],
        ["Tasdiq", "Boshqalar ham yozganmi?", "2-3 ishonchli manba tasdiqlaydi", "Faqat bitta joyda"],
        ["Dalil", "Dalil bormi?", "Raqam, surat, havola bor", "Faqat his-hayajon, \"ishon\" deyilgan"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "ikonka",
      "sarlavha": "Raqamli savodxonlik nima?",
      "tushuntirish": "Bu &mdash; kompyuterni yoqa olish emas, balki <b>internetda to'g'ri va xavfsiz yashash</b> ko'nikmasi.",
      "elementlar": [
        {
          "belgi": "🔍",
          "nom": "Ma'lumot topish",
          "izoh": "Kerakli narsani tez qidirib topish"
        },
        {
          "belgi": "✅",
          "nom": "Tekshirish",
          "izoh": "Ma'lumot rostmi yoki yolg'on"
        },
        {
          "belgi": "🔐",
          "nom": "Himoyalanish",
          "izoh": "Parol va shaxsiy ma'lumot xavfsizligi"
        },
        {
          "belgi": "💬",
          "nom": "Muloqot madaniyati",
          "izoh": "Hurmat bilan yozish"
        },
        {
          "belgi": "⚖️",
          "nom": "Mualliflik huquqi",
          "izoh": "Birovning ishini o'zlashtirmaslik"
        },
        {
          "belgi": "⏰",
          "nom": "Vaqtni boshqarish",
          "izoh": "Ekran vaqtini me'yorda tutish"
        }
      ],
      "izoh": "Raqamli savodxon odam internetdan <b>foyda oladi</b>, lekin zarar ko'rmaydi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Oflayn va onlayn madaniyat",
      "tushuntirish": "Aslida qoidalar bir xil &mdash; faqat muhit boshqa. Internetda ham xuddi ko'chadagi kabi o'zini tutish kerak.",
      "ustunlar": [
        {
          "belgi": "🏫",
          "sarlavha": "Oflayn (hayotda)",
          "turi": "brand",
          "royxat": [
            "Salomlashamiz va minnatdorchilik aytamiz",
            "Gapni bo'lmaymiz, tinglaymiz",
            "Birovning narsasini ruxsatsiz olmaymiz",
            "Yolg'on gap tarqatmaymiz"
          ]
        },
        {
          "belgi": "🌐",
          "sarlavha": "Onlayn (internetda)",
          "turi": "yaxshi",
          "royxat": [
            "Xat va izohni salomlashuvdan boshlaymiz",
            "Boshqaning fikrini hurmat qilamiz",
            "Birovning rasmini ruxsatsiz joylamaymiz",
            "Tekshirmasdan xabar tarqatmaymiz"
          ]
        }
      ],
      "izoh": "Onlayn muloqotda <b>ovoz ohangi eshitilmaydi</b> &mdash; shuning uchun yozganingizni qayta o'qib chiqing."
    },
    {
      "tur": "sxema",
      "sarlavha": "Raqamli iz qanday qoladi?",
      "tushuntirish": "Internetda qilgan har bir ishingiz <b>iz</b> qoldiradi. Uni \"raqamli iz\" (digital footprint) deyiladi.",
      "svg": "<svg viewBox=\"0 0 700 310\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Raqamli iz sxemasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"308\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx8a\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/></marker>\n  </defs>\n  <rect x=\"24\" y=\"98\" width=\"150\" height=\"106\" rx=\"12\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"99\" y=\"134\" fill=\"#e6ecff\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">SIZ</text>\n  <text x=\"99\" y=\"156\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">telefon, kompyuter</text>\n  <text x=\"99\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">qidiruv, layk, izoh</text>\n  <rect x=\"210\" y=\"98\" width=\"150\" height=\"106\" rx=\"12\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"285\" y=\"134\" fill=\"#e6ecff\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">INTERNET</text>\n  <text x=\"285\" y=\"156\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">provayder, router</text>\n  <text x=\"285\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">har bir so'rov o'tadi</text>\n  <rect x=\"396\" y=\"98\" width=\"150\" height=\"106\" rx=\"12\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"471\" y=\"134\" fill=\"#e6ecff\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">SERVERLAR</text>\n  <text x=\"471\" y=\"156\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">sayt va xizmatlar</text>\n  <text x=\"471\" y=\"178\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">tarixni saqlaydi</text>\n  <rect x=\"578\" y=\"98\" width=\"98\" height=\"106\" rx=\"12\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2\"/>\n  <text x=\"627\" y=\"140\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">IZ</text>\n  <text x=\"627\" y=\"162\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">yillar</text>\n  <text x=\"627\" y=\"180\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">davomida</text>\n  <line x1=\"178\" y1=\"151\" x2=\"204\" y2=\"151\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx8a)\"/>\n  <line x1=\"364\" y1=\"151\" x2=\"390\" y2=\"151\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx8a)\"/>\n  <line x1=\"550\" y1=\"151\" x2=\"572\" y2=\"151\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx8a)\"/>\n  <text x=\"350\" y=\"46\" fill=\"#93a0bd\" font-size=\"12.5\" text-anchor=\"middle\">Qidiruv tarixi &bull; layklar &bull; izohlar &bull; joylashuv &bull; xaridlar &bull; yuklangan rasmlar</text>\n  <text x=\"350\" y=\"240\" fill=\"#ffb020\" font-size=\"12.5\" text-anchor=\"middle\">O'chirilgan post ham serverdagi nusxada qolishi mumkin.</text>\n  <text x=\"350\" y=\"264\" fill=\"#22d3a6\" font-size=\"12.5\" text-anchor=\"middle\">Shuning uchun internetga yozishdan oldin &mdash; o'ylash kerak.</text>\n  <text x=\"350\" y=\"288\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Yaxshi iz: foydali loyihalar, yaxshi izohlar. Yomon iz: haqorat, yolg'on xabar.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Internet ochiq qolmasligi kerak bo'lgan ma'lumotlar",
      "tushuntirish": "Bu ma'lumotlar ochiq joyda yozilsa, undan zararli odamlar foydalanishi mumkin.",
      "elementlar": [
        {
          "belgi": "🏠",
          "nom": "Uy manzili",
          "izoh": "Qaysi uyda, qaysi xonada yashayotganingiz"
        },
        {
          "belgi": "📞",
          "nom": "Telefon raqami",
          "izoh": "Ochiq joyga butun raqamni yozmaslik"
        },
        {
          "belgi": "🏫",
          "nom": "Maktab va sinf",
          "izoh": "Bolaning qayerda o'qishini hamma bilmasin"
        },
        {
          "belgi": "📅",
          "nom": "Tug'ilgan sana",
          "izoh": "Ko'p parollarni tiklashda ishlatiladi"
        },
        {
          "belgi": "🔑",
          "nom": "Parollar",
          "izoh": "Hech kimga, hech qachon"
        },
        {
          "belgi": "💳",
          "nom": "Karta raqami va kod",
          "izoh": "Ota-onangizga ham aytib bo'lmaydi (ular biladi)"
        },
        {
          "belgi": "🖼️",
          "nom": "Shaxsiy rasmlar",
          "izoh": "Uy ichi, hujjat rasmi, oila a'zolari"
        }
      ],
      "izoh": "Qoida: <b>ochiq joyga yozsangiz &mdash; hamma biladi deb hisoblang</b>."
    },
    {
      "tur": "qadam",
      "sarlavha": "Ma'lumotni tekshirishning 5 qadami",
      "tushuntirish": "Har qanday xabar yoki rasmni tarqatishdan oldin shu besh savolga javob bering.",
      "elementlar": [
        {
          "nom": "Muallif kim?",
          "izoh": "Sayt yoki kanal nomi ko'rsatilganmi?"
        },
        {
          "nom": "Manba bormi?",
          "izoh": "Xabar qayerdan olingan? Havola bormi?"
        },
        {
          "nom": "Boshqa joyda bormi?",
          "izoh": "2-3 ta ishonchli saytda ham shu xabar bormi?"
        },
        {
          "nom": "Sana qachon?",
          "izoh": "Eski xabar qayta tarqatilayaptimi?"
        },
        {
          "nom": "Nega yuborilgan?",
          "izoh": "Shoshirish, qo'rqitish yoki reklama bormi?"
        }
      ],
      "izoh": "Agar bu savollarga javob topilmasa &mdash; <b>tarqatmaslik</b> eng to'g'ri qaror."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Ishonchli va shubhali yangilik",
      "tushuntirish": "Yangilikning tashqi ko'rinishi o'xshash, lekin belgilari boshqa.",
      "ustunlar": [
        {
          "belgi": "✅",
          "sarlavha": "Ishonchli manba",
          "turi": "yaxshi",
          "royxat": [
            "Manba va muallif ko'rsatilgan",
            "Sana aniq yozilgan",
            "Xabar bir necha saytda takrorlangan",
            "Sarlavha xabar mazmuniga mos"
          ]
        },
        {
          "belgi": "⚠️",
          "sarlavha": "Shubhali manba",
          "turi": "yomon",
          "royxat": [
            "Muallif noma'lum",
            "Sana yo'q yoki \"kecha\" deb yozilgan",
            "Faqat bitta kanalda bor",
            "Sarlavha hayratga soladi, matn esa bo'sh"
          ]
        }
      ],
      "izoh": "Sarlavha (title) mazmunni buzib ko'rsatsa &mdash; bu <b>clickbait</b> deyiladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Feyk yangilikni aniqlash",
      "tushuntirish": "Feyk yangilik emotsiyaga bosadi: qo'rqitadi, g'azablantiradi yoki xursand qiladi. Aynan shu payt tekshirish kerak.",
      "elementlar": [
        {
          "nom": "Sarlavhaga ishonmaslik",
          "izoh": "Sarlavha qichqirsa &mdash; matnni o'qish"
        },
        {
          "nom": "Rasmni tekshirish",
          "izoh": "Rasm boshqa xabardan olingan bo'lishi mumkin"
        },
        {
          "nom": "Manbani qidirish",
          "izoh": "Asl xabar qayerda chiqqan?"
        },
        {
          "nom": "Sana va joyni tekshirish",
          "izoh": "Hodisa rostdan shu payt shu yerda bo'lganmi?"
        },
        {
          "nom": "Rasmiy saytga kirish",
          "izoh": "Hukumat yoki tashkilot sahifasida bormi?"
        },
        {
          "nom": "Ulashmaslik",
          "izoh": "Shubha bo'lsa &mdash; tarqatmaslik"
        }
      ]
    },
    {
      "tur": "oyna",
      "sarlavha": "Ijtimoiy tarmoq profili va maxfiylik",
      "tushuntirish": "Profilingizni kim ko'rishini o'zingiz belgilaysiz. Sozlamalarni tekshirib chiqish foydali.",
      "oyna": {
        "nom": "Maxfiylik sozlamalari",
        "manzil": "Profil  |  Maxfiylik  |  Xavfsizlik  |  Bildirishnomalar",
        "ustunlar": [
          "Sozlama",
          "Hozirgi holat",
          "Tavsiya"
        ],
        "qatorlar": [
          [
            "👥 Profilni kim ko'radi",
            "Hamma",
            "Faqat do'stlar"
          ],
          [
            "📞 Telefon raqami",
            "Ko'rinadi",
            "Yashirish"
          ],
          [
            "📍 Joylashuv belgisi",
            "Yoqilgan",
            "O'chirish"
          ],
          [
            "📷 Rasm yuklash",
            "Hamma",
            "Faqat do'stlar"
          ],
          [
            "💬 Izohlar",
            "Hamma yozadi",
            "Faqat do'stlar"
          ],
          [
            "🔍 Profil qidiruvda",
            "Topiladi",
            "Telefon orqali topilmasin"
          ]
        ]
      },
      "izoh": "Eng xavfli sozlama &mdash; <b>joylashuv</b>: u sizning qayerda ekaningizni real vaqtda ko'rsatadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Mualliflik huquqi: nima mumkin, nima mumkin emas",
      "tushuntirish": "Internetdagi hamma narsa \"bepul\" degani emas. Birovning ishi &mdash; birovning mehnati.",
      "elementlar": [
        {
          "belgi": "✅",
          "nom": "Ruxsat bilan ishlatish",
          "izoh": "Muallifdan so'rab yoki litsenziya bo'lsa"
        },
        {
          "belgi": "✅",
          "nom": "Manbani ko'rsatish",
          "izoh": "Muallif ismi va havola yoziladi"
        },
        {
          "belgi": "✅",
          "nom": "Bepul rasm saytlari",
          "izoh": "\"Free for use\" deb belgilangan saytlar"
        },
        {
          "belgi": "❌",
          "nom": "O'z nomingizga olish",
          "izoh": "Birovning ishini o'zingizniki deb ko'rsatish &mdash; plagiat"
        },
        {
          "belgi": "❌",
          "nom": "Sotib olish uchun ko'chirish",
          "izoh": "Boshqa sayt materialini o'g'irlash"
        },
        {
          "belgi": "❌",
          "nom": "Kalitni buzish (crack)",
          "izoh": "Pulli dasturni bepul ishlatishga urinish"
        }
      ],
      "izoh": "Maktab ishlarida <b>manba ko'rsatish</b> &mdash; majburiy qoida, aks holda ish qabul qilinmaydi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Ekran vaqti salomatlikka qanday ta'sir qiladi?",
      "tushuntirish": "Telefon va kompyuter zararli emas &mdash; <b>cheksiz</b> foydalanish zararli.",
      "elementlar": [
        {
          "belgi": "👁️",
          "nom": "Ko'z charchashi",
          "izoh": "Uzoq qarashda ko'z quriydi, og'riydi"
        },
        {
          "belgi": "🦴",
          "nom": "Bo'yin va bel og'rig'i",
          "izoh": "Egilib o'tirish umurtqaga zarar"
        },
        {
          "belgi": "😴",
          "nom": "Uyqu buzilishi",
          "izoh": "Yotishdan oldin ekran uyquni kechiktiradi"
        },
        {
          "belgi": "🧠",
          "nom": "Diqqat pasayishi",
          "izoh": "Doimiy bildirishnoma diqqatni bo'ladi"
        },
        {
          "belgi": "😔",
          "nom": "Kayfiyat",
          "izoh": "Ijtimoiy tarmoqdagi taqqoslash tushkunlik beradi"
        },
        {
          "belgi": "🏃",
          "nom": "Harakat kamayishi",
          "izoh": "Jismoniy faollik o'rnini ekran egallaydi"
        }
      ],
      "izoh": "<b>20-20-20</b> qoidasi: har 20 daqiqada, 20 soniya, 20 fut (6 metr) uzoqqa qarash."
    },
    {
      "tur": "oyna",
      "sarlavha": "Ekran vaqti hisoboti",
      "tushuntirish": "Telefon va kompyuterda \"Ekran vaqti\" bo'limi bor &mdash; u qancha vaqt sarflaganini ko'rsatadi.",
      "oyna": {
        "nom": "Ekran vaqti — shu hafta",
        "manzil": "Bugun  |  Hafta  |  Ilovalar  |  Cheklovlar",
        "ustunlar": [
          "Ilova turi",
          "Vaqt",
          "Bahosi"
        ],
        "qatorlar": [
          [
            "📚 O'quv dasturlari",
            "1 soat 20 daq",
            "🟢 Foydali"
          ],
          [
            "💬 Muloqot",
            "48 daqiqa",
            "🟡 Me'yorda"
          ],
          [
            "🎮 O'yinlar",
            "2 soat 15 daq",
            "🔴 Ko'p"
          ],
          [
            "🎬 Video",
            "1 soat 40 daq",
            "🟡 Me'yorda"
          ],
          [
            "📊 Jami",
            "6 soat 03 daq",
            "🔴 Kamaytirish kerak"
          ]
        ]
      },
      "izoh": "Maqsad: o'yin va video uchun <b>kuniga 1 soatdan</b> oshmaslik. Qolgan vaqt &mdash; o'qish va jismoniy faollik."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Sog'lom va nosog'lom raqamli odat",
      "tushuntirish": "Farq katta emas &mdash; lekin natijasi butunlay boshqa.",
      "ustunlar": [
        {
          "belgi": "✅",
          "sarlavha": "Sog'lom odat",
          "turi": "yaxshi",
          "royxat": [
            "Ekran vaqtini rejalashtirish",
            "Ish tugagach kompyuterni o'chirish",
            "Har 30 daqiqada tanaffus",
            "Bildirishnomalarni o'chirish"
          ]
        },
        {
          "belgi": "❌",
          "sarlavha": "Nosog'lom odat",
          "turi": "yomon",
          "royxat": [
            "Yotishdan oldin telefon ko'rish",
            "Ovqat paytida ekranga qarash",
            "Har daqiqada yangi xabarni tekshirish",
            "Tunda o'ynab uxlashni buzish"
          ]
        }
      ],
      "izoh": "Eng ko'p zarar &mdash; <b>uyqudan oldingi</b> 1 soatda ekranga qarashdan keladi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Internetda muloqot qoidalari",
      "tushuntirish": "Yozma muloqotda ohang eshitilmaydi &mdash; shuning uchun qoidalar yanada muhim.",
      "elementlar": [
        {
          "belgi": "🙋",
          "nom": "Salomlashish",
          "izoh": "Suhbatni salomlashuvdan boshlash"
        },
        {
          "belgi": "🔤",
          "nom": "Katta harflar",
          "izoh": "BUTUN MATNNI KATTA HARFDA yozmaslik"
        },
        {
          "belgi": "⏳",
          "nom": "Sabr",
          "izoh": "Darhol javob talab qilmaslik"
        },
        {
          "belgi": "🙏",
          "nom": "Minnatdorchilik",
          "izoh": "Yordam berganga \"rahmat\" aytish"
        },
        {
          "belgi": "🧠",
          "nom": "O'ylab yozish",
          "izoh": "Emotsiyada javob yozmaslik"
        },
        {
          "belgi": "🚫",
          "nom": "Haqorat qilmaslik",
          "izoh": "Bu &mdash; bullying, jiddiy oqibati bor"
        }
      ],
      "izoh": "<b>Bullying</b> (internetda kamsitish) &mdash; eng ko'p uchraydigan jiddiy muammo. U haqida jim turmaslik kerak."
    },
    {
      "tur": "qadam",
      "sarlavha": "Internetda nizoli vaziyatda nima qilish kerak?",
      "tushuntirish": "Kimdir internetda haqorat qilsa yoki qo'rqitsa &mdash; bu sizning aybingiz emas. To'g'ri harakat qilish muhim.",
      "elementlar": [
        {
          "nom": "Javob yozmaslik",
          "izoh": "Emotsiyada javob vaziyatni yomonlashtiradi"
        },
        {
          "nom": "Skrinshot olish",
          "izoh": "Dalil bo'lishi uchun xabarlarni saqlab qo'yish"
        },
        {
          "nom": "Bloklash va shikoyat",
          "izoh": "\"Blok\" va \"Shikoyat qilish\" tugmalari"
        },
        {
          "nom": "Kattalarga aytish",
          "izoh": "Ota-ona, o'qituvchi yoki ishonchli insonga aytish"
        },
        {
          "nom": "Xavf bo'lsa &mdash; huquqni himoya qiluvchi organ",
          "izoh": "Tahdid bo'lsa, bu jiddiy masala"
        }
      ],
      "izoh": "Jim turish &mdash; yordam bermaydi. Aytish &mdash; eng to'g'ri qadam."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Raqamli madaniyatli inson belgilari",
      "tushuntirish": "Bu belgilar o'zingizda bormi? Birgalikda tekshirib ko'ring.",
      "elementlar": [
        {
          "belgi": "🤔",
          "nom": "Tarqatishdan oldin o'ylaydi",
          "izoh": "Tekshirmagan xabarni ulashmaydi"
        },
        {
          "belgi": "🙂",
          "nom": "Hurmat bilan yozadi",
          "izoh": "Oflaynda ham, onlaynda ham"
        },
        {
          "belgi": "🔐",
          "nom": "Ma'lumotini himoya qiladi",
          "izoh": "Shaxsiy ma'lumotni ochiq yozmaydi"
        },
        {
          "belgi": "📚",
          "nom": "Manbani ko'rsatadi",
          "izoh": "Birovning ishini o'ziniki qilmaydi"
        },
        {
          "belgi": "⏰",
          "nom": "Vaqtini boshqaradi",
          "izoh": "Ekran vaqtini cheklaydi"
        },
        {
          "belgi": "🤝",
          "nom": "Yordam beradi",
          "izoh": "Yangi boshlovchiga sabr bilan tushuntiradi"
        }
      ],
      "izoh": "Qisqasi: <b>internetda ham yaxshi inson bo'lish</b>."
    }
  ],

  amaliy: [
    "Ijtimoiy tarmoq profilingizni ochib, unda qanday shaxsiy ma'lumotlar ko'rinib turganini yozib chiqing.",
    "Profil sozlamalarini <b>\"faqat do'stlar\"</b> ga o'zgartiring.",
    "Telegramda <b>maxfiylik</b> bo'limiga kirib, telefon raqami va oxirgi faollikni kim ko'rishini cheklang.",
    "Qidiruv tarixingizni ochib (Ctrl + H) oxirgi 20 ta so'rovni ko'ring va ularning mavzularini guruhlang.",
    "Sevimli yangiliklar saytingizdan bitta xabar tanlab, 5 mezon bo'yicha tekshiring.",
    "Shu xabarning sarlavhasini qo'shtirnoq ichida Google'da qidirib, nechta manba yozganini aniqlang.",
    "Feyk aniqlashning 5 mezoni (manba, sana, muallif, tasdiq, dalil) bo'yicha o'zingiz topgan 3 ta xabarni tahlil qiling.",
  ],

  uyga: [
    {
      "savol": "Raqamli savodxonlik nima? Kamida 4 ta ko'nikmasini yozing.",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<p><b>Raqamli savodxonlik</b> &mdash; internet va raqamli qurilmalardan to'g'ri, xavfsiz va madaniyatli foydalanish ko'nikmasi.</p><ol><li>Kerakli ma'lumotni <b>topish</b> va <b>tekshirish</b>;</li><li>Shaxsiy ma'lumotni <b>himoya qilish</b>;</li><li>Muloqot <b>madaniyati</b> (hurmat, to'g'ri yozish);</li><li><b>Mualliflik huquqi</b>ga rioya qilish, manba ko'rsatish;</li><li><b>Ekran vaqtini</b> boshqarish.</li></ol>"
    },
    {
      "savol": "\"Raqamli iz\" (digital footprint) nima? 5 ta misol keltiring.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<p><b>Raqamli iz</b> &mdash; internetda qilgan harakatlaringizdan qoladigan ma'lumotlar to'plami.</p><ol><li>Qidiruv tarixi (nima qidirganingiz);</li><li>Layklar, izohlar va ulashilgan postlar;</li><li>Yuklangan rasm va videolar;</li><li>Joylashuv belgilari (qayerda bo'lganingiz);</li><li>Onlayn xaridlar va ro'yxatdan o'tish ma'lumotlari.</li></ol><p>Muhim: o'chirilgan post ham serverdagi nusxada <b>qolishi mumkin</b>.</p>"
    },
    {
      "savol": "Internetda ochiq yozilmasligi kerak bo'lgan 6 ta ma'lumotni sanang va sababini ayting.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Ma'lumot</th><th>Nega xavfli</th></tr></thead><tbody><tr><td>Uy manzili</td><td>Kim qayerda yashashini bilmasligi kerak</td></tr><tr><td>Telefon raqami</td><td>Spam va aldash qo'ng'iroqlari boshlanadi</td></tr><tr><td>Maktab va sinf</td><td>Bolani ko'chada topish osonlashadi</td></tr><tr><td>Tug'ilgan sana</td><td>Parol tiklashda ishlatiladi</td></tr><tr><td>Parollar</td><td>Hisob butunlay qo'lga tushadi</td></tr><tr><td>Karta raqami va SMS kod</td><td>Pul o'g'irlanadi</td></tr></tbody></table><p>Qoida: <b>ochiq joyga yozsangiz &mdash; hamma biladi</b>.</p>"
    },
    {
      "savol": "Oflayn va onlayn muloqot qoidalari bir xilmi? 3 ta misol bilan tushuntiring.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<p>Qoidalar <b>bir xil</b> &mdash; faqat muhit boshqa.</p><table class=\"reja-table\"><thead><tr><th>Oflayn</th><th>Onlayn</th></tr></thead><tbody><tr><td>Salomlashamiz</td><td>Xat va izohni salomlashuvdan boshlaymiz</td></tr><tr><td>Gapni bo'lmaymiz</td><td>Boshqaning fikrini hurmat qilamiz</td></tr><tr><td>Birovning narsasini ruxsatsiz olmaymiz</td><td>Rasm va matnni ruxsatsiz joylamaymiz</td></tr></tbody></table><p>Farqi: onlaynda <b>ovoz ohangi eshitilmaydi</b> &mdash; shuning uchun yozganni qayta o'qish kerak.</p>"
    },
    {
      "savol": "Ma'lumotni tekshirishning 5 qadamini yozing va o'zingiz ko'rgan biror xabarni shu qadamlar bilan tekshiring.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<ol><li>Muallif kim? Sayt yoki kanal nomi ko'rsatilganmi?</li><li>Manba bormi? Asl havola keltirilganmi?</li><li>Boshqa 2-3 ishonchli saytda ham bormi?</li><li>Sana qachon? Eski xabar qayta tarqatilmayaptimi?</li><li>Nega yuborilgan? Shoshirish yoki reklama bormi?</li></ol><p>Namuna: \"...deb yozibdi\" degan xabarni tekshirdim &mdash; muallif yo'q, sana yo'q, boshqa saytlarda uchramadi. Xulosa: <b>tarqatmaslik</b>.</p>"
    },
    {
      "savol": "Ekran vaqtingizni tahlil qiling: bir kun ichida qaysi dasturga qancha vaqt ketganini jadvalga yozing va xulosa chiqaring.",
      "tezlik": "Taxminiy vaqt: 12 daqiqa",
      "javob": "<p>Namuna jadval (raqamlar sizda boshqacha bo'ladi):</p><table class=\"reja-table\"><thead><tr><th>Dastur turi</th><th>Vaqt</th><th>Bahosi</th></tr></thead><tbody><tr><td>O'quv dasturlari</td><td>1 soat 20 daq</td><td>🟢 Foydali</td></tr><tr><td>Muloqot</td><td>48 daqiqa</td><td>🟡 Me'yorda</td></tr><tr><td>O'yinlar</td><td>2 soat 15 daq</td><td>🔴 Ko'p</td></tr><tr><td>Video</td><td>1 soat 40 daq</td><td>🟡 Me'yorda</td></tr><tr><td><b>Jami</b></td><td><b>6 soat 03 daq</b></td><td>🔴 Kamaytirish kerak</td></tr></tbody></table><p>Xulosa: o'yin vaqtini kuniga 1 soatga tushirish, bo'shagan vaqtni jismoniy faollikka berish.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): feyk yangilikning 4 ta belgisini yozing va o'zingiz o'ylab topgan (yoki ko'rgan) misol bilan tushuntiring.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ol><li><b>Qichqiruvchi sarlavha</b> &mdash; \"SHOSHILING!\", \"Hamma hayron!\";</li><li><b>Muallif yo'q</b> &mdash; kim yozgani ko'rsatilmagan;</li><li><b>Rasm boshqa joydan</b> &mdash; eski rasm yangi xabar deb berilgan;</li><li><b>Hissiyotga bosish</b> &mdash; qo'rqitish, g'azablantirish yoki \"yutuq\" va'dasi.</li></ol><p>Misol: \"Bugundan boshlab maktablarda darslar bekor qilinadi\" &mdash; muallif yo'q, sana yo'q, rasmiy manbada tasdiq yo'q. Xulosa: feyk.</p>"
    }
  ],

  test: [
    {
      savol: "Raqamli savodxonlikka <b>kirmaydigan</b> ko'nikma qaysi?",
      variantlar: [
        "Axborot izlash",
        "Axborotni baholash",
        "Ijtimoiy tarmoqda soatlab o'tirish",
        "Xavfsizlik",
      ],
      togri: 2,
      izoh: "Soatlab maqsadsiz o'tirish savodxonlik emas. Savodxonlik &mdash; topish, tekshirish va foydalanish.",
    },
    {
      savol: "Netiket bo'yicha qaysi amal <b>to'g'ri</b>?",
      variantlar: [
        "Xabarni katta harflarda yozish",
        "Fikrga qarshi chiqish, odamga emas",
        "Xatoni hamma oldida masxara qilish",
        "Boshqaning rasmini ruxsatsiz joylash",
      ],
      togri: 1,
      izoh: "Netiket &mdash; odob: fikrga e'tiroz bildiriladi, shaxsga emas.",
    },
    {
      savol: "Qaysi biri <b>passiv</b> raqamli iz hisoblanadi?",
      variantlar: [
        "Instagramga joylagan rasmim",
        "Guruhga yozgan izohim",
        "Qidiruv tarixim",
        "YouTube'ga joylagan videom",
      ],
      togri: 2,
      izoh: "Passiv iz &mdash; sezmagan holda yig'iladigan ma'lumot: qidiruv tarixi, joylashuv, cookie.",
    },
    {
      savol: "Feyk ma'lumotning eng aniq belgisi qaysi?",
      variantlar: [
        "Rasmiy saytda chop etilgan",
        "\"SHOSHILINCH!!! Buni hech kim aytmaydi!\" sarlavhasi",
        "Aniq sana va muallif bor",
        "2-3 manba tasdiqlagan",
      ],
      togri: 1,
      izoh: "Hayajonli so'zlar, ko'p undov belgilari va \"hech kim aytmaydi\" iborasi &mdash; feykning klassik belgisi.",
    },
    {
      savol: "Shaxsiy ma'lumotlardan qaysi biri ochiq joyda qoldirilsa <b>eng xavfli</b>?",
      variantlar: ["Ism", "Maktab nomi", "Bank karta raqami", "Sevimli rang"],
      togri: 2,
      izoh: "Bank karta ma'lumotlari &mdash; pul o'g'irlash xavfi tufayli eng yuqori darajadagi maxfiy ma'lumot.",
    },
    {
      savol: "O'chirilgan post keyinchalik qanday qaytishi mumkin?",
      variantlar: [
        "Hech qachon qaytmaydi",
        "Boshqalar ekran suratini olgan yoki arxiv sayti saqlab qolgan bo'lishi mumkin",
        "Faqat kompyuterda ko'rinadi",
        "Faqat Telegramda qoladi",
      ],
      togri: 1,
      izoh: "Shuning uchun \"o'chirish\" ko'pincha \"siz uchun o'chirish\" demakdir. Eng yaxshi himoya &mdash; boshidan yozmaslik.",
    },
  ],

  lugat: [
    { soz: "Raqamli savodxonlik", izoh: "Raqamli texnologiyalardan samarali va xavfsiz foydalanish qobiliyati." },
    { soz: "Netiket", izoh: "Internetda muloqot qilish odobi." },
    { soz: "Raqamli iz", izoh: "Internetda qoldirilgan har qanday ma'lumot (digital footprint)." },
    { soz: "Faol iz", izoh: "Foydalanuvchi o'zi qoldirgan ma'lumot: post, izoh, rasm." },
    { soz: "Passiv iz", izoh: "Avtomatik yig'iladigan ma'lumot: qidiruv tarixi, joylashuv, cookie." },
    { soz: "Cookie", izoh: "Sayt brauzerga saqlaydigan kichik ma'lumot fayli." },
    { soz: "Doxxing", izoh: "Boshqa odamning shaxsiy ma'lumotlarini ruxsatsiz e'lon qilish." },
    { soz: "Feyk", izoh: "Yolg'on, asossiz ma'lumot yoki yangilik." },
    { soz: "Geolokatsiya", izoh: "Foydalanuvchining joylashuvini aniqlash." },
    { soz: "Teskari qidiruv", izoh: "Matn yoki rasmni qo'shtirnoq bilan qidirib, manbani topish usuli." },
  ],

  xatolar: [
    "Internetda o'zingiz haqingizda hamma narsani ochiq yozish.",
    "Katta harflarda yozib, boshqalarni bezovta qilish.",
    "Xatoni hamma ko'radigan joyda masxara qilish.",
    "Boshqalarning rasmlarini ruxsatsiz joylash.",
    "Birorta manbaga ishonib, ma'lumotni tekshirmasdan tarqatish.",
    "Hayajonli sarlavhaga darhol ishonish (\"SHOSHILINCH!\", \"100%\").",
    "Shaxsiy ma'lumotlarni o'ylamasdan profilga to'ldirish.",
    "O'chirilgan xabar butunlay yo'qoladi deb o'ylash.",
  ],

  keyingi:
    "Keyingi darsda <b>raqamli transformatsiya</b> tushunchasini o'rganamiz: uning mohiyati, ta'lim, biznes va davlat xizmatlaridagi o'rni, onlayn xizmatlar va avtomatlashtirish, elektron hujjat aylanishi. Bugungi bilimlar &mdash; bu mavzuning asosi.",
});
