window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menuItems = document.querySelectorAll('.menu-item a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#ffd700';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = 'white';
    });
});
