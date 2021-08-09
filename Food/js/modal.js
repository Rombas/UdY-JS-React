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