let myToDos = [{
  task: 'Wash the car',
  completion: 'yes'
}, {
  task: 'Tide up the house',
  completion: 'no'
}, {
  task: 'Take out rubbish',
  completion: 'no'
}, {
  task: 'Feed the dog',
  completion: 'yes'
}, {
  task: 'Fedd the cat',
  completion: 'no'
}];


const searchInput = document.querySelector('.search-bar');
const searchedList = document.querySelector('main');

function renderSearchedTodos(todos, searchingText) {
  searchedList.innerHTML = '';

  let results = todos.filter(function (todo) {
    return todo.task.toLowerCase().includes(searchingText.toLowerCase());
  });
  results.forEach(function (result) {
    for (key in result) {
      const oneTodo = document.createElement('p')
      oneTodo.textContent = `${key}: ${result[key]}`
      oneTodo.style = 'margin-top: 0px; margin-bottom: 0px'
      searchedList.appendChild(oneTodo)
    };
    const blankLine = document.createElement('br');
    searchedList.appendChild(blankLine);
  });
};

searchInput.addEventListener('input', function (event) {
  searchingText = event.target.value;
  renderSearchedTodos(myToDos, searchingText);
});


/*
for(let i = 0; i < myToDos.length; i++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = myToDos[i].text;
  document.querySelector('main').appendChild(paragraph);
};
*/



// todos left
/*
let toDoLeft = myToDos.filter(function (todo) {
  return todo.completion === 'no';
});

const todoLeftTitle = document.createElement('h1');
todoLeftTitle.textContent = 'Left to do';
todoLeftTitle.style = 'color: red';
document.querySelector('main').appendChild(todoLeftTitle);

for(let j = 0; j < toDoLeft.length; j++) {
  const paragraphLeft = document.createElement('p');
  paragraphLeft.textContent = toDoLeft[j].text;
  document.querySelector('main').appendChild(paragraphLeft);
};




// button

document.querySelector('.myBtn').addEventListener('click', function (event) {
  console.log('Click was done.')
});

*/