// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = 'I love my India';

const reversedStr = str.split(' ') 
                        .reverse() 
                        .join(' '); 

console.log(reversedStr);
