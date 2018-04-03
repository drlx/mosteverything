var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [1,1,1,1,1],
    [2,2,2],
    [1,50,10,20,1,1],
    [1,'',1,'test',1],
    []
  
]

let outputs = [
  5,
  6,
  83,
  3,
  0
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    var result = 0;
    for(i=0;i<arr.length;i++){
    if (typeof arr[i] == 'number')
        result += arr[i];
    }
    console.log(result);
    return result;
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

