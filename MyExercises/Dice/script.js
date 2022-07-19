const diceMin = 1;
const diceMax = 6;

let rolls = 0;
let rolledNumbers = [];

const result = document.getElementById('result');
const scoreView = document.getElementById('total-score');
const container2 = document.getElementById('container2');
const rollButton = document.getElementById('roll-button');
const resetButton = document.getElementById('reset-button');
let img = document.getElementById('win-lose-picture');

function resultRolls(rolledNumbers, rolls) {
  let sumNumbers = 0;
  rolledNumbers.forEach(function (number) {
    sumNumbers = sumNumbers + number
  });
  return sumNumbers;
};

function stopRolling(rolls, score) {
  if (rolls === 6) {
    rollButton.disabled = true;
    rollButton.style = 'color: rgb(101, 65, 41); cursor: none';
    resetButton.hidden = false;
    if (score >= 25) {
      container2.hidden = false;
      img.src = "Images/win.jpg";
    } else {
      img.src = "Images/lose.jpg";
      container2.hidden = false;
    }
  };
}

function rollDice() {
  rolls = rolls + 1;
  let roll = Math.floor(Math.random() * (diceMax - diceMin + 1)) + diceMin;
  rolledNumbers.push(roll);

  const newRoll = document.createElement('img');
  if (roll === 1) {
    newRoll.src = 'Images/dice-1-md.jpg';
  } else if (roll === 2) {
    newRoll.src = 'Images/dice-2-md.jpg';
  }else if (roll === 3) {
    newRoll.src = 'Images/dice-3-md.jpg';
  }else if (roll === 4) {
    newRoll.src = 'Images/dice-4-md.jpg';
  }else if (roll === 5) {
    newRoll.src = 'Images/dice-5-md.jpg';
  }else if (roll === 6) {
    newRoll.src = 'Images/dice-6-md.jpg';
  };
  newRoll.style = 'width: 60px; background-color: bisque';
  result.appendChild(newRoll);

  let score = resultRolls(rolledNumbers, rolls)
  scoreView.innerHTML = `Score = ${score}`;

  stopRolling(rolls, score);
};

function resetGame() {
  result.innerHTML = '';
  rolls = 0;
  rolledNumbers = [];
  scoreView.innerText = 'Score = 0'
  rollButton.disabled = false;
  rollButton.style = 'color: bisque';
  resetButton.hidden = true;
};

function confirm() {
  container2.hidden = true;
};