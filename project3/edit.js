const nameID = location.hash.substring(1);
let names = getSavedNames();

// najdu object s prislusny ID v localStorage; searchedName je reference na names
let searchedName = names.find(function(oneObject){
  return oneObject.id === nameID;
});

// osetrim spatne ID/ vrati me na hlavni stranu
if(searchedName === undefined){
  location.assign('/index.html')
}

// vypisu do inputu jemno pro dane ID
document.querySelector('#editedName').value = searchedName.name;


const editingForm = document.querySelector('#editingForm');

// odeslu upravene jmeno
editingForm.addEventListener('submit', function(event){
  event.preventDefault();

  searchedName.name = event.target.elements.editedName.value;

  saveNames(names);
});

window.addEventListener('storage', function(event) {
  console.log(event)

  if(event.key === 'names'){
    names = JSON.parse(event.newValue);
  };

  // najdu object s prislusny ID v localStorage; searchedName je reference na names
  let searchedName = names.find(function(oneObject){
    return oneObject.id === nameID;
  });

  // osetrim spatne ID/ vrati me na hlavni stranu
  if(searchedName === undefined){
    location.assign('/index.html')
  }

  // vypisu do inputu jemno pro dane ID
  document.querySelector('#editedName').value = searchedName.name;

});