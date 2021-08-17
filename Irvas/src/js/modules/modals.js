const createModalFunctionality = (openSelectors, modalForm, closeSelector, timerId = 0, canOverlayClose = true) => {
	const openBtns = document.querySelectorAll(openSelectors),
		modal = document.querySelector(modalForm),
		closeBtn = document.querySelector(closeSelector),
		modalWindows = document.querySelectorAll('[data-modal]');

	openBtns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			modalWindows.forEach(window => {
				window.style.display = 'none';
			});
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			clearInterval(timerId);
		});
	});
	modal.addEventListener('click', (e) => {
		if (e.target === modal && canOverlayClose) {
			modal.style.display = 'none';
			document.body.style.overflow = '';

		}
	});
	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.style.overflow = '';
		modalWindows.forEach(window => {
			window.style.display = 'none';
		});
	});

};

const modals = () => {
	const timerId = setTimeout(() => {
		document.querySelector('.popup').style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, 60000);
	createModalFunctionality('.header_btn', '.popup_engineer', '.popup_engineer .popup_close', timerId);
	createModalFunctionality('.phone_link', '.popup', '.popup .popup_close', timerId);
	createModalFunctionality('.glazing_price_btn', '.popup_calc', '.popup_calc .popup_calc_close', timerId);
	

};

export const synteticValidationCalc = (state) => {
		if (state.FORM && state.WIDTH && state.HEIGHT) {
			createModalFunctionality('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', 0, false);
		}
	};

export const synteticValidationEnd = (state) => {
	if (state.TYPE && state.WOC) {
		createModalFunctionality('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', 0, false);
	}
};

export default modals;