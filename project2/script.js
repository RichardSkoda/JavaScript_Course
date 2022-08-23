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
  task: 'Feed the cat',
  completion: 'no'
}];


const searchInput = document.querySelector('.search-bar');
const main = document.querySelector('main');
// div for list of todos
const listDiv = document.createElement('div');
main.appendChild(listDiv);
// div for number of left todos
const leftsDiv = document.createElement('div');
main.appendChild(leftsDiv);

// render whole list todos
document.querySelector('.show-all').addEventListener('click', function () {
  listDiv.innerHTML = '';
  leftsDiv.innerHTML = '';
  renderLeftList(myToDos);
  renderList(myToDos);
});

// input event
searchInput.addEventListener('input', function (event) {
  searchingText = event.target.value;
  renderSearchedTodos(myToDos, searchingText);
});


//render list of searched text
function renderSearchedTodos(todos, searchingText) {
  
  let results = todos.filter(function (todo) {
    return todo.task.toLowerCase().includes(searchingText.toLowerCase());
  });
  listDiv.innerHTML = '';
  leftsDiv.innerHTML = '';
  renderLeftList(results);
  renderList(results);
};

// show how many is not complete
function renderLeftList(allToDos) {
  let incomplete = allToDos.filter(function (todo) {
    return todo.completion === 'no';
  });
  
  const incompleteToDos = document.createElement('p');
  incompleteToDos.textContent = `Left to do: ${incomplete.length}`;
  leftsDiv.appendChild(incompleteToDos);
};

//render function
function renderList(givenArrayOfObject) {
  givenArrayOfObject.forEach(function (object) {
    for(key in object) {
      const paragraph = document.createElement('p');
      paragraph.textContent = `${key}: ${object[key]}`;
      paragraph.style = 'margin-top: 0px; margin-bottom: 0px';
      listDiv.appendChild(paragraph);
    };
    const blankLine = document.createElement('br');
    listDiv.appendChild(blankLine);
  });
};

/*
const todoLeftTitle = document.createElement('h1');
todoLeftTitle.textContent = 'Left to do';
todoLeftTitle.style = 'color: red';
document.querySelector('main').appendChild(todoLeftTitle);

for(let j = 0; j < toDoLeft.length; j++) {
  const paragraphLeft = document.createElement('p');
  paragraphLeft.textContent = toDoLeft[j].text;
  document.querySelector('main').appendChild(paragraphLeft);
};

*/