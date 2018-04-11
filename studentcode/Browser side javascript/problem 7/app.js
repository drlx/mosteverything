var winCounter = 0;
var buttonAmount = (Math.floor(Math.random()*10)+1);
var winTime = 2000 + (buttonAmount*1000 * 0.4);
var arr = [];
var hasWon = false;

var createButtons = (number, buttonText) => {
    for (i = 0; i < number; i++) {
        arr[i] = document.createElement('button');;
    }
    console.log(arr);
    arr.forEach(x => {
        x.innerText = buttonText;
    });
    arr.forEach(x => {
        document.body.appendChild(x);
    });
    for (n=0;n<arr.length;n++){
        arr[n].className = 'gameButton';
        arr[n].id = 'button' + n;
    };
}

var positionGameButtons = () => {
    for (i=0;i<arr.length;i++){
        arr[i].style.top = Math.floor((Math.random() * 90) + 1) + "%";
        arr[i].style.left = Math.floor((Math.random() * 90) + 1) + "%";
    };
}

var addListeners = () => {
    for (let i=0;i<arr.length;i++){
        arr[i].addEventListener('click', (e) => winCondition(arr[i],e));
        console.log(arr[i]);
    };
}

var winCondition = (button, event) => {
    console.log(button);
    console.log(event);
    event.stopPropagation();
    winCounter++;
    button.remove();
    if(winCounter >= buttonAmount){
        alert('You Won!');
        hasWon = true;
        document.body.appendChild(restartbutton);
    }
}

var lossCondition = () => {
    if (!hasWon) {
        alert('You Lost :(')
        document.body.appendChild(restartbutton);
        removeAll();
    };
}

var initializeGame = () => {
    createButtons(buttonAmount,'CLICK!');
    positionGameButtons();
    addListeners();
    document.body.addEventListener('click', lossCondition);
    setTimeout(lossCondition, winTime);
}

var gameTimer = () => {
    startbutton.remove();
    var startTime = (Math.random() * 2000) + 1000;
    setTimeout(initializeGame, startTime);
}

var restart = (event) => {
    event.stopPropagation();
    location.reload();
}

var removeAll = () => {
    arr.forEach(x => {
        x.remove();
    });
}

var startbutton = document.getElementById('start');
startbutton.addEventListener('click',gameTimer);

var restartbutton = document.createElement('Button');
restartbutton.innerText = "RESTART?";
restartbutton.addEventListener('click', (e) => restart(e));
restartbutton.style.top = '45%';
restartbutton.style.left = '45%';