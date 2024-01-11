const accountId = 34343
let accountEmail = "manish@man.com"
var accountPassword = "343764"
accountCity = "Hyderabad" // don't try this

let accountState;
// By default  =  undefined



//  accountId = 346834 // not allowed in js


/*
Prefer not to use  -  var
because reason of block scope and function scope


*/
 console.log(accountId);

 accountEmail = "shanim@man.com"
 accountPassword = "9089890"
 accountCity = "Banglore"

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

 /*
 Allowed using - var
 var name = "Manish"
 var name = "Pritam"

 But not allowed using let 

 */

let school = "SCOPE"

console.log(`Before ${school}`)

{
    let school = "EEE"
    console.log(`Inside ${school}`)

    // school = "EEE"
    // console.log(`Inside ${school}`)
}

console.log(`After ${school}`)

