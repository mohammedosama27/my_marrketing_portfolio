// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about-section, .experience-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

// ===================================
// ANIMATED SKILL ITEMS
// ===================================
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
});

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => skillObserver.observe(item));

// ===================================
// PARALLAX EFFECT FOR DECORATIVE CIRCLES
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circles = document.querySelectorAll('.deco-circle');
    
    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.05;
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// TYPING EFFECT FOR SPECIALTY TEXT
// ===================================
const specialtyText = document.querySelector('.specialty-text');
if (specialtyText) {
    const text = specialtyText.textContent;
    specialtyText.textContent = '';
    specialtyText.style.opacity = '1';
    
    let index = 0;
    const typingSpeed = 100;
    
    setTimeout(() => {
        const typeWriter = () => {
            if (index < text.length) {
                specialtyText.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        };
        typeWriter();
    }, 1000);
}

// ===================================
// CONTACT ITEM HOVER EFFECTS
// ===================================
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderColor = '#2C7A7B';
        const link = this.querySelector('a');
        if (link) link.style.color = '#2C7A7B';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderColor = '#E2E8F0';
        const link = this.querySelector('a');
        if (link) link.style.color = '#2D3748';
    });
});

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can add a progress bar element in HTML and update it here
    // For now, this is just the calculation
});

// ===================================
// LAZY LOADING OPTIMIZATION
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// MOBILE MENU TOGGLE (if needed later)
// ===================================
const createMobileMenu = () => {
    // This function can be expanded if you add a navigation menu
    console.log('Mobile menu functionality ready');
};

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================
window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully!');
    createMobileMenu();
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-based animations go here
            ticking = false;
        });
        ticking = true;
    }
});
