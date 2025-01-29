import '../scss/main.scss';

const images = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const totalImages = images.children.length;
let index = 0;
const intervalTime = 3000;
let interval;

//function to show the current image
function showImage() {
	images.style.transform = `translateX(${-index * 300}px)`;
}

//function to goto the next image
function nextImage() {
	index = (index + 1) % totalImages;
	showImage();
}

nextBtn.addEventListener('click', () => {
	nextImage();
	resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
	index = (index - 1 + totalImages) % totalImages;
	showImage();
	resetAutoPlay();
});

//function to start autoplay
function startAutoPlay() {
	interval = setInterval(nextImage, intervalTime);
}

function resetAutoPlay() {
	clearInterval(interval);
	startAutoPlay(); //restart autoplay
}

//start the autoplay when the page loads
startAutoPlay();
