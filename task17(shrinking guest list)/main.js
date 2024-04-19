"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
//two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
// from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program.
let guestList = ["amna", "alshaba", "alisha"];
console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);
console.log(`unfortunately ${guestList[2]} cant make it\n`);
console.log(`\n NEW LIST OF INVITATIONS\n`);
guestList[2] = "lareb";
console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);
console.log(`\nguess what we just found a bigger dinner table\n`);
guestList.unshift("wajiha");
guestList.splice(2, 0, "rabia");
guestList.push("nouman");
console.log(guestList);
console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[3]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[4]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[5]} \nyou are invited for the dinner\n`);
console.log(guestList);
console.log(`\nunfortunately the dinner table cannot arrive on time so we have only two seats available\n `);
let removePersons = guestList.pop();
console.log(`Sorry ${removePersons},\nyou are not invited for the dinner\n`);
let removePersons1 = guestList.pop();
console.log(`Sorry ${removePersons1},\nyou are not invited for the dinner\n`);
let removePersons2 = guestList.pop();
console.log(`Sorry ${removePersons2},\nyou are not invited for the dinner\n`);
let removePersons3 = guestList.pop();
console.log(`Sorry ${removePersons3},\nyou are not invited for the dinner\n`);
console.log(guestList);
console.log(`dear ${guestList[0]},\nyou are still invited\n`);
console.log(`dear ${guestList[1]},\nyou are still invited\n`);
let removePersons4 = guestList.pop();
let removePersons5 = guestList.pop();
console.log(guestList);
