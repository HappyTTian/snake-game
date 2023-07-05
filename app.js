//initial variables
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
let intervalTime = 1000;
let interval = 0

//directions of right
const s_right = 1;
const s_left = -1;
const s_up = -width;
const s_down = width;

function createBoard(){
   popup.style.display = "none"; // hide the replay button first

   // add 10 x 10 grid
    for(var i=0; i<100;i++){
        let elem = document.createElement("div"); 
        grid.appendChild(elem); 
    }
}


document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay);
});



function startGame(){
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares);// random position of apple
    direction = 1; //set the initial direction of snake
    scoreDisplay.innerHTML = score;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveResult, intervalTime);
}

function moveResult(){
    let squares = document.querySelectorAll(".grid div");
    if(checkSnakeHits(squares)){
        alert("Game over");
        popup.style.display="flex";
        return clearInterval(interval); //clear the game
    }else{
        moveSnake(squares);
    }
}
function checkSnakeHits(squares){

}
function moveSnake(squares){
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    let new_head = currentSnake[0]+direction;
    currentSnake.unshift(new_head);
    eatApple(squares,tail); //check if snake eats the apple
    squares[new_head].classList.add("snake");
}
function control(){

}

function replay(){

}

