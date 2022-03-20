function cat() {
	this.stomach = [];
};
Cat.protype.eat = function(mouse) {
	this.stomach.push(mouse);
};
module.exports = Cat;