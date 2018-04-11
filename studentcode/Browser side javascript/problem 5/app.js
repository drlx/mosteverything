var button = document.createElement('Button');
button.innerText = "CLICK FAST!";
var game = document.getElementById('game');
var hasWon = false;


var restart = () => {
    hasWon = false;
    restartbutton.remove();
    gameStart();

}

var win = () => {
    hasWon = true;
    alert('You Won!');
    button.removeEventListener('click', win);
    document.body.removeEventListener('click', lost);
    document.body.appendChild(restartbutton);
    button.remove();
    
}
var lost = () => {
    document.body.removeEventListener('click', lost);
    if (!hasWon) {
        alert('You Lost :(')
        button.removeEventListener('click', win);
        document.body.removeEventListener('click', lost);
        document.body.appendChild(restartbutton);
        button.remove();
        hasWon = true;
    };
};
var gameStart = () => {
    startbutton.remove();
    var startTime = (Math.random() * 2000) + 1000;
    setTimeout(playGame, startTime);
}
var playGame = () => {
   document.body.appendChild(button);
   button.style.top = Math.floor((Math.random() * 90) + 1) + "%";
   button.style.left = Math.floor((Math.random() * 90) + 1) + "%"; 
   button.addEventListener('click', win);
   document.body.addEventListener('click', lost);
   setTimeout(lost, 1500);
}

var startbutton = document.getElementById('start');
startbutton.addEventListener('click',gameStart);


var restartbutton = document.createElement('Button');
restartbutton.innerText = "RESTART?";
restartbutton.addEventListener('click',restart);
restartbutton.style.top = '45%';
restartbutton.style.left = '45%';
