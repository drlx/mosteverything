const a = require('express');

const app = a();

app.get('/hello', (req,res) => {
    res.send('<h1>HELLO</h1>');
})

app.listen(3001, () => console.log('LISTENING ON PORT 3001'))