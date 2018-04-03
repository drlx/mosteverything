var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [[1,2,3,4,5],[1,2,3,4,5]],
  [[1,2,3,4,5],[6,7,8,9]],
  [[1,2,3,4,5],[5,4,2,1,9]],
  [[undefined,2,5],['test',4,7,8]],
  [[1,2,3,4,5],[8,8,8,4,8]]
]

let outputs = [
  [1,2,3,4,5],
  [],
  [1,2,4,5],
  undefined,
  [4]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr1) {
var temp = arr1;
var arr1 = temp[0];
var arr2 = temp[1];

var same = [];
for (i=0;i<arr1.length;i++){
  for (n=0;n<arr2.length;n++){
      if (typeof arr1[i] != 'number'){
          return undefined
      }
      else if (arr1[i] == arr2[n]){
          same.push(arr1[i]); 
      }
  }

}
console.log(same);
return same;
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

