let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

document.getElementById('prevbtn').addEventListener('click', () => {
    showSlide(--slideIndex);
});

document.getElementById('nextbtn').addEventListener('click', () => {
    showSlide(++slideIndex);
});

showSlide(slideIndex);
