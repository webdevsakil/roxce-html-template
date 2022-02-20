//main nav

window.addEventListener("scroll", function () {
    const primaryNav = document.querySelector(".primary-nav");
    primaryNav.classList.toggle("sticky", window.scrollY > 0);
})

const targetModal = document.getElementById("targetModal");
targetModal.addEventListener("click", function () {
    const navigationModal = document.querySelector(".navigation-modal");
    navigationModal.style.display = "block"
    navigationModal.classList.add("righttoleft");
})
const modalContent = document.querySelector(".modalClose");
modalContent.addEventListener("click", function () {
    const navigationModal = document.querySelector(".navigation-modal");
    navigationModal.classList.add("left-to-right");
    navigationModal.style.display = "none";

})

// Gallary Slider
const slider = tns({
    container: '.slider1',
    controlsContainer: '.controls',
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false,
});
