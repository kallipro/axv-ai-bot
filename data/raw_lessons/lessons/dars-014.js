/* 14-dars: Git va GitHub bilan tanishuv (1-qism) - versiya nazorati, repository va commit */

AVX.dars({
  id: "cs8-014",
  sarlavha: "Git va GitHub bilan tanishuv (1-qism): versiya nazorati, repository va commit",
  kiritish:
    "Ish papkangizni tasavvur qiling: <code>loyiha.html</code>, <code>loyiha-yangi.html</code>, <code>loyiha-final.html</code>, <code>loyiha-final2.html</code>, <code>loyiha-tuzatilgan.html</code>. Qaysi biri haqiqiy? Bitta xato ketgandan keyin qaysi faylga qaytish kerak? Bugun biz <b>Git</b> &mdash; har bir o'zgarishni yozib boradigan va istalgan payt orqaga qaytish imkonini beradigan <b>versiya nazorati tizimi</b> bilan tanishamiz.",

  maqsad: [
    "Versiya nazorati nima ekanligini va u qanday muammoni hal qilishini tushunish.",
    "Git va GitHub o'rtasidagi farqni aniq ajratish.",
    "Repository, commit, staging area va working directory tushunchalarini o'zlashtirish.",
    "Kompyuterga Git o'rnatib, asosiy sozlamalarni kiritish.",
    "Birinchi repository va birinchi commit ni mustaqil bajarish.",
  ],

  natija: [
    "Git o'rnatilganini <code>git --version</code> bilan tekshiradi va versiyani o'qiydi.",
    "Ism va pochta sozlamalarini kiritib, <code>git config --list</code> bilan tasdiqlaydi.",
    "Papkani <code>git init</code> bilan repository ga aylantiradi.",
    "Fayllarni staging ga qo'shib, mazmunli izoh bilan commit yaratadi.",
    "Commit tarixini <code>git log</code> bilan o'qiydi va <code>.gitignore</code> yozadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: Kanban, vazifa va jamoa bilan ishlash."],
    ["5-16 daq", "Mentor tushuntirishi", "\"loyiha-final-final\" muammosi va versiya nazorati g'oyasi."],
    ["16-28 daq", "Nazariya: atamalar", "Repository, commit, staging area, working directory."],
    ["28-40 daq", "Git va GitHub", "Lokal dastur va onlayn xizmat &mdash; ikki xil narsa."],
    ["40-54 daq", "Amaliyot: o'rnatish va sozlash", "Git o'rnatish, <code>git --version</code>, <code>git config</code>."],
    ["54-72 daq", "Amaliyot: birinchi commit", "<code>git init</code>, <code>git add</code>, <code>git commit</code>, <code>git log</code>."],
    ["72-77 daq", "Mustaqil ish va uyga vazifa", "Fayl tarixi va <code>.gitignore</code> bo'yicha topshiriqlar."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Tanish muammo: \"qaysi fayl haqiqiy?\"",
      matn: [
        "Ko'pchilikning ish papkasi shunga o'xshaydi: <em>sayt.html</em>, <em>sayt2.html</em>, <em>sayt-yangi.html</em>, <em>sayt-oxirgi.html</em>, <em>sayt-oxirgi-tuzatilgan.html</em>. Bir hafta o'tib o'zingiz ham qaysi biri to'g'ri ekanini bilmaysiz.",
        "Yana bir tanish holat: kechagi ishlaydigan holatni bugun buzib qo'ydingiz. Qaytarish uchun nima qilasiz? Eski fayl nusxasi bo'lmasa &mdash; hech narsa.",
        "Aynan shu muammoni hal qilish uchun <b>versiya nazorati</b> tizimlari yaratilgan. Ular har bir o'zgarishni <em>kim</em>, <em>qachon</em> va <em>nima uchun</em> o'zgartirganini yozib boradi.",
      ],
    },
    {
      sarlavha: "2. Git nima?",
      matn: [
        "<b>Git</b> &mdash; bu kompyuteringizda ishlaydigan <em>bepul dastur</em>. U loyihangizning holatini vaqti-vaqti bilan \"suratga olib\" boradi. Har bir surat <b>commit</b> deb ataladi.",
        "Eng muhim xususiyati: bu suratlar <em>internetsiz</em> ham ishlaydi. Git lokal, ya'ni kompyuteringizning o'zida saqlanadi. Internet bo'lmasa ham commit qilishingiz mumkin.",
        "Git &mdash; <b>taqsimlangan</b> (distributed) tizim. Ya'ni loyihaning to'liq tarixi har bir dasturchining kompyuterida mavjud bo'ladi. Bittasi buzilsa ham, boshqasida hammasi qoladi.",
      ],
    },
    {
      sarlavha: "3. Git va GitHub &mdash; bir narsa emas",
      matn: [
        "Bu &mdash; eng ko'p chalkashtiriladigan joy. <b>Git</b> &mdash; dastur (kompyuterda ishlaydi). <b>GitHub</b> &mdash; sayt (internetda ishlaydi, loyihangizni saqlaydigan xizmat).",
        "Xuddi shunga o'xshash misol: Git &mdash; bu <em>daftar</em>, GitHub esa <em>kutubxonadagi javon</em>. Siz daftarga yozasiz, keyin uni javonga qo'yib, boshqalarga ko'rsatishingiz mumkin.",
        "GitHubsiz ham Git ishlatish mumkin (faqat o'zingiz uchun). Gitsiz esa GitHub deyarli foydasiz &mdash; chunki loyihani GitHub ga yuboradigan narsa aynan Git.",
      ],
    },
    {
      sarlavha: "4. Uchta maydon: ish papkasi, staging, repository",
      matn: [
        "Git'da fayl uch joyda bo'lishi mumkin. <b>Ish papkasi</b> &mdash; siz hozir tahrirlayotgan fayllar. <b>Staging area</b> &mdash; keyingi commit ga tayyorlanayotgan fayllar. <b>Repository</b> &mdash; allaqachon saqlangan (commit qilingan) tarix.",
        "Nega oraliq bosqich kerak? Chunki bitta o'zgarishda 10 ta fayl o'zgargan bo'lishi mumkin, lekin siz ulardan faqat 3 tasini shu commit ga qo'shmoqchi bo'lasiz. Staging aynan shu tanlovni beradi.",
        "Oshxona misoli: <em>ish papkasi</em> &mdash; mahsulotlar, <em>staging</em> &mdash; laganda tayyorlangan taom, <em>commit</em> &mdash; mijozga berilgan buyurtma. Laganga solmasdan oshxonadan chiqarib bo'lmaydi.",
      ],
    },
    {
      sarlavha: "5. Yaxshi commit &mdash; kichik va tushunarli",
      matn: [
        "Commit izohi \"o'zgarish\" yoki \"tuzatdim\" bo'lsa, bir oydan keyin bu hech narsa demaydi. Yaxshi izoh <em>nima qilindi</em> ni aniq aytadi: \"Bosh sahifaga aloqa formasi qo'shildi\".",
        "Ikkinchi qoida: bitta commit &mdash; bitta mantiqiy o'zgarish. Bir commit da ham forma qo'shib, ham dizaynni butunlay o'zgartirsangiz, keyin xatoni topish qiyin bo'ladi.",
        "Uchinchisi: commit ni <em>ish tugagandan keyin</em> emas, <em>mantiqiy qism tugaganda</em> qiling. Kuniga 1 ta katta commit dan ko'ra 5 ta kichik commit ancha foydali.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Versiya nazoratisiz va Git bilan",
      matn: [
        "Quyidagi jadval ikki yondashuvni solishtiradi. Bu farqni tushunish mavzuning butun mantiqini ochadi.",
      ],
      jadval: [
        ["Vaziyat", "Git bo'lmasa", "Git bilan"],
        ["Eski holatga qaytish", "Fayl nusxasini qo'lda izlash", "Bitta buyruq: <code>git restore</code>"],
        ["Kim o'zgartirganini bilish", "Noma'lum", "<code>git log</code> da muallif ko'rinadi"],
        ["Bir necha kishi bitta faylda", "Nusxalar to'qnashadi", "Branch va merge orqali birlashadi"],
        ["Xato qachon kiritilgani", "Topib bo'lmaydi", "Commit lar solishtiriladi"],
        ["Zaxira nusxa", "Flesh xotira, o'z qo'lda", "GitHub ga push qilinadi"],
      ],
    },
    {
      sarlavha: "2. Asosiy atamalar",
      matn: [
        "Bu atamalar keyingi barcha darslarda ishlatiladi, shuning uchun yodlab olish kerak.",
      ],
      jadval: [
        ["Atama", "Ma'nosi"],
        ["Repository (repo)", "Git kuzatib borayotgan loyiha papkasi va uning tarixi"],
        ["Working directory", "Siz hozir tahrirlayotgan haqiqiy fayllar"],
        ["Staging area (index)", "Commit ga tayyorlangan fayllar ro'yxati"],
        ["Commit", "Loyiha holatining izoh bilan saqlangan surati"],
        ["Hash (SHA-1)", "Har bir commit ning noyob raqamli nomi, masalan <code>a3f5c91</code>"],
        ["Branch", "Ishning mustaqil shoxobchasi (keyingi darsda)"],
        ["Remote", "Masofadagi nusxa, masalan GitHub dagi repo"],
        [".gitignore", "Git kuzatmasligi kerak bo'lgan fayllar ro'yxati"],
      ],
    },
    {
      sarlavha: "3. Faylning uch holati",
      matn: [
        "Git faylni uch holatdan birida ko'radi. <code>git status</code> buyrug'i aynan shu holatni ko'rsatadi.",
      ],
      jadval: [
        ["Holat", "<code>git status</code> da", "Ma'nosi", "Nima qilish kerak"],
        ["Untracked", "Untracked files", "Yangi fayl, Git uni tanimaydi", "<code>git add</code> qilish"],
        ["Modified", "Changes not staged", "Fayl o'zgardi, lekin staging ga qo'shilmagan", "<code>git add</code> qilish"],
        ["Staged", "Changes to be committed", "Commit ga tayyor", "<code>git commit</code> qilish"],
        ["Unmodified", "nothing to commit", "Hammasi saqlangan", "Hech narsa kerak emas"],
      ],
    },
    {
      sarlavha: "4. Commit ichida nima saqlanadi",
      matn: [
        "Har bir commit &mdash; shunchaki fayl nusxasi emas, balki to'liq ma'lumotli yozuv.",
      ],
      jadval: [
        ["Maydon", "Misol", "Nima uchun kerak"],
        ["Hash", "<code>a3f5c91</code>", "Commit ni noyob aniqlash"],
        ["Muallif", "Kallibek &lt;mail@example.com&gt;", "Kim o'zgartirgani"],
        ["Sana va vaqt", "2026-10-09 14:32", "Qachon o'zgargani"],
        ["Izoh (message)", "Forma validatsiyasi qo'shildi", "Nima uchun o'zgargani"],
        ["O'zgargan fayllar", "index.html, style.css", "Nima o'zgargani"],
        ["Ota-commit", "<code>7b1e420</code>", "Tarix zanjiri (oldingi holat)"],
      ],
    },
    {
      sarlavha: "5. Git va GitHub taqqoslanishi",
      matn: [
        "Ikkalasini bir jadvalda yonma-yon qo'yib ko'ramiz &mdash; bu farqni eslab qolish oson bo'ladi.",
      ],
      jadval: [
        ["Belgi", "Git", "GitHub"],
        ["Nima", "Dastur", "Veb-xizmat (sayt)"],
        ["Qayerda ishlaydi", "Kompyuterda (lokal)", "Internetda (server)"],
        ["Internet kerakmi", "Yo'q", "Ha"],
        ["Asosiy vazifasi", "Tarixni yozib borish", "Loyihani saqlash va jamoa bilan bo'lishish"],
        ["Muqobil variantlar", "Mercurial, SVN", "GitLab, Bitbucket"],
        ["Narxi", "Bepul", "Asosiy imkoniyatlar bepul"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Eslab qoling",
        matn: "Git &mdash; <b>vosita</b>, GitHub &mdash; <b>joy</b>. Git bo'lmasa GitHub ga hech narsa yubora olmaysiz, GitHub bo'lmasa Git baribir ishlayveradi.",
      },
    },
  ],

  rasmlar: [
    {
      "tur": "sxema",
      "sarlavha": "Git qanday ishlaydi: uch zona",
      "tushuntirish": "Fayl o'zgarishi uchta zonadan o'tadi. Har bir zona o'z buyrug'i bilan boshqariladi.",
      "svg": "<svg viewBox=\"0 0 780 240\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Segoe UI, sans-serif\" role=\"img\" aria-label=\"Git uch zonasi\">\n  <rect x=\"1\" y=\"1\" width=\"778\" height=\"238\" rx=\"12\" fill=\"#101728\" stroke=\"#26304a\"/>\n  <g font-size=\"15\" text-anchor=\"middle\">\n    <rect x=\"28\" y=\"66\" width=\"200\" height=\"104\" rx=\"12\" fill=\"#16203a\" stroke=\"#3a68c8\"/>\n    <text x=\"128\" y=\"100\" fill=\"#e8eeff\" font-weight=\"700\">Ishchi papka</text>\n    <text x=\"128\" y=\"124\" fill=\"#9fb2d6\" font-size=\"12\">fayllarni tahrirlaysiz</text>\n    <text x=\"128\" y=\"146\" fill=\"#7d90b8\" font-size=\"12\">git status</text>\n\n    <rect x=\"290\" y=\"66\" width=\"200\" height=\"104\" rx=\"12\" fill=\"#16203a\" stroke=\"#3a68c8\"/>\n    <text x=\"390\" y=\"100\" fill=\"#e8eeff\" font-weight=\"700\">Staging zona</text>\n    <text x=\"390\" y=\"124\" fill=\"#9fb2d6\" font-size=\"12\">keyingi commit ga tayyor</text>\n    <text x=\"390\" y=\"146\" fill=\"#7d90b8\" font-size=\"12\">git add</text>\n\n    <rect x=\"552\" y=\"66\" width=\"200\" height=\"104\" rx=\"12\" fill=\"#16203a\" stroke=\"#22d3a6\"/>\n    <text x=\"652\" y=\"100\" fill=\"#e8eeff\" font-weight=\"700\">Repository</text>\n    <text x=\"652\" y=\"124\" fill=\"#9fb2d6\" font-size=\"12\">tarix saqlanadi</text>\n    <text x=\"652\" y=\"146\" fill=\"#7d90b8\" font-size=\"12\">git commit</text>\n  </g>\n  <g stroke=\"#4f8cff\" stroke-width=\"2.4\" fill=\"none\">\n    <path d=\"M232 118 h52\"/><path d=\"M276 110 l8 8 -8 8\"/>\n    <path d=\"M494 118 h52\"/><path d=\"M538 110 l8 8 -8 8\"/>\n  </g>\n  <text x=\"390\" y=\"210\" fill=\"#6f82a8\" font-size=\"12\" text-anchor=\"middle\">Har bir commit &mdash; loyiha holatining saqlangan surati</text>\n</svg>",
      "izoh": "Zonani bilib olsangiz, Git buyruqlari tartibini yodlash oson: <code>tahrir</code> &rarr; <code>git add</code> &rarr; <code>git commit</code>."
    },
    {
      "tur": "oyna",
      "sarlavha": "Loyiha papkasi qanday ko'rinadi",
      "tushuntirish": "Git bilan boshqariladigan papka ichida oddiy fayllar va bitta yashirin papka bo'ladi.",
      "oyna": {
        "nom": "Explorer — loyiha papkasi",
        "manzil": "C:/loyihalar/mening-saytim",
        "qatorlar": [
          "index.html  —  asosiy sahifa (biz yaratgan fayl)",
          ".gitignore  —  kuzatilmaydigan fayllar ro'yxati",
          ".git  —  tarix saqlanadigan yashirin papka (qo'lda tegmaymiz!)"
        ]
      },
      "izoh": "<b>.git</b> papkasi ko'rinmasa &mdash; bu normal. U yashirin, lekin aynan shu yerda barcha tarix yotadi."
    },
    {
      "tur": "royxat",
      "sarlavha": ".gitignore &mdash; Git kuzatmaydigan fayllar",
      "tushuntirish": "Ba'zi fayllarni Git umuman kuzatmasligi kerak. Ularning ro'yxati .gitignore faylida yoziladi.",
      "elementlar": [
        {
          "belgi": "🗑️",
          "nom": "Vaqtinchalik fayllar",
          "izoh": "*.tmp, *.log, ~$hujjat.docx &mdash; vaqtinchalik chiqindilar"
        },
        {
          "belgi": "🔑",
          "nom": "Maxfiy ma'lumotlar",
          "izoh": ".env, parol.txt &mdash; ular hech qachon GitHub ga chiqmasligi kerak"
        },
        {
          "belgi": "📦",
          "nom": "Katta hajmdagi fayllar",
          "izoh": "video, arxiv va o'rnatish fayllari repository ni og'irlashtiradi"
        },
        {
          "belgi": "⚙️",
          "nom": "Tizim fayllari",
          "izoh": "Thumbs.db, .DS_Store &mdash; operatsion tizim o'zi yaratadigan fayllar"
        }
      ],
      "izoh": ".gitignore repository ning <b>bosh papkasida</b> turadi. Ichidagi har bir qator &mdash; Git ko'rmaydigan fayl."
    },
    {
      "tur": "oyna",
      "sarlavha": "Commit tarixi (git log)",
      "tushuntirish": "Har bir commit ning o'z raqami (hash) va izohi bo'ladi. Eng yangisi yuqorida turadi.",
      "oyna": {
        "nom": "git log --oneline",
        "qatorlar": [
          "a3f9c21  Saytga aloqa bo'limi qo'shildi",
          "7b21e04  index.html fayli yaratildi",
          "1c88af2  Loyiha boshlandi"
        ]
      },
      "izoh": "Commit izohlari <b>aniq va qisqa</b> bo'lsa, tarixni o'qish oson bo'ladi: nima qilindi &mdash; shu yoziladi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Git bo'lmasa va Git bilan",
      "tushuntirish": "Versiya nazorati nima uchun kerakligini ikki holatni taqqoslab ko'rish oson.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Git bo'lmasa",
          "royxat": [
            "Fayllar ko'payadi: <em>loyiha-final2-yangi.html</em>",
            "Qaysi nusxa haqiqiy ekani bilinmaydi",
            "Xatoni kim va qachon kiritgani noma'lum",
            "Ishlaydigan holatga qaytish qiyin"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Git bilan",
          "royxat": [
            "Bitta papka &mdash; to'liq tarix",
            "Har o'zgarish izoh bilan saqlanadi",
            "Istalgan oldingi holatga qaytish mumkin",
            "Jamoada ishlash oson va xavfsiz"
          ]
        }
      ],
      "izoh": "Shu sababli Git &mdash; har bir dasturchining birinchi vositalaridan biri."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Git o'rnatilganini tekshirish",
      "tushuntirish": "Birinchi qadam &mdash; Git kompyuterda bor-yo'qligini aniqlash. Buyruqni <b>CMD</b> yoki <b>Git Bash</b> da yozamiz. Agar \"command not found\" chiqsa, git-scm.com dan yuklab o'rnatish kerak.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Windows uchun Git ni git-scm.com saytidan bepul yuklab olish mumkin. O'rnatishda hamma sozlamani standart holida qoldirsa bo'ladi.",
      "kod": ":: Git o'rnatilgani va versiyasini tekshiradi\ngit --version\n\n:: Git dasturining joylashuvini topadi\nwhere git\n\n:: Yordam oynasini ochadi (chiqish uchun q tugmasini bosing)\ngit --help",
      "natija": "git version 2.46.0.windows.1\n\nC:\\Program Files\\Git\\cmd\\git.exe\n\nusage: git [-v | --version] [-h | --help] [-C <path>] ...\n\nBu natija chiqsa - Git to'g'ri o'rnatilgan."
    },
    {
      "sarlavha": "Git ga o'z ismingizni tanishtirish",
      "tushuntirish": "Har bir commit da muallif ismi va pochta manzili yoziladi. <code>--global</code> flag'i sozlamani butun kompyuterga qo'llaydi, ya'ni har bir loyihada qayta yozish shart bo'lmaydi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Ism va pochtani GitHub akkauntizdagi ma'lumot bilan bir xil qilsangiz, keyinchalik mualliflik to'g'ri ko'rinadi.",
      "kod": ":: Ismni sozlash (qo'shtirnoq ichida)\ngit config --global user.name \"Kallibek Jumanazarov\"\n\n:: Pochta manzilini sozlash\ngit config --global user.email \"kallibek@example.com\"\n\n:: Standart shoxobcha nomini main qilish (zamonaviy standart)\ngit config --global init.defaultBranch main\n\n:: Matn muharririni tanlash (ixtiyoriy)\ngit config --global core.editor \"notepad\"",
      "natija": "Sozlamalar saqlandi. Har bir keyingi commit da shu ma'lumot\navtomatik yozib boriladi - buyruqlar natija chiqarmaydi, xato bo'lmasa\nhammasi to'g'ri."
    },
    {
      "sarlavha": "Sozlamalarni tekshirish",
      "tushuntirish": "Kiritilgan sozlamalar haqiqatan saqlanganini ko'rish. Bu odat &mdash; \"men kiritdim\" deb o'ylash emas, balki <em>ko'rish</em>.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Faqat global sozlamalar kerak bo'lsa --global flag'ini qo'shing.",
      "kod": ":: Barcha sozlamalar ro'yxati\ngit config --list\n\n:: Faqat global sozlamalar\ngit config --global --list\n\n:: Bitta sozlamani alohida so'rash\ngit config user.name\ngit config user.email",
      "natija": "user.name=Kallibek Jumanazarov\nuser.email=kallibek@example.com\ninit.defaultbranch=main\ncore.editor=notepad\n\nKallibek Jumanazarov\nkallibek@example.com"
    },
    {
      "sarlavha": "Loyiha papkasini tayyorlash",
      "tushuntirish": "Endi Git bilan boshqariladigan papka yaratamiz. Papka nomida <b>bo'sh joy va qaraqalpaq/o'zbek harflari ishlatilmasin</b> &mdash; bu keyinchalik muammo tug'diradi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Fayl va papka nomlarida faqat lotin harflari, raqamlar va chiziqcha (-) ishlatsangiz xavfsiz bo'ladi.",
      "kod": ":: Ish papkasiga o'tish\ncd %USERPROFILE%\\Desktop\n\n:: Yangi papka yaratish\nmkdir mening-loyiham\ncd mening-loyiham\n\n:: Papka bo'shligini tekshirish\ndir",
      "natija": "C:\\Users\\kallibek\\Desktop\\mening-loyiham\n\n Directory of C:\\Users\\kallibek\\Desktop\\mening-loyiham\n\n Hozircha papka bo'sh (. va .. dan boshqa hech narsa yo'q)"
    },
    {
      "sarlavha": "Birinchi repository: git init",
      "tushuntirish": "<code>git init</code> papkani repository ga aylantiradi. U yashirin <code>.git</code> papkasini yaratadi &mdash; loyihaning <b>butun tarixi</b> shu papkada saqlanadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Bu buyruqni faqat bir marta, loyihaning boshida bajarish kerak. Har safar emas!",
      "kod": ":: Papkani repository ga aylantiradi\ngit init\n\n:: Yaratilgan yashirin .git papkasini ko'rish\ndir /a\n\n:: Repo holatini ko'rish\ngit status",
      "natija": "Initialized empty Git repository in\nC:/Users/kallibek/Desktop/mening-loyiham/.git/\n\n Directory of C:\\Users\\kallibek\\Desktop\\mening-loyiham\n10/09/2026  02:14 PM    <DIR>          .git\n\nOn branch main\n\nNo commits yet\n\nnothing to commit (create/copy files and use \"git add\" to track)"
    },
    {
      "sarlavha": "git status &mdash; yangi fayl (untracked)",
      "tushuntirish": "Git yangi faylni ko'radi, lekin hali <b>kuzatmaydi</b>. Shu sababli u <em>Untracked files</em> ro'yxatida chiqadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "git status - eng ko'p ishlatiladigan buyruq. Ishonchsizlik tug'ilsa - status bosing.",
      "kod": "git status",
      "natija": "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n        index.html\n\nnothing added to commit but untracked files present (use \"git add\" to track)"
    },
    {
      "sarlavha": "Staging area ga qo'shish: git add",
      "tushuntirish": "<code>git add</code> faylni keyingi commit uchun <b>tayyorlaydi</b>. Fayl o'zi o'zgarishidan to'xtamaydi &mdash; shunchaki \"shu holat commit ga kiradi\" deb belgilanadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Nuqta (.) qo'yilsa - o'sha papkadagi barcha o'zgargan va yangi fayllar qo'shiladi.",
      "kod": ":: Bitta faylni qo'shish\ngit add index.html\n\n:: Holatni tekshirish\ngit status\n\n:: Barcha fayllarni qo'shish (ehtiyot bo'lib ishlatiladi)\ngit add .\n\n:: Qaysi fayllar staging ga tushganini qisqa ko'rinishda ko'rish\ngit status --short",
      "natija": "On branch main\n\nNo commits yet\n\nChanges to be committed:\n  (use \"git rm --cached <file>...\" to unstage)\n        new file:   index.html\n\ngit status --short natijasi:\nA  index.html"
    },
    {
      "sarlavha": "Birinchi commit",
      "tushuntirish": "Commit &mdash; loyiha holatining saqlangan surati. <code>-m</code> flag'idan keyin izoh yoziladi. Bu izoh tarixda doim ko'rinib turadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Izohni o'zbek tilida, qisqa va aniq yozish mumkin: \"Bosh sahifa qo'shildi\".",
      "kod": ":: Commit yaratish\ngit commit -m \"Bosh sahifa va sarlavha qo'shildi\"\n\n:: Barcha o'zgargan fayllarni qo'shib, darhol commit qilish (faqat kuzatilayotgan fayllar uchun)\ngit commit -am \"Matn tuzatildi\"\n\n:: Tarixni tekshirish\ngit log --oneline",
      "natija": "[main (root-commit) a3f5c91] Bosh sahifa va sarlavha qo'shildi\n 1 file changed, 12 insertions(+)\n create mode 100644 index.html\n\na3f5c91 Bosh sahifa va sarlavha qo'shildi"
    },
    {
      "sarlavha": "Commit tarixini o'qish: git log",
      "tushuntirish": "Tarix &mdash; Git ning eng qimmatli qismi. Eng yangi commit yuqorida turadi, eng eskisi pastda.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Katta jurnalda chiqish uchun q tugmasini bosing (less pager).",
      "kod": ":: To'liq tarix\ngit log\n\n:: Bir qatorda qisqa ko'rinish\ngit log --oneline\n\n:: Oxirgi 3 ta commit\ngit log -3\n\n:: Har bir commit da qaysi fayllar o'zgarganini ko'rish\ngit log --stat",
      "natija": "commit a3f5c91d8e2b47a1f0c9e6b83d5a17f4c2e9b601\nAuthor: Kallibek Jumanazarov <kallibek@example.com>\nDate:   Thu Oct 9 14:32:11 2026 +0500\n\n    Bosh sahifa va sarlavha qo'shildi\n\n--oneline ko'rinishi:\na3f5c91 Bosh sahifa va sarlavha qo'shildi"
    },
    {
      "sarlavha": "Nima o'zgarganini ko'rish: git diff",
      "tushuntirish": "Faylni tahrirladingiz, lekin commit qilmadingiz. Aynan nima o'zgarganini ko'rish uchun <code>git diff</code> ishlatiladi. Bu &mdash; xatoni topishning eng tez usuli.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "diff natijasida - qatorlar olib tashlangan, + qatorlar qo'shilgan degani.",
      "kod": ":: Hali staging ga qo'shilmagan o'zgarishlar\ngit diff\n\n:: Staging ga qo'shilgan o'zgarishlar\ngit diff --staged\n\n:: Faqat fayl nomlari\ngit diff --name-only",
      "natija": "diff --git a/index.html b/index.html\nindex 8c2b1a4..f7d3e91 100644\n--- a/index.html\n+++ b/index.html\n@@ -8,1 +8,2 @@\n-  <p>Version: 1.0</p>\n+  <p>Version: 1.1</p>\n+  <p>Muallif: Kallibek</p>"
    },
    {
      "sarlavha": ".gitignore ni tekshirish",
      "tushuntirish": "Fayl ro'yxatga tushganini amalda sinab ko'ramiz: vaqtinchalik fayl yaratamiz va Git uni ko'rmasligiga ishonch hosil qilamiz.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Agar fayl allaqachon kuzatilayotgan bo'lsa, .gitignore uni to'xtatmaydi - avval git rm --cached kerak.",
      "kod": ":: Vaqtinchalik fayl yaratish\necho test > vaqtinchalik.tmp\n\n:: Git uni ko'ryaptimi?\ngit status\n\n:: Ro'yxatdan o'tkazilgan faylni Git dan chiqarish (fayl o'chmaydi)\ngit rm --cached eski-fayl.txt",
      "natija": "On branch main\nnothing to commit, working tree clean\n\nYa'ni vaqtinchalik.tmp mavjud, lekin Git uni ko'rmayapti -\n.gitignore o'z ishini qilyapti."
    },
    {
      "sarlavha": "Kunlik ishni tezlashtiruvchi BAT fayl",
      "tushuntirish": "Har kuni bir xil buyruqlarni yozmaslik uchun kichik skript tuzamiz: u papkani ochib, holatni ko'rsatadi.",
      "nom": "holat.bat",
      "til": "cmd",
      "izoh": "Bu faylni loyiha papkasiga qo'ying va ikki marta bosing.",
      "kod": "@echo off\nchcp 65001 >nul\ntitle Git holat tekshiruvi\n\necho === LOYIHA HOLATI ===\ngit status\n\necho.\necho === OXIRGI 5 TA COMMIT ===\ngit log --oneline -5\n\necho.\necho === O'ZGARGAN FAYLLAR ===\ngit diff --name-only\n\necho.\npause",
      "natija": "=== LOYIHA HOLATI ===\nOn branch main\nnothing to commit, working tree clean\n\n=== OXIRGI 5 TA COMMIT ===\na3f5c91 Bosh sahifa va sarlavha qo'shildi\n\n=== O'ZGARGAN FAYLLAR ===\n(bo'sh - hamma o'zgarish saqlangan)"
    },
    {
      "sarlavha": "O'zgarishni qaytarish va tarixni tekshirish buyruqlari",
      "tushuntirish": "Xato ketganda nima qilish mumkinligi &mdash; Git ning asosiy kuchi. Quyidagi buyruqlar keyingi darslarda batafsil o'rganiladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Diqqat: git reset --hard o'zgarishlarni butunlay o'chiradi - ehtiyot bo'ling.",
      "kod": ":: Hali staging ga qo'shilmagan faylni eski holatga qaytarish\ngit restore index.html\n\n:: Staging dan chiqarish (fayl o'zgarmaydi)\ngit restore --staged index.html\n\n:: Faylning commit qilingan holati bilan farqini ko'rish\ngit diff HEAD -- index.html\n\n:: Oxirgi commit ni bekor qilib, o'zgarishlarni saqlab qolish\ngit reset --soft HEAD~1\n\n:: Aniq commit haqida batafsil ma'lumot\ngit show a3f5c91",
      "natija": "git show a3f5c91 natijasi:\n\ncommit a3f5c91d8e2b47a1f0c9e6b83d5a17f4c2e9b601\nAuthor: Kallibek Jumanazarov <kallibek@example.com>\nDate:   Thu Oct 9 14:32:11 2026 +0500\n\n    Bosh sahifa va sarlavha qo'shildi\n\ndiff --git a/index.html b/index.html\nnew file mode 100644\n++ b/index.html\n@@ -0,0 +1,12 @@\n+<!DOCTYPE html>\n+<html lang=\"uz\">"
    }
  ],

  amaliy: [
    "CMD ni ochib, <code>git --version</code> buyrug'i bilan Git versiyasini aniqlang va daftaringizga yozib qo'ying.",
    "<code>git config --global user.name</code> va <code>user.email</code> sozlamalarini kiriting, so'ng <code>git config --global --list</code> bilan tekshiring.",
    "Ish stolida <code>git-amaliy</code> nomli papka yaratib, uning ichida <code>git init</code> bajaring va <code>dir /a</code> bilan <code>.git</code> papkasi paydo bo'lganini ko'ring.",
    "<code>index.html</code> faylini yaratib, ichiga o'z ismingiz va sinfingizni yozing. Keyin <code>git status</code> bajaring &mdash; fayl <em>Untracked</em> ro'yxatida turishini kuzating.",
    "<code>git add index.html</code> qilib, yana <code>git status</code> bajaring. Holat qanday o'zgarganini (Changes to be committed) yozib oling.",
    "<code>git commit -m \"Birinchi commit: index.html qo'shildi\"</code> buyrug'ini bajaring va <code>git log --oneline</code> bilan tarixni ko'ring.",
    "Faylni tahrirlab (sarlavhani o'zgartirib) saqlang, <code>git diff</code> bilan o'zgarishni ko'ring, so'ng ikkinchi commit qiling. Jami 3 ta commit to'plang.",
    "<code>.gitignore</code> faylini yaratib, ichiga <code>*.tmp</code> va <code>test.txt</code> yozing. Keyin shu nomdagi fayl yaratib, <code>git status</code> da ular ko'rinmasligini isbotlang.",
  ],

  uyga: [
    {
      savol: "<b>Versiya nazorati</b> nima? Git bo'lmasa qanday muammolar chiqadi? (5 gapdan iborat javob yozing.)",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>Versiya nazorati</b> &mdash; loyihaning har bir o'zgarishini yozib borish va istalgan oldingi holatiga qaytish imkonini beruvchi tizim.</p>" +
        "<p>Git bo'lmasa quyidagi muammolar chiqadi:</p>" +
        "<ol>" +
        "<li>Fayllarning ko'plab nusxalari paydo bo'ladi: <em>loyiha-final2-yangi.html</em>;</li>" +
        "<li>Qaysi nusxa haqiqiy ekanini aniqlab bo'lmaydi;</li>" +
        "<li>Xato qachon va kim tomonidan kiritilgani noma'lum qoladi;</li>" +
        "<li>Ishlaydigan holatga qaytish uchun eski nusxa bo'lishi shart;</li>" +
        "<li>Bir necha kishi bitta loyihada ishlaganda fayllar to'qnashadi va ish yo'qoladi.</li>" +
        "</ol>",
    },
    {
      savol: "<b>Repository</b>, <b>commit</b> va <b>staging area</b> atamalarini o'z so'zingiz bilan tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<ul>" +
        "<li><b>Repository</b> &mdash; Git kuzatib borayotgan loyiha papkasi. Uning ichida barcha tarix (barcha commit lar) saqlanadi;</li>" +
        "<li><b>Commit</b> &mdash; loyiha holatining izoh bilan saqlangan surati. Har bir commit ning o'z hash raqami, muallifi va sanasi bo'ladi;</li>" +
        "<li><b>Staging area</b> &mdash; keyingi commit ga tayyorlanayotgan fayllar ro'yxati. <code>git add</code> faylni shu yerga qo'shadi.</li>" +
        "</ul>" +
        "<p>Ketma-ketlik: ish papkasi &rarr; <code>git add</code> &rarr; staging &rarr; <code>git commit</code> &rarr; repository.</p>",
    },
    {
      savol: "<b>Git</b> va <b>GitHub</b> o'rtasidagi farqni 3-4 gap bilan yozing.",
      tezlik: "Taxminiy vaqt: 5 daqiqa",
      javob:
        "<p><b>Git</b> &mdash; kompyuterga o'rnatiladigan bepul dastur. U loyiha tarixini lokal ravishda, internetsiz saqlaydi.</p>" +
        "<p><b>GitHub</b> &mdash; internetda ishlaydigan xizmat va sayt. U loyihani masofada saqlash, boshqalar bilan bo'lishish va jamoa bo'lib ishlash imkonini beradi.</p>" +
        "<p>Git bo'lmasa GitHub ga loyiha yuborib bo'lmaydi, GitHub bo'lmasa esa Git baribir ishlayveradi &mdash; faqat loyiha internetda saqlanmaydi.</p>",
    },
    {
      savol: "<code>git init</code> dan keyin hosil bo'lgan <b>.git</b> papkasi nima uchun kerak? Uni o'chirsak nima bo'ladi?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><code>.git</code> papkasi &mdash; repository ning yuragi. Unda barcha commit lar, shoxobchalar, sozlamalar va staging area saqlanadi.</p>" +
        "<p>Agar uni o'chirsangiz:</p>" +
        "<ul>" +
        "<li>Loyiha fayllari <b>qoladi</b> &mdash; ular oddiy fayl bo'lib turadi;</li>" +
        "<li>Butun <b>commit tarixi yo'qoladi</b> &mdash; hech qayerga qaytib bo'lmaydi;</li>" +
        "<li>Papka yana oddiy papkaga aylanadi, <code>git status</code> xato beradi.</li>" +
        "</ul>" +
        "<p>Shu sababli <code>.git</code> ni hech qachon qo'lda o'chirmaslik va tahrirlamaslik kerak.</p>",
    },
    {
      savol: "Papkani repository qilishdan commit qilishgacha bo'lgan buyruqlar ketma-ketligini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>To'g'ri ketma-ketlik quyidagicha:</p>" +
        "<ol>" +
        "<li><code>git init</code> &mdash; papkani repository ga aylantiradi;</li>" +
        "<li><code>git status</code> &mdash; fayllar holatini ko'radi;</li>" +
        "<li><code>git add index.html</code> (yoki <code>git add .</code>) &mdash; faylni staging ga qo'shadi;</li>" +
        "<li><code>git commit -m \"Izoh\"</code> &mdash; o'zgarishni tarixga saqlaydi;</li>" +
        "<li><code>git log --oneline</code> &mdash; natijani tekshiradi.</li>" +
        "</ol>" +
        "<p>Muhim: <code>git add</code> qilinmasa, <code>git commit</code> o'sha o'zgarishni saqlamaydi.</p>",
    },
    {
      savol: "Yaxshi commit izohi qanday bo'ladi? 2 ta yaxshi va 2 ta yomon misol keltiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Yaxshi izoh qisqa, aniq va <em>nima qilindi</em> ni aytadi (hozirgi zamonda).</p>" +
        "<p><b>Yaxshi misollar:</b></p>" +
        "<ul>" +
        "<li><em>\"Aloqa formasi validatsiyasi qo'shildi\"</em>;</li>" +
        "<li><em>\"Mobil ko'rinishda menyu tuzatildi\"</em>.</li>" +
        "</ul>" +
        "<p><b>Yomon misollar:</b></p>" +
        "<ul>" +
        "<li><em>\"o'zgarish\"</em> &mdash; nima o'zgargani noma'lum;</li>" +
        "<li><em>\"tuzatdim hammasini\"</em> &mdash; juda umumiy va tekshirib bo'lmaydi.</li>" +
        "</ul>" +
        "<p>Qoida: bir commit &mdash; bitta mantiqiy o'zgarish. Katta ishni kichik commit larga bo'lish kerak.</p>",
    },
    {
      savol: "<code>.gitignore</code> nima uchun kerak? Kamida 3 ta fayl misolini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><code>.gitignore</code> &mdash; Git kuzatmasligi kerak bo'lgan fayllar va papkalar ro'yxati. U repository ning ildiz papkasida turadi.</p>" +
        "<p>Misollar:</p>" +
        "<ul>" +
        "<li><code>*.tmp</code> va <code>Thumbs.db</code> &mdash; vaqtinchalik va tizim fayllari;</li>" +
        "<li><code>.env</code> va <code>parollar.txt</code> &mdash; maxfiy ma'lumotlar. Ular GitHub ga chiqsa, xavfli;</li>" +
        "<li><code>node_modules/</code> &mdash; juda katta papka, uni har kim o'zi o'rnatadi;</li>" +
        "<li><code>*.log</code> &mdash; ish jurnali fayllari.</li>" +
        "</ul>" +
        "<p>Diqqat: agar fayl allaqachon kuzatilayotgan bo'lsa, avval <code>git rm --cached fayl</code> qilish kerak.</p>",
    },
  ],

  test: [
    {
      savol: "Git nima?",
      variantlar: [
        "Internetdagi loyiha saqlash sayti",
        "Versiya nazorati dasturi",
        "Dasturlash tili",
        "Brauzer plagini",
      ],
      togri: 1,
      izoh: "Git &mdash; kompyuterda ishlaydigan versiya nazorati dasturi. Sayt esa GitHub.",
    },
    {
      savol: "Papkani Git repository ga aylantiruvchi buyruq qaysi?",
      variantlar: ["git start", "git add .", "git init", "git create"],
      togri: 2,
      izoh: "git init papkaning ichida yashirin .git papkasini yaratadi.",
    },
    {
      savol: "Faylni keyingi commit uchun tayyorlaydigan buyruq qaysi?",
      variantlar: ["git commit", "git add", "git log", "git push"],
      togri: 1,
      izoh: "git add faylni staging area ga qo'shadi. Faqat shundan keyin git commit uni saqlaydi.",
    },
    {
      savol: "git status da \"Untracked files\" nimani bildiradi?",
      variantlar: [
        "Fayl o'chirilgan",
        "Fayl commit qilingan",
        "Yangi fayl, Git uni hali kuzatmaydi",
        "Fayl boshqa papkada",
      ],
      togri: 2,
      izoh: "Untracked &mdash; Git tanimagan yangi fayl. Uni git add qilish kerak.",
    },
    {
      savol: "Commit tarixini bir qatorda ko'rsatuvchi buyruq qaysi?",
      variantlar: ["git log --oneline", "git status --short", "git diff", "git init"],
      togri: 0,
      izoh: "git log --oneline har bir commit ni hash va izoh bilan bir qatorda chiqaradi.",
    },
    {
      savol: "Quyidagilardan qaysi biri .gitignore ga yozilishi kerak?",
      variantlar: ["index.html", "style.css", ".env", "README.md"],
      togri: 2,
      izoh: ".env faylida maxfiy ma'lumotlar (parol, kalit) bo'ladi &mdash; ular hech qachon tarixga tushmasligi kerak.",
    },
  ],

  lugat: [
    { soz: "Versiya nazorati", izoh: "Loyihaning o'zgarishlarini yozib borish va oldingi holatga qaytish tizimi." },
    { soz: "Git", izoh: "Bepul, lokal ishlaydigan versiya nazorati dasturi." },
    { soz: "GitHub", izoh: "Git loyihalarini internetda saqlash va ulashish xizmati." },
    { soz: "Repository (repo)", izoh: "Git kuzatib borayotgan loyiha va uning butun tarixi." },
    { soz: "Commit", izoh: "Loyiha holatining izoh bilan saqlangan surati." },
    { soz: "Staging area", izoh: "Keyingi commit ga tayyorlangan fayllar ro'yxati (index)." },
    { soz: "Working directory", izoh: "Kompyuterdagi haqiqiy, hozir tahrirlanayotgan fayllar." },
    { soz: "Hash (SHA-1)", izoh: "Har bir commit ning noyob raqamli nomi, masalan a3f5c91." },
    { soz: "Untracked", izoh: "Git hali kuzatmayotgan yangi fayl." },
    { soz: ".gitignore", izoh: "Git kuzatmasligi kerak bo'lgan fayllar ro'yxati." },
    { soz: "Diff", izoh: "Fayldagi o'zgarishlarni qatorlar bo'yicha ko'rsatuvchi natija." },
    { soz: "Terminal / CMD", izoh: "Buyruqlar yoziladigan matnli oyna." },
  ],

  xatolar: [
    "Git ni GitHub bilan bir narsa deb o'ylash. Git &mdash; dastur, GitHub &mdash; xizmat.",
    "git init ni har safar qayta bajarish. Uni loyiha boshida bir marta bajarish kerak.",
    "git add qilmasdan turib git commit yozish &mdash; o'zgarish saqlanmaydi.",
    "Papka va fayl nomlarida bo'sh joy, o'zbek/qaraqalpaq harflari yoki kirillcha harflar ishlatish.",
    "\"tuzatdim\", \"o'zgarish\" kabi mazmunsiz commit izohlari yozish.",
    "Maxfiy fayllarni (.env, parollar.txt) .gitignore ga qo'shmaslik.",
    ".git papkasini qo'lda ochish, tahrirlash yoki o'chirish.",
    "\"Hammasini bitta commit da\" saqlash &mdash; keyin xatoni topish juda qiyinlashadi.",
  ],

  keyingi:
    "Endi sizda lokal repository, birinchi commit lar va tarix bor. Keyingi darsda bu loyihani <b>GitHub</b> ga joylaymiz: akkaunt yaratish, <b>README.md</b> yozish, <b>branch</b> (shoxobcha) bilan ishlash, remote ulash va <code>git push</code> qilish. Bugun o'rgangan commit tushunchasi o'sha darsning poydevori bo'ladi.",
});
