let theme = new Audio('theme.mp3');
theme.play();
let endmusic = new Audio('endmusic.mp3');
let audio = new Audio('appear.mp3');
let appear = new Audio('appear2.mp3');

let bang = () => {
    appear.play();
}

let hasWon = false;
let gameStarted = false;
let playerOneWon = false;
let playerTwoWon = false;
let earlyFinish = false;

let startDelay = (Math.floor(Math.random()*6000)+2000);

let gameStart = () => {
    if (!earlyFinish){
    document.getElementById('prepare').style.display = 'none';
    document.getElementById('poke').style.display = 'block';
    gameStarted = true;
    bang();
}
}

let gameTimer = () => {
    document.getElementById('prepare').style.display = 'block';
    document.getElementById('playerone').style.display = 'block';
    document.getElementById('playertwo').style.display = 'block';
    audio.play();
    theme.pause();
    document.body.onkeyup = function (e) {
        if (e.keyCode === 81 & !hasWon) {
            playerOneCondition();
            document.getElementById('ball').style.display = 'block';
        }
        if (e.keyCode === 80 & !hasWon) {
            playerTwoCondition();
            document.getElementById('ball').style.display = 'block';
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
        document.body.innerHTML = "<h1>PLAYER ONE CAUGHT PIKACHU!</h1>";
        document.body.appendChild(restartbutton);
        audio.pause();
        endmusic.play();
     }
    if (!gameStarted && !earlyFinish){
        alert('One used Pokeball too early! Player two wins!');
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
        document.body.innerHTML = "<h1>PLAYER TWO CAUGHT PIKACHU</h1>";
        document.body.appendChild(restartbutton);
        audio.pause();
        endmusic.play();
     }
    if (!gameStarted && !earlyFinish){
        alert('Two used Pokeball too early! Player one wins!');
        earlyFinish = true;
        document.body.innerHTML = "<h1>GAME OVER </h1>";
        document.body.appendChild(restartbutton);
    } 
}

let restart = (event) => {
    event.stopPropagation();
    location.reload();
}

var startbutton = document.getElementById('start');
startbutton.addEventListener('click', gameTimer);

var x = document.createElement("IMG");
x.setAttribute("src", "restart.png");


var restartbutton = document.createElement('Button');
restartbutton.addEventListener('click', (e) => restart(e));
restartbutton.appendChild(x);
//restartbutton.style.top = '80%';
//restartbutton.style.left = '45%';