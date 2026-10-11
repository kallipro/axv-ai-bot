/* 15-dars: Git va GitHub bilan tanishuv (2-qism) - GitHub akkaunt, README va branch */

AVX.dars({
  id: "cs8-015",
  sarlavha: "Git va GitHub bilan tanishuv (2-qism): GitHub akkaunt, README.md va branch",
  kiritish:
    "O'tgan darsda loyihamiz kompyuterning o'zida turgan edi. Agar kompyuter buzilsa - hammasi yo'qoladi. Bugun biz loyihani <b>GitHub</b> ga joylaymiz, uning yuzi bo'lgan <b>README.md</b> faylini yozamiz va <b>branch</b> (shoxobcha) yordamida \"asosiy loyihani buzmasdan\" yangi ishlarni qanday bajarishni o'rganamiz.",

  maqsad: [
    "GitHub akkauntini yaratish va profilni to'ldirish tartibini bilish.",
    "Markdown tilida README.md fayli yozishni o'rganish.",
    "Branch (shoxobcha) nima ekanligini va nima uchun kerakligini tushunish.",
    "Lokal repository ni GitHub dagi remote repository bilan ulash.",
    "O'zgarishlarni push va pull qilib, ikki tomonni sinxronlash.",
  ],

  natija: [
    "GitHub da akkaunt yaratadi va profil ma'lumotlarini to'ldiradi.",
    "Loyihasi uchun to'liq README.md yozadi (sarlavha, tavsif, ishlatish, muallif).",
    "<code>git switch -c</code> bilan yangi branch yaratib, unda ishlaydi.",
    "Branch ni <code>git merge</code> orqali asosiy shoxobchaga qo'shadi.",
    "Loyihani <code>git remote add</code> va <code>git push</code> bilan GitHub ga joylaydi.",
    "Boshqa qurilmada <code>git clone</code> bilan loyihani nusxalaydi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: repo, commit, staging, .gitignore."],
    ["5-16 daq", "Mentor tushuntirishi", "GitHub - dasturchining vitrinasi va zaxira saqlash joyi."],
    ["16-28 daq", "Nazariya: GitHub", "Akkaunt, profil, repository interfeysi, remote tushunchasi."],
    ["28-40 daq", "Markdown va README", "README.md ni belgilar bilan yozish, 30 sekund qoidasi."],
    ["40-52 daq", "Branch va merge", "feature branch, switch, merge, konflikt tushunchasi."],
    ["52-72 daq", "Amaliyot: GitHub ga joylash", "remote add, push -u origin main, natijani tekshirish."],
    ["72-77 daq", "Mustaqil ish va uyga vazifa", "README yozish va branch bilan mashq qilish."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. GitHub - dasturchining vitrinasi",
      matn: [
        "Ish beruvchi sizdan \"ishlaringizni ko'rsating\" deb so'rasa, nima ko'rsatasiz? GitHub profilingiz - aynan shu javob. U sizning <em>ish daftaringiz</em> va <em>vitrinangiz</em>.",
        "Loyihalaringiz tarixi, qachon va qancha ish qilganingiz, kod uslubingiz - hammasi ko'rinib turadi. Shu sababli GitHub ni \"kerak bo'lsa ochaman\" deb qoldirmaslik kerak.",
        "Ikkinchi muhim foyda - <b>zaxira</b>. Kompyuter buzilsa yoki o'g'irlansa, loyihangiz GitHub da omon qoladi. Uni yangi kompyuterga bitta buyruq bilan qaytarib olasiz.",
      ],
    },
    {
      sarlavha: "2. README - loyihaga birinchi qarash 30 sekund",
      matn: [
        "GitHub da loyihangiz ochilganda birinchi bo'lib <b>README.md</b> ko'rinadi. Agar u bo'sh bo'lsa, hech kim loyiha nima qilishini tushunmaydi va yopib ketadi.",
        "Tasavvur qiling: siz yangi kutubxona topdingiz. 30 sekundda nimani bilmoqchisiz? <em>Bu nima?</em>, <em>Qanday o'rnatiladi?</em>, <em>Qanday ishlatiladi?</em>, <em>Kim yozgan?</em> - README aynan shu savollarga javob berishi kerak.",
        "Yaxshi README - bu shunchaki burch emas. U o'zingizga ham foyda: 3 oydan keyin loyihaga qaytganingizda qanday ishga tushirishni eslatib turadi.",
      ],
    },
    {
      sarlavha: "3. Branch - asosiy loyihani buzmaslik san'ati",
      matn: [
        "Tasavvur qiling: loyihangiz ishlab turibdi. Endi yangi \"Biz haqimizda\" sahifasini qo'shmoqchisiz. To'g'ridan-to'g'ri asosiy fayllarda ishlasangiz nima bo'ladi? Agar ish chala qolsa, sayt buzilgan holda qoladi.",
        "<b>Branch</b> (shoxobcha) - bu ishning alohida nusxasi. Siz alohida shoxobchada bemalol tajriba qilasiz: xato qilsangiz ham asosiy loyihaga zarar tegmaydi.",
        "Ish tugagach, shoxobchani <code>git merge</code> bilan asosiy shoxobchaga qo'shasiz. Bu - xuddi qoralamada yozib, tozalab, keyin daftarga ko'chirish kabi. Asosiy shoxobcha odatda <b>main</b> deb ataladi.",
      ],
    },
    {
      sarlavha: "4. Push va pull - ikki dunyoni bog'lash",
      matn: [
        "Kompyuteringizdagi repository - <b>lokal</b>. GitHub dagi nusxa - <b>remote</b> (masofadagi). Bu ikki nusxa avtomatik sinxronlanmaydi, buni siz qo'lda bajarasiz.",
        "<code>git push</code> - lokaldagi commit larni GitHub ga yuboradi. <code>git pull</code> - GitHub dagi yangiliklarni kompyuterga tushiradi.",
        "Muhim qoida: ishni boshlashdan oldin <b>pull</b> qiling, ishingizni tugatgandan keyin <b>push</b> qiling. Bu - \"telefonga zaxira qilish\" odati kabidir, faqat jamoa bilan birga.",
      ],
    },
    {
      sarlavha: "5. Parol emas: token yoki SSH kalit",
      matn: [
        "Ko'p o'quvchilar <code>git push</code> paytida GitHub parolini kiritadi va xato oladi. Sababi: 2021-yildan boshlab GitHub <b>parol bilan push qilishni qabul qilmaydi</b>.",
        "Ikki yo'l bor. Birinchisi - <b>Personal Access Token</b>: GitHub sozlamalarida yaratiladigan uzun maxfiy kalit. U parol o'rniga ishlatiladi.",
        "Ikkinchisi - <b>SSH kalit</b>: kompyuterda bir marta yaratiladi va keyin parol so'ramaydi. Ikkalasi ham bepul. Bugun biz osonroq yo'lni - token ni ko'rib chiqamiz.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. GitHub interfeysining asosiy bo'limlari",
      matn: [
        "Repository sahifasida qaysi bo'lim nima uchun kerakligini bilish muhim.",
      ],
      jadval: [
        ["Bo'lim", "Nima uchun kerak"],
        ["Code", "Loyiha fayllari, README, commit tarixi"],
        ["Issues", "Xatolar, takliflar va vazifalar ro'yxati"],
        ["Pull requests", "Boshqa kishi kiritgan o'zgarishni ko'rib chiqish va qabul qilish"],
        ["Actions", "Avtomatik tekshiruv va joylash (CI/CD)"],
        ["Projects", "Kanban doska ko'rinishidagi vazifalar"],
        ["Settings", "Repo nomi, ko'rinishi (public/private), hamkorlar"],
        ["Releases", "Loyihaning tayyor versiyalari (v1.0, v1.1)"],
      ],
    },
    {
      sarlavha: "2. Markdown belgilari - README ning tili",
      matn: [
        "README.md fayli <b>Markdown</b> tilida yoziladi. U oddiy matn, lekin belgilar orqali tuzilma beradi.",
      ],
      jadval: [
        ["Nima yozasiz", "Natija"],
        ["# Sarlavha", "Eng katta sarlavha (H1)"],
        ["## Bo'lim", "Kichikroq sarlavha (H2)"],
        ["**qalin**", "Qalin matn"],
        ["*qiya*", "Qiya (kursiv) matn"],
        ["- element", "Belgili ro'yxat"],
        ["1. element", "Raqamli ro'yxat"],
        ["[matn](havola)", "Bosiladigan havola"],
        ["![izoh](rasm.png)", "Rasm qo'shish"],
        ["> iqtibos", "Iqtibos bloki"],
        ["- [ ] vazifa", "Belgilanmagan vazifa (checkbox)"],
        ["4 ta bo'sh joy + kod", "Kod bloki"],
      ],
      callout: {
        turi: "info",
        sarlavha: "Fayl kengaytmasi muhim",
        matn: "Fayl nomi albatta <b>README.md</b> bo'lishi kerak - <code>.md</code> kengaytmasi Markdown ekanini bildiradi. <code>readme.txt</code> GitHub tomonidan chiroyli ko'rsatilmaydi.",
      },
    },
    {
      sarlavha: "3. Branch bilan ishlash oqimi",
      matn: [
        "Real loyihalarda ish quyidagi bosqichlarda bajariladi. Bu oqimni yodlab olsangiz, jamoada ishlash oson bo'ladi.",
      ],
      jadval: [
        ["Qadam", "Buyruq", "Nima bo'ladi"],
        ["1. Yangi shoxobcha", "<code>git switch -c feature/menyu</code>", "main dan nusxa olinadi"],
        ["2. Ish va commit", "<code>git add .</code> va <code>git commit</code>", "O'zgarish shoxobchada saqlanadi"],
        ["3. Shoxobchani yuborish", "<code>git push -u origin feature/menyu</code>", "GitHub da ham paydo bo'ladi"],
        ["4. Pull request", "GitHub saytida", "Jamoa o'zgarishni ko'rib chiqadi"],
        ["5. Birlashtirish", "<code>git switch main</code> va <code>git merge</code>", "O'zgarish main ga qo'shiladi"],
        ["6. Tozalash", "<code>git branch -d feature/menyu</code>", "Keraksiz shoxobcha o'chiriladi"],
      ],
    },
    {
      sarlavha: "4. Lokal va remote repository",
      matn: [
        "Ikki nusxa o'rtasidagi munosabatni tushunish - push/pull ni to'g'ri ishlatishning kaliti.",
      ],
      jadval: [
        ["Tushuncha", "Nima", "Buyruq"],
        ["Lokal repo", "Kompyuteringizdagi nusxa", "<code>git commit</code>"],
        ["Remote (origin)", "GitHub dagi nusxa", "<code>git push</code>, <code>git pull</code>"],
        ["origin", "Standart remote nomi", "<code>git remote add origin URL</code>"],
        ["upstream", "Shoxobchaning GitHub dagi juftligi", "<code>git push -u origin main</code>"],
        ["clone", "Remote dan to'liq nusxa olish", "<code>git clone URL</code>"],
        ["fetch", "Yangilikni olib, birlashtirmaslik", "<code>git fetch</code>"],
      ],
    },
    {
      sarlavha: "5. Autentifikatsiya usullari",
      matn: [
        "GitHub ga ulanishning ikki asosiy usuli. Ikkalasi ham bepul va parolga qaraganda xavfsizroq.",
      ],
      jadval: [
        ["Belgi", "Personal Access Token (HTTPS)", "SSH kalit"],
        ["Qanday yaratiladi", "GitHub, Settings, Developer settings", "Kompyuterda <code>ssh-keygen</code>"],
        ["Har safar kiritish", "Token bir marta saqlanadi", "Hech narsa so'ramaydi"],
        ["Manzil ko'rinishi", "https://github.com/ism/repo.git", "git@github.com:ism/repo.git"],
        ["Yangi boshlovchi uchun", "Osonroq", "Bir marta sozlanadi, keyin qulay"],
        ["Muddati", "Belgilangan muddatda tugaydi", "Muddat yo'q, xohlaganda o'chiriladi"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Tokenni hech kimga bermang",
        matn: "Token - bu parolning o'zi. Uni ekranga chiqarmang, chatga yozmang va kod faylida saqlamang. Token <b>kodga yozilsa</b>, u GitHub ga tushib qoladi va darhol o'chirish kerak bo'ladi.",
      },
    },
  ],

  rasmlar: [
    {
      "tur": "oyna",
      "sarlavha": "README.md namunasi",
      "tushuntirish": "README &mdash; loyihaning birinchi sahifasi. Uni ochgan odam loyiha nima ekanini darhol tushunadi.",
      "oyna": {
        "nom": "README.md",
        "manzil": "C:/loyihalar/mening-saytim/README.md",
        "qatorlar": [
          "# Mening saytim",
          "Bu loyiha 8-sinf o'quvchisi tomonidan yaratildi.",
          "## Nima bor",
          "- index.html — asosiy sahifa",
          "- style.css — dizayn fayli",
          "## Muallif",
          "Ism Familiya, 2026-yil"
        ]
      },
      "izoh": "Fayl nomi aynan <code>README.md</code> bo'lishi kerak &mdash; bosh harflar bilan. GitHub uni avtomatik ko'rsatadi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Markdown belgilari",
      "tushuntirish": "README va boshqa .md fayllar Markdown tilida yoziladi. Belgilar sodda &mdash; ular yozuvni chiroyli ko'rinishga o'giradi.",
      "elementlar": [
        {
          "belgi": "#",
          "nom": "Sarlavha",
          "izoh": "<code># Katta</code>, <code>## Kichik</code> &mdash; karetka belgisi"
        },
        {
          "belgi": "-",
          "nom": "Ro'yxat",
          "izoh": "<code>- birinchi</code> &mdash; har qator boshida chiziqcha"
        },
        {
          "belgi": "**",
          "nom": "Qalin matn",
          "izoh": "<code>**muhim so'z**</code> &mdash; ikki yulduzcha orasiga"
        },
        {
          "belgi": "*",
          "nom": "Kursiv",
          "izoh": "<code>*eglatilgan so'z*</code> &mdash; bir yulduzcha"
        },
        {
          "belgi": "[]()",
          "nom": "Havola",
          "izoh": "<code>[Matn](https://sayt.uz)</code> &mdash; kvadrat va oddiy qavslar"
        },
        {
          "belgi": "```",
          "nom": "Kod bloki",
          "izoh": "Uchta teskari apostrof orasiga kod yoziladi"
        },
        {
          "belgi": "| |",
          "nom": "Jadval",
          "izoh": "<code>| Ism | Baho |</code> &mdash; vertikal chiziqlar bilan"
        }
      ],
      "izoh": "Belgilarni yodlash shart emas &mdash; eng ko'p ishlatiladigan to'rttasini bilsangiz yetadi."
    },
    {
      "tur": "qadam",
      "sarlavha": "Yangi sahifa: branch, commit, merge",
      "tushuntirish": "Yangi ishni asosiy shoxobchada qilmaslik &mdash; Git ning oltin qoidasi. Ish alohida shoxobchada bajariladi.",
      "elementlar": [
        {
          "nom": "Yangi shoxobcha ochish",
          "izoh": "<code>git switch -c about-sahifa</code> &mdash; nom nima qilinayotganini bildirsin"
        },
        {
          "nom": "Faylni yaratib o'zgartirish",
          "izoh": "Masalan <code>about.html</code> faylini yaratasiz"
        },
        {
          "nom": "Commit qilish",
          "izoh": "<code>git add .</code> va <code>git commit -m &quot;about sahifasi&quot;</code>"
        },
        {
          "nom": "Asosiy shoxobchaga qaytish",
          "izoh": "<code>git switch main</code>"
        },
        {
          "nom": "Birlashtirish (merge)",
          "izoh": "<code>git merge about-sahifa</code> &mdash; ish main ga qo'shiladi"
        }
      ],
      "izoh": "Shoxobcha &mdash; xavfsiz ish joyi. Xato ketsa ham main shoxobcha toza qoladi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Konflikt: nima bo'ladi va nima qilinadi",
      "tushuntirish": "Bir xil qator ikki shoxobchada har xil o'zgartirilsa, Git o'zi tanlay olmaydi va yordam so'raydi.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "⚠️",
          "sarlavha": "Git nima aytadi",
          "royxat": [
            "<em>CONFLICT (content): Merge conflict in index.html</em>",
            "Fayl ichida <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> va <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> belgilari paydo bo'ladi"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Siz nima qilasiz",
          "royxat": [
            "Faylni ochib, kerakli qatorlarni qoldirasiz",
            "Ortiqcha belgilarni o'chirasiz",
            "<code>git add .</code> va <code>git commit</code> qilasiz"
          ]
        }
      ],
      "izoh": "Konflikt &mdash; xato emas, oddiy holat. Uni tushungan odam xotirjam hal qiladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "GitHub Pages: saytni bepul joylash",
      "tushuntirish": "GitHub statik saytni bepul internetga chiqarib beradi. Sayt havolasi bir necha daqiqada tayyor bo'ladi.",
      "elementlar": [
        {
          "nom": "Loyihani GitHub ga push qilish",
          "izoh": "<code>git push -u origin main</code>"
        },
        {
          "nom": "Sozlamalarni ochish",
          "izoh": "Repository &rarr; <b>Settings</b> bo'limi"
        },
        {
          "nom": "Pages bo'limini tanlash",
          "izoh": "Chap menyudan <b>Pages</b>"
        },
        {
          "nom": "Shoxobchani tanlash",
          "izoh": "Source: <b>main</b>, papka: <b>/ (root)</b> &rarr; Save"
        },
        {
          "nom": "Havolani olish",
          "izoh": "Bir daqiqadan so'ng: <code>login.github.io/loyiha</code>"
        }
      ],
      "izoh": "Sayt faqat statik fayllardan (HTML, CSS, rasm) iborat bo'lsa GitHub Pages da ishlaydi."
    },
    {
      "tur": "royxat",
      "sarlavha": "Litsenziya turlari",
      "tushuntirish": "Litsenziya loyihadan kim qanday foydalanishi mumkinligini belgilaydi.",
      "elementlar": [
        {
          "belgi": "🟢",
          "nom": "MIT",
          "izoh": "Erkin foydalanish, o'zgartirish va tarqatish mumkin"
        },
        {
          "belgi": "🔵",
          "nom": "Apache 2.0",
          "izoh": "MIT ga o'xshash, qo'shimcha patent himoyasi bilan"
        },
        {
          "belgi": "🟡",
          "nom": "GPL",
          "izoh": "O'zgartirilgan loyiha ham ochiq kodli bo'lishi shart"
        },
        {
          "belgi": "🔴",
          "nom": "Litsenziyasiz",
          "izoh": "Rasman hech kim foydalana olmaydi &mdash; yaxshi emas"
        }
      ],
      "izoh": "Ochiq loyihalar uchun eng ko'p tanlanadigani &mdash; <b>MIT</b>."
    },
    {
      "tur": "royxat",
      "sarlavha": "GitHub ga chiqarishdan oldin nazorat ro'yxati",
      "tushuntirish": "Loyihani ommaga chiqarishdan oldin shu 5 ta narsani tekshirish odat qilib olinsin.",
      "elementlar": [
        {
          "belgi": "✅",
          "nom": "README.md to'liq",
          "izoh": "Loyiha nima ekani va qanday ishga tushirilishi yozilgan"
        },
        {
          "belgi": "✅",
          "nom": ".gitignore ishlayapti",
          "izoh": "Maxfiy va vaqtinchalik fayllar kuzatilmayapti"
        },
        {
          "belgi": "✅",
          "nom": "Parol va kalitlar yo'q",
          "izoh": "Kod ichida parol, token yoki API kalit qolmagan"
        },
        {
          "belgi": "✅",
          "nom": "Litsenziya tanlangan",
          "izoh": "LICENSE fayli qo'shilgan"
        },
        {
          "belgi": "✅",
          "nom": "Commit izohlari tartibli",
          "izoh": "Har bir izoh nima qilinganini bildiradi"
        }
      ],
      "izoh": "Bu ro'yxat &mdash; ishonchli dasturchining kundalik odati."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Branch bilan tanishish",
      "tushuntirish": "Avval shoxobchalar ro'yxatini ko'ramiz, keyin yangisini yaratamiz. Yangi shoxobcha main ning to'liq nusxasi bo'ladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "git branch - faqat ko'rsatadi, git switch - shoxobchani almashtiradi.",
      "kod": ":: Mavjud shoxobchalarni ko'rish\ngit branch\n\n:: Lokal va masofadagi barcha shoxobchalar\ngit branch -a\n\n:: Yangi shoxobcha yaratib, darhol o'shanga o'tish\ngit switch -c feature/about-sahifa\n\n:: Qaysi shoxobchada turganimizni tekshirish\ngit branch\ngit status",
      "natija": "* main\n\nSwitched to a new branch 'feature/about-sahifa'\n\n* feature/about-sahifa\n  main\n\nOn branch feature/about-sahifa\nnothing to commit, working tree clean"
    },
    {
      "sarlavha": "Shoxobchani main ga qo'shish: merge",
      "tushuntirish": "Ish tugadi - endi o'zgarishni asosiy shoxobchaga qo'shamiz. Merge dan oldin main ga o'tish kerak.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Merge paytida konflikt chiqsa, vahima qilmang - keyingi misolda ko'rsatilgan.",
      "kod": ":: Asosiy shoxobchaga qaytish\ngit switch main\n\n:: Yangi fayllarning main da yo'qligini ko'rish\ndir\n\n:: Shoxobchani main ga qo'shish\ngit merge feature/about-sahifa\n\n:: Natijani tekshirish\ngit log --oneline -3\ndir",
      "natija": "Switched to branch 'main'\n\nUpdating a3f5c91..4d8e2c1\nFast-forward\n about.html | 14 ++++++++++++++\n 1 file changed, 14 insertions(+)\n create mode 100644 about.html\n\n4d8e2c1 Biz haqimizda sahifasi qo'shildi\na3f5c91 Bosh sahifa va sarlavha qo'shildi"
    },
    {
      "sarlavha": "GitHub repository yaratish va remote ulash",
      "tushuntirish": "GitHub saytida <b>New repository</b> tugmasi bilan bo'sh repo yaratamiz (README qo'shmasdan), keyin lokal repo ni unga ulaymiz.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "origin - masofadagi nusxaning standart nomi. Uni xohlagancha nomlash mumkin, lekin origin odat.",
      "kod": ":: Masofadagi manzilni ulash\ngit remote add origin https://github.com/kallibek/mening-loyiham.git\n\n:: Ulangan manzillarni tekshirish\ngit remote -v\n\n:: Asosiy shoxobcha nomini main ga keltirish (agar oldin master bo'lsa)\ngit branch -M main\n\n:: Birinchi marta yuborish va shoxobchani bog'lash\ngit push -u origin main",
      "natija": "origin  https://github.com/kallibek/mening-loyiham.git (fetch)\norigin  https://github.com/kallibek/mening-loyiham.git (push)\n\nEnumerating objects: 12, done.\nCounting objects: 100% (12/12), done.\nWriting objects: 100% (12/12), 1.42 KiB | 512.00 KiB/s, done.\n\nTo https://github.com/kallibek/mening-loyiham.git\n * [new branch]      main -> main\nbranch 'main' set up to track 'origin/main'."
    },
    {
      "sarlavha": "Kundalik push va pull",
      "tushuntirish": "Birinchi push dan keyin <code>-u origin main</code> yozish shart emas - Git shoxobchani eslab qoladi. Endi faqat <code>git push</code> yetarli.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Ishni boshlashdan oldin pull, tugatgandan keyin push - bu oltin qoida.",
      "kod": ":: GitHub dagi yangiliklarni olish (ish boshlashdan oldin)\ngit pull\n\n:: O'zgarishlarni saqlash\ngit add .\ngit commit -m \"Aloqa formasi qo'shildi\"\n\n:: GitHub ga yuborish\ngit push\n\n:: GitHub dagi holatni ko'rish\ngit log origin/main --oneline -3",
      "natija": "Already up to date.\n\n[main 9c4b7e2] Aloqa formasi qo'shildi\n 2 files changed, 38 insertions(+)\n\nTo https://github.com/kallibek/mening-loyiham.git\n   a3f5c91..9c4b7e2  main -> main\n\n9c4b7e2 Aloqa formasi qo'shildi\n4d8e2c1 Biz haqimizda sahifasi qo'shildi"
    },
    {
      "sarlavha": "Boshqa kompyuterda loyihani nusxalash: clone",
      "tushuntirish": "Boshqa kompyuterda yoki boshqa papkada loyihani olish uchun <code>git clone</code> ishlatiladi. U fayllar bilan birga butun tarixni ham tushiradi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Clone - bir marta bajariladigan ish. Keyin faqat pull va push kerak bo'ladi.",
      "kod": ":: Kompyuterga loyihani to'liq nusxalash\ngit clone https://github.com/kallibek/mening-loyiham.git\n\n:: Papkaga kirish\ncd mening-loyiham\n\n:: Tarix va manzilni tekshirish\ngit log --oneline -5\ngit remote -v\n\n:: Boshqa nom bilan nusxalash\ngit clone https://github.com/kallibek/mening-loyiham.git yangi-nom",
      "natija": "Cloning into 'mening-loyiham'...\nremote: Enumerating objects: 24, done.\nReceiving objects: 100% (24/24), 3.18 KiB, done.\n\n9c4b7e2 Aloqa formasi qo'shildi\n4d8e2c1 Biz haqimizda sahifasi qo'shildi\na3f5c91 Bosh sahifa va sarlavha qo'shildi"
    },
    {
      "sarlavha": "Kunlik ishni avtomatlashtiruvchi BAT skript",
      "tushuntirish": "Har kuni bir xil buyruqlarni yozmaslik uchun kichik skript. U o'zgarishlarni saqlaydi va GitHub ga yuboradi.",
      "nom": "yuklash.bat",
      "til": "cmd",
      "izoh": "Skriptni loyiha papkasiga joylang. Xato bo'lsa, ekranda to'xtab turadi (pause).",
      "kod": "@echo off\nchcp 65001 >nul\ntitle GitHub ga yuklash\n\necho === HOLAT ===\ngit status --short\n\necho.\nset /p izoh=Commit izohini yozing: \n\nif \"%izoh%\"==\"\" (\n  echo Izoh bosh! Skript to'xtatildi.\n  pause\n  exit /b\n)\n\ngit add .\ngit commit -m \"%izoh%\"\ngit push\n\necho.\necho === TAYYOR ===\ngit log --oneline -3\npause",
      "natija": "=== HOLAT ===\n M index.html\n\nCommit izohini yozing: Menyu mobil ko'rinishda tuzatildi\n[main 1e7b3a4] Menyu mobil ko'rinishda tuzatildi\n 1 file changed, 6 insertions(+), 2 deletions(-)\n\n=== TAYYOR ===\n1e7b3a4 Menyu mobil ko'rinishda tuzatildi"
    },
    {
      "sarlavha": "Shoxobchalar tarixini ko'rish",
      "tushuntirish": "Bir necha shoxobcha bilan ishlagandan keyin ularning qanday birlashganini ko'rish uchun maxsus ko'rinish ishlatiladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Grafik ko'rinish shoxobchalarning qayerda ajralib, qayerda qo'shilganini ko'rsatadi.",
      "kod": ":: Shoxobchalar grafigi\ngit log --oneline --graph --all\n\n:: Har bir shoxobcha oxirgi commit ini ko'rish\ngit branch -v\n\n:: Keraksiz shoxobchani o'chirish\ngit branch -d feature/about-sahifa\n\n:: Masofadagi shoxobchalarni tozalash\ngit fetch --prune",
      "natija": "* 7f2a9d3 (HEAD -> main) Konflikt yechildi\n*   4d8e2c1 Biz haqimizda sahifasi qo'shildi\n|\\\n| * 1e7b3a4 (feature/menyu) Menyu qo'shildi\n|/\n* a3f5c91 Bosh sahifa va sarlavha qo'shildi\n\n* main           7f2a9d3 Konflikt yechildi\n  feature/menyu  1e7b3a4 Menyu qo'shildi"
    },
    {
      "sarlavha": "Jamoada ishlashda foydali qo'shimcha buyruqlar",
      "tushuntirish": "Bir guruhda ishlaganda tez-tez kerak bo'ladigan buyruqlar. Ularni sinab ko'ring, lekin mazmunini tushunib ishlatish shart.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "git fetch xavfsiz buyruq - u hech narsani o'zgartirmaydi, faqat yangilikni olib keladi.",
      "kod": ":: Masofadagi shoxobchalar ro'yxati\ngit branch -r\n\n:: Boshqa odamning shoxobchasini lokalga olib kelish\ngit switch -c hamkor/menyu origin/hamkor/menyu\n\n:: Bitta commit ni boshqa shoxobchaga ko'chirish\ngit cherry-pick 1e7b3a4\n\n:: Qaysi faylni kim oxirgi marta o'zgartirganini ko'rish\ngit blame index.html\n\n:: O'zgarishni vaqtincha chetga qo'yish\ngit stash\ngit stash pop",
      "natija": "origin/main\norigin/feature/menyu\n\n1e7b3a4 (Kallibek 2026-10-12) index.html 14-qator: nav elementi qo'shildi\n\nSaved working directory and index state WIP on main\nDropped refs/stash@{0}"
    }
  ],

  amaliy: [
    "Brauzerda github.com saytiga kirib, bepul akkaunt yarating. Profilga ism, rasm (ixtiyoriy) va qisqa tavsif qo'shing.",
    "GitHub da <b>New repository</b> tugmasi bilan <code>git-amaliy</code> nomli repo yarating. <em>Add a README file</em> ni belgilamang - bo'sh repo kerak.",
    "O'tgan darsda yaratgan lokal papkangizda <code>README.md</code> faylini tuzing: sarlavha, tavsif, \"Nima bor?\", \"Qanday ishga tushiriladi?\" va \"Muallif\" bo'limlari bilan.",
    "<code>git add README.md</code> va <code>git commit -m \"README.md qo'shildi\"</code> bilan o'zgarishni saqlang.",
    "<code>git switch -c feature/kontakt</code> bilan yangi shoxobcha yaratib, unda <code>contact.html</code> faylini yarating va commit qiling.",
    "<code>git switch main</code> va <code>git merge feature/kontakt</code> bilan shoxobchani asosiy shoxobchaga qo'shing.",
    "<code>git remote add origin &lt;sizning repo manzilingiz&gt;</code> qilib, <code>git push -u origin main</code> bilan GitHub ga yuboring. Saytda fayllar paydo bo'lganini tekshiring.",
    "GitHub da Settings, Pages bo'limidan saytni yoqing va 2 daqiqadan keyin havola orqali ochib ko'ring.",
  ],
  uyga: [
    {
      savol: "<b>README.md</b> nima uchun kerak? Yaxshi README da qanday bo'limlar bo'lishi kerak?",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>README.md</b> - GitHub da loyiha ochilganda birinchi ko'rinadigan fayl. U loyihaning \"yuzi\".</p>" +
        "<p>Yaxshi README da quyidagi bo'limlar bo'ladi:</p>" +
        "<ul>" +
        "<li><b>Sarlavha</b> - loyiha nomi va bir qatorda maqsadi;</li>" +
        "<li><b>Tavsif</b> - loyiha nima qiladi, kim uchun;</li>" +
        "<li><b>O'rnatish / ishlatish</b> - qanday ishga tushiriladi (buyruqlar bilan);</li>" +
        "<li><b>Texnologiyalar</b> - HTML, CSS, JavaScript kabi vositalar;</li>" +
        "<li><b>Muallif</b> - ism va aloqa manzili;</li>" +
        "<li>Ixtiyoriy: skrinshot, litsenziya, hissa qo'shish qoidalari.</li>" +
        "</ul>" +
        "<p>Qoida: begona odam 30 sekund ichida loyiha nima qilishini tushunishi kerak.</p>",
    },
    {
      savol: "<b>Branch</b> (shoxobcha) nima va nima uchun asosiy shoxobchada to'g'ridan-to'g'ri ishlamaslik kerak?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Branch</b> - loyihaning mustaqil shoxobchasi. U asosiy kodning to'liq nusxasi bo'lib, undagi o'zgarishlar asosiy shoxobchaga ta'sir qilmaydi.</p>" +
        "<p>Asosiy shoxobchada to'g'ridan-to'g'ri ishlamaslikning sabablari:</p>" +
        "<ul>" +
        "<li>Chala qolgan ish asosiy loyihani buzadi;</li>" +
        "<li>Xato qilsangiz, qaytarish qiyin bo'ladi;</li>" +
        "<li>Ikki kishi bir vaqtda bir faylda ishlasa, to'qnashuv ko'payadi;</li>" +
        "<li>Jamoa o'zgarishni ko'rib chiqish imkoniga ega bo'lmaydi.</li>" +
        "</ul>" +
        "<p>To'g'ri oqim: <code>git switch -c feature/...</code>, keyin ish va commit, oxirida merge.</p>",
    },
    {
      savol: "<b>push</b> va <b>pull</b> buyruqlari nima qiladi? Ular qaysi ikki narsani bog'laydi?",
      tezlik: "Taxminiy vaqt: 5 daqiqa",
      javob:
        "<p>Bu buyruqlar <b>lokal</b> repository (kompyuterdagi nusxa) va <b>remote</b> repository (GitHub dagi nusxa) o'rtasidagi aloqani ta'minlaydi.</p>" +
        "<ul>" +
        "<li><code>git push</code> - lokal commit larni GitHub ga <b>yuboradi</b>;</li>" +
        "<li><code>git pull</code> - GitHub dagi yangiliklarni kompyuterga <b>tushiradi</b>.</li>" +
        "</ul>" +
        "<p>Oltin qoida: ishni boshlashdan oldin <code>git pull</code>, ishni tugatgandan keyin <code>git push</code>.</p>" +
        "<p>Eslatma: <code>git fetch</code> faqat yangilikni olib keladi, birlashtirmaydi. <code>git pull</code> esa fetch va merge ni birga bajaradi.</p>",
    },
    {
      savol: "<b>Konflikt</b> qachon yuzaga keladi va uni qanday yechish kerak? 5 qadamda yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p>Konflikt bir xil faylning bir xil qatori ikki shoxobchada har xil o'zgartirilganda yuzaga keladi. Git qaysi variantni tanlashni bilmaydi.</p>" +
        "<ol>" +
        "<li><code>git status</code> bilan konflikt bo'lgan fayllarni aniqlash (\"both modified\");</li>" +
        "<li>Faylni ochib, <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> belgilarini topish;</li>" +
        "<li>To'g'ri matnni qoldirib, ortiqcha qatorlar va belgilarni o'chirish;</li>" +
        "<li>Faylni saqlash va <code>git add fayl-nomi</code> qilish;</li>" +
        "<li><code>git commit -m \"Konflikt yechildi\"</code> bilan yakunlash.</li>" +
        "</ol>",
    },
    {
      savol: "Nega GitHub <b>parol</b> bilan push qilishni qabul qilmaydi? Nima ishlatish kerak?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>2021-yildan boshlab GitHub xavfsizlik uchun parol bilan autentifikatsiyani to'xtatdi - parol hech qachon kod, skript yoki tarixga tushmasligi kerak.</p>" +
        "<p>Ikki xavfsiz usul bor:</p>" +
        "<ul>" +
        "<li><b>Personal Access Token</b> - GitHub, Settings, Developer settings bo'limida yaratiladi. U parol o'rniga kiritiladi va istalgan payt o'chirilishi mumkin;</li>" +
        "<li><b>SSH kalit</b> - kompyuterda <code>ssh-keygen</code> bilan yaratilib, GitHub ga ochiq kalit qo'shiladi. Keyin parol so'ralmaydi.</li>" +
        "</ul>" +
        "<p>Token ham parol kabi maxfiy: uni hech kimga bermaslik va kod faylida saqlamaslik kerak.</p>",
    },
    {
      savol: "O'z loyihangiz uchun <b>3 ta branch</b> nomini o'ylab toping va har biri nima ish qilishini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Branch nomlari qisqa, lotin harflarda va chiziqcha bilan yoziladi. Namuna:</p>" +
        "<ul>" +
        "<li><code>feature/aloqa-sahifa</code> - yangi \"Aloqa\" sahifasini qo'shish;</li>" +
        "<li><code>fix/menyu-xatosi</code> - mobil ko'rinishda menyu ochilmayotgan xatoni tuzatish;</li>" +
        "<li><code>docs/readme-yangilash</code> - README faylini to'ldirish va rasmlar qo'shish.</li>" +
        "</ul>" +
        "<p>Muhim: har bir branch bitta vazifaga bag'ishlanadi. Branch nomidan uning maqsadi ko'rinib turishi kerak.</p>",
    },
    {
      savol: "<code>git clone</code> va <code>git pull</code> farqini tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Buyruq</th><th>Qachon ishlatiladi</th><th>Natija</th></tr>" +
        "<tr><td><code>git clone</code></td><td>Loyiha hali kompyuterda yo'q bo'lganda</td><td>To'liq nusxa va butun tarix tushadi</td></tr>" +
        "<tr><td><code>git pull</code></td><td>Loyiha allaqachon mavjud bo'lganda</td><td>Faqat yangi o'zgarishlar tushadi</td></tr>" +
        "</table>" +
        "<p>Ya'ni: <b>clone</b> - bir marta, loyihani birinchi marta olishda. <b>pull</b> - keyinchalik, har safar yangilik olayotganda.</p>",
    },
  ],

  test: [
    {
      savol: "Yangi shoxobcha yaratib, darhol o'shanga o'tadigan buyruq qaysi?",
      variantlar: ["git branch yangi", "git switch -c yangi", "git merge yangi", "git push yangi"],
      togri: 1,
      izoh: "git switch -c ham yaratadi, ham almashtiradi. Faqat yaratish uchun git branch ishlatiladi.",
    },
    {
      savol: "Lokal commit larni GitHub ga yuboruvchi buyruq qaysi?",
      variantlar: ["git pull", "git clone", "git push", "git fetch"],
      togri: 2,
      izoh: "git push lokaldagi o'zgarishlarni masofadagi (remote) repository ga yuboradi.",
    },
    {
      savol: "Markdown da eng katta sarlavha qanday yoziladi?",
      variantlar: ["## Sarlavha", "# Sarlavha", "**Sarlavha**", "> Sarlavha"],
      togri: 1,
      izoh: "Bitta # belgisi H1 (eng katta) sarlavhani beradi. ## esa H2.",
    },
    {
      savol: "GitHub da standart remote nomi qanday bo'ladi?",
      variantlar: ["main", "github", "origin", "remote1"],
      togri: 2,
      izoh: "origin - standart nom. main esa shoxobcha nomi (branch), remote emas.",
    },
    {
      savol: "Konflikt yechilgandan keyin qanday buyruqlar ketma-ketligi bajariladi?",
      variantlar: [
        "git push, keyin git pull",
        "git add, keyin git commit",
        "git init, keyin git add",
        "git status, keyin git clone",
      ],
      togri: 1,
      izoh: "Konfliktli fayl tahrirlangach, git add qilinadi va git commit bilan birlashtirish yakunlanadi.",
    },
    {
      savol: "README fayli qanday nom bilan saqlanishi kerak?",
      variantlar: ["readme.txt", "README.md", "Readme.doc", "README.md.html"],
      togri: 1,
      izoh: "Aynan README.md - bunda .md kengaytmasi Markdown ekanini bildiradi va GitHub uni chiroyli ko'rsatadi.",
    },
  ],

  lugat: [
    { soz: "GitHub", izoh: "Git loyihalarini internetda saqlash va bo'lishish xizmati." },
    { soz: "Remote", izoh: "Masofadagi repository nusxasi (odatda origin deb ataladi)." },
    { soz: "origin", izoh: "Standart remote nomi." },
    { soz: "Branch (shoxobcha)", izoh: "Ishning mustaqil nusxasi; asosiy shoxobchaga ta'sir qilmaydi." },
    { soz: "main", izoh: "Asosiy shoxobchaning standart nomi (ilgari master)." },
    { soz: "merge", izoh: "Bir shoxobchadagi o'zgarishlarni boshqasiga qo'shish." },
    { soz: "Konflikt", izoh: "Bir xil qator ikki joyda har xil o'zgargan holat; qo'lda yechiladi." },
    { soz: "README.md", izoh: "Loyihaning asosiy tavsif fayli, Markdown tilida yoziladi." },
    { soz: "Markdown", izoh: "Belgilar orqali matnni formatlaydigan yengil til." },
    { soz: "Push", izoh: "Lokal commit larni remote ga yuborish." },
    { soz: "Pull", izoh: "Remote dagi yangiliklarni olib, birlashtirish." },
    { soz: "Clone", izoh: "Remote repository ning to'liq nusxasini olish." },
    { soz: "Pull request", izoh: "O'zgarishni ko'rib chiqish uchun yuborish so'rovi." },
    { soz: "Token", izoh: "Parol o'rnida ishlatiladigan maxfiy kalit." },
    { soz: "GitHub Pages", izoh: "Statik saytni bepul internetga chiqarish xizmati." },
    { soz: "LICENSE", izoh: "Loyihadan foydalanish qoidalarini belgilovchi fayl." },
  ],

  xatolar: [
    "README.md ni umuman yozmaslik - loyiha tushunarsiz bo'lib qoladi.",
    "Parol bilan push qilishga urinish - GitHub parolni qabul qilmaydi, token yoki SSH kerak.",
    "Tokenni kod fayli yoki skript ichiga yozib qo'yish.",
    "Asosiy (main) shoxobchada to'g'ridan-to'g'ri, ehtiyotsiz ishlash.",
    "Shoxobcha nomini \"test\", \"yangi\", \"111\" kabi mazmunsiz qo'yish.",
    "git pull qilmasdan ishni boshlash - keyin konfliktlar ko'payadi.",
    ".gitignore ni keyin qo'shish - allaqachon yuborilgan maxfiy fayl tarixda qoladi.",
    "Loyihani public qilib, ichida shaxsiy ma'lumot (telefon, parol, manzil) qoldirish.",
  ],

  keyingi:
    "Endi loyihangiz internetda va jamoa bilan ishlashga tayyor. Keyingi darsda <b>Git ning asosiy buyruqlarini</b> chuqur o'rganamiz: <code>init</code>, <code>add</code>, <code>commit</code>, <code>status</code>, <code>log</code>, <code>diff</code>, <code>restore</code>, <code>clone</code>, <code>push</code> va <code>pull</code> - har biri qaysi holatda kerakligi va tez-tez uchraydigan xatolar bilan. Shuningdek o'zingizga qulay <em>qisqa buyruqlar (alias)</em> yaratishni ham o'rganamiz.",
});
