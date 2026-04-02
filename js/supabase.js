/**
 * Supabase Integration - Aprende Web
 * Cloud sync for user progress and authentication
 */

class SupabaseClient {
    constructor() {
        this.url = 'https://your-project.supabase.co';
        this.anonKey = 'your-anon-key';
        this.headers = {
            'Content-Type': 'application/json',
            'apikey': this.anonKey
        };
    }

    async request(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.url}/rest/v1/${endpoint}`, {
                ...options,
                headers: {
                    ...this.headers,
                    ...options.headers
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Supabase error:', error);
            return null;
        }
    }

    async signUp(email, password, metadata = {}) {
        return await this.request('auth/v1/signup', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                data: metadata
            })
        });
    }

    async signIn(email, password) {
        return await this.request('auth/v1/token?grant_type=password', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    async getUserProgress(userId) {
        return await this.request(`user_progress?user_id=eq.${userId}`);
    }

    async saveUserProgress(userId, progressData) {
        return await this.request('user_progress', {
            method: 'POST',
            body: JSON.stringify({
                user_id: userId,
                ...progressData,
                updated_at: new Date().toISOString()
            })
        });
    }

    async updateUserProgress(userId, progressData) {
        return await this.request(`user_progress?user_id=eq.${userId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                ...progressData,
                updated_at: new Date().toISOString()
            })
        });
    }

    async syncProgress() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) return;

        const localProgress = localStorage.getItem('app_progress');
        if (localProgress) {
            await this.saveUserProgress(user.id, JSON.parse(localProgress));
        }
    }

    async downloadProgress() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) return null;

        const cloudProgress = await this.getUserProgress(user.id);
        return cloudProgress && cloudProgress.length > 0 ? cloudProgress[0] : null;
    }
}

const supabase = new SupabaseClient();

class CloudSyncManager {
    constructor() {
        this.lastSync = localStorage.getItem('last_sync') || null;
        this.syncInterval = 60000;
        this.enabled = false;
    }

    enable() {
        this.enabled = true;
        this.startAutoSync();
    }

    disable() {
        this.enabled = false;
    }

    async startAutoSync() {
        if (!this.enabled) return;

        setInterval(async () => {
            await this.sync();
        }, this.syncInterval);
    }

    async sync() {
        const cloudData = await supabase.downloadProgress();
        const localData = JSON.parse(localStorage.getItem('app_progress') || '{}');

        if (cloudData && cloudData.progress_data) {
            const cloudProgress = JSON.parse(cloudData.progress_data);
            
            const merged = this.mergeProgress(localData, cloudProgress);
            localStorage.setItem('app_progress', JSON.stringify(merged));
            window.dispatchEvent(new Event('progressUpdate'));
        }

        await supabase.syncProgress();
        localStorage.setItem('last_sync', new Date().toISOString());
        this.lastSync = new Date();
    }

    mergeProgress(local, cloud) {
        const merged = { ...cloud };
        
        for (const userId in local) {
            if (!merged[userId]) {
                merged[userId] = local[userId];
            } else {
                const localTime = new Date(local[userId].lastActivity || 0);
                const cloudTime = new Date(merged[userId].lastActivity || 0);
                
                if (localTime > cloudTime) {
                    merged[userId] = local[userId];
                }
            }
        }
        
        return merged;
    }

    getLastSyncTime() {
        return this.lastSync ? new Date(this.lastSync) : null;
    }

    getTimeSinceSync() {
        if (!this.lastSync) return null;
        const diff = Date.now() - new Date(this.lastSync).getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'agora mesmo';
        if (mins < 60) return `${mins} minutos`;
        const hours = Math.floor(mins / 60);
        return `${hours} horas`;
    }
}

const cloudSync = new CloudSyncManager();
