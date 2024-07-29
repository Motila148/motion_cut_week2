// script.js
let currentIndex = 0;

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const thumbnails = document.querySelectorAll('.thumbnail');
const captions = [
    "Caption for Image 1",
    "Caption for Image 2",
    "Caption for Image 3",
    "Caption for Image 4",
    "Caption for Image 5",
    "Caption for Image 6"
    // Add more captions as needed
];

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateSlider();
    });
});

function updateSlider() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    document.getElementById('caption-text').textContent = captions[currentIndex];
}

// Auto slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}, 5000); // Change image every 3 seconds

// Touch/Swipe Support
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (touchEndX > touchStartX) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    updateSlider();
}