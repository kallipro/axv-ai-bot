/* 16-dars: Git va GitHub bilan tanishuv (3-qism) - Git asosiy buyruqlari */

AVX.dars({
  id: "cs8-016",
  sarlavha: "Git va GitHub bilan tanishuv (3-qism): Git asosiy buyruqlari (init, add, commit, status, log)",
  kiritish:
    "O'tgan ikki darsda biz Git ning <b>mantiqini</b> o'rgandik: repository, commit, branch, push. Endi <b>qo'llarimizni ishga solamiz</b>. Bugun Git ning eng ko'p ishlatiladigan buyruqlarini chuqur o'rganamiz va o'zimizga qulay qisqa buyruqlar (alias) yasaymiz. Bu darsdan keyin siz terminalga qarab qolmay, <em>nima qilayotganingizni bilib</em> buyruq yozasiz.",

  maqsad: [
    "Git ning asosiy buyruqlarini guruhlar bo'yicha tizimli o'rganish.",
    "add, commit, status, log va diff buyruqlarining variantlarini bilish.",
    "Xatoni qanday qaytarishni (restore, reset, revert) tushunish.",
    "Kundalik ish oqimini bir marta mashq qilib, odatga aylantirish.",
    "O'ziga qulay alias (qisqa buyruq) va sozlamalarni yaratish.",
  ],

  natija: [
    "Faylning holatini <code>git status</code> bilan to'g'ri o'qiydi.",
    "Kerakli faylni tanlab, <code>git add</code> va <code>git commit</code> qiladi.",
    "Tarixni <code>git log</code> ning turli formatlarida ko'radi.",
    "Xato commit yoki o'zgarishni <code>git restore</code> bilan qaytaradi.",
    "O'ziga <code>st</code>, <code>lg</code> kabi qisqa buyruqlar (alias) yaratadi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: remote, push, pull, branch."],
    ["5-15 daq", "Mentor tushuntirishi", "Buyruqni yodlash emas, mantiqni tushunish."],
    ["15-28 daq", "Nazariya: buyruqlar guruhi", "8 guruh va ularning vazifasi."],
    ["28-42 daq", "Amaliyot: asosiy oqim", "init, status, add, commit, log - birgalikda."],
    ["42-55 daq", "Amaliyot: diff va qaytarish", "diff, restore, reset, rm, mv buyruqlari."],
    ["55-70 daq", "Amaliyot: aliases va jamoaviy ish", "Fetch, pull, stash, alias sozlash."],
    ["70-77 daq", "Mustaqil ish va uyga vazifa", "Cheat-sheet tuzish va mashqlar."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Buyruqni yodlash emas, mantiqni tushunish",
      matn: [
        "Git da 30 dan ortiq buyruq bor, lekin kundalik ishda faqat 8-10 tasi kerak bo'ladi. Qolganlarini yodlash shart emas &mdash; kerak bo'lganda <code>git help</code> yoki internetdan qarab olasiz.",
        "Asosiy mantiq bitta: <b>ish papkasi &rarr; staging &rarr; repository</b>. Har bir buyruq shu uch maydonning birida ish qiladi. Shu zanjirni bilsangiz, buyruqning maqsadini taxmin qila olasiz.",
        "Masalan <code>git add</code> &mdash; ish papkasidan staging ga o'tkazadi. <code>git commit</code> &mdash; staging dan repository ga yozadi. <code>git restore</code> &mdash; aksincha, repository dan ish papkasiga qaytaradi.",
      ],
    },
    {
      sarlavha: "2. Ishonchingiz komil bo'lmasa - status bosing",
      matn: [
        "Professional dasturchilar ham gunoh qilmaydi, lekin ular <code>git status</code> ni juda ko'p bosadi. Bu buyruq hech narsani o'zgartirmaydi &mdash; faqat holatni ko'rsatadi.",
        "\"Nima bo'lyapti?\", \"men nima qildim?\", \"nima qoldi?\" &mdash; bu savollarning barchasiga <code>git status</code> javob beradi. Xato qilishdan qo'rqqan odam status bosadi.",
        "Odat qiling: har bir buyruqdan oldin va keyin status ni ko'ring. Bir hafta ichida bu odat avtomatik bo'lib qoladi.",
      ],
    },
    {
      sarlavha: "3. add va commit ning to'g'ri nisbati",
      matn: [
        "Yangi boshlovchilar ko'pincha kun oxirida bitta katta commit qiladi: \"bugungi ishlar\". Bir oy o'tib qaysi o'zgarish qaysi xatoni keltirgani noma'lum bo'ladi.",
        "Yaxshi usul &mdash; <b>mikrocommit</b>: kichik mantiqiy qism tugagach darhol commit qilish. Masalan: \"Sarlavha qo'shildi\", \"Ranglar tuzatildi\", \"Forma validatsiyasi qo'shildi\".",
        "Shunda xato chiqsa, <code>git log</code> dan qaysi commit da kirganini topib, aynan o'sha commit ni tekshirish mumkin bo'ladi.",
      ],
    },
    {
      sarlavha: "4. Xatodan qo'rqmaslik kerak",
      matn: [
        "Git ning eng yaxshi tomoni: <em>deyarli hamma narsa qaytariladi</em>. Commit qilmagan o'zgarishni ham, commit qilgan o'zgarishni ham orqaga qaytarish yo'li bor.",
        "Faqat bitta joyda ehtiyot bo'lish kerak: <b>GitHub ga push qilingan</b> tarixni o'zgartirish. Boshqalar o'sha commit larni allaqachon olib bo'lgan bo'lishi mumkin. Shuning uchun push qilingandan keyin tarixni \"tuzatish\" faqat o'z shoxobchangizda qilinadi.",
        "Qolgan hamma narsani bemalol sinab ko'ring. Sinab ko'rish &mdash; o'rganishning eng tez yo'li. Papkangizni buzib qo'ysangiz ham GitHub dagi nusxa bor.",
      ],
    },
    {
      sarlavha: "5. Alias - o'z qo'lingizga moslashtirish",
      matn: [
        "Kuniga 30 marta <code>git status</code> yozsangiz, yiliga bu 10 mingdan ortiq harf. Alias yordamida buni <code>git st</code> ga qisqartirish mumkin.",
        "Alias &mdash; bu o'zingiz yaratadigan qisqa buyruq. Misol: <code>git config --global alias.st status</code> dan keyin <code>git st</code> ishlaydi.",
        "Muhim maslahat: alias ni faqat buyruqni <em>yaxshi tushunganingizdan keyin</em> yarating. Aks holda \"nima bosdim?\" degan holat yuzaga keladi. Kompyuter sinfida tekshiruv ishlarida alias o'rniga to'liq buyruq yozish topshiriladi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Buyruqlar guruhlari",
      matn: [
        "Git buyruqlarini guruhlarga bo'lib o'rganish oson. Quyidagi jadval &mdash; kundalik ishda kerak bo'ladigan buyruqlarning to'liq xaritasi.",
      ],
      jadval: [
        ["Guruh", "Buyruqlar", "Vazifasi"],
        ["Sozlash", "config, help, version", "Ism, pochta, sozlamalar"],
        ["Boshlash", "init, clone", "Repository yaratish yoki nusxalash"],
        ["Holat", "status, diff, log, show", "Nima o'zgarganini ko'rish"],
        ["Saqlash", "add, commit", "O'zgarishni tarixga yozish"],
        ["Qaytarish", "restore, reset, revert", "Xatoni bekor qilish"],
        ["Shoxobcha", "branch, switch, merge", "Branch bilan ishlash"],
        ["Masofa", "remote, push, pull, fetch", "GitHub bilan sinxronlash"],
        ["Fayl", "rm, mv, stash", "Faylni o'chirish, ko'chirish, chetga qo'yish"],
      ],
    },
    {
      sarlavha: "2. Fayl holati va kerakli buyruq",
      matn: [
        "Agar fayl qaysi holatda ekanini bilsangiz, qaysi buyruq kerakligini ham bilib olasiz.",
      ],
      jadval: [
        ["status da ko'rinishi", "Ma'nosi", "Kerakli buyruq"],
        ["Untracked files", "Yangi fayl, kuzatilmaydi", "<code>git add fayl</code>"],
        ["Changes not staged", "O'zgardi, staging ga qo'shilmagan", "<code>git add fayl</code>"],
        ["Changes to be committed", "Commit ga tayyor", "<code>git commit -m</code>"],
        ["nothing to commit", "Hammasi saqlangan", "Hech narsa kerak emas"],
        ["both modified", "Konflikt (merge paytida)", "Qo'lda tahrir, keyin <code>git add</code>"],
      ],
    },
    {
      sarlavha: "3. Commit ni bekor qilish usullari",
      matn: [
        "Bu eng ko'p savol beriladigan mavzu. Uch xil holat uchun uch xil buyruq bor &mdash; ularni aralashtirib yubormaslik kerak.",
      ],
      jadval: [
        ["Vaziyat", "Buyruq", "Nima bo'ladi"],
        ["Oxirgi commit izohini tuzatish", "<code>git commit --amend -m \"Yangi izoh\"</code>", "Commit qayta yoziladi (hash o'zgaradi)"],
        ["Commit ni bekor qilib, o'zgarishni saqlash", "<code>git reset --soft HEAD~1</code>", "O'zgarish staging da qoladi"],
        ["Commit ni bekor qilib, staging dan chiqarish", "<code>git reset HEAD~1</code>", "O'zgarish ish papkasida qoladi"],
        ["Hammasini o'chirib, oldingi holatga qaytish", "<code>git reset --hard HEAD~1</code>", "O'zgarish <b>butunlay yo'qoladi</b>"],
        ["Push qilingan commit ni xavfsiz bekor qilish", "<code>git revert HASH</code>", "Yangi \"teskari\" commit yaratiladi"],
      ],
      callout: {
        turi: "warn",
        sarlavha: "Eng xavfli buyruq",
        matn: "<code>git reset --hard</code> saqlanmagan o'zgarishlarni <b>butunlay o'chiradi</b>. Uni ishlatishdan oldin <code>git stash</code> qilib qo'yish yoki o'zgarishni boshqa faylga nusxalash foydali.",
      },
    },
    {
      sarlavha: "4. log ni formatlash uchun belgilar",
      matn: [
        "<code>git log --format</code> yordamida tarixni o'zingizga kerakli ko'rinishda chiqarish mumkin. Belgilar foiz (%) dan boshlanadi.",
      ],
      jadval: [
        ["Belgi", "Ma'nosi", "Misol natija"],
        ["%h", "Qisqa hash", "a3f5c91"],
        ["%H", "To'liq hash", "a3f5c91d8e2b47a1f0c9e6b8"],
        ["%an", "Muallif ismi", "Kallibek Jumanazarov"],
        ["%s", "Commit izohi", "Forma validatsiyasi qo'shildi"],
        ["%ar", "Nisbiy sana", "2 kun oldin"],
        ["%d", "Shoxobcha va teg", "(HEAD -> main, origin/main)"],
      ],
      royhat: [
        "Misol: <code>git log --format=\"%h | %an | %s\"</code> &mdash; qisqa va o'qishga qulay jadval.",
        "Misol: <code>git log --oneline --graph --all</code> &mdash; shoxobchalar grafigi.",
        "Misol: <code>git log --since=\"1 week ago\"</code> &mdash; oxirgi haftadagi commit lar.",
        "Misol: <code>git log --author=\"Kallibek\" --oneline</code> &mdash; bir kishining commit lari.",
      ],
    },
    {
      sarlavha: "5. Tez-tez ishlatiladigan alias lar",
      matn: [
        "Quyidagi jadval &mdash; dasturchilar eng ko'p yaratadigan qisqa buyruqlar. Ularni o'zingizga moslab qo'shing.",
      ],
      jadval: [
        ["Alias", "To'liq buyruq", "Nima qiladi"],
        ["st", "status", "Holatni ko'rsatadi"],
        ["co", "checkout", "Shoxobchani almashtiradi"],
        ["br", "branch", "Shoxobchalar ro'yxati"],
        ["lg", "log --oneline --graph", "Chiroyli tarix"],
        ["last", "log -1 HEAD --stat", "Oxirgi commit haqida"],
        ["unstage", "reset HEAD --", "Faylni staging dan chiqaradi"],
        ["save", "stash", "O'zgarishni chetga qo'yadi"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "qadam",
      "sarlavha": "Faylning to'rt holati",
      "tushuntirish": "Git faylni to'rt holatdan birida ko'radi. <code>git status</code> aynan qaysi holatda ekanini aytadi.",
      "elementlar": [
        {
          "nom": "Untracked &mdash; kuzatilmaydi",
          "izoh": "Yangi fayl. Git uni hali tanimaydi (qizil rangda ko'rinadi)"
        },
        {
          "nom": "Staged &mdash; tayyorlangan",
          "izoh": "<code>git add</code> dan keyingi holat: keyingi commit ga kiradi"
        },
        {
          "nom": "Committed &mdash; saqlangan",
          "izoh": "<code>git commit</code> bajarildi: o'zgarish tarixga yozildi"
        },
        {
          "nom": "Modified &mdash; o'zgartirilgan",
          "izoh": "Commit dan keyin fayl yana tahrirlandi &mdash; yana add kerak"
        }
      ],
      "izoh": "Bu to'rt holatni tushungan odam Git da adashmaydi &mdash; buyruqlar o'zi tartibga tushadi."
    },
    {
      "tur": "oyna",
      "sarlavha": "Bir varaqlik cheat-sheet",
      "tushuntirish": "Kundalik ishda eng ko'p kerak bo'ladigan buyruqlar. Chop etib, kompyuter yoniga qo'yish mumkin.",
      "oyna": {
        "nom": "git-cheatsheet.txt",
        "ustunlar": [
          "Buyruq",
          "Vazifasi"
        ],
        "qatorlar": [
          [
            "git init",
            "Yangi repository yaratish"
          ],
          [
            "git status",
            "Nima o'zgarganini ko'rish"
          ],
          [
            "git add .",
            "Barcha o'zgarishni tayyorlash"
          ],
          [
            "git commit -m \"izoh\"",
            "O'zgarishni saqlash"
          ],
          [
            "git log --oneline",
            "Tarixni qisqa ko'rish"
          ],
          [
            "git switch -c nom",
            "Yangi shoxobcha ochish"
          ],
          [
            "git pull",
            "Yangilikni olish"
          ],
          [
            "git push",
            "O'zgarishni yuborish"
          ]
        ]
      },
      "izoh": "Shu sakkizta buyruq &mdash; kundalik ishning 90 foizi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "git fetch va git pull farqi",
      "tushuntirish": "Ikkalasi ham yangilikni oladi, lekin biri xavfsizroq &mdash; farqni bilish muhim.",
      "ustunlar": [
        {
          "turi": "yaxshi",
          "belgi": "🛡️",
          "sarlavha": "git fetch",
          "royxat": [
            "Faqat yangilikni <b>yuklaydi</b>",
            "Ishchi fayllaringizga tegmaydi",
            "Avval ko'rib, keyin qaror qilasiz &mdash; xavfsiz"
          ]
        },
        {
          "turi": "brand",
          "belgi": "⚡",
          "sarlavha": "git pull",
          "royxat": [
            "<b>fetch + merge</b> birgalikda",
            "Yuklaydi va darhol ishchi fayllarga qo'shadi",
            "Tez, lekin konflikt chiqishi mumkin"
          ]
        }
      ],
      "izoh": "Muhim ish paytida <code>git fetch</code> bilan avval ko'rish &mdash; shtatli odat."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Eng qisqa to'liq oqim: init dan log gacha",
      "tushuntirish": "Yangi loyihada eng ko'p kerak bo'ladigan beshta buyruq. Bu ketma-ketlikni yodlab olsangiz, ish boshlash muammo bo'lmaydi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Shu 5 ta buyruq - Git ishining 80 foizi. Qolganlari qo'shimcha qulayliklar.",
      "kod": ":: 1. Papkani repository ga aylantirish\ngit init\n\n:: 2. Holatni ko'rish (yangi fayllar)\ngit status\n\n:: 3. Fayllarni staging ga qo'shish\ngit add index.html style.css\n\n:: 4. Tarixga saqlash\ngit commit -m \"Bosh sahifa va uslublar qo'shildi\"\n\n:: 5. Natijani ko'rish\ngit log --oneline",
      "natija": "Initialized empty Git repository in C:/.../loyiha/.git/\nOn branch main\nNo commits yet\nUntracked files: index.html, style.css\n\n[main (root-commit) 8b1a2c3] Bosh sahifa va uslublar qo'shildi\n 2 files changed, 46 insertions(+)\n\n8b1a2c3 Bosh sahifa va uslublar qo'shildi"
    },
    {
      "sarlavha": "status ning to'rt holati ketma-ket",
      "tushuntirish": "Bir fayl qanday qilib to'rt xil holatdan o'tishini kuzatamiz. Bu &mdash; Git ni tushunishning eng tez yo'li.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Har bir qadamdan keyin git status bosib, matn o'zgarishini kuzatib boring.",
      "kod": ":: 1-holat: fayl yaratildi, Git ko'rmayapti\necho \"<h1>Salom</h1>\" > index.html\ngit status --short\n\n:: 2-holat: staging ga qo'shildi\ngit add index.html\ngit status --short\n\n:: 3-holat: commit qilindi\ngit commit -m \"Bosh sahifa qo'shildi\"\ngit status --short\n\n:: 4-holat: fayl yana o'zgartirildi\necho \"<h1>Salom Dunyo</h1>\" > index.html\ngit status --short",
      "natija": "1-holat:  ?? index.html      (untracked - yangi fayl)\n2-holat:  A  index.html      (added - staging da)\n3-holat:  (bo'sh)            (hammasi saqlangan)\n4-holat:   M index.html      (modified - o'zgargan)\n\nBelgilar: ?? yangi, A qo'shilgan, M o'zgargan, D o'chirilgan"
    },
    {
      "sarlavha": "git add ning barcha variantlari",
      "tushuntirish": "<code>git add</code> ni har kim biladi, lekin uning variantlarini bilish ishni ancha tezlashtiradi va xatolardan saqlaydi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "git add . yangi fayllarni ham qo'shadi, git add -u faqat kuzatilayotganlarni.",
      "kod": ":: Bitta faylni qo'shish\ngit add index.html\n\n:: Bir necha faylni birga\ngit add index.html style.css\n\n:: Butun papkani (papka nomi bilan)\ngit add css/\n\n:: Barcha o'zgarishlar (yangi fayllar bilan)\ngit add .\n\n:: Faqat kuzatilayotgan fayllarning o'zgarishi (yangi fayl qo'shilmaydi)\ngit add -u\n\n:: Faqat HTML fayllar (yulduzcha bilan)\ngit add *.html\n\n:: Har bir o'zgarishni ko'rib, tanlab qo'shish\ngit add -p",
      "natija": "git add -p rejimida Git har bir o'zgarish bo'lagini ko'rsatadi va so'raydi:\n\nStage this hunk [y,n,q,a,d,s,e,?]? y\n\ny - ha, qo'shish\nn - yo'q, o'tkazib yuborish\nq - to'xtatish\na - qolgan hammasini qo'shish\nd - qolgan hammasini o'tkazib yuborish"
    },
    {
      "sarlavha": "git commit ning variantlari",
      "tushuntirish": "Commit izohi bilan ishlashning bir necha usuli. Ko'p qatorli izoh katta o'zgarishlar uchun foydali.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Ko'p qatorli izoh uchun qo'shtirnoqni yopmasdan, mavzu va tafsilotni ikki qatorga yozing.",
      "kod": ":: Oddiy commit\ngit commit -m \"Aloqa formasi qo'shildi\"\n\n:: Kuzatilayotgan fayllarni qo'shib, darhol commit (yangi fayl qo'shilmaydi)\ngit commit -am \"Sarlavha matni tuzatildi\"\n\n:: Izohni tahrirlash uchun muharrirni ochish\ngit commit\n\n:: Oxirgi commit izohini tuzatish (hali push qilinmagan bo'lsa)\ngit commit --amend -m \"Aloqa formasi va validatsiya qo'shildi\"\n\n:: Bo'sh commit (faqat sinov uchun, o'zgarish yo'q)\ngit commit --allow-empty -m \"Loyiha boshlanishi\"",
      "natija": "[main 4c7d2e1] Aloqa formasi qo'shildi\n 1 file changed, 24 insertions(+)\n\n[main 9f3b7a2] Aloqa formasi va validatsiya qo'shildi\n Date: Thu Oct 16 15:10:03 2026 +0500\n 1 file changed, 28 insertions(+)\n\nEslatma: --amend hash ni o'zgartiradi - yangi commit id hosil bo'ladi."
    },
    {
      "sarlavha": "git log ni turli ko'rinishlarda o'qish",
      "tushuntirish": "Tarixni o'qishni bilish &mdash; xatoni tez topish demakdir. Quyidagi variantlar kundalik ishda eng ko'p kerak bo'ladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Katta tarixda chiqish uchun q tugmasini bosing (yoki --no-pager qo'shing).",
      "kod": ":: Bir qatorda\ngit log --oneline\n\n:: Grafik ko'rinish (shoxobchalar bilan)\ngit log --oneline --graph --all\n\n:: Oxirgi 3 ta commit\ngit log -3\n\n:: Har bir commit da o'zgargan fayllar\ngit log --stat\n\n:: O'zingizning commit laringiz\ngit log --author=\"Kallibek\" --oneline\n\n:: Oxirgi hafta ichida\ngit log --since=\"1 week ago\" --oneline\n\n:: Faqat sizga kerakli maydonlar\ngit log --format=\"%h | %an | %ar | %s\"",
      "natija": "9f3b7a2 | Kallibek Jumanazarov | 12 sekund oldin | Aloqa formasi va validatsiya qo'shildi\n4c7d2e1 | Kallibek Jumanazarov | 2 soat oldin | Aloqa formasi qo'shildi\n8b1a2c3 | Kallibek Jumanazarov | 1 kun oldin | Bosh sahifa va uslublar qo'shildi\n\nGrafik ko'rinish:\n* 9f3b7a2 (HEAD -> main) Aloqa formasi va validatsiya qo'shildi\n* 4c7d2e1 Aloqa formasi qo'shildi\n* 8b1a2c3 Bosh sahifa va uslublar qo'shildi"
    },
    {
      "sarlavha": "git diff - aniq nima o'zgarganini ko'rish",
      "tushuntirish": "<code>git status</code> qaysi fayl o'zgarganini aytadi, <code>git diff</code> esa aynan qaysi qator o'zgarganini ko'rsatadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Minus (-) qatorlar olib tashlangan, plyus (+) qatorlar qo'shilgan degani.",
      "kod": ":: Staging ga qo'shilmagan o'zgarishlar\ngit diff\n\n:: Staging ga qo'shilgan o'zgarishlar (commit ga nima kiradi)\ngit diff --staged\n\n:: Oxirgi commit bilan farq\ngit diff HEAD\n\n:: Faqat bitta fayl bo'yicha\ngit diff index.html\n\n:: Faqat o'zgargan fayllar nomi\ngit diff --name-only\n\n:: Statistika: nechta qator qo'shildi/olib tashlandi\ngit diff --stat",
      "natija": "diff --git a/index.html b/index.html\n--- a/index.html\n+++ b/index.html\n@@ -10,2 +10,3 @@\n-  <p>Version: 1.0</p>\n+  <p>Version: 1.2</p>\n+  <p>Muallif: Kallibek</p>\n\ngit diff --stat:\n index.html | 3 ++-\n 1 file changed, 2 insertions(+), 1 deletion(-)"
    },
    {
      "sarlavha": "Xatoni qaytarish: restore va reset",
      "tushuntirish": "Bu buyruqlarni bilish xotirjam ishlash imkonini beradi. Har biri o'z vaziyatida ishlatiladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "restore xavfsizroq: u faqat fayl mazmunini qaytaradi, tarixga tegmaydi.",
      "kod": ":: 1. Faylni oxirgi commit holatiga qaytarish (o'zgarish yo'qoladi)\ngit restore index.html\n\n:: 2. Faylni staging dan chiqarish (o'zgarish faylda qoladi)\ngit restore --staged index.html\n\n:: 3. Oxirgi commit ni bekor qilib, o'zgarishni staging da qoldirish\ngit reset --soft HEAD~1\n\n:: 4. Oxirgi commit ni bekor qilib, o'zgarishni ish papkasida qoldirish\ngit reset HEAD~1\n\n:: 5. Push qilingan commit ni xavfsiz bekor qilish\ngit revert 4c7d2e1\n\n:: 6. Diqqat! Hamma o'zgarishni butunlay o'chirish\ngit reset --hard HEAD",
      "natija": "1: index.html ga kiritilgan saqlanmagan o'zgarish o'chdi\n2: git status da \"Changes not staged\" holatiga qaytdi\n3: [main 4c7d2e1] commit bekor qilindi, o'zgarish staging da\n4: o'zgarish ish papkasida, staging bo'sh\n5: [main a1b2c3d] Revert \"Aloqa formasi qo'shildi\"\n6: OGOHLANTIRISH - bu buyruq saqlanmagan ishlarni o'chiradi"
    },
    {
      "sarlavha": "Faylni o'chirish va ko'chirish: rm, mv",
      "tushuntirish": "Faylni oddiy o'chirsangiz ham Git buni ko'radi, lekin <code>git rm</code> va <code>git mv</code> buni to'g'ri va aniq bajaradi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "git mv - bu ikki amalning birikmasi: faylni ko'chirish va staging ga qo'shish.",
      "kod": ":: Faylni o'chirish va buni commit ga tayyorlash\ngit rm eski-sahifa.html\n\n:: Faylni diskda qoldirib, faqat Git kuzatuvidan chiqarish\ngit rm --cached maxfiy.txt\n\n:: Faylni ko'chirish yoki nomini o'zgartirish\ngit mv index.html bosh-sahifa.html\n\n:: Papkani ko'chirish\ngit mv css/ styles/\n\n:: O'zgarishni saqlash\ngit commit -m \"Fayllar nomi standartlashtirildi\"",
      "natija": "rm 'eski-sahifa.html'\nrm 'maxfiy.txt'    (fayl diskda qoldi)\n\n[main b7c4e19] Fayllar nomi standartlashtirildi\n 3 files changed, 2 insertions(+), 2 deletions(-)\n rename index.html => bosh-sahifa.html (100%)\n\nEslatma: git mv dan keyin alohida git add qilish shart emas."
    },
    {
      "sarlavha": "Loyihani nusxalash: clone va remote",
      "tushuntirish": "Boshqa kompyuterda ishlashni boshlash uchun avval loyihani nusxalash kerak. <code>clone</code> fayllar bilan birga butun tarixni ham tushiradi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Clone qilingandan keyin remote allaqachon sozlangan bo'ladi - qayta ulash shart emas.",
      "kod": ":: To'liq nusxalash\ngit clone https://github.com/kallibek/mening-loyiham.git\n\n:: Boshqa nom bilan\ngit clone https://github.com/kallibek/mening-loyiham.git maktab-loyihasi\n\n:: Faqat oxirgi commit ni olish (tarixsiz, katta loyihalar uchun tez)\ngit clone --depth 1 https://github.com/kallibek/mening-loyiham.git\n\n:: Papkaga kirib tekshirish\ncd mening-loyiham\ngit remote -v\ngit log --oneline -3",
      "natija": "Cloning into 'mening-loyiham'...\nremote: Enumerating objects: 36, done.\nReceiving objects: 100% (36/36), 5.20 KiB, done.\n\norigin  https://github.com/kallibek/mening-loyiham.git (fetch)\norigin  https://github.com/kallibek/mening-loyiham.git (push)\n\n9f3b7a2 Aloqa formasi va validatsiya qo'shildi"
    },
    {
      "sarlavha": "GitHub bilan sinxronlash: fetch, pull, push",
      "tushuntirish": "Uch buyruqning farqini aniq bilish kerak. Chalkashsangiz, ortiqcha konflikt va tushunmovchilik chiqadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "fetch - xavfsiz: faqat olib keladi. pull - olib kelib darhol birlashtiradi.",
      "kod": ":: GitHub dagi yangilikni olib kelish (birlashtirmaydi)\ngit fetch\n\n:: Nima yangi kelganini ko'rish\ngit log HEAD..origin/main --oneline\n\n:: Olib kelib, darhol birlashtirish\ngit pull\n\n:: O'z ishingizni yuborish\ngit push\n\n:: Yangi shoxobchani yuborib, juftlikni o'rnatish\ngit push -u origin feature/menyu\n\n:: Mavjud shoxobchaning juftligini keyin o'rnatish\ngit branch --set-upstream-to=origin/main main",
      "natija": "From https://github.com/kallibek/mening-loyiham\n   9f3b7a2..c4d8e11  main       -> origin/main\n\nHEAD..origin/main natijasi:\nc4d8e11 Hamkor tomonidan dizayn tuzatildi\n\ngit pull natijasi:\nUpdating 9f3b7a2..c4d8e11\nFast-forward\n style.css | 12 ++++++++----\n\ngit push natijasi:\nTo https://github.com/kallibek/mening-loyiham.git\n   8b1a2c3..3e5f9a0  main -> main"
    },
    {
      "sarlavha": "Tugallanmagan ishni chetga qo'yish: git stash",
      "tushuntirish": "Agar ish yarim yo'lda bo'lsa-yu, boshqa shoxobchaga o'tish kerak bo'lsa, <code>git stash</code> o'zgarishlarni vaqtincha yashiradi va ish papkasi tozalanadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Stash - commit qilmagan o'zgarishlarni saqlash usuli. Pull qilishdan oldin juda foydali.",
      "kod": ":: O'zgarishlarni vaqtincha yashirish\ngit stash\n\n:: Izoh bilan yashirish\ngit stash push -m \"menyu ustida ish\"\n\n:: Saqlangan ro'yxatni ko'rish\ngit stash list\n\n:: Eng oxirgi stash ni qaytarish (ro'yxatdan o'chadi)\ngit stash pop\n\n:: Stash ni qaytarish, lekin ro'yxatda qoldirish\ngit stash apply\n\n:: Keraksiz stash ni o'chirish\ngit stash drop stash@{0}",
      "natija": "Saved working directory and index state WIP on main: 9f3b7a2 Aloqa formasi\n\nstash@{0}: On main: menyu ustida ish\nstash@{1}: WIP on main: 9f3b7a2 Aloqa formasi qo'shildi\n\nOn branch main\nChanges not staged for commit:\n        modified:   index.html\nDropped refs/stash@{0}"
    },
    {
      "sarlavha": "O'z aliasingizni yaratish",
      "tushuntirish": "Alias lar <code>.gitconfig</code> faylida saqlanadi. Ularni buyruq bilan yoki faylni tahrirlab qo'shish mumkin.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Alias nomini buyruq bilan to'qnashmaydigan qilib tanlang: st, lg, br, co.",
      "kod": ":: Alias larni yaratish\ngit config --global alias.st status\ngit config --global alias.lg \"log --oneline --graph --all\"\ngit config --global alias.br branch\ngit config --global alias.co checkout\ngit config --global alias.last \"log -1 HEAD --stat\"\ngit config --global alias.unstage \"reset HEAD --\"\n\n:: Yaratilganini tekshirish\ngit config --global --list\n\n:: Ishlatish\ngit st\ngit lg",
      "natija": "user.name=Kallibek Jumanazarov\nalias.st=status\nalias.lg=log --oneline --graph --all\nalias.br=branch\nalias.co=checkout\nalias.last=log -1 HEAD --stat\nalias.unstage=reset HEAD --\n\ngit lg natijasi:\n* 9f3b7a2 (HEAD -> main) Aloqa formasi va validatsiya qo'shildi\n* 4c7d2e1 Aloqa formasi qo'shildi\n* 8b1a2c3 Bosh sahifa va uslublar qo'shildi"
    },
    {
      "sarlavha": "Kundalik muammolar uchun retseptlar",
      "tushuntirish": "Amalda eng ko'p uchraydigan 8 holat va ularning yechimi. Bu ro'yxatni saqlab qo'yish foydali.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Har bir buyruqdan oldin git status qilish odatini saqlang.",
      "kod": ":: 1. Xato faylni staging ga qo'shdim\ngit restore --staged xato.txt\n\n:: 2. Faylni tasodifan o'chirdim (commit qilingan edi)\ngit restore ochirilgan-fayl.html\n\n:: 3. Commit izohimda xato bor (hali push qilmadim)\ngit commit --amend -m \"To'g'ri izoh\"\n\n:: 4. Xato shoxobchada ishlayapman\ngit stash\ngit switch togri-shoxobcha\ngit stash pop\n\n:: 5. Pull qilolmayapman: \"local changes would be overwritten\"\ngit stash\ngit pull\ngit stash pop\n\n:: 6. Keraksiz faylni GitHub dan olib tashlash kerak\ngit rm --cached maxfiy.txt\necho maxfiy.txt >> .gitignore\ngit commit -m \"maxfiy.txt kuzatuvdan chiqarildi\"\n\n:: 7. Commit ni butunlay bekor qilish (saqlab)\ngit reset --soft HEAD~1\n\n:: 8. Oxirgi commit nima o'zgartirganini ko'rish\ngit show HEAD --stat",
      "natija": "1: xato.txt staging dan chiqdi, fayl o'chmadi\n2: fayl oxirgi commit holatida qayta tiklandi\n3: [main 2f8c1a9] To'g'ri izoh   (hash o'zgardi)\n4: o'zgarish ko'chirildi, konflikt bo'lsa qo'lda yechiladi\n5: pull muvaffaqiyatli o'tdi, o'zgarish qaytarildi\n6: fayl diskda qoldi, GitHub dan kuzatuvi olindi\n7: commit bekor, o'zgarish staging da\n8: commit hash, muallif, va o'zgargan fayllar ro'yxati"
    },
    {
      "sarlavha": "Kunlik ish oqimini avtomatlashtiruvchi skript",
      "tushuntirish": "Kunlik ishni bitta tugma bilan bajarish uchun skript. U tekshiruvlarni ham o'z ichiga oladi.",
      "nom": "kunlik.bat",
      "til": "cmd",
      "izoh": "Xato bo'lsa skript to'xtaydi va sababni ko'rsatadi. Bu - xavfsiz yondashuv.",
      "kod": "@echo off\nchcp 65001 >nul\ntitle Git kunlik ish oqimi\n\necho === 1. HOLAT TEKSHIRUVI ===\ngit status --short\n\necho.\necho === 2. GITHUB DAN YANGILIK ===\ngit pull\nif errorlevel 1 (\n  echo XATO: pull bajarilmadi. Sababini tekshiring.\n  pause\n  exit /b 1\n)\n\necho.\nset /p izoh=Commit izohini yozing: \nif \"%izoh%\"==\"\" (\n  echo Izoh bosh! Skript to'xtatildi.\n  pause\n  exit /b 1\n)\n\necho.\necho === 3. SAQLASH ===\ngit add .\ngit commit -m \"%izoh%\"\n\necho.\necho === 4. YUBORISH ===\ngit push\nif errorlevel 1 (\n  echo XATO: push bajarilmadi.\n  pause\n  exit /b 1\n)\n\necho.\necho === TAYYOR ===\ngit log --oneline -5\npause",
      "natija": "=== 1. HOLAT TEKSHIRUVI ===\n M index.html\n\n=== 2. GITHUB DAN YANGILIK ===\nAlready up to date.\n\nCommit izohini yozing: Mobil menyu tuzatildi\n=== 3. SAQLASH ===\n[main 7a2c9f1] Mobil menyu tuzatildi\n\n=== 4. YUBORISH ===\nTo https://github.com/kallibek/mening-loyiham.git\n   3e5f9a0..7a2c9f1  main -> main\n\n=== TAYYOR ===\n7a2c9f1 Mobil menyu tuzatildi"
    }
  ],

  amaliy: [
    "Ish stolida <code>buyruqlar-mashqi</code> papkasini yaratib, <code>git init</code> bilan repository oching.",
    "<code>index.html</code> va <code>style.css</code> fayllarini yaratib, <code>git status --short</code> natijasini daftaringizga yozib oling.",
    "<code>git add index.html</code> qiling, keyin <code>git status --short</code> bilan <code>A</code> belgisi paydo bo'lganini ko'ring.",
    "Birinchi commit ni qiling, so'ng faylni tahrirlab <code>git diff</code> va <code>git diff --staged</code> orasidagi farqni kuzatib ko'ring.",
    "<code>git log --oneline --graph --all</code> va <code>git log --format=\"%h | %an | %s\"</code> buyruqlarini sinab ko'ring.",
    "Faylni o'zgartirib, <code>git restore index.html</code> bilan qaytarishni mashq qiling. O'zgarish yo'qolganiga ishonch hosil qiling.",
    "Ikkinchi commit qilib, <code>git reset --soft HEAD~1</code> bilan uni bekor qiling va o'zgarish staging da qolganini tekshiring.",
    "<code>git config --global alias.st status</code>, <code>alias.lg \"log --oneline --graph --all\"</code> va <code>alias.br branch</code> larni yaratib, sinab ko'ring.",
    "Darsdagi <code>kunlik.bat</code> skriptini loyihaga qo'shib, bir marta ishga tushiring va natijani tekshiring.",
  ],

  uyga: [
    {
      savol: "<code>git status --short</code> natijasidagi <b>??</b>, <b>A</b>, <b>M</b> va <b>D</b> belgilarini tushuntiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Belgi</th><th>Ma'nosi</th><th>Nima qilish kerak</th></tr>" +
        "<tr><td>??</td><td>Untracked - yangi fayl, Git tanimaydi</td><td>git add fayl</td></tr>" +
        "<tr><td>A</td><td>Added - staging ga qo'shilgan</td><td>git commit -m</td></tr>" +
        "<tr><td>M</td><td>Modified - fayl o'zgargan</td><td>git add yoki git restore</td></tr>" +
        "<tr><td>D</td><td>Deleted - fayl o'chirilgan</td><td>git add (o'chirishni tasdiqlash)</td></tr>" +
        "</table>" +
        "<p>Diqqat: ikki belgi ketma-ket kelsa (masalan <code>MM</code>), birinchi belgi staging holatini, ikkinchisi ish papkasi holatini bildiradi.</p>",
    },
    {
      savol: "<code>git add</code> va <code>git commit</code> o'rtasidagi farqni tushuntiring. Ular ketma-ket bajarilmasa nima bo'ladi?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>git add</b> faylni staging area ga qo'yadi &mdash; ya'ni \"keyingi commit ga shu fayl kiradi\" deb belgilaydi. Bu hali tarixga yozilmaydi.</p>" +
        "<p><b>git commit</b> staging dagi fayllarni repository ga yozadi &mdash; shu payt tarixda yangi yozuv paydo bo'ladi.</p>" +
        "<p>Agar <code>git add</code> qilinmasa, <code>git commit</code> o'sha faylni <b>saqlamaydi</b>: commit bo'sh chiqadi yoki faqat boshqa fayllar saqlanadi. Natijada o'zgarish tarixga tushmay, yo'qolib qolishi mumkin.</p>",
    },
    {
      savol: "<code>git diff</code>, <code>git diff --staged</code> va <code>git diff HEAD</code> farqini yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Buyruq</th><th>Nimani solishtiradi</th><th>Qachon kerak</th></tr>" +
        "<tr><td><code>git diff</code></td><td>Ish papkasi va staging</td><td>Hali qo'shilmagan o'zgarishni ko'rish</td></tr>" +
        "<tr><td><code>git diff --staged</code></td><td>Staging va oxirgi commit</td><td>Commit ga nima kirayotganini tekshirish</td></tr>" +
        "<tr><td><code>git diff HEAD</code></td><td>Ish papkasi va oxirgi commit</td><td>Umumiy farqni ko'rish</td></tr>" +
        "</table>" +
        "<p>Eng foydali odat: commit qilishdan oldin <code>git diff --staged</code> ni ko'rib chiqish &mdash; xato fayl qo'shilib qolmaganiga ishonch hosil qilish.</p>",
    },
    {
      savol: "<code>git reset --soft HEAD~1</code> va <code>git reset --hard HEAD~1</code> qanday farq qiladi? Qaysi biri xavfli?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Buyruq</th><th>Commit</th><th>O'zgarish qayerda qoladi</th></tr>" +
        "<tr><td><code>--soft</code></td><td>Bekor qilinadi</td><td>Staging da saqlanadi</td></tr>" +
        "<tr><td><code>--hard</code></td><td>Bekor qilinadi</td><td>Butunlay o'chadi (yo'qoladi)</td></tr>" +
        "</table>" +
        "<p><b>Xavfli buyruq &mdash; <code>--hard</code></b>. U commit ni bekor qiladi va barcha o'zgarishlarni qaytarib bo'lmaydigan tarzda o'chiradi.</p>" +
        "<p>Xavfsiz yo'l: avval <code>git stash</code> qilib qo'yish, keyin <code>git reset --soft</code> ishlatish. Push qilingan commit ni bekor qilish uchun esa <code>git revert HASH</code> ishlatiladi.</p>",
    },
    {
      savol: "<b>Alias</b> nima? O'zingizga 4 ta foydali alias yozing (nom va to'liq buyruq bilan).",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>Alias</b> &mdash; bu o'zingiz yaratadigan qisqa buyruq. U <code>.gitconfig</code> faylida saqlanadi va uzoq buyruqlarni tez yozish imkonini beradi.</p>" +
        "<p>Namuna:</p>" +
        "<ul>" +
        "<li><code>git config --global alias.st status</code> &mdash; <code>git st</code> holatni ko'rsatadi;</li>" +
        "<li><code>git config --global alias.lg \"log --oneline --graph --all\"</code> &mdash; <code>git lg</code> chiroyli tarix;</li>" +
        "<li><code>git config --global alias.last \"log -1 HEAD --stat\"</code> &mdash; <code>git last</code> oxirgi commit;</li>" +
        "<li><code>git config --global alias.unstage \"reset HEAD --\"</code> &mdash; <code>git unstage fayl</code> staging dan chiqaradi.</li>" +
        "</ul>" +
        "<p>Maslahat: alias ni faqat buyruqni to'liq tushunganingizdan keyin yarating.</p>",
    },
    {
      savol: "<code>git stash</code> qanday vaziyatlarda kerak bo'ladi? 3 ta misol keltiring.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><code>git stash</code> commit qilinmagan o'zgarishlarni vaqtincha yashirib, ish papkasini tozalaydi. U quyidagi holatlarda kerak bo'ladi:</p>" +
        "<ol>" +
        "<li><b>Shoxobcha almashtirish kerak bo'lganda:</b> ish yarim yo'lda, lekin boshqa shoxobchaga o'tish zarur. <code>git stash</code>, keyin <code>git switch</code>, keyin <code>git stash pop</code>;</li>" +
        "<li><b>Pull qilolmayotganda:</b> \"local changes would be overwritten\" xatosi chiqsa: <code>git stash</code>, <code>git pull</code>, <code>git stash pop</code>;</li>" +
        "<li><b>Tez tuzatish kerak bo'lganda:</b> muhim xatoni darhol tuzatish kerak, hozirgi chala ish esa keyinroq davom etadi.</li>" +
        "</ol>" +
        "<p>Foydali buyruqlar: <code>git stash list</code>, <code>git stash pop</code>, <code>git stash apply</code>, <code>git stash drop</code>.</p>",
    },
    {
      savol: "Kundalik ish oqimini 6 qadamda yozing (ertalab ishni boshlashdan kechqurun tugatishgacha).",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>Yangilikni olish:</b> <code>git pull</code> &mdash; boshqalar kiritgan o'zgarishlarni olish;</li>" +
        "<li><b>Yangi shoxobcha:</b> <code>git switch -c feature/vazifa-nomi</code> &mdash; asosiy shoxobchani bezovta qilmaslik;</li>" +
        "<li><b>Ish va tekshirish:</b> fayllarni tahrirlash, <code>git status</code> va <code>git diff</code> bilan kuzatish;</li>" +
        "<li><b>Mikrocommit lar:</b> har bir mantiqiy qism tugagach <code>git add</code> va <code>git commit -m \"...\"</code>;</li>" +
        "<li><b>Shoxobchani birlashtirish:</b> <code>git switch main</code>, <code>git merge feature/vazifa-nomi</code>;</li>" +
        "<li><b>Yuborish:</b> <code>git push</code> &mdash; ish GitHub da saqlanadi.</li>" +
        "</ol>" +
        "<p>Bu oqimni har kuni takrorlasangiz, ikki hafta ichida qo'l odatlanadi va buyruqlarni o'ylamasdan yozasiz.</p>",
    },
  ],
  test: [
    {
      savol: "Holatni ko'rsatuvchi, hech narsani o'zgartirmaydigan buyruq qaysi?",
      variantlar: ["git init", "git status", "git commit", "git push"],
      togri: 1,
      izoh: "git status faqat ma'lumot beradi. Ishonchingiz komil bo'lmasa - status bosing.",
    },
    {
      savol: "git status --short da \"??\" belgisi nimani bildiradi?",
      variantlar: [
        "Fayl o'chirilgan",
        "Fayl staging ga qo'shilgan",
        "Yangi fayl, hali kuzatilmaydi",
        "Konflikt bor",
      ],
      togri: 2,
      izoh: "?? - untracked, ya'ni yangi fayl. Uni git add bilan qo'shish kerak.",
    },
    {
      savol: "Staging dagi o'zgarishlarni ko'rish uchun qaysi buyruq ishlatiladi?",
      variantlar: ["git diff", "git diff --staged", "git log", "git status --short"],
      togri: 1,
      izoh: "git diff hali qo'shilmagan o'zgarishni, git diff --staged esa commit ga kiradigan qismni ko'rsatadi.",
    },
    {
      savol: "Saqlanmagan o'zgarishlarni butunlay o'chirib, oldingi holatga qaytaruvchi buyruq qaysi?",
      variantlar: [
        "git reset --soft HEAD~1",
        "git reset --hard HEAD",
        "git restore --staged .",
        "git stash pop",
      ],
      togri: 1,
      izoh: "git reset --hard o'zgarishlarni butunlay o'chiradi - bu eng xavfli buyruqlardan biri.",
    },
    {
      savol: "Push qilingan commit ni xavfsiz bekor qilish uchun qaysi buyruq ishlatiladi?",
      variantlar: ["git revert HASH", "git reset --hard HASH", "git rm HASH", "git clean HASH"],
      togri: 0,
      izoh: "git revert tarixni o'zgartirmaydi - u teskari commit yaratadi, shuning uchun jamoaga xavfsiz.",
    },
    {
      savol: "git stash buyrug'i nima qiladi?",
      variantlar: [
        "Faylni GitHub ga yuboradi",
        "Commit qilinmagan o'zgarishlarni vaqtincha yashiradi",
        "Shoxobchani o'chiradi",
        "Tarixni tozalaydi",
      ],
      togri: 1,
      izoh: "stash - o'zgarishni vaqtincha chetga qo'yish. Qaytarish uchun git stash pop ishlatiladi.",
    },
  ],

  lugat: [
    { soz: "status", izoh: "Fayllar va repository ning hozirgi holatini ko'rsatuvchi buyruq." },
    { soz: "add", izoh: "Faylni staging area ga qo'shish." },
    { soz: "commit", izoh: "Staging dagi o'zgarishlarni tarixga yozish." },
    { soz: "log", izoh: "Commit lar tarixini ko'rsatish." },
    { soz: "diff", izoh: "Ikki holat o'rtasidagi qator-qator farqni ko'rsatish." },
    { soz: "restore", izoh: "Faylni oldingi holatiga qaytarish yoki staging dan chiqarish." },
    { soz: "reset", izoh: "Commit yoki staging holatini orqaga qaytarish buyrug'i." },
    { soz: "revert", izoh: "Push qilingan commit ni bekor qilib, teskari commit yaratish." },
    { soz: "stash", izoh: "Commit qilinmagan o'zgarishlarni vaqtincha yashirish." },
    { soz: "HEAD", izoh: "Hozir turgan commit ga ishora (ko'rsatkich)." },
    { soz: "HEAD~1", izoh: "Hozirgi commit dan bir qadam oldingi commit." },
    { soz: "porcelain", izoh: "git status ning mashina o'qiy oladigan qisqa formati." },
    { soz: "--format", izoh: "git log chiqishini kerakli ko'rinishda tuzish parametri." },
    { soz: "Alias", izoh: "O'zingiz yaratgan qisqa buyruq nomi (masalan st, lg)." },
    { soz: "Revert commit", izoh: "Oldingi o'zgarishni bekor qiluvchi yangi commit." },
    { soz: "Cheat-sheet", izoh: "Eng kerakli buyruqlar jamlangan qisqa qo'llanma." },
  ],

  xatolar: [
    "git add qilmasdan commit qilish &mdash; o'zgarish tarixga tushmaydi.",
    "Commit qilishdan oldin git diff --staged ni ko'rmaslik &mdash; xato fayl qo'shilib qoladi.",
    "git reset --hard ni o'ylamasdan ishlatish &mdash; o'zgarishlar butunlay yo'qoladi.",
    "Push qilingan tarixni reset bilan o'zgartirish &mdash; jamoada muammo keltiradi.",
    "Alias larni buyruqni tushunmasdan yaratish.",
    "git stash qilib qo'yib, keyin unutish &mdash; ish \"yo'qolgan\" ko'rinadi.",
    "Kun oxirida bitta katta commit qilish &mdash; xatoni topish qiyinlashadi.",
    "Xato xabarni o'qimasdan qayta-qayta bir xil buyruqni yozish.",
  ],

  keyingi:
    "Git va GitHub blokining <b>uchinchi darsi</b> yakunlandi. Keyingi darsda <b>Git ning jamoaviy ishlash imkoniyatlarini</b> davom ettiramiz: pull request yaratish tartibi, kodni ko'rib chiqish (code review), teg va releas lar (<code>git tag</code>), ochiq loyihalarga hissa qo'shish (fork va contribution) va GitHub Actions bilan birinchi avtomatik tekshiruv. Bugun o'rgangan buyruqlar o'sha ishlarning asosi bo'ladi.",
});
