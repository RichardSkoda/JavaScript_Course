const password = 815;

function checkCode() {
	const passwordEntered = document.getElementById('entered-password').value;
	// I have to create DIV in HTML code and then create DIV denied or pass to parent DIV. Then line below should erase DIV added bz button.
	const result = document.getElementById('new-div-create')
	result.innerHTML = '';

	if (password === parseInt(passwordEntered)) {
		const accesPass = document.createElement('div');
		accesPass.innerText = 'Muzete vstoupit';
		result.appendChild(accesPass);
	} else {
		const accesDenied = document.createElement('div');
		accesDenied.innerText = 'Nespravny kod. Zkuste to znovu!';
		result.appendChild(accesDenied);
	}
};

// create Acces Denied or Pass element
