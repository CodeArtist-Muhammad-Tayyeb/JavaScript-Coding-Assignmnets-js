/* Write a JavaScript program that takes an array of numbers as input.
Use a for loop to iterate through the array.
Initialize variables highest and lowest to the first element of the array (use let for mutability).
During the loop, compare each element with highest and lowest.

If the current element is greater than highest, update highest.
If the current element is less than lowest, update lowest.

After the loop, print the highest and lowest numbers. */


let arr = [];
for (let i=0; i<6; i++) {
    let input = prompt("Enter any Number: ");
    arr[i] = Number(input);
}
console.log("Full Array Is: " +arr);

let numHigh = arr[0];
let numLow = arr[0];

for(let j=0; j<arr.length; j++){
    if(arr[j] > numHigh){
        numHigh = arr[j];

    }else if(arr[j] < numLow){
        numLow = arr[j];
    }  
}

console.log("Highest Number is: " +numHigh);
console.log("lowest Number is: " +numLow);



