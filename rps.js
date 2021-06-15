const getUserChoice = userInput => {
userInput = userInput.toLowerCase();

if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === 'bomb'){
  return userInput;
  console.log("You picked " + userInput + "!");
  }else {
  console.log(userInput + ' is not valid. That is incorrect. Please pick rock, paper or scissors.');
};
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
}
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie game.'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won via paper against rock.'
    }else{
      return 'Congratulations, you won!'
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won via scissors vs. paper. Slashed.'
    }else{
      return 'Congratulations, you won!'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer smashed scissors with a rock. Computer wins. '
    }else{
      return 'Congratulations, you won!'
  }
  }

  if (userChoice === 'bomb') {
    return "You exploded the bomb. You always win."
  }
}

const playGame = () => {
const userChoice = getUserChoice('bomb');
const computerChoice = getComputerChoice();
console.log('You shot a ' + userChoice);
console.log('The computer shot ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};

playGame()
