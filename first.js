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

    