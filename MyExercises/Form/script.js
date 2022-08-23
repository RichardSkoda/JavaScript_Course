const form = document.querySelector('.form');
const formData = document.querySelector('.form-data');

let data = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let name = event.target.elements.FirstName.value;
  let surname = event.target.elements.LastName.value;
  let email = event.target.elements.email.value;

  data.push({
    name: name,
    lastName: surname,
    email: email
  });

  formData.innerHTML = '';

  data.forEach(function (person) {
    const personDiv = document.createElement('div');
    personDiv.style = 'margin-bottom: 25px'
    for (key in person) {
      const paragraph = document.createElement('p');
      if (key === 'name') {
        paragraph.textContent = `First name:\t${person[key]}`;  // how to insert tab instead of space???
      } else if (key === 'lastName') {
        paragraph.textContent = `Last name:\t${person[key]}`;
      } else {
        paragraph.textContent = `E-mail:\t${person[key]}`;
      }
      paragraph.style = 'margin-top: 3px; margin-bottom: 3px'
      personDiv.appendChild(paragraph);
    };
    formData.appendChild(personDiv);
  });

  event.target.elements.FirstName.value = '';
  event.target.elements.LastName.value = '';
  event.target.elements.email.value = '';
});

