"use strict"; // Treat all Js Code as newer version of Js

// alert(3+3) // we are using nodeJs ,  not browser

// For Documentation -  mdn
// orignal  -  https://tc39.es/ecma262/



// code redability should be high

let name = "Manish"
let age = 18
let isLoggedIn = false
let pass;
let key = null

console.table([name,age,isLoggedIn,pass,key])


// number => 2^53
// bigint
// string => " "
// boolean
// null  - itself as object = > standalone value - representation of empty value
// undefined => value is not defined
// symbol = react ->  uniqueness - components


// typeof operator

console.log(typeof pass); // undefined
console.log(typeof key); // object -  type of null is object


console.table([
    Number.MAX_VALUE,
    Number.MIN_VALUE
])

// object

