// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

const string = "Programming is so much fun!";

let vowelsCount = 0;
let consonantsCount = 0;

const vowels = "AEIOUaeiou";

for (let char of string) {
  if (/[a-zA-Z]/.test(char)) { // Check if the character is an alphabet
    if (vowels.includes(char)) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }
}

console.log(`Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`);

