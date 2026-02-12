/**
 * Theme Manager - Aprende Web
 */

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        document.addEventListener('DOMContentLoaded', () => {
            this.addToggleToNav();
        });
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
        this.updateIcon();
    }

    applyTheme() {
        if (this.theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    updateIcon() {
        const btn = document.querySelector('.dark-mode-toggle');
        if (btn) {
            btn.innerHTML = this.theme === 'light' ? '🌙' : '☀️';
        }
    }

    addToggleToNav() {
        const nav = document.querySelector('.nav-menu');
        if (!nav || document.querySelector('.dark-mode-toggle')) return;

        const toggleLi = document.createElement('li');
        toggleLi.innerHTML = `
            <button class="dark-mode-toggle" aria-label="Mudar tema" onclick="themeManager.toggle()">
                ${this.theme === 'light' ? '🌙' : '☀️'}
            </button>
        `;
        nav.appendChild(toggleLi);
    }
}

const themeManager = new ThemeManager();
