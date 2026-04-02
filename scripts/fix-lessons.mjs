// scripts/fix-lessons.mjs
// Script de correção automatizada de módulos — Aprende Web
// Corrige: nav, contador, dark-mode.css, scripts JS

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BASE = join('Cursos_web_Developer');

const courses = [
  { dir: 'curso-html5', emoji: '🚀', name: 'HTML5', quiz: 'quiz-html.js' },
  { dir: 'curso-css', emoji: '🎨', name: 'CSS', quiz: 'quiz-css.js' },
  { dir: 'curso-javascript', emoji: '⚡', name: 'JavaScript', quiz: 'quiz-js.js' },
  { dir: 'curso-angular', emoji: '🅰️', name: 'Angular', quiz: 'quiz-angular.js' },
];

const NAV_BLOCK = `                <nav class="nav">
                    <button class="nav-toggle" aria-label="Abrir menu">☰</button>
                    <ul id="nav-menu" class="nav-menu">
                        <li><a href="../index.html">Início</a></li>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="../achievements.html">🏆 Conquistas</a></li>
                        <li><a href="../playground.html">🎮 Playground</a></li>
                    </ul>
                </nav>`;

const EXPECTED_SCRIPTS_TEMPLATE = [
  '<script src="../js/auth.js"></script>',
  '<script src="../js/progress.js"></script>',
  '<script src="../js/theme.js"></script>',
  '<script src="../js/QUIZ_FILE"></script>',
  '<script src="../js/quiz.js"></script>',
  '<script src="../js/challenges.js"></script>',
  '<script src="../js/certificado.js"></script>',
  '<script src="../js/streak.js"></script>',
  '<script src="../js/main.js"></script>',
];

let stats = {
  files: 0,
  navAdded: 0,
  counterFixed: 0,
  darkModeAdded: 0,
  scriptsFixed: 0,
  errors: [],
};

for (const course of courses) {
  const dirPath = join(BASE, course.dir);
  let files;
  try {
    files = readdirSync(dirPath).filter(f => f.match(/^modulo-\d+\.html$/));
  } catch (e) {
    stats.errors.push(`Erro ao ler diretório ${course.dir}: ${e.message}`);
    continue;
  }

  const expectedScripts = EXPECTED_SCRIPTS_TEMPLATE.map(s =>
    s.replace('QUIZ_FILE', course.quiz)
  );

  for (const file of files) {
    const filePath = join(dirPath, file);
    let content;
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch (e) {
      stats.errors.push(`Erro ao ler ${course.dir}/${file}: ${e.message}`);
      continue;
    }

    let modified = false;
    stats.files++;

    // 1. Adicionar <nav> se não existir
    if (!content.includes('<nav class="nav">')) {
      const logoPattern = /<a\s+href="[^"]*"\s+class="logo">[\s\S]*?<\/a>/;
      const logoMatch = content.match(logoPattern);
      if (logoMatch) {
        const logoEnd = content.indexOf(logoMatch[0]) + logoMatch[0].length;
        content = content.slice(0, logoEnd) + '\n' + NAV_BLOCK + content.slice(logoEnd);
        modified = true;
        stats.navAdded++;
        console.log(`  📍 ${course.dir}/${file}: nav adicionado`);
      } else {
        stats.errors.push(`${course.dir}/${file}: não encontrou <a class="logo"> para inserir nav`);
      }
    }

    // 2. Corrigir contador "de 20" → "de 21"
    if (content.includes('de 20</span>')) {
      content = content.replace(/de 20<\/span>/g, 'de 21</span>');
      modified = true;
      stats.counterFixed++;
      console.log(`  🔢 ${course.dir}/${file}: contador corrigido`);
    }

    // 3. Adicionar dark-mode.css se não existir
    if (!content.includes('dark-mode.css')) {
      const moduleCssLink = '<link rel="stylesheet" href="../css/module.css">';
      if (content.includes(moduleCssLink)) {
        content = content.replace(
          moduleCssLink,
          moduleCssLink + '\n    <link rel="stylesheet" href="../css/dark-mode.css">'
        );
        modified = true;
        stats.darkModeAdded++;
        console.log(`  🌙 ${course.dir}/${file}: dark-mode.css adicionado`);
      }
    }

    // 4. Verificar e corrigir scripts JS
    const missingScripts = expectedScripts.filter(s => !content.includes(s));
    if (missingScripts.length > 0) {
      // Encontrar o último </script> e substituir todos os scripts
      const scriptRegex = /\s*<script src="..\/js\/[^"]+"><\/script>\s*\n?/g;
      content = content.replace(scriptRegex, '\n');

      // Inserir os scripts corretos antes de </body>
      const scriptsBlock = expectedScripts.map(s => `    ${s}`).join('\n');
      content = content.replace(
        '</body>',
        `\n    ${scriptsBlock}\n</body>`
      );
      modified = true;
      stats.scriptsFixed++;
      console.log(`  📜 ${course.dir}/${file}: scripts corrigidos (${missingScripts.length} em falta)`);
    }

    if (modified) {
      try {
        writeFileSync(filePath, content, 'utf-8');
      } catch (e) {
        stats.errors.push(`Erro ao escrever ${course.dir}/${file}: ${e.message}`);
      }
    }
  }
}

console.log(`\n📊 Estatísticas:`);
console.log(`   Ficheiros processados: ${stats.files}`);
console.log(`   Nav adicionado: ${stats.navAdded}`);
console.log(`   Contador corrigido: ${stats.counterFixed}`);
console.log(`   dark-mode.css adicionado: ${stats.darkModeAdded}`);
console.log(`   Scripts corrigidos: ${stats.scriptsFixed}`);
if (stats.errors.length > 0) {
  console.log(`\n⚠️  Erros (${stats.errors.length}):`);
  stats.errors.forEach(e => console.log(`   - ${e}`));
} else {
  console.log(`\n✅ Sem erros!`);
}
