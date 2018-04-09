// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...

function removeEvens(lst) {

    var newlst = lst.filter(x=> x%2 === 1)
    return newlst;
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
}

function keepLong(lst) {
    newlst = lst.filter(x => x.length > 5)
    return newlst;
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
}

function greet(lst) {
    newlst = lst.map(x => "Hello " + x)
    return newlst
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
}

function greetLong(lst) {
    
    filtlst = lst.filter(x => x.length >= 4)
    newlst = filtlst.map(x => "Hello "+x)
    return newlst
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
}

function allLong(lst) {
    return lst.every(x=> x.length>4?true:false)
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
}

module.exports = {removeEvens, keepLong, greet, greetLong, allLong};
