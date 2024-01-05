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


//Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


//Function Expression
//functions without a name are called "anonymous functions"
//They can be store into varaibles since they return values
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1994);

console.log(age1, age2)

//------- Arrow Functions -------//

//Removes need to use block (this works due to it being single line)
//or return happens implicitly without needing to put return 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);// returned value the same as calcAge2 even  without the return keyword

//Since this is kmore than one line of code we need to use code block here
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement  = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991))

//Same function Using multiple parameters
//When using multiple parameters use parenthesis 
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement  = 65 - age;
    return `${firstName}  retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement2(1991, 'cliff'));
