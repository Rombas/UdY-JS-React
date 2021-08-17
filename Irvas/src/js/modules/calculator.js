const calculator = () => {
	const calcBtns = document.querySelectorAll('.glazing_price_btn'),
		  popupCalc = document.querySelector('.popup_calc'),
		  popupCalcProfile = document.querySelector('.popup_calc_profile'),
		  popupCalcEnd = document.querySelector('.popup_calc_end'),
		  nextBtnToProfile = popupCalc.querySelector('.button'),
		  nextBtnToEnd = popupCalcProfile.querySelector('.button'),
		  balconIcons = document.querySelectorAll('.balcon_icons span' ),
		  balconBigImg = document.querySelectorAll('.big_img img'),

		  checkboxCold = document.querySelector('#cold'),
		  checkboxWarm = document.querySelector('#warm'),
		  data = {};


	// calcBtns.forEach(btn => {
	// 	btn.addEventListener('click', () => {
	// 		popupCalc.style.display = 'block';
	// 	});
	// });
	nextBtnToProfile.addEventListener('click', () => {
		data.width = popupCalc.querySelector('#width').value;
		data.height = popupCalc.querySelector('#height').value;
		// popupCalc.style.display = 'none';
		// popupCalcProfile.style.display = 'block';
	});
	nextBtnToEnd.addEventListener('click', () => {
		data.viewType = popupCalcProfile.querySelector('#view_type').value;
		data.warm = checkboxWarm.value;
		data.cold = checkboxCold.value;
		// popupCalcProfile.style.display = 'none';
		// popupCalcEnd.style.display = 'block';
	});

	
	
	// balconIcons.forEach((icon, i) => {
	// 	icon.addEventListener('click', () => {
	// 		balconBigImg.forEach(img => {
	// 			img.style.display = 'none';
	// 		});
	// 		balconBigImg[i].style.display = 'inline';

	// 		balconIcons.forEach(icon => {
	// 			icon.classList.remove('do_image_more');
	// 		});
	// 		icon.classList.add('do_image_more');
	// 	});
	// });

	//add listeners for all close buttons;
	// const closeBtnListener = (selector) => {
	// 	const closeBtn = selector.querySelector('button');
	// 	closeBtn.addEventListener('click', () => {
	// 		selector.style.display = 'none';
	// 	});
	// };

	// closeBtnListener(popupCalc);
	// closeBtnListener(popupCalcProfile);
	// closeBtnListener(popupCalcEnd);
};

export default calculator;