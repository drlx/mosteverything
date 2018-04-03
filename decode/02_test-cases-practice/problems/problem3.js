var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  ["test","notnumber"],
  [678,8387],
  [1,1],
  ['',''],
  [,'othertest']
]

let outputs = [
  6,
  0,
  undefined,
  9065,
  2,
  undefined,
  undefined
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
if (typeof (arr[0]+arr[1]) === typeof (1) ){
return arr[0] + arr[1];
}
else 
{
return undefined;
}



}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
