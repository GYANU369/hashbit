// question(8):- Given an object with various properties, write a function that returns an array of the 
// object’s keys using Object.keys().

const exampleObject =
{ name: "Sameer Alam", age: 21, occupation: "Java Developer" };

function getObjectKeys(obj) {
return Object.keys(obj); 
}
console.log(getObjectKeys(exampleObject)); // Output: ["name", "age", "occupation"]