const prompt = require("prompt-sync")()
let n1 = parseInt(prompt("Enter first number:"));
let n2 = parseInt(prompt("Enter second number:"));
let ch = prompt("enter your choice:");
switch (ch) {
    case '+':
        {
            console.log(n1 + n2);
            break;
        }
    case '-':
        {
            console.log(n1 - n2);
            break;
        }
    case '*':
        {
            console.log(n1 * n2);
            break;
        }
    case '/':
        {
            console.log(n1 / n2);
            break;
        }
    default: console.log("Invalid input");
}

