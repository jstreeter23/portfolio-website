
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}


updateSlidePosition();