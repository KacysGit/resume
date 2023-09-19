// rockPaperScissors.js

var index = 0;
var opponentIndex = 0;
var buttonsGenerated = false; // prevent multiple buttons from generating
var imageList = [
    'https://petrockadoption.weebly.com/uploads/3/0/2/7/30272349/s239674017492847319_p1_i1_w800.jpeg',
    'https://thumbs.dreamstime.com/b/piece-old-paper-rolled-up-roll-isolated-white-background-39640236.jpg', 
    'https://www.capitalhairandbeauty.co.uk/Images/Product/Default/xlarge/521817.jpg',
    'https://wallpapercave.com/wp/wp8122132.jpg'
];

var countdownElement = document.getElementById("countdown");

async function startCountdown(message1, message2, displayCount) {
    return new Promise((resolve) => {
        var count = 4; // Set the initial countdown value

        var countdownInterval = setInterval(function () {
            count--;

            if (displayCount == true) {
                countdownElement.textContent = message1 + count;
            } else {
                countdownElement.textContent = "";
            }

            if (count <= 0) {
                clearInterval(countdownInterval);
                // Now you can show the result of the event being count down to
                countdownElement.textContent = message2;
                resolve(); // Resolve the promise when countdown is finished
            }
        }, 1000); // Update the countdown every second (1000 milliseconds)
    });
}


function generateOpponentChoice() {
    // Once you have the opponent's choice, you can display it
    // and continue with the game logic
    var opponentInput = Math.floor(Math.random() * 3);
    var result = "";
    if (opponentInput == 0) {
        opponentIndex = 0;
        result = "rock";
    } else if (opponentInput == 1) {
        opponentIndex = 1;
        result = "paper";
    } else if (opponentInput == 2) {
        opponentIndex = 2;
        result = "scissors";
    } else {
        opponentIndex = 3;
        console.log("Error with opponent's role");
    }

    // Display picture of opponent's choice
    // if (opponentIndex >= 0 && opponentIndex <= 4) {
    //     var image2 = document.getElementById("opponentPiece");
    //     image2.src = imageList[opponentIndex];
    // }

    return {
        resultName: result,
        resultIndex: opponentIndex
    };
}

async function rockPaperScissors(userInput) {
    
    hideButtons();
    if (userInput == "rock") {
        index = 0;
    } else if (userInput == "paper") {
        index = 1;
    } else if (userInput == "scissors") {
        index = 2;
    } else {
        console.log("There is invalid text in userInput");
        index = 4;
    }
    if (index >= 0 && index <= 4) {
        var image1 = document.getElementById("gamePiece");
        image1.src = imageList[index];
    }
    // Display the user's choice in the HTML
    var choiceText = document.getElementById("userChoice");
    choiceText.textContent = "You chose " + userInput;

    // Generate opponents choice
    var opponentChoice = generateOpponentChoice();

    // Define the messages for countdown
    var preCount = "Opponent's choice in: ";
    var postCount = "Opponent chose " + opponentChoice.resultName;
    var showCountdown = true;

    // Start the countdown with the messages
    await startCountdown(preCount, postCount, showCountdown);

    // Display image of the opponent's choise
    // add two newlines here
    if (opponentChoice.resultIndex >= 0 && opponentChoice.resultIndex <= 4) {
        var image2 = document.getElementById("opponentPiece");
        image2.src = imageList[opponentChoice.resultIndex];
    }

    // Display message indicating who won
    var winnerText = document.getElementById("winnerIs");
    winnerText.textContent = whoWon(userInput, opponentChoice.resultName);
}

function createButtons() {
    var gamePiece = document.getElementById("gamePiece");
    gamePiece.style.opacity = "1"; 
    if (!buttonsGenerated) { // Check if buttons are already generated
        var buttonContainer = document.getElementById("buttonContainer");

        var rockButton = document.createElement("button");
        rockButton.textContent = "Rock";
        rockButton.onclick = function () {
            rockPaperScissors("rock");
        };

        var paperButton = document.createElement("button");
        paperButton.textContent = "Paper";
        paperButton.onclick = function () {
            rockPaperScissors("paper");
        };

        var scissorsButton = document.createElement("button");
        scissorsButton.textContent = "Scissors";
        scissorsButton.onclick = function () {
            rockPaperScissors("scissors");
        };

        buttonContainer.appendChild(rockButton);
        buttonContainer.appendChild(paperButton);
        buttonContainer.appendChild(scissorsButton);

        buttonsGenerated = true; // Set the flag to indicate buttons are generated
    }

    reset();
}

function whoWon(userInput, opponentInput) {
    if (userInput === opponentInput) {
        return "It's a tie!";
    } else if (
        (userInput === "rock" && opponentInput === "scissors") ||
        (userInput === "paper" && opponentInput === "rock") ||
        (userInput === "scissors" && opponentInput === "paper")
    ) {
        return "You win!";
    } else {
        return "Opponent wins!";
    }
}

function hideButtons() {
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.innerHTML = ""; // Remove all buttons
    buttonsGenerated = false; // Reset the flag
}

function reset() {
    var choiceText = document.getElementById("userChoice");
    choiceText.textContent = "";
    var opponentChoiceText = document.getElementById("opponentChoice");
    opponentChoiceText.textContent = "";
    var image1 = document.getElementById("gamePiece");
    image1.src = "https://wallpapercave.com/wp/wp8122132.jpg"; // Reset the image source
    countdownElement.textContent = ""; // Clear the countdown 
    var winner = document.getElementById("winnerIs");
    winner.innerHTML = "<br>";
    var opponentPicture = document.getElementById("opponentPiece");
    opponentPicture.src = "https://img.wallpapersafari.com/tablet/768/1024/56/59/Gjevgn.jpg"; // Reset the image source
}