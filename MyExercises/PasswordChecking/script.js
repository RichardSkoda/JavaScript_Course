const password = 815;

const accesPass = document.createElement('div');
accesPass.innerText = 'ACCES PASSED';
accesPass.style = 'font-size: 25px; color: white;';

const accesDenied = document.createElement('div');
accesDenied.innerText = 'ACCES DENIED';
accesDenied.style = 'font-size: 25px; color: white;';

function checkCode() {
	const passwordEntered = document.getElementById('entered-password').value;
	// I have to create DIV in HTML code and then create DIV denied or pass to parent DIV. Then line below should erase DIV added bz button.
	const result = document.getElementById('result');
	result.innerHTML = '';

	if (password === parseInt(passwordEntered)) {
		result.style = 'display: flex; width: 254px; height: 60px; background-color: green; justify-content: center; align-items: center; border-radius: 5px; margin-left: 89px;'
		result.appendChild(accesPass);
	} else {
		result.style = 'display: flex; width: 254px; height: 60px; background-color: red; justify-content: center; align-items: center; border-radius: 5px; margin-left: 89px;'
		result.appendChild(accesDenied);
	}
};

// create Acces Denied or Pass element
