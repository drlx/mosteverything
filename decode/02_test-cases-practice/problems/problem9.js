var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  'the longest word is longword',
  'i am long',
  'testing one two three',
  'the the and',
  ''
]

let outputs = [
  'longword',
  'long',
  'testing',
  'and',
  ''
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    var arr = str.split(" ");
    console.log(arr);
    var longest = 0;
    var longword = arr[0];
    for(i=0;i<arr.length;i++){
    //console.log('longest for',str,longest);
    //console.log('longword for',str,longword);
    if (arr[i].length >= longest){
        longest = arr[i].length;
        longword = arr[i];
    }
    }
console.log('result is',longword);
return longword;

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

