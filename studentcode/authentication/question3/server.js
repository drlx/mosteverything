let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

let body = fs.readFileSync("./html.txt").toString();

app.get("/", (req, res) => {
  res.send(body);
});

let users = JSON.parse(fs.readFileSync("./users.txt"));

app.post("/signup", (req, res) => {
  users = JSON.parse(fs.readFileSync("./users.txt"));
  users[req.body.username] = {
    username: req.body.username,
    password: req.body.password
  };
  console.log(users);
  fs.writeFileSync("./users.txt", JSON.stringify(users));
  res.send("Thanks for signing up")
});

console.log(users)
app.post("/login", (req, res) => {
     if (req.body.username in users && users[req.body.username].password== req.body.password){
         res.send("Login Successful")
     }
     else {
         res.send("Error: Incorrect user or password")
     }

});

app.listen(3011, x => {
  console.log("LISTENING ON 3011");
});
