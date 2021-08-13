/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calculator.js":
/*!**************************!*\
  !*** ./js/calculator.js ***!
  \**************************/
/***/ ((module) => {

function calculator() {
	const female = document.querySelector('#female'),
		male = document.querySelector('#male'),
		ratioBtns = document.querySelectorAll('.calculating__choose_big div'),
		forms = document.querySelectorAll('.calculating__choose_medium input'),
		heightForm = document.querySelector('#height'),
		weightForm = document.querySelector('#weight'),
		ageForm = document.querySelector('#age'),
		totalCal = document.querySelector('.calculating__result span');
	let sex = 'female',
		ratio = 1.375,
		height,
		weight,
		age;

	const calculatingTotalCCal = () => {
		if (!sex, !ratio, !height, !weight, !age) {
			totalCal.textContent = '____';
			return;
		}
		if (sex === 'male') {
			totalCal.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		} else {
			totalCal.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		}
	};
	calculatingTotalCCal();

	// const setStaticInformation = (selector, activeClass) => {
	// 	const btnClicked = document.querySelector(selector);

	// };
	female.addEventListener('click', () => {
		sex = 'female';
		male.classList.remove('calculating__choose-item_active');
		female.classList.add('calculating__choose-item_active');
		calculatingTotalCCal();
	});
	male.addEventListener('click', () => {
		sex = 'male';
		female.classList.remove('calculating__choose-item_active');
		male.classList.add('calculating__choose-item_active');
		calculatingTotalCCal();
	});

	ratioBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			ratioBtns.forEach(btn => {
				btn.classList.remove('calculating__choose-item_active');
			});
			btn.classList.add('calculating__choose-item_active');
			ratio = btn.getAttribute('data-ratio');
			calculatingTotalCCal();
		});
	});


	forms.forEach(form => {
		form.addEventListener('input', () => {
			if (form.value.match(/\D/g)) {
				form.style.border = '2px solid red';
			} else {
				form.style.border = 'none';
			}
			switch (form.getAttribute('id')) {
				case 'height':
					height = form.value;
					break;
				case 'weight':
					weight = form.value;
					break;
				case 'age':
					age = form.value;
					break;
			}
			calculatingTotalCCal();
		});
	});

}

module.exports = calculator;

/***/ }),

/***/ "./js/menuCards.js":
/*!*************************!*\
  !*** ./js/menuCards.js ***!
  \*************************/
/***/ ((module) => {

function menuCards() {
	class MenuCard {
		constructor(name, text, price, imgSrc, alt, selector) {
			this.name = name;
			this.text = text;
			this.price = price;
			this.imgSrc = imgSrc;
			this.alt = alt;
			this.menuField = document.querySelector(selector);
		}
		render() {
			const card = document.createElement('div');
			card.classList.add('menu__item');
			card.innerHTML = `<img src=${this.imgSrc} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">Меню "${this.name}"</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
			this.menuField.firstElementChild.append(card);
		}
	}

	const getData = async (url) => {
		const data = await fetch(url);
		return await data.json();
	}

	getData('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({
				img,
				altimg,
				title,
				descr,
				price
			}) => {
				new MenuCard(title, descr, price, img, altimg, '.menu__field').render();
			});
		});
}

module.exports = menuCards;

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((module) => {

function modal() {
	const modalButtons = document.querySelectorAll('[data-modal]');
	const modalScreen = document.querySelector('.modal');
	const modalCloseBtn = document.querySelector('.modal__close');
	const callMeForms = document.querySelectorAll('form');

	const modalClose = () => {
		modalScreen.classList.toggle('show');
		document.body.style.overflow = '';
	};
	const modalOpen = () => {
		modalScreen.classList.toggle('show');
		document.body.style.overflow = 'hidden';
		clearInterval(modalOpenTimerId);
	};
	const scrollModalOpen = () => {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			modalOpen();
			window.removeEventListener('scroll', scrollModalOpen);
		}
	};

	modalButtons.forEach(btn => {
		btn.addEventListener('click', modalOpen);
	});

	modalCloseBtn.addEventListener('click', modalClose);

	document.addEventListener("keydown", (e) => {
		if (e.code === 'Escape') {
			modalClose();
		}
	});

	modalScreen.addEventListener('click', (e) => {
		if (e.target === modalScreen) {
			modalClose();
		}
	});

	window.addEventListener('scroll', scrollModalOpen);

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});
		return await res.json();
	};

	callMeForms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(form);
			const data = JSON.stringify(Object.fromEntries(formData.entries()));
			postData('http://localhost:3000/requests', data)
				.then(data => console.log(data))
				.catch(() => {
					form.innerHTML = `<div class="modal__close">&times;</div>
                    <div class="modal__title">Ошибка!</div>`;
				})
				.finally(() => {

				});

			form.innerHTML = `<div class="modal__close">&times;</div>
                    <div class="modal__title">Спасибо!</div>`;
			document.querySelector('.modal__close').addEventListener('click', modalClose);
		});

	});



	// const modalOpenTimerId = setTimeout(modalOpen, 5000);
}

module.exports = modal;

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((module) => {

function slider() {
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
		dots[pageNumber - 1].style.opacity = 1;
	};
	setSliderImageAndPageNumber();

	sliderPrevBtn.addEventListener('click', () => {
		currentPageNumber === 1 ? null : setSliderImageAndPageNumber(--currentPageNumber);
	});
	sliderNextBtn.addEventListener('click', () => {
		currentPageNumber === totalPagesNumber ? null : setSliderImageAndPageNumber(++currentPageNumber);

	});

}

module.exports = slider;


/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/***/ ((module) => {

function tabs() {
	const tabContent = document.querySelectorAll('.tabcontent');
	const tabHeaderItems = document.querySelectorAll('.tabheader__item');
	const tabHeaderItem = document.querySelector('.tabheader__items');

	const hideTabContent = () => {
		tabContent.forEach(tab => {
			tab.classList.add('hide');
			tab.classList.remove('show');
		});
		tabHeaderItems.forEach(tab => {
			tab.classList.remove('tabheader__item_active');
		});
	};

	const showChoosenTabContent = (i = 0) => {
		tabContent[i].classList.remove('hide');
		tabContent[i].classList.add('show');
		tabHeaderItems[i].classList.add('tabheader__item_active');
	};

	hideTabContent();
	showChoosenTabContent();
	tabHeaderItem.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.className == 'tabheader__item') {
			tabHeaderItems.forEach((tab, i) => {
				if (tab == target) {
					hideTabContent();
					showChoosenTabContent(i);
				}
			});
		}
	});
}

module.exports = tabs;

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((module) => {

function timer() {
	const actionEnd = ('2021-08-10T16:05');
	// const getTime = (endTime) => {
	// 	return Date.parse(endTime) - new Date();
	// };
	const getTimeInfo = (endTime) => {
		const total = Date.parse(endTime) - new Date();
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const hours = Math.floor(total / (1000 * 60 * 60) % 24);
		const minutes = Math.floor(total / (1000 * 60) % 60);
		const seconds = Math.floor(total / 1000 % 60);
		return {
			total,
			days,
			hours,
			minutes,
			seconds
		};
	};

	const addZero = (num) => {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	};

	const setTimer = (selector, actionEnd) => {
		const setTime = () => {
			const time = getTimeInfo(actionEnd);
			if (time.total < 1000) {
				clearInterval(timerId);
			}
			days.innerHTML = addZero(time.days);
			hours.innerHTML = addZero(time.hours);
			minutes.innerHTML = addZero(time.minutes);
			seconds.innerHTML = addZero(time.seconds);
		};

		const pageTimer = document.querySelector(selector),
			days = pageTimer.querySelector('#days'),
			hours = pageTimer.querySelector('#hours'),
			minutes = pageTimer.querySelector('#minutes'),
			seconds = pageTimer.querySelector('#seconds'),
			timerId = setInterval(setTime, 1000);

		setTime();
	};

	setTimer('.timer', actionEnd);
}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
const calculator = __webpack_require__(/*! ./calculator */ "./js/calculator.js"),
	  menuCards = __webpack_require__(/*! ./menuCards */ "./js/menuCards.js"),
	  modal = __webpack_require__(/*! ./modal */ "./js/modal.js"),
	  slider = __webpack_require__(/*! ./slider */ "./js/slider.js"),
	  tabs = __webpack_require__(/*! ./tabs */ "./js/tabs.js"),
	  timer = __webpack_require__(/*! ./timer */ "./js/timer.js");

calculator();
menuCards();
modal();
slider();
tabs();
timer();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map