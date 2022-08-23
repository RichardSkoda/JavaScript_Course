let criminals = [{
  firstName: 'Trotl',
  lastName: 'Black',
  age: 29,
  licencePlate: '5L98052',
  city: 'Jablone nad Nisou',
  crime: 'murder'
}, {
  firstName: 'John',
  lastName: 'Doe',
  age: 45,
  licencePlate: '2C84522',
  city: 'Budvaiser',
  crime: 'bank robber'
}, {
  firstName: 'Jane',
  lastName: 'Cock',
  age: 33,
  licencePlate: '6A59541',
  city: 'Prague',
  crime: 'prostitution'
}, {
  firstName: 'Alah',
  lastName: 'Akbar',
  age: 150,
  licencePlate: 'xx5x',
  city: 'Shiskebab',
  crime: 'muslim'
}];

const spz = document.querySelector("#input-text");
let myDiv = document.querySelector('#criminal');

let filters = {
  searchText: ''
};

const renderCriminals = function(ourCriminals, tryToFind) {
  let arrayResult = ourCriminals.filter(function (oneSuspect) {
    return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase());
  });

  myDiv.innerHTML = '';

  arrayResult.forEach(function (oneSuspect) {
    const criminalDiv = document.createElement('div');
    for (let key in oneSuspect) {
      let paragraph = document.createElement('p');
      paragraph.textContent = `${key}: ${oneSuspect[key]}`;
      criminalDiv.appendChild(paragraph);
      myDiv.appendChild(criminalDiv);
      };
    const blank = document.createElement('br');
    myDiv.appendChild(blank)
  });

    
};

spz.addEventListener('input', function (event) {
  console.log(filters)
  filters.searchText = event.target.value;
  renderCriminals(criminals, filters);
});





