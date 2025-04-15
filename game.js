 let userScore = 0;
 let compScore = 0;

const choices = document.querySelectorAll(".choice_optn");
const msg=document.querySelector("#msg");
const userId =document.querySelector("#userScore");
const compId =  document.querySelector("#compScore");
 
let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const compIdx = Math.floor(Math.random() * 3);
    return options[compIdx];

}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
let drawGame = () => {
    console.log("game is draw!");
    msg.innerText="Game is Draw";
    msg.style.cssText = "background-color:orange;";
    
}
let showWinner=(userWin, userChoice,compChoice)=>{
    if(userWin){
    msg.innerText=`Your Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.cssText = "background-color:green;";
    userScore++;
    userId.innerText = userScore;

 
    } 
    else{
        msg.innerText=`Ohh You Lose! Your ${compChoice} beats ${userChoice}`;
        msg.style.cssText = "background-color:red;";
        compScore++;
    compId.innerText = compScore;
    }



}
const playGame = (userChoice) => {
    console.log("choice was clicked", userChoice);
    let compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    // code for winner analysing
    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        } 
        else {
            userWin = compChoice === "scissors" ? false : true;    
        }
        showWinner(userWin, userChoice,compChoice);
    }

 
}


