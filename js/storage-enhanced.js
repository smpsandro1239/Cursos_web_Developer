/**
 * Enhanced Storage System with IndexedDB
 * Enhanced storage system for Aprende Web application
 */

class EnhancedStorage {
    constructor() {
        this.dbName = 'AprendeWebDB';
        this.dbVersion = 1;
        this.db = null;
    }
    
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.target.result;
                resolve();
            };
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('progress')) {
                    db.createObjectStore('progress', { keyPath: 'userId' });
                }
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { keyPath: 'email' });
                }
            };
        });
    }
    
    async saveProgress(userId, data) {
        const transaction = this.db.transaction(['progress'], 'readwrite');
        const store = transaction.objectStore('progress');
        store.put({ userId, ...data, timestamp: Date.now() });
        return transaction.complete;
    }
    
    async getProgress(userId) {
        const transaction = this.db.transaction(['progress'], 'readonly');
        const store = transaction.objectStore('progress');
        return store.get(userId);
    }
    
    async saveUser(email, data) {
        const transaction = this.db.transaction(['users'], 'readwrite');
        const store = transaction.objectStore('users');
        store.put({ email, ...data, timestamp: Date.now() });
        return transaction.complete;
    }
    
    async getUser(email) {
        const transaction = this.db.transaction(['users'], 'readonly');
        const store = transaction.objectStore('users');
        return store.get(email);
    }
}

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedStorage;
} else {
    window.EnhancedStorage = EnhancedStorage;
}