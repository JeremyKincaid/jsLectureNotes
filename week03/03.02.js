// SOME QUICK NOTES ON OBJECTS AND ARRAYS

let obj1 = {
    a: 0,
    b: 1
};

let obj2 = {
    a: 0,
    b: 1
};

console.log(obj1 === obj2);

obj2 = obj1;

obj2.a == 88;

console.log(obj1);

let arr1 = [4, 9, 33];

let arr2 = [4, 9, 33];

let empty = [];

function checkIfEmpty (arr) {
    return arr.length === 0;
}

console.log(checkIfEmpty(empty));

let str1 = 'mountain';

let str2 = 'mountain';

console.log(str1 === str2);

let str2 = str1;

console.log(str1);

function assign3ToB(obj) {
    obj.b = 3;
}

function assignKKToString (str) {
    str = 'King Kong';
    return str;
}

let obj = {
    a: 2
};

let str = 'Godzilla';

str = assignKKToString(str);

assign3ToB(obj);

console.log(obj);