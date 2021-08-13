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

export default tabs;