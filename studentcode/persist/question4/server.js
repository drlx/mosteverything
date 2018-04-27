let express = require('express');
let app = express();
let fs = require('fs');

// let str=''
// for (let i=0; i<10;i++){

// num = Math.floor(Math.random()*100)+1

// str = str+num+"\n"
// }

// fs.writeFileSync('./numbers.txt', str)

app.listen(3010, () => {
    console.log("Listening on 3010")
})

let nums = fs.readFileSync('./numbers.txt').toString().split('\n')

console.log(nums)

nums.pop(nums.length-1)

nums.reverse()

let newstr = ''

nums.forEach(x =>{
    newstr = newstr+x+'\n'
})
fs.writeFileSync('./reversednums.txt', newstr)

console.log(nums)

fs.readFileSync('./reversednums.txt'.toString())