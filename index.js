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

function goToTop() {
    const goToTopBtn = document.querySelector('.btn__go__top');

    document.addEventListener('scroll', () => {
        if (window.scrollY < 300) {
            goToTopBtn.style.visibility = 'hidden'
        } else {
            goToTopBtn.style.visibility = 'visible'
            goToTopBtn.style.opacity = 0 + (window.scrollY / 500)
        }
    })

    goToTopBtn.addEventListener('click', debounce(() => {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }, 200))
}

fixNavbar();
handleClickNavMenu();
handleClickContactMe();
fadeOut();
goToTop();

function debounce (handler, delay) {
    let debouncer = null
    return function () {
      // 이벤트가 발생하면 타임아웃을 초기화
        clearTimeout(debouncer)
      // 이후 다시 타임아웃을 걸어준다
        debouncer = setTimeout(() => {
            handler.apply(this, arguments)
        }, delay)
    }
}
