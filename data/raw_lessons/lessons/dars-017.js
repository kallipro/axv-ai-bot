/* 17-dars: Git va GitHub bilan tanishuv (4-qism) - jamoaviy ish, pull request, releas */

AVX.dars({
  id: "cs8-017",
  sarlavha: "Git va GitHub bilan tanishuv (4-qism): jamoaviy ish, pull request va releas",
  kiritish:
    "Yolg'iz ishlaganda Git ba'zi qoidalarga ehtiyoj sezmaydi. Ammo jamoa bo'lib ishlashda tartib shart: kimningdir o'zgarishini <b>ko'rib chiqish</b>, xatoni sinovdan o'tkazish, tayyor versiyani <b>releas</b> qilish. Bugun biz <b>pull request</b>, <b>code review</b>, <b>teg va releas</b>, <b>fork</b> hamda <b>GitHub Actions</b> bilan tanishamiz va o'zimizning birinchi avtomatik tekshiruvimizni yozamiz.",

  maqsad: [
    "Pull request nima ekanligini va u nima uchun kerakligini tushunish.",
    "Kodni ko'rib chiqish (code review) madaniyatini o'zlashtirish.",
    "Teg va releas yordamida loyiha versiyalarini belgilash.",
    "Fork qilib, ochiq loyihaga hissa qo'shish tartibini bilish.",
    "GitHub Actions bilan birinchi avtomatik tekshiruvni yozish.",
  ],

  natija: [
    "Shoxobcha uchun pull request yaratadi va tavsifini to'ldiradi.",
    "Boshqa kishining kodiga foydali izoh (review) yozadi.",
    "<code>git tag</code> bilan versiya belgilab, GitHub ga yuboradi.",
    "Fork qilib, <code>upstream</code> remote ni sozlaydi.",
    "Oddiy workflow fayl yozib, testni avtomatik ishga tushiradi.",
  ],

  reja: [
    ["0-5 daq", "Tashkiliy qism", "O'tgan darsni takrorlash: status, add, commit, diff, stash."],
    ["5-16 daq", "Mentor tushuntirishi", "Jamoada ishlash - kelishuv va ko'rib chiqish."],
    ["16-30 daq", "Pull request", "PR yaratish, tavsif yozish, ko'rib chiqish."],
    ["30-42 daq", "Code review", "Yaxshi va yomon izohlar, taklif qilish usuli."],
    ["42-54 daq", "Teg va releas", "Semver, git tag, CHANGELOG, Releases."],
    ["54-68 daq", "Fork va Actions", "Ochiq loyihaga hissa, avtomatik tekshiruv."],
    ["68-77 daq", "Mustaqil ish va uyga vazifa", "PR tavsifi va workflow yozish."],
    ["77-80 daq", "Baholash", "Dars yakunlanadi, savol-javob."],
  ],

  mentor: [
    {
      sarlavha: "1. Yolg'iz ish va jamoa ishi",
      matn: [
        "Yolg'iz ishlaganda <code>main</code> shoxobchaga to'g'ridan-to'g'ri commit qilish mumkin. Jamoada esa bu xavfli: bitta xato butun loyihani to'xtatishi mumkin.",
        "Shuning uchun jamoada oddiy qoida qo'llanadi: hech kim <b>to'g'ridan-to'g'ri main ga</b> yozmaydi. Har bir o'zgarish alohida shoxobchada tayyorlanadi va <b>pull request</b> orqali \"taklif\" qilinadi.",
        "Pull request (PR) &mdash; bu \"mana mening o'zgarishim, ko'rib chiqinglar\" degan rasmiy so'rov. U orqali o'zgarish tarixi, sababi va test natijalari bir joyda ko'rinadi.",
      ],
    },
    {
      sarlavha: "2. Review - tanqid emas, birgalikda tekshirish",
      matn: [
        "Ko'pchilik kod ko'rib chiqishni \"meni tanqid qilishadi\" deb qo'rqadi. Aslida maqsad boshqa: <em>xatoni ishlab chiqarishga chiqmasdan topish</em>.",
        "Yaxshi review izohi &mdash; aniq va sababli: \"Bu joyda foydalanuvchi bo'sh maydon kiritsa xato chiqadi. <code>if (!ism) return;</code> qo'shsak bo'ladimi?\" Yomon izoh &mdash; \"bunaqa yozilmaydi\".",
        "Qoida: <b>kodni</b> tanqid qil, <b>odamni</b> emas. Har bir izohda taklif bo'lsin. Va iltifotni ham yozing &mdash; yaxshi yechim ko'rilsa, aytish kerak.",
      ],
    },
    {
      sarlavha: "3. Versiya raqamlari - nima o'zgardi?",
      matn: [
        "Loyiha versiyasi uchta raqamdan iborat: <b>1.4.2</b>. Bu &mdash; \"katta.yangi.tuzatish\" tartibi (semantic versioning).",
        "Birinchi raqam katta o'zgarish (eski kod ishlamay qolishi mumkin), ikkinchisi yangi imkoniyat, uchinchisi kichik tuzatish. Foydalanuvchi shu raqamga qarab yangilanish xavfli yoki yo'qligini biladi.",
        "Versiya <b>teg</b> (tag) bilan belgilanadi: <code>git tag -a v1.4.2 -m \"...\"</code>. GitHub da esa bu teg <b>Release</b> sahifasida chiqadi &mdash; yuklab olinadigan fayl va izoh bilan.",
      ],
    },
    {
      sarlavha: "4. Fork - boshqa loyihaga hissa qo'shish",
      matn: [
        "Boshqa kishining ochiq loyihasida to'g'ridan-to'g'ri yozish huquqingiz yo'q. <b>Fork</b> tugmasi loyihaning o'z nusxangizni yaratadi &mdash; siz o'sha nusxada bemalol ishlaysiz.",
        "Ish tugagach, o'zgarishni <b>pull request</b> orqali asl loyihaga taklif qilasiz. Loyiha egasi ko'rib chiqadi va qabul qilsa, o'zgarishingiz asosiy loyihaga qo'shiladi.",
        "Ochiq loyihaga hissa qo'shishni kichik narsadan boshlash yaxshi: hujjatdagi xato, tarjima, kichik xato tuzatish. Katta o'zgarishdan oldin <b>issue</b> ochib, fikr so'rash odat.",
      ],
    },
    {
      sarlavha: "5. Avtomatik tekshiruv - mashina ishlaydi",
      matn: [
        "Kodni odam tekshirishi kerak, lekin zerikarli qismini mashina bajarishi mumkin: testlar ishlayaptimi, kod uslubi to'g'rimi, sahifa xatosiz yig'ilyaptimi.",
        "<b>GitHub Actions</b> har safar pull request yaratilganda shu tekshiruvlarni o'zi ishga tushiradi. Natijada \"yashil belgi\" (hammasi o'tdi) yoki \"qizil belgi\" (xato bor) chiqadi.",
        "Foyda: xato kod asosiy shoxobchaga tushmaydi, tekshiruv esa bir xil qoida bo'yicha va hech kimni charchatmasdan bajariladi.",
      ],
    },
  ],

  nazariya: [
    {
      sarlavha: "1. Jamoaviy ish oqimi",
      matn: [
        "Quyidagi oqim &mdash; dunyo bo'ylab minglab jamoalarda ishlatiladi. Uni yodlab olsangiz, istalgan loyihaga tez moslashasiz.",
      ],
      jadval: [
        ["Qadam", "Kim bajaradi", "Nima bo'ladi"],
        ["1. Issue ochish", "Vazifa olgan kishi", "Vazifa muhokama qilinadi"],
        ["2. Shoxobcha yaratish", "Dasturchi", "<code>git switch -c feature/vazifa</code>"],
        ["3. Ish va commit lar", "Dasturchi", "Kichik commit lar, aniq izohlar"],
        ["4. Push va PR", "Dasturchi", "O'zgarish taklif qilinadi"],
        ["5. Review", "Jamoa a'zolari", "Izohlar, takliflar, tuzatishlar"],
        ["6. Avtomatik tekshiruv", "GitHub Actions", "Testlar va uslub tekshiriladi"],
        ["7. Merge", "Loyiha egasi", "O'zgarish main ga qo'shiladi"],
      ],
    },
    {
      sarlavha: "2. Yaxshi pull request tavsifi",
      matn: [
        "PR tavsifi bo'sh bo'lsa, uni ko'rib chiqish uchun ko'p vaqt ketadi. Quyidagi tuzilma tekshiruvchini juda xursand qiladi.",
      ],
      jadval: [
        ["Bo'lim", "Nima yoziladi", "Misol"],
        ["Nima qilindi", "Qisqa xulosa", "Aloqa sahifasi qo'shildi"],
        ["Nega kerak", "Sabab yoki issue raqami", "Closes #12"],
        ["Qanday tekshirish", "Qadamlar", "index.html ni ochib, formani to'ldirish"],
        ["Skrinshot", "Vizual o'zgarish bo'lsa", "Oldin / keyin rasmlari"],
        ["Eslatma", "Bilib qo'yish kerak bo'lgan narsa", "Yangi fayl qo'shildi: form.js"],
      ],
    },
    {
      sarlavha: "3. Versiya raqamlari (semver)",
      matn: [
        "Versiya raqamini to'g'ri oshirish &mdash; jamoa bilan kelishuvning bir qismi.",
      ],
      jadval: [
        ["O'zgarish turi", "Misol", "Yangi versiya", "Nima uchun"],
        ["Kichik xato tuzatildi", "1.4.2 &rarr; 1.4.3", "Tuzatish raqami", "Eski kod baribir ishlaydi"],
        ["Yangi imkoniyat qo'shildi", "1.4.3 &rarr; 1.5.0", "Kichik raqam", "Eski imkoniyatlar saqlanadi"],
        ["Eski kod ishlamay qoladi", "1.5.0 &rarr; 2.0.0", "Katta raqam", "Ogohlantirish kerak"],
        ["Sinov versiyasi", "2.1.0-beta.1", "Oldindan chiqarish", "Tayyor emas, faqat sinov"],
      ],
      callout: {
        turi: "info",
        sarlavha: "n va 0 raqamlari",
        matn: "<b>0.x.y</b> versiyalari &mdash; loyiha hali tayyor emasligini bildiradi. Ko'p o'quv loyihalari <b>0.1.0</b> dan boshlanadi. <b>1.0.0</b> esa \"birinchi barqaror versiya\" degani.",
      },
    },
    {
      sarlavha: "4. Ochiq loyihaga hissa qo'shish bosqichlari",
      matn: [
        "Fork dan merge gacha bo'lgan yo'l. Bu tartib deyarli barcha ochiq loyihalarda bir xil.",
      ],
      jadval: [
        ["Qadam", "Buyruq yoki amal", "Izoh"],
        ["1. Fork", "GitHub da Fork tugmasi", "Loyiha o'z akkauntingizda paydo bo'ladi"],
        ["2. Clone", "<code>git clone url</code>", "Nusxani kompyuterga tushirish"],
        ["3. upstream", "<code>git remote add upstream asl-url</code>", "Asl loyihani kuzatish"],
        ["4. Branch", "<code>git switch -c fix/xato-nomi</code>", "Alohida shoxobcha"],
        ["5. Push", "<code>git push -u origin fix/xato-nomi</code>", "O'z nusxangizga yuborish"],
        ["6. PR", "GitHub da Pull request", "Asl loyihaga taklif"],
        ["7. Kuzatish", "Review izohlariga javob", "Xohlagancha vaqt talab qiladi"],
      ],
    },
    {
      sarlavha: "5. GitHub Actions atamalari",
      matn: [
        "Actions fayllari <code>.github/workflows/</code> papkasida <b>YAML</b> formatida yoziladi. Quyidagi atamalarni bilish kifoya.",
      ],
      jadval: [
        ["Atama", "Ma'nosi", "Misol"],
        ["Workflow", "Butun avtomatik jarayon", "test.yml"],
        ["Trigger (on)", "Nima ishga tushiradi", "push, pull_request"],
        ["Job", "Bir mashinada bajariladigan ishlar guruhi", "test, build, deploy"],
        ["Step", "Job ichidagi alohida qadam", "npm ci, npm test"],
        ["Runner", "Bajariladigan mashina", "ubuntu-latest"],
        ["Action", "Tayyor qadam", "actions/checkout"],
        ["Secret", "Maxfiy sozlama", "${{ secrets.NAME }}"],
      ],
    },
  ],

  rasmlar: [
    {
      "tur": "oyna",
      "sarlavha": "Yaxshi PR tavsifi shabloni",
      "tushuntirish": "PR tavsifi &mdash; tekshiruvchiga yozilgan maktub. U qisqa, aniq va tushunarli bo'lsin.",
      "oyna": {
        "nom": "Pull request tavsifi",
        "qatorlar": [
          "## Nima qilindi",
          "Aloqa (contact) bo'limi qo'shildi",
          "## Nima uchun",
          "Foydalanuvchi biz bilan bog'lana olishi uchun",
          "## Qanday tekshirildi",
          "Brauzerda ochib, telefon o'lchamida ham ko'rildi",
          "## Skrinshot",
          "(kerak bo'lsa rasm qo'shiladi)"
        ]
      },
      "izoh": "Tavsif to'liq bo'lsa, tekshiruvchi savol bermasdan tez qaror qabul qiladi."
    },
    {
      "tur": "qiyos",
      "sarlavha": "Review izohi: yomon va yaxshi",
      "tushuntirish": "Kod tekshirishda izoh <b>sababli</b> va <b>taklifli</b> bo'lishi kerak. Bu &mdash; jamoada hurmat.",
      "ustunlar": [
        {
          "turi": "yomon",
          "belgi": "❌",
          "sarlavha": "Yomon izoh",
          "royxat": [
            "&laquo;Buni qayta yozing&raquo;",
            "&laquo;Menga yoqmadi&raquo;",
            "&laquo;Bu noto'g'ri&raquo;",
            "Sabab yo'q, taklif yo'q"
          ]
        },
        {
          "turi": "yaxshi",
          "belgi": "✅",
          "sarlavha": "Yaxshi izoh",
          "royxat": [
            "&laquo;Bu qatorda xato bor: fayl yopilmagan&raquo;",
            "&laquo;Mana shunday qilsak ishlaydi&raquo;",
            "Sabab + aniq taklif birga yoziladi"
          ]
        }
      ],
      "izoh": "Yaxshi izoh odamni emas, <b>kodni</b> tanqid qiladi."
    },
    {
      "tur": "qadam",
      "sarlavha": "GitHub Actions qanday ishlaydi",
      "tushuntirish": "GitHub har bir push da ishlarni avtomatik bajarishi mumkin: test, tekshiruv, saytni yig'ish.",
      "elementlar": [
        {
          "nom": "Kod push qilinadi",
          "izoh": "Yangi commit GitHub ga yuboriladi"
        },
        {
          "nom": "Workflow fayli ishga tushadi",
          "izoh": "<code>.github/workflows/test.yml</code> o'qiladi"
        },
        {
          "nom": "Qadamlar avtomatik bajariladi",
          "izoh": "Testlar yoki tekshiruv buyruqlari ishlaydi"
        },
        {
          "nom": "Natija ko'rinadi",
          "izoh": "Yashil belgi &mdash; hammasi joyida, qizil &mdash; xato bor"
        },
        {
          "nom": "Xato bo'lsa, PR to'xtatiladi",
          "izoh": "Tuzatilmaguncha birlashtirish mumkin emas"
        }
      ],
      "izoh": "Avtomatik tekshiruv &mdash; xatoni <b>erta</b> topishning eng ishonchli yo'li."
    },
    {
      "tur": "oyna",
      "sarlavha": "CHANGELOG.md namunasi",
      "tushuntirish": "Har bir versiyada nima o'zgarganini yozib borish odati. Foydalanuvchi ham, jamoa ham shundan foydalanadi.",
      "oyna": {
        "nom": "CHANGELOG.md",
        "qatorlar": [
          "# O'zgarishlar tarixi",
          "## [1.1.0] — 2026-10-15",
          "### Qo'shildi",
          "- Aloqa bo'limi",
          "### Tuzatildi",
          "- Kichik ekranda menyu buzilishi",
          "## [1.0.0] — 2026-10-01",
          "- Birinchi versiya chiqdi"
        ]
      },
      "izoh": "Yangi versiya chiqarganda CHANGELOG ga qator qo'shish &mdash; professional odat."
    },
    {
      "tur": "royxat",
      "sarlavha": "Semver: versiya raqami nimani bildiradi",
      "tushuntirish": "v1.4.2 ko'rinishidagi raqam tasodifiy emas. Har bir qismi o'z ma'nosiga ega.",
      "elementlar": [
        {
          "belgi": "1",
          "nom": "Asosiy (major)",
          "izoh": "Katta, mos kelmaydigan o'zgarish: 1.0.0 &rarr; 2.0.0"
        },
        {
          "belgi": "4",
          "nom": "Kichik (minor)",
          "izoh": "Yangi imkoniyat qo'shildi: 1.4.0 &rarr; 1.5.0"
        },
        {
          "belgi": "2",
          "nom": "Tuzatish (patch)",
          "izoh": "Xato tuzatildi: 1.4.1 &rarr; 1.4.2"
        }
      ],
      "izoh": "Misol: <b>v1.4.2</b> &mdash; asosiy 1, kichik 4, tuzatish 2."
    }
  ],

  kodlar: [
    {
      "sarlavha": "Fork qilingan loyihani nusxalash va upstream sozlash",
      "tushuntirish": "Ochiq loyihaga hissa qo'shishning birinchi qadami. Fork dan keyin loyiha o'z akkauntingizda bo'ladi, uni kompyuterga tushiramiz va asl loyihani <code>upstream</code> deb belgilaymiz.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "origin - sizning forkingiz, upstream - asl loyiha. Bu ikki nomni chalkashtirmaslik kerak.",
      "kod": ":: O'z forkingizni nusxalash\ngit clone https://github.com/kallibek/ochiq-loyiha.git\ncd ochiq-loyiha\n\n:: Asl loyihani upstream deb qo'shish\ngit remote add upstream https://github.com/asl-muallif/ochiq-loyiha.git\n\n:: Tekshirish\ngit remote -v",
      "natija": "origin    https://github.com/kallibek/ochiq-loyiha.git (fetch)\norigin    https://github.com/kallibek/ochiq-loyiha.git (push)\nupstream  https://github.com/asl-muallif/ochiq-loyiha.git (fetch)\nupstream  https://github.com/asl-muallif/ochiq-loyiha.git (push)"
    },
    {
      "sarlavha": "Fork ni asl loyiha bilan sinxronlash",
      "tushuntirish": "Asl loyiha rivojlanib turadi. Ishni boshlashdan oldin o'z forkingizni yangilab olish kerak &mdash; aks holda eski kod ustida ishlaysiz.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Ishni boshlashdan oldin har doim shu buyruqlarni bajarish odat qiling.",
      "kod": ":: Asl loyihadagi yangiliklarni olish\ngit fetch upstream\n\n:: main shoxobchaga o'tish\ngit switch main\n\n:: Asl loyiha main ini o'z main ingizga qo'shish\ngit merge upstream/main\n\n:: O'z forkingizni ham yangilash\ngit push origin main",
      "natija": "From https://github.com/asl-muallif/ochiq-loyiha\n * [new branch]      main       -> upstream/main\n\nAlready on 'main'\nUpdating 3f9c2b1..8d47a02\nFast-forward\n README.md | 12 +++++++-----\n 1 file changed, 7 insertions(+), 5 deletions(-)\n\nTo https://github.com/kallibek/ochiq-loyiha.git\n   3f9c2b1..8d47a02  main -> main"
    },
    {
      "sarlavha": "Tuzatish uchun shoxobcha yaratish",
      "tushuntirish": "Har bir hissa &mdash; alohida shoxobcha. Shoxobcha nomi nima qilinayotganini ko'rsatishi kerak: <code>fix/</code>, <code>docs/</code> yoki <code>feature/</code>.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Bitta shoxobcha - bitta vazifa. Ikki xil ishni bitta shoxobchada qilish ko'rib chiqishni qiyinlashtiradi.",
      "kod": ":: Hujjatdagi xatoni tuzatish uchun shoxobcha\ngit switch -c docs/readme-uzbekcha\n\n:: O'zgartirish kiritish (README.md tahrirlanadi)\n:: keyin:\ngit status --short\ngit add README.md\ngit commit -m \"README: o'zbekcha bolim qoshildi\"\n\n:: O'z forkingizga yuborish\ngit push -u origin docs/readme-uzbekcha",
      "natija": "Switched to a new branch 'docs/readme-uzbekcha'\n M README.md\n\n[docs/readme-uzbekcha 6a1f8c2] README: o'zbekcha bolim qoshildi\n 1 file changed, 18 insertions(+)\n\nremote: Create a pull request for 'docs/readme-uzbekcha' on GitHub by visiting:\nremote:      https://github.com/kallibek/ochiq-loyiha/pull/new/docs/readme-uzbekcha"
    },
    {
      "sarlavha": "GitHub CLI bilan pull request yaratish",
      "tushuntirish": "Saytga kirmasdan, terminaldan turib PR yaratish mumkin. <code>gh</code> &mdash; GitHub ning bepul buyruq qatori dasturi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "gh dasturi birinchi marta ishlatilganda brauzerda ruxsat so'raydi.",
      "kod": ":: GitHub CLI o'rnatilganini tekshirish\ngh --version\n\n:: Tizimga kirish (brauzer orqali)\ngh auth login\n\n:: Pull request yaratish\ngh pr create --title \"Aloqa sahifasi qo'shildi\" --body \"Closes #12\"\n\n:: PR lar ro'yxati\ngh pr list\n\n:: PR holatini ko'rish\ngh pr status\n\n:: PR ni brauzerda ochish\ngh pr view --web",
      "natija": "gh version 2.62.0 (2026-09-15)\n\nCreating pull request for docs/readme-uzbekcha into main in asl-muallif/ochiq-loyiha\n\nhttps://github.com/asl-muallif/ochiq-loyiha/pull/27\n\nShowing 2 of 2 open pull requests in asl-muallif/ochiq-loyiha\n\n#27  Aloqa sahifasi qo'shildi           docs/readme-uzbekcha\n#25  README tarjimasi tuzatildi         docs/readme"
    },
    {
      "sarlavha": "Review izohlaridan keyin tuzatish kiritish",
      "tushuntirish": "Review dan keyin odatda bir necha tuzatish kerak bo'ladi. Ular PR ga avtomatik qo'shiladi &mdash; yangi PR ochish shart emas.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Amend faqat o'z shoxobchangizda xavfsiz. Boshqalar ishlayotgan shoxobchada ishlatilmaydi.",
      "kod": ":: Xatoni tuzatish\n:: (faylni tahrirlab saqlang)\ngit add contact.js\ngit commit -m \"Review izohi tuzatildi: bos menyu tekshiruvi\"\n\n:: Kichik tuzatishni oxirgi commit ga qo'shish\ngit add contact.js\ngit commit --amend --no-edit\n\n:: Majburiy yuborish (faqat o'z shoxobchangizda!)\ngit push --force-with-lease\n\n:: PR holatini tekshirish\ngh pr checks",
      "natija": "[docs/readme-uzbekcha 9c4e1a7] Review izohi tuzatildi: bos menyu tekshiruvi\n 1 file changed, 5 insertions(+), 1 deletion(-)\n\nTo https://github.com/kallibek/ochiq-loyiha.git\n + 6a1f8c2...9c4e1a7 docs/readme-uzbekcha -> docs/readme-uzbekcha (forced update)\n\ngh pr checks natijasi:\nAll checks were successful\n  0 failing, 0 pending, 2 successful"
    },
    {
      "sarlavha": "Pull request ni birlashtirish usullari",
      "tushuntirish": "GitHub da <b>Merge pull request</b> tugmasining yonida uch variant bor. Har biri tarixni har xil shaklda saqlaydi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Kichik jamoalar uchun eng qulayi - Squash: main tarixi toza bo'ladi.",
      "kod": ":: 1. Merge commit - barcha commit lar saqlanadi\ngit switch main\ngit merge --no-ff feature/aloqa\n\n:: 2. Squash - barcha commit lar bitta bo'lib qo'shiladi\ngit switch main\ngit merge --squash feature/aloqa\ngit commit -m \"Aloqa sahifasi qo'shildi (#27)\"\n\n:: 3. Rebase - commit lar main ning ustiga ketma-ket qo'yiladi\ngit switch feature/aloqa\ngit rebase main\ngit switch main\ngit merge --ff-only feature/aloqa\n\n:: Ishlatilgan shoxobchani o'chirish\ngit branch -d feature/aloqa\ngit push origin --delete feature/aloqa",
      "natija": "Merge commit:\n*   7d3c5a1 Merge pull request #27 from kallibek/feature/aloqa\n|\\\n| * 9c4e1a7 Review izohi tuzatildi\n| * 1a2b3c4 Aloqa formasi qo'shildi\n|/\n* 8d47a02 README tuzatildi\n\nSquash natijasi (bitta commit):\n7d3c5a1 Aloqa sahifasi qo'shildi (#27)"
    },
    {
      "sarlavha": "PR paytida konfliktni yechish",
      "tushuntirish": "Asl loyiha siz ishlayotganda o'zgargan bo'lsa, konflikt chiqadi. GitHub \"This branch has conflicts\" deb ogohlantiradi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Konfliktni yechishning eng oson yo'li - upstream dan yangilikni olib, lokalda birlashtirish.",
      "kod": ":: 1. Asl loyihadagi yangiliklarni olish\ngit fetch upstream\n\n:: 2. O'z shoxobchangizda ekaningizni tekshirish\ngit branch --show-current\n\n:: 3. Asl main ni o'z shoxobchangizga qo'shish\ngit merge upstream/main\n\n:: 4. Konflikt chiqsa - fayllarni tahrirlab, belgilarni o'chirish\ngit status\n:: (faylni tahrirlang)\ngit add README.md\ngit commit -m \"Konflikt yechildi: upstream bilan birlashtirildi\"\n\n:: 5. Yuborish\ngit push",
      "natija": "CONFLICT (content): Merge conflict in README.md\nAutomatic merge failed; fix conflicts and then commit the result.\n\nOn branch docs/readme-uzbekcha\nYou have unmerged paths.\n        both modified:   README.md\n\nKonflikt yechilgandan keyin GitHub PR sahifasida:\nThis branch has no conflicts with the base branch"
    },
    {
      "sarlavha": "Versiya belgilash: git tag",
      "tushuntirish": "Teg &mdash; bu commit ga qo'yiladigan doimiy yorliq. <code>v1.0.0</code> ko'rinishidagi teglar GitHub da Release sahifasida paydo bo'ladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Teg - shoxobcha emas: u bitta commit ga ishora qiladi va o'zgarmaydi.",
      "kod": ":: Mavjud teglarni ko'rish\ngit tag\n\n:: Izohli teg yaratish (-a: annotated)\ngit tag -a v1.0.0 -m \"Birinchi barqaror versiya\"\n\n:: Eski commit ga teg qo'yish\ngit tag -a v0.9.0 1a2b3c4 -m \"Sinov versiyasi\"\n\n:: Teg haqida ma'lumot\ngit show v1.0.0\n\n:: Teglarni GitHub ga yuborish\ngit push origin v1.0.0\ngit push origin --tags\n\n:: Joriy versiyani aniqlash\ngit describe --tags --always",
      "natija": "v0.9.0\nv1.0.0\n\ntag v1.0.0\nTagger: Kallibek Jumanazarov <kallibek@example.com>\nDate:   Fri Oct 23 15:40:11 2026 +0500\n\nBirinchi barqaror versiya\n\nTo https://github.com/kallibek/mening-loyiham.git\n * [new tag]         v1.0.0 -> v1.0.0\n\ngit describe natijasi: v1.0.0-3-g9c4e1a7"
    },
    {
      "sarlavha": "Releas yaratish: gh release create",
      "tushuntirish": "Teg yaratilgandan keyin GitHub da Release sahifasini ham to'ldirish mumkin. Unga tayyor fayllar (ZIP, EXE) biriktiriladi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "Release - foydalanuvchi uchun: u yuklab oladigan fayl va izohni bir joyda topadi.",
      "kod": ":: Teg va releas ni birga yaratish\ngh release create v1.1.0 --title \"v1.1.0 - Aloqa sahifasi\" --notes \"Batafsil: CHANGELOG.md\"\n\n:: Releas ga fayl biriktirish\ngh release create v1.1.0 loyiha-v1.1.0.zip --title \"v1.1.0\"\n\n:: Releas lar ro'yxati\ngh release list\n\n:: Releas ni ko'rish\ngh release view v1.1.0\n\n:: Faqat teglarni ko'rish (sayt orqali)\n:: github.com/ism/loyiha/tags",
      "natija": "https://github.com/kallibek/mening-loyiham/releases/tag/v1.1.0\n\nShowing releases in kallibek/mening-loyiham\n\nNAME     TYPE    TAG       PUBLISHED\nv1.1.0   Latest  v1.1.0    2026-10-23\nv1.0.0           v1.0.0    2026-10-16\n\nFoydalanuvchi loyiha-v1.1.0.zip faylini shu sahifadan yuklab oladi."
    },
    {
      "sarlavha": "Jamoa statistikasi va xatoni qidirish buyruqlari",
      "tushuntirish": "<code>git shortlog</code> kim qancha hissa qo'shganini ko'rsatadi. <code>git bisect</code> esa xato qaysi commit da kirganini topadi.",
      "nom": "cmd",
      "til": "cmd",
      "izoh": "bisect - ikkilik qidiruv usuli: 100 commit ichidan xatoni 7 qadamda topadi.",
      "kod": ":: Kim qancha commit qilgan (hissa statistikasi)\ngit shortlog -sne\n\n:: Shoxobchadagi barcha mualliflar\ngit shortlog --summary --numbered HEAD\n\n:: Xatoni topish: bisect jarayonini boshlash\ngit bisect start\ngit bisect bad                 :: hozirgi holat buzuq\ngit bisect good v1.0.0         :: bu versiya yaxshi edi\n\n:: Git o'rtadagi commit ga o'tadi - tekshirib, yozasiz:\ngit bisect good                :: yoki\ngit bisect bad\n\n:: Xato topilgach, jarayonni yakunlash\ngit bisect reset",
      "natija": "    24  Kallibek Jumanazarov <kallibek@example.com>\n     9  Zuhra Abdullayeva <zuhra@example.com>\n     3  Hasan Tursunov <hasan@example.com>\n\nbisect natijasi:\nBisecting: 6 revisions left to test after this (roughly 3 steps)\n[4b7c2a1] Yangi uslublar qo'shildi\n\n...\n9f3b7a2 is the first bad commit"
    },
    {
      "sarlavha": "Jamoada ishlashni boshlash skripti",
      "tushuntirish": "Har kuni ishni boshlashda bajariladigan qadamlar: yangilikni olish, holatni tekshirish, yangi shoxobcha yaratish.",
      "nom": "ishni-boshlash.bat",
      "til": "cmd",
      "izoh": "Shoxobcha nomini skript o'zi taklif qiladi - noto'g'ri nom tanlash osonlashadi.",
      "kod": "@echo off\nchcp 65001 >nul\ntitle Ishni boshlash\n\necho === YANGILIKNI OLISH ===\ngit pull\nif errorlevel 1 (\n  echo XATO: pull bajarilmadi.\n  pause\n  exit /b 1\n)\n\necho.\necho === HOZIRGI HOLAT ===\ngit status --short\ngit log --oneline -3\n\necho.\nset /p nom=Yangi shoxobcha nomi (masalan feature/menyu): \nif \"%nom%\"==\"\" (\n  echo Nom kiritilmadi. Skript to'xtadi.\n  pause\n  exit /b 1\n)\n\ngit switch -c \"%nom%\"\n\necho.\necho TAYYOR. Ishni boshlashingiz mumkin.\ngit branch --show-current\npause",
      "natija": "=== YANGILIKNI OLISH ===\nAlready up to date.\n\n=== HOZIRGI HOLAT ===\n(bo'sh - hamma o'zgarish saqlangan)\n7a2c9f1 Mobil menyu tuzatildi\n\nYangi shoxobcha nomi (masalan feature/menyu): feature/aloqa-sahifa\nSwitched to a new branch 'feature/aloqa-sahifa'\n\nTAYYOR. Ishni boshlashingiz mumkin.\nfeature/aloqa-sahifa"
    }
  ],

  amaliy: [
    "GitHub da o'zingizning eski loyihangizga kirib, <b>Issues</b> bo'limida bitta vazifa (masalan \"Mobil ko'rinishni tuzatish\") ochib qo'ying.",
    "<code>git switch -c feature/issue-1</code> bilan shoxobcha yaratib, kichik o'zgarish kiriting va commit qiling.",
    "O'zgarishni <code>git push -u origin feature/issue-1</code> bilan yuborib, GitHub da <b>Pull request</b> oching.",
    "PR tavsifini darsdagi shablon bo'yicha to'ldiring: nima qilindi, nega kerak, qanday tekshirildi.",
    "Sinfdagi qo'shningizning PR ini ochib, <b>review</b> yozing: bitta yaxshi tomon, bitta taklif (savol ko'rinishida).",
    "<code>git tag -a v1.0.0 -m \"Birinchi versiya\"</code> qilib, <code>git push origin v1.0.0</code> bilan GitHub ga yuboring.",
    "GitHub da <b>Releases</b> bo'limiga kirib, yozilgan teg asosida releas yaratib, izohini CHANGELOG dan nusxalang.",
    "Loyihaga <code>.github/workflows/test.yml</code> faylini qo'shib (darsdagi GitHub Actions bo'limiga qarang), push qiling va Actions bo'limida yashil belgi paydo bo'lishini kuzating.",
    "Ochiq loyihalardan birini (masalan biror o'quv loyihasini) <b>fork</b> qilib, README dagi kichik xatoni tuzatishga urinib ko'ring.",
  ],

  uyga: [
    {
      savol: "<b>Pull request</b> nima va u oddiy <b>commit</b> dan qanday farq qiladi?",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p><b>Commit</b> &mdash; loyiha holatining saqlangan surati. U faqat o'z kompyuteringizda (yoki yuborilgandan keyin o'z shoxobchangizda) mavjud.</p>" +
        "<p><b>Pull request (PR)</b> &mdash; \"mana mening o'zgarishim, uni asosiy loyihaga qo'shishni taklif qilaman\" degan rasmiy so'rov. U quyidagilarni birlashtiradi:</p>" +
        "<ul>" +
        "<li>o'zgargan kod (diff ko'rinishida);</li>" +
        "<li>tavsif: nima qilindi, nega kerak, qanday tekshirildi;</li>" +
        "<li>avtomatik tekshiruv natijalari;</li>" +
        "<li>jamoa izohlari (review) va muhokama tarixi.</li>" +
        "</ul>" +
        "<p>Qisqasi: commit &mdash; <em>saqlash</em>, PR &mdash; <em>taklif qilish va tekshirishdan o'tkazish</em>.</p>",
    },
    {
      savol: "Yaxshi <b>code review</b> izohi qanday bo'ladi? 1 ta yomon va 2 ta yaxshi misol yozing.",
      tezlik: "Taxminiy vaqt: 6 daqiqa",
      javob:
        "<p>Yaxshi izoh aniq, sababli, taklifli va <b>kodga</b> qaratilgan bo'ladi (odamga emas).</p>" +
        "<p><b>Yomon:</b> <em>\"bunaqa yozilmaydi, hammasi xato\"</em> &mdash; nima xato ekani va nima qilish kerakligi ko'rinmaydi.</p>" +
        "<p><b>Yaxshi 1:</b> <em>\"Bu joyda foydalanuvchi bo'sh maydon kiritsa xato chiqadi. <code>if (!ism) return;</code> qo'shsak bo'ladimi?\"</em></p>" +
        "<p><b>Yaxshi 2:</b> <em>\"Iltifot: xato xabarlarini o'zbek tilida yozganingiz juda yaxshi. Kichik taklif: tugma matnini ham o'zbekchaga o'girsak, izchil bo'ladi.\"</em></p>" +
        "<p>Qoida: har bir izohda <b>muammo</b>, <b>sabab</b> va <b>taklif</b> bo'lsin.</p>",
    },
    {
      savol: "<b>Semver</b> nima? 1.4.2 versiyasidagi uchta raqam nimani bildiradi? Misollar bilan tushuntiring.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>Semver</b> (semantic versioning) &mdash; versiya raqamlarini mazmunli belgilash qoidasi. Ko'rinishi: <b>KATTA.YANGI.TUZATISH</b>.</p>" +
        "<table>" +
        "<tr><th>Raqam</th><th>Ma'nosi</th><th>Misol</th></tr>" +
        "<tr><td>1 (katta)</td><td>Eski kodni buzadigan o'zgarish</td><td>1.5.0 &rarr; 2.0.0</td></tr>" +
        "<tr><td>4 (yangi)</td><td>Yangi imkoniyat, eski kod ishlaydi</td><td>1.4.3 &rarr; 1.5.0</td></tr>" +
        "<tr><td>2 (tuzatish)</td><td>Kichik xato tuzatildi</td><td>1.4.2 &rarr; 1.4.3</td></tr>" +
        "</table>" +
        "<p><b>1.4.2</b> degani: birinchi barqaror seriya, to'rtinchi yangi imkoniyat to'plami, ikkinchi kichik tuzatish.</p>" +
        "<p>Qoida: <code>0.x.y</code> &mdash; loyiha hali tayyor emas. <code>1.0.0</code> &mdash; birinchi barqaror versiya.</p>",
    },
    {
      savol: "<b>Fork</b> nima uchun kerak? Fork dan pull request gacha bo'lgan qadamlarni yozing.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>Fork</b> &mdash; boshqa kishining loyihasidan o'zingizga shaxsiy nusxa yaratish. Boshqa loyihada yozish huquqi bo'lmagani uchun, ish avval o'z nusxangizda bajariladi.</p>" +
        "<ol>" +
        "<li>GitHub da <b>Fork</b> tugmasini bosish;</li>" +
        "<li><code>git clone</code> bilan nusxani kompyuterga tushirish;</li>" +
        "<li><code>git remote add upstream asl-loyiha-url</code> bilan asl loyihani belgilash;</li>" +
        "<li><code>git fetch upstream</code> va <code>git merge upstream/main</code> bilan sinxronlash;</li>" +
        "<li><code>git switch -c fix/xato-nomi</code> bilan shoxobcha yaratib, ish qilish;</li>" +
        "<li><code>git push -u origin fix/xato-nomi</code> bilan o'z forkingizga yuborish;</li>" +
        "<li>GitHub da <b>Pull request</b> yaratish va review javoblarini kuzatish.</li>" +
        "</ol>",
    },
    {
      savol: "<b>GitHub Actions</b> nima qiladi? Workflow faylida qanday bo'limlar bo'ladi?",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<p><b>GitHub Actions</b> &mdash; kod yuborilganda (push yoki pull request) avtomatik tekshiruv va joylash ishlarini bajaruvchi xizmat.</p>" +
        "<p>Workflow fayli <code>.github/workflows/</code> papkasida YAML formatida yoziladi va quyidagi bo'limlardan iborat:</p>" +
        "<ul>" +
        "<li><b>name</b> &mdash; jarayon nomi (masalan \"Testlar\");</li>" +
        "<li><b>on</b> &mdash; qachon ishga tushadi (push, pull_request);</li>" +
        "<li><b>jobs</b> &mdash; bajariladigan ishlar guruhi;</li>" +
        "<li><b>runs-on</b> &mdash; qaysi tizimda (ubuntu-latest);</li>" +
        "<li><b>steps</b> &mdash; alohida qadamlar (checkout, setup, test).</li>" +
        "</ul>" +
        "<p>Foyda: xato kod asosiy shoxobchaga tushmaydi, tekshiruv esa hamma uchun bir xil qoidada o'tadi.</p>",
    },
    {
      savol: "<b>Teg</b> va <b>shoxobcha</b> farqini tushuntiring.",
      tezlik: "Taxminiy vaqt: 5 daqiqa",
      javob:
        "<table>" +
        "<tr><th>Belgi</th><th>Shoxobcha (branch)</th><th>Teg (tag)</th></tr>" +
        "<tr><td>Nima</td><td>Rivojlanayotgan yo'nalish</td><td>Bitta commit ga qo'yilgan yorliq</td></tr>" +
        "<tr><td>O'zgaradimi</td><td>Ha, yangi commit lar qo'shiladi</td><td>Yo'q, doimiy qoladi</td></tr>" +
        "<tr><td>Maqsadi</td><td>Ish jarayoni</td><td>Versiyani belgilash</td></tr>" +
        "<tr><td>Misol</td><td>feature/aloqa, main</td><td>v1.0.0, v1.1.0</td></tr>" +
        "</table>" +
        "<p>Shoxobcha &mdash; <em>yo'l</em>, teg &mdash; <em>manzil ustunidagi belgi</em>. Releas yaratish uchun teg kerak bo'ladi.</p>",
    },
    {
      savol: "Loyihaga yangi odam qo'shildi. Unga jamoaviy ish qoidalarini 5 bandda yozib bering.",
      tezlik: "Taxminiy vaqt: 7 daqiqa",
      javob:
        "<ol>" +
        "<li><b>main ga to'g'ridan-to'g'ri yozma.</b> Har bir vazifa uchun alohida shoxobcha och: <code>feature/nomi</code> yoki <code>fix/nomi</code>;</li>" +
        "<li><b>Ishni boshlashdan oldin <code>git pull</code> qil</b> va eng yangi kod ustida ishla;</li>" +
        "<li><b>Kichik commit lar qil</b> va izohni aniq yoz: \"Aloqa formasi qo'shildi\", \"Mobil menyu tuzatildi\";</li>" +
        "<li><b>PR tavsifini to'ldir</b>: nima qilindi, nega kerak, qanday tekshirildi, skrinshot (kerak bo'lsa);</li>" +
        "<li><b>Review izohlariga xotirjam javob ber</b> va o'zgarishni tuzatib, yana push qil. Yangi PR ochish shart emas.</li>" +
        "</ol>" +
        "<p>Qo'shimcha: boshqaning kodini ko'rib chiqqanda kamida bitta yaxshi tomonni ham aytish odat qilinsin.</p>",
    },
  ],

  test: [
    {
      savol: "Pull request nima?",
      variantlar: [
        "Kodni kompyuterga tushirish buyrug'i",
        "O'zgarishni asosiy loyihaga qo'shishni taklif qilish so'rovi",
        "Shoxobchani o'chirish amali",
        "GitHub ga yuklash buyrug'i",
      ],
      togri: 1,
      izoh: "PR - taklif: ko'rib chiqish, muhokama va avtomatik tekshiruvdan keyin merge qilinadi.",
    },
    {
      savol: "Semver bo'yicha 1.4.3 versiyasidan keyin yangi imkoniyat qo'shilsa, qanday versiya bo'ladi?",
      variantlar: ["2.0.0", "1.4.4", "1.5.0", "0.5.0"],
      togri: 2,
      izoh: "Yangi imkoniyat - o'rtadagi raqam oshadi: 1.4.3 -> 1.5.0. Katta raqam faqat eski kod buzilganda oshadi.",
    },
    {
      savol: "Versiyani belgilash uchun qaysi buyruq ishlatiladi?",
      variantlar: ["git branch v1.0.0", "git tag -a v1.0.0 -m \"...\"", "git commit v1.0.0", "git push v1.0.0"],
      togri: 1,
      izoh: "tag commit ga doimiy yorliq qo'yadi. Izohli teg -a flag'i bilan yaratiladi.",
    },
    {
      savol: "Fork qilingan loyihada asl loyiha qanday nom bilan belgilanadi?",
      variantlar: ["origin", "upstream", "main", "source-of-truth"],
      togri: 1,
      izoh: "origin - o'zingizning forkingiz, upstream - asl loyiha. Ikkalasi ham remote.",
    },
    {
      savol: "GitHub Actions workflow fayli qaysi papkada turadi?",
      variantlar: [".github/workflows/", "tools/actions/", "ci/", "github/"],
      togri: 0,
      izoh: "Fayllar .github/workflows/ papkasida YAML formatida saqlanadi.",
    },
    {
      savol: "Code review izohi qanday bo'lishi kerak?",
      variantlar: [
        "Faqat xatoni aytib, yechimni aytmaslik",
        "Muammoni, sababini va taklifni ko'rsatish",
        "Kodni umuman tanqid qilmaslik",
        "Har bir qatorga \"yaxshi\" deb yozish",
      ],
      togri: 1,
      izoh: "Yaxshi izoh muammo, sabab va taklifni beradi - shunda muallif nima qilishni biladi.",
    },
  ],

  lugat: [
    { soz: "Pull request (PR)", izoh: "O'zgarishni asosiy loyihaga qo'shishni taklif qilish so'rovi." },
    { soz: "Code review", izoh: "Kodni boshqa kishi tomonidan ko'rib chiqilishi." },
    { soz: "Reviewer", izoh: "Kodni ko'rib chiqayotgan jamoa a'zosi." },
    { soz: "Merge", izoh: "Shoxobchadagi o'zgarishni asosiy shoxobchaga qo'shish." },
    { soz: "Squash", izoh: "Bir necha commit ni bitta commit ga aylantirib qo'shish." },
    { soz: "Rebase", izoh: "Commit larni boshqa shoxobcha ustiga ko'chirish." },
    { soz: "Tag", izoh: "Commit ga qo'yiladigan doimiy yorliq (masalan v1.0.0)." },
    { soz: "Release", izoh: "GitHub dagi tayyor versiya sahifasi: izoh va yuklanadigan fayllar." },
    { soz: "Semver", izoh: "Versiyani KATTA.YANGI.TUZATISH ko'rinishida belgilash qoidasi." },
    { soz: "CHANGELOG", izoh: "Versiyalar bo'yicha o'zgarishlar jurnali." },
    { soz: "Fork", izoh: "Boshqa loyihadan o'z akkauntingizga nusxa yaratish." },
    { soz: "Upstream", izoh: "Fork qilingan holda asl loyiha manzili." },
    { soz: "Issue", izoh: "Xato, taklif yoki vazifa haqidagi muhokama yozuvi." },
    { soz: "GitHub Actions", izoh: "Kod tekshiruvi va joylashni avtomatlashtiruvchi xizmat." },
    { soz: "Workflow", izoh: "Actions dagi avtomatik jarayon (YAML fayl)." },
    { soz: "Runner", izoh: "Workflow bajariladigan mashina (ubuntu-latest kabi)." },
  ],

  xatolar: [
    "Pull request ni tavsifsiz ochish &mdash; tekshiruvchi nima o'zgarganini tushunmaydi.",
    "Bitta shoxobchada bir necha bog'liq bo'lmagan vazifani qilish.",
    "Review izohini odamga qaratish (\"sen yaxshi yozmading\") &mdash; kodga qaratish kerak.",
    "Teg qo'yib, GitHub ga yuborishni unutish (<code>git push origin --tags</code>).",
    "Fork ni yangilamasdan ishni boshlash &mdash; keyin katta konflikt chiqadi.",
    "Workflow faylida maxfiy ma'lumotni to'g'ridan-to'g'ri yozib qo'yish (secrets ishlatish kerak).",
    "main shoxobchaga to'g'ridan-to'g'ri commit qilib, review ni chetlab o'tish.",
    "Merge dan keyin keraksiz shoxobchalarni o'chirmaslik &mdash; chalkashlik ko'payadi.",
  ],

  keyingi:
    "Bu bilan <b>Git va GitHub bloki to'liq yakunlandi</b> (4 dars): versiya nazorati, GitHub, asosiy buyruqlar va jamoaviy ish. Keyingi darsda mavzu o'zgaradi: <b>zamonaviy IT yo'nalishlari</b> &mdash; Web, Mobile, Data Science, AI, DevOps va Cybersecurity. Har bir yo'nalishda nima ish qilinadi, qanday vositalar ishlatiladi va 8-sinf o'quvchisi bugundan boshlab nima o'rganishi mumkin &mdash; hammasini ko'rib chiqamiz.",
});
