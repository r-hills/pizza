var name, quantity, pizzaSize, toppings;

$(document).ready(function(){
	$("button").click(function() {
		debugger; 
		toppings = []; 
		name = $("input#name").val();
		quantity = $("input#quantity").val();
		pizzaSize = $("#psize").val(); 

		$(".toppings :checked").each(function() {
			toppings.push($(this).val());
		});
		

	})




}); 

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

function Order( customerName, pizza, quantity ) {
	this.customerName = customerName;
	this.pizza = pizza; 
	this.quantity = quantity; 
}

Order.prototype.getOrderPrice = function() {
	var pizzaPrice = this.pizza.getPrice(); 
	var totalPrice = pizzaPrice * this.quantity; 
	return totalPrice; 
}
 


