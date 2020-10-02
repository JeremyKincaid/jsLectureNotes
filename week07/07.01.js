/*
    -SPREAD OPERATOR

        -the spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements.
        - denoted ...
*/

const fullName = ['Jeremy', 'Kincaid'];
// ...fullName // 'Jeremy', 'Kincaid'

const copiedFullName = [...fullName]; // 'Jeremy', 'Kincaid'
console.log(copiedFullName);

fullName.push('Mr');
console.log(fullName, copiedFullName);

// SPREAD OPERATOR AND NUMBERS

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.59];
// console.log(prices);
console.log(Math.min(prices));
console.log(Math.min(...prices));

// SPREAD OPERATOR AND OBJECTS

const persons = [{name: 'Zach', age: 27}, {name: 'Donavan', age: 24}];
const copiedPersons = [...persons];

persons.push({name: 'Anna', age:30});
persons[0].name = 'Zachary';
console.log(persons, copiedPersons);

/*
    -JS has 5 data types that are passed by value: boolean, null, undefined, string, number. These are known as primitive data types
        - if a primitive data type is assigned to a variable, we can think of that variable as containing the primitive value

        let x = 10
        let y = 'abc'
        let z = null

        // x contains 10, y contains 'abc', z contains null - all of these values are primitive data types

        VARIABLES   VALUES
        y           10
        y           'abc'
        z           null

        // when we assign the above variables to another variable using =, we copy the value to the new variable - and they are copied by value

        let a = x;
        let b = y;

        VARIABLES   VALUES
        y           10
        y           'abc'
        z           null
        a           10
        b           'abc'

        - JS has 3 data types that are copied/passed by reference: array, function, and object. These are all technically objects, so we'll refer to them collectively as objects.
            -variables that are assigned a non primitive data type are given a reference to that value. The reference points to the objects locatioin in memory - the variables don't actually contain the value
            - objects are created at a location on your computers memory. When we write arr = [], we've created an array in memory - what the variable arr receives as the value is the address (or location) of that array in memory.

            let arr = [];

            VARIABLES   VALUES      ADDRESS     OBJECTS
            arr         <#001>      #001        []

            array.push(1)

            VARIABLES   VALUES      ADDRESS     OBJECTS
            arr         <#001>      #001        [1]

            - when a reference type value or non premitive data type (arr, function, object) is copied to another variable using =, the address of that value is what's actually copied over as if it were primitive. Arrays, functions, and objects are copied by reference value, instead of a primitive value

            let reference = [1];
            let refCopy = reference;

            VARIABLES   VALUES      ADDRESS     OBJECTS
            reference   <#002>      #002        [1]
            refCopy     <#002>      

            -each variable now contains a reference to the same array. That means if we alter one of the variables, the other will see the same changes.
*/

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

console.log(x, y, z, a, b);

let arr = [];
console.log(arr);

arr.push(1);
console.log(arr);

let reference = [1];
let refCopy = reference;
console.log(reference, refCopy);

reference.push(2);
console.log(reference, refCopy);

//////////////////////////////////////////////////////////////////////

const persons = [{name: 'Zach', age: 27}, {name: 'Donavan', age: 24}];
const copiedPersons = [...persons];

persons.push({name: 'Anna', age:30});
persons[0].name = 'Zachary';
console.log(persons, copiedPersons);

// SPREAD OPERATOR AND AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY

const persons = [{name: 'Zach', age: 27}, {name: 'Donavan', age: 24}];
// if we want to avoid changing both the original and copied array, we would need to copy every object as well.
const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
})) //  since we're returning something in curly braces (object), we have to enclose it in parens so JS doesn't think it is the functions body.

persons.push({name: 'Anna', age: 30});
copiedPersons[0].name = 'Zachary';

console.log(persons, copiedPersons);