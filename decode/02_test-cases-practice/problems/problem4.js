var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello",4],
  ["", 2],
  ["hjfhkwfb",7],
  ["ghj",10],
  ["the",2],
  ["1234",3],
  ["hjfuhwq",11],
  ["wfjhw",2]
]

let outputs = [
  "o",
  undefined,
  "b",
  undefined,
  "e",
  "4",
  undefined,
  "j"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr, number) {
    var split = arr.split("");
    if (split.length > number){
      return split[number];
    }
    else {
     return undefined;
    }
}

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
