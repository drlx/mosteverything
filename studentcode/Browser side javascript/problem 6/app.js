
var button = document.createElement('Button');
button.innerText = "CLICK FAST!";
button.className = 'button';
var button2 = document.createElement('Button');
button2.innerText = "CLICK FAST!";
button2.className = 'button2';
var button3 = document.createElement('Button');
button3.innerText = "CLICK FAST!";
button3.className = 'button3';
var button4 = document.createElement('Button');
button4.innerText = "CLICK FAST!";
button4.className = 'button4';
var button5 = document.createElement('Button');
button5.innerText = "CLICK FAST!";
button5.className = 'button5';

var clickCount = 0;

var appendbuttons = () => {
   document.body.appendChild(button);
   button.style.top = Math.floor((Math.random() * 90) + 1) + "%";
   button.style.left = Math.floor((Math.random() * 90) + 1) + "%";
   document.body.appendChild(button2);
   button2.style.top = Math.floor((Math.random() * 90) + 1) + "%";
   button2.style.left = Math.floor((Math.random() * 90) + 1) + "%"; 
   document.body.appendChild(button3);
   button3.style.top = Math.floor((Math.random() * 90) + 1) + "%";
   button3.style.left = Math.floor((Math.random() * 90) + 1) + "%"; 
   document.body.appendChild(button4);
   button4.style.top = Math.floor((Math.random() * 90) + 1) + "%";
   button4.style.left = Math.floor((Math.random() * 90) + 1) + "%"; 
   document.body.appendChild(button5);
   button5.style.top = Math.floor((Math.random() * 90) + 1) + "%";
   button5.style.left = Math.floor((Math.random() * 90) + 1) + "%"; 
}

var addlisteners = () => {
    button.addEventListener('click', (e) => win(button, e));
    button2.addEventListener('click', (e) => win(button2, e));
    button3.addEventListener('click', (e) => win(button3, e));
    button4.addEventListener('click', (e) => win(button4, e));
    button5.addEventListener('click', (e) => win(button5, e));
}

var removeAll = () => {
    button.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    button5.remove();
}

var hasWon = false;

var restart = () => {
    clickCount = 0;
    hasWon = false;
    restartbutton.remove();
    removeAll();
    gameStart();
}

var win = (btn, event) => {
    event.stopPropagation();
    console.log(event);
    clickCount++;
    console.log(clickCount);
    btn.remove();
    if (clickCount >=5){
    hasWon = true;
    alert('You Won!');
    button.removeEventListener('click', win);
    document.body.removeEventListener('click', lost);
    document.body.appendChild(restartbutton);
    removeAll();
    }
}
var lost = () => {
    document.body.removeEventListener('click', lost);
    if (!hasWon) {
        alert('You Lost :(')
        button.removeEventListener('click', win);
        document.body.removeEventListener('click', lost);
        document.body.appendChild(restartbutton);
        removeAll();
        hasWon = true;
    };
};
var gameStart = () => {
    startbutton.remove();
    var startTime = (Math.random() * 2000) + 1000;
    setTimeout(playGame, startTime);
}
var playGame = () => {
   appendbuttons();
   document.body.addEventListener('click', lost);
   setTimeout(lost, 4000);
}

var startbutton = document.getElementById('start');
startbutton.addEventListener('click',gameStart);


var restartbutton = document.createElement('Button');
restartbutton.innerText = "RESTART?";
restartbutton.addEventListener('click',restart);
restartbutton.style.top = '45%';
restartbutton.style.left = '45%';
addlisteners();
