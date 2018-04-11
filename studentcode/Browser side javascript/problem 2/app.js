var game = document.getElementById('game');
var hasWon = false;
var win = () => {
    hasWon = true;
    alert('You Won!');
    game.removeEventListener('click', win);
    document.body.onkeyup = null;
}
var lost = () => {
    if (!hasWon) {
        alert('You Lost :(')
        game.removeEventListener('click', win);
        document.body.onkeyup = null;
    };
};
var gameStart = () => {
    var startTime = (Math.random() * 2000) + 1000;
    setTimeout(playGame, startTime);
}
var playGame = () => {
    document.getElementById('game').innerHTML = "GAME START!";
    game.addEventListener('click', win);
    document.body.onkeyup = function (e) {
        if (e.keyCode == 32 & !hasWon) {
            win();
        }
    }
    setTimeout(lost, 500);
}



gameStart();
