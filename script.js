
const buttons = document.querySelectorAll('.scroll-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const targetSection = document.getElementById(`section-${target}`);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
,
