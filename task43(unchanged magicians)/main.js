"use strict";
// nchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it in
//   a separate array. Call show_magicians() with each array to show that you have one array of the original names
//    and one array with the Great added to each magician’s
//making an array
let magicians = ["harry potter", "akhter", "jahan"];
///creating a function
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
    return magicians;
}
;
//making another function
function make_great(magicians) {
    return magicians.map(names2 => `The great ${names2}`);
}
let result1 = show_magicians(magicians);
console.log(result1);
//calling the second function
let result = make_great(magicians);
console.log(result);
//calling the second function with a copy of array
let copy = magicians.slice();
console.log(copy);
//modifying the array and including the great with each
let result3 = make_great(copy);
console.log(result3);
//callin the original array
console.log("\noriginal array");
show_magicians(magicians);
//calling the new one
console.log("\nnew array\n");
show_magicians(result);
