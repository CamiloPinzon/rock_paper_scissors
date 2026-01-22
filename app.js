const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let isGameRunning = false;

const getPlayerChoice = () => {
    const playerChoice = prompt(`Choose: ${ROCK}, ${PAPER}, or ${SCISSORS}:`, '').toUpperCase();
    if (playerChoice !== ROCK && playerChoice !== PAPER && playerChoice !== SCISSORS) {
        alert(`Invalid choice: ${playerChoice}. We select ${DEFAULT_CHOICE} for you.`);
        return DEFAULT_CHOICE;
    }
    return playerChoice;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'TIE';
    } else if (playerChoice === ROCK && computerChoice === SCISSORS ||
        playerChoice === PAPER && computerChoice === ROCK ||
        playerChoice === SCISSORS && computerChoice === PAPER) {
        return 'PLAYER';
    } else {
        return 'COMPUTER';
    }
}

const startGame = () => {
    if (isGameRunning) {
        alert('Game is already running!');
        return;
    }
    isGameRunning = true;
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    winner === 'TIE' ? alert('It\'s a tie!') :
        alert(`${winner} wins! You chose ${playerChoice} and the computer chose ${computerChoice}.`);
    isGameRunning = false;
}

startGameBtn.addEventListener('click', startGame);