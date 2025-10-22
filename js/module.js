// JavaScript específico para módulos do Curso HTML5 - Sandro Pereira 2025

class ModuleController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = this.getTotalSlides();
        this.moduleNumber = this.getModuleNumber();

        this.init();
    }

    init() {
        this.updateProgress();
        this.addKeyboardNavigation();
        this.addSlideNavigation();
        this.addCompletionTracking();
        this.animateSlideEntry();

        console.log(`🚀 Módulo ${this.moduleNumber} iniciado`);
        console.log(`📊 Total de slides: ${this.totalSlides}`);
    }

    getTotalSlides() {
        return document.querySelectorAll('.slide').length;
    }

    getModuleNumber() {
        const pathParts = window.location.pathname.split('/');
        const moduleFile = pathParts[pathParts.length - 1];
        const match = moduleFile.match(/modulo-(\d+)\.html/);
        return match ? parseInt(match[1]) : 0;
    }

    updateProgress() {
        const progressPercentage = (this.currentSlide / this.totalSlides) * 100;
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        const slideCounter = document.querySelector('.slide-counter');

        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }

        if (progressText) {
            progressText.textContent = `Módulo ${this.moduleNumber} de 20`;
        }

        if (slideCounter) {
            slideCounter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(slideNumber) {
        // Hide current slide
        const currentSlideElement = document.getElementById(`slide-${this.currentSlide}`);
        if (currentSlideElement) {
            currentSlideElement.style.display = 'none';
        }

        // Show target slide
        const targetSlideElement = document.getElementById(`slide-${slideNumber}`);
        if (targetSlideElement) {
            targetSlideElement.style.display = 'block';
            this.currentSlide = slideNumber;
            this.updateProgress();
            this.updateNavigationButtons();
            this.animateSlideEntry();

            // Scroll to top of slide
            targetSlideElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.querySelector('.slide-navigation .btn-secondary');
        const nextBtn = document.querySelector('.slide-navigation .btn-primary');

        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 1;
            prevBtn.style.opacity = this.currentSlide === 1 ? '0.5' : '1';
        }

        if (nextBtn) {
            if (this.currentSlide === this.totalSlides) {
                nextBtn.textContent = 'Concluir Módulo';
                nextBtn.className = 'btn btn-success';
                nextBtn.onclick = () => this.completeModule();
            } else {
                nextBtn.textContent = 'Próximo';
                nextBtn.className = 'btn btn-primary';
                nextBtn.onclick = () => this.nextSlide();
            }
        }
    }

    animateSlideEntry() {
        const currentSlideElement = document.getElementById(`slide-${this.currentSlide}`);
        if (currentSlideElement) {
            currentSlideElement.classList.add('animate-in');
        }
    }

    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
            }
        });
    }

    addSlideNavigation() {
        // Add click handlers for navigation buttons
        const prevBtns = document.querySelectorAll('.btn-secondary');
        const nextBtns = document.querySelectorAll('.btn-primary');

        prevBtns.forEach(btn => {
            if (btn.textContent.includes('Anterior')) {
                btn.onclick = () => this.previousSlide();
            }
        });

        nextBtns.forEach(btn => {
            if (btn.textContent.includes('Próximo')) {
                btn.onclick = () => this.nextSlide();
            }
        });
    }

    addCompletionTracking() {
        // Track slide views for analytics
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const slideNumber = index + 1;
                        console.log(`📖 Slide ${slideNumber} visualizado`);

                        // Store progress in localStorage
                        const progressKey = `modulo-${this.moduleNumber}-progress`;
                        const progress = {
                            module: this.moduleNumber,
                            slide: slideNumber,
                            timestamp: new Date().toISOString()
                        };
                        localStorage.setItem(progressKey, JSON.stringify(progress));
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(slide);
        });
    }

    completeModule() {
        // Mark module as completed
        const completionKey = `modulo-${this.moduleNumber}-completed`;
        localStorage.setItem(completionKey, 'true');

        // Show completion message
        this.showCompletionMessage();

        // Redirect to next module or course overview
        setTimeout(() => {
            if (this.moduleNumber < 20) {
                window.location.href = `modulo-${this.moduleNumber + 1}.html`;
            } else {
                window.location.href = '../index.html';
            }
        }, 3000);
    }

    showCompletionMessage() {
        const message = document.createElement('div');
        message.className = 'completion-message';
        message.innerHTML = `
            <div class="completion-content">
                <div class="completion-icon">🎉</div>
                <h2>Módulo Concluído!</h2>
                <p>Parabéns! Você completou o Módulo ${this.moduleNumber} com sucesso.</p>
                <p>Redirecionando para o próximo módulo...</p>
                <div class="completion-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        `;

        message.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.5s ease;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .completion-content {
                text-align: center;
                color: white;
                padding: 3rem;
                background: linear-gradient(135deg, var(--primary-color), #1d4ed8);
                border-radius: 1rem;
                max-width: 500px;
                animation: slideUp 0.5s ease;
            }
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .completion-icon {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
            .completion-progress {
                margin-top: 2rem;
            }
            .progress-bar {
                width: 200px;
                height: 6px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 3px;
                overflow: hidden;
                margin: 0 auto;
            }
            .progress-fill {
                height: 100%;
                background: #22c55e;
                border-radius: 3px;
                animation: fillProgress 2s ease;
            }
            @keyframes fillProgress {
                from { width: 0%; }
                to { width: 100%; }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(message);

        // Add click to skip
        message.addEventListener('click', () => {
            if (this.moduleNumber < 20) {
                window.location.href = `modulo-${this.moduleNumber + 1}.html`;
            } else {
                window.location.href = '../index.html';
            }
        });
    }
}

// Global functions for HTML onclick handlers
function nextSlide() {
    if (window.moduleController) {
        window.moduleController.nextSlide();
    }
}

function previousSlide() {
    if (window.moduleController) {
        window.moduleController.previousSlide();
    }
}

function completeModule() {
    if (window.moduleController) {
        window.moduleController.completeModule();
    }
}

// Initialize module when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.moduleController = new ModuleController();

    // Add module-specific enhancements
    addCodeCopyButtons();
    addSyntaxHighlighting();
    addInteractiveElements();

    console.log('✅ Módulo carregado completamente');
});

// Code copy functionality
function addCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block, index) => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '📋';
        copyButton.title = 'Copiar código';

        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s ease;
        `;

        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(copyButton);

        // Show button on hover
        pre.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });

        pre.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });

        // Copy functionality
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                copyButton.innerHTML = '✅';
                copyButton.style.background = 'var(--success-color)';

                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                    copyButton.style.background = 'var(--primary-color)';
                }, 2000);
            } catch (err) {
                console.error('Erro ao copiar código:', err);
                copyButton.innerHTML = '❌';
                copyButton.style.background = 'var(--error-color)';

                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                    copyButton.style.background = 'var(--primary-color)';
                }, 2000);
            }
        });
    });
}

// Syntax highlighting enhancement
function addSyntaxHighlighting() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Add line numbers for long code blocks
        const lines = block.textContent.split('\n');
        if (lines.length > 3) {
            const numberedCode = lines.map((line, index) =>
                `<span class="line-number">${index + 1}</span>${line}`
            ).join('\n');

            block.innerHTML = numberedCode;

            // Add line number styles
            const style = document.createElement('style');
            style.textContent = `
                .line-number {
                    display: inline-block;
                    width: 2rem;
                    color: #64748b;
                    text-align: right;
                    margin-right: 1rem;
                    user-select: none;
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// Interactive elements
function addInteractiveElements() {
    // Add hover effects to steps
    const steps = document.querySelectorAll('.steps-list li');
    steps.forEach((step, index) => {
        step.style.cursor = 'pointer';
        step.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(37, 99, 235, 0.1)';
            this.style.borderRadius = '0.5rem';
            this.style.transform = 'translateX(4px)';
        });

        step.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click handlers for kbd elements
    const kbdElements = document.querySelectorAll('kbd');
    kbdElements.forEach(kbd => {
        kbd.addEventListener('click', function() {
            // Copy keyboard shortcut
            const shortcut = this.textContent;
            navigator.clipboard.writeText(shortcut).then(() => {
                this.style.background = 'var(--success-color)';
                this.style.color = 'white';

                setTimeout(() => {
                    this.style.background = '';
                    this.style.color = '';
                }, 1000);
            });
        });
    });

    // Add animations to visual elements
    const visualElements = document.querySelectorAll('.tool-icon, .setup-illustration');
    visualElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.setAttribute('aria-label', `Slide ${index + 1} de ${slides.length}`);
    });

    // Add focus management
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Add screen reader announcements for slide changes
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.style.cssText = `
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    `;
    document.body.appendChild(announcer);

    // Announce slide changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const slide = mutation.target;
                if (slide.style.display !== 'none') {
                    const slideNumber = slide.id.replace('slide-', '');
                    announcer.textContent = `Slide ${slideNumber} de ${slides.length}`;
                }
            }
        });
    });

    slides.forEach(slide => {
        observer.observe(slide, { attributes: true, attributeFilter: ['style'] });
    });
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`⚡ Tempo de carregamento: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }, 0);
    });
}
