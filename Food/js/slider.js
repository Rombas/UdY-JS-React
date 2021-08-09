const sliderPrevBtn = document.querySelector('.offer__slider-prev'),
	  sliderNextBtn = document.querySelector('.offer__slider-next'),
	  currentPageNumberSelector = document.querySelector('#current'),
	  totalPagesNumberSelector = document.querySelector('#total'),
	  slides = document.querySelectorAll('.offer__slide'),
	  slider = document.querySelector('.offer__slider'),
	  totalPagesNumber = slides.length;
let currentPageNumber = 1;

slider.style.position = 'relative';
const carousel = document.createElement('ol');
const dots = [];
carousel.style.cssText = `
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	z - index: 15;
	display: flex;
	justify-content: center;
	margin-right: 15 % ;
	margin-left: 15 % ;
	list-style: none;
`;
slider.append(carousel);

for (let i = 1; i <= totalPagesNumber; i++) {
	const dot = document.createElement('li');
	dot.style.cssText = `
	box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;`;
	dot.setAttribute('data-id', i);
	dots.push(dot);
	carousel.append(dot);
}

dots.forEach(dot => {
	dot.addEventListener('click', () => {
		currentPageNumber = +dot.getAttribute('data-id');
		setSliderImageAndPageNumber(currentPageNumber);
	});
});

totalPagesNumberSelector.textContent = totalPagesNumber > 10 ? totalPagesNumber : `0${totalPagesNumber}`;
const setSliderImageAndPageNumber = (pageNumber = 1) => {
	currentPageNumberSelector.textContent = pageNumber > 10 ? pageNumber : `0${pageNumber}`;
	slides.forEach((slide, i) => {
		pageNumber === (i + 1) ? slide.classList.remove('hide') : slide.classList.add('hide');
	});
	dots.forEach(dot => dot.style.opacity = 0.5);
	dots[pageNumber-1].style.opacity = 1;
};
setSliderImageAndPageNumber();

sliderPrevBtn.addEventListener('click', () => {
	currentPageNumber === 1 ? null : setSliderImageAndPageNumber(--currentPageNumber);
});
sliderNextBtn.addEventListener('click',() => {
	currentPageNumber === totalPagesNumber ? null : setSliderImageAndPageNumber(++currentPageNumber);
	
});

