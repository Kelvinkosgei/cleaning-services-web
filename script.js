const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navRight.classList.toggle("active");
});

navLinks.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navRight.classList.remove("active");
}));

// --- Testimonial Carousel ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');

        let currentIndex = 0;
        const slideWidth = slides[0].getBoundingClientRect().width;

        // Function to move to a specific slide
        const moveToSlide = (targetIndex) => {
            track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        };

        // Autoplay functionality
        const autoPlay = () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            moveToSlide(nextIndex);
        };

        let autoPlayInterval = setInterval(autoPlay, 5000); // Slide every 5 seconds

        // When next button is clicked
        nextButton.addEventListener('click', autoPlay);
    }
});