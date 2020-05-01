var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");

var firstP = document.getElementById("firstP");
var secondP = document.getElementById("secondP");

var numInput = document.querySelector("input");
var winningScoreDisplay = document.getElementById("winningNumber");

var reset = document.getElementById("reset");

var gameOver = false;
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click", function() {
    if(!gameOver){
    p1Score ++;
        if(p1Score === winningScore) {
            firstP.style.color = "black";
            gameOver = true;
        }
    firstP.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function() {
    if(!gameOver){
    p2Score ++;
        if(p2Score === winningScore) {
            secondP.style.color = "black";
            gameOver = true;
        }
    secondP.textContent = p2Score;
    }
})

reset.addEventListener("click",function() {
   resetNum();
})

function resetNum() {
    p1Score = 0;
    p2Score = 0;
    firstP.textContent = 0;
    secondP.textContent = 0;
    firstP.style.color = "#40468C";
    secondP.style.color = "#40468C";
    gameOver = false;
}

numInput.addEventListener("change",function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetNum();
})