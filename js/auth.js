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

    getAvatarUrl(name) {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&bold=true`;
    }

    register(name, email, password, role = 'Student') {
        if (this.users.find(u => u.email === email)) {
            return { success: false, message: 'Email já registado.' };
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            role,
            avatar: this.getAvatarUrl(name),
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
            // Dispatch event for other scripts to update
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

    renderAuthUI() {
        const authContainers = document.querySelectorAll('#auth-status');
        authContainers.forEach(container => {
            if (this.currentUser) {
                container.innerHTML = `
                    <div class="user-profile-nav">
                        <img src="${this.currentUser.avatar}" alt="Avatar" class="user-avatar-sm">
                        <span class="user-name-nav">${this.currentUser.name.split(' ')[0]}</span>
                        <button onclick="auth.logout()" class="btn-logout" title="Sair">🚪</button>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <div class="auth-buttons">
                        <button onclick="auth.showModal('login')" class="btn-login-header">Entrar</button>
                    </div>
                `;
            }
        });
    }

    showModal(type) {
        this.closeModal(); // Clean up existing
        const modalHtml = `
            <div id="auth-modal" class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close" onclick="auth.closeModal()">×</button>
                    <h2 class="modal-title">${type === 'login' ? 'Bem-vindo de volta' : 'Cria a tua conta'}</h2>
                    <p class="modal-subtitle">${type === 'login' ? 'Entra para continuar a aprender.' : 'Junta-te à elite dos Web Developers.'}</p>
                    <form id="auth-form" onsubmit="auth.handleFormSubmit(event, '${type}')">
                        ${type === 'register' ? '<div class="form-group"><label>Nome</label><input type="text" id="auth-name" placeholder="Teu nome" required></div>' : ''}
                        <div class="form-group"><label>Email</label><input type="email" id="auth-email" placeholder="teu@email.com" required></div>
                        <div class="form-group"><label>Password</label><input type="password" id="auth-password" placeholder="••••••••" required></div>
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
                        ${type === 'login' ? 'Não tens conta? <a href="#" onclick="auth.showModal(\'register\')">Regista-te</a>' : 'Já tens conta? <a href="#" onclick="auth.showModal(\'login\')">Entra aqui</a>'}
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

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validatePassword(password) {
        return password.length >= 6;
    }

    validateName(name) {
        return name.trim().length >= 2;
    }

    showError(inputId, message) {
        const input = document.getElementById(inputId);
        if (input) {
            input.classList.add('error');
            input.setAttribute('aria-invalid', 'true');
            
            let errorEl = input.parentElement.querySelector('.field-error');
            if (!errorEl) {
                errorEl = document.createElement('span');
                errorEl.className = 'field-error';
                errorEl.setAttribute('role', 'alert');
                input.parentElement.appendChild(errorEl);
            }
            errorEl.textContent = message;
        }
    }

    clearErrors() {
        document.querySelectorAll('.field-error').forEach(el => el.remove());
        document.querySelectorAll('.error').forEach(el => {
            el.classList.remove('error');
            el.removeAttribute('aria-invalid');
        });
    }

    handleFormSubmit(e, type) {
        e.preventDefault();
        this.clearErrors();
        
        const email = document.getElementById('auth-email').value;
        const password = document.getElementById('auth-password').value;
        let hasErrors = false;

        if (!this.validateEmail(email)) {
            this.showError('auth-email', 'Por favor, insere um email válido.');
            hasErrors = true;
        }

        if (!this.validatePassword(password)) {
            this.showError('auth-password', 'A password deve ter pelo menos 6 caracteres.');
            hasErrors = true;
        }

        if (hasErrors) return;

        if (type === 'register') {
            const name = document.getElementById('auth-name').value;
            const role = document.getElementById('auth-role').value;
            
            if (!this.validateName(name)) {
                this.showError('auth-name', 'O nome deve ter pelo menos 2 caracteres.');
                return;
            }

            const res = this.register(name, email, password, role);
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
