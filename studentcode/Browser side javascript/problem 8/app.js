let bang = () => {
    let audio = new Audio('bang.mp3');
    audio.play();
}

let hasWon = false;
let gameStarted = false;
let playerOneWon = false;
let playerTwoWon = false;
let earlyFinish = false;

let startDelay = (Math.floor(Math.random()*6000)+2000);

let gameStart = () => {
    if (!earlyFinish){
    document.body.innerHTML = "<h1>GO!!!</h1>";
    gameStarted = true;
    bang();
}
}

let gameTimer = () => {
    document.body.onkeyup = function (e) {
        if (e.keyCode === 81 & !hasWon) {
            playerOneCondition();
        }
        if (e.keyCode === 80 & !hasWon) {
            playerTwoCondition();
        }
    }
    startbutton.remove();
    setTimeout(gameStart, startDelay);
} 

let playerOneCondition = () => {
    console.log('playeroneclick');
    if (!playerTwoWon && !hasWon && gameStarted){
        hasWon = true;
        playerOneWon = true;
        alert('Player one wins!');
        document.body.innerHTML = "<h1>GAME OVER</h1>";
        document.body.appendChild(restartbutton);
     }
    if (!gameStarted && !earlyFinish){
        alert('One clicked early! Player two wins!');
        earlyFinish = true;
        document.body.innerHTML = "<h1>GAME OVER</h1>";
        document.body.appendChild(restartbutton);
    }   
}

let playerTwoCondition = () => {
    console.log('playertwoclick');
    if (!playerOneWon && !hasWon && gameStarted){
        hasWon = true;
        playerTwoWon = true;
        alert('Player two wins!');
        document.body.innerHTML = "<h1>GAME OVER</h1>";
        document.body.appendChild(restartbutton);
     }
    if (!gameStarted && !earlyFinish){
        alert('Two clicked early! Player one wins!');
        earlyFinish = true;
        document.body.innerHTML = "<h1>GAME OVER</h1>";
        document.body.appendChild(restartbutton);
    } 
}

let restart = (event) => {
    event.stopPropagation();
    location.reload();
}

var startbutton = document.getElementById('start');
startbutton.addEventListener('click', gameTimer);

var restartbutton = document.createElement('Button');
restartbutton.innerText = "RESTART?";
restartbutton.addEventListener('click', (e) => restart(e));
restartbutton.style.top = '80%';
restartbutton.style.left = '45%';