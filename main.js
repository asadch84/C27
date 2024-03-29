//🚀 Day 27 Challenge: Start Coding! 🚀
/*Question 79: Creating and Accessing Object Properties:
Construct an object representing a car with properties for make, model, and year.
Then, show how you can access the model property of the car.*/
// This sets up an object for a car with specific details
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model
console.log(car.model);
// We use dot notation (car.model) to get the model of the car from our object.
/* Question 80: Updating Object Properties: Add a property named color to the existing car object,
and then update the year property to 2021. Show how to perform these operations. */
// Creating an object representing a car
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "Blue",
};
// Accessing the model property of the car using dot notation
car1.model = "Honda";
car1.year = 2020;
// Alternatively, you can use bracket notation to access the model property
console.log(car1);
/*Question 81: Iterating Over Object Properties: Write a function
that takes an object as an argument and logs all of its properties and values. */
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (var property in obj) {
        // Loops through each property in the object
        console.log("".concat(property, ": ").concat(obj[property]));
        // Shows the property name and its value  
    }
}
// Using the function with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
