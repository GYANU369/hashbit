// question(5):- Write a function that filters out all even numbers from an array of  
// numbers using the filter() method. Return the new array of odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterOdds(arr) {
return arr.filter(num => num % 2 !== 0);
}
console.log(filterOdds(numbers)); // Output: [1, 3, 5, 7, 9]