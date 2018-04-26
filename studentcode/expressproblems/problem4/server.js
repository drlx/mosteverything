const express = require('express');
const app = express();

let greater = ((foo,chair) => {
    if (foo>chair){
        return foo;
    }
    else {
        return chair
    }
})


app.get('/home', (req,res) => {
    res.send(greater(req.query.foo,req.query.chair))
})


app.listen(3003, () => {
    console.log("Listening on 3003")
}) 