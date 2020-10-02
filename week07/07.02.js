/*
*********
ARRAY/OBJECT DESTRUCTURING
*********
    -destructuring allows you to unpack values from arrays, or even properties from objects, into distinct variables.
        -destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sourced variable (array/object)
*/

const fullName = ['Zach', 'Maynard'];

const firstName = fullName[0];
const lastName = fullName[1];

console.log(firstName, lastName);

const [firstName, lastName] = fullName;
console.log(firstName, lastName);

/*
    -REST OPERATOR or REST SYNTAX
        -rest syntax looks exactly like the spread syntax
            -in a way, rest syntax is the exact opposite of spread syntax. Spread syntax "expands an array into a list of standalone elements, while the rest syntax collects multiple elements and "condenses" them into a single element
*/

const fullName = ['Zach', 'Maynard', 'Mr', { month: 12, date: 18, year: 1992 }, 'testOne', 2, 'test3', 4, true, false];
const [firstName, lastName, ...otherInfo] = fullName;

console.log(firstName);
console.log(lastName);
console.log(otherInfo);

const fullName = ['Zach', 'Maynard', 'Mr', { month: 12, date: 18, year: 1992 }, 'testOne', 2, 'test3', 4, true, false];
const [firstName, lastName, , , ...testData] = fullName;

console.log(firstName);
console.log(lastName);
console.log(testData);

//rest operator MUST be the last element defined when using destructuring

// OBJECT DESTRUCTURING

const user = {
    username: 'testuser',
    is_verified: true
}

const {username, is_verified} = user;

console.log(username);
console.log(is_verified);

const metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-USdocs/Tools/Scratchpad'
};

let {
    title: englishTitle, //renamed
    translations: [
        {
            title: localeTitle //renamed
        }
    ]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);

const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (let { name: n, family: { father: f } } of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}
