"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are
//  large by default with a message that reads I love TypeScript. Make 
//  a large shirt and a medium shirt with the default message,
//  and a shirt of any size with a different message.
//creating a function with a default parameter
function makeShirt(size = "Large", printMessage = "I love Typesript") {
    console.log(`you have selected ${size} with a printed message of ${printMessage}`);
}
//calling the array
makeShirt();
//calling the function again by doing some changes in the parameter
makeShirt("medium");
//calling the function by changing the parameter
makeShirt("small", "i love javascript");
