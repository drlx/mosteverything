const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.raw({type: "*/*"}))


app.post('/test', (req,res) => {
let obj = JSON.parse(req.body);

console.log(obj)

if(obj.username === 'foo' && obj.password === 'bar'){
    res.send("SUCCESS")
}
else {
    res.send("FAILURE")
}
})


app.listen(3005, () => {
    console.log("LISTENING ON 3005")
})