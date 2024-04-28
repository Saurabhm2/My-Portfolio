let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    if (navbar) {
        navbar.classList.toggle('active');
    }
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let fromTop = window.scrollY;

    sections.forEach(sec => {
        let secTop = sec.offsetTop - 150;
        let secHeight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (fromTop >= secTop && fromTop < secTop + secHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', fromTop > 100);
    }
};
