// ---------------------------GENRATE A RANDOM NUMBERS BETWEEN 1 AND 100-----------------------------

// var ranNum = Math.random();
// var newRanNum = (ranNum * 100) + 1;
// console.log(newRanNum);

// ---------------------------GENRATE A RANDOM NUMBERS BETWEEN 2 INPUT OF USER-----------------------

// var num1 = prompt("Enter First Number: ");
// var num2 = prompt("Enter Second Number: ");
// var randomNum = Math.random();
// var newNum = (randomNum *  num2) + num1;
// console.log(newNum);

// ---------------------------WHEN COIN IS TOSSED----------------------------------------------------

// var randomNum = Math.random()
// var newNum = Math.round(randomNum);
// if (newNum===0){
//     console.log("Head");
// }else{
//     console.log("Tail");
// }

// ---------------------------GENERATE A RANDOM PASSWORD---------------------------------------------

// var storeChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890`=+)(*&^%$#@!~!@#$%^&*()_<>,.{}[]:|\?/";
// var password = "";
// var lengthOfChar = 99;

// for (let i=0; i<8; i++){
//     var randomNum = Math.random()
//     var newNum = Math.round(randomNum * 99); 
//     password = password + storeChar.charAt(newNum);
// }
//     console.log("Strong Password: " +password);

// ---------------------------STRING TO INTERGER------------------------------------------------------

// var num1 = "123";
// var newNum = ~~num1;
// var newNum1 = +num1;
// var newNum2 = Number(num1);
// var newNum3 = parseInt(num1);

// console.log(newNum);
// console.log(newNum1);
// console.log(newNum2);
// console.log(newNum3);
    
// ---------------------------STRING TO DECIMAL-------------------------------------------------------

// var num1 = "123.5";
// var newNum1 = +num1;
// var newNum2 = Number(num1);
// var newNum3 = parseFloat(num1);

// console.log(newNum1);
// console.log(newNum2);
// console.log(newNum3);

// ----------------------------TAKE INPUT FROM USER AND CONVERT TO INT OR DEC--------------------------

// var newNum = prompt("Enter a String: " );
// var num1 = +newNum;
// console.log("The number is integer or decimal" +num1);

// ----------------------------TAKE INPUT FROM USER AND CONVERT STRING TO NUMBER AND NUMBER TO STRING---

// var num1 = "123";
// var newNum = Number(num1);
// console.log("String to Number: " +newNum);

// var num1 = 1234;
// var newNum = num1.toString();
// console.log("Number to String: " +newNum);

// ---------------------------TAKE INPUT FROM USER AND CONVERT TO STRING OR NUMBER----------------------

// var newNum1 = "123";  // input is string now it convert to number 123 + 1 = 124;
// var newNum1 = 123; // input is Number now it convert to nu 123 + 1 = 124;

// if (newNum1===newNum1.toString()){
//     var newNum = Number(newNum1);
//     console.log(newNum + 1 + " --> Is a Number");
// }else if(newNum1===Number(newNum1)){
//     var newStr = newNum1.toString();
//     console.log(newStr + 1 + " ---> Is a String");
// }

// -----------------------------CONTROLLING THE FORMAT OF A NUMBERS---------------------------------------------
// var num = 123.45678;
// var newNum = num.toFixed(2);
// console.log(newNum);

// var num = 123.45678;
// var newNum = num.toFixed(4);
// console.log(newNum);

// var inputNum = prompt("Enter Number: ");
// var num1 = parseFloat(inputNum);
// console.log(num1);
// var inputForPlaces = prompt("Enter number for Decimal places: ");
// var num2 = parseInt(inputForPlaces);
// console.log(num2);
// var newNum = num1.toFixed(num2);
// console.log(newNum);
          
// --------------------------------------------------------------------------------------------------------------
// var rightNow = new Date();
// console.log(rightNow);

/* Print the current date and time in a specific format (e.g. "YYYY-MM-DD HH:mm:ss"). */

// var date = new Date();
// var newDate = date.toISOString();
// console.log("YYYY-MM-DD HH:mm:ss Time is: " +newDate);

/* Write a program that returns the current date and time as a string. */
// var currentDate = new Date()
// var newNum = currentDate.toString();
// console.log(newNum);
// console.log(typeof(newNum));

/*AGE CALCULATOR BY BIRTHDATE */
// var inputDOB = prompt("Enter Your DOB (DD-MM-YYYY) : ");
// var birthDate = new Date(inputDOB);

// var currentDate = new Date();

// var totalAge = currentDate.getFullYear() - birthDate.getFullYear();
// console.log("Your Total Age is: " +totalAge);

// ----------------------------Extracting Parts of the Date and Time----------------------

/* Extract the year from the current date and print it to the console.  */
// var currentDate = new Date();
// var getOnlyYear = currentDate.getFullYear();
// console.log(getOnlyYear);

/* Extract the month from the current date and print it to the console. */
// var currentDate = new Date();
// var getOnlyMonth = currentDate.getMonth();
// console.log(getOnlyMonth);

/* Write a program that takes a date input and extracts the day, month,
 and year as separate values. */

// var inputDate = prompt("Enter the date: ");
// var date = new Date(inputDate);

// var getCurrentDate = date.getDate();
// var getCurrentMonth = date.getMonth() + 1;
// var getCurrentYear = date.getFullYear();

// console.log("Date: " +getCurrentDate+ " Month: " +getCurrentMonth+ " Year: " +getCurrentYear);

// -----------------------------------Specifying a Date and Time---------------------------
/* Create a Date object for a specific date and time (e.g. January 1, 2022 12:00:00). */

// var specificDate = new Date("January 1, 2022 12:00:00");
// var specificDate = new Date();
// var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
// // var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

// var month = specificDate.getMonth(); 
// var monthName = monthNames[month];

// var year = specificDate.getFullYear();
// var day = specificDate.getDate();
// var hours = specificDate.getHours();
// var minutes = specificDate.getMinutes();
// var seconds = specificDate.getSeconds();

// console.log(monthName+ " " +day+ ", " +year+ " " +hours+ ":" +minutes+ ":" +seconds);

/* Create a Date object for a specific date and time using user-inputted values. */

// var year = prompt("Enter the Year: ");
// var month = prompt("Enter the month(1-12): ");

// var day = prompt("Enter the day(1-31): ");
// var hour = prompt("Enter the hours: ");
// var minutes = prompt("Enter the Min: ");
// var seconds = prompt("Enter the Seconds: ");

// month = month - 1;
// var date = new Date(year, month, day, hour, minutes, seconds);

// alert("Date Object: " +date);


/* Write a program that takes a string input (e.g. "2022-01-01 12:00:00") and 
creates a Date object from it. */
 
// var inputString = "2022-01-01 12:45:00";
// var dateobject = new Date(inputString);

// console.log(dateobject);

// -------------------------Changing Elements of a Date and Time----------------------------
/* Add one day to the current date and print the new date. */

// var currentDate = new Date();
// var newDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
// console.log("The next date is: " +newDate);

/* Subtract one hour from the current time and print the new time. */

// var currentTime = new Date();
// console.log("Current Time is: " +currentTime);
// var previousTime = new Date(currentTime.getTime() - 60 * 60 * 1000);
// console.log("One Hour Ago: " +previousTime);

/* Write a program that takes a Date object and 
adds or subtracts a specified number of days, hours, or minutes. */

// var currentDate = new Date("2022-12-31 12:45:11");
// console.log(currentDate);
// var newDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
// console.log(newDate);

/* Countdown Timer: Write a JavaScript program to create a countdown timer that displays
 the remaining time until a specific date and time. */







