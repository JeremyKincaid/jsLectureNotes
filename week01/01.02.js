// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

var name1 = "Jeremyyy";
var name2 = "Deniseeeee";

console.log(name1.length);
console.log(name2.length);

function nameCompare(x,y){
    var diff = x.length - y.length;

    if(x.length > y.length){
        console.log(`${x} has a longer name than ${y} by ${Math.abs(diff)}`);
    }
    else if(x.length < y.length){
        console.log(`${x} has a shorter name than ${y} by ${Math.abs(diff)}`);
    }
    else{
        console.log("IT'S A TIE!!!!")
    }
}

nameCompare(name1, name2);

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let coltsPlayer = {
    name : "TY Hilton",
    number : 13,
    position : "Wide Receiver",
    active : false,
    stats : { 
        touchdowns: 46, 
        allPurposeYards: 9258}
}

console.log(typeof coltsPlayer.name)

let value = coltsPlayer.stats.allPurposeYards;

if (typeof value === 'string') {
    console.log('this value is a string');
} else if (typeof value === 'number') {
    console.log('this value is a number');
} else if (typeof value === 'boolean') {
    console.log('this value is a boolean');  
} else if (typeof value === 'object') {
    console.log('this value is an object');
} else {
    console.log('WHAT ARE YOU!?!?');
}

