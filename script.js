// Language translations object (partial shown, add your full translations accordingly)
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-about': 'About Me',
    'nav-courses': 'Courses',
    'nav-testimonials': 'Testimonials',
    'nav-contact': 'Contact',
    'start-journey-btn': 'Start Your English Journey',
    'excellence-title': 'Excellence',
    'excellence-text': 'Top-quality English education with proven results',
    'community-title': 'Community',
    'community-text': 'Join a supportive learning community',
    'growth-title': 'Growth',
    'growth-text': 'Accelerate your English proficiency',
    'gallery-title': 'Our Learning Environment',
    'video-title': 'Welcome to Britannia',
    'video-desc': 'See our amazing learning environment',
    'facility-title': 'Modern Facilities',
    'teachers-title': 'Expert Teachers',
    'students-title': 'Happy Students',
    'success-title': 'Success Stories',
    'testimonial-video': 'Student Testimonials',
    'resources-title': 'Learning Resources',
    'achievements-title': 'Achievements',
    'courses-title': 'Our Courses',
    'general-english': 'General English',
    'general-english-desc': 'Build strong foundations in speaking, listening, reading, and writing',
    'intensive-english': 'Intensive English',
    'intensive-english-desc': 'Fast-track your English skills with intensive study programs',
    'ielts-prep': 'IELTS Preparation',
    'ielts-prep-desc': 'Achieve your target IELTS score with expert guidance',
    'summer-programs': 'Summer Programs',
    'summer-programs-desc': 'Special summer courses for accelerated learning',
    'testimonials-title': 'What Students Say',
    'testimonial1': '"Rashid and the Britannia team helped me achieve my IELTS goal of 7.5! The teaching method is excellent and the environment is so supportive."',
    'testimonial2': '"I improved my English speaking confidence tremendously. Britannia\'s approach is practical and effective. Highly recommended!"',
    'testimonial3': '"The best language center I\'ve ever been to. Professional teachers, modern facilities, and great results!"',
    'contact-title': 'Get Started Today',
    'name-label': 'Full Name',
    'email-label': 'Email',
    'phone-label': 'Phone Number',
    'course-label': 'Course Interest',
    'select-course': 'Select a course',
    'message-label': 'Message',
    'message-placeholder': 'Tell us about your English learning goals...',
    'submit-btn': 'Send Enquiry',
    'whatsapp-btn': '💬 Chat on WhatsApp',
    'footer-subtitle': "Britannia's Expert",
    'footer-desc': 'Empowering students to achieve English excellence at Britannia Language Center',
    'footer-quick-links': 'Quick Links',
    'footer-courses': 'Courses',
    'footer-contact': 'Contact Info',
    'footer-address': 'Britannia Language Center<br>6-1, HSBC Bukit Bintang, Menara Genesis, 33, Jln Sultan Ismail, Bukit Bintang, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia',
    'footer-social': 'Follow Us',
    'newsletter-title': 'Stay Updated',
    'newsletter-placeholder': 'Enter your email',
    'newsletter-btn': 'Subscribe',
    'footer-copyright': '© 2025 Rashid - Britannia\'s Expert. All rights reserved.',
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
    'footer-cookies': 'Cookie Policy',
  },
  ar: {
    'nav-home': 'الرئيسية',
    'nav-about': 'عني',
    'nav-courses': 'الدورات',
    'nav-testimonials': 'الشهادات',
    'nav-contact': 'اتصل بنا',
    'start-journey-btn': 'ابدأ رحلة تعلم الإنجليزية',
    'excellence-title': 'التميز',
    'excellence-text': 'تعليم إنجليزي عالي الجودة مع نتائج مثبتة',
    'community-title': 'المجتمع',
    'community-text': 'انضم إلى مجتمع تعليمي داعم',
    'growth-title': 'النمو',
    'growth-text': 'عجل من إتقانك للإنجليزية',
    'gallery-title': 'بيئة التعلم لدينا',
    'video-title': 'مرحباً بكم في بريتانيا',
    'video-desc': 'شاهد بيئة التعلم المذهلة لدينا',
    'facility-title': 'مرافق حديثة',
    'teachers-title': 'مدرسون خبراء',
    'students-title': 'طلاب سعداء',
    'success-title': 'قصص نجاح',
    'testimonial-video': 'آراء الطلاب',
    'resources-title': 'موارد التعلم',
    'achievements-title': 'الإنجازات',
    'courses-title': 'دوراتنا',
    'general-english': 'الإنجليزية العامة',
    'general-english-desc': 'بناء أسس قوية في التحدث والاستماع والقراءة والكتابة',
    'intensive-english': 'الإنجليزية المكثفة',
    'intensive-english-desc': 'طور مهاراتك الإنجليزية بسرعة مع البرامج المكثفة',
    'ielts-prep': 'إعداد الآيلتس',
    'ielts-prep-desc': 'حقق درجة الآيلتس المستهدفة مع التوجيه المتخصص',
    'summer-programs': 'البرامج الصيفية',
    'summer-programs-desc': 'دورات صيفية خاصة للتعلم المعجل',
    'testimonials-title': 'ماذا يقول الطلاب',
    'testimonial1': '"ساعدني راشد وفريق بريتانيا في تحقيق هدفي في الآيلتس 7.5! طريقة التدريس ممتازة والبيئة داعمة جداً."',
    'testimonial2': '"تحسنت ثقتي في التحدث بالإنجليزية بشكل كبير. نهج بريتانيا عملي وفعال. أنصح به بشدة!"',
    'testimonial3': '"أفضل مركز لغات زرته على الإطلاق. مدرسون محترفون، مرافق حديثة، ونتائج رائعة!"',
    'contact-title': 'ابدأ اليوم',
    'name-label': 'الاسم الكامل',
    'email-label': 'البريد الإلكتروني',
    'phone-label': 'رقم الهاتف',
    'course-label': 'اهتمام الدورة',
    'select-course': 'اختر دورة',
    'message-label': 'الرسالة',
    'message-placeholder': 'أخبرنا عن أهدافك في تعلم الإنجليزية...',
    'submit-btn': 'إرسال الاستفسار',
    'whatsapp-btn': '💬 دردش على واتساب',
    'footer-subtitle': 'خبير بريتانيا',
    'footer-desc': 'تمكين الطلاب من تحقيق التميز في اللغة الإنجليزية في مركز بريتانيا للغات',
    'footer-quick-links': 'روابط سريعة',
    'footer-courses': 'الدورات',
    'footer-contact': 'معلومات الاتصال',
    'footer-address': 'مركز بريتانيا للغات<br>6-1، HSBC بوكيت بينتانج، منارة جينيسيس، 33، شارع السلطان إسماعيل، بوكيت بينتانج، 50250 كوالالمبور، إقليم فيدرالي كوالالمبور، ماليزيا',
    'footer-social': 'تابعنا',
    'newsletter-title': 'ابقَ على اطلاع',
    'newsletter-placeholder': 'أدخل بريدك الإلكتروني',
    'newsletter-btn': 'اشترك',
    'footer-copyright': '© 2025 راشد - خبير بريتانيا. كل الحقوق محفوظة.',
    'footer-privacy': 'سياسة الخصوصية',
    'footer-terms': 'شروط الخدمة',
    'footer-cookies': 'سياسة الكوكيز',
  },
  ko: {
    'nav-home': '홈',
    'nav-about': '소개',
    'nav-courses': '강좌',
    'nav-testimonials': '수강생 후기',
    'nav-contact': '연락처',
    'start-journey-btn': '영어 학습 여정 시작하기',
    'excellence-title': '우수성',
    'excellence-text': '검증된 결과를 제공하는 최고 품질의 영어 교육',
    'community-title': '커뮤니티',
    'community-text': '지원하는 학습 커뮤니티에 참여하세요',
    'growth-title': '성장',
    'growth-text': '영어 능력을 가속화하세요',
    'gallery-title': '우리의 학습 환경',
    'video-title': '브리타니아에 오신 것을 환영합니다',
    'video-desc': '놀라운 학습 환경을 확인하세요',
    'facility-title': '최신 시설',
    'teachers-title': '전문 강사',
    'students-title': '행복한 학생들',
    'success-title': '성공 사례',
    'testimonial-video': '수강생 후기',
    'resources-title': '학습 자료',
    'achievements-title': '업적',
    'courses-title': '강좌 소개',
    'general-english': '일반 영어',
    'general-english-desc': '말하기, 듣기, 읽기 및 쓰기의 탄탄한 기초 구축',
    'intensive-english': '집중 영어',
    'intensive-english-desc': '집중 학습 프로그램으로 영어 실력을 빠르게 향상하세요',
    'ielts-prep': 'IELTS 준비',
    'ielts-prep-desc': '전문가의 지도로 목표 IELTS 점수 달성',
    'summer-programs': '여름 프로그램',
    'summer-programs-desc': '가속 학습을 위한 특별 여름 강좌',
    'testimonials-title': '학생들의 평가',
    'testimonial1': '"라시드와 브리타니아 팀 덕분에 IELTS 7.5 목표를 달성했습니다! 교육 방법이 훌륭하고 환경도 매우 지원적입니다."',
    'testimonial2': '"영어 말하기 자신감이 크게 향상되었습니다. 브리타니아의 접근법은 실용적이고 효과적입니다. 강력 추천합니다!"',
    'testimonial3': '"제가 가본 최고의 어학원입니다. 전문 강사, 현대적인 시설, 훌륭한 결과!"',
    'contact-title': '지금 시작하세요',
    'name-label': '성명',
    'email-label': '이메일',
    'phone-label': '전화번호',
    'course-label': '관심 강좌',
    'select-course': '강좌 선택',
    'message-label': '메시지',
    'message-placeholder': '영어 학습 목표를 알려주세요...',
    'submit-btn': '문의 보내기',
    'whatsapp-btn': '💬 WhatsApp 채팅',
    'footer-subtitle': '브리타니아 전문가',
    'footer-desc': '브리타니아 언어 센터에서 영어 우수성을 달성하도록 학생들을 지원합니다',
    'footer-quick-links': '빠른 링크',
    'footer-courses': '강좌',
    'footer-contact': '연락처 정보',
    'footer-address': '브리타니아 언어 센터<br>6-1, HSBC 부킷 빈탕, 제네시스 타워, 33, 술탄 이스마일 거리, 부킷 빈탕, 50250 쿠알라룸푸르, 연방 직할령 쿠알라룸푸르, 말레이시아',
    'footer-social': '팔로우하기',
    'newsletter-title': '최신 소식 받기',
    'newsletter-placeholder': '이메일을 입력하세요',
    'newsletter-btn': '구독하기',
    'footer-copyright': '© 2025 라시드 - 브리타니아 전문가. 판권 소유.',
    'footer-privacy': '개인정보처리방침',
    'footer-terms': '서비스 이용약관',
    'footer-cookies': '쿠키 정책',
  },
  ja: {
    'nav-home': 'ホーム',
    'nav-about': '私について',
    'nav-courses': 'コース',
    'nav-testimonials': 'お客様の声',
    'nav-contact': 'お問い合わせ',
    'start-journey-btn': '英語学習を始める',
    'excellence-title': '優秀さ',
    'excellence-text': '実績のある高品質な英語教育',
    'community-title': 'コミュニティ',
    'community-text': 'サポートのある学習コミュニティに参加しましょう',
    'growth-title': '成長',
    'growth-text': '英語力を加速させましょう',
    'gallery-title': '私たちの学習環境',
    'video-title': 'ブリタニアへようこそ',
    'video-desc': '素晴らしい学習環境をご覧ください',
    'facility-title': '最新施設',
    'teachers-title': '専門の講師',
    'students-title': '幸せな学生',
    'success-title': '成功事例',
    'testimonial-video': '学生の声',
    'resources-title': '学習リソース',
    'achievements-title': '実績',
    'courses-title': '私たちのコース',
    'general-english': '一般英語',
    'general-english-desc': '話す、聞く、読む、書くの基礎を築く',
    'intensive-english': '集中英語',
    'intensive-english-desc': '集中的な学習プログラムで英語力を速める',
    'ielts-prep': 'IELTS準備',
    'ielts-prep-desc': '専門家の指導で目標のIELTSスコアを達成',
    'summer-programs': '夏季プログラム',
    'summer-programs-desc': '加速学習のための特別夏季コース',
    'testimonials-title': '学生の声',
    'testimonial1': '「ラシードとブリタニアチームのおかげでIELTS7.5の目標を達成できました！指導方法は素晴らしく、環境もとてもサポート的です。」',
    'testimonial2': '「英語の話す自信が大幅に向上しました。ブリタニアのアプローチは実践的で効果的です。強くおすすめします！」',
    'testimonial3': '「私が今まで行った中で最高の語学センターです。プロの講師、最新の施設、素晴らしい成果！」',
    'contact-title': '今すぐ始めましょう',
    'name-label': '氏名',
    'email-label': 'メールアドレス',
    'phone-label': '電話番号',
    'course-label': 'コースの興味',
    'select-course': 'コースを選択',
    'message-label': 'メッセージ',
    'message-placeholder': '英語学習の目標を教えてください...',
    'submit-btn': '問い合わせを送信',
    'whatsapp-btn': '💬 WhatsAppでチャット',
    'footer-subtitle': 'ブリタニアの専門家',
    'footer-desc': 'ブリタニア語学センターで英語の卓越性を達成するために学生を支援します',
    'footer-quick-links': 'クイックリンク',
    'footer-courses': 'コース',
    'footer-contact': '連絡先情報',
    'footer-address': 'ブリタニア語学センター<br>6-1、HSBCブキットビンタン、ジェネシスタワー、33、スルタンイスマイル通り、ブキットビンタン、50250クアラルンプール、連邦直轄領クアラルンプール、マレーシア',
    'footer-social': 'フォローする',
    'newsletter-title': '最新情報を受け取る',
    'newsletter-placeholder': 'メールアドレスを入力してください',
    'newsletter-btn': '登録',
    'footer-copyright': '© 2025 ラシード - ブリタニアの専門家。無断転載禁止。',
    'footer-privacy': 'プライバシーポリシー',
    'footer-terms': '利用規約',
    'footer-cookies': 'クッキーポリシー',
  },
  ru: {
    'nav-home': 'Главная',
    'nav-about': 'Обо мне',
    'nav-courses': 'Курсы',
    'nav-testimonials': 'Отзывы',
    'nav-contact': 'Контакты',
    'start-journey-btn': 'Начать изучать английский',
    'excellence-title': 'Отличие',
    'excellence-text': 'Высококачественное обучение английскому с доказанными результатами',
    'community-title': 'Сообщество',
    'community-text': 'Присоединяйтесь к поддерживающему сообществу',
    'growth-title': 'Рост',
    'growth-text': 'Ускорьте своё владение английским',
    'gallery-title': 'Наша учебная среда',
    'video-title': 'Добро пожаловать в Britannia',
    'video-desc': 'Посмотрите нашу удивительную учебную среду',
    'facility-title': 'Современные помещения',
    'teachers-title': 'Опытные преподаватели',
    'students-title': 'Счастливые студенты',
    'success-title': 'Истории успеха',
    'testimonial-video': 'Отзывы студентов',
    'resources-title': 'Учебные материалы',
    'achievements-title': 'Достижения',
    'courses-title': 'Наши курсы',
    'general-english': 'Общий английский',
    'general-english-desc': 'Создайте прочную базу в говорении, аудировании, чтении и письме',
    'intensive-english': 'Интенсивный английский',
    'intensive-english-desc': 'Ускорьте свои навыки с помощью интенсивных программ',
    'ielts-prep': 'Подготовка к IELTS',
    'ielts-prep-desc': 'Достигните целевого балла IELTS с помощью экспертного руководства',
    'summer-programs': 'Летние программы',
    'summer-programs-desc': 'Специальные летние курсы для ускоренного обучения',
    'testimonials-title': 'Отзывы студентов',
    'testimonial1': '"Рашид и команда Britannia помогли мне достичь моей цели IELTS — 7.5! Метод преподавания отличный, а атмосфера очень поддерживающая."',
    'testimonial2': '"Моя уверенность в разговорном английском значительно выросла. Подход Britannia практичный и эффективный. Очень рекомендую!"',
    'testimonial3': '"Лучший языковой центр, в котором я когда-либо был. Профессиональные преподаватели, современные условия и отличные результаты!"',
    'contact-title': 'Начните сегодня',
    'name-label': 'Полное имя',
    'email-label': 'Электронная почта',
    'phone-label': 'Номер телефона',
    'course-label': 'Интерес к курсу',
    'select-course': 'Выберите курс',
    'message-label': 'Сообщение',
    'message-placeholder': 'Расскажите нам о своих целях в изучении английского...',
    'submit-btn': 'Отправить запрос',
    'whatsapp-btn': '💬 Чат в WhatsApp',
    'footer-subtitle': 'Эксперт Britannia',
    'footer-desc': 'Помогаем студентам достичь совершенства в английском языке в Britannia Language Center',
    'footer-quick-links': 'Быстрые ссылки',
    'footer-courses': 'Курсы',
    'footer-contact': 'Контактная информация',
    'footer-address': 'Britannia Language Center<br>6-1, HSBC Bukit Bintang, Menara Genesis, 33, Jln Sultan Ismail, Bukit Bintang, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia',
    'footer-social': 'Следите за нами',
    'newsletter-title': 'Будьте в курсе',
    'newsletter-placeholder': 'Введите ваш email',
    'newsletter-btn': 'Подписаться',
    'footer-copyright': '© 2025 Rashid - Эксперт Britannia. Все права защищены.',
    'footer-privacy': 'Политика конфиденциальности',
    'footer-terms': 'Условия использования',
    'footer-cookies': 'Политика файлов cookie',
  }
};


let currentLang = 'en';
let currentTheme = 'light';

// Toggle light/dark theme
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        currentTheme = 'dark';
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        currentTheme = 'light';
    }
}

// Change language and update text content
function changeLanguage(lang) {
    currentLang = lang;

    // Update direction for Arabic
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }

    // Show only relevant lang-content blocks
    document.querySelectorAll('.lang-content').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Translate all elements with data-translate-key
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT') {
                if (el.type === 'submit' || el.type === 'button') {
                    el.value = translations[lang][key];
                } else if (el.placeholder !== undefined) {
                    el.placeholder = translations[lang][key];
                }
            } else if (el.tagName === 'TEXTAREA') {
                if (el.placeholder !== undefined) {
                    el.placeholder = translations[lang][key];
                }
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// Show section and animate
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        setTimeout(() => {
            section.style.transition = 'all 0.8s ease-out';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    let message = `New enquiry from ${formData.get('name')}:\n\n`;
    message += `Email: ${formData.get('email')}\n`;
    message += `Phone: ${formData.get('phone')}\n`;
    message += `Course Interest: ${formData.get('course')}\n`;
    message += `Message: ${formData.get('message')}`;
    
    alert(translations[currentLang]['submit-success'] || 'Thank you for your enquiry! We will contact you soon.');
    event.target.reset();
}

// Open WhatsApp chat with preset message
function openWhatsApp() {
    const message = encodeURIComponent("Hi Rashid! I'm interested in learning more about Britannia Language Center courses. Can you help me get started?");
    const phoneNumber = "601115301464"; // Actual WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.setAttribute('data-theme', currentTheme);

    // Trigger initial language change to apply translations
    changeLanguage(currentLang);

    // Intersection Observer for animations (optional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .testimonial, .about-content').forEach(el => {
        observer.observe(el);
    });

    // Animate liquid background hue
    const liquidBg = document.querySelector('.liquid-bg');
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        liquidBg.style.filter = `hue-rotate(${hue}deg)`;
    }, 100);

    // Floating animation delay
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, idx) => {
        el.style.animationDelay = `${idx * 0.2}s`;
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.liquid-bg');
    if(parallax){
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Lightbox open/close functions
function openLightbox(type, src) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    if(type === 'img') {
        content.innerHTML = `<img src="${src}" alt="Gallery Image"/>`;
    } else if(type === 'video') {
        content.innerHTML = `
            <video controls autoplay style="max-width:100%;max-height:80vh; border-radius:16px;">
                <source src="${src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
    }
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    lightbox.classList.remove('active');
    content.innerHTML = '';
}
