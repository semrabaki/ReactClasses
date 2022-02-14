const superheroes = require('superheroes');
const supervillains = require('supervillains');
console.log(superheroes.random());//Havok,Agent Brand,Gung-Ho
const myRandomSupervillain=supervillains.random();
console.log(myRandomSupervillain);//Infant Terrible,Lucifer
console.log(supervillains.all);//return all data