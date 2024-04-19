"use strict";
// Animals: Think of at least three different animals that have a c
// ommon characteristic. Store the names of these animals in a
//  list, and then use a for loop to print out the name of each animal.
//   • Modify your program to print a statement about each animal, such as
//    A dog would make a great pet. • Add a line at the end of your program 
//    stating what these animals have in common. You could print a sentence 
// such as Any of these animals would make a great pet!
//making an array
let animals = ["dog", "cat", "parrot"];
//using for loop
for (let names of animals) {
    console.log(`A ${names},would make a great pet`);
}
//printing a statement
console.log('\nAll these three animals would make a great pet');
