'use strict'

// let hasDriversLicense = true;
// const passTest = true;

//if (passTest) hasDriverLicense = true; //This will proc error due to 
//hasdriverslicense not matching this term

// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // cant use because its a keyword
//const private = 534; // cant use because its a keyword
//const if = "this doesnt work either because its a keyword";

function logger() {
    console.log("My name is Cliff");
}

//EMpty parameter function simply return the value inside the functions
logger();
logger();
logger();

//Functions with parameters must make use of the variables inside the parameter
//inside the function
function fruitProcessor(appleAmount, orangeAmount){
    console.log(appleAmount, orangeAmount);
    const juice = 
    `Juice with ${appleAmount} apples 
    and ${orangeAmount} oranges.`;
    return juice;
}

//Use a function by calling it and 
//inserting the values for the parameters 
// you wish to use
fruitProcessor(5,0);// This returns "5 0" because 
//its doing the cosnole.log(appleAmount, orangeAmount)

//This returns "9 5 Juice with 9 apples and 5 oranges" 
// because its return value "Juice" is stored into the variable 
// "appleJuice" and the variable gets returned as well.
const appleJuice = fruitProcessor(9,5);
console.log(appleJuice);
console.log(fruitProcessor(9, 5));// Produces same result just not stored in variable

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);