function fixNavbar() {
    const nav = document.querySelector('#navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > nav.offsetTop) {
            nav.classList.add("is_fixed");
            return
        }

        nav.classList.remove("is_fixed");
    })
}

fixNavbar()