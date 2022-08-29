const myForm = document.querySelector('#test-form');

if(localStorage.getItem('criminals') === null) {
  var myArray = []
} else {
  myArray = JSON.parse(localStorage.getItem('criminals'));
}


myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  myArray.push({
    id: '',
    firstName: event.target.elements.firstName.value,
    secondName: event.target.elements.secondName.value,
    crime: event.target.elements.crime.value,
  }) 

  myArrayJSON = JSON.stringify(myArray);
  localStorage.setItem('criminals', myArrayJSON);

  event.target.elements.firstName.value = '';
  event.target.elements.secondName.value = '';
  event.target.elements.crime.value = '';

});

const printCriminals = document.querySelector('.to-list');
const listOfCriminals = document.querySelector('#criminals-list')

printCriminals.addEventListener('click', function() {
  const myCriminalsLS = JSON.parse(localStorage.getItem('criminals'));

  listOfCriminals.innerHTML = ''

  if(myCriminalsLS === null) {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Database is empty.';
    paragraph.classList.add('paragraphs');
    listOfCriminals.appendChild(paragraph);
  } else {
    myCriminalsLS.forEach(function(oneCriminal) {

      const criminal = document.createElement('p');
      criminal.innerHTML = `
        First name: ${oneCriminal.firstName}<br>
        Second name: ${oneCriminal.secondName}<br>
        Crime: ${oneCriminal.crime}
      `;
      criminal.classList.add('paragraphs');
      listOfCriminals.appendChild(criminal);
    });
  };
});


const nameFilter = document.querySelector('#name-filter');
const filteredList = document.querySelector('.filtered')
const myCriminalsLS = JSON.parse(localStorage.getItem('criminals'));

nameFilter.addEventListener('input', function(event) {
  let filterText = event.target.value;

  filteredList.innerHTML = '';

  let ourResult = myCriminalsLS.filter(function(oneCriminal) {
    return oneCriminal.firstName.toLowerCase().includes(filterText.toLowerCase()) || oneCriminal.secondName.toLowerCase().includes(filterText.toLowerCase()) || oneCriminal.crime.toLowerCase().includes(filterText.toLowerCase())
  });

  ourResult.forEach(function(result) {
    const criminal = document.createElement('p');
    criminal.innerHTML = `
    First name: ${result.firstName}<br>
    Second name: ${result.secondName}<br>
    Crime: ${result.crime}`;
    criminal.classList.add('paragraphs')
    filteredList.appendChild(criminal)
  });
});