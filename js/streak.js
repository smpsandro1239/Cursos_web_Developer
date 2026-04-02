/**
 * Streak & Daily Progress System - Aprende Web
 */

class StreakManager {
    constructor() {
        this.streak = this.loadStreak();
        this.lastStudyDate = localStorage.getItem('last_study_date');
        this.checkStreak();
    }

    loadStreak() {
        return parseInt(localStorage.getItem('current_streak') || '0');
    }

    saveStreak() {
        localStorage.setItem('current_streak', this.streak.toString());
    }

    checkStreak() {
        const today = new Date().toDateString();
        
        if (this.lastStudyDate === today) {
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (this.lastStudyDate === yesterday.toDateString()) {
            this.streak++;
        } else if (this.lastStudyDate !== today) {
            this.streak = 1;
        }

        this.lastStudyDate = today;
        localStorage.setItem('last_study_date', today);
        this.saveStreak();
        this.checkStreakAchievements();
    }

    recordStudy() {
        this.checkStreak();
    }

    getStreak() {
        return this.streak;
    }

    getLongestStreak() {
        return parseInt(localStorage.getItem('longest_streak') || '0');
    }

    updateLongestStreak() {
        if (this.streak > this.getLongestStreak()) {
            localStorage.setItem('longest_streak', this.streak.toString());
        }
    }

    checkStreakAchievements() {
        const achievements = JSON.parse(localStorage.getItem('achievements_unlocked') || '{}');
        
        if (this.streak >= 3 && !achievements.streak_3) {
            achievements.streak_3 = { unlockedAt: new Date().toISOString() };
        }
        if (this.streak >= 7 && !achievements.streak_7) {
            achievements.streak_7 = { unlockedAt: new Date().toISOString() };
        }
        if (this.streak >= 30 && !achievements.streak_30) {
            achievements.streak_30 = { unlockedAt: new Date().toISOString() };
        }

        const hour = new Date().getHours();
        if (hour < 8 && !achievements.early_bird) {
            achievements.early_bird = { unlockedAt: new Date().toISOString() };
        }
        if (hour >= 22 && !achievements.night_owl) {
            achievements.night_owl = { unlockedAt: new Date().toISOString() };
        }

        localStorage.setItem('achievements_unlocked', JSON.stringify(achievements));
    }

    getWeeklyProgress() {
        const progress = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toDateString();
            const studyDates = JSON.parse(localStorage.getItem('study_dates') || '[]');
            progress.push({
                date: date.toLocaleDateString('pt-PT', { weekday: 'short' }),
                studied: studyDates.includes(dateStr)
            });
        }
        return progress;
    }

    recordStudyDate() {
        const today = new Date().toDateString();
        const studyDates = JSON.parse(localStorage.getItem('study_dates') || '[]');
        if (!studyDates.includes(today)) {
            studyDates.push(today);
            localStorage.setItem('study_dates', JSON.stringify(studyDates));
        }
    }
}

const streakManager = new StreakManager();

class DailyChallenge {
    constructor() {
        this.challenge = this.getTodayChallenge();
    }

    getTodayChallenge() {
        const savedDate = localStorage.getItem('daily_challenge_date');
        const today = new Date().toDateString();
        
        if (savedDate === today) {
            return JSON.parse(localStorage.getItem('daily_challenge') || 'null');
        }

        const challenges = [
            { type: 'quiz', title: 'Quiz Master', description: 'Completa 3 quizzes hoje', target: 3 },
            { type: 'module', title: 'Explorador', description: 'Completa 2 módulos hoje', target: 2 },
            { type: 'time', title: 'Maratonista', description: 'Estuda durante 30 minutos', target: 30 },
            { type: 'perfect', title: 'Perfeccionista', description: 'Tira 100% num quiz', target: 1 },
            { type: 'all_courses', title: 'Curioso', description: 'Estuda de cada curso pelo menos 1 módulo', target: 3 }
        ];

        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        const challenge = challenges[dayOfYear % challenges.length];

        localStorage.setItem('daily_challenge_date', today);
        localStorage.setItem('daily_challenge', JSON.stringify(challenge));
        localStorage.setItem('daily_challenge_progress', '0');

        return challenge;
    }

    updateProgress() {
        const current = parseInt(localStorage.getItem('daily_challenge_progress') || '0');
        const newProgress = current + 1;
        localStorage.setItem('daily_challenge_progress', newProgress.toString());
        return newProgress >= this.challenge.target;
    }

    getProgress() {
        return parseInt(localStorage.getItem('daily_challenge_progress') || '0');
    }

    isCompleted() {
        return localStorage.getItem('daily_challenge_completed') === new Date().toDateString();
    }

    complete() {
        localStorage.setItem('daily_challenge_completed', new Date().toDateString());
    }

    render() {
        if (!this.challenge) return '';

        const progress = this.getProgress();
        const percentage = Math.min(100, Math.round((progress / this.challenge.target) * 100));
        const completed = this.isCompleted();

        return `
            <div class="daily-challenge ${completed ? 'completed' : ''}">
                <div class="challenge-header">
                    <span class="challenge-icon">${completed ? '✅' : '🎯'}</span>
                    <div>
                        <h3>${this.challenge.title}</h3>
                        <p>${this.challenge.description}</p>
                    </div>
                </div>
                <div class="challenge-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span>${progress}/${this.challenge.target}</span>
                </div>
            </div>
        `;
    }
}

const dailyChallenge = new DailyChallenge();
