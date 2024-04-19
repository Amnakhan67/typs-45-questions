// Album: Write a function called make_album() that builds a Object describing a music album. The function 
// should take in an artist name and an album title, and it should return a Object containing these two
//  pieces of information. Use the function to make three dictionaries representing different albums.
//   Print each return value to show that Objects are storing the album information correctly. Add an 
//   optional parameter to make_album() that allows you to store the number of tracks on an album. If
//    the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

//makin a function with object in it
function make_album(artistName:string,albumtitle:string,tracks?:number){
    let album:{artist_name:string,title:string,tracks?:number}={
        artist_name:artistName,
        title:albumtitle,
    }
    if(tracks!==undefined){
        album.tracks=tracks

        }
        return album
    };
    //give arguments to the function 
     let result=make_album("amna","album title 1");
     let result2= make_album("rehan","albumTitle2");
     let result3=make_album("nouman","albumtitle3",10);
console.log(result);
console.log(result2);
console.log(result3);