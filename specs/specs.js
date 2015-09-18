describe('Pizza', function() {
	var toppings = ["Cheese"]; 

	it("creates a new Pizza object with the given specs", function() {
		var testPizza = new Pizza("Medium", toppings); 

		expect(testPizza.pizzaSize).to.equal("Medium");
		expect(testPizza.toppings).to.eql(toppings); 
	});

});