// question(7):- Write a function that takes an object with properties width and height and returns 
// the area of a rectangle (width * height).

const rectangle = 
{ 
width:20,
height: 5 
};
function calculateRectangleArea(rect) {
return rect.width * rect.height;
}

console.log(calculateRectangleArea(rectangle)); // Output: 100