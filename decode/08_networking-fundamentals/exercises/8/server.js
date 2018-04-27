const express = require('express');
const app = express();
app.use(express.static('public'))


let body = `
<html>
    <head>
    <link rel="stylesheet" type="text/css" href="/css/mystyle.css">
    </head>
    <body>
        <div>funky CSS button</div>
    </body>
</html>

`
// let css = `
// div {
//     height:3em;
//     cursor: pointer;
//     width:auto;
//     max-width: 150px;
//     position:relative;
//     background:#069;
//     margin:2em auto;
//     color: #fff;
//     font-family: Arial, san-serif;
//     line-height:3em;
//     text-align:center;
//     text-shadow: 1px 1px 1px #111;  transition: all ease 0.3s;
//   }
//   div:before,
//   div:after {
//     content:'';
//     position:absolute;
//     border-radius:100%;
//     background:#069;
//     transition: all ease 0.3s;
//   }
//   div:before {
//     top:0px;
//     bottom:-1px;
//     left:-1px;
//     width:1em;
//     margin-left:-0.5em;
//     border-left: 2px solid #333;
//     box-shadow:150px 0 0 #069,1px 0 0px #069;
//   }
//   div:after {
//     left:-1px;
//     right:-1px;
//     height:1em;
//     border-top: 2px solid #333;
//     margin-top:-0.5em;
//       box-shadow:0 3em 0 0 #069, 0 0px 0px #069, inset 0px 1px 0 #fff, 0 3.5em 0 0 #ccc;
//   }
//   div:hover {
//     background: #09a;
//   }
//   div:hover:before {
//     background: #09a; 
//     box-shadow:150px 0 0 #09a,1px 0 0px #09a;
//   }
//   div:hover:after {
//     background: #09a;
//     box-shadow:0 3em 0 0 #09a, 0 0px 0px #09a, inset 0px 1px 0 #fff, 0 3.5em 0 0 #ccc; 
//   }
  
// `
// app.get('/mystyle.css', (req,res) => {
//     res.send(css);
// })

app.get('/', (req,res) => {
    res.send(body);
})

app.listen(3009, () => {
    console.log('LISTENING ON 3009')
})