const translations = {
    he: {
        navHome: "בית",
        navAbout: "על הישיבה",
        navActivities: "פעילות",
        donate: "תרומות",
        heroTitle: "ישיבת זרע יצחק",
        heroSubtitle: "הר נוף, רחוב קפלן — בית מדרש לתורה וליראת שמיים",
        welcomeTitle: "ברוכים הבאים",
        welcomeP: "ישיבת זרע יצחק שוכנת בלב שכונת הר נוף בירושלים, ופועלת על פי דרכם של גדולי התורה.\nהישיבה שמה דגש על חיבור בין לימוד עמוק, יראת שמיים ומידות טובות.",
        activityTitle: "הפעילות בישיבה",
        activityList: [
            "✔ שיעורי עיון יומיים",
            "✔ סדרים קבועים באווירה תורנית",
            "✔ שיעורי מוסר ושיחות חיזוק",
            "✔ שבתות ישיבה",
            "✔ תוכניות חיזוק מיוחדות בזמן בין הזמנים"
        ],
        imagesTitle: "תמונות מהפעילות",
        aboutTitle: "על הישיבה",
        aboutP1: `
        ישיבת זרע יצחק החדשה הוקמה על ידי הר' חיים משה גולדשטיין שליט"א ועמיתו הר' דב רודניק שליט"א  בעידודו ובעצתו של הגאון הגדול רבי יונתן דיויד שליט"א ראש ישיבת פחד יצחק, ובהדרכתו האישית של תלמידו הג"ר חיים יצחק קפלן שליט"א משגיח של ישיבת חברון.
        הישיבה שמה למטרה את צמיחת הבחורים בתורה בעמקות ובעיון ישר, עם דגש מיוחד על מידות ויחס של בין אדם לחבירו, באוירה ישיבתית ובונה.
     הגאון הר' אברהם גולדשטיין מראשי ישיבת התפוצות ומרבני העיר העתיקה מלוה את הישיבה מידי יום במסירת שיעור לכלל הבחורים, תוך דגש מיוחד על עמקות סברא בהלכה, ופעם בשבוע בשעות הערב בשיחת מוסר על גדלות האדם והשקפה בענייני השעה ומאורעות התקופה.`,
        aboutP2: " הישיבה הוקמה במטרה ליצור מסגרת של לימוד בעיון, יראת שמיים והתקדמות אישית. היא ידועה באווירה משפחתית, חום אנושי ומסירות של הצוות התורני.",
        donateTitle: "תרומות לישיבה",
        donateP1: "תרומתכם מאפשרת להמשיך ולהחזיק עולם של תורה, ולתמוך בבחורים הלומדים בישיבה מדי יום במסירות ובשקידה.",
        donateP2HTML: "ניתן לתרום דרך קישור מאובטח:<br><span class='highlight-red'>*יש לשים לב שזה תרומה לישיבה קטנה*</span>",
        donateLink: "לתרומה לחץ כאן",
        footer: "© ישיבת זרע יצחק — תודה על התמיכה"
    },
    en: {
        navHome: "Home",
        navAbout: "About the Yeshiva",
        navActivities: "Activities",
        donate: "Donate",
        heroTitle: "Yeshivat Zera Yitzhak",
        heroSubtitle: "Har Nof, Kaplan Street — Beit Midrash for Torah and Fear of Heaven",
        welcomeTitle: "Welcome",
        welcomeP: "Yeshivat Zera Yitzhak is located in the heart of the Har Nof neighborhood in Jerusalem...",
        activityTitle: "Yeshiva Activities",
        activityList: [
            "✔ Daily Torah study lessons",
            "✔ Fixed study sessions in a religious atmosphere",
            "✔ Moral lessons and encouragement talks",
            "✔ Shabbat gatherings",
            "✔ Special programs during Bein Hazmanim"
        ],
        imagesTitle: "Activity Photos",
        aboutTitle: "About the Yeshiva",
        aboutP1: `The new Zera Yitzhak Yeshiva was established by Rabbi Chaim Moshe Goldstein and his colleague Rabbi Dov Rudnik with the encouragement and advice of the great gaon Rabbi Yonatan David, head of the Pahad Yitzhak Yeshiva, and with the personal guidance of his student Rabbi Chaim Yitzhak Kaplan, supervisor of the Hebron Yeshiva.
The yeshiva aims to develop the youth in Torah in depth and with a sincere eye, with a special emphasis on the virtues and relationship between a person and his fellow man, in a constructive and yeshiva atmosphere.
The gaon Rabbi Avraham Goldstein, one of the heads of the Diaspora Yeshiva and rabbis of the Old City, accompanies the yeshiva every day by giving a lesson to all the youth, with a special emphasis on the depths of understanding in Halacha, and once a week in the evening with a moral conversation on the greatness of man and a perspective on the affairs of the time and the events of the period.`,
        aboutP2: "The yeshiva was established with the goal of creating a framework for careful study, reverence for God, and personal progress.It is known for its family atmosphere, human warmth, and the dedication of the Torah staff.",
        donateTitle: "Donations",
        donateP1: "Your donation helps support a world of Torah and the students studying at the yeshiva daily.",
        donateP2HTML: "You can donate via a secure link.<br><span class='highlight-red'>*Please note that this donation is for the small yeshiva*</span>",
        donateLink: "Click here to donate",
        footer: "© Yeshivat Zera Yitzhak — Thank you for your support"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    // ניווט
    if (document.getElementById('nav-home')) document.getElementById('nav-home').textContent = translations[lang].navHome;
    if (document.getElementById('nav-about')) document.getElementById('nav-about').textContent = translations[lang].navAbout;
    if (document.getElementById('nav-activities')) document.getElementById('nav-activities').textContent = translations[lang].navActivities;
    if (document.getElementById('donate-btn')) document.getElementById('donate-btn').textContent = translations[lang].donate;

    // דפי בית
    if (document.getElementById('hero-title')) document.getElementById('hero-title').textContent = translations[lang].heroTitle;
    if (document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').textContent = translations[lang].heroSubtitle;
    if (document.getElementById('welcome-title')) document.getElementById('welcome-title').textContent = translations[lang].welcomeTitle;
    if (document.getElementById('welcome-p')) document.getElementById('welcome-p').textContent = translations[lang].welcomeP;

    // דפי פעילות
    if (document.getElementById('activity-title')) document.getElementById('activity-title').textContent = translations[lang].activityTitle;
    if (document.getElementById('activity-list')) {
        const ul = document.getElementById('activity-list');
        ul.innerHTML = "";
        translations[lang].activityList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }
    if (document.getElementById('images-title')) document.getElementById('images-title').textContent = translations[lang].imagesTitle;

    // דף על הישיבה
    if (document.getElementById('about-title')) document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    if (document.getElementById('about-p1')) document.getElementById('about-p1').textContent = translations[lang].aboutP1;
    if (document.getElementById('about-p2')) document.getElementById('about-p2').textContent = translations[lang].aboutP2;

    // דף תרומות
    if (document.getElementById('donate-title')) document.getElementById('donate-title').textContent = translations[lang].donateTitle;
    if (document.getElementById('donate-p1')) document.getElementById('donate-p1').textContent = translations[lang].donateP1;
    if (document.getElementById('donate-p2')) 
        document.getElementById('donate-p2').innerHTML = translations[lang].donateP2HTML;
    if (document.getElementById('donate-link')) document.getElementById('donate-link').textContent = translations[lang].donateLink;

    // Footer
    if (document.getElementById('footer')) document.getElementById('footer').textContent = translations[lang].footer;

    // כיווניות
    document.body.dir = (lang === 'he') ? 'rtl' : 'ltr';

    // כפתורי שפה
    if (document.getElementById('btn-he')) document.getElementById('btn-he').classList.remove('active');
    if (document.getElementById('btn-en')) document.getElementById('btn-en').classList.remove('active');
    if (document.getElementById(`btn-${lang}`)) document.getElementById(`btn-${lang}`).classList.add('active');
}

// טעינת השפה שנשמרה בעת פתיחת הדף + אירועי לחיצה על כפתורי השפה
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'he';
    setLanguage(savedLang);

    if (document.getElementById('btn-he')) document.getElementById('btn-he').addEventListener('click', () => setLanguage('he'));
    if (document.getElementById('btn-en')) document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
});
