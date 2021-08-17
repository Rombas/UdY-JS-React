const tabs = (headerSelector, btnSelector, contentSelector, activeClass, display = 'block') => {
	const header = document.querySelector(headerSelector),
		  btns = document.querySelectorAll(btnSelector),
		  content = document.querySelectorAll(contentSelector);
	
	const hideContent = () => {
		content.forEach(item => {
			item.style.display = 'none';
		});
		btns.forEach(btn => {
			btn.classList.remove(activeClass);
		});
	};
	const showContent = (i = 0) => {
		content[i].style.display = display;
		btns[i].classList.add(activeClass);
	};
	hideContent();
	showContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		btns.forEach((btn, i) => {
			if (target.parentNode == btn){
				hideContent();
				showContent(i);
			}
		});
	});
};

export default tabs;