const express = require('express');
const app = express();

app.get('/', (rec,res) => {
    res.send('<h1>'+Math.random()+"</h1>")
})

app.listen(3000, () => {
    console.log("listening on 3000")
}) 