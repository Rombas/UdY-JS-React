import { synteticValidationCalc, synteticValidationEnd } from './modals';
import numberValidator from './numberValidator';

const store = (state) => {
	const windowsForm = document.querySelectorAll('.balcon_icons_img '),
		  windowsHeight = document.querySelectorAll('#height'),
		  windowsWidth = document.querySelectorAll('#width'),
		  windowsType = document.querySelectorAll('#view_type'),
		  windowsWarmOrCold = document.querySelectorAll('.checkbox');
	
	numberValidator('#height');
	numberValidator('#width');

	const reducer = (action) => {
		action.windowAttr.forEach((attr, i) => {
			attr.addEventListener(action.event, () => {
				switch (action.type) {
					case 'FORM':
						state[action.type] = i;
						synteticValidationCalc(state);
						break;
					case 'HEIGHT':
						state[action.type] = attr.value;
						synteticValidationCalc(state);
						break;
					case 'WIDTH':
						state[action.type] = attr.value;
						synteticValidationCalc(state);
						break;
					case "TYPE":
						state[action.type] = attr.value;
						synteticValidationEnd(state);
						break;
					case "WOC":
						i === 0 ? state[action.type] = 'cold' : state[action.type] = 'warm';
						action.windowAttr.forEach((box, j) => {
							i === j ? box.checked = true : box.checked = false;  
						});
						synteticValidationEnd(state);
						break;
				}
			});
		});
	};

	reducer({
		type: 'FORM',
		windowAttr: windowsForm,
		event: 'click',
	});
	reducer({
		type: 'HEIGHT',
		windowAttr: windowsHeight,
		event: 'input',
	});
	reducer({
		type: 'WIDTH',
		windowAttr: windowsWidth,
		event: 'input',
	});
	reducer({
		type: 'TYPE',
		windowAttr: windowsType,
		event: 'change',
	});
	reducer({
		type: 'WOC',
		windowAttr: windowsWarmOrCold,
		event: 'input',
	});

};

export default store;