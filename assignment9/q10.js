
// question(10):- Create an array of numbers and write a function that uses the reduce()  
// method to calculate the "sum of all the numbers in the array".

const numbersArr = [1, 2, 3, 4, 5];
function sumArray(arr) {
return arr.reduce((sum, currNum) => sum + currNum, 0);
}

console.log(sumArray(numbersArr));  // output : 15