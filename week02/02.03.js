/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression. 
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
    - functions without names are known as anonymous functions
*/

//FUNCTION DECLARATION

function sayHello() {
    console.log('hi');
}

sayHello; //won't run. Parantheses are what tells the function to run
sayHello(); //function invocation, or function call

// FUNCTION EXPRESSION

let greetings = function () { // anonymous function
    console.log('hello');
}

greetings();

/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.
    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) { //husky is the parameter
    console.log(`My dog's name is ${husky}`);
}

myDog('Luna'); // 'Luna' is the argument, or the value we're passing to the parameter of husky

let pet = myDog; // notice we're not calling, or invoking, the function of myDog. We are assigning the function of myDog to a variable named pet. I don't want the function to run, I just want to assign it to the variable of pet. This is known as a function reference. The variable of pet is referring to the function of myDog

pet(); // this will run the function, but since we did not include an argument, no value is assigned to the parameter of husky
pet('Luna');
pet('Mira');

//  MULTIPLE PARAMETERS AND ARGUMENTS

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    if (smallHusky === undefined || bigHusky === undefined || borderCollie === undefined) {
        console.log('no arguments passed')
    } else {
        console.log(`my dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);
    }
}

allMyDogs();
allMyDogs('Mira', 'Luna', 'Charlie'); // the arguments we pass into our function call are assigned by position, or by order. First argument gets assigned to first parameter, etc
//allMyDogs('Peyton', 'Jonathan', 'Jessica');

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three) {
    // console.log(one, two, three);
    let totalWeight = one + two + three;
    console.log(totalWeight);
    let average = Math.round(totalWeight / 3); //Math.round rounds the value to the nearest integer

    return average; //can also use Math.round() here
}

let averageWeight = calculator(15, 60, 55); // since we're returning a value from the function, we need a new variable to capture the return value. Then, when we invoke, or call the calculator function - the value that we return from that function is the value that's assigned to the averageWeight variable
console.log(`My dogs weigh an average of ${averageWeight} lbs`);

//A0. arrow functions

function func0 (a, b) {
    return a + 2 * b;
}

const func1 = function (a, b) {
    return a + 2 * b;
}

// concise-body arrow function
let f = (x) => x + 5;

console.log(f(40));

// block-body arrow function
let g = (x) => {
    console.log(x)
    return x + 6;
};

console.log(g(7));


const f0 = (x) => 3 * x;

const f1 = (x) => {
    return 3 * x2;
}

let arr = [0,1,2,3,4,5,6,7,8,9];

// I want: [0, 3, 6, 9, ...]

function threeTimes (x) {
    return 3 * x;
}

console.log(arr.map(x => 3 * x));

const averageThree = (x, y, z) => Math.round((x + y + z) / 3);

console.log(averageThree(46, 17, -2));



const func = x => (() => 3 * x);

console.log(func(4)());

//1. building up expressions

const returnFirstArg = (x, y) => x;
const returnSecondArg = (x, y) => y;

const returnThree = (x) => 3;
const returnFalse = (x) => false;

const multiplyNumbers = (x, y) => returnThree((x + 3) * y);
let v = returnFirstArg(4, 5);
console.log(v);

const addToArray = (x, y) => [x, y];

const nameJoiner = (first, middle, last) => `${last}, ${first} ${middle}`;

console.log(`Hi, I am ${nameJoiner('Eli', 'T.', 'Drumm')}`);



