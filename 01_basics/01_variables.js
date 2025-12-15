const accountId = 144553
let accountEmail = "jitendra@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity = "Delhi"

console.log(accountId);


/*
Prefer not to use var bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])