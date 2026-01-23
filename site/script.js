// MENU HAMBURGER
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

// Abre e fecha menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// Fecha menu ao clicar em um link (UX melhor no mobile)
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuLinks.classList.remove('active');
    });
});

// Acessibilidade: indica se o menu está aberto
menuToggle.setAttribute('aria-expanded', 'false');

menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
