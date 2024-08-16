let isfun=true;
console.log(typeof isfun);

//undefined
// NOTE: when you have declare a variable but not assigned value in it.

let birthyear;

// NOTE NULL
// fixme: when you stored a null value in a variable then check its datatype you will get object as it type 

let lastname=null;
console.log(typeof lastname);

// NOTE: Keywords used to declare variable in the js
// let,const,var

// NOTE:In the case of var we can reassign and redeclare var name and value
// case1:reassign
var dept='CS';
dept='mechanical';
console.log(dept);

// case2:redeclare
var dept='civil';
console.log(dept);

// NOTE: In the case of let and const we can reassign but we can not redeclare
// case1:reassign
let  college='Techno';
college='MNIT';
console.log(college);

// case2:redeclare
// let college='GIT'; (will give error)

/* NOTE:In the case of const we get error here as we cannot reassign or redeclare the variable name
const emoji='✨';
emoji='🍨';
console.log(emoji);
*/
     /* IF-ELSE CONDITIONS
 NOTE: TRUTHY-Those values which are not empty string' ' and 0
 FALSY-0,NULL,undefined,NaN,'',false */

if('')
{
    console.log('truthy value')
}
else{
    console.log('falsy value');
}
// NOTE:to log the error msg
console.error("hello");

// NOTE:To log the warning msg
console.warn("hello");

// NOTE: USED TO CALCULATE THE EXECUTION TIME FOR THE CODE;
console.time('ar');
const arr=[1,2,3,4,5];
console.log(arr);
console.timeEnd('ar');

// NOTE: IN TYPE COERSION ONE DATA TYPE TO ANOTHER IMPLICITLY BY JAVASCRIPT
const a=3+'3';
console.log(a);
console.log(typeof a);
const b=+'5';
console.log(b);
console.log(typeof b);
const c=true+1;
console.log(c);
console.log(typeof c);

var i=25;
var j=23;
console.log(i);
console.log(j);
var k=j;
k += 5;
console.log(k);

FUNCTION
function avg(a,b){
    return (a+b)/2;
}
c1= avg(4,6);
console.log(c1);

arr.forEach(function(ele)
{
    console.log(ele); 
})
let myarr=[1,2,"string",null,true];
console.log(myarr.length);
myarr.pop();
console.log(myarr);
myarr.push("vinita");
console.log(myarr);
// myarr.shift()
// console.log(myarr);
myarr.unshift("vinita")
console.log(myarr);
myarr.sort()
console.log(myarr);
myarr.toString();
console.log(myarr);
myarr.sort();
console.log(myarr);

let mystr="this is a paragraph";
console.log(mystr.length);
console.log(mystr.lastIndexOf("p"));
console.log(mystr.indexOf("paragraph"));
console.log(mystr.slice(0,3))
str2=mystr.replace("paragraph","row");
console.log(str2);

// DATE
let mydate=new Date();
console.log(mydate.getDate())
console.log(mydate.getDay())
console.log(mydate.getFullYear())
console.log(mydate.getMinutes())
console.log(mydate.getHours())

