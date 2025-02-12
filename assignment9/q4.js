// question(4):- Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const numberArr = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
return arr.map(num => num * num); 
}

console.log(squareNumbers(numberArr)); // Output: [1, 4, 9, 16, 25]