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

callMeForms.forEach(form => {

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const object = {};
		formData.forEach(function (value, key) {
			object[key] = value;
		});
		form.innerHTML = `<div class="modal__close">&times;</div>
                    <div class="modal__title">Спасибо!</div>`;
		document.querySelector('.modal__close').addEventListener('click', modalClose);

		fetch('server.php', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(object)
		})
		.then(data => console.log(data))
		.catch(()=>{
			form.innerHTML = `<div class="modal__close">&times;</div>
                    <div class="modal__title">Ошибка!</div>`;
		})
		.finally(() => {
			
		});
	});

});



// const modalOpenTimerId = setTimeout(modalOpen, 5000);