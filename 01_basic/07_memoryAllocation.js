
//********* Memory ********

// Stack (Primitive)  heap (Non-Primitives)


let myName = "Manish"
let yourName = myName

yourName = "Murli"

console.log(myName);
console.log(yourName);

const userOne = {
    email:"user@google.com",
    upiId:"user@ybl"
}

const userTwo = userOne

userTwo.email = "UserTwo.google.com"

console.log(userOne);
console.log(userTwo);