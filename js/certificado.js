/**
 * Certificate Generation System - Aprende Web
 */

class CertificateSystem {
    constructor() {
        this.templateUrl = '../images/certificado-template.png';
    }

    async generate(courseName) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            alert('Tens de estar ligado para gerar um certificado!');
            return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');

        // Draw Background
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Border
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 20;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Content
        ctx.fillStyle = '#1e293b';
        ctx.textAlign = 'center';

        ctx.font = 'bold 40px Inter, sans-serif';
        ctx.fillText('CERTIFICADO DE CONCLUSÃO', canvas.width/2, 100);

        ctx.font = '20px Inter, sans-serif';
        ctx.fillText('Certificamos que', canvas.width/2, 180);

        ctx.font = 'bold 35px Inter, serif';
        ctx.fillStyle = '#2563eb';
        ctx.fillText(user.name.toUpperCase(), canvas.width/2, 240);

        ctx.fillStyle = '#1e293b';
        ctx.font = '20px Inter, sans-serif';
        ctx.fillText('completou com sucesso o curso de', canvas.width/2, 300);

        ctx.font = 'bold 30px Inter, sans-serif';
        ctx.fillText(courseName.toUpperCase(), canvas.width/2, 350);

        ctx.font = '16px Inter, sans-serif';
        const date = new Date().toLocaleDateString('pt-PT');
        ctx.fillText(`Data de Emissão: ${date}`, canvas.width/2, 450);

        ctx.font = 'italic 16px Inter, sans-serif';
        ctx.fillText('Aprende Web - Do Zero ao Heroi', canvas.width/2, 520);

        // Image template if exists (mockup)
        /*
        const img = new Image();
        img.src = this.templateUrl;
        await img.decode();
        ctx.drawImage(img, 0, 0, 800, 600);
        // ... re-draw text on top
        */

        // Download
        const link = document.createElement('a');
        link.download = `Certificado_${courseName}_${user.name.replace(' ', '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    renderCertificateButtons() {
        const container = document.getElementById('certificates-grid');
        if (!container) return;

        const progress = JSON.parse(localStorage.getItem('app_progress')) || {};
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user || !progress[user.id]) {
            container.innerHTML = '<p>Completa os cursos para ganhares certificados!</p>';
            return;
        }

        const certs = progress[user.id].certificates || [];
        if (certs.length === 0) {
            container.innerHTML = '<p>Ainda não tens certificados disponíveis. Chega aos 80% de um curso!</p>';
            return;
        }

        container.innerHTML = certs.map(c => `
            <div class="cert-card">
                <h3>Curso de ${c.toUpperCase()}</h3>
                <button onclick="certificateSystem.generate('${c}')" class="btn btn-primary">Download PNG</button>
            </div>
        `).join('');
    }
}

const certificateSystem = new CertificateSystem();

document.addEventListener('DOMContentLoaded', () => {
    certificateSystem.renderCertificateButtons();
});
