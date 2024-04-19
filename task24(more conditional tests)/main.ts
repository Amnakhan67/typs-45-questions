//*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
//try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

//tests for equality and inequality using strings
let myName:string = "Amna";
 console.log('\nIs my name equal to Amna');
 console.log(myName==="Amna");//true

 console.log('\nIs my name not equal to Amna');
 console.log(myName!='Amna');//false

 //tests using the lowerr case function
//using the above variable
  console.log('\nIs my name equal to amna after converting into lower case');
 console.log(myName.toLowerCase()=="amna"); //true

 console.log('\nIs my name equal to amna after converting into lower case');
 console.log(myName.toLowerCase()!="amna"); //false

 //tests for equality and inequality with numbers
 //making new varaibles
 let num1 = 5;
 let num2 = 10;
  
 console.log('\nIs num1 equal to num2');
 console.log(num1==num2); //false

 console.log('\nIs nm1 not equal to num2');
 console.log(num1!=num2); //true

 //tests for greater than 
 //using the above varaibles

 console.log('\nIs num1  greater than num2');
console.log(num1 > num2); //false

//test using less than
console.log('\nIs num1 less than num2')
console.log(num1<num2); //true

//test for greater than or equal  to
console.log('\nIs num1  greater than or equals to num2');
console.log(num1>=num2);//false

//test using less than or equal to
console.log('\nIs num2  greater than or equals to num1');
 console.log(num1<=num2); //true

 //test using and operater
 //using the above variables
 console.log('\nIs num1 greater than and equal to num2')
 console.log(num1>num2 && num1==num2);//false

console.log('\nIs num1 less than num2 and equal to num2');
console.log(num1<num2 && num1==5);

//test using or operater
console.log('\nIs num1 greater than num2 or num1 is equal to num2');
console.log(num1>num2 || num1==num2); //false

console.log('\nIs num1 less than num2 or num1 equal to num2');
console.log(num1<num2 || num1==num2); //true
   
//test for whether an item is an array
//making an array

let names:string[] = ["amna","alisha","rabia"];
console.log('\nIs amna included in my array');
console.log(names.includes('amna')); //false

//test for whether an item is not in the array
console.log('\nIs amna not included in my array');
console.log(!names.includes('amna')); //false