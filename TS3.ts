let arr  : number[] = [1,2,3,4,5,6];
// console.log(arr);
// let x : number ;
for (let x in arr){
    console.log(arr[x]);
    
}
let arr1:any[] = [1,2,3,4,5,6];
// let vv:any=1;
console.log(arr1);

let arr2:Array<string> = ['a','s','d','f','g'];
for(let i in arr2){
    console.log(arr2[i]);

}

let arr3 : readonly number[]=[10,20,30,40,50,60];
for(let i in arr3){
    console.log(arr3[i]);
}
// array of a object in ts

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "John", age: 30 },
    { name: "Doe", age: 25 }
];

for(let i in people){
console.log(people[i].name);

}


// i can use more then 2 type of data type 

let arr4:[string,number,boolean]= ["anuj",21,true];
for(let i in arr4){
    console.log(arr4[i])
}

// if i want to add the multpule value in array so i can do This
let arr5:(string|number|boolean)[]=["khare",21,false,"anuj",21,true];
for(let i in arr5){
    console.log(arr5[i])
}