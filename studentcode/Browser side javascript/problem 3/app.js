var button = document.createElement('Button');
button.innerText = "CLICK FAST!";
var game = document.getElementById('game');
var hasWon = false;
var win = () => {
    hasWon = true;
    alert('You Won!');
    button.innerText = "GOOD JOB!";
    button.removeEventListener('click', win);
    document.body.removeEventListener('click', lost);
}
var lost = () => {
    if (!hasWon) {
        alert('You Lost :(')
        button.innerText = "TOO LATE";
        button.removeEventListener('click', win);
        document.body.removeEventListener('click', lost);
    };
};
var gameStart = () => {
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



gameStart();
