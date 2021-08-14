const createModalFunctionality = (openSelectors, modalForm, closeSelector, timerId = 0) => {
	const openBtns = document.querySelectorAll(openSelectors),
		  modal = document.querySelector(modalForm),
		  closeBtn = document.querySelector(closeSelector);
	
	openBtns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			clearInterval(timerId);
		});
	});
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.style.display = 'none';
			document.body.style.overflow = '';

		}
	});
	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	});

};

const modals = () => {
	const timerId = setTimeout(() => {
		document.querySelector('.popup').style.display = 'block';
		document.body.style.overflow = 'hidden';
	}, 60000);
	createModalFunctionality('.header_btn', '.popup_engineer', '.popup_engineer .popup_close', timerId);
	createModalFunctionality('.phone_link', '.popup', '.popup .popup_close', timerId);
	
};

export default modals;