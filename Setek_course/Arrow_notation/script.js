//function arrow notation

const people = [{
  name: 'Richard',
  age: 35
}, {
  name: 'Renata',
  age: 38
}, {
  name: 'Oliver',
  age: 3
}];


const less20 = people.filter(function(person){
  return person.age < 20;
});

const less20Arrow = people.filter((person => person.age < 20));

console.log(less20);
console.log(less20Arrow);

const exactly15 = people.filter((person) => person.age == 38);
console.log(exactly15);

const name = people.filter((person) => person.name == 'Richard');
console.log(name);


// const sum = () => arguments[0];
// console.log(sum(5, 6, 10, 2))

const car = {
  color: 'red',
  getInfo: () => `Color of this car is ${this.color}.`
};

console.log(car.getInfo())