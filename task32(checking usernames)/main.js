"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure 
// that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
//  are also in the current_users list
// Loop through the new_users list to see if
//  each new username has already been used. If it has, print a message that the person will 
//  need to enter a new username. If a username has not been used, print a message saying that
//   the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepte
//making an array
let current_users = ["amna", "rehan", "nouman", "ayesha", "zain"];
//making another array
let new_users = ["alshaba", "wajiha", "rabia", "nouman", "amna"];
new_users.forEach(newoneUser => {
    let condition = current_users.some(currentoneUser => currentoneUser.toLowerCase() === newoneUser.toLowerCase());
    if (condition) {
        console.log(`sorry username${newoneUser} is already taken`);
    }
    else {
        console.log(`This username ${newoneUser} is available`);
    }
});
