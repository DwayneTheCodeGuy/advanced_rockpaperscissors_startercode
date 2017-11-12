//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
const rps = document.getElementById("rps");
const userInput = document.getElementById("user-input");
const userChoice = document.querySelector(".user-choice");
const shoot = document.getElementById("shoot");
const computerChoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".winner");



rps.addEventListener("click", (event) => {
    if(event.target.id == "shoot") {
        userChoice.innerHTML = userInput.value;
        const words = ["rock", "paper", "scissors"];
        let word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        if(userInput.value == word) {
            winner.innerHTML = "Draw!";
        } else if(userInput.value == "rock") {
            if(word == "paper") {
                winner.innerHTML = "Computer Wins!";
            }
        } else if(userInput.value == "paper") {
            if(word == "scissors") {
                winner.innerHTML = "Computer Wins!";
            }
        } else if(userInput.value == "scissors") {
            if(word == "paper") {
                winner.innerHTML = "You Win!";
            }
        } else if(userInput.value == "paper") {
            if(word == "rock") {
                winner.innerHTML = "You Win!";
            }
        } else if(userInput.value == "scissors") {
            if(word == "rock") {
                winner.innerHTML = "Computer Wins!";
            }
        } else if(userInput.value == "rock") {
            if(word == "scissors") {
                winner.innerHTML = "You Win!";
            }
        } else {
            winner.innerHTML = "they dont match";
        }
        computerChoice.innerHTML = word;
        userInput.value = "";
    } 
});


//FUNCTIONS



// DOCUMENT READY FUNCTION

