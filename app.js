//initial variables
let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let right = document.querySelector(".right");
let up = document.querySelector(".top"); //button for mobile devices
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 500;
let interval = 0

//directions of right
const s_right = 1;
const s_left = -1;
const s_up = -width;
const s_down = width;



document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    up.addEventListener("click", () => (direction = s_up));
    bottom.addEventListener("click", () => (direction = s_down));
    left.addEventListener("click", () => (direction = s_left));
    right.addEventListener("click", () => (direction = s_right));
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay);
});

function createBoard(){
   popup.style.display = "none"; // hide the replay button first

   // add 10 x 10 grid
    for(var i=0; i<100;i++){
        let elem = document.createElement("div"); 
        grid.appendChild(elem); 
    }
}


function startGame(){
    let squares = document.querySelectorAll(".grid div");
    direction = s_right; //set the initial direction of snake
    scoreDisplay.innerHTML = score;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    randomApple(squares);// random position of apple
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
    
    if((currentSnake[0] % width == width-1 && direction == s_right) //the snake hits the right border
    || (currentSnake[0] % width == 0 && direction == s_left) //the snake hits the left border
    || (currentSnake[0] < width && direction == s_up) //the snake hits the up border
    || (currentSnake[0] >= (width*(width-1))  && direction == s_down)//the snake hits the down border
    || (squares[currentSnake[0]+direction].classList.contains("snake")) //the snake hits it self
    ){
        return true;
    }
    return false;
}
function moveSnake(squares){
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    let new_head = currentSnake[0]+direction;
    currentSnake.unshift(new_head);
    eatApple(squares,tail); //check if snake eats the apple
    squares[new_head].classList.add("snake");
}
function eatApple(squares,tail){
    if(squares[currentSnake[0]].classList.contains("apple")){
        currentSnake.push(tail);
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        score++; // increase the score
        scoreDisplay.textContent = score;
        randomApple(squares);
        clearInterval(interval);
        intervalTime *= speed; //increase speed of snake 
        interval = setInterval(moveResult,intervalTime);
    }
}

function randomApple(squares){
    do{
         appleIndex = Math.floor(Math.random()*squares.length);
    }while(squares[appleIndex].classList.contains("snake")) //checks until it's not in the positions of snake

    squares[appleIndex].classList.add("apple");
}
function control(input){
    
    if(input.keyCode === 39){
        direction = s_right;
    }else if(input.keyCode == 38){
        direction = s_up;
    }else if(input.keyCode == 37){
        direction = s_left;
    }else if(input.keyCode == 40){
        direction = s_down;
    }
}

function replay(){
    grid.innerHTML = "";
    createBoard();
    startGame();
    popup.style.display = "none";
}

