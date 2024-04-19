//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
 //to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 //that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guestList:string[]= ["amna", "alshaba", "alisha"];
console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);

console.log(`unfortunately ${guestList[2]} cant make it\n`);
console.log(`\n NEW LIST OF INVITATIONS\n`);
guestList[2]= "lareb";

console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);
console.log(`\nguess what we just found a bigger dinner table\n`);
guestList.unshift("wajiha");
guestList.splice(2, 0,"rabia");
guestList.push("nouman");
console.log(`Dear ${guestList[0]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[1]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[2]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[3]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[4]} \nyou are invited for the dinner\n`);
console.log(`Dear ${guestList[5]} \nyou are invited for the dinner\n`);





