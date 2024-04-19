// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.
// 
// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order 
//has changed/


//making an array 
let myPlaces :string[] = ["Sydney","Turkey","USA","Pakistan","Japan"];
//console.log(myPlaces);

//making a copy of the array
let copyofArray = myPlaces.slice();
console.log(copyofArray);

//printing the copy of array in alphabetical order
let sortedArray = copyofArray.sort();
//console.log(sortedArray);

//printing the original array
//console.log(myPlaces);

// printing the array in reverse form
let reverseArray = sortedArray.reverse();
console.log(reverseArray);

//printing the original array to show it has not changed
console.log(myPlaces);

//now printing the reverse form of the original array
let reverseofOriginalarray = myPlaces.reverse();
console.log(reverseofOriginalarray);

//now reversing the original array again to bring it again in its original form
let againReverse = reverseofOriginalarray.reverse();
console.log(againReverse);

//now printing the original array in alphabetical form
let originalarraySorted = myPlaces.sort();
console.log(originalarraySorted);

//printing the  alphabetical array in reverse form
let reverseofsortedArray = originalarraySorted.reverse();
console.log(reverseofsortedArray);