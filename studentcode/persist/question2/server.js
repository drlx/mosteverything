let express = require('express');
let app = express();
let fs = require('fs');

let str=''
for (let i=0; i<10;i++){

num = Math.floor(Math.random()*100)+1

str = str+num+"\n"
}

fs.writeFileSync('./numbers.txt', str)


app.listen(3010, () => {
    console.log("Listening on 3010")
})