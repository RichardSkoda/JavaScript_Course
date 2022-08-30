/*
Funkce nacitajici data z localStorage;
Osetrit, pokud v localStorage nejsou data
 */

function getSavedNames() {
  const myNames = localStorage.getItem('names');

  if(myNames !== null) {
    return JSON.parse(myNames);
  } else {
    return [];
  };
};


/*
Funkce pro pouziti pri odeslani formulare;
uklada do localStorage jmeno z formulare
 */

function saveNames(oneName) {
  localStorage.setItem('names',JSON.stringify(oneName)); // vezme jmeno a ulozi do localStorage
};


/*
Generovani HTML struktury, kterou umistime do stranky po kliknuti na tlacitko 'Vypis'
+ pouzijeme ji take pro vypisovani informaci z localStorage, kdyz nejake jmeno vymazeme pomoci tlacitka 'Vymazat jmeno'
*/

function generateHTMLStructure(oneName) {

  const newDiv = document.createElement('div')
  const newSpan = document.createElement('span');
  const button = document.createElement('button')
  const adultImg = document.createElement('img')

  newSpan.innerHTML = oneName.name;

  button.innerText = 'Remove name';
  button.classList.add('remove-button');
  newDiv.classList.add('name-div');
  
  newDiv.appendChild(button);
  newDiv.appendChild(newSpan);

  if(oneName.adult === true) {
    adultImg.src = 'Img/thumb_up.png';
  } else {
    adultImg.src = 'Img/thumb_down.png';
  }
  adultImg.classList.add('adult-img')
  newDiv.appendChild(adultImg);

  button.addEventListener('click', function() {
    removeName(names, oneName.id)
    saveNames(names);
    printNamesList(names);
  });
  
  return newDiv;
};

/*
Podle ID najdeme index daneho jmena a pomoci splice ho odstranime
*/

function removeName(ourNames, id) {
  const index = ourNames.findIndex(function(nameWantToCheck) {
    return nameWantToCheck.id === id;
  });

  if(index > -1){
    ourNames.splice(index, 1);
  }
};


/*
Pokud smazu jmeno z localStorage, tak tato fce opetovne vypise localStorage (bez smazaneho jmena)
*/

function printNamesList(names) {
  const listOfNames = document.querySelector('.list-names')

  listOfNames.innerHTML = '';
  names.forEach(function(name) {
    const oneNema = generateHTMLStructure(name);
    listOfNames.appendChild(oneNema);
  });
};