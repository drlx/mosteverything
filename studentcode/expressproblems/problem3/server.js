const express = require('express');
const app = express();

app.get('/test', (req,res) => {
    res.send(req.query.foo);
})




app.listen(3002, () => {
    console.log('listening on 3002')
})