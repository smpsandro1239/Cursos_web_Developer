/**
 * Live Code Sandbox - Aprende Web
 */

class CodeSandbox {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.live-sandbox').forEach(el => {
            this.setupSandbox(el);
        });
    }

    setupSandbox(container) {
        const initialCode = container.dataset.initialCode || '<!-- Escreve o teu HTML aqui -->\n<h1>Olá Mundo</h1>';

        container.innerHTML = `
            <div class="sandbox-wrapper">
                <div class="sandbox-editor">
                    <div class="editor-header">💻 Editor HTML/CSS</div>
                    <textarea class="sandbox-input" spellcheck="false">${initialCode}</textarea>
                </div>
                <div class="sandbox-preview">
                    <div class="editor-header">👁️ Resultado</div>
                    <iframe class="sandbox-output"></iframe>
                </div>
            </div>
            <div class="sandbox-controls">
                <button class="btn btn-primary btn-sm btn-run">Executar Código 🚀</button>
                <button class="btn btn-secondary btn-sm btn-reset">Reset</button>
            </div>
        `;

        const input = container.querySelector('.sandbox-input');
        const output = container.querySelector('.sandbox-output');
        const runBtn = container.querySelector('.btn-run');
        const resetBtn = container.querySelector('.btn-reset');

        const updatePreview = () => {
            const code = input.value;
            const blob = new Blob([code], { type: 'text/html' });
            output.src = URL.createObjectURL(blob);
        };

        runBtn.addEventListener('click', updatePreview);
        resetBtn.addEventListener('click', () => {
            input.value = initialCode;
            updatePreview();
        });

        // Auto-run on load
        updatePreview();
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    window.sandbox = new CodeSandbox();
});
