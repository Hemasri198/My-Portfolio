/*========================================================= toggle icon navbar ===============================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*========================================================= scroll section link ===============================================*/
let sections = document.querySelectorAll('section'); // Select all sections
let navLinks = document.querySelectorAll('header nav a'); // Select all nav links

window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // The offset from the top of the page (for better detection)
        let height = sec.offsetHeight; // The height of the section
        let id = sec.getAttribute('id'); // The ID of the section
        
        if (top >= offset && top < offset + height) {
            // When the page is within the section, highlight the respective navigation link
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove the active class from all links
            });
            // Add the active class to the current link
            document.querySelector('header nav a[href*=' + id  + ']').classList.add('active');
        }
    });

    /*========================================================= Sticky navbar ===============================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================================================= remove toggle icon and navbar ===============================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*========================================================= Scroll reveal ===============================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*========================================================= typed js ===============================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer', 'Data Analytics', 'UI/UX Beginner'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
