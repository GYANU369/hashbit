// JS DOM Assignment - Div Creation

// Complete the task mentioned here - https://jsfiddle.net/hashedbit/kzsb54gy/3/

function createDiv(width, height, text) {
    
    const newDiv = document.createElement("div");
  
    
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
  

    newDiv.textContent = text;
  
    
    document.getElementById("container").appendChild(newDiv);
  }

  createDiv(200, 100, "Hello, I'm a dynamic div!");
  