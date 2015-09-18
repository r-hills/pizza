describe('Pizza', function() {
	var toppings = ["Cheese"]; 

	it("creates a new Pizza object with the given specs", function() {
		var testPizza = new Pizza("Medium", toppings); 

		expect(testPizza.pizzaSize).to.equal("Medium");
		expect(testPizza.toppings).to.eql(toppings); 
	});

	it("tests adding topping to topping array", function() {
		var testPizza = new Pizza("Small", toppings);
		testPizza.addTopping("Pepperoni");

		expect(testPizza.toppings[0]).to.equal("Cheese");
		expect(testPizza.toppings[1]).to.equal("Pepperoni");
	});





});