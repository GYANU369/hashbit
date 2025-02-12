// question(6):- Create an object called person with properties for name, age, and occupation. 
// Write a function that logs a greeting message using these properties.

const person = {
    name: "Sameer Alam",
    age: 21,
    occupation: "Java Developer"
    };
    
    function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old, and I studing ${obj.occupation} Course.`);
    }
    greetPerson(person); // greeting