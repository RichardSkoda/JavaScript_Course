
/************ ternar operator **************/

const age = 15;
// let notification

// if(age >= 18){
//   notification = 'You can entry';
// } else {
//   notification = "You can't entry"
// }

// same as above
let notification = age >= 18 ? 'You can entry' :  "You can't entry"

console.log(notification);


const myAge = 17;

const letHimGo = () => "You can go inside.";
const noLetHimGo = () => "You can't go inside";

const result = myAge >= 18 ? letHimGo() : noLetHimGo();
console.log(result);