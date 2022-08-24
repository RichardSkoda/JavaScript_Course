const form = document.querySelector('#my-form');
const alertText = document.querySelector('#alert');

const tasksDiv = document.createElement('div');
document.body.appendChild(tasksDiv);


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const getInput = event.target.elements.task.value;

    if(getInput === '') {
        alertText.style.display = 'inline-block';
    } else {
        alertText.style.display = 'none';

        const id = '' + new Date().getTime();

        const oneTaskDiv = document.createElement('div');
        oneTaskDiv.style.display = 'flex'
        tasksDiv.appendChild(oneTaskDiv);

        const newTask = document.createElement('label');
        newTask.style.marginLeft = '20px';
        newTask.htmlFor = `check-task${id}`;
        newTask.textContent = getInput;

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.style.marginLeft = '20px';
        checkBox.id = `check-task${id}`;

        oneTaskDiv.appendChild(checkBox)
        oneTaskDiv.appendChild(newTask)

        event.target.elements.task.value = ''
        }

});