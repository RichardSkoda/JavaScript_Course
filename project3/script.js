/*
nacteni data z localStorage do promenne names; pokud je localStorage prazdny, tak do names se ulozi prazdne pole
*/
const names = getSavedNames()

// odeslani formulare a ulozeni do localStorage pomoci promenne names
const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  names.push({
    id: uuidv4(),
    name: event.target.elements.name.value
  });
  
  saveNames(names)

  event.target.elements.name.value = '';
});


// vzpisovani zpet do stranky

const printBtn = document.querySelector('.print-button');
const listOfNames = document.querySelector('.list-names');

printBtn.addEventListener('click', function() {
  listOfNames.innerHTML = '';

  names.forEach(function(name) {
    const nameHTML = generateHTMLStructure(name);
    listOfNames.appendChild(nameHTML);
  });
});