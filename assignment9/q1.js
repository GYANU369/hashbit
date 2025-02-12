// question(1):- Write a JavaScript function that declares a variable using let, const, and var.
//  What is the difference in scope for each?

function Scopes() {
       
    var varVariable = "abcd"; 
    let letVariable = "abcd";
    const constVariable = "abcd"; 
    console.log("Inside function:");
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable); 
    {
        var blockVar = "abcd2"; 
        let blockLet = "abcd2"; 
        const blockConst = "abcd2"; 
        console.log("inside block:");
        console.log(blockVar); 
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log("Outside block:");
    console.log("var :- "+blockVar);
}
Scopes()