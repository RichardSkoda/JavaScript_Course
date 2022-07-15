const password = 815;

function checkCode() {
	const passwordEntered = document.getElementById('entered-password').value;

	if (password === parseInt(passwordEntered)) {
		document.getElementById('result').innerText = 'Muzete vstoupit';
	} else {
		document.getElementById('result').innerText = 'Nespravny kod. Zkuste to znovu!';
	}
};