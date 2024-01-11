let score = 33

console.log(typeof score); // number
console.log(typeof(score));

score = "33" // string 
console.log(typeof score); // string

let valueInNumber = Number(score)

console.log(typeof valueInNumber); // number
console.log(valueInNumber);

score = "33abc"
// score = undefined

valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // value is NaN -  not a number

score = null

valueInNumber = Number(score)

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 0 =? zero

// "33"=> 33
// "Manish" => NaN
// "45jam" => NaN
// null = > 0
 // undefined => NaN
 // true -> 1 and false -> 0

 let isLoggedIn = "Manish"

 console.log(typeof isLoggedIn);
 console.log(isLoggedIn);

 let booleanIsLoggedIn = Boolean(isLoggedIn)

 console.log(typeof booleanIsLoggedIn);
 console.log(booleanIsLoggedIn);

 // 1 -> true , 0 -> false
 // "" -> false
// "Manish" -> true

let someNumber = 33

let numberToString = String(someNumber)

console.log(typeof numberToString);
console.log(numberToString);
