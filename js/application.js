var name, quantity, pizzaSize, toppings;

$(document).ready(function(){
	$(".refresh").click(function() {
		location.reload();
	});
	$("button").click(function() {
		event.preventDefault();
		toppings = ["cheese"]; 
		$("#build-pizza").html("");

		//Get User Inputs
		name = $("input#name").val(); 
		quantity = parseInt($("input#quantity").val());
		if( name != "" ) {
			if( quantity > 0 && quantity < 26 ) {
				pizzaSize = $("#psize").val(); 

				$(".toppings :checked").each(function() {
					toppings.push($(this).val());
				});
				

				// Create Order and calculate total price
				newPizza = new Pizza( pizzaSize, toppings );
				newOrder = new Order( name, newPizza, quantity ); 
				var totalPrice = newOrder.getOrderPrice(); 

				$("#build-pizza").append(
					"<h3>Thanks " + name + "! Your Pizza Order has been placed!</h3>" +
					"<p>" + quantity + " " + pizzaSize + " " + toppings.join(", ") + " pizzas!</p>" +
					"<p>Total: $" + parseFloat(totalPrice).toFixed(2) + "</p>" 
			 	);
			 	$(".order").replaceWith("<button type='submit' class='btn refresh btn-success'> New Order </button>");
			} else {
				$("#build-pizza").append("<br><h4 class='warning'>You can only order 1 to 25 pies online!")
			}
		} else { 
			$("#build-pizza").append("<br><h4 class='warning'>Enter a name!</h4>"); 
		}
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

	for(var i=1; i < this.toppings.length; ++i ) {
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
 


