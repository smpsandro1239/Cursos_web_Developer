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
    }

    register(name, email, password, role = 'Student') {
        if (this.users.find(u => u.email === email)) {
            return { success: false, message: 'Email já registado.' };
        }

        const newUser = { id: Date.now(), name, email, password, role, joinedAt: new Date() };
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
            return { success: true, message: 'Login efetuado!' };
        }
        return { success: false, message: 'Email ou password incorretos.' };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        location.reload();
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    renderAuthUI() {
        const authContainer = document.getElementById('auth-status');
        if (!authContainer) return;

        if (this.currentUser) {
            authContainer.innerHTML = `
                <div class="user-profile-nav">
                    <span>Olá, <strong>${this.currentUser.name}</strong> (${this.currentUser.role})</span>
                    <button onclick="auth.logout()" class="btn-logout">Sair</button>
                </div>
            `;
        } else {
            authContainer.innerHTML = `
                <button onclick="auth.showModal('login')" class="btn-login">Entrar</button>
                <button onclick="auth.showModal('register')" class="btn-register">Registar</button>
            `;
        }
    }

    showModal(type) {
        const modalHtml = `
            <div id="auth-modal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" onclick="auth.closeModal()">×</button>
                    <h2>${type === 'login' ? 'Entrar' : 'Criar Conta'}</h2>
                    <form id="auth-form" onsubmit="auth.handleFormSubmit(event, '${type}')">
                        ${type === 'register' ? '<input type="text" id="auth-name" placeholder="Nome Completo" required>' : ''}
                        <input type="email" id="auth-email" placeholder="Email" required>
                        <input type="password" id="auth-password" placeholder="Password" required>
                        ${type === 'register' ? `
                            <select id="auth-role">
                                <option value="Student">Estudante</option>
                                <option value="Teacher">Professor</option>
                            </select>
                        ` : ''}
                        <button type="submit" class="btn btn-primary">${type === 'login' ? 'Entrar' : 'Registar'}</button>
                    </form>
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
            const res = this.register(name, email, password, role);
            alert(res.message);
            if (res.success) this.login(email, password);
        } else {
            const res = this.login(email, password);
            if (res.success) {
                this.closeModal();
            } else {
                alert(res.message);
            }
        }
    }
}

const auth = new AuthSystem();
