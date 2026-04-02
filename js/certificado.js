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
        canvas.width = 1200;
        canvas.height = 850;
        const ctx = canvas.getContext('2d');

        const courseColors = {
            'html5': { primary: '#e34f26', secondary: '#f16529' },
            'css': { primary: '#1572b6', secondary: '#33a9dc' },
            'js': { primary: '#f7df1e', secondary: '#d4b904' },
            'angular': { primary: '#dd0031', secondary: '#ff5e62' }
        };
        
        const colors = courseColors[courseName] || { primary: '#2563eb', secondary: '#3b82f6' };

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 8;
        ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
        
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 2;
        ctx.strokeRect(55, 55, canvas.width - 110, canvas.height - 110);

        ctx.fillStyle = colors.primary;
        ctx.font = 'bold 18px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('★ ★ ★', centerX, 140);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 52px Inter, sans-serif';
        ctx.fillText('CERTIFICADO', centerX, 210);
        
        ctx.fillStyle = colors.secondary;
        ctx.font = '20px Inter, sans-serif';
        ctx.fillText('DE CONCLUSÃO', centerX, 245);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '18px Inter, sans-serif';
        ctx.fillText('Certificamos que', centerX, 310);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 44px Inter, sans-serif';
        ctx.fillText(user.name.toUpperCase(), centerX, 380);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '18px Inter, sans-serif';
        ctx.fillText('completou com sucesso o curso de', centerX, 440);

        const courseDisplayName = {
            'html5': 'HTML5',
            'css': 'CSS3',
            'js': 'JavaScript',
            'angular': 'Angular'
        };
        
        ctx.fillStyle = colors.primary;
        ctx.font = 'bold 56px Inter, sans-serif';
        ctx.fillText(courseDisplayName[courseName] || courseName.toUpperCase(), centerX, 510);

        ctx.fillStyle = colors.secondary;
        ctx.font = 'italic 22px Inter, sans-serif';
        ctx.fillText('Do Zero ao Herói', centerX, 550);

        const date = new Date();
        const formattedDate = date.toLocaleDateString('pt-PT', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        ctx.fillStyle = '#64748b';
        ctx.font = '16px Inter, sans-serif';
        ctx.fillText(`Data de Emissão: ${formattedDate}`, centerX, 620);
        
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText(`ID: ${user.id}-${courseName}-${date.getTime()}`, centerX, 650);

        ctx.fillStyle = '#3b82f6';
        ctx.font = 'bold 18px Inter, sans-serif';
        ctx.fillText('🚀 Aprende Web', centerX, 720);
        
        ctx.fillStyle = '#64748b';
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText('www.aprendeweb.pt', centerX, 750);

        const link = document.createElement('a');
        link.download = `Certificado_${courseName}_${user.name.replace(/\s+/g, '_')}.png`;
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
