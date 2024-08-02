/* Assignment 1:
Task: Write a JavaScript function that takes two numbers as arguments and returns their sum.
Function Name: addNumbers
Requirements:
The function should take two numerical arguments, num1 and num2.
The function should return the result of num1 + num2.
Test the function with different inputs (e.g., addNumbers(2, 3), addNumbers(5, 1)). */

// function addNum(num1, num2){
//     return num1 + num2;
// }

// var sumNum = addNum(4,4);
// console.log(sumNum);

/* Assignment 2:
Task: Write a JavaScript function that takes a string as an argument and returns the string in uppercase.
Function Name: toUpper
Requirements:
The function should take a string argument, str.
The function should return the uppercase version of str using the toUpperCase() method.
Test the function with different inputs (e.g., toUpper("hello"), toUpper("world")). */

// function toUpper(str){
//     return str.toUpperCase();
// }

// var newstr = toUpper("katmando");
// console.log(newstr);

/* Assignment 3:
Task: Write a JavaScript function that takes an array of numbers as an argument and returns the average of the numbers.
Function Name: averageArray
Requirements:
The function should take an array of numerical values, arr.
The function should return the average of the numbers in the array using a loop or the reduce() method.
Test the function with different inputs (e.g., averageArray([1, 2, 3]), averageArray([5, 5, 5])). */

// function averageArray(arr){
//     var sum = 0;
//     for (i=0; i<arr.length; i++){
//         var sum = sum + arr[i];
//     }
//     return sum/arr.length;
// }

// console.log(averageArray([2,4]));
// console.log(averageArray([2,4,6,8]));

/* Assignment 4:
Task: Write a JavaScript function that takes a string as an argument and returns the string with all vowels removed.
Function Name: removeVowels
Requirements:
The function should take a string argument, str.
The function should use a regular expression or a loop to remove all vowels (A, E, I, O, U, a, e, i, o, u) from the string.
Test the function with different inputs (e.g., removeVowels("hello world"), removeVowels("javascript")). */

// function removeVowels(str){
//     var vowels = 'aeiouAEIOU';
//     let result = str;

//     for (let i=0; i<vowels.length; i++){
//         var vowel = vowels[i];
//         result = result.replace(vowel, '')
//     }
//     return result;
// }

// console.log(removeVowels("Tayyeb"));

/* Assignment 5:
Task: Write a JavaScript function that takes a number as an argument and returns the factorial of that number.
Function Name: factorial
Requirements:
The function should take a numerical argument, n.
The function should use a loop or recursion to calculate the factorial of n.
Test the function with different inputs (e.g., factorial(5), factorial(3)). */

// function factorial(n){
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(3));

/* Assignment 6:
Task: Write a JavaScript function that takes a string as an argument and returns the string with all letters reversed.
Function Name: reverseString
Requirements:
The function should take a string argument, str.
The function should use a loop or recursion to reverse the letters in the string.
Test the function with different inputs (e.g., reverseString("hello"), reverseString("world")). */

function reverseString(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return reverse;
}
console.log(reverseString("Tayyeb"));











