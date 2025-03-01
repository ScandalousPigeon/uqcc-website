document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector(".banner");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
    if (window.innerWidth > 768) {
        banner.classList.remove("hide-banner");
        return;
    }

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        banner.classList.add("hide-banner");
    } else {
        banner.classList.remove("hide-banner");
    }

    lastScrollTop = Math.max(currentScroll, 0);
    });
});