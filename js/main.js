// JavaScript para Curso HTML5 do Zero ao Expert - Sandro Pereira 2025

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Toggle aria-expanded for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.modulo-card, .about-card, .instrutor-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';

        function typeText(text, element, speed = 50) {
            let i = 0;
            element.innerHTML = '';

            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }

            setTimeout(type, 1000); // Start after 1 second
        }

        typeText(originalText, heroTitle, 30);
    }

    // Add hover effects to module cards
    const moduloCards = document.querySelectorAll('.modulo-card');
    moduloCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for analytics (placeholder)
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            console.log(`Botão clicado: ${btnText}`);

            // Here you could add real analytics tracking
            // Example: gtag('event', 'click', { 'event_category': 'button', 'event_label': btnText });
        });
    });

    // Add search functionality (placeholder for future implementation)
    function initSearch() {
        // This could be implemented later for searching through modules
        const searchInput = document.querySelector('#search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                // Filter modules based on search term
                console.log(`Pesquisando por: ${searchTerm}`);
            });
        }
    }

    // Initialize search if element exists
    initSearch();

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }

        // Tab navigation improvements
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Remove loading spinner if it exists
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    });

    // Add scroll-to-top functionality
    function createScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.setAttribute('aria-label', 'Voltar ao topo');

        document.body.appendChild(scrollBtn);

        // Show/hide based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add hover effects
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.background = '#1d4ed8';
        });

        scrollBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'var(--primary-color)';
        });
    }

    // Initialize scroll to top button
    createScrollToTopButton();

    // Add module completion tracking (localStorage)
    function initModuleTracking() {
        const moduloLinks = document.querySelectorAll('.btn-modulo');
        moduloLinks.forEach(link => {
            const moduleNumber = link.href.match(/modulo-(\d+)/);
            if (moduleNumber) {
                const moduleKey = `modulo-${moduleNumber[1]}-completed`;
                const isCompleted = localStorage.getItem(moduleKey) === 'true';

                if (isCompleted) {
                    const card = link.closest('.modulo-card');
                    if (card) {
                        card.classList.add('completed');
                        const badge = document.createElement('div');
                        badge.className = 'completion-badge';
                        badge.innerHTML = '✓';
                        badge.style.cssText = `
                            position: absolute;
                            top: 1rem;
                            left: 1rem;
                            background: var(--success-color);
                            color: white;
                            width: 2rem;
                            height: 2rem;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1rem;
                            font-weight: bold;
                            z-index: 10;
                        `;
                        card.style.position = 'relative';
                        card.appendChild(badge);
                    }
                }

                link.addEventListener('click', function() {
                    // Mark as completed when accessing module
                    localStorage.setItem(moduleKey, 'true');
                });
            }
        });
    }

    // Initialize module tracking
    initModuleTracking();

    console.log('🚀 Curso HTML5 do Zero ao Expert carregado com sucesso!');
    console.log('👨‍🏫 Professor: Sandro Pereira');
    console.log('📅 Ano: 2025');
});
