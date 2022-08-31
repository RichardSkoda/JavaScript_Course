const myTaxes = (income) => {
  if(typeof income === "number") {
    return income * 0.25;
  } else {
    throw Error('Argument must be a number');
  }
};

try {
  const result = myTaxes('aaa');
  console.log(result)
} catch (e) {
  console.log("Error in the code");
}

/***** Exercise *****/

localStorage.setItem('age', JSON.stringify(30));

let myAge = localStorage.getItem('age');

try {
  console.log(JSON.parse(myAge));
} catch (e) {
  console.log('Error');
};


console.log('Continue in the code.')