
var Dog = require('./Dog.js');
var Cat = require('./cat.js')

// var dog = new Dog('pluto');
// //dog.sayHi();
// var tom = new Cat()
// dog.eat(tom);
// console.log(dog);


var dog = new Dog('tom');
dog.sayHi();
var tom = new Cat();
dog.eat(tom);
console.log(dog);


