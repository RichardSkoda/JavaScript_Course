// while - dokud neco, delej neco
// do while - stejne, ale provede se min. jednou

// let i = 0;


// // neprovede se
// while(i < 0){
//   console.log(i);
//   i++
// };

// // provede se 1x
// do {
//   console.log(i);
//   i++
// } while (i < 0)


'use strict'

let result;
while (result != 'X'){
  result = prompt('If you want to close game, enter X');
  console.log(result)
};
