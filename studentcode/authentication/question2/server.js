let express = require('express');
let app = express();
let bodyParser = require('body-parser')
let fs = require('fs')

app.use(bodyParser.urlencoded({extended: true}))


// <form action="/" method="POST">
//   favorite pet:<br>
//   <input type="text" name="pet"><br>
//   <input type="submit">
// </form>


let body = fs.readFileSync('./favpet.txt').toString()

app.get('/', (req,res) => {
res.send(body)
})

app.post('/', (req,res) => {
console.log(req.body.pet)
res.send("form submitted")
fs.writeFileSync('./favpet.txt', req.body.pet)
body = "<h1> Favorite pet: "+(fs.readFileSync('./favpet.txt')+"</h1>")
})


app.listen(3011, x =>{
    console.log("LISTENING ON 3011")
})