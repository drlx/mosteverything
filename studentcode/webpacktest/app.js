import oneLinerJoke from 'one-liner-joke'

//var oneLinerJoke = require('one-liner-joke');



/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke().body;

document.getElementById('sketch').innerHTML = '<h1>'+getRandomJoke+'</h1>'
/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

//var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');


//export default oneLinerJoke;


