document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const navbar = document.querySelector(".navbar");

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
    // const sidePanel = document.querySelector(".side-panel");
    // const sidePanelToggle = document.querySelector(".side-panel-toggle");

    // sidePanelToggle.addEventListener("click", function() {
    //     sidePanel.classList.toggle("open");
    // });
});