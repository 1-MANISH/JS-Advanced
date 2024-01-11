

// How does a data stored in memory and accedd from that place
// data types is based on that divided in JS

// Primitive - call by value - copy will be created

// Number , String ,  Boolean , null, undefined , Symbol ,  BigInt

let number = 39
let bigNumber = 34783748374837483748347n
let booleanValue = true
let outsideTemp = null
let userEmail;
let id = Symbol("123")
let anotherId = Symbol("123")

console.log(id===anotherId);

console.table([
    number,
    bigNumber,
    booleanValue,
    outsideTemp,
    userEmail,
    id
])

// Non Primitive -  reference type
 // Array
 // Objects
 // Function

 // All has same datatype = Object
 //typeof function - > Object function -  in depth

 const heros = [
    "ChotaBheem",
    "Shaktiman",
    "SupreHeroRaju"
 ]

 const obj = {
    name:"Manish",
    age:21
 }

 const greetings = function(name){
    return `Hello ${name}`;
 }

 console.table([
    typeof heros,
    typeof obj, 
    typeof greetings// function->  object function only
 ])
