// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';
let arr = string.split(''); 

arr.splice(2, 3, 'D', 'O', 'N', 'E', 'S', 'I', 'A'); 

let result = arr.join(''); 

console.log(result);
