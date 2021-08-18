const imageViewerModal = () => {
	const modal = document.createElement('div'),
		  image = document.createElement('img'),
		  clickArea = document.querySelector('.works');
	
	modal.classList.add('popup');
	modal.style.justifyContent = 'center';
	modal.style.alignItems = 'center';
	modal.appendChild(image);
	clickArea.appendChild(modal);

	clickArea.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target && target.classList.contains('preview')){
			modal.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			image.setAttribute('src', path);
			document.body.style.overflow = 'hidden';
		}
		if (target && target.matches('div.popup')){
			modal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});


};

export default imageViewerModal;