// // let js = "amazing";
// // // if (js === 'amazing') alert("Js is fun");
// // console.log(40 + 8 + 23 - 10);

// // console.log("jonas");
// // console.log(23);

// // let firstname = "James";
// // console.log(firstname);
// // console.log(firstname);
// // console.log(firstname);

// // /*The style of variable naming that identifies
// // the variable as accurately as possible works better...*/
// // let myFirstJob = "Retail";
// // let mySecondJob = "Programmer";

// // //...Than this style of variable naming
// // let job1 = "Retail";
// // let job2 = "programmer";
// // console.log(myFirstJob);

// // let jsIsFun = true;
// // console.log(jsIsFun);

// // /* You can use "typeof" to
// // return the type of variable*/
// // console.log(typeof true);
// // console.log(typeof jsIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Cliff");

// // /*You can change variable by simply
// // changing the value and notice the console
// // prints out the different type*/
// // jsIsFun = "Yes!";

// // /*You can not print unassigned variable
// // to console*/
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // /*You CAN print Assigned Variables
// // to console*/
// // year = 1991;
// // console.log(typeof year);

// // /*"null" returns 'object' to console even though it is
// // no value at all or the abscence of a value*/
// // console.log(typeof null);

// // /*"Let" keyword allows variables
// // to change later in program*/
// // let age = 30;
// // console.log("Age is " + age);

// // age = 31;
// // console.log("Age is changed to " + age);

// // //Alternative way of assignment
// // let = newage = 30;
// // console.log("NewAge is " + newage);

// // /*const is immutable meaning you
// // cant change the variable later once
// // it has been declared so this
// // line of code wont work; uncomment 2000 to see error*/
// // const birthYear = 1990;
// // // birthYear = 2000;
// // console.log("Birth year is " + birthYear);

// // /* Const declarations have to be initialized or wont work.
// // It will show red error line; uncomment to see erro*/
// // // const job;

// // /*Now with these two different ways of declaring variables, you will probably ask, should I use let,
// // or should I use const to declare a new variable?
// // Well, as a best practice for writing clean code, I always recommend to use const by default and let only
// // when you are really sure that the variable needs to change at some point in the future.
// // For example, when you have a variable that's really never supposed to change like this birth year
// // you should always use const.*/

// // /*"var" keyword is similar to "let" keyword.
// // the difference is that "var" is function scoped
// // while "let" is block scoped*/
// // var jobs = "programmer";
// // console.log("Job is " + jobs);
// // job = "teacher";
// // console.log("Job is " + jobs);

// // /* You also dont have to declare variables at all*/
// // lastName = "patterson";
// // console.log("Last name is " + lastName);
// // /*The problem with this is that its not a
// // normal variable but instead its a "property on a
// // global object".*/

// //---------Working With Operators---------//

// //-----Math Operators-----//
// //Using Minus Symbol//
// //Can use comma to show multiple variables
// const ageCliff = 2023 - 1998;
// const ageJoe = 2023 - 1988;
// console.log(ageCliff, ageJoe);

// /*Remember to follow D.R.Y = Dont Repeat Yourself.
// If you begin to reuse a value you should make a variable
// or a function for a task.*/
// const currentYear = 2023;
// const ageCliffDry = currentYear - 1998;
// const ageJoeDry = currentYear - 1988;
// console.log(ageCliffDry, ageJoeDry);

// //Using Multiplication, Exponents, and Division  Symbols//
// console.log(
//   "if you were twice your age you would be = " + ageCliff * 2,
//   "If you were half your age you would be = " + ageCliff / 2,
//   "Your age to the third power is = " + ageCliff ** 3
// );

// //The Plus operator can be used to add or concatenate/combine strings//
// const num1 = 1;
// const num2 = 2;

// const midName = "Patrick";
// const initial = "CPP";

// //Using for addition and concatenation
// console.log(
//   "The number " +
//     num1 +
//     " is less than " +
//     num2 +
//     " and " +
//     num2 +
//     " is less than " +
//     (num1 + num2)
// );

// //Using for concatenation to add string variables
// const format =
//   "Showing middle name and initials in a 'Middle, Initial' format = ";

// console.log(format + midName + ", " + initial);

// //-----Assignment Operators-----/
// // "+=", "-=", "++", "--" returns integers

// let x = 10 + 5;
// console.log(x);

// //"+= means add this value to the value of the variable"
// x += 5;
// console.log(x);
// /* 5 was added to the prexisitng value of x which was 15
// so the new result became 20*/

// //"-= means subtract this value to the value of the variable"
// x -= 3;
// console.log(x);
// /* 3 was subtracted from the prexisitng value of x which was 20
// so the new result became 17*/

// //"-- means subtract 1 from the value of the variable"
// x--;
// console.log(x);
// /* 1 was subtracted to the prexisitng value of x which was 17
// so the new result became 16*/

// //"++ means add 1 to the value of the variable"
// x++;
// x++;
// console.log(x);
// /* 2 was added to the prexisitng value of x which was 16
// so the new result became 18*/

// //-----Comparison Operators-----//
// // >, <, <=, >=, retunrs "booleans" or "true" or "false"
// console.log(ageCliff < ageJoe);
// //returns true because cliff is 25 while joe is 35
// console.log(ageCliff < 24);
// //returns false
// console.log(ageCliff <= 25);
// //returns true
// console.log(currentYear - ageCliff < currentYear - 24);
// /*returns true because (currentYear - ageCliff) 25
// is less than (currentYear - 24) 26*/

// //------Operxator Precendence-------//

// const thisYear = 2023;
// const ageClifton = thisYear - 1998; // 25
// const agejohn = thisYear - 2012; // 11

// /*This code deals with the math operators before
// the Comparison Operators to correctly do order
// of operations */
// console.log(thisYear - 1991 > thisYear - 2018);

// /* Using Parenthesis has the highest level of precendence
// when using operators similar to math*/
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// /*This will make 'averageAge' = 30.5 because it will do
// multiplcation/division before addition/subtraction operations*/
// const averageAge = ageClifton + agejohn / 2;
// console.log(ageClifton, agejohn, averageAge);

// /*This will make 'averageAge' = 18 because it will do
// addition/subtraction operations in the parenthesis before the division*/
// const averageAgeParenthesis = (ageClifton + agejohn) / 2;
// console.log(ageClifton, agejohn, averageAgeParenthesis);

/* ------- CODING CHALLENGE #1 -------//
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: 

BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables 
called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, 
and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI 
containing information about whether Mark has a higher BMI than John. 
Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. 
John weighs 92 kg and is 1.95 m tall.
*/

// let massMark = 78;
// const heightMark = 1.69;
// let massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

//----- Template Literals & Strings-----//

/**When Doing string without using
 * literals you would have to concatenate
 * using '+'
 */
// const firstName = "cliff"
// const job = "Programmer"
// const thisYear = 2023;
// const birthYear = 1998;
// const cliffNew = "I'm " + firstName + " , a " + (thisYear - birthYear) + " year old " +
// job;

// console.log(cliffNew);

// /**When doing string while using template literals you use the `` backslashes by the tilda symbol
//  * And use "${}" the insert your varibles directly into the strings
//  * Making it much easier to create strings than constantly trying to mange the
//  * plus symbols and the quotations
//  */

// const cliffTemplateLiteral =  `I'm ${firstName}, a ${thisYear - birthYear} year old ${job}`
// console.log(cliffTemplateLiteral);

//------- If/ Else Statements -------//
/** Const age = 20
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving license');
}
else{
    console.log('Sarah cannot start driving yet');
}

const birthYear = 1998;
let century;

if(birthYear<=2000){
century = 20
}
else {
    century =21
}
console.log(century)*/

// ------- CODING CHALLENGE #2 -------//

/**
* Use the BMI example from Challenge #1, and the code you already wrote, 
* and improve it:

1. Print a nice output to the console, 
telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include 
the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or
"John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
*/
// let massMark = 95;
// const heightMark = 1.88;
// let massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if(BMIMark > BMIJohn){
//     console.log(`Marks's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
// }
//     else {
//     console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} `);
//     }

// ------- TYPE COERCION --------//
// Using "Number() and String() for "Type Conversion"
// Using MAth operators in association with string for "Type Coercion"
/**When mixing strings and numbers using the "+" symbol will reult in
 * concatentation of the strings its adding
 * When using the other math operators "-", " /", "*" they will do math and behave normally
 * To avoid unintended results use conversion like "Number" on strings to
 * convert the strings to numbers beforehand
 */

//----- Type Conversion -----//
// const inputYear = '1991';
// console.log(inputYear + 18); // returns 199118 because the plus concatenated it

// const inputYearConvert = '1991'
// console.log(Number(inputYearConvert), inputYear) // returns a 1991 as a number then '1991' as a string
// console.log(Number(inputYear) + 18) // returns 2009 after adding the 1991 with 8

// /**
//  * JavaScript cant convert everything to a number though,
//  * and
//  * when it cant it will return NaN or "Not a Number"
//  */

// console.log(Number('Jonas')); // returns NaN because jonas cant be convert to a number unlike actual numbers in strings can
//  // this will return number but NaN refers to invalid numbers specifically which arent numbers but are still in the numnber category
// console.log(typeof NaN);

// console.log(String(23), 23);

// ----- Type Coercion -----//
// Type Coercion will assume whether to use a string or number behind the scenes
// based on whether it is using a + or a -, /, and *
// console.log('I am ' + 23 + ' years old'); // This turns 23 into a sttring becuase its concatenated
// console.log('23' - '10' - 3); // This does normal math becuase its using a minus on 23- 10 first to get 13 then subtracts 3 for 10
// console.log('23' / '2'); // This returns 11.5 because it does normal math on the numbers

// let n = '1' + 1 // This will return 11 as a string because it will concatenate
// n = n - 1 // This will return 10 because it will subtract 1 from 11
// console.log(n); // This returns 10 as a number because the string 11 had 1 subtracted from it

// ------- Truthy and Falsy Values -------//

//Values that become True or False when we try to convert them into "Booleans"
// There are only five Falsy values : 0, '' (empty strings) , undefined , null, NaN

// console.log(Boolean(0)); // Returns false because 0 is a falsy number
// console.log(Boolean(undefined)); // returns false because undefined cannot be true
// console.log(Boolean("jonas")); // returns true because "jonas" is a string that contains a value
// console.log(Boolean({})); // returns true because this is an empty object
// console.log(Boolean("")); // returns true because this is an empty string
// // console.log(Boolean(Nan))

// //Example of Falsy values returning Booleans
// let money = 0;
// //This will default to the false selection "You should get a job" because 0 is a falsy value so the false option was selected"
// if (money) {
//   console.log("Dont spend all your money");
// } else {
//   console.log("You should get a job");
// }
// //This will default to the true selection "Dont spend all your money" because 100 is not a falsy value so the true option was selected"
// money = 100;
// if (money) {
//   console.log("Dont spend all your money");
// } else {
//   console.log("You should get a job");
// }

// //While undefined means there is no value assigned this output will still default to the Undefined option because the falsy value 0 was used as the heights value
// let height = 0;

// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("No! Height is UNDEFINED");
// }

// // ------- Equality Operators -------//

// //  equality operators "===" returns booleans true or false
// // and DOES NOT do type conversion so it will not change it for you
// // Not the same as the assignment equal symbol "=" or
// // the loose equality symbol which is double equal "=="
// //which DOES DO type conversion.
// //This means the double equal could convert a string to a number to produce a true output

// let age = 18;

// if (age === 18) {
//   console.log("You are an adult");
// } else {
//   console.log("you are not an adult yet");
// }

// let ageLoose = "18";

// if (ageLoose == 18) {
//   console.log("You are an loose adult");
// } else {
//   console.log("you are not an adult yet");
// }

// //An easy way to get value from any webpage using
// // "prompt()"For Ex: prompt("Whats your favourite number");

// //You cold store the value by assigning the prompt to a variable
// const favorite = prompt("Whats your favorite number");
// console.log(favorite);
// console.log(typeof favorite);

// //Using the triple equal will always return false here because it wont convert the string into a number so it will never be equal to one another even if your type 20
// if (favorite === 20) {
//   console.log("Your favorite number is small");
// } else {
//   console.log("your favorite number is big");
// } // This will always return "Your number is big"

// //Therefore you could use Number Conversion on the prompt togenerate the number output to make it equal
// const favoriteConvert = Number(prompt("Whats your favorite number"));
// console.log(favoriteConvert);
// console.log(typeof favoriteConvert);

// if (favoriteConvert === 20) {
//   console.log("Your favorite number is small");
// } else if (favoriteConvert === 7) {
//   console.log("Thats also a big number");
// } else {
//   console.log("your favorite number is big");
// } //This will return "Your favorite number is small" if the user types in 20 now

// //Could also use "!" which means "does not"
// // so saying favorite != 20 means "if favorite does not equal 20 then" do the stuff in the code block
// const notFavoriteConvert = Number(prompt("Whats your favorite number"));

// console.log(notFavoriteConvert);

// console.log(typeof notFavoriteConvert);
// if (notFavoriteConvert != 20) {
//   console.log("Your favorite number isn't 20");
// } else {
//   console.log("Your number is 20");
// }
//returns true output if the value is not 20

// -------- CODING CHALLENGE #3 ------- //

/**CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
 *
 */

// const rounds = 3;

// const dolR1 = 96;
// const dolR2 = 108;
// const dolR3 = 89;

// const koaR1 = 88;
// const koaR2 = 91;
// const koaR3 = 110;

// const dolAverage = (dolR1 + dolR2 + dolR3) / rounds;
// const koaAverage = (koaR1 + koaR2 + koaR3) / rounds;
// console.log(dolAverage, koaAverage);

// if (koaAverage > dolAverage) {
//   console.log("Koalas win trophy ");
// } else if (dolAverage > koaAverage) {
//   console.log("Dolphins win trophy");
// } else if (koaAverage === dolAverage) {
//   console.log("Both win trophy");
// }

// ------- Switch Statement -------//

//Used to compare a variable to multiple outcome and select the outcome its similar to
// const day = prompt("What day is it?");

// switch (day) {
//   // basically asking for day === monday or day === tuesday or day === wednesday
//   case "monday":
//     console.log("Go to store");
//     console.log("Go to gym");
//     break;
//   case "tuesday":
//     console.log("Go to Work");
//     console.log("Go to musuem");
//     break;
//   case "wednesday":
//   case "thursday": 
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("recorrd videos")
//     break;
//   case "saturday": 
//   case "sunday":
//   console.log("Enjoy weekend")
//     break;
//   default: console.log("Not a valid day")
// }

//------- Conditional Ternary Operator ------- //

const age = 23;
const drink= age >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);


let drink2;
if(age>= 18){
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧'
}
console.log(drink2);
//------- Coding Challenge Four -------//
const bill = 375;

let tip = bill >= 50 && bill <=300  ? tip = bill*.15 : tip = bill * 0.20

const total = bill + tip
console.log(total)