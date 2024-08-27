/* Write a JavaScript program that asks the user for a string and an index,
 and then displays the character at that index in the string using the javascript method. 3 marks */

// var inputForString = prompt("Enter the String: ");
// var inputForIndex = prompt("Enter the Index: ");

// if (inputForIndex >= 0 && inputForIndex < inputForString.length){
//     console.log(inputForString);
//     console.log("The Char at Index " + inputForIndex + " is: " + inputForString.charAt(inputForIndex));
// }else{
//     console.log("Error: Plz Enter index between 0 and " + (inputForString.length - 1));
// }

/* Write a JavaScript program that asks the user for a string, a substring to search for, and a replacement substring, 
and then displays the modified string with all occurrences of the search substring replaced 
using the replace() method. 3 marks */

// let inputString = prompt("Enter any String: ");
// console.log(inputString);
// let inputForSearch = prompt("Enter a SubString for search: ");
// console.log(inputForSearch);
// let inputForreplace = prompt("Enter replacement String: ");
// console.log(inputForreplace);

// var modifiedString = inputString.replaceAll(inputForSearch, inputForreplace);
// console.log(modifiedString);

/* Write a JavaScript program that asks the user for a number and then displays the rounded
 version of the number to the nearest whole number using the round() method. 3 marks  */

//  var input = prompt("Enter any Numbers: ");
//  var newNum = Math.round(input);
//  console.log("The " +input+ " rounded Form is: " +newNum);

/* Write a JavaScript program that asks the user for a number and then displays the ceiling of
 the number using the ceil() method. For example, if the user inputs 4.2, the program should 
 display 5. 3 marks */

var input = prompt("Emter any number: ");
var newNum = Math.ceil(input);
console.log(newNum);

/* Write a JavaScript program that asks the user for a number and then displays the flooring of 
the number using the floor() method. For example, if the user inputs 8.6, the program should 
display 8. 3 marks */

// var input = prompt("Enter any number: ");
// var newNum = Math.floor(input);
// console.log(newNum);