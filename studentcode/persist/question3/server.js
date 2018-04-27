let express = require('express');
let app = express();
let fs = require('fs');

let str=''
for (let i=0; i<10;i++){

num = Math.floor(Math.random()*100)+1

str = str+num+"\n"
}

fs.writeFileSync('./numbers.txt', str)

let nums = fs.readFileSync('./numbers.txt').toString().split("\n")

console.log(nums)

let sum = 0

nums.forEach(x =>{
    if (!!x){
    sum = sum+ parseInt(x);}
})

console.log("THE SUM IS", sum)

app.listen(3010, () => {
    console.log("Listening on 3010")
})