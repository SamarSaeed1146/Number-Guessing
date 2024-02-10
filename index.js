
const containerEL = document.querySelector('.container');
const btnPlay = document.querySelector('.btn_again');
const btnChck = document.querySelector('.btn_check');
const hideNumEL = document.querySelector('.hide_num');
const msg = document.querySelector('.message');
const inputNumEL = document.querySelector('.input_number');
const highScoreEL = document.querySelector('.high_score');
const scoreEL = document.querySelector('.score');


let scretNum = Math.trunc(Math.random() *10 + 1);
let score = 20;
let highScore = 0

console.log(scretNum);

btnChck.addEventListener("click", () => {
    const guess = Number(inputNumEL.value);
    if(guess){

        if (guess != scretNum){
            if (score > 1) {
                score--;
                scoreEL.textContent = score;

                msg.textContent = guess > scretNum ? "Too High" : "Too Low"
                scoreEL.textContent = score;
            }else{
                displayMessage("You're Lossed the Game");
                containerEL.style.backgroundColor = "#fff";
                scoreEL.textContent = 0;
            }
        }else{
            hideNumEL.textContent = scretNum;
            hideNumEL.style.width  ="50%";
            hideNumEL.style.transition = "all 0.5s ease-in";
            containerEL.style.backgroundColor = "#e0d8d3";
            displayMessage("Congratulation You're Won the Game:)");
        }   
    }else{
        displayMessage("Please Enter the Number :(")
    }
})


const displayMessage = function (message) {
    msg.textContent = message
}