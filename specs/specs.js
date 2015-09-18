describe('Pizza', function() {
	var toppings = ["Cheese"]; 

	it("Tests creating a new Pizza object with the default toppings", function() {
		var testPizza = new Pizza("Medium", toppings); 

		expect(testPizza.pizzaSize).to.equal("Medium");
		expect(testPizza.toppings).to.eql(toppings); 
	});

	it("Tests adding topping to topping array", function() {
		var testPizza = new Pizza("Small", toppings);
		testPizza.addTopping("Pepperoni");

		expect(testPizza.toppings[0]).to.equal("Cheese");
		expect(testPizza.toppings[1]).to.equal("Pepperoni");
	});

	it("Tests getting price for a simple pizza", function() {
		var testPizza = new Pizza("Small", ["Cheese"]);
		var pizzaPrice = testPizza.getPrice(1);
		console.log(pizzaPrice);

		expect(pizzaPrice).to.equal(5.50); 
	});

	it("Tests getting the price of a pizza with multiple toppings", function () {
		var testPizza = new Pizza("Large",["Cheese","Pepperoni","Sausage","Ham","Onions","Mushrooms"]);

		expect(testPizza.getPrice(1)).to.equal(24.00);
	});

	it("Tests getting the price of several of the same Pizza ojects", function() {
		var testPizza = new Pizza("Large",["Cheese","Pepperoni","Sausage","Ham","Onions","Mushrooms"]);
		var quantity = 5; 

		expect(testPizza.getPrice(quantity)).to.equal(120.00);
	});

	it("Tests creation of a simple Order object", function(){
		var testPizza = new Pizza("Large",["Cheese"]);
		var quantity = 5; 
		var testOrder = new Order("Bob", testPizza, quantity ); 

		expect(testOrder.customerName).to.equal("Bob");
		expect(testOrder.quantity).to.equal(5);
		expect(testOrder.pizza).to.eql(testPizza); 
	});

});