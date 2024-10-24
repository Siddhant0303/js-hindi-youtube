const accountId = 144553
let accountEmail = "siddhant@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState

// accountId = 2 //not allowed

accountEmail = "sidd@gamil.com"
accountPassword = "212121"
accountCity = "Navi Mumbai"



console.log(accountId);
/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);