import chalk from 'chalk';
function Dog(name) {
	this.stomach = [];
	this.name = name;
};

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
Dog.prototype.sayHi = function() {
	console.log('hi my name is '  + chalk.blue( this.name));
}
export { Dog};
