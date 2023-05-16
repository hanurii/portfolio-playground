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

        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({ behavior: "smooth" });
    })
}

fixNavbar();
handleClickNavMenu();