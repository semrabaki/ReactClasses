

//Creating a variable
const pi=3.141596;


//Create a function 
function doublePi(){
    return 2*pi;
}

//creating anther function
function triplePi(){
    return 3*pi;
}

//this makes it visiable from other js or jsx classes
export default pi; //first export requires default but not the rest
export {doublePi,triplePi};// otherexports should be in {}.
//export {triplePi}; it can be but above is recommended
console.log(pi);

