const actionEnd = ('2021-08-05T16:05');
// const getTime = (endTime) => {
// 	return Date.parse(endTime) - new Date();
// };
const getTimeInfo = (endTime) => {
	const total = Date.parse(endTime) - new Date();
	const days = Math.floor(total / (1000 * 60 * 60 * 24));
	const hours = Math.floor(total / (1000 * 60 * 60) % 24);
	const minutes = Math.floor(total / (1000 * 60) % 60);
	const seconds = Math.floor(total / 1000 % 60);
	return {
		total, days, hours, minutes, seconds
	};
};

const addZero = (num) => {
	if (num >= 0 && num <10){
		return `0${num}`;
	} else {
		return num;
	}
};

const setTimer = (selector, actionEnd) => {
	const setTime = () => {
		const time = getTimeInfo(actionEnd);
		console.log(time.total);
		if (time.total < 1000) {
			clearInterval(timerId);
		}
		days.innerHTML = addZero(time.days);
		hours.innerHTML = addZero(time.hours);
		minutes.innerHTML = addZero(time.minutes);
		seconds.innerHTML = addZero(time.seconds);
	};

	const pageTimer = document.querySelector(selector),
		  days = pageTimer.querySelector('#days'),
		  hours = pageTimer.querySelector('#hours'),
		  minutes = pageTimer.querySelector('#minutes'),
		  seconds = pageTimer.querySelector('#seconds'),
		  timerId = setInterval(setTime, 1000);

	setTime();
};

setTimer('.timer', actionEnd);