const prompt = require ("prompt-sync")()
let n=prompt("Enter a number:");
if(n%2==0){
    console.log(" No. is even");
}
else{
    console.log("No. is odd");
}