const { stdin, stdout } = require('process');
const readline =require('readline');

const rl =  readline.createInterface({
    input:stdin,
    output:stdout
});

function sumOfProducts(n1,n2){
    let str1=n1.toString();
    let str2=n2.toString();
  
    str1=str1.split('').reverse().join('');
    str2=str2.split('').reverse().join('');

    let sum=0;

    for (let i = 0; i < Math.max(str1.length,str2.length).length; i++) {
        let digit1 = parseInt(str1[i])||0;
        let digit2 = parseInt(str1[i])||0;
       sum+=digit1*digit2; 
    }
     return sum;
}

rl.question('Enter the first number: ',(n1)=>{
    rl.question('Enter the second number: ',(n2)=>{
        n1= parseInt(n1);
        n1= parseInt(n1);
        console.log(sumOfProducts(n1,n2));
        rl.close();
    });

});