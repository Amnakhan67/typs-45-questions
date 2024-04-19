//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
 //and titlecase.

 let personName:string = "amna";
 console.log(`name in upper case: ${personName .toUpperCase()}`);

console.log(`name in lower case: ${personName .toLowerCase()}`);

    console.log(`name in title case: ${personName.charAt(2).toUpperCase + personName.slice(1).toLowerCase()}`)

//myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()); 
