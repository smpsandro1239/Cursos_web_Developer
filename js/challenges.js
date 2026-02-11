// Challenges Interaction Logic

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-solution');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const targetEl = document.getElementById(targetId);

            if (targetEl) {
                const isHidden = targetEl.classList.contains('hidden');

                if (isHidden) {
                    targetEl.classList.remove('hidden');
                    btn.textContent = 'Ocultar Solução';
                } else {
                    targetEl.classList.add('hidden');
                    btn.textContent = 'Ver Solução';
                }
            }
        });
    });
});
