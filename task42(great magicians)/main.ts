// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians 
//  by adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.

//making an array
let magicians:string[]=["harry potter","akhter","jahan"];

///creating a function
function show_magicians(magicians:string[]){
    magicians.forEach(names=>console.log(names))
    return magicians
    };

    //making another function
function make_great(magicians:string[]){
 return magicians.map(names2=>`The great ${names2}`)
}
     let result1=show_magicians(magicians)
     console.log(result1)
    

//calling the second function
    
 let result=make_great(magicians)
    console.log(result);
