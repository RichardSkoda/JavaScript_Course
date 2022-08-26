localStorage.setItem('location', 'Jablonec');
localStorage.setItem('name', 'Richard');

// update
localStorage.setItem('location', 'Praha');

// obtain
console.log(localStorage.getItem('name'));

localStorage.removeItem('location');

// JSON

const user = {
  firstName: 'Richard',
  age: 35
};

const userJSON = JSON.stringify(user)

localStorage.setItem('person', userJSON)

const userFromLS = localStorage.getItem('person');
const myUser = JSON.parse(userFromLS)
console.log(myUser)

console.log(`Hello I am ${myUser.firstName} and I am ${myUser.age} years old.`);