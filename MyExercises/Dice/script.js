const diceMin = 1;
    const diceMax = 6;

    let rolls = 0;
    let rolledNumbers = [];

    const result = document.getElementById('result');
    const scoreView = document.getElementById('total-score');

    function resultRolls(rolledNumbers, rolls) {
      let sumNumbers = 0;
      rolledNumbers.forEach(function (number) {
        sumNumbers = sumNumbers + number
      });
      return sumNumbers;
    };

    function stopRolling(rolls, score) {
      if (rolls === 6) {
        document.getElementById('roll-button').disabled = true;
        document.getElementById('reset-button').hidden = false;
        if (score >= 25) {
          alert('You won!!')
        } else {
          alert('You lost!!')
        }
      };
    }

    function rollDice() {
      rolls = rolls + 1;
      let roll = Math.floor(Math.random() * (diceMax - diceMin + 1)) + diceMin;
      rolledNumbers.push(roll);

      const newRoll = document.createElement('div');
      newRoll.innerText = `Roll ${rolls} = ${roll}`;
      result.appendChild(newRoll);
      console.log(rolledNumbers);

      scoreView.innerText = '???';
      let score = resultRolls(rolledNumbers, rolls)
      scoreView.innerText = `Score = ${score}`;

      console.log(rolls);
      stopRolling(rolls, score);


    };

    function resetGame() {
      result.innerHTML = '';
      rolls = 0;
      rolledNumbers = [];
      scoreView.innerText = 'Score = 0'
      document.getElementById('roll-button').disabled = false;
      document.getElementById('reset-button').hidden = true;
    }