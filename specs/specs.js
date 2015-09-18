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

	it("tests getting price for a simple pizza", function() {
		var testPizza = new Pizza("Small", ["Cheese"]);
		var pizzaPrice = testPizza.getPrice();
		console.log(pizzaPrice);

		expect(pizzaPrice).to.equal(5.50); 
	});



});