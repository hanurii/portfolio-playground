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

// Handle scrolling when tapping on the navbar menu
function handleClickNavMenu() {
    const navbarMenu = document.querySelector('.navbar__menu');
    navbarMenu.addEventListener('click', (event) => {
        const target = event.target;
        const link = target.dataset.link;

        if (!link) {
            return;
        }

        scrollIntoView(link);
    })
}

// Handle click on "contact me" button on home
function handleClickContactMe() {
    const contactMe = document.querySelector('.home__contact');
    contactMe.addEventListener('click', () => {
        scrollIntoView('#contact');
    })
}

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Make home slowly fade to transparent as the window scrolls down
function fadeOut() {
    window.addEventListener('scroll', (event) => {
        const home = document.querySelector('.home__container');
        const homeHeight = home.getBoundingClientRect().height;
        document.addEventListener('scroll', () => {
            home.style.opacity = 1 - window.scrollY / homeHeight;
        })
    })
}

// Show "arrow up" button when scrolling down
function showAndHideArrowUpButton() {
    document.addEventListener('scroll', () => {
        const arrowUp = document.querySelector('.arrow-up');
        const home = document.querySelector('.home__container')
        const homeHeight = home.getBoundingClientRect().height;
        
        if (window.scrollY > homeHeight / 2) {
            arrowUp.classList.add('visible');
        } else {
            arrowUp.classList.remove('visible');
        }
    })
}

// Handle click on the "arrow up" button
function handleClickMoveTop() {
    const arrowUp = document.querySelector('.arrow-up');
    arrowUp.addEventListener('click', () => {
        scrollIntoView('#home');
    })
}

fixNavbar();
handleClickNavMenu();
handleClickContactMe();
fadeOut();
showAndHideArrowUpButton();
handleClickMoveTop();