document.getElementById("playButton").addEventListener("click", function () {
    const playerChoice = document.getElementById("playerChoice").value.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultElement = document.getElementById("result");

    if (!choices.includes(playerChoice)) {
        resultElement.textContent = "Invalid choice! Please type rock, paper, or scissors.";
        resultElement.style.color = "red";
        return;
    }

    resultElement.style.color = "black";
    resultElement.textContent = `Computer chose ${computerChoice}. `;

    if (playerChoice === computerChoice) {
        resultElement.textContent += "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultElement.textContent += "You win!";
    } else {
        resultElement.textContent += "You lose!";
    }
});
