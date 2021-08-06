const modalButtons = document.querySelectorAll('[data-modal]');
const modalScreen = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');

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

// const modalOpenTimerId = setTimeout(modalOpen, 5000);