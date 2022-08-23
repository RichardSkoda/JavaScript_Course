const body = document.querySelector('body');
const form = document.querySelector('#my-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let color = event.target.elements.color.value;

    body.style.backgroundColor = color;

    event.target.elements.color.value = '';
})
