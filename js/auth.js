/**
 * Authentication System - Aprende Web
 */

class AuthSystem {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.init();
    }

    init() {
        this.renderAuthUI();
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('avatar-option')) {
                this.selectAvatar(e.target);
            }
        });
    }

    getAvatarUrl(name, seed = '') {
        // Use a consistent service for avatars
        return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed || name}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
    }

    register(name, email, password, role = 'Student', seed = '') {
        if (this.users.find(u => u.email === email)) {
            return { success: false, message: 'Email já registado.' };
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            role,
            avatar: this.getAvatarUrl(name, seed),
            joinedAt: new Date()
        };
        this.users.push(newUser);
        this.saveUsers();
        return { success: true, message: 'Registo efetuado com sucesso!' };
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.renderAuthUI();
            window.dispatchEvent(new Event('authChange'));
            return { success: true, message: 'Login efetuado!' };
        }
        return { success: false, message: 'Email ou password incorretos.' };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        window.dispatchEvent(new Event('authChange'));
        location.reload();
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    selectAvatar(element) {
        document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        this.selectedSeed = element.dataset.seed;
    }

    renderAuthUI() {
        const authContainers = document.querySelectorAll('#auth-status');
        authContainers.forEach(container => {
            if (this.currentUser) {
                container.innerHTML = `
                    <div class="user-profile-nav">
                        <div class="avatar-wrapper">
                            <img src="${this.currentUser.avatar}" alt="Avatar" class="user-avatar-sm">
                        </div>
                        <div class="user-info-nav">
                            <span class="user-name-nav">${this.currentUser.name}</span>
                            <span class="user-role-nav">${this.currentUser.role === 'Teacher' ? '👨‍🏫 Professor' : '🎓 Aluno'}</span>
                        </div>
                        <button onclick="auth.logout()" class="btn-logout-icon" title="Sair">🚪</button>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <div class="auth-buttons">
                        <button onclick="auth.showModal('login')" class="btn-login-header">Entrar</button>
                        <button onclick="auth.showModal('register')" class="btn-register-header">Registar</button>
                    </div>
                `;
            }
        });
    }

    showModal(type) {
        this.closeModal();
        this.selectedSeed = '';
        const modalHtml = `
            <div id="auth-modal" class="modal-overlay">
                <div class="modal-content animate-pop">
                    <button class="modal-close" onclick="auth.closeModal()">×</button>
                    <h2 class="modal-title">${type === 'login' ? 'Bem-vindo de volta' : 'Cria a tua conta'}</h2>
                    <form id="auth-form" onsubmit="auth.handleFormSubmit(event, '${type}')">
                        ${type === 'register' ? `
                            <div class="form-group">
                                <label>Nome Completo</label>
                                <input type="text" id="auth-name" placeholder="Teu nome" required>
                            </div>
                            <div class="form-group">
                                <label>Escolhe o teu Avatar</label>
                                <div class="avatar-selector">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="avatar-option" data-seed="Felix">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" class="avatar-option" data-seed="Aneka">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" class="avatar-option" data-seed="Jack">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna" class="avatar-option" data-seed="Luna">
                                </div>
                            </div>
                        ` : ''}
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="auth-email" placeholder="teu@email.com" required>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" id="auth-password" placeholder="••••••••" required>
                        </div>
                        ${type === 'register' ? `
                            <div class="form-group">
                                <label>Eu sou...</label>
                                <select id="auth-role">
                                    <option value="Student">Estudante</option>
                                    <option value="Teacher">Professor</option>
                                </select>
                            </div>
                        ` : ''}
                        <button type="submit" class="btn btn-primary btn-full">${type === 'login' ? 'Entrar' : 'Começar Agora'}</button>
                    </form>
                    <p class="modal-footer-text">
                        ${type === 'login' ? 'Novo por aqui? <a href="#" onclick="auth.showModal(\'register\')">Cria uma conta</a>' : 'Já tens conta? <a href="#" onclick="auth.showModal(\'login\')">Faz login</a>'}
                    </p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    closeModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) modal.remove();
    }

    handleFormSubmit(e, type) {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;

        if (type === 'register') {
            const name = document.getElementById('auth-name').value;
            const role = document.getElementById('auth-role').value;
            const res = this.register(name, email, password, role, this.selectedSeed);
            if (res.success) {
                this.login(email, password);
                this.closeModal();
            } else {
                alert(res.message);
            }
        } else {
            const res = this.login(email, password);
            if (res.success) {
                this.closeModal();
                location.reload();
            } else {
                alert(res.message);
            }
        }
    }
}

const auth = new AuthSystem();
