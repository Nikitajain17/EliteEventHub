const sliderTrack = document.querySelector('.slider-track');
const clone = sliderTrack.innerHTML;
const cloneCount = 60;
const imgCount = 6;
const timeStatic = 30;

// Clone the slides
for (let i = 0; i < cloneCount; i++) {
    sliderTrack.innerHTML += clone;
}

// Set width and animation duration
sliderTrack.style.width = `${cloneCount * imgCount * 100}%`;
sliderTrack.style.animationDuration = `${cloneCount * timeStatic}s`;

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("swiper-slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showPopup() {
    alert('🎉 Your response has been sent successfully!');
}

function toggleLike(element) {
    element.classList.toggle('active-heart');
}
