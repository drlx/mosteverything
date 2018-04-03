var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ['foo', 3],
  ['fo', 1],
  ['fud', 4],
  ['boo', 5],
  [undefined, 2],
  ['foo', 0],
  ['foo', -2],
]

let outputs = [
  'foofoofoo',
  'fo',
  'fudfudfudfud',
  'boobooboobooboo',
  undefined,
  '',
  ''

]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
  //console.log(arr)
  // Scenario 1 -- Normal
  if (typeof arr[0] === 'string' && arr[1] > 0) {
    var arrnew = arr[0];
    for (i = 1; i < arr[1]; i++) {
      //console.log('before loop', arr[0]);
      arr[0] += arrnew;
      //console.log('after loop', arr[0]);
    }
    //console.log('returning', arr)
    return arr[0];
  }

  // Scenario 2 -- Not right format
  else if (typeof arr[0] !== 'string' || typeof arr[1] !== 'number') {
   // console.log('I am undefined', arr);
    return undefined;
  }

  else {
    //console.log('0 or negative')
    return '';
  }
  // Scenario 3 -- Everything Else
  console.log('_____')
  console.log(arr[0])
  console.log(arr[1])
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
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

