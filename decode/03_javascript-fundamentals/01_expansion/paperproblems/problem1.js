function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
console.log('problem one',square(decrement(square(decrement(3)))))

var x = decrement(3);

var y = square(x);

var z = decrement(y);

var w = square(z);

console.log('problem one',w);

// #2
console.log('problem two', decrement(decrement(square(square(3)))));

var a = square(3);

var b = square(a);

var c = decrement(b);

var d = decrement(c);

console.log('problem two', d);


// #3
console.log('problem three',duplicateString(reverseString("hello")))

var aa = reverseString('hello');

var bb = duplicateString(aa);

console.log('problem three', bb);

// #4
console.log('problem four', reverseString(duplicateString(duplicateString("foo"))))

var ww = 'foo'

var zz = duplicateString(ww);

var yy = duplicateString(zz);

var xx = reverseString(yy);

console.log('problem four',xx);
