// obj 

// let obj = {
//     name:"Anshumaankhare",
//     age:21,
//     fullname:function(){
//         return this.name;
//     }
// }
// console.log(obj["name"]);
// console.log(obj["age"]);
// obj.salla=200000;
// console.log(obj["salla"]);
// console.log(obj.fullname())

class Car {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a+this.b;
        
    }
}

const mycar = new Car("BMW",2003);
console.log(mycar.add());

const xx = [
    {
        anuj:"anuj"
    },
    {
        anuj:"anuj1"
    },
]

console.log(xx[1]["anuj"]);