
// Pizza object constructor
function Pizza( pizzaSize, toppings ) {
	this.pizzaSize = pizzaSize; 
	this.toppings = toppings; 
};

Pizza.prototype.addTopping = function( topping ) {
	return this.toppings.push(topping); 
};

Pizza.prototype.getPrice = function() {
	var price, toppingPrice; 

	switch( this.pizzaSize ) {
		case "Small": 
			price = 5.00;
			toppingPrice = 0.50;
			break;
		case "Medium":
			price = 10.00;
			toppingPrice = 1.00;
			break;
		case "Large":
			price = 15.00;
			toppingPrice = 1.50;
			break; 
	} 

	for(var i=0; i < this.toppings.length; ++i ) {
		price += toppingPrice; 
	}
	return price; 
};




 


