// JS DOM Assignment - Dynamic - CSS

// Complete the task mentioned here - https://jsfiddle.net/hashedbit/ojqtk8e1/5/

window.onload = function () {
    const textContainer = document.getElementById("text-container");
    const colorBox = document.getElementById("colorbox");
    const colorChangeButton = document.getElementById("colorchange");
    const fontSizeSlider = document.getElementById("fontsize");
    const italicButton = document.getElementById("italic");
    const underlineButton = document.getElementById("underline");
    const boldButton = document.getElementById("bold");
    const fontDropdown = document.getElementById("list");
    const getStyleButton = document.getElementById("getstyle");
    const cssPropsDisplay = document.getElementById("css-props");
  
    // Change text color based on input
    colorChangeButton.addEventListener("click", () => {
      textContainer.style.color = colorBox.value;
    });
  
    // Change text size based on slider input
    fontSizeSlider.addEventListener("input", () => {
      textContainer.style.fontSize = `${fontSizeSlider.value}px`;
    });
  
    // Toggle Italics
    italicButton.addEventListener("click", () => {
      textContainer.style.fontStyle =
        textContainer.style.fontStyle === "italic" ? "normal" : "italic";
    });
  
    // Toggle Underline
    underlineButton.addEventListener("click", () => {
      textContainer.style.textDecoration =
        textContainer.style.textDecoration === "underline" ? "none" : "underline";
    });
  
    // Toggle Bold
    boldButton.addEventListener("click", () => {
      textContainer.style.fontWeight =
        textContainer.style.fontWeight === "bold" ? "normal" : "bold";
    });
  
    // Change Font Family based on dropdown
    fontDropdown.addEventListener("change", () => {
      textContainer.style.fontFamily = fontDropdown.value;
    });
  
    // Get current CSS properties and display them in the required format
    getStyleButton.addEventListener("click", () => {
      const computedStyle = window.getComputedStyle(textContainer);
      const cssProperties = `
        color: ${computedStyle.color};
        font-size: ${computedStyle.fontSize};
        font-weight: ${computedStyle.fontWeight};
        font-style: ${computedStyle.fontStyle};
        text-decoration: ${computedStyle.textDecorationLine};
        font-family: ${computedStyle.fontFamily};
      `;
      cssPropsDisplay.textContent = cssProperties.replace(/\s+/g, " ").trim();
    });
  };
  