// This function use.....

// const user = {
//     userName: "ANkit kumar",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.userName}, welcome to website:`);
//         console.log(this);
//     }
    
// }
// user.welcomeMessage()

const test = {
    prop: 42,
    price: 999,
    func: function () {
      return this.prop;
    // console.log(`${this.prop}, Is this price:`);
    // console.log(this);
    }
  };
  
  console.log(test.func());