// Challenges Interaction Logic + Playground Integration

document.addEventListener('DOMContentLoaded', () => {
    initSolutionToggles();
    initPlaygroundButtons();
});

// === Toggle "Ver Solução" buttons ===
function initSolutionToggles() {
    document.querySelectorAll('.toggle-solution').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const isHidden = targetEl.classList.contains('hidden');
                targetEl.classList.toggle('hidden');
                btn.textContent = isHidden ? 'Ocultar Solução' : 'Ver Solução';
            }
        });
    });
}

// === Playground integration ===
function initPlaygroundButtons() {
    const cards = document.querySelectorAll('.challenge-card');
    if (cards.length === 0) return;

    // Detect current module from URL
    const pathParts = window.location.pathname.split('/');
    const fileName = pathParts[pathParts.length - 1]; // e.g. "modulo-3.html"
    const moduleId = fileName.replace('.html', ''); // e.g. "modulo-3"
    const course = pathParts[pathParts.length - 2]; // e.g. "curso-html5"

    cards.forEach((card, index) => {
        const challengeNum = index + 1;
        const challengeId = `${course}_${moduleId}_desafio-${challengeNum}`;

        // Extract challenge info
        const title = card.querySelector('h3')?.textContent || `Desafio ${challengeNum}`;
        const description = card.querySelector('p')?.textContent || '';

        // Extract solution code
        const solutionEl = card.querySelector('.solution-code, .solution-content');
        let solutionCode = '';
        if (solutionEl) {
            const codeEl = solutionEl.querySelector('code');
            if (codeEl) {
                solutionCode = codeEl.textContent;
            } else {
                solutionCode = solutionEl.textContent.replace(/^Solução:\s*/i, '').trim();
            }
        }

        // Determine starter code based on course and solution
        const starterCode = generateStarterCode(course, moduleId, challengeNum, description, solutionCode);

        // Store challenge data in localStorage
        const challengeData = {
            title: title,
            description: description,
            html: starterCode.html,
            css: starterCode.css,
            js: starterCode.js,
            solution: solutionCode,
            course: course
        };
        localStorage.setItem('challenge_' + challengeId, JSON.stringify(challengeData));

        // Add "Abrir no Playground" button
        const interactionDiv = card.querySelector('.challenge-interaction');
        if (interactionDiv) {
            const playgroundBtn = document.createElement('button');
            playgroundBtn.className = 'btn btn-primary';
            playgroundBtn.style.marginLeft = '0.5rem';
            playgroundBtn.innerHTML = '🎮 Abrir no Playground';
            playgroundBtn.addEventListener('click', () => {
                window.location.href = getPlaygroundPath() + '?challenge=' + encodeURIComponent(challengeId);
            });
            interactionDiv.appendChild(playgroundBtn);
        }
    });
}

function getPlaygroundPath() {
    // Calculate relative path to playground.html from current module page
    const depth = window.location.pathname.split('/').length - 1;
    // Module pages are at depth 2 from root (e.g., /curso-html5/modulo-3.html)
    return '../playground.html';
}

function generateStarterCode(course, moduleId, challengeNum, description, solution) {
    // Generate appropriate starter template based on course type
    let html = '';
    let css = '';
    let js = '';

    const courseShort = course.replace('curso-', '');

    if (courseShort === 'html5') {
        html = `<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio ${challengeNum}</title>
</head>
<body>
    <h1>Desafio ${challengeNum}</h1>
    <p>${escapeForTemplate(description)}</p>

    <!-- Escreve o teu código HTML aqui 👇 -->


</body>
</html>`;
        css = `body {
    font-family: Arial, sans-serif;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

h1 { color: #2563eb; }`;
    } else if (courseShort === 'css') {
        html = `<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio ${challengeNum}</title>
</head>
<body>
    <h1>Desafio ${challengeNum}</h1>
    <p>${escapeForTemplate(description)}</p>

    <!-- Adiciona elementos HTML aqui 👇 -->
    <div class="card">
        <h2>Meu Card</h2>
        <p>Conteúdo do card</p>
        <button>Ação</button>
    </div>

</body>
</html>`;
        css = `/* Escreve o teu CSS aqui 👇 */

body {
    font-family: Arial, sans-serif;
    padding: 2rem;
    background: #f0f0f0;
}

.card {
    /* Estiliza o card aqui */
}`;
    } else if (courseShort === 'javascript') {
        html = `<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio ${challengeNum}</title>
</head>
<body>
    <h1>Desafio ${challengeNum}</h1>
    <p>${escapeForTemplate(description)}</p>

    <!-- Adiciona elementos HTML aqui 👇 -->
    <button onclick="executar()">Executar</button>
    <div id="resultado"></div>

</body>
</html>`;
        css = `body {
    font-family: Arial, sans-serif;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

h1 { color: #2563eb; }

button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
}

button:hover { background: #1d4ed8; }`;
        js = `// Escreve o teu JavaScript aqui 👇

function executar() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>O teu código aqui!</p>';
    console.log('Executado!');
}`;
    } else if (courseShort === 'angular') {
        html = `<!-- Angular é um framework que precisa de CLI para funcionar -->
<!-- Este playground mostra o resultado HTML/CSS esperado -->

<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <title>Desafio Angular ${challengeNum}</title>
</head>
<body>
    <h1>Desafio ${challengeNum} — Angular</h1>
    <p>Nota: Angular precisa do Angular CLI. Este playground mostra o resultado visual esperado.</p>

    <!-- Simula o resultado do componente Angular -->
    <div class="component">
        <h2>Meu Componente</h2>
        <p>Resultado visual</p>
    </div>

</body>
</html>`;
        css = `.component {
    border: 2px solid #dd0031;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 0;
    background: #fff5f5;
}

h1 { color: #dd0031; }
h2 { color: #1976d2; }`;
    }

    return { html, css, js };
}

function escapeForTemplate(text) {
    return text.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}
