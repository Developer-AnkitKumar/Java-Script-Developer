function chai() {
    // console.log(`DB is connected`);
}
// chai() // Ye hui ek normal call, lakin mai use krna chahta hu IIFE ka....

(function chai() {
    console.log(`DB2 is connected`)
}()); // Using whole bracket is IIFE concept to store the data in ()this bracket.

// (() => {
//     console.log(`DB3 is connected`)
// })()

((name) => {
    console.log(`DB3 is connected ${name}`)
})("Ankit kumar pal")