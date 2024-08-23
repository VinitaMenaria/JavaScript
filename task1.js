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



let age=prompt("Enter your age:");
if(age>18){
    console.log("You are eligible");
}
else if(age<18){
    console.log("You are not eligible");
}
else{
    console.log("Invalid input");
}