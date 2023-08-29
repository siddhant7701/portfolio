document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const navbar = document.querySelector(".navbar");
    const mobileNav = document.querySelector('.mobile-nav');
    const toggleBtn = document.querySelector('.toggle_btn');

    backToTopBtn.style.display = "none";

    window.addEventListener("scroll", function() {
        if (window.scrollY > navbar.offsetHeight) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function(event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    toggleBtn.onclick = function() {
        mobileNav.classList.toggle('open');
        toggleBtn.classList.toggle('opened');
    };
    const icon = toggleBtn.querySelector('i');
    if (toggleBtn.classList.contains('opened')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
    // Close mobile navigation when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!mobileNav.contains(event.target) && !toggleBtn.contains(event.target)) {
            mobileNav.classList.remove('open');
            toggleBtn.classList.remove('opened');
        }
    });
});
