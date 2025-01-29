import '../scss/main.scss';

const images = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;
const totalImages = images.children.length;

function showImage() {
	images.style.transform = `translateX(${-index * 300}px)`;

	console.log(images.style.transform); // Change 300 to the width of the image
}

nextBtn.addEventListener('click', () => {
	index = (index + 1) % totalImages;
	showImage();
});

prevBtn.addEventListener('click', () => {
	index = (index - 1 + totalImages) % totalImages;
	showImage();
});
