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

var timer;

let timeout = () => {
    timer = setTimeout(gameStart, startDelay);
}

let stoptime = () => {
    clearTimeout(timeout);
}

let gameStart = () => {
    if (!earlyFinish){
    document.getElementById('prepare').style.display = 'none';
    document.getElementById('poke').style.display = 'block';
    gameStarted = true;
    bang();
}
}

let gameTimer = () => {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('playeronescore'+playerOneScore).style.display = 'block';
    document.getElementById('playertwoscore'+playerTwoScore).style.display = 'block';
    document.getElementById('prepare').style.display = 'block';
    document.getElementById('playerone').style.display = 'block';
    document.getElementById('playertwo').style.display = 'block';
    //audio.currentTime = 0
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
    timeout();
} 

let playerOneCondition = () => {
    console.log('playeroneclick');

    if (!playerTwoWon && !hasWon && gameStarted){
        playerOneScore++;
        hasWon = true;
        playerOneWon = true;
        nextround.style.visibility = 'visible';
        document.getElementById('playeronescore0').style.display = 'none';
        document.getElementById('playertwoscore0').style.display = 'none';
        document.getElementById('playeronescore1').style.display = 'none';
        document.getElementById('playertwoscore1').style.display = 'none';
        document.getElementById('playeronescore2').style.display = 'none';
        document.getElementById('playertwoscore2').style.display = 'none';
        document.getElementById('playeronescore3').style.display = 'none';
        document.getElementById('playertwoscore3').style.display = 'none';
        document.getElementById('playeronescore'+playerOneScore).style.display = 'block';
        document.getElementById('playertwoscore'+playerTwoScore).style.display = 'block';
        document.getElementById('win').innerText = 'PLAYER ONE HAS CAUGHT PIKACHU!'
        //document.body.innerHTML("<h1>PLAYER ONE CAUGHT PIKACHU!</h1>"));
        audio.pause();
        endmusic.currentTime = 0
        endmusic.play();
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        document.getElementById('poke').style.display = 'none';
        if (playerOneScore > 2){
            document.body.innerHTML = "<h1>PLAYER ONE HAS 3 POINTS AND WINS!</h1>"; 
            document.body.appendChild(restartbutton);
         }
     }
    if (!gameStarted && !earlyFinish){
        document.getElementById('playeroneearly').style.display = 'block';
        playerTwoScore++;
        earlyFinish = true;
        document.getElementById('playeronescore0').style.display = 'none';
        document.getElementById('playertwoscore0').style.display = 'none';
        document.getElementById('playeronescore1').style.display = 'none';
        document.getElementById('playertwoscore1').style.display = 'none';
        document.getElementById('playeronescore2').style.display = 'none';
        document.getElementById('playertwoscore2').style.display = 'none';
        document.getElementById('playeronescore3').style.display = 'none';
        document.getElementById('playertwoscore3').style.display = 'none';
        document.getElementById('playeronescore'+playerOneScore).style.display = 'block';
        document.getElementById('playertwoscore'+playerTwoScore).style.display = 'block';
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        nextround.style.visibility = 'visible';
        if (playerTwoScore > 2){
            document.body.innerHTML = "<h1>PLAYER TWO HAS 3 POINTS AND WINS!</h1>"; 
            document.body.appendChild(restartbutton);
         }
    }   
}

let playerTwoCondition = () => {
    console.log('playertwoclick');

    if (!playerOneWon && !hasWon && gameStarted){
        playerTwoScore++;
        hasWon = true;
        playerTwoWon = true;
        nextround.style.visibility = 'visible';
        document.getElementById('playeronescore0').style.display = 'none';
        document.getElementById('playertwoscore0').style.display = 'none';
        document.getElementById('playeronescore1').style.display = 'none';
        document.getElementById('playertwoscore1').style.display = 'none';
        document.getElementById('playeronescore2').style.display = 'none';
        document.getElementById('playertwoscore2').style.display = 'none';
        document.getElementById('playeronescore3').style.display = 'none';
        document.getElementById('playertwoscore3').style.display = 'none';
        document.getElementById('playeronescore'+playerOneScore).style.display = 'block';
        document.getElementById('playertwoscore'+playerTwoScore).style.display = 'block';
        document.getElementById('win').innerText = 'PLAYER TWO HAS CAUGHT PIKACHU!'
        //document.body.innerHTML = "<h1>PLAYER TWO CAUGHT PIKACHU</h1>";
        audio.pause();
        endmusic.currentTime = 0
        endmusic.play();
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        document.getElementById('poke').style.display = 'none';
        if (playerTwoScore > 2){
            document.body.innerHTML = "<h1>PLAYER TWO HAS 3 POINTS AND WINS!</h1>"; 
            document.body.appendChild(restartbutton);
         }
     }
    if (!gameStarted && !earlyFinish){
        playerOneScore++;
        document.getElementById('playertwoearly').style.display = 'block';
        earlyFinish = true;
        document.getElementById('playeronescore0').style.display = 'none';
        document.getElementById('playertwoscore0').style.display = 'none';
        document.getElementById('playeronescore1').style.display = 'none';
        document.getElementById('playertwoscore1').style.display = 'none';
        document.getElementById('playeronescore2').style.display = 'none';
        document.getElementById('playertwoscore2').style.display = 'none';
        document.getElementById('playeronescore3').style.display = 'none';
        document.getElementById('playertwoscore3').style.display = 'none';
        document.getElementById('playeronescore'+playerOneScore).style.display = 'block';
        document.getElementById('playertwoscore'+playerTwoScore).style.display = 'block';
        document.getElementById('prepare').style.display = 'none';
        document.getElementById('playerone').style.display = 'none';
        document.getElementById('playertwo').style.display = 'none';
        nextround.style.visibility = 'visible';
        if (playerOneScore > 2){
            document.body.innerHTML = "<h1>PLAYER ONE HAS 3 POINTS AND WINS!</h1>"; 
            document.body.appendChild(restartbutton);
         }
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
    stoptime();
    nextround.style.visibility = 'hidden';
    document.getElementById('playertwoearly').style.display = 'none';
    document.getElementById('playeroneearly').style.display = 'none';
    document.getElementById('prepare').style.display = 'none';
    document.getElementById('playerone').style.display = 'none';
    document.getElementById('playertwo').style.display = 'none';
    document.getElementById('playeronescore0').style.display = 'none';
    document.getElementById('playertwoscore0').style.display = 'none';
    document.getElementById('playeronescore1').style.display = 'none';
    document.getElementById('playertwoscore1').style.display = 'none';
    document.getElementById('playeronescore2').style.display = 'none';
    document.getElementById('playertwoscore2').style.display = 'none';
    document.getElementById('playeronescore3').style.display = 'none';
    document.getElementById('playertwoscore3').style.display = 'none';
    hasWon = false;
    gameStarted = false;
    playerOneWon = false;
    playerTwoWon = false;
    earlyFinish = false;
    startDelay = (Math.floor(Math.random()*6000)+2000);
    appear.pause();
    audio.pause();
    endmusic.pause();
    //theme.currentTime = 0
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