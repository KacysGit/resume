// rockPaperScissors.js

var index = 0;
var buttonsGenerated = false; // prevent multiple buttons from generating
var imageList = [
    'https://petrockadoption.weebly.com/uploads/3/0/2/7/30272349/s239674017492847319_p1_i1_w800.jpeg',
    'https://thumbs.dreamstime.com/b/piece-old-paper-rolled-up-roll-isolated-white-background-39640236.jpg', 
    'https://www.capitalhairandbeauty.co.uk/Images/Product/Default/xlarge/521817.jpg',
    'https://wallpapercave.com/wp/wp8122132.jpg'
];

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
    resetImage();
}

function hideButtons() {
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.innerHTML = ""; // Remove all buttons
    buttonsGenerated = false; // Reset the flag
}

function resetImage() {
    var image1 = document.getElementById("gamePiece");
    image1.src = "https://wallpapercave.com/wp/wp8122132.jpg"; // Reset the image source
}