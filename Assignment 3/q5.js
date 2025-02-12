
// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
  }
  
  // Example usage
  let sentence = "I love Japaan!";
  let correctedSentence = correctfn(sentence, "Japaan", "Japan");
  console.log(correctedSentence);
  