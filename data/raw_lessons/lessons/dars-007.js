/* 7-dars: Klaviaturada tez va to'g'ri yozish ko'nikmalari */

AVX.dars({
  id: "cs8-007",
  sarlavha: "Klaviaturada tez va to'g'ri yozish ko'nikmalari",
  kiritish:
    "Dasturchining ish vaqtining katta qismi klaviatura bilan o'tadi. Bugun biz <b>klaviatura tuzilishini</b> o'rganamiz, to'g'ri o'tirish holatini va barmoqlar joylashuvini bilib olamiz, <b>10 barmoqda (touch typing)</b> yozishni boshlaymiz va yozish tezligini o'lchashni o'rganamiz.",

  maqsad: [
    "Klaviatura tugmalari guruhlarini ajratish: funksiya, raqam, harf, boshqaruv.",
    "To'g'ri o'tirish holatini va qo'l holatini egallash.",
    "Touch typing (10 barmoqda yozish) usulini tushunish.",
    "Yozish tezligi va aniqligini o'lchash: WPM, CPM, xato foizi.",
    "Matn terishda tezkor tugmalar va xatolarni tuzatishni o'rganish.",
  ],

  natija: [
    "Klaviaturani ko'rmasdan asosiy qatorni topadi.",
    "Daqiqada kamida 20-25 so'z terishga erishadi.",
    "Xato foizini 5% dan pastga tushirishga harakat qiladi.",
    "Matn terish tezligini o'lchovchi dasturni yozadi.",
    "Noto'g'ri o'tirish holatining zararini tushuntiradi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: zararli dasturlar turlari, 2FA."],
    ["5-15 daq", "Mentor tushuntirishi", "\"Nega tez yozish kerak?\" &mdash; vaqt hisobi misolida."],
    ["15-27 daq", "Klaviatura tuzilishi", "Tugma guruhlari, funksiya tugmalari, barmoqlar joylashuvi."],
    ["27-40 daq", "To'g'ri o'tirish va 10 barmoq usuli", "Holat, barmoq mas'uliyati, asosiy qator."],
    ["40-58 daq", "Amaliyot: o'lchash dasturi", "HTML trenajyor, JS WPM kalkulyatori, Python statistikasi."],
    ["58-72 daq", "Mashq", "5 daqiqalik yozish mashqi, natijalarni solishtirish."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har kim o'z natijasini daftarga yozadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Nega tez yozish kerak?",
      matn: [
        "Oddiy hisob-kitob qilamiz. Agar siz daqiqada 20 so'z tersangiz, bir betlik matn (taxminan 500 so'z) uchun <em>25 daqiqa</em> ketadi. Daqiqada 60 so'z tersangiz &mdash; <b>8 daqiqa</b>. Dasturchi uchun bu farq kuniga soatlab vaqt degani.",
        "Xalqaro tadqiqotlarda ko'rsatilgan: klaviaturani ko'rmasdan yozadigan dasturchining umumiy ish unumdorligi <em>30-40% yuqori</em> bo'ladi. Sababi oddiy &mdash; siz ekranga qarab o'ylaysiz, barmoqlar esa o'zi yozadi.",
        "Bugungi maqsad &mdash; shu yo'ldagi birinchi qadam: to'g'ri o'tirishni, barmoqlarni to'g'ri qo'yishni o'rganish va tezligini <b>o'lchashni</b> bilish. O'lchamagan narsani yaxshilab bo'lmaydi.",
      ],
    },
    {
      sarlavha: "2. Klaviatura tuzilishi",
      matn: [
        "Klaviaturani beshta guruhga bo'lamiz. <b>Funksiya tugmalari</b> (F1&ndash;F12) &mdash; yuqori qatorda, har biri o'z vazifasiga ega. <b>Raqamlar qatori</b> &mdash; 1 dan 0 gacha va belgilar. <b>Harf qatori</b> &mdash; asosiy ish maydoni. <b>Boshqaruv tugmalari</b> &mdash; Enter, Shift, Ctrl, Alt, Space, Backspace, Tab, Caps Lock.",
        "O'ng tomondagi <b>raqamli blok (Numpad)</b> &mdash; buxgalterlar va ko'p son kiritadiganlar uchun. Va alohida <b>navigatsiya bloki</b> &mdash; o'qlar, Home, End, Page Up, Page Down, Delete.",
        "Bugun alohida ajratib aytadigan tugma &mdash; <b>Caps Lock</b>. Bu \"barcha harflar katta\" rejimini yoqadi. Dasturchilar uni deyarli ishlatmaydi, chunki katta harfni <em>Shift</em> bilan yozish tezroq.",
      ],
    },
    {
      sarlavha: "3. To'g'ri o'tirish &mdash; sog'liq masalasi",
      matn: [
        "Noto'g'ri o'tirish nafaqat tezlikni pasaytiradi, balki <em>bo'yin, yelka va bilak</em> og'riqlariga olib keladi. Bu &mdash; bir kunda sezilmaydigan, lekin yillar davomida yig'iladigan zarar.",
        "To'g'ri holat: orqa to'g'ri, stul suyanchig'iga tegib turadi. Tirsak taxminan 90 daraja burchakda. Bilak havoda emas, stol ustida. Ko'z ekrandan 50&ndash;70 sm uzoqlikda, ekranning yuqori qismi ko'z sathida.",
        "Oyoqlar yerga to'liq tegib turadi. Har 30&ndash;40 daqiqada 2&ndash;3 daqiqa turib, yelkani aylantirib olish kerak. Va eng muhimi: <em>klaviaturani ko'rmaslikka harakat qiling</em>. Ko'zdan qaramasangiz, barmoqlar o'z joyini yodlaydi.",
      ],
    },
    {
      sarlavha: "4. 10 barmoq usuli &mdash; qaysi barmoq qaysi tugmaga",
      matn: [
        "Asosiy qator &mdash; <code>A S D F</code> va <code>J K L ;</code>. Chap qo'lning ko'rsatkich barmog'i <b>F</b> da, o'ng qo'lniki <b>J</b> da turadi. Diqqat qiling: bu ikki tugmada <em>kichik bo'rtiq</em> bor &mdash; barmoqni ko'rmasdan joyini topish uchun.",
        "Har bir barmoqning o'z hududi bor. Chap qo'l: kichik barmoq &mdash; A, Q, Z, 1; nomsiz &mdash; S, W, X, 2; o'rta &mdash; D, E, C, 3; ko'rsatkich &mdash; F, G, R, T, V, B, 4, 5. O'ng qo'l shu tartibda oynaga o'xshab takrorlanadi.",
        "Bosh barmoqlar faqat <b>Space</b> tugmasini bosadi. Bu &mdash; eng ko'p ishlatiladigan tugma, uni ham bir barmoqqa yuklash xato bo'ladi. Shuning uchun chap va o'ng bosh barmoq navbatma-navbat bosadi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Klaviatura tugmalari guruhlari",
      matn: [
        "Klaviatura tugmalari vazifasiga qarab guruhlarga bo'linadi.",
      ],
      jadval: [
        ["Guruh", "Tugmalar", "Vazifasi"],
        ["Funksiya", "F1 - F12", "Dastur bo'yicha maxsus amallar"],
        ["Raqamlar", "1 2 3 4 5 6 7 8 9 0", "Son va belgilar kiritish (!, @, #, $)"],
        ["Harflar", "A - Z", "Matn kiritish"],
        ["Boshqaruv", "Enter, Shift, Ctrl, Alt, Tab, Space, Backspace", "Yozishni boshqarish"],
        ["Navigatsiya", "↑ ↓ ← →, Home, End, Page Up/Down, Delete", "Kursorni boshqarish"],
        ["Raqamli blok", "Numpad (0-9, + - * /)", "Tez son kiritish"],
        ["Holat", "Caps Lock, Num Lock, Scroll Lock", "Rejimni yoqish/o'chirish"],
      ],
    },
    {
      sarlavha: "2. Barmoqlar joylashuvi (ma'lumotnoma)",
      matn: [
        "Quyidagi jadvalni yodlab olsangiz, ko'rmasdan yozishning asosi tayyor bo'ladi.",
      ],
      jadval: [
        ["Barmoq", "Chap qo'l", "O'ng qo'l"],
        ["Kichik barmoq (pinky)", "Q, A, Z, 1", "P, ;, /, 0"],
        ["Nomsiz barmoq", "W, S, X, 2", "O, L, ., 9"],
        ["O'rta barmoq", "E, D, C, 3", "I, K, ,, 8"],
        ["Ko'rsatkich barmoq", "R, F, V, T, G, B, 4, 5", "U, J, M, Y, H, N, 6, 7"],
        ["Bosh barmoq", "Space (navbatma-navbat)", "Space (navbatma-navbat)"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Kichik sir",
        matn: "Har qanday uzun yozishdan keyin barmoqlar <b>asosiy qatorga</b> (A S D F &mdash; J K L ;) qaytishi kerak. Bu &mdash; \"uy holati\". Barmoqlar uyga qaytsa, keyingi tugmani topish osonlashadi.",
      },
    },
    {
      sarlavha: "3. Yozish tezligini o'lchash birliklari",
      matn: [
        "Tezlikni o'lchashning bir necha usuli bor. Eng ko'p ishlatiladigani &mdash; WPM.",
      ],
      jadval: [
        ["Birlik", "To'liq nomi", "Nimani o'lchaydi"],
        ["WPM", "Words Per Minute", "Daqiqada yozilgan so'zlar soni"],
        ["CPM", "Characters Per Minute", "Daqiqada yozilgan belgilar soni"],
        ["Xato foizi", "Accuracy", "Noto'g'ri yozilgan belgilar ulushi"],
        ["Net WPM", "Net Words Per Minute", "Xatolar hisobga olingan haqiqiy tezlik"],
      ],
      jadval2: [
        ["Daraja", "WPM", "Izoh"],
        ["Boshlovchi", "10-25", "Klaviaturani ko'rib yozadi"],
        ["O'rtacha", "26-40", "Ko'rmasdan yozishni boshlagan"],
        ["Yaxshi", "41-60", "Professional daraja"],
        ["A'lo", "61-90", "Tajribali dasturchi"],
        ["Super", "90+", "Stenografiya darajasi"],
      ],
    },
    {
      sarlavha: "4. Xatolarni tuzatish: oltin qoida",
      matn: [
        "Yozish paytida xato qildingizmi? <b>Backspace</b> bilan tuzatasiz. Lekin bitta muhim qoida bor:",
      ],
      royhat: [
        "<b>Ko'rmasdan yozishda birinchi maqsad &mdash; tezlik emas, aniqlik.</b>",
        "Xato qilsangiz, klaviaturani ko'rmasdan, faqat ekranga qarab tuzating.",
        "Klapani <b>yengil</b> bosing &mdash; kuch bilan bosish barmoqlarni charchatadi.",
        "Backspace ni kichik barmoq bilan bosishni o'rganing (o'ng qo'l kichik barmog'i).",
        "Uzun matn terayotganda har 5-10 daqiqada qisqa tanaffus qiling.",
      ],
      callout: {
        turi: "warn",
        sarlavha: "Eng ko'p qilinadigan xato",
        matn: "Boshlovchilar tez yozishga urinib, xatolar sonini oshiradi. Aslida <b>sekin, lekin to'g'ri</b> yozish tezroq natija beradi: barmoqlar to'g'ri harakatni yodlaydi va tezlik o'z-o'zidan ortadi.",
      },
    },
  ],

  rasmlar: [
    {
      "tur": "sxema",
      "sarlavha": "Asosiy qator va barmoq zonalari",
      "tushuntirish": "10 barmoq usulining kaliti &mdash; <b>asosiy qator</b>. Barmoqlar doim shu qatorga qaytib turadi.",
      "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Klaviatura asosiy qatori\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <rect x=\"46\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <text x=\"76\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">A</text>\n  <rect x=\"110\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2.5\"/>\n  <text x=\"140\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">S</text>\n  <rect x=\"174\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <text x=\"204\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">D</text>\n  <rect x=\"238\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <text x=\"268\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">F</text>\n  <rect x=\"302\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"332\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">G</text>\n  <rect x=\"366\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"396\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">H</text>\n  <rect x=\"430\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <text x=\"460\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">J</text>\n  <rect x=\"494\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <text x=\"524\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">K</text>\n  <rect x=\"558\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2.5\"/>\n  <text x=\"588\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">L</text>\n  <rect x=\"622\" y=\"64\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <text x=\"652\" y=\"102\" fill=\"#e6ecff\" font-size=\"20\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">;</text>\n  <line x1=\"256\" y1=\"124\" x2=\"280\" y2=\"124\" stroke=\"#4f8cff\" stroke-width=\"4\"/>\n  <line x1=\"448\" y1=\"124\" x2=\"472\" y2=\"124\" stroke=\"#4f8cff\" stroke-width=\"4\"/>\n  <text x=\"76\" y=\"148\" fill=\"#ffb020\" font-size=\"10.5\" text-anchor=\"middle\">kichik</text>\n  <text x=\"140\" y=\"148\" fill=\"#c58cff\" font-size=\"10.5\" text-anchor=\"middle\">nomsiz</text>\n  <text x=\"204\" y=\"148\" fill=\"#22d3a6\" font-size=\"10.5\" text-anchor=\"middle\">o'rta</text>\n  <text x=\"268\" y=\"148\" fill=\"#4f8cff\" font-size=\"10.5\" text-anchor=\"middle\">ko'rsat.</text>\n  <text x=\"332\" y=\"148\" fill=\"#4f8cff\" font-size=\"10.5\" text-anchor=\"middle\">ko'rsat.</text>\n  <text x=\"396\" y=\"148\" fill=\"#4f8cff\" font-size=\"10.5\" text-anchor=\"middle\">ko'rsat.</text>\n  <text x=\"460\" y=\"148\" fill=\"#4f8cff\" font-size=\"10.5\" text-anchor=\"middle\">ko'rsat.</text>\n  <text x=\"524\" y=\"148\" fill=\"#22d3a6\" font-size=\"10.5\" text-anchor=\"middle\">o'rta</text>\n  <text x=\"588\" y=\"148\" fill=\"#c58cff\" font-size=\"10.5\" text-anchor=\"middle\">nomsiz</text>\n  <text x=\"652\" y=\"148\" fill=\"#ffb020\" font-size=\"10.5\" text-anchor=\"middle\">kichik</text>\n  <text x=\"270\" y=\"188\" fill=\"#4f8cff\" font-size=\"12\" text-anchor=\"middle\">CHAP QO'L</text>\n  <text x=\"470\" y=\"188\" fill=\"#4f8cff\" font-size=\"12\" text-anchor=\"middle\">O'NG QO'L</text>\n  <line x1=\"350\" y1=\"52\" x2=\"350\" y2=\"164\" stroke=\"#26304a\" stroke-width=\"1.5\" stroke-dasharray=\"5 5\"/>\n  <text x=\"350\" y=\"222\" fill=\"#e6ecff\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"700\">F va J tugmalarida do'mboqcha bor</text>\n  <text x=\"350\" y=\"244\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Ko'rsatkich barmoqlar shu do'mboqchalarni paypaslab topadi &mdash;</text>\n  <text x=\"350\" y=\"264\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">klaviaturasiz ham qo'lni to'g'ri qo'yish mumkin.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Qaysi barmoq qaysi tugmani bosadi?",
      "tushuntirish": "Har bir barmoqning o'z ustuni bor. Barmoqlar bir-birining ishiga aralashmaydi.",
      "elementlar": [
        {
          "belgi": "🖐️",
          "nom": "Chap kichik barmoq",
          "izoh": "A  Q  Z  1"
        },
        {
          "belgi": "🖐️",
          "nom": "Chap nomsiz barmoq",
          "izoh": "S  W  X  2"
        },
        {
          "belgi": "🖐️",
          "nom": "Chap o'rta barmoq",
          "izoh": "D  E  C  3"
        },
        {
          "belgi": "☝️",
          "nom": "Chap ko'rsatkich barmoq",
          "izoh": "F  R  V  G  T  B  4  5"
        },
        {
          "belgi": "☝️",
          "nom": "O'ng ko'rsatkich barmoq",
          "izoh": "J  U  M  H  Y  N  6  7"
        },
        {
          "belgi": "🖐️",
          "nom": "O'ng o'rta barmoq",
          "izoh": "K  I  ,  8"
        },
        {
          "belgi": "🖐️",
          "nom": "O'ng nomsiz barmoq",
          "izoh": "L  O  .  9"
        },
        {
          "belgi": "🖐️",
          "nom": "O'ng kichik barmoq",
          "izoh": ";  P  /  0  Enter"
        }
      ],
      "izoh": "Bosh barmoqlar faqat <b>Probel</b> (Space) tugmasini bosadi."
    },
    {
      "tur": "sxema",
      "sarlavha": "To'g'ri o'tirish qoidasi",
      "tushuntirish": "Noto'g'ri o'tirish &mdash; tez charchash, bel og'rig'i va sekin yozishning asosiy sababi.",
      "svg": "<svg viewBox=\"0 0 700 340\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Togri otirish qoidasi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"338\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <line x1=\"40\" y1=\"250\" x2=\"660\" y2=\"250\" stroke=\"#26304a\" stroke-width=\"3\"/>\n  <rect x=\"470\" y=\"96\" width=\"150\" height=\"96\" rx=\"8\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <rect x=\"520\" y=\"192\" width=\"26\" height=\"30\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <rect x=\"486\" y=\"222\" width=\"94\" height=\"10\" rx=\"4\" fill=\"#1b2334\" stroke=\"#4f8cff\"/>\n  <text x=\"545\" y=\"146\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">MONITOR</text>\n  <circle cx=\"196\" cy=\"112\" r=\"22\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <line x1=\"196\" y1=\"134\" x2=\"196\" y2=\"196\" stroke=\"#22d3a6\" stroke-width=\"3\"/>\n  <line x1=\"196\" y1=\"152\" x2=\"316\" y2=\"176\" stroke=\"#22d3a6\" stroke-width=\"3\"/>\n  <line x1=\"196\" y1=\"196\" x2=\"256\" y2=\"196\" stroke=\"#22d3a6\" stroke-width=\"3\"/>\n  <line x1=\"256\" y1=\"196\" x2=\"256\" y2=\"248\" stroke=\"#22d3a6\" stroke-width=\"3\"/>\n  <line x1=\"150\" y1=\"120\" x2=\"150\" y2=\"248\" stroke=\"#2b3550\" stroke-width=\"4\"/>\n  <line x1=\"150\" y1=\"216\" x2=\"240\" y2=\"216\" stroke=\"#2b3550\" stroke-width=\"4\"/>\n  <rect x=\"316\" y=\"164\" width=\"60\" height=\"12\" rx=\"4\" fill=\"#1b2334\" stroke=\"#ffb020\"/>\n  <text x=\"346\" y=\"158\" fill=\"#ffb020\" font-size=\"10.5\" text-anchor=\"middle\">klaviatura</text>\n  <line x1=\"356\" y1=\"140\" x2=\"450\" y2=\"140\" stroke=\"#93a0bd\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <text x=\"404\" y=\"132\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">50-70 sm</text>\n  <line x1=\"196\" y1=\"150\" x2=\"262\" y2=\"150\" stroke=\"#c58cff\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/>\n  <text x=\"232\" y=\"142\" fill=\"#c58cff\" font-size=\"11\" text-anchor=\"middle\">90&deg;</text>\n  <text x=\"196\" y=\"82\" fill=\"#22d3a6\" font-size=\"11\" text-anchor=\"middle\">ko'z balandligi</text>\n  <text x=\"350\" y=\"292\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Orqa tik, tirsak 90&deg;, oyoqlar polga tekis, ekran ko'z balandligida</text>\n  <text x=\"350\" y=\"314\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Har 20-30 daqiqada 1-2 daqiqa dam olish va ko'zni uzoqqa qaratish kerak.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "10 barmoq usulining qoidalari",
      "tushuntirish": "Bu qoidalar dastlab sekin tuyuladi, lekin 2-3 haftadan keyin tezlik keskin oshadi.",
      "elementlar": [
        {
          "belgi": "🎯",
          "nom": "Barmoqlar asosiy qatorda",
          "izoh": "A S D F  va  J K L ;"
        },
        {
          "belgi": "👀",
          "nom": "Klaviaturasiz qarash",
          "izoh": "Ko'z ekranga &mdash; barmoqlar tugmani o'zi topadi"
        },
        {
          "belgi": "⬅️",
          "nom": "Har tugmadan keyin qaytish",
          "izoh": "Barmoq o'z uyasiga qaytadi"
        },
        {
          "belgi": "🖐️",
          "nom": "Har barmoq o'z ustunida",
          "izoh": "Boshqa barmoqning tugmasini bosmaslik"
        },
        {
          "belgi": "👍",
          "nom": "Bosh barmoq &mdash; Probel",
          "izoh": "Faqat bo'sh joy uchun"
        },
        {
          "belgi": "🐢",
          "nom": "Avval aniqlik, keyin tezlik",
          "izoh": "Xato bilan tez yozish foyda bermaydi"
        }
      ],
      "izoh": "Xato qilsangiz &mdash; <b>Backspace</b> bilan tuzatib, o'sha so'zni qaytadan yozing."
    },
    {
      "tur": "qadam",
      "sarlavha": "Yozishni boshlashdan oldin",
      "tushuntirish": "Mashq qilishdan oldingi tayyorgarlik 2 daqiqa vaqt oladi, foydasi esa katta.",
      "elementlar": [
        {
          "nom": "O'tirishni to'g'rilash",
          "izoh": "Orqa tik, oyoqlar polga tekis"
        },
        {
          "nom": "Qo'lni to'g'ri qo'yish",
          "izoh": "Barmoqlar asosiy qatorga: ASDF / JKL;"
        },
        {
          "nom": "Klaviaturani tekshirish",
          "izoh": "Til UZ/EN holatida ekaniga ishonch hosil qilish"
        },
        {
          "nom": "Qarashni ekranga",
          "izoh": "Klaviaturaga qaramaslikka harakat qilish"
        },
        {
          "nom": "Sekin boshlash",
          "izoh": "Avval sekin, xatosiz &mdash; tezlik keyin keladi"
        }
      ]
    },
    {
      "tur": "royxat",
      "sarlavha": "Tez yozishning sirlari",
      "tushuntirish": "Tezlik tugmalarni tez bosishdan emas, balki <b>to'g'ri odatlardan</b> keladi.",
      "elementlar": [
        {
          "belgi": "⏱️",
          "nom": "Har kuni 15 daqiqa",
          "izoh": "Haftada bir marta 2 soatdan foydali"
        },
        {
          "belgi": "🔁",
          "nom": "Bir xil matnni takrorlash",
          "izoh": "Barmoqlar harakatni yodlaydi"
        },
        {
          "belgi": "🚫",
          "nom": "Klaviaturaga qaramaslik",
          "izoh": "Qarasangiz, mushak xotirasi o'smaydi"
        },
        {
          "belgi": "🎯",
          "nom": "Aniqlikka e'tibor",
          "izoh": "98% aniqlik &mdash; tezlikning asosi"
        },
        {
          "belgi": "🧘",
          "nom": "Barmoqlar bo'sh",
          "izoh": "Qattiq bosmang, keraksiz taranglik bo'lmasin"
        },
        {
          "belgi": "📈",
          "nom": "Natijani yozib borish",
          "izoh": "Har hafta tezlikni qayd qilish"
        }
      ],
      "izoh": "Vaqt o'tishi bilan tezlik <b>sezilmasdan</b> oshadi &mdash; asosiysi to'xtamaslik."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Ikki barmoq va 10 barmoq usuli",
      "tushuntirish": "Nega 10 barmoq usuli afzal &mdash; solishtirib ko'ring.",
      "ustunlar": [
        {
          "belgi": "👆",
          "sarlavha": "Ikki barmoq (o'zi o'rgangan)",
          "turi": "yomon",
          "royxat": [
            "Tezlik 15-25 so'z/daqiqa",
            "Doim klaviaturasiz qarash kerak",
            "Xato ko'p, tuzatish ko'p",
            "Ko'z tez charchaydi"
          ]
        },
        {
          "belgi": "🖐️",
          "sarlavha": "10 barmoq usuli",
          "turi": "yaxshi",
          "royxat": [
            "Tezlik 40-80 so'z/daqiqa",
            "Ko'z ekranda &mdash; matnga qaraydi",
            "Aniqlik 95%+",
            "Charchoq kam"
          ]
        }
      ],
      "izoh": "Boshlanishida 10 barmoq usuli <b>sekinroq</b> tuyuladi &mdash; bu normal. 2-3 haftadan keyin o'zib ketadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Eng ko'p uchraydigan xatolar",
      "tushuntirish": "Yangi boshlovchilar deyarli bir xil xatolarni qiladi.",
      "elementlar": [
        {
          "belgi": "👀",
          "nom": "Klaviaturaga qarash",
          "izoh": "Eng asosiy to'siq. Sekinroq bo'lsa ham qaramaslik."
        },
        {
          "belgi": "🖐️",
          "nom": "Qo'lni noto'g'ri qo'yish",
          "izoh": "Barmoqlar ASDF/JKL; dan uzoqlashib ketadi"
        },
        {
          "belgi": "👈",
          "nom": "Kichik barmoqni ishlatmaslik",
          "izoh": "A, Q, Z, P, Enter tugmalari chetda qoladi"
        },
        {
          "belgi": "💪",
          "nom": "Qattiq bosish",
          "izoh": "Barmoqlar tez charchaydi, tezlik tushadi"
        },
        {
          "belgi": "⏰",
          "nom": "Uzoq mashq qilmaslik",
          "izoh": "Bir kunda 3 soat mashq zarar qiladi"
        },
        {
          "belgi": "🐇",
          "nom": "Darhol tez yozishga urinish",
          "izoh": "Xato ko'payadi va odat buziladi"
        }
      ],
      "izoh": "Xatoni <b>darhol</b> tuzatish kerak &mdash; noto'g'ri harakatni takrorlab, odat qilib olmaslik uchun."
    },
    {
      "tur": "qadam",
      "sarlavha": "Kundalik 15 daqiqalik mashq tartibi",
      "tushuntirish": "Qisqa, lekin izchil mashq eng yaxshi natija beradi.",
      "elementlar": [
        {
          "nom": "1 daqiqa &mdash; qizish",
          "izoh": "Barmoqlarni asosiy qatorga qo'yib, sekin harakat"
        },
        {
          "nom": "3 daqiqa &mdash; uy qatori",
          "izoh": "Faqat ASDF JKL; tugmalari bilan so'zlar yozish"
        },
        {
          "nom": "4 daqiqa &mdash; to'liq matn",
          "izoh": "Oddiy gaplarni xatosiz yozishga harakat"
        },
        {
          "nom": "5 daqiqa &mdash; tezlik mashqi",
          "izoh": "Bir xil parchani 3 marta yozib, vaqtni o'lchash"
        },
        {
          "nom": "2 daqiqa &mdash; natijani yozish",
          "izoh": "Tezlik va xato foizini daftarga qayd qilish"
        }
      ]
    },
    {
      "tur": "oyna",
      "sarlavha": "Natijani kuzatish: tezlik va aniqlik",
      "tushuntirish": "Yozish tezligi <b>WPM</b> (words per minute &mdash; daqiqadagi so'z) bilan o'lchanadi.",
      "oyna": {
        "nom": "Yozish mashqi natijasi",
        "manzil": "Hafta  |  1-kun  |  2-kun  |  3-kun",
        "ustunlar": [
          "Ko'rsatkich",
          "Natija",
          "Bahosi"
        ],
        "qatorlar": [
          [
            "Tezlik (WPM)",
            "32 so'z/daqiqa",
            "🟡 O'rtacha"
          ],
          [
            "Aniqlik",
            "96%",
            "🟢 Yaxshi"
          ],
          [
            "Xatolar soni",
            "4 ta",
            "🟡 Kamaytirish mumkin"
          ],
          [
            "Mashq vaqti",
            "15 daqiqa",
            "🟢 Rejaga mos"
          ],
          [
            "Eng ko'p xato",
            "sh va ch harflarida",
            "🔴 Mashq kerak"
          ]
        ]
      },
      "izoh": "Boshlovchi uchun <b>20-25 WPM</b> normal, yaxshi natija &mdash; <b>40 WPM</b> dan yuqori."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Klaviaturaning guruhlari",
      "tushuntirish": "Klaviaturani qismlarga bo'lib o'rganish osonroq.",
      "elementlar": [
        {
          "belgi": "🔤",
          "nom": "Harf tugmalari",
          "izoh": "Asosiy qism &mdash; matn yoziladi"
        },
        {
          "belgi": "🔢",
          "nom": "Raqamlar qatori",
          "izoh": "1-0 va belgilar (!, @, #)"
        },
        {
          "belgi": "🎛️",
          "nom": "Funksiya tugmalari",
          "izoh": "F1-F12 &mdash; yordamchi buyruqlar"
        },
        {
          "belgi": "🧭",
          "nom": "Navigatsiya",
          "izoh": "O'qlar, Home, End, Page Up/Down"
        },
        {
          "belgi": "🔢",
          "nom": "Raqam paneli (Numpad)",
          "izoh": "O'ng tomondagi raqamlar"
        },
        {
          "belgi": "⚙️",
          "nom": "Maxsus tugmalar",
          "izoh": "Shift, Ctrl, Alt, Win, Enter, Backspace"
        }
      ],
      "izoh": "Noutbuklarda raqam paneli ko'pincha yo'q &mdash; u <b>Fn</b> tugmasi orqali yoqiladi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Matn bilan ishlashning tezkor tugmalari",
      "tushuntirish": "Sichqonchaga qo'l uzatmasdan ishlash &mdash; vaqtni tejaydi.",
      "elementlar": [
        {
          "belgi": "📋",
          "nom": "Ctrl + C",
          "izoh": "Belgilangan matnni nusxalash"
        },
        {
          "belgi": "✂️",
          "nom": "Ctrl + X",
          "izoh": "Matnni qirqib olish"
        },
        {
          "belgi": "📥",
          "nom": "Ctrl + V",
          "izoh": "Joylashtirish"
        },
        {
          "belgi": "↩️",
          "nom": "Ctrl + Z",
          "izoh": "Bekor qilish"
        },
        {
          "belgi": "💾",
          "nom": "Ctrl + S",
          "izoh": "Saqlash"
        },
        {
          "belgi": "🔤",
          "nom": "Ctrl + A",
          "izoh": "Hammasini belgilash"
        },
        {
          "belgi": "🔍",
          "nom": "Ctrl + F",
          "izoh": "Matn ichidan qidirish"
        },
        {
          "belgi": "⬆️",
          "nom": "Ctrl + Home / End",
          "izoh": "Hujjat boshiga / oxiriga"
        }
      ],
      "izoh": "Shift bilan birga bosilsa &mdash; <b>Ctrl + Shift + V</b> formatni tashlab, faqat matnni qo'yadi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Klaviatura va sichqoncha &mdash; qachon nima?",
      "tushuntirish": "Ikkalasi ham kerak, lekin ishi boshqa.",
      "ustunlar": [
        {
          "belgi": "⌨️",
          "sarlavha": "Klaviatura kerak bo'lganda",
          "turi": "brand",
          "royxat": [
            "Matn yozish va tahrirlash",
            "Tezkor tugmalar (Ctrl + ...)",
            "Aniq va takrorlanuvchi ishlar",
            "Katta matn bilan ishlash"
          ]
        },
        {
          "belgi": "🖱️",
          "sarlavha": "Sichqoncha kerak bo'lganda",
          "turi": "yaxshi",
          "royxat": [
            "Obyektni ko'chirish (drag & drop)",
            "Rasm chizish va tahrirlash",
            "Menyudan tanlash",
            "Sahifani aylantirish"
          ]
        }
      ],
      "izoh": "Eng tez ishlaydigan odamlar <b>ikkalasini</b> navbatma-navbat ishlatadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Matn tahrirlashda ishlatiladigan tugmalar",
      "tushuntirish": "Yozish paytida eng ko'p ishlatiladigan tugmalar &mdash; ularni bilsangiz, ish tezlashadi.",
      "elementlar": [
        {
          "belgi": "⌫",
          "nom": "Backspace",
          "izoh": "Chapdagi bitta belgini o'chiradi"
        },
        {
          "belgi": "⌦",
          "nom": "Delete",
          "izoh": "Kursordan keyingi belgini o'chiradi"
        },
        {
          "belgi": "↵",
          "nom": "Enter",
          "izoh": "Yangi qatorga o'tadi (yoki buyruqni tasdiqlaydi)"
        },
        {
          "belgi": "⇥",
          "nom": "Tab",
          "izoh": "Katta bo'sh joy &mdash; jadval va ro'yxatda ishlatiladi"
        },
        {
          "belgi": "⇧",
          "nom": "Shift",
          "izoh": "Katta harf yoki belgi yozadi"
        },
        {
          "belgi": "🔒",
          "nom": "Caps Lock",
          "izoh": "Doimiy katta harf rejimi (keraksiz!)"
        },
        {
          "belgi": "⎋",
          "nom": "Esc",
          "izoh": "Amalni bekor qiladi, oynani yopadi"
        }
      ],
      "izoh": "<b>Caps Lock</b> yoqilgan bo'lsa, hamma harflar katta chiqadi &mdash; xato ko'pincha shundan bo'ladi."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Yozish tezligi bosqichlari",
      "tushuntirish": "Tezlik asta-sekin oshadi. Qaysi bosqichda ekaningizni bilib, keyingi maqsadni qo'ying.",
      "elementlar": [
        {
          "belgi": "🐢",
          "nom": "Boshlovchi",
          "izoh": "10-20 so'z/daqiqa &mdash; klaviaturasiz qaraydi"
        },
        {
          "belgi": "🚶",
          "nom": "O'rganuvchi",
          "izoh": "20-35 so'z/daqiqa &mdash; ba'zan qaraydi"
        },
        {
          "belgi": "🏃",
          "nom": "Ishonchli",
          "izoh": "35-50 so'z/daqiqa &mdash; deyarli qaramaydi"
        },
        {
          "belgi": "⚡",
          "nom": "Professional",
          "izoh": "50-80 so'z/daqiqa &mdash; qaramasdan yozadi"
        }
      ],
      "izoh": "Maqsad qo'yishda <b>aniqlikni</b> birinchi o'ringa qo'ying: 98% aniqlik bo'lmasa, tezlik foyda bermaydi."
    }
  ],

  amaliy: [
    "Klaviaturani ko'rmasdan barmoqlaringizni asosiy qatorga (A S D F &mdash; J K L ;) qo'ying. F va J dagi bo'rtiqlarni barmoq bilan sezing.",
    "Kompyuteringizni to'g'ri holatga keltiring: orqa to'g'ri, tirsak 90 daraja, oyoqlar yerga tegib tursin.",
    "5 daqiqa davomida matn yozib mashq qiling: daqiqada nechta so'z yozganingizni va xatolar sonini daftarga yozib boring.",
    "Bir xil matnni 3 marta yozib, WPM va aniqlik qanday o'zgarganini kuzatib boring.",
    "Klaviaturani ko'rmasdan quyidagi jumlani yozishga harakat qiling: <i>\"klaviatura bilan ishlash tezlikni oshiradi\"</i>.",
    "5 daqiqa davomida faqat chap qo'l harflarini (A S D F G Q W E R T Z X C V B) mashq qiling, keyin o'ng qo'lni.",
    "Darsdagi tezkor tugmalardan 10 tasini tanlab yodda saqlang va har birini amalda sinab ko'ring.",
  ],

  uyga: [
    {
      "savol": "Daftaringizga <b>asosiy qator</b>ni chizing: A S D F va J K L ; tugmalarini belgilab, har birining ostiga qaysi barmoq bosishini yozing.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<pre><code>+-----+-----+-----+-----+  +-----+-----+-----+-----+\n|  A  |  S  |  D  |  F  |  |  J  |  K  |  L  |  ;  |\n+-----+-----+-----+-----+  +-----+-----+-----+-----+\n kichik nomsiz o'rta ko'rsat.  ko'rsat. o'rta nomsiz kichik\n          CHAP QO'L                 O'NG QO'L</code></pre><p>Eslatma: <b>F</b> va <b>J</b> tugmalarida do'mboqcha bor &mdash; ko'rsatkich barmoqlar shu joyni paypaslab topadi.</p>"
    },
    {
      "savol": "To'g'ri o'tirish qoidasini chizma bilan tushuntiring: orqa, tirsak, oyoqlar va ekran bilan masofa.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<pre><code>        [MONITOR]  &lt;-- ekran yuqorisi ko'z balandligida\n             \\\n              \\  50-70 sm\n               \\\n        o       |=====[klaviatura]\n       /|\\      |\n        |  90&deg; |\n        |       |\n       / \\  &lt;-- oyoqlar polga tekis\n   [stul]</code></pre><ul><li><b>Orqa</b> tik, stul suyanchig'i belga tegib turadi;</li><li><b>Tirsak</b> 90&deg; burchak ostida;</li><li><b>Oyoqlar</b> polga to'liq tegib turadi;</li><li><b>Ekran</b> ko'z balandligida, 50-70 sm masofada.</li></ul>"
    },
    {
      "savol": "Har bir barmoq qaysi tugmalarni bosadi? Jadval tuzing.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Barmoq</th><th>Tugmalar</th></tr></thead><tbody><tr><td>Chap kichik</td><td>Q  A  Z  1</td></tr><tr><td>Chap nomsiz</td><td>W  S  X  2</td></tr><tr><td>Chap o'rta</td><td>E  D  C  3</td></tr><tr><td>Chap ko'rsatkich</td><td>R  F  V  T  G  B  4  5</td></tr><tr><td>O'ng ko'rsatkich</td><td>Y  H  N  U  J  M  6  7</td></tr><tr><td>O'ng o'rta</td><td>I  K  ,  8</td></tr><tr><td>O'ng nomsiz</td><td>O  L  .  9</td></tr><tr><td>O'ng kichik</td><td>P  ;  /  0  Enter</td></tr><tr><td>Bosh barmoqlar</td><td>Probel (Space)</td></tr></tbody></table>"
    },
    {
      "savol": "15 daqiqalik mashq bajaring va natijani jadvalga yozing: tezlik (so'z/daqiqa), aniqlik (%) va xatolar soni.",
      "tezlik": "Taxminiy vaqt: 20 daqiqa",
      "javob": "<p>Namuna jadval (natijalar sizda boshqacha bo'ladi):</p><table class=\"reja-table\"><thead><tr><th>Ko'rsatkich</th><th>1-kun</th><th>3-kun</th><th>7-kun</th></tr></thead><tbody><tr><td>Tezlik (so'z/daqiqa)</td><td>18</td><td>24</td><td>31</td></tr><tr><td>Aniqlik (%)</td><td>88%</td><td>93%</td><td>96%</td></tr><tr><td>Xatolar soni</td><td>11</td><td>7</td><td>4</td></tr></tbody></table><p>Baholanadi: har kuni yozilganmi va o'sish ko'rinib turibdimi. Bir haftada tezlik sezilarli oshadi.</p>"
    },
    {
      "savol": "Quyidagi tezkor tugmalar nima qiladi: <b>Ctrl + C</b>, <b>Ctrl + V</b>, <b>Ctrl + Z</b>, <b>Ctrl + S</b>, <b>Ctrl + F</b>?",
      "tezlik": "Taxminiy vaqt: 6 daqiqa",
      "javob": "<ul><li><b>Ctrl + C</b> &mdash; belgilangan matnni nusxalaydi;</li><li><b>Ctrl + V</b> &mdash; nusxalangan matnni qo'yadi;</li><li><b>Ctrl + Z</b> &mdash; oxirgi amalni bekor qiladi;</li><li><b>Ctrl + S</b> &mdash; hujjatni saqlaydi;</li><li><b>Ctrl + F</b> &mdash; matn ichidan so'z qidiradi.</li></ul>"
    },
    {
      "savol": "Yangi boshlovchilarda uchraydigan 4 ta xatoni yozing va har birining sababini tushuntiring.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<ol><li><b>Klaviaturaga qarash</b> &mdash; barmoqlar tugmalarni yodlay olmaydi;</li><li><b>Qo'lni noto'g'ri qo'yish</b> &mdash; asosiy qatordan uzoqlashib ketadi;</li><li><b>Kichik barmoqni ishlatmaslik</b> &mdash; qo'lning chetdagi tugmalari bosilmay qoladi;</li><li><b>Darhol tez yozishga urinish</b> &mdash; xato ko'payadi va noto'g'ri odat shakllanadi.</li></ol><p>Qoida: <b>avval aniqlik, keyin tezlik</b>.</p>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): o'zingizga 1 haftalik mashq rejasi tuzing &mdash; har kuni necha daqiqa va nima mashq qilasiz?",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<p>Namuna reja (kuniga 15 daqiqa):</p><table class=\"reja-table\"><thead><tr><th>Kun</th><th>Vazifa</th></tr></thead><tbody><tr><td>Dushanba</td><td>1 daqiqa qizish + ASDF JKL; harflari bilan so'zlar</td></tr><tr><td>Seshanba</td><td>Yuqori qator (Q W E R T Y U I O P)</td></tr><tr><td>Chorshanba</td><td>Pastki qator (Z X C V B N M)</td></tr><tr><td>Payshanba</td><td>Raqamlar qatori va belgilar</td></tr><tr><td>Juma</td><td>To'liq matn &mdash; bir parchani 3 marta yozish</td></tr><tr><td>Shanba</td><td>Tezlik mashqi &mdash; vaqtni o'lchash</td></tr><tr><td>Yakshanba</td><td>Dam. Natijalarni solishtirish va yozib qo'yish</td></tr></tbody></table>"
    }
  ],

  test: [
    {
      savol: "10 barmoq usulida chap qo'lning ko'rsatkich barmog'i qaysi tugmada turadi?",
      variantlar: ["D", "F", "S", "G"],
      togri: 1,
      izoh: "F tugmasida bo'rtiq bor &mdash; ko'rmasdan topish uchun. O'ng qo'lda esa J tugmasi.",
    },
    {
      savol: "WPM nimani o'lchaydi?",
      variantlar: [
        "Daqiqada yozilgan so'zlar sonini",
        "Klaviaturadagi tugmalar sonini",
        "Xato sonini",
        "Ekran o'lchamini",
      ],
      togri: 0,
      izoh: "WPM &mdash; Words Per Minute, daqiqada yozilgan so'zlar soni.",
    },
    {
      savol: "Qaysi o'tirish holati <b>noto'g'ri</b>?",
      variantlar: [
        "Orqa to'g'ri, stulga suyanib",
        "Ko'z ekrandan 30 sm uzoqlikda",
        "Bilak stol ustida",
        "Oyoqlar yerga tegib",
      ],
      togri: 1,
      izoh: "Ko'z ekrandan 50-70 sm uzoqlikda bo'lishi kerak. 30 sm &mdash; juda yaqin.",
    },
    {
      savol: "Backspace tugmasini qaysi barmoq bilan bosish ma'qul?",
      variantlar: [
        "Chap qo'lning bosh barmog'i",
        "O'ng qo'lning kichik barmog'i",
        "O'ng qo'lning ko'rsatkich barmog'i",
        "Chap qo'lning o'rta barmog'i",
      ],
      togri: 1,
      izoh: "Backspace &mdash; o'ng qo'lning kichik barmog'i hududida joylashgan.",
    },
    {
      savol: "Yozishda birinchi navbatda nimaga e'tibor berish kerak?",
      variantlar: ["Tezlikka", "Aniqlikka", "Klaviaturani ko'rishga", "Kuch bilan bosishga"],
      togri: 1,
      izoh: "Avval aniqlik: to'g'ri harakatni yodlagan barmoqlar keyinchalik o'zi tezlashadi.",
    },
    {
      savol: "Barmoqlar yozishdan keyin qayerga qaytishi kerak?",
      variantlar: [
        "Klaviaturaning eng chetiga",
        "Asosiy qatorga (A S D F - J K L ;)",
        "Space tugmasiga",
        "Sichqonchaga",
      ],
      togri: 1,
      izoh: "Asosiy qator &mdash; barmoqlarning \"uy holati\". Har safar shu yerga qaytish kerak.",
    },
  ],

  lugat: [
    { soz: "Touch typing", izoh: "Klaviaturaga qaramasdan, 10 barmoqda yozish usuli." },
    { soz: "WPM", izoh: "Daqiqada yozilgan so'zlar soni (Words Per Minute)." },
    { soz: "CPM", izoh: "Daqiqada yozilgan belgilar soni." },
    { soz: "Aniqlik (accuracy)", izoh: "To'g'ri yozilgan belgilar foizi." },
    { soz: "Asosiy qator", izoh: "A S D F &mdash; J K L ; qatori, barmoqlarning boshlang'ich joyi." },
    { soz: "Numpad", izoh: "Klaviaturaning o'ng tomonidagi raqamli blok." },
    { soz: "Caps Lock", izoh: "Barcha harflarni katta qilib yozish rejimi." },
    { soz: "Netiket", izoh: "Internetda muloqot odobi (keyingi darsda batafsil)." },
    { soz: "Karpal tunnel", izoh: "Noto'g'ri o'tirish va zo'riqishdan kelib chiqadigan bilak kasalligi." },
  ],

  xatolar: [
    "Yozish paytida klaviaturani ko'rish &mdash; barmoqlar joyni yodlay olmaydi.",
    "Barmoqlarni asosiy qatorga qaytarmaslik &mdash; keyingi tugmani topish qiyinlashadi.",
    "Birinchi kundan tez yozishga urinish &mdash; aniqlik tushib ketadi.",
    "Klaviatura tugmalarini kuch bilan bosish &mdash; barmoqlar tez charchaydi.",
    "Bir soat tanaffussiz yozish &mdash; ko'z va bilak zo'riqadi.",
    "Noto'g'ri o'tirish &mdash; uzoq muddatda umurtqa va bo'yin kasalliklariga olib keladi.",
    "Faqat testlarda mashq qilish, kundalik ishda esa ko'rib yozish &mdash; natija sekinlashadi.",
  ],

  keyingi:
    "Keyingi darsda <b>raqamli savodxonlik va raqamli madaniyat</b> mavzusini o'rganamiz: internet odobi (netiket), raqamli iz (digital footprint), shaxsiy ma'lumotlarni himoya qilish, ishonchli axborotni aniqlash va feyk ma'lumotlardan saqlanish. Bugungi tez yozish ko'nikmasi esa butun kurs davomida ishlatiladi.",
});
