/*---------------------------------------Switch Statment------------------------------------------

Assignment 1:
Write a JavaScript program that uses a switch statement to print the day of the week based on a
given number (1-7). */

// let inputWeek = parseInt(prompt("Enter a number between 1 and 7:"));
// switch (inputWeek) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wendenday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Input error!");
//     break;
// }

/* Assignment 2:
Write a JavaScript program that uses a switch statement to print 
the name of a month based on a given number (1-12). */

// let inputMonth = parseInt(prompt("Enter a number between 1 and 12:"));
// switch (inputMonth) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("Mar");
//     break;
//   case 4:
//     console.log("Apr");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("Aug");
//     break;
//   case 9:
//     console.log("Sep");
//     break;
//   case 10:
//     console.log("Oct");
//     break;
//   case 11:
//     console.log("Nov");
//     break;
//   case 12:
//     console.log("Dec");
//     break;
//   default:
//     console.log("Input error!");
//     break;
// }

/* Assignment 3:
Write a JavaScript program that uses a switch statement to determine the type of a vehicle based 
on a given string ("car", "truck", "motorcycle", etc.). */

// let inputForVehicle = prompt("Enter the Vechile Type Such as (Car, Truck, Bus, Motorcycle etc): ");

// switch(inputForVehicle.toLowerCase()){
//     case 'car':
//         console.log("You Selected a Car");
//         break;
//     case 'truck':
//         console.log("You Selected a Truck");
//         break;
//     case 'bus':
//         console.log("You Selected a Bus");
//         break;
//     case "motorcycle":
//         console.log("You Selected a Motorcycle");
//         break;
//     default:
//         console.log("Input Error");
// }

/* Assignment 4:
Write a JavaScript program that uses a switch statement to calculate the cost of shipping based on the weight
of a package (0-10 pounds, 11-20 pounds, etc.). */

// let weight = parseFloat(prompt("Enter the weight of the package in pounds:"));
// let cost;

// switch (true) {
//     case (weight > 0 && weight <= 10):
//         cost = 5;
//         break;
//     case (weight > 10 && weight <= 20):
//         cost = 10;
//         break;
//     case (weight > 20 && weight <= 30):
//         cost = 15;
//         break;
//     case (weight > 30 && weight <= 40):
//         cost = 20;
//         break;
//     case (weight > 40):
//         cost = 25;
//         break;
//     default:
//         console.log("Invalid weight entered.");
//         break;
// }

// if (cost > 0) {
//     console.log(`The shipping cost for a package weighing ${weight} pounds is ${cost.toFixed(2)}.`);
// }


/* Assignment 5:
Write a JavaScript program that uses a switch statement to determine the grade 
of a student based on their score (A: 90-100, B: 80-89, C: 70-79, etc.). */

// let grade = 100;

// switch(true){
//     case (grade >= 90 && grade <= 100):
//         console.log("Your Grade is A");
//         break;
//     case (grade >= 80 && grade < 90 ):
//         console.log("Your Grade is B");
//         break;
//     case (grade >= 70 && grade < 80):
//         console.log("Your Grade is C");
//         break;
//     case (grade >= 60 && grade < 70):
//         console.log("Your Grade is D");
//         break;
//     case (grade >= 50 && grade < 60):
//         console.log("Your Grade is F");
//         break;
//     default:
//         console.log("Invild Marks");
//         break;
// }


/* ------------------------------------------While Loop-------------------------------

Assignment 1: Fibonacci Sequence (imp)
Write a JavaScript program that uses a while loop to print the 
first 10 numbers in the Fibonacci sequence. */

// let inputForSeries = parseInt(prompt("Enter the term for Fibonacci Series: "));
// let fibonacciSeries = [];
// let num1 = 0, num2 = 1, nextTerm;
// let i = 1;
// while (i <= inputForSeries){
//     fibonacciSeries.push(num1);
//     nextTerm = num1 + num2;
//     num1 = num2;
//     num2 = nextTerm;
//     i++;
// }
// console.log(`Fibonacci Series of ${inputForSeries} terms is: ${fibonacciSeries}`);

/* Assignment 2: Guessing Game (imp)
Write a JavaScript program that uses a while loop to play a guessing game, 
where the user has to guess a randomly generated number between 1 and 100. */

