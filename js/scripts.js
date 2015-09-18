
// Pizza object constructor
function Pizza( pizzaSize, toppings ) {
	this.pizzaSize = pizzaSize; 
	this.toppings = toppings; 
};

Pizza.prototype.addTopping = function( topping ) {
	return this.toppings.push(topping); 
}






 


