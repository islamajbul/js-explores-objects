const numbers = [12,15,78,95,35,29];
// for(const number of numbers){
//     console.log(number);
// }

// 1. for of can not used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// for(const key of bottle){
//     console.log(key);
// }

// First option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys)
for(const key of keys){
    // console.log(key,bottle[key]);
}

// for in loop
for(const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

// Advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log([key,value]);
}