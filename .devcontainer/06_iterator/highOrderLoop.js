//High Order Loop------
// 1- "for of" Loop......
/*
const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
    
}

const arr1 = ['a', 'b', 'c', 'd', 'e', 'f']

for (const char of arr1) {
    // console.log(char);
    
}

const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(greet);
    // console.log(`Each char is: ${greet}`)
    
}

//2- "MAP"......

const map1 = new Map()
map.set ('IN', "India")
map.set ('USA', "united state of America")
map.set ('JPN', "Japan")
map.set ('POK', "Pakistan")
// map.set ('IN', "India")

// console.log(map1);

//"MAP" using in "for of" Loop.....
const map = new Map()
map.set ('IN', "India")
map.set ('USA', "united state of America")
map.set ('JPN', "Japan")
map.set ('POK', "Pakistan")

for (const itme of map) {
    // console.log(itme);
    // This code is not iterator for "MAP" condition using "for of" loop
}

// 3- for "Object" condition using "for of" loop.......

const myObject = {
    'game1': "GFG",
    'game2' : "Free Fire",
    'game3' : "Ludo",
    'game4' : "Cricket"
}

for (const [key, value] of myObject) {
    // console.log(key, ':', value);
    // This code is not iterator for "OBJECT" condition using "for of" loop
}

*/

// But, Ydi ise code ko "for in" Loop ke use krke compile kraye to error nhi aaye ga.
//4-"for in" Loop  condition "Object" ......

const element = [2, 4, 6, 4, 7, 8, 9]
for (const num in element) {
    // console.log(num);
    
}

const charValue = ['a', 'b', 'c', 'd', 'e', 'f']
for (const char in charValue) {
    // console.log(char);
    
}

const charValue1 = ['a', 'b', 'c', 'd', 'e', 'f']
for (const key in charValue) {
    // console.log(`${key} value is: ${charValue1 [key]}`);
    
}
// Object form.....
const myObject = {
    'js' : "javaScript",
    'py' : "python",
    'jv' : "java",
    'cpp' : "c++"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} value is: ${myObject [key]}`);
    
}

// ?? Can i using "for in" Loop in array form......

const arr = ["js", "py", "rb", "cpp", "j"]

for (const key in arr) {
    // console.log(arr[key]);
    
}

// "forEach" Loop, it is mostly use loop condition
// Syntax using function - function Name(){}..
// syntax using forEach - forEach(function() {})......

// const array = ["js", "py", "rb", "cpp", "j", "css"]
// array.forEach(element => {
//     console.log(element);
    
// });

// const array = ["js", "py", "rb", "cpp", "j", "css"]
// array.forEach(function (element) {
//     console.log(element);
    
// });

const coding = ["python", "JavaScript", "Ruby", "Node Js", "SQL"]
coding.forEach((element) => {
    // console.log(element);
    
});

function dataValue(element) {
    // console.log(element);
    
}
// coding.forEach(dataValue)

//Syntax - [{}, {}, {}, {}], in this form

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "Hyper Text Transfer Protocol",
        languageFileName : "html"
    },
]
myCoding.forEach(element => {
    // console.log(element.languageFileName);
    console.log(element.languageName);
    
});