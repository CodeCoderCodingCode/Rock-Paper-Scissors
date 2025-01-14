// Variablen für den Punktestand und die Runden
let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

// Referenzen zu den HTML-Elementen
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const outcome = document.getElementById("outcome");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const roundsCount = document.getElementById("rounds-count");
const restartBtn = document.getElementById("restart-btn");

// Zufällige Auswahl des Computers (Bot)
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Funktion für das Vergleichen der Auswahl von Spieler und Computer
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        outcome.textContent = `It's a draw! You both chose ${playerChoice}!`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        outcome.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerWins++;
    } else {
        outcome.textContent = `You loose! ${computerChoice}  beats ${playerChoice}.`;
        computerWins++;
    }

    // Punktestand und Rundenanzeige aktualisieren
    roundsPlayed++;
    wins.textContent = `Wins: ${playerWins}`;
    losses.textContent = `Losses: ${computerWins}`;
    roundsCount.textContent = `Round: ${roundsPlayed}`;

    // Spielende
    if (playerWins === 5 || computerWins === 5) {
        outcome.textContent = playerWins === 5 ? "You win the game!" : "You loose the game!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        if (playerWins === 5) {
        playerWin();
        } else {
        playerLoose();
        }
}}

// Event-Listener für die Buttons
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// Neustart-Funktion
restartBtn.addEventListener("click", () => {
    playerWins = 0;
    computerWins = 0;
    roundsPlayed = 0;
    wins.textContent = `Wins: ${playerWins}`;
    losses.textContent = `Losses: ${computerWins}`;
    roundsCount.textContent = `Round: ${roundsPlayed}`;
    outcome.textContent = "Choose an option to play!";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});

// Holen des Spielcontainers und des Textes
const gameContainer = document.getElementById("game-container");
const outcomeText = document.getElementById("outcome");

// Wenn der Spieler gewinnt:
function playerWin() {
    // Füge den Win-Effekt hinzu
    gameContainer.classList.add("win");

    // Ausgabe des Ergebnisses
    outcomeText.textContent = "You Win!";

    // Optional: Ton abspielen
    var winSound = new Audio('path_to_win_sound.mp3');
    winSound.play();

    // Entferne den Win-Effekt nach der Animation (1.5 Sekunden)
    setTimeout(() => {
        gameContainer.classList.remove("win");
    }, 1500); // Zeit, die der Effekt dauert
}

// Wenn der Spieler verliert:
function playerLoose() {
    // Füge den Lose-Effekt hinzu
    gameContainer.classList.add("lose");

    // Ausgabe des Ergebnisses
    outcomeText.textContent = "You Lose!";

    // Optional: Ton abspielen
    var loseSound = new Audio('path_to_lose_sound.mp3');
    loseSound.play();

    // Entferne den Lose-Effekt nach der Animation (0.5 Sekunden)
    setTimeout(() => {
        gameContainer.classList.remove("lose");
    }, 500); // Zeit, die der Effekt dauert
}

// Wenn es ein Unentschieden gibt:
function draw() {
    outcomeText.textContent = "It's a Draw!";
}
