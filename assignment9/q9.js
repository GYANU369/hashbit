// question(9):- Write a function that takes two objects as arguments and merges them into one object using Object.assign(). 
// Return the new object.

const object1 = { name: "Sameer Alam", age: 21 };
const object2 = { occupation: "Java Developer",timing: '5pm-6pm' };

function mergeObjects(obj1, obj2) {

return Object.assign({}, obj1, obj2);

}

console.log(mergeObjects(object1, object2)); 