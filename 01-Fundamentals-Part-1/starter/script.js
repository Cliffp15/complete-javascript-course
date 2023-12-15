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

// //------Operator Precendence-------//

const thisYear = 2023;
const ageClifton = thisYear - 1998; // 25
const agejohn = thisYear - 2012; // 11

/*This code deals with the math operators before 
the Comparison Operators to correctly do order 
of operations */
console.log(thisYear - 1991 > thisYear - 2018);

/* Using Parenthesis has the highest level of precendence 
when using operators similar to math*/
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

/*This will make 'averageAge' = 30.5 because it will do 
multiplcation/division before addition/subtraction operations*/
const averageAge = ageClifton + agejohn / 2;
console.log(ageClifton, agejohn, averageAge);

/*This will make 'averageAge' = 18 because it will do 
addition/subtraction operations in the parenthesis before the division*/
const averageAgeParenthesis = (ageClifton + agejohn) / 2;
console.log(ageClifton, agejohn, averageAgeParenthesis);

/*CHALLENGE #1
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

let massMark = 78;
const heightMark = 1.69;
let massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
