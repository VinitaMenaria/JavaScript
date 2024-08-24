const prompt = require ("prompt-sync")()
let n=prompt("enter num");
if(n>0)
{
    console.log("Number is positive");
}
else if(n==0)
{
    console.log("Number is equal to zero");
}
else{
    console.log("Number is negative");
}


