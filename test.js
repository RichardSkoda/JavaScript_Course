let myToDos = [{
  text: 'Wash the car',
  completion: 'yes'
}, {
  text: 'Tide up the house',
  completion: 'no'
}, {
  text: 'Take out rubbish',
  completion: 'no'
}, {
  text: 'Feed the dog',
  completion: 'yes'
}, {
  text: 'Fedd the cat',
  completion: 'no'
}];

let toDoLeft = myToDos.filter(function (todo) {
  return todo.completion === 'no';
});

for(let i = 0; i < myToDos.length; i++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = myToDos[i].text;
  document.querySelector('main').appendChild(paragraph);
};

const todoLeftTitle = document.createElement('h1');
todoLeftTitle.textContent = 'Left to do';
todoLeftTitle.style = 'color: red';
document.querySelector('main').appendChild(todoLeftTitle);

for(let j = 0; j < toDoLeft.length; j++) {
  const paragraphLeft = document.createElement('p');
  paragraphLeft.textContent = toDoLeft[j].text;
  document.querySelector('main').appendChild(paragraphLeft);
};



 