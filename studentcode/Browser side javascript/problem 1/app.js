var game = document.getElementById('game');
var hasWon = false;
var win = () => {
    hasWon = true;
    alert('You Won!');
    game.removeEventListener('click',win);
}
var lost = () => {
    if(!hasWon){
    alert('You Lost :(');
    game.removeEventListener('click',win);
    }
}



game.addEventListener('click',win);

setTimeout(lost,1000);