var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    'ALL CAPS TEST',
    'no caps test',
    'Already Proper Test',
    'ABCdefgHIJ',
    'many DIFFERENT CaSes HERE'
  
]

let outputs = [
  'All Caps Test',
  'No Caps Test',
  'Already Proper Test',
  'Abcdefghij',
  'Many Different Cases Here'
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    //Make all lowercase 
    str = str.toLowerCase();
    console.log('I made str lower case -->', str);
    //Split string into words
    var words = str.split(" ");
    //console.log('I split str into words --->',words);
    for (i=0;i<words.length;i++){
    var letters = words[i].split('');
    letters[0] = letters[0].toUpperCase();
    letters = letters.join('');
    words[i] = letters;
    }
    str = words.join(" ");
    console.log('result ---> ', str)
    return str;

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

