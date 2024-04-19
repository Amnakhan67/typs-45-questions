"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
//making an array
let magicians = ["harry potter", "akhter", "jahan"];
///creating a function
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
    return magicians;
}
let result = show_magicians(magicians);
