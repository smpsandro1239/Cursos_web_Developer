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
