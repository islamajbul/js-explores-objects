// 1. Object Literals
const player = {};
player.name = 'Small Nirob';
player.specialty = 'Batsman';
player.bat = function(){
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Pandey',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}

// 2. Object Constructor
const person = new Object();
// console.log(person);

//3. Object create method
const item = Object.create(null);
// console.log(item)

// 4. Class
class Person{
    name = 'abul';
    address = 'sadar ghat';
    constructor(age){
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);
