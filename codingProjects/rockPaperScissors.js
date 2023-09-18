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

function startCountdown() {
    var count = 4; // Set the initial countdown value
    var countdownInterval = setInterval(function() {
        count--;
        countdownElement.textContent = "Opponent's choice in: " + count;
        if (count <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Opponent's choice:";
            // Now you can generate the opponent's choice
            var opponentChoice = generateOpponentChoice();
            countdownElement.textContent = "Opponent chose " + opponentChoice;
        }
    }, 1000); // Update the countdown every second (1000 milliseconds)
}

function generateOpponentChoice() {
    // Add your code to generate the opponent's choice here
    // Once you have the opponent's choice, you can display it
    // and continue with the game logic
    var opponentInput = Math.floor(Math.random() * 3);
    var result = "";
    if(opponentInput == 0){
        opponentIndex = 0;
        result = "rock";
    }
    else if(opponentInput == 1){
        opponentIndex = 1;
        result = "paper";
    }
    else if(opponentInput == 2){
        opponentIndex = 2;
        result = "scissors";
    }
    else{
        opponentIndex = 3;
        console.log("Error with opponent's role");
    }    
    
    // Display picture of opponent's choise
    if (opponentIndex >= 0 && opponentIndex <= 4) {
        var image2 = document.getElementById("opponentPiece");
        image2.src = imageList[opponentIndex];
    }

    return result; // Return the opponent's choice
}

function rockPaperScissors(userInput) {
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
    startCountdown();
    hideButtons();
}

function createButtons() {
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
}