/**
 * Progress & Persistence System - Aprende Web
 */

class ProgressManager {
    constructor() {
        this.userId = this.getCurrentUserId();
        this.progress = this.loadProgress();
        this.startTime = Date.now();
    }

    getCurrentUserId() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        return user ? user.id : 'guest';
    }

    loadProgress() {
        const allProgress = JSON.parse(localStorage.getItem('app_progress')) || {};
        return allProgress[this.userId] || {
            completedModules: [],
            quizScores: {},
            timeSpent: {},
            certificates: []
        };
    }

    saveProgress() {
        const allProgress = JSON.parse(localStorage.getItem('app_progress')) || {};
        allProgress[this.userId] = this.progress;
        localStorage.setItem('app_progress', JSON.stringify(allProgress));
    }

    markModuleCompleted(moduleId) {
        if (!this.progress.completedModules.includes(moduleId)) {
            this.progress.completedModules.push(moduleId);
            this.saveProgress();
            this.checkCertificates();
        }
    }

    saveQuizScore(moduleId, score, total) {
        this.progress.quizScores[moduleId] = { score, total, date: new Date() };
        this.saveProgress();
    }

    trackTime(moduleId) {
        const elapsed = Math.round((Date.now() - this.startTime) / 1000); // seconds
        this.progress.timeSpent[moduleId] = (this.progress.timeSpent[moduleId] || 0) + elapsed;
        this.startTime = Date.now();
        this.saveProgress();
    }

    checkCertificates() {
        // Logic to check if user deserves a certificate (e.g. 80% completion)
        const courses = ['html5', 'css', 'js', 'angular'];
        courses.forEach(course => {
            const completedInCourse = this.progress.completedModules.filter(m => m.startsWith(course)).length;
            // Assuming 6 modules for html5, 20 for others as per audit
            const totalModules = course === 'html5' ? 6 : 20;
            const percentage = (completedInCourse / totalModules) * 100;

            if (percentage >= 80 && !this.progress.certificates.includes(course)) {
                this.progress.certificates.push(course);
                this.saveProgress();
                console.log(`🚀 Parabéns! Ganhaste o certificado de ${course.toUpperCase()}!`);
            }
        });
    }

    getStats() {
        return {
            totalCompleted: this.progress.completedModules.length,
            certificates: this.progress.certificates,
            quizAverage: this.calculateQuizAverage()
        };
    }

    calculateQuizAverage() {
        const scores = Object.values(this.progress.quizScores);
        if (scores.length === 0) return 0;
        const sum = scores.reduce((acc, curr) => acc + (curr.score / curr.total), 0);
        return Math.round((sum / scores.length) * 100);
    }
}

const progressManager = new ProgressManager();

// Track time on module exit
window.addEventListener('beforeunload', () => {
    const path = window.location.pathname;
    if (path.includes('modulo-')) {
        const moduleId = path.split('/').pop().replace('.html', '');
        progressManager.trackTime(moduleId);
    }
});
