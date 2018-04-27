let express = require('express');
let app = express();
let fs = require('fs');

let str=''
for (let i=0; i<100;i++){
str = str+i+"\n"
}

fs.writeFileSync('./numbers.txt', str)


app.listen(3010, () => {
    console.log("Listening on 3010")
})