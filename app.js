let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let right = document.querySelector(".right");
let up = document.querySelector(".top");
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0

function createBoard(){
   popup.style.display = "none";
    for(var i=0; i<100;i++){
        let elem = document.createElement("div");
        grid.appendChild(elem);
    }
}

window.onload = (event) => {
    console.log("page is fully loaded");
  };
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay);
    left.innerHTML= "i change"
});



function startGame(){

}
function control(){

}

function replay(){
    left.innerHTML= "i change"

}

