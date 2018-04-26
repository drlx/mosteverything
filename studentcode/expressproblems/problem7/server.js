const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

let body = `
<form action="/" method="POST">
  username:<br>
  <input type="text" name="username"><br>
  password:<br>
  <input type="text" name="password">
  <input type="submit">
</form>
`

app.get('/', (req,res) => {
    res.send(body);
})

app.post('/', (req,res) => {
    if(req.body.password.toString().length>=10 
    && req.body.username.toString().length>=10){
        return console.log("SUCCESS")
    }
    else{
        return console.log("FAILED")
    }
}) 

app.listen(3006, () => {
    console.log('listening on 3006')
})