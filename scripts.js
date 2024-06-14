document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.transform = `perspective(1000px) rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    });
});
