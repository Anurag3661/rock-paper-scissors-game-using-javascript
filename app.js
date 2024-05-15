let userScore = 0;
let comScore = 0;
//for make changes in each choice we select our choices by their id using querySelector and store them in a variable ie choices
const choices = document.querySelectorAll(".choice");

//for make changes in message after every win or lose we have to select paragraph id 
const msg = document.querySelector("#msg");

//for update our score everytime we select both user-score and computer-score
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

//this is function for computer choice and it return options[randIdx]
const genComChoice = () => {
    //we make an array having only 3 choices 
    // we make array because in js the .random() function will not be able to generate the strings so that's why we stored them in a array so that the .random() will now generate random indexes of this array
    const options = ["rock", "paper", "scissors"];
    //here we use floor function so that decimal values we be removed and we multiplied it by 3 because .random() will generate values between 0 and 1 and if we multiply it by 3 then it will generate values between 0 and 2 ie 0,1,2 like in our index 
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];

};

//function for drawGame
const drawGame = () => {
    console.log("game is draw");
    msg.innerText = "Game was draw play again...";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const ComChoice = genComChoice();
    console.log("comp choice = ", ComChoice);

    //function for show whether you win or you lost
    const showWinner = (userWin, userChoice, ComChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win ! Your ${userChoice} beats ${ComChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            comScore++;
            computerScorePara.innerText = comScore;
            msg.innerText = `You lost ! ${ComChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }

    }

    //checking for draw condition and call our drawFunction
    if(userChoice===ComChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = ComChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = ComChoice === "scissors" ? false : true;
        }
        else{
            userWin = ComChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, ComChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});