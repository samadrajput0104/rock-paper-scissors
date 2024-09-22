let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw ! play again";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText =`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroudColor = "green";

    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `you loose! ${compchoice} beats your ${userchoice}`
        msg.style.backgroudColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);

    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
          userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
           userwin = compchoice === "rock" ? false : true;


        }
        showwinner(userwin, userchoice, compchoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
     choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
     });     
});