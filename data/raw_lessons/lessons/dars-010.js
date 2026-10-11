/* 10-dars: Internet qanday ishlaydi? IP, hosting, domen, DNS, brauzer, HTTP/HTTPS */

AVX.dars({
  id: "cs8-010",
  sarlavha: "Internet qanday ishlaydi? IP, hosting, domen, DNS, brauzer, HTTP/HTTPS",
  kiritish:
    "Brauzerga bitta manzil yozasiz va 1 soniyada sahifa ochiladi. O'sha soniyada nima bo'ladi? Bugun biz <b>IP manzil</b>, <b>domen</b>, <b>DNS</b>, <b>hosting</b>, <b>brauzer</b> va <b>HTTP/HTTPS</b> protokollarini o'rganamiz &mdash; ya'ni Internetning ko'rinmaydigan mexanizmini ochib tashlaymiz.",

  maqsad: [
    "Mijoz-server arxitekturasi nima ekanini tushunish.",
    "IP manzil, domen nomi va hosting tushunchalarini farqlash.",
    "DNS vazifasini va domenni IP ga bog'lash jarayonini bilish.",
    "Brauzer sahifani ochish bosqichlarini tartib bilan aytish.",
    "HTTP va HTTPS protokollari hamda xavfsiz ulanish farqini tushunish.",
  ],

  natija: [
    "Manzilni yozgandan sahifa ochilgunga qadar bo'lgan 5 bosqichni tushuntiradi.",
    "IP manzil to'g'ri yoki noto'g'ri ekanini tekshiradi.",
    "Domen nomini IP manzilga aylantiradi (nslookup va Python bilan).",
    "HTTP status kodlarini o'qiy oladi (200, 404, 500).",
    "HTTPS nima uchun kerakligini misolda tushuntiradi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: transformatsiya, avtomatlashtirish, EHM."],
    ["5-16 daq", "Mentor tushuntirishi", "\"Manzil yozdim, sahifa ochildi\" &mdash; 1 soniyada nima bo'ladi?"],
    ["16-30 daq", "Nazariya: mijoz-server, IP, domen", "Adreslar tizimi: IP va domen."],
    ["30-42 daq", "DNS va hosting", "Domen qanday IP ga aylanadi, sayt qayerda turadi."],
    ["42-56 daq", "HTTP/HTTPS", "So'rov va javob, status kodlar, shifrlash."],
    ["56-72 daq", "Amaliyot: kod yozamiz", "IP tekshiruvi, DNS so'rovi, HTTP status."],
    ["72-78 daq", "Mustaqil ish va uyga vazifa", "Har kim bitta saytning yo'lini kuzatadi."],
    ["78-80 daq", "Baholash", "Dars yakunlanadi."],
  ],

  mentor: [
    {
      sarlavha: "1. Bir soniyada nima bo'ladi?",
      matn: [
        "Brauzerga <code>edu.uz</code> deb yozdingiz va Enter bosdingiz. Ko'z ochib-yumguncha sahifa ochildi. Ichida nima bo'ldi?",
        "Birinchidan, brauzer <b>\"edu.uz qayerda?\"</b> deb so'radi &mdash; bu DNS xizmati. Ikkinchidan, u yerdan IP manzil oldi &mdash; masalan <code>185.217.131.56</code>. Uchinchidan, o'sha manzilga <b>so'rov (request)</b> yubordi. To'rtinchidan, server javob qaytardi &mdash; ichida HTML kodi. Beshinchidan, brauzer shu kodni chiroyli sahifaga aylantirdi.",
        "Mana shu besh qadam &mdash; bugungi darsimizning butun mazmuni. Va diqqat: bularning hammasi <em>siz ko'rmaydigan</em> holda, bir soniyaning ichida bo'ladi.",
      ],
    },
    {
      sarlavha: "2. Mijoz va server",
      matn: [
        "Internetda ikki tomon bor: <b>mijoz</b> (client) va <b>server</b>. Mijoz &mdash; so'rov yuboruvchi: sizning brauzeringiz, telefoningiz, ilovangiz. Server &mdash; javob qaytaruvchi: 24 soat ishlaydigan kuchli kompyuter.",
        "Qahvaxonani tasavvur qiling: siz (mijoz) buyurtma berasiz, oshxona (server) tayyorlab beradi. Siz oshxonaga kirib o'zingiz qahva qilmaysiz &mdash; faqat buysiz va natijani olasiz.",
        "Veb ham xuddi shunday ishlaydi: brauzer so'raydi, server javob beradi va bu <b>so'rov-javob</b> juftligi HTTP deb ataladigan qoidalar bo'yicha bajariladi.",
      ],
    },
    {
      sarlavha: "3. IP manzil va domen",
      matn: [
        "<b>IP manzil</b> &mdash; Internetdagi har bir qurilmaning raqamli manzili. Uy manziliga o'xshaydi: <code>192.168.0.104</code>, <code>185.217.131.56</code>. IPv4 da u to'rt bo'lakdan iborat va har bir bo'lak 0 dan 255 gacha bo'ladi.",
        "Lekin raqam yodlash qiyin. Shuning uchun <b>domen nomi</b> o'ylab topilgan: <code>edu.uz</code>, <code>google.com</code>. Domen &mdash; IP manzilning \"ismi\".",
        "<b>DNS</b> (Domain Name System) &mdash; domen nomlarini IP manzillarga aylantiruvchi xizmat. Uni Internetning \"telefon daftari\" deb atash mumkin: siz ism aytasiz, u raqamni beradi.",
      ],
    },
    {
      sarlavha: "4. Hosting &mdash; saytning uyi",
      matn: [
        "Sayt fayllari qayerda turadi? Sizning kompyuteringizda emas &mdash; chunki kompyuteringiz o'chganda sayt ham o'chib qolardi. Sayt fayllari <b>hosting</b> (server) da turadi.",
        "Hosting &mdash; 24 soat ishlaydigan, Internetga ulangan kompyuter. Unga fayllaringizni yuklaysiz va u dunyoning istalgan joyidan ochiladi. Bepul hostinglar ham bor (Netlify, Vercel, GitHub Pages), keyingi darslarda ular bilan ishlaymiz.",
        "Va yana ikki atama: <b>bandwidth</b> (trafik hajmi &mdash; bir oyda qancha ma'lumot yuborilsa) va <b>uptime</b> (serverning ishlab turish foizi, yaxshi serverda 99.9%).",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Mijoz-server arxitekturasi",
      matn: [
        "Veb-sahifa ochilishi quyidagi zanjir bo'yicha boradi.",
      ],
      jadval: [
        ["Qadam", "Nima bo'ladi", "Kim bajaradi"],
        ["1", "Manzil kiritiladi", "Foydalanuvchi"],
        ["2", "Domen IP manzilga aylantiriladi (DNS)", "Brauzer + DNS server"],
        ["3", "Serverga so'rov (HTTP request) yuboriladi", "Brauzer (mijoz)"],
        ["4", "Server ma'lumotni qayta ishlaydi", "Server"],
        ["5", "Javob (HTML, CSS, rasm) yuboriladi", "Server"],
        ["6", "Brauzer sahifani chizadi", "Brauzer"],
      ],
    },
    {
      sarlavha: "2. IP manzil turlari",
      matn: [
        "IP manzillar vazifasiga qarab turlarga bo'linadi.",
      ],
      jadval: [
        ["Tur", "Misol", "Izoh"],
        ["IPv4", "192.168.0.104", "To'rt bo'lak, har biri 0-255. Hozir asosiy"],
        ["IPv6", "2001:0db8:85a3::8a2e:0370:7334", "Yangi format, juda ko'p manzil"],
        ["Lokal (ichki)", "192.168.x.x, 10.x.x.x", "Faqat uy/maktab tarmog'i ichida"],
        ["Global (tashqi)", "185.217.131.56", "Internetda ko'rinadigan manzil"],
        ["Statik", "O'zgarmaydi", "Serverlar uchun qulay"],
        ["Dinamik", "Vaqti-vaqti bilan o'zgaradi", "Oddiy foydalanuvchilarda"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Qiziqarli fakt",
        matn: "Sizning uyingizdagi barcha qurilmalar (telefon, televizor, kompyuter) Internetga <b>bitta global IP</b> orqali chiqadi. Ular tarmoq ichida lokal IP oladi &mdash; bu <b>NAT</b> texnologiyasi orqali boshqariladi.",
      },
    },
    {
      sarlavha: "3. Domen nomi tuzilishi va zonalar",
      matn: [
        "Domen nomi o'ngdan chapga o'qiladi: <code>dars.edu.uz</code>",
      ],
      jadval: [
        ["Qism", "Misol", "Izoh"],
        ["Subdomen", "dars", "Saytning ichki bo'limi"],
        ["Asosiy domen", "edu", "Tashkilot nomi"],
        ["Zona (TLD)", "uz", "Davlat yoki tur"],
      ],
      jadval2: [
        ["Zona", "Ma'nosi", "Misol"],
        ["uz", "O'zbekiston", "edu.uz, gov.uz"],
        ["com", "Tijoriy / xalqaro", "google.com"],
        ["org", "Tashkilot", "wikipedia.org"],
        ["edu", "Ta'lim", "mit.edu"],
        ["gov", "Davlat", "whitehouse.gov"],
        ["net", "Tarmoq xizmati", "cloudflare.net"],
        ["io", "Texnologiya kompaniyalari", "github.io"],
      ],
    },
    {
      sarlavha: "4. HTTP va HTTPS",
      matn: [
        "<b>HTTP</b> (HyperText Transfer Protocol) &mdash; mijoz va server o'rtasidagi muloqot qoidalari. <b>HTTPS</b> &mdash; uning xavfsiz (shifrlangan) ko'rinishi.",
      ],
      jadval: [
        ["Xususiyat", "HTTP", "HTTPS"],
        ["Shifrlash", "Yo'q", "Bor (SSL/TLS)"],
        ["Port", "80", "443"],
        ["Manzil ko'rinishi", "http://", "https:// (qulf belgisi bor)"],
        ["Xavfsizlik", "Ma'lumot ochiq ketadi", "Ma'lumot shifrlangan"],
        ["Qayerda ishlatiladi", "Eski saytlar", "Barcha zamonaviy saytlar"],
      ],
      jadval3: [
        ["Kod", "Ma'nosi", "Misol"],
        ["200", "Muvaffaqiyatli", "Sahifa ochildi"],
        ["301 / 302", "Boshqa manzilga yo'naltirish", "Sayt ko'chirilgan"],
        ["403", "Ruxsat yo'q", "Faylni ko'rish taqiqlangan"],
        ["404", "Sahifa topilmadi", "Manzil xato yozilgan"],
        ["500", "Server ichki xatosi", "Serverda muammo"],
        ["503", "Xizmat vaqtincha mavjud emas", "Serverga yuk tushgan"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "sxema",
      "sarlavha": "Internet: uydan dunyogacha",
      "tushuntirish": "Internet sehr emas. U bir necha qatlamdan iborat: qurilma &rarr; router &rarr; provayder &rarr; dunyo.",
      "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Internet qatlamlari\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx10a\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/></marker>\n  </defs>\n  <rect x=\"20\" y=\"96\" width=\"132\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"86\" y=\"128\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">QURILMA</text>\n  <text x=\"86\" y=\"150\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">telefon, noutbuk</text>\n  <text x=\"86\" y=\"168\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">lokal IP oladi</text>\n  <rect x=\"176\" y=\"96\" width=\"132\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"242\" y=\"128\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">ROUTER</text>\n  <text x=\"242\" y=\"150\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">uy ichidagi qurilmalarni</text>\n  <text x=\"242\" y=\"168\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">tarmoqqa bog'laydi</text>\n  <rect x=\"332\" y=\"96\" width=\"132\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"398\" y=\"128\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">PROVAYDER</text>\n  <text x=\"398\" y=\"150\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">internet xizmatini</text>\n  <text x=\"398\" y=\"168\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">sotadigan kompaniya</text>\n  <rect x=\"488\" y=\"96\" width=\"192\" height=\"96\" rx=\"11\" fill=\"#1b2334\" stroke=\"#c58cff\" stroke-width=\"2\"/>\n  <text x=\"584\" y=\"128\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">DUNYO TARMOG'I</text>\n  <text x=\"584\" y=\"150\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">millionlab serverlar</text>\n  <text x=\"584\" y=\"168\" fill=\"#93a0bd\" font-size=\"11\" text-anchor=\"middle\">kabel va yo'ldoshlar</text>\n  <line x1=\"154\" y1=\"144\" x2=\"172\" y2=\"144\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx10a)\"/>\n  <line x1=\"310\" y1=\"144\" x2=\"328\" y2=\"144\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx10a)\"/>\n  <line x1=\"466\" y1=\"144\" x2=\"484\" y2=\"144\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx10a)\"/>\n  <text x=\"163\" y=\"134\" fill=\"#93a0bd\" font-size=\"10.5\" text-anchor=\"middle\">Wi-Fi</text>\n  <text x=\"319\" y=\"134\" fill=\"#93a0bd\" font-size=\"10.5\" text-anchor=\"middle\">kabel</text>\n  <text x=\"475\" y=\"134\" fill=\"#93a0bd\" font-size=\"10.5\" text-anchor=\"middle\">kabel</text>\n  <text x=\"350\" y=\"242\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Sizning uyingizdagi IP &mdash; <tspan fill=\"#4f8cff\">lokal</tspan> manzil (faqat uy ichida ko'rinadi).</text>\n  <text x=\"350\" y=\"266\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">Provayder bergan IP &mdash; <tspan fill=\"#22d3a6\">global</tspan> manzil (internetda ko'rinadi).</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Internet ishlashi uchun nima kerak?",
      "tushuntirish": "Sayt ochilishi uchun olti narsa birgalikda ishlaydi. Bittasi bo'lmasa &mdash; sahifa ochilmaydi.",
      "elementlar": [
        {
          "belgi": "🔢",
          "nom": "IP manzil",
          "izoh": "Har bir qurilmaning tarmoqdagi \"uy raqami\""
        },
        {
          "belgi": "🏷️",
          "nom": "Domen",
          "izoh": "IP o'rniga yodda qoladigan nom: maktab.uz"
        },
        {
          "belgi": "📖",
          "nom": "DNS",
          "izoh": "Domenni IP manzilga aylantiruvchi \"telefon daftari\""
        },
        {
          "belgi": "🏠",
          "nom": "Hosting",
          "izoh": "Sayt fayllari turgan server"
        },
        {
          "belgi": "📜",
          "nom": "Protokol (HTTP/HTTPS)",
          "izoh": "Ma'lumot almashish qoidalari"
        },
        {
          "belgi": "📡",
          "nom": "Router va provayder",
          "izoh": "Qurilmani tarmoqqa ulaydi"
        }
      ],
      "izoh": "Eng ko'p chalkashtiriladigan juftlik: <b>domen</b> (nom) va <b>hosting</b> (joy)."
    },
    {
      "tur": "sxema",
      "sarlavha": "IP manzil qanday ko'rinadi?",
      "tushuntirish": "IP manzil &mdash; nuqta bilan ajratilgan to'rt son. U tarmoq va qurilmani belgilaydi.",
      "svg": "<svg viewBox=\"0 0 700 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"IP manzil tuzilishi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"258\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <text x=\"350\" y=\"76\" fill=\"#e6ecff\" font-size=\"30\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">192 . 168 . 1 . 15</text>\n  <rect x=\"150\" y=\"50\" width=\"102\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <rect x=\"262\" y=\"50\" width=\"102\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#4f8cff\" stroke-width=\"2.5\"/>\n  <rect x=\"374\" y=\"50\" width=\"72\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#22d3a6\" stroke-width=\"2.5\"/>\n  <rect x=\"456\" y=\"50\" width=\"94\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#ffb020\" stroke-width=\"2.5\"/>\n  <line x1=\"200\" y1=\"90\" x2=\"200\" y2=\"118\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <line x1=\"312\" y1=\"90\" x2=\"312\" y2=\"118\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <line x1=\"410\" y1=\"90\" x2=\"410\" y2=\"118\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <line x1=\"503\" y1=\"90\" x2=\"503\" y2=\"118\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"200\" y=\"140\" fill=\"#4f8cff\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"700\">TARMOQ</text>\n  <text x=\"312\" y=\"140\" fill=\"#4f8cff\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"700\">TARMOQ</text>\n  <text x=\"410\" y=\"140\" fill=\"#22d3a6\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"700\">QURILMA</text>\n  <text x=\"503\" y=\"140\" fill=\"#ffb020\" font-size=\"12.5\" text-anchor=\"middle\" font-weight=\"700\">QURILMA</text>\n  <text x=\"256\" y=\"162\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">192.168 &mdash; uy tarmog'i</text>\n  <text x=\"456\" y=\"162\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">1 va 15 &mdash; qurilma raqami</text>\n  <text x=\"350\" y=\"200\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Har bir son 0 dan 255 gacha bo'ladi.</text>\n  <text x=\"350\" y=\"224\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">192.168.x.x &mdash; lokal (uy ichidagi) manzillar. Internetda ko'rinmaydi.</text>\n</svg>"
    },
    {
      "tur": "qiyos",
      "sarlavha": "IPv4 va IPv6",
      "tushuntirish": "IPv4 manzillar tugab qolgani uchun yangi standart &mdash; IPv6 joriy etildi.",
      "ustunlar": [
        {
          "belgi": "4️⃣",
          "sarlavha": "IPv4",
          "turi": "brand",
          "royxat": [
            "4 ta son: <code>192.168.1.15</code>",
            "Har biri 0-255 oralig'ida",
            "Jami ~4,3 milliard manzil",
            "Hozir eng ko'p ishlatiladi"
          ]
        },
        {
          "belgi": "6️⃣",
          "sarlavha": "IPv6",
          "turi": "yaxshi",
          "royxat": [
            "8 ta guruh: <code>2001:0db8::1428:57ab</code>",
            "Sonlar 16 lik tizimda",
            "Manzillar soni amalda cheksiz",
            "Asta-sekin joriy etilmoqda"
          ]
        }
      ],
      "izoh": "Uy routeri odatda ikkalasini ham qo'llab-quvvatlaydi &mdash; sozlash shart emas."
    },
    {
      "tur": "royxat",
      "sarlavha": "IP manzil turlari",
      "tushuntirish": "Bir xil \"IP\" so'zi turli vaziyatlarda ishlatiladi.",
      "elementlar": [
        {
          "belgi": "🏠",
          "nom": "Lokal IP",
          "izoh": "Faqat uy yoki maktab tarmog'i ichida ko'rinadi"
        },
        {
          "belgi": "🌍",
          "nom": "Global (tashqi) IP",
          "izoh": "Provayder beradi, internetda ko'rinadi"
        },
        {
          "belgi": "📌",
          "nom": "Statik IP",
          "izoh": "O'zgarmaydi &mdash; serverlar uchun qulay"
        },
        {
          "belgi": "🔄",
          "nom": "Dinamik IP",
          "izoh": "Vaqti-vaqti bilan o'zgaradi &mdash; uy uchun odatiy"
        },
        {
          "belgi": "🔐",
          "nom": "Shaxsiy diapazon",
          "izoh": "<code>192.168.x.x</code>, <code>10.x.x.x</code>"
        }
      ],
      "izoh": "Brauzerda <code>what is my ip</code> deb qidirsangiz &mdash; <b>global</b> IP manzilingizni ko'rasiz."
    },
    {
      "tur": "sxema",
      "sarlavha": "DNS nima qiladi?",
      "tushuntirish": "DNS &mdash; internetning \"telefon daftari\". Siz nom yozasiz, u IP manzilni topib beradi.",
      "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"DNS ishlashi\">\n  <rect x=\"1\" y=\"1\" width=\"698\" height=\"298\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <defs>\n    <marker id=\"avx10b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#4f8cff\"/></marker>\n    <marker id=\"avx10c\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\" markerUnits=\"userSpaceOnUse\"><path d=\"M0,0 L9,4.5 L0,9 z\" fill=\"#22d3a6\"/></marker>\n  </defs>\n  <rect x=\"26\" y=\"104\" width=\"160\" height=\"92\" rx=\"11\" fill=\"#1b2334\" stroke=\"#4f8cff\" stroke-width=\"2\"/>\n  <text x=\"106\" y=\"136\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">SIZ YOZASIZ</text>\n  <text x=\"106\" y=\"160\" fill=\"#22d3a6\" font-size=\"14\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">maktab.uz</text>\n  <rect x=\"270\" y=\"104\" width=\"160\" height=\"92\" rx=\"11\" fill=\"#1b2334\" stroke=\"#ffb020\" stroke-width=\"2\"/>\n  <text x=\"350\" y=\"136\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">DNS SERVER</text>\n  <text x=\"350\" y=\"160\" fill=\"#93a0bd\" font-size=\"11.5\" text-anchor=\"middle\">daftardan izlaydi</text>\n  <text x=\"350\" y=\"180\" fill=\"#ffb020\" font-size=\"11.5\" text-anchor=\"middle\">\"maktab.uz → ?\"</text>\n  <rect x=\"514\" y=\"104\" width=\"160\" height=\"92\" rx=\"11\" fill=\"#1b2334\" stroke=\"#22d3a6\" stroke-width=\"2\"/>\n  <text x=\"594\" y=\"136\" fill=\"#e6ecff\" font-size=\"13\" font-weight=\"700\" text-anchor=\"middle\">TOPILDI</text>\n  <text x=\"594\" y=\"160\" fill=\"#22d3a6\" font-size=\"13\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">185.217.131.5</text>\n  <line x1=\"190\" y1=\"140\" x2=\"264\" y2=\"140\" stroke=\"#4f8cff\" stroke-width=\"2.5\" marker-end=\"url(#avx10b)\"/>\n  <text x=\"227\" y=\"130\" fill=\"#4f8cff\" font-size=\"11\" text-anchor=\"middle\">savol</text>\n  <line x1=\"434\" y1=\"126\" x2=\"508\" y2=\"134\" stroke=\"#22d3a6\" stroke-width=\"2.5\" marker-end=\"url(#avx10c)\"/>\n  <text x=\"471\" y=\"120\" fill=\"#22d3a6\" font-size=\"11\" text-anchor=\"middle\">javob</text>\n  <path d=\"M594 200 L594 222 L106 222 L106 200\" fill=\"none\" stroke=\"#22d3a6\" stroke-width=\"2\" stroke-dasharray=\"6 5\"/>\n  <text x=\"350\" y=\"246\" fill=\"#22d3a6\" font-size=\"12\" text-anchor=\"middle\">Brauzer shu IP manzilga ulanadi va sahifani oladi.</text>\n  <text x=\"350\" y=\"272\" fill=\"#93a0bd\" font-size=\"12\" text-anchor=\"middle\">Buni siz sezmaysiz &mdash; hammasi soniyaning ulushida bo'ladi.</text>\n</svg>"
    },
    {
      "tur": "royxat",
      "sarlavha": "Domen zonalari nimani bildiradi?",
      "tushuntirish": "Domenning oxirgi qismi (zona) sayt qanday tashkilotga tegishli ekanini ko'rsatadi.",
      "elementlar": [
        {
          "belgi": "🇺🇿",
          "nom": ".uz",
          "izoh": "O'zbekiston saytlari"
        },
        {
          "belgi": "🏢",
          "nom": ".com",
          "izoh": "Tijorat tashkilotlari (eng ko'p)"
        },
        {
          "belgi": "🏛️",
          "nom": ".gov",
          "izoh": "Davlat organlari"
        },
        {
          "belgi": "🎓",
          "nom": ".edu",
          "izoh": "Ta'lim muassasalari"
        },
        {
          "belgi": "🤝",
          "nom": ".org",
          "izoh": "Nodavlat tashkilotlar"
        },
        {
          "belgi": "🌐",
          "nom": ".net",
          "izoh": "Tarmoq xizmatlari"
        }
      ],
      "izoh": "Maktab sayti ko'pincha <code>.edu</code> yoki <code>.uz</code> zonasida bo'ladi &mdash; bu ishonchlilik belgilaridan biri."
    },
    {
      "tur": "qadam",
      "sarlavha": "Saytni ochganingizda nima bo'ladi?",
      "tushuntirish": "Havolani bosgandan sahifa ochilguncha olti qadam bajariladi &mdash; ko'pchiligi 1 soniyadan kam vaqt oladi.",
      "elementlar": [
        {
          "nom": "Domen DNS dan so'raladi",
          "izoh": "Brauzer: \"maktab.uz qaysi IP?\""
        },
        {
          "nom": "IP manzil olinadi",
          "izoh": "DNS javob qaytaradi: 185.217.131.5"
        },
        {
          "nom": "Serverga so'rov yuboriladi",
          "izoh": "HTTP/HTTPS protokoli orqali"
        },
        {
          "nom": "Server javob tayyorlaydi",
          "izoh": "HTML, rasm, uslub fayllari"
        },
        {
          "nom": "Ma'lumot paketlarga bo'linadi",
          "izoh": "Har bir paket alohida yo'l bilan boradi"
        },
        {
          "nom": "Brauzer sahifani yig'adi",
          "izoh": "Paketlar birlashtirilib, ekranga chiqariladi"
        }
      ],
      "izoh": "Sahifa ochilmaganda muammo shu zanjirning biror joyida bo'ladi: DNS, internet aloqasi yoki server."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Domen va Hosting &mdash; farqi nimada?",
      "tushuntirish": "Bu ikki xizmat ko'pincha birga sotiladi, lekin ular butunlay boshqa narsa.",
      "ustunlar": [
        {
          "belgi": "🏷️",
          "sarlavha": "Domen",
          "turi": "brand",
          "royxat": [
            "Bu <b>nom</b>: maktab.uz",
            "Yillik to'lov qilinadi",
            "Registrator orqali band qilinadi",
            "Nomlanishi <b>noyob</b> bo'lishi kerak"
          ]
        },
        {
          "belgi": "🏠",
          "sarlavha": "Hosting",
          "turi": "yaxshi",
          "royxat": [
            "Bu <b>joy</b>: sayt fayllari turadigan server",
            "Oylik yoki yillik to'lov",
            "Disk hajmi va tezligi bor",
            "Bir hostingda bir necha domen bo'lishi mumkin"
          ]
        }
      ],
      "izoh": "Misol: <b>domen</b> &mdash; uyning manzili, <b>hosting</b> &mdash; o'sha uyning o'zi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Hosting turlari",
      "tushuntirish": "Ehtiyojga qarab tanlanadi. Maktab loyihasi uchun ko'p narsa kerak emas.",
      "ustunlar": [
        {
          "belgi": "🆓",
          "sarlavha": "Bepul hosting",
          "royxat": [
            "Reja uchun mos",
            "Reklama qo'shilishi mumkin",
            "Tezlik past",
            "Domen nomi g'alati bo'ladi"
          ]
        },
        {
          "belgi": "💻",
          "sarlavha": "Umumiy (shared)",
          "turi": "brand",
          "royxat": [
            "Bir serverda ko'p sayt",
            "Arzon",
            "Kichik saytlar uchun yetarli",
            "Maktab loyihalari uchun mos"
          ]
        },
        {
          "belgi": "⚡",
          "sarlavha": "VPS / ajratilgan",
          "turi": "yaxshi",
          "royxat": [
            "Alohida resurs",
            "Tez va barqaror",
            "Sozlash bilimi kerak",
            "Katta saytlar uchun"
          ]
        }
      ]
    },
    {
      "tur": "royxat",
      "sarlavha": "HTTP va HTTPS farqi",
      "tushuntirish": "Manzil boshidagi harflar &mdash; himoya haqida ogohlantiradi. Bu farqni bilish juda muhim.",
      "elementlar": [
        {
          "belgi": "⚠️",
          "nom": "http://",
          "izoh": "Ma'lumot <b>shifrlanmagan</b> &mdash; oraliqda o'qilishi mumkin"
        },
        {
          "belgi": "🔒",
          "nom": "https://",
          "izoh": "Ma'lumot <b>shifrlangan</b> &mdash; parol va karta xavfsiz"
        },
        {
          "belgi": "🛡️",
          "nom": "Sertifikat",
          "izoh": "HTTPS uchun sayt maxsus sertifikat oladi"
        },
        {
          "belgi": "📅",
          "nom": "Sertifikat muddati",
          "izoh": "Muddati o'tsa, brauzer ogohlantiradi"
        },
        {
          "belgi": "🧾",
          "nom": "Nima shifrlanadi",
          "izoh": "Matn, parol, karta raqami, barcha kiritmalar"
        }
      ],
      "izoh": "Qoida: <b>parol yoki karta kiritadigan saytda doim HTTPS bo'lishi kerak</b>."
    },
    {
      "tur": "oyna",
      "sarlavha": "Brauzerda xavfsizlik belgisi",
      "tushuntirish": "Brauzer manzil satrida sayt xavfsizligi haqida ogohlantiradi. Bu belgilarni o'qishni o'rganing.",
      "oyna": {
        "nom": "Manzil satri va xavfsizlik",
        "manzil": "https://maktab.uz/darslar",
        "ustunlar": [
          "Belgi",
          "Ma'nosi",
          "Nima qilish kerak"
        ],
        "qatorlar": [
          [
            "🔒 Qulf (yopiq)",
            "HTTPS, sertifikat to'g'ri",
            "Xotirjam davom etish mumkin"
          ],
          [
            "ⓘ «i» belgisi",
            "HTTPS, lekin ma'lumot to'liq emas",
            "Parol kiritmaslik yaxshiroq"
          ],
          [
            "⚠️ Diqqat (chizilgan)",
            "Sertifikatda muammo bor",
            "Sahifani yopish"
          ],
          [
            "❌ \"Not secure\"",
            "HTTP &mdash; shifrlanmagan",
            "Parol va karta kiritmaslik"
          ]
        ]
      },
      "izoh": "Brauzer ogohlantirsa &mdash; <b>\"Advanced\" tugmasini bosib o'tish</b> kerak emas. Sahifani yopish to'g'ri."
    },
    {
      "tur": "royxat",
      "sarlavha": "Internet tezligi va trafik birliklari",
      "tushuntirish": "Tezlik va hajm ikki xil o'lchovda aytiladi &mdash; chalkashtirmaslik kerak.",
      "elementlar": [
        {
          "belgi": "📶",
          "nom": "Mbps",
          "izoh": "Tezlik: <b>megabit</b>/sekund (provayder shuni yozadi)"
        },
        {
          "belgi": "📦",
          "nom": "MB/s",
          "izoh": "Fayl tezligi: <b>megabayt</b>/sekund (8 barobar farq)"
        },
        {
          "belgi": "🎬",
          "nom": "Streaming",
          "izoh": "Video uchun 5-25 Mbps yetarli"
        },
        {
          "belgi": "🎮",
          "nom": "O'yinlar",
          "izoh": "Kechikish (ping) muhim &mdash; 20-50 ms yaxshi"
        },
        {
          "belgi": "📊",
          "nom": "Trafik",
          "izoh": "Sarflangan hajm &mdash; GB yoki TB bilan hisoblanadi"
        },
        {
          "belgi": "🏠",
          "nom": "Uy uchun",
          "izoh": "20-50 Mbps &mdash; bir necha qurilma uchun yetarli"
        }
      ],
      "izoh": "<b>100 Mbps</b> &mdash; bu sekundiga taxminan <b>12,5 MB</b> fayl. Provayder raqamini 8 ga bo'lish kerak."
    },
    {
      "tur": "qadam",
      "sarlavha": "O'z saytini internetga joylash",
      "tushuntirish": "Bu tartibni bilsangiz &mdash; loyihangizni dunyoga ko'rsatib bera olasiz.",
      "elementlar": [
        {
          "nom": "Sayt fayllarini tayyorlash",
          "izoh": "HTML, CSS, rasm va boshqa fayllar papkada"
        },
        {
          "nom": "Domen tanlash",
          "izoh": "Noyob va yodda qoladigan nom"
        },
        {
          "nom": "Hosting tanlash",
          "izoh": "Bepul variantdan boshlash mumkin"
        },
        {
          "nom": "Fayllarni yuklash",
          "izoh": "FTP yoki hosting paneli orqali"
        },
        {
          "nom": "DNS ni ulash",
          "izoh": "Domen hosting manziliga yo'naltiriladi"
        },
        {
          "nom": "Tekshirish",
          "izoh": "Sayt ochilishini va telefonda ko'rinishini tekshirish"
        }
      ],
      "izoh": "O'quv loyihalari uchun bepul xizmatlar yetarli: GitHub Pages, Netlify, Vercel."
    },
    {
      "tur": "ikonka",
      "sarlavha": "Internet bilan bog'liq kim ishlaydi?",
      "tushuntirish": "Sayt ko'rinishi ortida butun bir jamoa va xizmatlar bor.",
      "elementlar": [
        {
          "belgi": "📡",
          "nom": "Provayder",
          "izoh": "Internetni uyga yetkazadi"
        },
        {
          "belgi": "🏷️",
          "nom": "Registrator",
          "izoh": "Domen nomini ro'yxatdan o'tkazadi"
        },
        {
          "belgi": "🏠",
          "nom": "Hosting kompaniyasi",
          "izoh": "Serverda joy beradi"
        },
        {
          "belgi": "📖",
          "nom": "DNS xizmati",
          "izoh": "Nomlarni IP ga aylantiradi"
        },
        {
          "belgi": "🧑‍💻",
          "nom": "Veb-dasturchi",
          "izoh": "Saytni yaratadi"
        },
        {
          "belgi": "🛠️",
          "nom": "Administrator",
          "izoh": "Sayt ishlashini ta'minlaydi"
        }
      ],
      "izoh": "Kichik loyihalarda bitta odam bir necha vazifani bajaradi. Katta saytlarda &mdash; alohida mutaxassislar."
    }
  ],

  amaliy: [
    "Brauzerda <code>Ctrl + Shift + I</code> (yoki F12) bosib, <b>Network</b> bo'limini oching va birorta saytni yangilang. So'rovlar ro'yxatini ko'ring.",
    "Shu ro'yxatdan bitta so'rovni tanlab, uning <b>status kodini</b> va <b>vaqtini</b> yozib oling.",
    "<code>cmd</code> da <code>nslookup edu.uz</code> va <code>nslookup google.com</code> buyruqlarini bajaring, IP manzillarni daftarga yozing.",
    "<code>tracert google.com</code> buyrug'ini bajaring va nechta qadam (hop) o'tganini sanang.",
    "<code>ipconfig /all</code> orqali o'z kompyuteringizning IP manzili, shlyuzi (gateway) va DNS serverini aniqlang.",
    "Kompyuteringizning IP manzilini toping (CMD da <code>ipconfig</code> buyrug'i) va natijani daftaringizga yozib oling.",
    "Har qanday saytga kirib, brauzer manzil qatoridagi qulf belgisini bosib, sertifikat ma'lumotlarini ko'ring.",
  ],

  uyga: [
    {
      "savol": "Internet ishlashi uchun kerak bo'ladigan 6 ta narsani sanang va har birining vazifasini yozing.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th>Narsa</th><th>Vazifasi</th></tr></thead><tbody><tr><td>IP manzil</td><td>Qurilmaning tarmoqdagi raqami</td></tr><tr><td>Domen</td><td>IP o'rniga yodda qoladigan nom</td></tr><tr><td>DNS</td><td>Domenni IP ga aylantiradi</td></tr><tr><td>Hosting</td><td>Sayt fayllari turgan server</td></tr><tr><td>Protokol (HTTP/HTTPS)</td><td>Ma'lumot almashish qoidalari</td></tr><tr><td>Router va provayder</td><td>Qurilmani tarmoqqa ulaydi</td></tr></tbody></table>"
    },
    {
      "savol": "IP manzil nima? <b>Lokal</b> va <b>global</b> IP farqini misol bilan tushuntiring.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<p><b>IP manzil</b> &mdash; qurilmaning tarmoqdagi manzili. U nuqta bilan ajratilgan sonlardan iborat: <code>192.168.1.15</code>.</p><ul><li><b>Lokal IP</b> &mdash; uy yoki maktab tarmog'i ichida ishlaydi (<code>192.168.x.x</code>). Internetda ko'rinmaydi.</li><li><b>Global IP</b> &mdash; provayder beradi. Shu manzil orqali siz internetda ko'rinasiz.</li></ul><p>Misol: uy manzili &mdash; kvartira raqami (lokal), shahar va ko'cha nomi esa &mdash; tashqi manzil (global).</p>"
    },
    {
      "savol": "DNS nima qiladi? Chizma ko'rinishida tushuntiring.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<pre><code>SIZ: maktab.uz        DNS SERVER         JAVOB\n     |                    |                |\n     +--- \"maktab.uz?\" --> |                |\n                          +-- izlaydi ---- |\n                          |                |\n     &lt;---- 185.217.131.5 -----------------+\n     |\n  brauzer shu IP ga ulanadi va sahifani oladi</code></pre><p><b>DNS</b> &mdash; internetning \"telefon daftari\": domen nomini IP manzilga aylantiradi. Buni siz sezmaysiz &mdash; soniyaning ulushida bo'ladi.</p>"
    },
    {
      "savol": "<b>Domen</b> va <b>hosting</b> farqini misol bilan tushuntiring.",
      "tezlik": "Taxminiy vaqt: 8 daqiqa",
      "javob": "<table class=\"reja-table\"><thead><tr><th></th><th>Domen</th><th>Hosting</th></tr></thead><tbody><tr><td>Nima</td><td>Nom (manzil)</td><td>Joy (server)</td></tr><tr><td>Misol</td><td><code>maktab.uz</code></td><td>Fayllar turgan server</td></tr><tr><td>To'lov</td><td>Yillik</td><td>Oylik/yillik</td></tr><tr><td>Noyoblik</td><td>Butun dunyoda noyob</td><td>Bir serverda ko'p sayt bo'lishi mumkin</td></tr></tbody></table><p>O'xshatish: <b>domen</b> &mdash; uyning manzili, <b>hosting</b> &mdash; o'sha uyning o'zi.</p>"
    },
    {
      "savol": "Domen zonalarini yozing (<code>.uz</code>, <code>.com</code>, <code>.edu</code>, <code>.gov</code>, <code>.org</code>, <code>.net</code>) va har biriga misol keltiring.",
      "tezlik": "Taxminiy vaqt: 7 daqiqa",
      "javob": "<ul><li><code>.uz</code> &mdash; O'zbekiston saytlari (masalan, davlat portali);</li><li><code>.com</code> &mdash; tijorat tashkilotlari (onlayn do'konlar);</li><li><code>.edu</code> &mdash; ta'lim muassasalari (universitetlar);</li><li><code>.gov</code> &mdash; davlat organlari;</li><li><code>.org</code> &mdash; nodavlat tashkilotlar;</li><li><code>.net</code> &mdash; tarmoq xizmatlari.</li></ul><p>Maktab sayti <code>.edu</code> yoki <code>.uz</code> zonasida bo'lsa &mdash; bu ishonchlilik belgilaridan biri.</p>"
    },
    {
      "savol": "Sayt ochilganda nima bo'ladi? 6 ta qadamni ketma-ket yozing.",
      "tezlik": "Taxminiy vaqt: 10 daqiqa",
      "javob": "<ol><li>Domen <b>DNS</b> dan so'raladi (\"maktab.uz qaysi IP?\");</li><li>DNS <b>IP manzilni</b> qaytaradi (masalan, 185.217.131.5);</li><li>Brauzer serverga <b>so'rov yuboradi</b> (HTTPS orqali);</li><li>Server javob <b>tayyorlaydi</b> (HTML, rasm, uslub fayllari);</li><li>Ma'lumot <b>paketlarga</b> bo'linib yuboriladi;</li><li>Brauzer paketlarni yig'ib, <b>sahifani ko'rsatadi</b>.</li></ol>"
    },
    {
      "savol": "Qo'shimcha (ixtiyoriy): <b>HTTP</b> va <b>HTTPS</b> farqini tushuntiring va brauzerdagi xavfsizlik belgilarini yozing.",
      "tezlik": "Taxminiy vaqt: 9 daqiqa",
      "javob": "<ul><li><b>http://</b> &mdash; ma'lumot <em>shifrlanmagan</em>, oraliqda o'qilishi mumkin;</li><li><b>https://</b> &mdash; ma'lumot <em>shifrlangan</em>, parol va karta xavfsiz.</li></ul><p><b>Brauzer belgilari:</b></p><table class=\"reja-table\"><thead><tr><th>Belgi</th><th>Ma'nosi</th></tr></thead><tbody><tr><td>🔒 yopiq qulf</td><td>HTTPS, sertifikat to'g'ri &mdash; xavfsiz</td></tr><tr><td>«i» belgisi</td><td>HTTPS, lekin ma'lumot to'liq emas</td></tr><tr><td>⚠️ ogohlantirish</td><td>Sertifikatda muammo &mdash; sahifani yopish kerak</td></tr><tr><td>«Not secure»</td><td>HTTP &mdash; parol kiritmaslik kerak</td></tr></tbody></table>"
    }
  ],

  test: [
    {
      savol: "Domen nomini IP manzilga aylantiruvchi xizmat qaysi?",
      variantlar: ["HTTP", "DNS", "FTP", "HTML"],
      togri: 1,
      izoh: "DNS (Domain Name System) domen nomlarini IP manzillarga aylantiradi.",
    },
    {
      savol: "Qaysi port HTTPS uchun ishlatiladi?",
      variantlar: ["80", "21", "443", "25"],
      togri: 2,
      izoh: "HTTPS &mdash; 443-port, HTTP &mdash; 80-port, FTP &mdash; 21, SMTP &mdash; 25.",
    },
    {
      savol: "HTTP status kodi <b>404</b> nimani bildiradi?",
      variantlar: [
        "Hammasi yaxshi",
        "Sahifa topilmadi",
        "Serverda xatolik",
        "Ruxsat yo'q",
      ],
      togri: 1,
      izoh: "404 &mdash; sahifa topilmadi. Manzil xato yozilgan yoki sahifa o'chirilgan.",
    },
    {
      savol: "IP manzil <code>192.168.0.104</code> qanday turdagi manzil?",
      variantlar: ["Global", "Lokal (ichki)", "IPv6", "DNS"],
      togri: 1,
      izoh: "192.168.x.x &mdash; lokal (ichki) manzil. U faqat uy yoki maktab tarmog'i ichida ishlaydi.",
    },
    {
      savol: "Hosting nima uchun kerak?",
      variantlar: [
        "Saytni tezroq yozish uchun",
        "Sayt fayllarini 24 soat ishlaydigan serverda saqlash uchun",
        "Parolni saqlash uchun",
        "Rasm chizish uchun",
      ],
      togri: 1,
      izoh: "Hosting &mdash; sayt doim ochiq turishi uchun fayllar saqlanadigan server.",
    },
    {
      savol: "Qaysi holatda saytga parol kiritish <b>xavfli</b>?",
      variantlar: [
        "Manzil https:// bilan boshlanganda",
        "Brauzer qulf belgisini ko'rsatganda",
        "Manzil http:// bilan boshlanganda",
        "Sayt tanish bo'lganda",
      ],
      togri: 2,
      izoh: "HTTP da ma'lumot shifrlanmaydi &mdash; parolni ushlab qolish mumkin.",
    },
  ],

  lugat: [
    { soz: "IP manzil", izoh: "Qurilmaning Internetdagi raqamli manzili." },
    { soz: "Domen", izoh: "IP manzilning o'qishga qulay nomi." },
    { soz: "DNS", izoh: "Domen nomini IP manzilga aylantiruvchi xizmat." },
    { soz: "Hosting", izoh: "Sayt fayllari saqlanadigan server." },
    { soz: "Server", izoh: "So'rovlarga javob qaytaruvchi kompyuter." },
    { soz: "Mijoz (client)", izoh: "So'rov yuboruvchi: brauzer, ilova, telefon." },
    { soz: "HTTP / HTTPS", izoh: "Mijoz va server o'rtasidagi muloqot protokollari." },
    { soz: "SSL / TLS", izoh: "Ma'lumotni shifrlaydigan xavfsizlik texnologiyasi." },
    { soz: "Status kod", izoh: "Server javobining holati (200, 404, 500)." },
    { soz: "Port", izoh: "Serverdagi xizmatning raqamli manzili (80, 443)." },
    { soz: "Bandwidth", izoh: "Bir vaqtda uzatiladigan ma'lumot hajmi (trafik)." },
    { soz: "Uptime", izoh: "Serverning ishlab turish foizi (99.9% - yaxshi)." },
  ],

  xatolar: [
    "IP manzilni domen bilan aralashtirish &mdash; IP raqam, domen nom.",
    "HTTP va HTTPS ni bir xil deb o'ylash &mdash; HTTPS shifrlanadi, HTTP yo'q.",
    "404 xatosini \"sayt buzilgan\" deb tushunish &mdash; aslida manzil xato.",
    "Saytni o'z kompyuteringizda \"hosting\" deb hisoblash &mdash; kompyuter o'chsa sayt ishlamaydi.",
    "Status kod 200 ni nazorat qilmaslik &mdash; javob kelgan bo'lsa ham xato bo'lishi mumkin.",
    "Domen zonasini (.uz, .com) e'tiborsiz qoldirish &mdash; u saytning qaysi davlatga tegishli ekanini bildiradi.",
    "Kesh (cache) nima ekanini bilmaslik &mdash; sahifa yangilanmaganda Ctrl + F5 bosish kerak.",
  ],

  keyingi:
    "Keyingi darsda <b>bulutli xizmatlar va onlayn hamkorlik vositalari</b> mavzusi boshlanadi (3 darsdan iborat). Google Drive, OneDrive, Dropbox, Google Docs/Sheets/Slides, fayllarni ulashish va ruxsatlar, jamoa bo'lib onlayn ishlash vositalari (Trello, Google Tasks) &mdash; hammasini o'rganamiz. Bugungi hosting va server haqidagi bilim keyingi darsda bevosita kerak bo'ladi.",
});
