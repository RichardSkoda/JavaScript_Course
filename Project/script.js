// Model section
let todos = [{
  title: 'Get groceries',
  dueDate: '2022-15-7',
  id: 'id1'
}, {
  title: 'Wash car',
  dueDate: '2022-25-7',
  id: 'id2'
}, {
  title: 'Make dinner',
  dueDate: '2022-7-7',
  id: 'id3'
}];

// Creates a todo
function createTodo(title, dueDate) {
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });
}

// Deletes a todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    // If the id of this todo matches idToDelete, return false
    // For everithing else, return true
    if (todo.id === idToDelete) {
      return false;
    }  else {
      return true;
    }
  });
}

// Check checkbox
function toggleTodo(todoId, checked) {
  todos.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.isDone = checked;
    }
  });
}

// Controller section
function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);

  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete)
  
  render();
  
}

function checkTodo(event) {
  const checkbox = event.target;
  console.log(checkbox)
  const todoId = checkbox.dataset.todoId;
  const checked = checkbox.checked;

  toggleTodo(todoId, checked);

  render();
  
}

// View section
function render() {
  //reset our list
  document.getElementById('todo-list' ).innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;
    element.style = 'padding: 5px'

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style = 'margin-right: 12px';
    checkbox.onchange = checkTodo;
    checkbox.dataset.todoId = todo.id;
    if (todo.isDone === true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    };
    element.prepend(checkbox);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px;';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);

  });
}

render();