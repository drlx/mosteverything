const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.raw({type: "*/*"}))



app.post('/test', (req,res) => {
    try {
    JSON.parse(req.body)
    res.send("SUCCESS");
    }
    catch(err){
    res.send("FAILURE");
    }
}) 


app.listen(3004, () => {
    console.log('LISTENING ON 3004')
})
