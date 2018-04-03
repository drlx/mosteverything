var assert = require('assert');

// we need 5 test cases. 
let inputs = [
'Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam',
'Make this function return the input string wrapped to 40 characters per line. ',
'This means youll have to insert a newline character after every 40 characters in the input string. ',
'Debugger listening on ws://127.0.0.1:6646/f86f97d4-32eb-4ce5-9c62-73621fb94112',
'Error: You do not have enough test cases'
]

let outputs = [
'Lorem ipsumos dolor sit amet consectetur \nadipisicing elit. Magni quisquam',
'Make this function return the input strin\ng wrapped to 40 characters per line. ',
'This means youll have to insert a newline\ncharacter after every 40 characters in \nthe input string. ',
'Debugger listening on ws://127.0.0.1:6646\n/f86f97d4-32eb-4ce5-9c62-73621fb94112',
'Error: You do not have enough test cases'
]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {
var split = str.split('');
var newarr = [];
for (i=0;i<split.length;i++){
    newarr.push(split[i]);
    if (i > 0 && i%40 == 0){
        if (split[i+1] == ' '){
        split[i+1] = ''
        }
   newarr.push('\n');
 }
} 
newarr = newarr.join('');
console.log(newarr);
return newarr;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

