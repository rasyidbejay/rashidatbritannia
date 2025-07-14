// Language translations object
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-courses': 'Courses',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',
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
        'footer-subtitle': 'Proud Britannian',
        'footer-desc': 'Empowering students to achieve English excellence at Britannia Language Center',
        'footer-quick-links': 'Quick Links',
        'footer-courses': 'Courses',
        'footer-contact': 'Contact Info',
        'footer-address': 'Britannia Language Center<br>Main Campus, Education District',
        'footer-social': 'Follow Us',
        'newsletter-title': 'Stay Updated',
        'newsletter-placeholder': 'Enter your email',
        'newsletter-btn': 'Subscribe',
        'footer-copyright': '© 2025 Rashid - Proud Britannian. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-cookies': 'Cookie Policy',
        'excellence-title': 'Excellence',
        'excellence-text': 'Top-quality English education with proven results',
        'community-title': 'Community',
        'community-text': 'Join a supportive learning community',
        'growth-title': 'Growth',
        'growth-text': 'Accelerate your English proficiency',
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
        'submit-btn': 'Send Enquiry',
        'whatsapp-btn': '💬 Chat on WhatsApp'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'عني',
        'nav-courses': 'الدورات',
        'nav-testimonials': 'الشهادات',
        'nav-contact': 'اتصل بنا',
        'excellence-title': 'التميز',
        'excellence-text': 'تعليم إنجليزي عالي الجودة مع نتائج مثبتة',
        'community-title': 'المجتمع',
        'community-text': 'انضم إلى مجتمع تعليمي داعم',
        'growth-title': 'النمو',
        'growth-text': 'عجل من إتقانك للإنجليزية',
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
        'contact-title': 'ابدأ اليوم',
        'name-label': 'الاسم الكامل',
        'email-label': 'البريد الإلكتروني',
        'phone-label': 'رقم الهاتف',
        'course-label': 'اهتمام الدورة',
        'select-course': 'اختر دورة',
        'message-label': 'الرسالة',
        'submit-btn': 'إرسال الاستفسار',
        'whatsapp-btn': '💬 دردش على واتساب'
    },
    // other languages omitted here for brevity, but keep the same structure
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
    
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.lang-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(content => {
        if (content.classList.contains('lang-content')) {
            content.classList.add('active');
        }
    });

    // RTL for Arabic
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }
}

// Show section and animate
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    
    const section = document.getElementById(sectionId);
    section.classList.add('active');
    
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    setTimeout(() => {
        section.style.transition = 'all 0.8s ease-out';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 100);
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
    
    alert('Thank you for your enquiry! We will contact you soon.');
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
    document.body.setAttribute('data-theme', 'light');

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
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
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
