"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
//new set of invitations. You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
//of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are 
//inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["amna", "alshaba", "alisha"];
guestList.forEach(guest => {
    console.log(`Dear ${guest}, \n you are invited for dinner\n`);
});
console.log(`unfortunately ${guestList[2]} cant make it\n`);
console.log(`\n NEW LIST OF INVITATIONS\n`);
guestList[2] = "lareb";
console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);
