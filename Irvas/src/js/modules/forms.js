import numberValidator from './numberValidator';

const forms = (formsSelector, state) => {
	const formsArray = document.querySelectorAll(formsSelector);
	const status = document.createElement('div');
	formsArray.forEach(form => {
		numberValidator('[name="user_phone"]');
		form.addEventListener('submit', (e) => {
			e.preventDefault();
				const formData = new FormData(form);
				if (form.getAttribute('data-form') === 'end'){
					for (let key in state) {
						formData.append(key, state[key]);
					}
				}
				const data = JSON.stringify(Object.fromEntries(formData.entries()));
				status.innerHTML = 'Sending';
				form.appendChild(status);
				// postData('http://localhost:3000/requests', data)
				postData('assets/server.php', data)
				.then(res => {
					status.innerHTML = 'Done';
					console.log(res);
				})
				.catch(status.innerHTML = 'Some error')
				.finally(() => {
					setTimeout(() => status.remove(), 5000);
					});
			
		});
	});
	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});
		return await res.text();
	};
};


export default forms;