/* 19-dars: Kiberxavfsizlik va shaxsiy ma'lumotlarni himoya qilish asoslari */

AVX.dars({
  id: "cs8-019",
  sarlavha: "Kiberxavfsizlik va shaxsiy ma'lumotlarni himoya qilish asoslari",
  kiritish:
    "6-darsda biz antivirus va kompyuter xavfsizligi bilan tanishgan edik. Bugun mavzuni chuqurlashtiramiz: gap <b>shaxsiy ma'lumotlarimiz</b> haqida. Telefon raqami, manzil, parollar, hujjatlar &mdash; bularning hammasi onlayn muhitda <em>qiymatga ega</em>. Bugun biz kuchli parol yasashni, ikki bosqichli tasdiqlashni (2FA), fishing xabarlarini tanishni, Windows qurilmasini tekshirishni va zaxira nusxa tashkil qilishni amalda o'rganamiz.",

  maqsad: [
    "Shaxsiy ma'lumotlar nima ekanligini va nima uchun qimmatli ekanligini tushunish.",
    "Kuchli parol yasash va ularni xavfsiz saqlash usullarini o'zlashtirish.",
    "Ikki bosqichli tasdiqlash (2FA) ni yoqish va uning foydasini bilish.",
    "Fishing (firibgarlik) xabarlarini va xavfli havolalarni tanish.",
    "Windows qurilmasini tekshirish va zaxira nusxani to'g'ri tashkil qilish.",
  ],

  natija: [
    "Kuchli parol yaratadi va uni bir necha joyda takrorlamaydi.",
    "Parollarni menejer yoki xavfsiz usulda saqlaydi.",
    "Asosiy akkauntlarida 2FA ni yoqadi.",
    "Fishing xabarini 4-5 belgi bo'yicha aniqlaydi.",
    "Windows Defender holatini tekshiradi va zaxira nusxa oladi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: IT yo'nalishlari va xavfsizlik o'rni."],
    ["5-16 daq", "Mentor tushuntirishi", "Shaxsiy ma'lumot nima va u nega qimmatli?"],
    ["16-30 daq", "Parollar", "Kuchli parol, takrorlanmaslik, menejer, xeshlash."],
    ["30-42 daq", "2FA va akkaunt himoyasi", "Ikki bosqichli tasdiqlash, tiklash usullari."],
    ["42-56 daq", "Fishing va firibgarlik", "Xabar va havolalarni tahlil qilish."],
    ["56-70 daq", "Amaliyot: qurilmani tekshirish", "Defender, firewall, tarmoq, zaxira nusxa."],
    ["70-77 daq", "Mustaqil ish va uyga vazifa", "Xavfsizlik checklist ini to'ldirish."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Shaxsiy ma'lumot - bu qiymat",
      matn: [
        "Nega birovning telefon raqami, manzili yoki pochta paroli kerak bo'ladi? Chunki ulardan <em>foyda</em> olish mumkin: akkauntni egallab olish, pul o'tkazish, nomidan xabar yuborish, hujjat tayyorlash.",
        "Shaxsiy ma'lumotlar bir necha darajaga bo'linadi. <b>Ochiq</b>: ism, sinf, qiziqishlar. <b>Maxfiy</b>: telefon, manzil, tug'ilgan sana. <b>O'ta maxfiy</b>: parollar, bank kartasi raqami, SMS kodlari, pasport ma'lumotlari.",
        "Eng muhim qoida: <b>o'ta maxfiy</b> ma'lumot hech qachon begonaga aytilmaydi &mdash; hatto o'zini \"bank xodimi\", \"o'qituvchi\" yoki \"qo'llab-quvvatlash xizmati\" deb tanishtirsa ham. Bank va davlat tashkilotlari SMS kodni hech qachon so'ramaydi.",
      ],
    },
    {
      sarlavha: "2. Parol - uy kaliti",
      matn: [
        "Eng ko'p uchraydigan parollar: <em>123456</em>, <em>parol</em>, <em>qwerty</em>, <em>1q2w3e</em>, tug'ilgan sana. Bunday parolni dastur bir necha sekundda topadi.",
        "Kuchli parol uzun (12+ belgi), katta va kichik harflar, raqam va belgidan iborat. Eng yaxshi usul &mdash; <b>parol iborasi</b>: bir-biriga bog'lanmagan so'zlardan jumla yasash. Masalan: <em>Kitob!Yulduz#42Daryo</em>.",
        "Ikkinchi qoida: <b>bir parol &mdash; bir akkaunt</b>. Bitta parol o'g'irlansa, hujumchi boshqa akkauntlarga ham kirib ko'radi. Buni yodda saqlash qiyin &mdash; shuning uchun parol menejeridan foydalaniladi.",
      ],
    },
    {
      sarlavha: "3. 2FA - ikkinchi qulf",
      matn: [
        "Parol o'g'irlangan bo'lsa ham, akkauntga kirishni to'xtatadigan qo'shimcha himoya &mdash; <b>ikki bosqichli tasdiqlash</b> (2FA).",
        "Ishlash tartibi: parolni kiritdingiz &mdash; tizim ikkinchi dalil so'raydi: telefon ilovasidagi 6 xonali kod, SMS kod yoki maxsus apparat kalit. Hujumchida parol bor, lekin ikkinchi dalil yo'q.",
        "Eng ishonchlisi &mdash; <b>ilova orqali kod</b> (Google Authenticator, Microsoft Authenticator) yoki apparat kalit. SMS kod ham yaxshi, lekin SIM kartani almashtirish orqali aldash holatlari bo'lgan.",
      ],
    },
    {
      sarlavha: "4. Fishing: ishonchga kirish san'ati",
      matn: [
        "<b>Fishing</b> &mdash; sizni aldab, maxfiy ma'lumotni o'zingiz kiritishga majburlash usuli. Hujumchi o'zini tanish tashkilot qilib ko'rsatadi: bank, yetkazib berish xizmati, maktab, ijtimoiy tarmoq.",
        "Klassik belgilar: <em>shoshilinch</em> ohang (\"hisobingiz 24 soatda bloklanadi\"), havola ustiga bosilsa boshqa manzil chiqadi, imlo xatolari, umumiy murojaat (\"Hurmatli mijoz\"), g'alati jo'natuvchi manzil.",
        "Eng oddiy himoya: <b>havolaga bosmang</b>. Ilova yoki brauzer xatcho'pini o'zingiz oching va holatni rasmiy kanaldan tekshiring. Hech kimga SMS kodni aytmang &mdash; qancha ishontirsa ham.",
      ],
    },
    {
      sarlavha: "5. Zaxira nusxa - eng arzon sug'urta",
      matn: [
        "Kompyuter buziladi, fayl o'chiriladi, virus shifrlab qo'yadi. Bunday holatda odamni <em>faqat zaxira</em> qutqaradi.",
        "Qoida <b>3-2-1</b>: kamida <b>3</b> nusxa, <b>2</b> xil muhitda (masalan kompyuter va tashqi disk), <b>1</b> nusxa boshqa joyda (bulut yoki boshqa xona).",
        "Zaxira nusxani <em>tekshirish</em> ham kerak: nusxa ochiladimi, fayllar to'liqmi. Tekshirilmagan zaxira &mdash; zaxira emas, shunchaki umid.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Shaxsiy ma'lumotlar darajalari",
      matn: [
        "Qaysi ma'lumotni kimga aytish mumkinligini bilish &mdash; xavfsizlikning birinchi qadami.",
      ],
      jadval: [
        ["Daraja", "Nimalar kiradi", "Kimga aytish mumkin", "Xavf"],
        ["Ochiq", "Ism, sinf, sevimli fan", "Do'stlar, sinfdoshlar", "Deyarli yo'q"],
        ["Maxfiy", "Telefon, manzil, tug'ilgan sana", "Faqat ishonchli, zarurat bo'lganda", "Bezovta qilish, firibgarlik"],
        ["O'ta maxfiy", "Parollar, SMS kodlar, bank kartasi", "Hech kimga", "Akkaunt va pul yo'qolishi"],
        ["Maxsus", "Pasport, tibbiy ma'lumotlar", "Faqat rasmiy tashkilotlarga", "Qonuniy va shaxsiy oqibatlar"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Oltin qoida",
        matn: "<b>SMS kodni hech kimga aytmang.</b> Bank, davlat xizmati yoki \"qo'llab-quvvatlash\" xizmati ham kodni so'ramaydi. Kodni so'ragan odam &mdash; firibgar.",
      },
    },
    {
      sarlavha: "2. Parol kuchi va takrorlanmasligi",
      matn: [
        "Parolning kuchi uning <b>uzunligi</b> va <b>xilma-xilligi</b> bilan belgilanadi. Quyidagi jadval turli parollarni solishtiradi.",
      ],
      jadval: [
        ["Parol turi", "Misol", "Taxminiy sinish vaqti", "Baho"],
        ["Faqat raqam (5 belgi)", "12345", "Bir zumda", "Juda zaif"],
        ["So'z (5 belgi)", "parol", "Bir zumda", "Juda zaif"],
        ["Klaviatura qatori", "qwerty123", "Bir necha soniya", "Zaif"],
        ["So'z + yil", "maktab2026", "Bir necha daqiqa", "O'rtacha"],
        ["Uzun ibora", "Kitob!Yulduz#42Daryo", "Asrlar", "Kuchli"],
        ["Tasodifiy uzun", "x7Kp!9mQ2#Ld8Rt", "Asrlar", "Kuchli"],
      ],
    },
    {
      sarlavha: "3. Akkauntni himoyalash choralari",
      matn: [
        "Har bir akkaunt uchun bajarilishi kerak bo'lgan amallar. Muhimlik tartibida yozilgan.",
      ],
      jadval: [
        ["Chora", "Nima qiladi", "Muhimlik"],
        ["Uzun va noyob parol", "Parolni topishni qiyinlashtiradi", "Juda yuqori"],
        ["2FA yoqish", "Parol o'g'irlansa ham kirishni to'xtatadi", "Juda yuqori"],
        ["Tiklash manzilini tekshirish", "Akkauntni qaytarib olish imkonini beradi", "Yuqori"],
        ["Seanslarni ko'rib chiqish", "Begona qurilmani chiqarib tashlaydi", "Yuqori"],
        ["Ilova ruxsatlarini kamaytirish", "Keraksiz dasturga kirish huquqi berilmaydi", "O'rta"],
        ["Maxfiy sozlamalar va xabarnomalar", "Shubhali kirishni darhol bildiradi", "O'rta"],
      ],
    },
    {
      sarlavha: "4. Fishing belgilarini aniqlash",
      matn: [
        "Shubhali xabar yoki havolani tekshirish tartibi. Kamida 2 belgi bo'lsa &mdash; ehtiyot bo'lish kerak.",
      ],
      jadval: [
        ["Belgi", "Misol", "Nima qilish kerak"],
        ["Shoshilinch ohang", "\"24 soatda bloklanadi!\"", "Shoshilmang, rasmiy kanaldan tekshiring"],
        ["G'alati domen", "bank-uz-security.com", "Rasmiy manzilni qo'lda yozing"],
        ["Umumiy murojaat", "\"Hurmatli mijoz\"", "Shubhali belgi - ismingizni bilmayapti"],
        ["Imlo xatolari", "\"Sizning xisobingiz\"", "Rasmiy xabarda bunday bo'lmaydi"],
        ["Kod so'rash", "\"SMS kodni yuboring\"", "Hech qachon yubormang"],
        ["To'lov talab qilish", "\"Yukni olish uchun 50 000 so'm\"", "Rasmiy kanaldan tekshiring"],
      ],
    },
    {
      sarlavha: "5. Windows qurilmasini tekshirish",
      matn: [
        "Qurilma xavfsizligi uchta narsadan boshlanadi: himoya dasturi, firewall va yangilanishlar.",
      ],
      jadval: [
        ["Bo'lim", "Nima tekshiriladi", "Qanday yoqiladi"],
        ["Virusdan himoya", "Real vaqt himoyasi yoqilganmi", "Windows Security - Virus &amp; threat protection"],
        ["Firewall", "Tarmoq himoyasi holati", "Windows Security - Firewall &amp; network protection"],
        ["Yangilanishlar", "Tizim so'nggi holatdami", "Settings - Windows Update"],
        ["Foydalanuvchilar", "Ortiqcha admin hisoblar yo'qmi", "net user, net localgroup administrators"],
        ["Diskni shifrlash", "Qurilma o'g'irlansa himoya", "BitLocker"],
        ["Zaxira", "Fayllar nusxasi bormi", "File History yoki robocopy"],
      ],
    },
    {
      sarlavha: "6. Zaxira nusxa va zaxira rejasi",
      matn: [
        "Zaxira nusxa tartibi. Eng muhim savol: <em>qaysi fayllarni</em> saqlash kerak?",
      ],
      jadval: [
        ["Nima", "Nega muhim", "Qanchalik tez-tez"],
        ["Maktab hujjatlari", "Tiklanishi qiyin", "Har hafta"],
        ["Loyiha kodlari", "Katta mehnat natijasi", "Har kuni (GitHub)"],
        ["Rasmlar va video", "Qayta yaratib bo'lmaydi", "Har oy"],
        ["Parollar bazasi", "Akkauntlarni tiklaydi", "Har o'zgarishda"],
        ["Brauzer xatcho'plari", "Qulaylik", "Har oy"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "royxat",
      "sarlavha": "Kuchli parol qoidalari",
      "tushuntirish": "Parol &mdash; hisobingizning birinchi qulfi. Uni buzish qanchalik qiyin bo'lsa, ma'lumotingiz shunchalik xavfsiz.",
      "elementlar": [
        {
          "belgi": "📏",
          "nom": "Kamida 12 belgi",
          "izoh": "Uzunlik &mdash; eng muhim omil. 8 belgidan boshlab har bir qo'shimcha belgi vaqtni keskin oshiradi"
        },
        {
          "belgi": "🔠",
          "nom": "Harflar aralash",
          "izoh": "Katta va kichik harflar birga bo'lsin: <b>Q</b>uyosh, <b>m</b>aktab"
        },
        {
          "belgi": "🔢",
          "nom": "Raqamlar",
          "izoh": "Kamida 2-3 raqam qo'shing: 2026, 47"
        },
        {
          "belgi": "✳️",
          "nom": "Maxsus belgilar",
          "izoh": "@ # ! $ % kabi belgilar parolni ancha kuchaytiradi"
        },
        {
          "belgi": "🚫",
          "nom": "Shaxsiy ma'lumot yo'q",
          "izoh": "Ism, tug'ilgan sana, telefon raqami parolda bo'lmasin"
        },
        {
          "belgi": "🔁",
          "nom": "Har saytga alohida",
          "izoh": "Bitta parol ochilsa &mdash; qolgan hisoblar ham xavf ostida qoladi"
        }
      ],
      "izoh": "Misol: <code>Quyosh@2026#Maktab</code> &mdash; uzun, aralash va eslab qolish oson."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Kuchsiz va kuchli parollar",
      "tushuntirish": "Bir xil ko'rinadigan parollar butunlay har xil himoya beradi. Vaqt &mdash; parolning kuchini ko'rsatuvchi o'lchov.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Tez topiladi",
          "royxat": [
            "<code>123456</code> &mdash; bir zumda",
            "<code>parol2026</code> &mdash; 2 soniya",
            "<code>Kallibek2010</code> &mdash; 3 daqiqa"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Topib bo'lmaydi",
          "royxat": [
            "<code>Quyosh@2026#Maktab</code> &mdash; million yillar",
            "<code>Mening-Kitobim-3!Sevimli</code> &mdash; hisoblab bo'lmaydi"
          ]
        }
      ],
      "izoh": "Parolni hech kimga aytmang va qog'ozga yozib monitorga yopishtirmang."
    },
    {
      "tur": "sxema",
      "sarlavha": "Parol bazada qanday saqlanadi",
      "tushuntirish": "Yaxshi tizim parolingizni ochiq matnda saqlamaydi. U parolni bir tomonlama shifrlaydi &mdash; bunga <b>xesh</b> deyiladi.",
      "svg": "<svg viewBox=\"0 0 780 250\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Xesh sxemasi\">\n  <rect x=\"1\" y=\"1\" width=\"778\" height=\"248\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <g font-size=\"14\" text-anchor=\"middle\">\n    <rect x=\"36\" y=\"76\" width=\"196\" height=\"92\" rx=\"12\" fill=\"#16203a\" stroke=\"#4f8cff\"/>\n    <text x=\"134\" y=\"108\" fill=\"#e8eeff\" font-weight=\"700\">Foydalanuvchi paroli</text>\n    <text x=\"134\" y=\"132\" fill=\"#9fb2d6\" font-size=\"12\">Quyosh@2026#Maktab</text>\n\n    <rect x=\"292\" y=\"76\" width=\"196\" height=\"92\" rx=\"12\" fill=\"#16203a\" stroke=\"#22d3a6\"/>\n    <text x=\"390\" y=\"108\" fill=\"#e8eeff\" font-weight=\"700\">Xesh funksiyasi</text>\n    <text x=\"390\" y=\"132\" fill=\"#9fb2d6\" font-size=\"12\">bir tomonlama shifrlash</text>\n\n    <rect x=\"548\" y=\"76\" width=\"196\" height=\"92\" rx=\"12\" fill=\"#16203a\" stroke=\"#f0b429\"/>\n    <text x=\"646\" y=\"108\" fill=\"#e8eeff\" font-weight=\"700\">Bazadagi qiymat</text>\n    <text x=\"646\" y=\"132\" fill=\"#9fb2d6\" font-size=\"12\">a3f9c21b7e04...</text>\n  </g>\n  <g stroke=\"#4f8cff\" stroke-width=\"2.4\" fill=\"none\">\n    <path d=\"M234 122 h52\"/><path d=\"M278 114 l8 8 -8 8\"/>\n    <path d=\"M490 122 h52\"/><path d=\"M534 114 l8 8 -8 8\"/>\n  </g>\n  <g stroke=\"#e0453f\" stroke-width=\"2\" stroke-dasharray=\"6 5\" fill=\"none\">\n    <path d=\"M646 176 v20\"/><path d=\"M638 188 l8 10 8 -10\"/>\n  </g>\n  <text x=\"646\" y=\"222\" fill=\"#e0453f\" font-size=\"12\" text-anchor=\"middle\">teskari qaytarish mumkin emas</text>\n</svg>",
      "izoh": "Shuning uchun sayt egasi ham sizning parolingizni <b>bilmaydi</b> &mdash; u faqat xeshni solishtiradi."
    },
    {
      "tur": "qadam",
      "sarlavha": "2FA: ikki bosqichli tasdiqlash",
      "tushuntirish": "Parol o'g'irlansa ham hisobga kirib bo'lmasligi uchun ikkinchi qulf qo'yiladi.",
      "elementlar": [
        {
          "nom": "Parol kiritiladi",
          "izoh": "Birinchi qadam &mdash; oddiy parol"
        },
        {
          "nom": "Tizim kod so'raydi",
          "izoh": "Telefonga yoki ilovaga 6 xonali kod keladi"
        },
        {
          "nom": "Kod kiritiladi",
          "izoh": "Kod 30-60 sekundda eskiradi &mdash; qayta ishlatib bo'lmaydi"
        },
        {
          "nom": "Hisob ochiladi",
          "izoh": "Ikki qulf ham to'g'ri bo'lsagina kirish mumkin"
        }
      ],
      "izoh": "Muhim hisoblarda (pochta, davlat xizmati, bank) 2FA ni <b>albatta</b> yoqing."
    },
    {
      "tur": "royxat",
      "sarlavha": "Shubhali havolani tekshirish: 5 belgi",
      "tushuntirish": "Havolani bosishdan oldin 5 sekund tekshirish &mdash; ko'p muammodan saqlaydi.",
      "elementlar": [
        {
          "belgi": "🔍",
          "nom": "Domen nomi",
          "izoh": "<code>g00gle.com</code> yoki <code>goog1e.com</code> &mdash; harflar almashtirilgan"
        },
        {
          "belgi": "🔒",
          "nom": "HTTPS bormi",
          "izoh": "Manzil <code>https://</code> bilan boshlansin; qulf belgisiga qarang"
        },
        {
          "belgi": "🔢",
          "nom": "IP manzil",
          "izoh": "Havola raqamlar bilan boshlansa (<code>http://185.24...</code>) &mdash; shubhali"
        },
        {
          "belgi": "✂️",
          "nom": "Qisqartirilgan havola",
          "izoh": "<code>bit.ly</code> kabi qisqartmalar ortida nima borligi ko'rinmaydi"
        },
        {
          "belgi": "⚠️",
          "nom": "Ortiqcha belgilar",
          "izoh": "Uzun va tushunarsiz manzil, ko'p chiziqcha va nuqtalar"
        }
      ],
      "izoh": "Shubha bo'lsa &mdash; havolani <b>bosmang</b>. Rasmiy sayt manzilini o'zingiz yozib kiring."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Haqiqiy xabar va fishing xabar",
      "tushuntirish": "Fishing xabarlar odatda shoshiltiradi va shaxsiy ma'lumot so'raydi. Haqiqiy xabar xotirjam va aniq bo'ladi.",
      "ustunlar": [
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Haqiqiy xabar",
          "royxat": [
            "Rasmiy manzildan keladi",
            "Sizni ismingiz bilan chaqiradi",
            "Shoshiltirmaydi, kod so'ramaydi",
            "Kerak bo'lsa ilovaga o'zingiz kirishni aytadi"
          ]
        },
        {
          "turi": "yomon",
          "belgi": "🚨",
          "sarlavha": "Fishing xabar",
          "royxat": [
            "<em>&laquo;Hisobingiz bloklanadi! Darhol bosing!&raquo;</em>",
            "<em>&laquo;Siz yutuq yutdingiz!&raquo;</em>",
            "SMS kodni yoki karta raqamini so'raydi",
            "Imlo xatolari va g'alati domen"
          ]
        }
      ],
      "izoh": "Bank va maktab hech qachon SMS kod yoki karta raqamingizni xat orqali so'ramaydi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Shaxsiy ma'lumotlarning xavf darajasi",
      "tushuntirish": "Har bir ma'lumot bir xil xavfli emas. Eng xavflilarini ochiq joyda hech qachon qoldirmang.",
      "elementlar": [
        {
          "belgi": "🟡",
          "nom": "Ism va familiya",
          "izoh": "O'rtacha xavf &mdash; yolg'on xabar yuborishda ishlatiladi"
        },
        {
          "belgi": "🟠",
          "nom": "Uy manzili, telefon",
          "izoh": "Yuqori xavf &mdash; spam va firibgarlik"
        },
        {
          "belgi": "🟠",
          "nom": "Tug'ilgan sana",
          "izoh": "Yuqori xavf &mdash; parolni tiklashda ishlatiladi"
        },
        {
          "belgi": "🔴",
          "nom": "Pasport ma'lumoti",
          "izoh": "Juda yuqori &mdash; firibgarlik va o'g'irlik xavfi"
        },
        {
          "belgi": "🔴",
          "nom": "Bank karta raqami, CVV",
          "izoh": "Juda yuqori &mdash; pul o'g'irlash mumkin"
        },
        {
          "belgi": "🔴",
          "nom": "Parollar va SMS kodlar",
          "izoh": "Juda yuqori &mdash; hisoblarni egallash yo'li"
        }
      ],
      "izoh": "Qoida oddiy: <b>qizil</b> ma'lumotlarni hech kimga, hech qachon aytmang."
    },
    {
      "tur": "oyna",
      "sarlavha": "Kompyuter himoyasi: nimalar tekshiriladi",
      "tushuntirish": "Xavfsizlik holatini bilish uchun quyidagilarni vaqti-vaqti bilan tekshirib turish kerak.",
      "oyna": {
        "nom": "Himoya holati",
        "ustunlar": [
          "Nima tekshiriladi",
          "Yaxshi holat belgisi"
        ],
        "qatorlar": [
          [
            "Antivirus himoyasi",
            "Yoqilgan, xavf topilmagan"
          ],
          [
            "Real vaqt himoyasi",
            "Yashil, faol"
          ],
          [
            "Firewall",
            "Har uch profil uchun Yoqilgan"
          ],
          [
            "Tizim yangilanishlari",
            "Barchasi o'rnatilgan"
          ],
          [
            "Shubhali dasturlar",
            "Ro'yxat bo'sh"
          ],
          [
            "Administrator hisoblari",
            "Faqat kerakli hisoblar bor"
          ]
        ]
      },
      "izoh": "Windowsda bu ma'lumotlar <b>Windows Security</b> oynasida bir joyda ko'rinadi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Zaxira nusxa: 3-2-1 qoidasi",
      "tushuntirish": "Ma'lumotni yo'qotmaslikning eng ishonchli yo'li &mdash; bir necha joyda nusxa saqlash.",
      "elementlar": [
        {
          "nom": "3 nusxa",
          "izoh": "Asl fayl va ikkita zaxira nusxa"
        },
        {
          "nom": "2 xil joy",
          "izoh": "Masalan: kompyuter diski va tashqi disk"
        },
        {
          "nom": "1 nusxa boshqa joyda",
          "izoh": "Bulut yoki boshqa xonadagi disk &mdash; yong'in yoki o'g'irlikdan himoya"
        },
        {
          "nom": "Muntazam yangilash",
          "izoh": "Har hafta yoki oyda bir marta nusxa yangilanadi"
        }
      ],
      "izoh": "Ransomware yoki disk buzilganda <b>faqat</b> zaxira nusxa qutqaradi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Fayl o'zgarganini xesh bilan aniqlash",
      "tushuntirish": "Xesh &mdash; faylning barmoq izi. Fayl ichidagi bitta belgi o'zgarsa ham xesh butunlay o'zgaradi.",
      "elementlar": [
        {
          "belgi": "📥",
          "nom": "Yuklab olganda",
          "izoh": "Sayt ko'rsatgan xesh bilan solishtiriladi"
        },
        {
          "belgi": "🔎",
          "nom": "Tekshirish",
          "izoh": "Fayl buzilmagan yoki almashtirilmaganini ko'rsatadi"
        },
        {
          "belgi": "✅",
          "nom": "Mos kelsa",
          "izoh": "Fayl ishonchli &mdash; ochish mumkin"
        },
        {
          "belgi": "❌",
          "nom": "Mos kelmasa",
          "izoh": "Fayl o'zgartirilgan &mdash; ochmang, o'chirib tashlang"
        }
      ],
      "izoh": "Katta dasturlarni rasmiy saytdan yuklaganda xeshni solishtirish &mdash; professional odat."
    },
    {
      "tur": "qiyos",
      "sarlavha": "SQL injection: himoyasiz va himoyalangan",
      "tushuntirish": "Sayt formalariga kiritilgan matn tekshirilmasa, hujumchi bazani boshqarishi mumkin.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Himoyasiz",
          "royxat": [
            "Matn to'g'ridan-to'g'ri so'rovga qo'shiladi",
            "Hujumchi so'rovni o'zgartira oladi",
            "Butun jadval o'chirilishi yoki o'g'irlanishi mumkin"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Himoyalangan",
          "royxat": [
            "Ma'lumot <b>parametr</b> sifatida uzatiladi",
            "Kiritilgan matn har doim tekshiriladi",
            "So'rov tuzilishini o'zgartirib bo'lmaydi"
          ]
        }
      ],
      "izoh": "Bu &mdash; backend dasturchining asosiy xavfsizlik qoidalaridan biri."
    },
    {
      "tur": "royxat",
      "sarlavha": "Parolni qayerda saqlash mumkin emas",
      "tushuntirish": "Boshlovchilar ko'p qiladigan xatolar. Har biri hisobni yo'qotishga olib kelishi mumkin.",
      "elementlar": [
        {
          "belgi": "🚫",
          "nom": "Brauzerdagi ochiq fayl",
          "izoh": "Sayt xotirasidagi ma'lumot har qanday skriptga ko'rinadi"
        },
        {
          "belgi": "🚫",
          "nom": "Kod ichida",
          "izoh": "Parolni dastur kodiga yozib qo'yish &mdash; eng katta xato"
        },
        {
          "belgi": "🚫",
          "nom": "Qog'ozda ko'rinadigan joyda",
          "izoh": "Monitorga yopishtirilgan eslatma hammaga ko'rinadi"
        },
        {
          "belgi": "🚫",
          "nom": "Chat va xatlarda",
          "izoh": "Yuborilgan xabar tarixda qoladi"
        },
        {
          "belgi": "✅",
          "nom": "To'g'ri yo'l &mdash; parol menejeri",
          "izoh": "Parollarni shifrlangan holda saqlaydigan maxsus dastur"
        }
      ],
      "izoh": "Parol menejeri &mdash; ko'p parolni yodlashning eng qulay va xavfsiz yo'li."
    },
    {
      "tur": "royxat",
      "sarlavha": "GitHub ga chiqarishdan oldin tekshiruv",
      "tushuntirish": "Loyihani ochiq joyga qo'yishdan oldin ichida maxfiy ma'lumot qolmaganini tekshiring.",
      "elementlar": [
        {
          "belgi": "🔑",
          "nom": "Parol va tokenlar",
          "izoh": "Kod ichida parol, API kalit, token bo'lmasin"
        },
        {
          "belgi": "📞",
          "nom": "Telefon va pochta",
          "izoh": "Haqiqiy ma'lumotlar namuna fayllarda qolmasin"
        },
        {
          "belgi": "💳",
          "nom": "Karta raqamlari",
          "izoh": "Hech qanday to'lov ma'lumoti ochiq bo'lmasin"
        },
        {
          "belgi": "🙈",
          "nom": ".gitignore",
          "izoh": "Maxfiy fayllar kuzatilmaydigan qilib qo'yilgan"
        },
        {
          "belgi": "🔁",
          "nom": "Tarixni tekshirish",
          "izoh": "Eski commit larda ham maxfiy ma'lumot bo'lmasin"
        }
      ],
      "izoh": "Bir marta ochiq joyga tushgan ma'lumot &mdash; <b>abadiy</b> ochiq qoladi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Oylik xavfsizlik ro'yxati",
      "tushuntirish": "Oyiga bir marta shu ro'yxatni ko'rib chiqish &mdash; yaxshi odat.",
      "oyna": {
        "nom": "Xavfsizlik tekshiruvi",
        "qatorlar": [
          "☐ Barcha hisoblarda 2FA yoqilgan",
          "☐ Kuchli parollar ishlatilgan, takrorlanmaydi",
          "☐ Tizim va dasturlar yangilangan",
          "☐ Antivirus va firewall yoqilgan",
          "☐ Muhim fayllardan zaxira nusxa olingan",
          "☐ Shubhali xat va havolalar tekshirilgan",
          "☐ Keraksiz hisoblar o'chirilgan"
        ]
      },
      "izoh": "Ro'yxatni chop etib, har oy belgilab borish mumkin."
    },
    {
      "tur": "royxat",
      "sarlavha": "Shubhali xat kelganda nima qilish kerak",
      "tushuntirish": "Shoshilmaslik &mdash; eng to'g'ri qaror. Ketma-ket 5 amal sizni himoya qiladi.",
      "elementlar": [
        {
          "belgi": "1️⃣",
          "nom": "Havolani bosmang",
          "izoh": "Avval manzilni ko'zdan kechiring"
        },
        {
          "belgi": "2️⃣",
          "nom": "Faylni ochmang",
          "izoh": "Biriktirilgan shubhali faylni yuklamang"
        },
        {
          "belgi": "3️⃣",
          "nom": "Manbani tekshiring",
          "izoh": "Yuboruvchining rasmiy manzilini o'zingiz izlab toping"
        },
        {
          "belgi": "4️⃣",
          "nom": "O'chirib tashlang",
          "izoh": "Javob yozmasdan xatni o'chirish mumkin"
        },
        {
          "belgi": "5️⃣",
          "nom": "Xabar bering",
          "izoh": "Kattalarga yoki o'qituvchiga aytib qo'ying"
        }
      ],
      "izoh": "Uyalib so'ramaslik xatosi &mdash; eng qimmat xato. Shubha bo'lsa, <b>so'rang</b>."
    }
  ],

  amaliy: [
    "Parol generatori dasturini ishga tushirib, 3 ta kuchli parol yarating va ularning tuzilishini tahlil qiling.",
    "O'zingiz ishlatadigan parollardan qaysi biri zaif ekanini aniqlang va almashtirish rejasini tuzing (parolning o'zini daftarga yozmang).",
    "Google yoki Microsoft akkauntingizda <b>2FA</b> ni yoqing va tiklash kodlarini xavfsiz joyga saqlang.",
    "Shubhali havola belgilari bo'yicha o'zingiz topgan bitta xabarni tahlil qiling: domen, HTTPS, IP manzil va qisqartirilgan havola.",
    "CMD ni ochib, <code>powershell -Command \"Get-MpComputerStatus\"</code> buyrug'i bilan himoya holatini aniqlang va natijani daftaringizga yozib oling.",
    "<code>netsh advfirewall show allprofiles state</code> buyrug'i bilan uch profil holatini tekshiring va hammasi ON ekaniga ishonch hosil qiling.",
    "Muhim papkangizdan zaxira nusxa oling (3-2-1 qoidasi bo'yicha: tashqi disk yoki bulutga) va nusxa ochilishini tekshiring.",
    "Darsdagi oylik xavfsizlik ro'yxatini daftaringizga ko'chirib, bugungi holat bo'yicha to'ldiring va yetishmagan bandlar uchun reja tuzing.",
  ],

  uyga: [
    {
      savol: "<b>Shaxsiy ma'lumot</b> nima? Uch darajaga misol keltiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Shaxsiy ma'lumot</b> &mdash; insonni aniqlashga yoki unga ta'sir qilishga imkon beruvchi har qanday ma'lumot.</p>" +
        "<ul>" +
        "<li><b>Ochiq:</b> ism, sinf, sevimli fan &mdash; zararsiz;</li>" +
        "<li><b>Maxfiy:</b> telefon raqami, uy manzili, tug'ilgan sana &mdash; faqat zarurat bo'lganda aytiladi;</li>" +
        "<li><b>O'ta maxfiy:</b> parollar, SMS kodlar, bank kartasi raqami, pasport ma'lumotlari &mdash; hech kimga aytilmaydi.</li>" +
        "</ul>" +
        "<p>Oltin qoida: <b>SMS kodni hech kimga aytmang</b> &mdash; uni faqat tizim sizga yuboradi.</p>",
    },
    {
      savol: "Kuchli parol qanday bo'ladi? 2 ta zaif va 2 ta kuchli misol yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Kuchli parol: <b>uzun</b> (12+ belgi), katta va kichik harflar, raqam va maxsus belgi aralashgan hamda hech qayerda takrorlanmagan bo'ladi.</p>" +
        "<p><b>Zaif misollar:</b></p>" +
        "<ul>" +
        "<li><em>12345678</em> &mdash; bir zumda topiladi;</li>" +
        "<li><em>qwerty2026</em> &mdash; klaviatura qatori va yil, dastur juda tez topadi.</li>" +
        "</ul>" +
        "<p><b>Kuchli misollar:</b></p>" +
        "<ul>" +
        "<li><em>Kitob!Yulduz#42Daryo</em> &mdash; uzun va mazmunli ibora;</li>" +
        "<li><em>x7Kp!9mQ2#Ld8Rt</em> &mdash; tasodifiy uzun parol.</li>" +
        "</ul>" +
        "<p>Qoida: <b>bir parol &mdash; bir akkaunt</b>. Ko'p parolni yodlash uchun parol menejeri ishlatiladi.</p>",
    },
    {
      savol: "<b>2FA</b> nima va u qanday himoya beradi? SMS kod va ilova kodi farqini tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>2FA (ikki bosqichli tasdiqlash)</b> &mdash; akkauntga kirish uchun ikkinchi dalil talab qiladigan himoya. Birinchi dalil &mdash; parol, ikkinchisi &mdash; vaqtinchalik kod yoki apparat kalit.</p>" +
        "<p>Foydasi: parol o'g'irlangan bo'lsa ham, hujumchi ikkinchi dalilsiz kira olmaydi.</p>" +
        "<table>" +
        "<tr><th>Usul</th><th>Qulayligi</th><th>Xavfsizligi</th></tr>" +
        "<tr><td>SMS kod</td><td>Hamma uchun oson</td><td>SIM almashtirish orqali aldash mumkin</td></tr>" +
        "<tr><td>Ilova kodi (Authenticator)</td><td>Internet kerak emas</td><td>Yuqori</td></tr>" +
        "<tr><td>Apparat kalit</td><td>Eng qulay kirish</td><td>Juda yuqori</td></tr>" +
        "</table>" +
        "<p>Maslahat: imkoni bo'lsa ilova kodidan foydalaning va <b>tiklash kodlarini</b> xavfsiz joyda saqlang.</p>",
    },
    {
      savol: "<b>Fishing</b> xabarini qanday belgilar bo'yicha aniqlash mumkin? 5 ta belgi yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Shoshilinch ohang:</b> \"24 soat ichida bloklanadi\", \"zudlik bilan\";</li>" +
        "<li><b>Maxfiy ma'lumot so'rash:</b> SMS kod, parol, karta raqami;</li>" +
        "<li><b>G'alati havola:</b> HTTPS yo'q, domen rasmiy emas (masalan bank-uz-security.com), IP manzil ishlatilgan;</li>" +
        "<li><b>Umumiy murojaat:</b> \"Hurmatli mijoz\" &mdash; ismingizni bilmaydi;</li>" +
        "<li><b>Imlo va uslub xatolari:</b> rasmiy xabarda bunday bo'lmaydi.</li>" +
        "</ol>" +
        "<p>Nima qilish kerak: havolaga bosmaslik, kodni bermaslik, xabar yuboruvchiga <b>boshqa kanal</b> orqali (rasmiy ilova, sayt, telefon) murojaat qilib tekshirish.</p>",
    },
    {
      savol: "<b>Zaxira nusxa</b> nima uchun kerak? 3-2-1 qoidasini tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Zaxira nusxa</b> &mdash; fayllarning qo'shimcha ko'chirilgan varianti. Qurilma buzilsa, virus fayllarni shifrlasa yoki fayl tasodifan o'chirilsa &mdash; zaxira yagona qutqaruv yo'li.</p>" +
        "<p><b>3-2-1 qoidasi:</b></p>" +
        "<ul>" +
        "<li><b>3</b> &mdash; kamida uchta nusxa (asosiy va ikkita zaxira);</li>" +
        "<li><b>2</b> &mdash; ikki xil muhitda (masalan kompyuter diski va tashqi disk);</li>" +
        "<li><b>1</b> &mdash; bitta nusxa boshqa joyda (bulut yoki boshqa binodagi disk).</li>" +
        "</ul>" +
        "<p>Muhim: zaxira nusxani vaqti-vaqti bilan <b>ochib tekshirish</b> kerak. Tekshirilmagan zaxira &mdash; ishonchsiz zaxira.</p>",
    },
    {
      savol: "Windows qurilmasini xavfsizlik bo'yicha qanday tekshirish kerak? 4 qadamni yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Himoya dasturi:</b> <code>Get-MpComputerStatus</code> bilan real vaqt himoyasi yoqilganini va antivirus bazasi yangi ekanini tekshirish;</li>" +
        "<li><b>Firewall:</b> <code>netsh advfirewall show allprofiles state</code> &mdash; uch profil ham ON bo'lishi kerak;</li>" +
        "<li><b>Yangilanishlar:</b> Settings &rarr; Windows Update orqali tizim yangilanishlarini o'rnatish;</li>" +
        "<li><b>Hisoblar:</b> <code>net user</code> va <code>net localgroup administrators</code> bilan ortiqcha yoki noma'lum hisoblar yo'qligini tekshirish.</li>" +
        "</ol>" +
        "<p>Qo'shimcha: skanerlashni ishga tushirish, tarmoq ulanishlarini ko'rish (<code>netstat -an</code>) va muhim fayllardan zaxira nusxa olish.</p>",
    },
    {
      savol: "O'zingiz uchun <b>5 bandli xavfsizlik rejasi</b> tuzing (bugundan boshlab bajaradigan amallar).",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p>Namuna:</p>" +
        "<ol>" +
        "<li>Bugun: asosiy pochta akkauntida parolni uzun va noyob qilib almashtirish;</li>" +
        "<li>Shu hafta: pochta va ijtimoiy tarmoq akkauntlarida 2FA ni yoqish, tiklash kodlarini saqlash;</li>" +
        "<li>Shu hafta: kompyuterda himoya dasturi, firewall va yangilanishlarni tekshirish;</li>" +
        "<li>Shu oy: muhim papkalardan tashqi diskka zaxira nusxa olish va tekshirish;</li>" +
        "<li>Doimiy: shubhali havolalarga bosmaslik, SMS kodni hech kimga aytmaslik, kodda maxfiy ma'lumot saqlamaslik.</li>" +
        "</ol>" +
        "<p>Rejaga sana qo'yib, bajarilganini belgilab borish samarani oshiradi.</p>",
    },
  ],

  test: [
    {
      savol: "Quyidagilardan qaysi biri \"o'ta maxfiy\" ma'lumot?",
      variantlar: ["Sinf raqami", "Sevimli fan", "SMS kod", "Maktab nomi"],
      togri: 2,
      izoh: "SMS kod, parol va bank kartasi raqami - o'ta maxfiy. Ular hech kimga aytilmaydi.",
    },
    {
      savol: "2FA nima beradi?",
      variantlar: [
        "Parolni avtomatik almashtiradi",
        "Parol o'g'irlangan bo'lsa ham akkauntga kirishni to'xtatadi",
        "Internetni tezlashtiradi",
        "Viruslarni o'chiradi",
      ],
      togri: 1,
      izoh: "Ikkinchi dalil (kod yoki apparat kalit) parol o'g'irlangan holatda ham himoya qiladi.",
    },
    {
      savol: "Fishing xabarining eng ishonchli belgisi qaysi?",
      variantlar: [
        "Xabar sizning ismingiz bilan boshlanadi",
        "Xabar shoshilinch ohangda kod va havola so'raydi",
        "Xabar qisqa yozilgan",
        "Xabar kun davomida kelgan",
      ],
      togri: 1,
      izoh: "Shoshilinch ohang + havola + maxfiy ma'lumot so'rash - fishing ning klassik belgisi.",
    },
    {
      savol: "Zaxira nusxa bo'yicha 3-2-1 qoidasidagi \"1\" nimani bildiradi?",
      variantlar: [
        "Bir nusxa boshqa joyda saqlanishi",
        "Bir kunda bir marta nusxa olish",
        "Bir xil parol ishlatish",
        "Bir dastur o'rnatish",
      ],
      togri: 0,
      izoh: "3 nusxa, 2 xil muhit, 1 nusxa boshqa joyda (masalan bulutda) saqlanadi.",
    },
    {
      savol: "Dasturda parolni saqlashning to'g'ri usuli qaysi?",
      variantlar: [
        "Ochiq matnda faylga yozish",
        "localStorage ga saqlash",
        "Tuz qo'shib xeshlab saqlash",
        "Chatga yuborib qo'yish",
      ],
      togri: 2,
      izoh: "Parol har bir foydalanuvchi uchun alohida tuz bilan xeshlanadi. Xeshni orqaga qaytarib bo'lmaydi.",
    },
    {
      savol: "Firewall uch profil (Domain, Private, Public) holati qanday bo'lishi kerak?",
      variantlar: ["Faqat Public ON", "Faqat Private ON", "Uchtasi ham ON", "Istalgan holatda"],
      togri: 2,
      izoh: "Barcha profil uchun ON bo'lishi kerak - aks holda tarmoq himoyasi zaiflashadi.",
    },
  ],

  lugat: [
    { soz: "Shaxsiy ma'lumot", izoh: "Insonni aniqlashga imkon beruvchi har qanday ma'lumot." },
    { soz: "O'ta maxfiy ma'lumot", izoh: "Parollar, SMS kodlar, bank kartasi raqami - hech kimga aytilmaydi." },
    { soz: "2FA", izoh: "Ikki bosqichli tasdiqlash: parolga qo'shimcha ikkinchi dalil." },
    { soz: "Authenticator", izoh: "Vaqtinchalik kod beruvchi ilova (Google, Microsoft)." },
    { soz: "Fishing", izoh: "Aldash yo'li bilan maxfiy ma'lumotni olishga urinish." },
    { soz: "Firibgarlik", izoh: "Ishonchni suiiste'mol qilib foyda olishga urinish." },
    { soz: "Xesh", izoh: "Ma'lumotning bir tomonlama shifrlangan ko'rinishi." },
    { soz: "Tuz (salt)", izoh: "Xeshga qo'shiladigan tasodifiy qiymat - bir xil parollar har xil ko'rinadi." },
    { soz: "Firewall", izoh: "Tarmoqdan ruxsatsiz ulanishlarni to'suvchi himoya." },
    { soz: "Zaxira nusxa", izoh: "Fayllarning qo'shimcha ko'chirilgan varianti." },
    { soz: "3-2-1 qoidasi", izoh: "3 nusxa, 2 xil muhit, 1 nusxa boshqa joyda." },
    { soz: "Shifrlash", izoh: "Ma'lumotni kalitsiz o'qib bo'lmaydigan ko'rinishga keltirish." },
    { soz: "HTTPS", izoh: "Brauzer va sayt o'rtasidagi shifrlangan aloqa." },
    { soz: "SQL injection", izoh: "Forma orqali bazaga zararli so'rov yuborishga urinish." },
    { soz: "Skript kiddie", izoh: "Tayyor dasturlarni tushunmasdan ishlatuvchi tajovuzkor." },
    { soz: "Incident", izoh: "Xavfsizlik buzilgan hodisa (masalan ma'lumot sizib chiqishi)." },
  ],

  xatolar: [
    "Bitta parolni bir necha akkauntda ishlatish &mdash; biri o'g'irlansa, hammasi xavf ostida.",
    "Parolni brauzer xotirasiga yoki kod faylida ochiq saqlash.",
    "SMS kodni telefonda so'ragan odamga aytish &mdash; bank ham, tashkilot ham kodni so'ramaydi.",
    "Shubhali havolaga ilova ichida bosish &mdash; manzilni qo'lda yozish xavfsizroq.",
    "2FA ni yoqmaslik &mdash; eng arzon himoya choralaridan birini qoldirmaslik kerak.",
    "Zaxira nusxani tekshirmaslik &mdash; ishlamaydigan nusxa muammoni kechiktirib qo'yadi.",
    "Ochiq Wi-Fi tarmoqda parol kiritish.",
    "Loyiha kodida token yoki parolni qoldirib, GitHub ga yuborish.",
  ],

  keyingi:
    "Bu bilan <b>II bobning katta qismi</b> yakunlandi: raqamli infratuzilma, Git va GitHub, IT yo'nalishlari va xavfsizlik. Keyingi darsdan <b>III bob &mdash; algoritmlash</b> boshlanadi. Avval <b>algoritm tushunchasi</b> bilan tanishamiz: algoritm nima, uning xossalari (aniqlik, natijalilik, ommaviylik), algoritmning turlari (chiziqli, tarmoqlanuvchi, takrorlanuvchi) va kundalik hayotdan misollar. Keyin <b>Flowgorithm</b> dasturining interfeysini o'rganamiz &mdash; algoritmlarni blok-sxema ko'rinishida tuzib, kompyuterga tushunarli qilib yozishni boshlaymiz.",
});
