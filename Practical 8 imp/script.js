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

// --------------------------------------------------------------------------------------------------------------
var rightNow = new Date();
console.log(rightNow);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(dayNames[theDay]);
