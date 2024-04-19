"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["amna", "rehan", "nouman", "admin", "zain"];
users = [];
if (users.length === 0) {
    console.log(' your array is empty,we need to find some users');
}
else {
    let users = ["amna", "rehan", "nouman", "admin", "zain"];
    users.forEach(names => {
        if (names === "admin") {
            console.log('hello Admin,would u like to see status report');
        }
        else {
            console.log(`Hello ${names},Thanku for logging in again`);
        }
    });
}
