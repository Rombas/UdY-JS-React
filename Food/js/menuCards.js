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

const fitnes = new MenuCard(
	'Фитнес',
	'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	229,
	'img/tabs/vegy.jpg',
	'vegy',
	'.menu__field'
).render();
const premium = new MenuCard(
	'Премиум',
	'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	550,
	'img/tabs/elite.jpg',
	'elite',
	'.menu__field'
).render();
const post = new MenuCard(
	'Постное',
	'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	430,
	'img/tabs/post.jpg',
	'post',
	'.menu__field'
).render();


