// rockPaperScissors.js

var index = 0;
var imageList = [
    'https://images.saferbrand.com/is/image/woodstream/sb-lc-pest-animals-raccoon-in-trash-can?qlt=75',
    'https://tse2.mm.bing.net/th?id=OIP.zfL7B59Hk8eci5P_zHEh4wHaEd&pid=Api&P=0'
];

function rockPaperScissors() {
    index = index + 1;
    if (index == imageList.length) {
        index = 0;
    }
}

function createButtons() {
    var buttonContainer = document.getElementById("buttonContainer");

    var rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    rockButton.onclick = function () {
        userInput("rock");
    };

    var paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    paperButton.onclick = function () {
        userInput("paper");
    };

    var scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    scissorsButton.onclick = function () {
        userInput("scissors");
        image1.src = "https://https://www.capitalhairandbeauty.co.uk/Images/Product/Default/xlarge/521817.jpg"
    };

    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);
}
