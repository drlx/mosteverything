const express = require('express');
const app = express();

let body = `
<html>
    <body>
        <div id='somediv'></div>
        <script>document.getElementById("somediv").innerText="success!";</script>
    </body>
</html>
`

app.get('/', (req,res) => {
    res.send(body)
})


app.listen(3008, () => {
    console.log("LISTENING ON 3008")
})