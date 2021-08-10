const female = document.querySelector('#female'),
      male = document.querySelector('#male'),
	  ratioBtns = document.querySelectorAll('.calculating__choose_big div'),
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
	if (!sex, !ratio, !height, !weight, !age){
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

heightForm.addEventListener('input', () => {
	height = heightForm.value;
	calculatingTotalCCal();
});
weightForm.addEventListener('input', () => {
	weight = weightForm.value;
	calculatingTotalCCal();
});
ageForm.addEventListener('input', () => {
	age = ageForm.value;
	calculatingTotalCCal();
});