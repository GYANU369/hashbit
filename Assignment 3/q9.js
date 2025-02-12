// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    if (!paragraph.trim()) return 0;
    return paragraph.trim().split(/\s+/).length;
  }
  
  
  const paragraph = "This is a simple example paragraph to count the number of words.";
  const wordCount = countWords(paragraph);
  console.log(`Word Count: ${wordCount}`);
  