function fixNavbar() {
    const nav = document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;

    window.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            nav.classList.add("is_active");
            return
        }

        nav.classList.remove("is_active");
    })
}

function handleClickNavMenu() {
    const home = document.querySelector('#home')
    const about = document.querySelector('#about')
    const skills = document.querySelector('#skills')
    const work = document.querySelector('#work')
    const testimonials = document.querySelector('#testimonials')
    const contact = document.querySelector('#contact')
    const contactMe = document.querySelector('.home__contact');

    const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');

    navbarMenuItems.forEach(item => {
        item.addEventListener('click', () => {  
            navbarMenuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            })
            
            switch (item.textContent) {
                case 'Home':
                    item.classList.add('active');
                    home.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'About':
                    item.classList.add('active');
                    about.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Skills':
                    item.classList.add('active');
                    skills.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'My work':
                    item.classList.add('active');
                    work.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Testimonials':
                    item.classList.add('active');
                    testimonials.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Contact':
                    item.classList.add('active');
                    contact.scrollIntoView({ behavior: "smooth" });
                    break;
            }
        })
    })

    contactMe.addEventListener('click', () => {
        contact.scrollIntoView({ behavior: "smooth" });
    })
}

fixNavbar();
handleClickNavMenu();