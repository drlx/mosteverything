var winCounter = 0;
var buttonAmount = (Math.floor(Math.random()*10)+1);
var winTime = 1 + (buttonAmount * 0.4);

var createButtons = (number, buttonText) => {
    var arr = [];
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
    arr = document.getElementsByClassName('gameButton');
    for (i=0;i<arr.length;i++){
        arr[i].style.top = Math.floor((Math.random() * 90) + 1) + "%";
        arr[i].style.left = Math.floor((Math.random() * 90) + 1) + "%";
    };
}

var addListeners = () => {
    arr = document.getElementsByClassName('gameButton');
    for (i=0;i<arr.length;i++){
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
    }
}

createButtons(buttonAmount,'test');
positionGameButtons();
addListeners();