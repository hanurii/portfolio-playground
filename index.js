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
    const navbarMenus = document.querySelectorAll('.navbar__menu__item');

    navbarMenu.addEventListener('click', (event) => {
        const target = event.target;
        const link = target.dataset.link;

        if (!link) {
            return;
        }

        scrollIntoView(link);

        navbarMenus.forEach(menu => menu.classList.remove('active'));
        navbarMenus.forEach(menu => {
            if (menu.dataset.link === link) {
                menu.classList.add('active');
            }
        })
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

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    const tagName = e.target.tagName
    const categoryBtns = document.querySelectorAll('.category__btn');

    categoryBtns.forEach(btn => btn.classList.remove('active'));
    if (tagName === 'BUTTON') {
        e.target.classList.add('active');
    } else if (tagName === 'SPAN') {
        e.target.parentNode.classList.add('active');
    }

    if (filter === null) {
        return;
    }

    projectContainer.classList.add('anim-out');

    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
            }
        });

        projectContainer.classList.remove('anim-out');
    }, 300);
});