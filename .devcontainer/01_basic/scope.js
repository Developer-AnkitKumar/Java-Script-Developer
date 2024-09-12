// Child(Small) function, Parent(Big) funtion ke data ko call kr skte hai.........Exe.
function one() { // Big function

    const userName = "Ankit kumar";

    function two(){ // Small function (ye isliye kyu ki small function apne ander big function ke data ko fetch kr skta hai)
        const subject = "Subject of COA";
        // console.log(userName);
    }
    // console.log(subject); // ye subject small function ka part tha isliye error aa gya.

    two() // Two variable call ho rha hai, Kyu ki userName ko yhi call kr rha hai.
}
one() //  ise call kre ya na kre koi problem nhi hai.

function addOne(){
    return addOne + 1;

    function addTwo(){
        return addTwo + 2;
    }
    addTwo(5)

}
addOne(5)
console.log(addOne);