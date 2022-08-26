const myForm = document.querySelector('#my-form');
const namesCont = document.querySelector('#names-container')


if(localStorage.getItem('names') === null) {
  var myArray = [];
} else {
  myArray = JSON.parse(localStorage.getItem('users'))
}


myForm.addEventListener('submit', function(event) {
  event.preventDefault()
  myArray.push(event.target.elements.firstName.value);

  const myArrayJSON = JSON.stringify(myArray)
  localStorage.setItem('names', myArrayJSON)

  const namesFromLS = localStorage.getItem('names');
  const myNamesFromLSj = JSON.parse(namesFromLS)
  
  const nameLine = document.createElement('p');
  nameLine.textContent = myNamesFromLSj[myNamesFromLSj.length - 1];
  namesCont.appendChild(nameLine);

  event.target.elements.firstName.value= '';
  
});


const namesFromLS = localStorage.getItem('names');
const myNamesFromLSj = JSON.parse(namesFromLS)

if(myNamesFromLSj !== null) {
  myNamesFromLSj.forEach(function(name) {
    const nameLine = document.createElement('p');
    nameLine.textContent = name;
    namesCont.appendChild(nameLine);
  });
};