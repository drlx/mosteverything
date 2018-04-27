const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let body = `
<form action="/submitForm" method="POST">
  username:<br>
  <input type="text" name="username"><br>
  password:<br>
  <input type="text" name="password"><br>
  repeat password:<br>
  <input type="text" name="repeatPassword"><br>
  <input type="submit">
</form>
`

app.get('/', (req,res) => {
    res.send(body);
})

app.post('/submitForm', (req,res) => {
  if (req.body.username.toString().length > 0
      &&req.body.password.toString() > 0
      && req.body.repeatPassword.toString() > 0
      && req.body.password.toString() ===
      req.body.repeatPassword){
          console.log("SUCCESS")
      }
   else {
       console.log("FAILED")
   }
})

app.listen(3007, () => {
    console.log("LISTENING ON 3007")
})