let theme = new Audio('theme.mp3');
theme.play();
let endmusic = new Audio('endmusic.mp3');
let audio = new Audio('appear.mp3');
let appear = new Audio('appear2.mp3');
let bang = () => {
    appear.play();
}

let playerOneScore = 0
let playerTwoScore = 0

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
    if (playerOneScore >= 3){
       document.body.innerHTML = "<h1>PLAYER ONE HAS 3 POINTS AND WINS!</h1>"; 
       document.body.appendChild(restartbutton);
    }
    if (!playerTwoWon && !hasWon && gameStarted){
        playerOneScore++;
        hasWon = true;
        playerOneWon = true;
        nextround.style.visibility = 'visible';
        document.getElementById('win').innerText = 'PLAYER ONE HAS CAUGHT PIKACHU!'
        //document.body.innerHTML("<h1>PLAYER ONE CAUGHT PIKACHU!</h1>"));
        audio.pause();
        endmusic.play();
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        document.getElementById('poke').style.display = 'none';
     }
    if (!gameStarted && !earlyFinish){
        alert('One used Pokeball too early! Player two wins!');
        playerTwoScore++;
        earlyFinish = true;
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        nextround.style.visibility = 'visible';
    }   
}

let playerTwoCondition = () => {
    console.log('playertwoclick');
    if (playerOneScore >= 3){
        document.body.innerHTML = "<h1>PLAYER TWO HAS 3 POINTS AND WINS!</h1>"; 
        document.body.appendChild(restartbutton);
     }
    if (!playerOneWon && !hasWon && gameStarted){
        playerTwoScore++;
        hasWon = true;
        playerTwoWon = true;
        nextround.style.visibility = 'visible';
        document.getElementById('win').innerText = 'PLAYER TWO HAS CAUGHT PIKACHU!' + playerTwoScore
        //document.body.innerHTML = "<h1>PLAYER TWO CAUGHT PIKACHU</h1>";
        audio.pause();
        endmusic.play();
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        document.getElementById('poke').style.display = 'none';
     }
    if (!gameStarted && !earlyFinish){
        playerOneScore++;
        alert('Two used Pokeball too early! Player one wins!');
        earlyFinish = true;
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        nextround.style.visibility = 'visible';
    } 
}

let restart = (event) => {
    event.stopPropagation();
    location.reload();
}

let nextroundact = (event) => {
    console.log(playerOneScore);
    console.log(playerTwoScore);
    event.stopPropagation();
    nextround.style.visibility = 'hidden';
    document.getElementById('prepare').style.display = 'none';
    document.getElementById('playerone').style.display = 'none';
    document.getElementById('playertwo').style.display = 'none';
    hasWon = false;
    gameStarted = false;
    playerOneWon = false;
    playerTwoWon = false;
    earlyFinish = false;
    startDelay = (Math.floor(Math.random()*6000)+2000);
    appear.pause();
    audio.pause();
    endmusic.pause();
    theme.play();
    document.body.onkeyup = null;
    document.getElementById('win').innerText = ''
    gameTimer();
}

let startbutton = document.getElementById('start');
startbutton.addEventListener('click', gameTimer);

let x = document.createElement("IMG");
x.setAttribute("src", "restart.png");

let nextimage = document.createElement("IMG");
nextimage.setAttribute("src", "nextround.png");


let restartbutton = document.createElement('Button');
restartbutton.addEventListener('click', (e) => restart(e));
restartbutton.appendChild(x);

let nextround = document.createElement('Button');
nextround.addEventListener('click', (e) => nextroundact(e));
nextround.appendChild(nextimage);
document.body.appendChild(nextround);
nextround.style.visibility = 'hidden';



//restartbutton.style.top = '80%';
//restartbutton.style.left = '45%';