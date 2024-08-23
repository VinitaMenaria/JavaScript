// object assign

const obj1={a:1,b:2};
const obj2={c:3,d:4};

// NOTE:Target and source
// Object.assign(target,source)

Object.assign(obj2,obj1);
console.log(obj2) 

// object freeze

const products={
    name:'TV',
    price:'28000'
}
Object.freeze(products);
products.name='washing machine';
console.log(products);

// note:destructuring
const items=['tv','ac','mobile'];
const [first, ,third]=items;
console.log(first,third)

// object 
const productss={
    name:'mobile',price:'500000'
}
// to change the default property name you can use product name:variablename
const {name:productname,price,category='electronics'}=productss;
console.log(productname,price,category)

// destructuring used in the function param
function sum3([a,b,c]){
     return a+b+c;
 }
 console.log(sum3([1,2,3]));

//  spread operator(...);
const item=['tv','ac','mobile'];
const newItems=['laptop','tablet','watch'];
const allItems=[...item,...newItems];
console.log(allItems);

const arr2=[1,2,3];
arr2.push(4);
// console.log(arr2)
// arr3=[...arr2];
// console.log(arr3)

// NOTE: COPYING THE ARRAY USING THE SPREAD OPERATOR
const arr3=[... arr2];
arr3.push(4);
console.log(arr3,arr2)

// note:concate two arrays
const fruits=['apple','mango'];
const vegetables=['carrot','potato'];
const grocery=['grapes',...fruits,...vegetables,'pumpkin'];
console.log(grocery)

// int the case of object
const ob1={a:1,b:2};
const ob2={c:3,d:4};
// note: creating a shallow copy
const ob3={...ob1};
// note: concating two objects
const ob4={
    ...ob1,...ob2
}

console.log(ob4);
// note :rest parameter
const players= ['a','b','c','d','e'];
const [firstplayer,secondplayer,...other]=players;
console.log(firstplayer,secondplayer,other);
console.log(firstplayer,secondplayer,...other);

function sum4(...values){
    values.forEach((item)=>{
        console.log(item)
    })
}
sum4(1,2,3,4)












