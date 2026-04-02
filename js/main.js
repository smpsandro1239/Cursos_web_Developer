/**
 * Main Logic - Aprende Web
 */

document.addEventListener('DOMContentLoaded', () => {
    updateCourseProgressUI();
    updateDashboardUI();

    // Listen for progress updates
    window.addEventListener('progressUpdate', () => {
        updateCourseProgressUI();
        updateDashboardUI();
    });

    window.addEventListener('authChange', () => {
        updateCourseProgressUI();
        updateDashboardUI();
    });
});

function updateCourseProgressUI() {
    if (typeof progressManager === 'undefined') return;

    const courseCards = document.querySelectorAll('.course-card');
    const courses = ['html5', 'css', 'js', 'angular'];

    courseCards.forEach((card, index) => {
        const courseId = courses[index];
        const percentage = progressManager.getCourseCompletion(courseId);

        // Remove existing progress bar if any
        const existing = card.querySelector('.course-progress-mini');
        if (existing) existing.remove();

        if (percentage > 0) {
            const progressHtml = `
                <div class="course-progress-mini">
                    <div class="mini-bar-bg">
                        <div class="mini-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span>${percentage}% concluído</span>
                </div>
            `;
            card.insertAdjacentHTML('beforeend', progressHtml);
        }
    });
}

function updateDashboardUI() {
    const dashboard = document.getElementById('dashboard');
    const userStats = document.getElementById('user-stats');

    if (auth && auth.currentUser) {
        if (dashboard) dashboard.style.display = 'block';
        if (userStats && typeof progressManager !== 'undefined') {
            const stats = progressManager.getStats();
            userStats.innerHTML = `
                <div class="stats-card">
                    <span class="stat-value">${stats.totalCompleted}</span>
                    <span class="stat-label">Módulos Concluídos</span>
                </div>
                <div class="stats-card">
                    <span class="stat-value">${stats.quizAverage}%</span>
                    <span class="stat-label">Média nos Quizzes</span>
                </div>
                <div class="stats-card">
                    <span class="stat-value">${stats.certificates.length}</span>
                    <span class="stat-label">Certificados</span>
                </div>
            `;
        }
    } else {
        if (dashboard) dashboard.style.display = 'none';
    }
}

// Voltar ao topo logic
const createScrollTopBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.className = 'btn-scroll-top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
};

createScrollTopBtn();

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('✅ SW registered:', registration.scope);
                })
                .catch((error) => {
                    console.log('❌ SW registration failed:', error);
                });
        });
    }

    initStreakWidget();
});

function initStreakWidget() {
    const streakCount = document.getElementById('streak-count');
    const weeklyProgress = document.getElementById('weekly-progress');
    
    if (!streakCount || !weeklyProgress) return;
    
    const streak = parseInt(localStorage.getItem('current_streak') || '0');
    streakCount.textContent = streak;
    
    const studyDates = JSON.parse(localStorage.getItem('study_dates') || '[]');
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toDateString();
        const studied = studyDates.includes(dateStr);
        const dayName = date.toLocaleDateString('pt-PT', { weekday: 'short' }).slice(0, 2);
        
        const dot = document.createElement('div');
        dot.style.cssText = `
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: ${studied ? '#10b981' : 'rgba(255,255,255,0.1)'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.65rem;
            color: ${studied ? 'white' : 'var(--text-muted)'};
        `;
        dot.textContent = dayName;
        dot.title = date.toLocaleDateString('pt-PT');
        weeklyProgress.appendChild(dot);
    }
    
    if (typeof streakManager !== 'undefined') {
        streakManager.recordStudyDate();
    }
}
