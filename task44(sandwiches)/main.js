"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call
//   provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different numbe
//makin a function with an array
function make_sandwich(...items) {
    console.log(`\nMaking the sandwich with following items\n`);
    items.forEach(names => console.log(names));
    console.log(`\nNow enjoy the sandwich\n`);
}
;
//calling the function with three diff arguments
make_sandwich("cheese", "chicken", "mayo");
make_sandwich("bread", "butter");
make_sandwich("tomatao", "mayo", "cheese");
