// Cars: Write a function that stores information about a car in a Object. The function should
//  always receive a manufacturer and a model name. It should then accept an arbitrary number
//   of keyword arguments. Call the function with the required information and two other name-
//   value pairs, such as a color or an optional feature. Print the Object that’s returned to 
//   make sure all the information was stored 
// correctly.


// function cars(manufacturerr: any,model: any, ...options){
//     let car={
//         manufacturer:manufacturerr,
//         modelName:model,
//         ...Object.fromEntries(options)
 
//    };

//    return car

// let result=cars("toyota","corolla",["color:black"])
// console.log(result)

function cars(manufacturer: string, model: string, ...options: string[][]) {
    let car = {
        manufacturer: manufacturer,
        modelName: model,
        ...Object.fromEntries(options)
    };

    return car};
    let result=cars("toyota","corolla",["color","black"]);
    console.log(result)