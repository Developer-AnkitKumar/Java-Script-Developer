// const coding = ["python", "JavaScript", "Ruby", "Node Js", "SQL"]

// coding.forEach((element) => {
    // console.log(element);
    
// });

// const coding = ["python", "JavaScript", "Ruby", "Node Js", "SQL"]

// const value = coding.forEach((element) => {
//     console.log(element);
//     return element;// ise bhi use krne pr value undefined hi aaye gi, iska mtlb ki forEach value return nhi krta hai.
// })
// console.log(value); // Value is return "Undefined"

//"Filter" ..........

const num = [1, 3, 2, 5, 4, 6, 7, 8]

// const value = num.filter( (num) => { // ydi maine scope lgaya to uske ander return complusury hai.
//     return num >= 4
// } )
// console.log(value); // Empty return.

const value = num.filter( (num) => num >= 4) // maine yha koi scope use hi nhi kiya hai
// console.log(value);

const myBook = [
    {
        title : "book one",
        genre : 'Fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : "book two",
        genre : 'Non-Fiction',
        publish : 1999,
        edition : 2008
    },
    {
        title : "book three",
        genre : 'History',
        publish : 1981,
        edition : 2006
    },
    {
        title : "book four",
        genre : 'History',
        publish : 1982,
        edition : 2006
    },
    {
        title : "book five",
        genre : 'Fiction',
        publish : 1980,
        edition : 2001
    },
    {
        title : "book six",
        genre : 'Polity',
        publish : 1975,
        edition : 2000
    },
    {
        title : "book seven",
        genre : 'History',
        publish : 1985,
        edition : 2001
    },
]

// const book = myBook.filter( (bk) => bk.genre === 'History' )
// console.log(book);
// const book = myBook.filter( (bk) => bk.publish === 1981 )
// console.log(book);
const book = myBook.filter( (bk) => {return bk.publish === 1981 })
// console.log(book);

// "Map".........

// const myNums = [1, 3, 2, 5, 4, 6, 7, 8]

// const newNums = myNums
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40 )

//                 console.log(newNums);

//"Reduce"............

const myNums = [1, 2, 3, 4]

// const newNums = myNums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(newNums);

const newNums = myNums.reduce( (acc, currVal) =>  acc + currVal, 0)

// console.log(newNums);

const shopping = [
    {
        itemName : "javaScript course",
        price : 799
    },
    {
        itemName : "data science course",
        price : 1999
    },
    {
        itemName : "Machine learning course",
        price : 2999
    },
    {
        itemName : "Mobile development course",
        price : 2099
    },
    {
        itemName : "Artificial Intellegence course",
        price : 1299
    },
]

const details = shopping.reduce( (acc, item) =>  acc + item.price, 0)
console.log(details);


                
