const forms = (formsSelector) => {
	const formsArray = document.querySelectorAll(formsSelector);
	const status = document.createElement('div');
	formsArray.forEach(form => {
		let valid = true;
		const phoneInput = form.querySelector('[name="user_phone"]');
		
		phoneInput.addEventListener('input', () => {
			if (/\D/.test(phoneInput.value)) {
				phoneInput.style.border = '2px red solid';
				valid = false;
			} else {
				phoneInput.style.border = '';
				valid = true;
			}
		});
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			if (valid){
				const formData = new FormData(form);
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
					
			}		
			
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