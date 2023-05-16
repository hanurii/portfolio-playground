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

function fadeOut() {
    window.addEventListener('scroll', (event) => {
        const homeElement = document.querySelector('.home__container')
        const homeScrollHeight = homeElement.scrollHeight

        if (window.scrollY > 0 && window.scrollY < homeScrollHeight) {
            homeElement.style.opacity = 1-(window.scrollY/homeScrollHeight)
        }

        const aboutElement = document.querySelector('#about')
        const aboutScrollHeight = aboutElement.scrollHeight;
        let prevSum = homeScrollHeight;
        let sum = homeScrollHeight + aboutScrollHeight;

        if (window.scrollY > prevSum && window.scrollY < sum) {
            aboutElement.style.opacity = 1-((window.scrollY - prevSum)/aboutScrollHeight)
        }

        const skillsElement = document.querySelector('#skills .section__container')
        const skillsScrollHeight = skillsElement.scrollHeight;
        prevSum = homeScrollHeight + aboutScrollHeight;
        sum = homeScrollHeight + aboutScrollHeight + skillsScrollHeight;

        if (window.scrollY > prevSum && window.scrollY < sum) {
            skillsElement.style.opacity = 1-((window.scrollY - prevSum)/skillsScrollHeight)
        }

        const workElement = document.querySelector('#work .section__container')
        const workScrollHeight = workElement.scrollHeight;
        prevSum = homeScrollHeight + aboutScrollHeight + skillsScrollHeight;
        sum = homeScrollHeight + aboutScrollHeight + skillsScrollHeight + workScrollHeight;

        if (window.scrollY > prevSum && window.scrollY < sum) {
            workElement.style.opacity = 1-((window.scrollY - prevSum)/workScrollHeight)
        }

        const testElement = document.querySelector('#testimonials .section__container')
        const testScrollHeight = testElement.scrollHeight;
        prevSum = homeScrollHeight + aboutScrollHeight + skillsScrollHeight + workScrollHeight;
        sum = homeScrollHeight + aboutScrollHeight + skillsScrollHeight + workScrollHeight + testScrollHeight;

        if (window.scrollY > prevSum && window.scrollY < sum) {
            testElement.style.opacity = 1-((window.scrollY - prevSum)/testScrollHeight)
        }
    })
}

fixNavbar();
handleClickNavMenu();
handleClickContactMe();
fadeOut();