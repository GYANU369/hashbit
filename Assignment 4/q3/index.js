
// JS DOM Assignment - Hide Show Para

// Complete the task mentioned here - https://jsfiddle.net/hashedbit/kLd3vb7f/2/


function toggleVisibility() {
    const paragraph = document.getElementById("useless-paragraph");
    
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block"; // Show the paragraph
    } else {
      paragraph.style.display = "none"; // Hide the paragraph
    }
  }
  