class MenuCard {
	constructor(name, text, price, imgSrc, alt, selector) {
		this.name = name;
		this.text = text;
		this.price = price;
		this.imgSrc = imgSrc;
		this.alt = alt;
		this.menuField = document.querySelector(selector);
	}
	render() {
		const card = document.createElement('div');
		card.classList.add('menu__item');
		card.innerHTML = `<img src=${this.imgSrc} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">Меню "${this.name}"</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
		this.menuField.firstElementChild.append(card);
	}
}

const getData = async (url) => {
	const data = await fetch(url);
	return await data.json();
}

getData('http://localhost:3000/menu')
	.then(data => {
		data.forEach(({img, altimg, title, descr, price}) => {
			new MenuCard(title, descr, price, img, altimg, '.menu__field').render();
		});
	});