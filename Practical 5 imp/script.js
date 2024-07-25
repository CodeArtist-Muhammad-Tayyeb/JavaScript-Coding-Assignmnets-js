/*Assignment 1 (10 marks):
Use the array method to remove the first two elements from the array [1, 2, 3, 4, 5]. Then, use the array method to add three new elements to the end of the array. Finally, use a for loop to print the new array. */

// let arr = [12,34,2,45,56];
// for (j=0; j<2; j++){
//     arr.shift();
// }
// // // arr.shift();
// // // arr.shift();

// // // arr.splice(0,2);

// console.log("Remove Element from the Begining: " +arr);

// arr.push(12,34,44);

// for (i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

/*Assignment 2
 (10 marks)  :
Use a for loop to iterate over the array [1, 2, 3, 4, 5] and print the indices(index) of the elements that are even numbers. */

// let arr = [1, 2, 3, 4, 5];
// for(i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         console.log(arr.indexOf(arr[i]));
//     }
// }

/* Assignment 3 (10 marks):
Use the array method to add two new elements to the beginning of the array [3, 4, 5]. Then, use the array method to remove the last element from the array. Finally, use a for loop to print the new array.*/

// var arr = [3, 4, 5];
// console.log("Original Array: " +arr);

// arr.unshift(12,23)

// arr.pop()

// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

/* Assignment 4 (10 marks):
Use a for loop to iterate over the array [1, 2, 3, 4, 5] and 
print the elements that are greater than the previous element. */

// let arr = [12,34,23,56,45];

// for (i=1; i<arr.length; i++){
//     if(arr[i] > arr[i-1]){
//         console.log("The elements that are grater than the previous: " +arr[i]);
//     }
// }

/* Assignment 5 (10 marks):
Use the array method to find the index of the element 3 in the array [1, 2, 3, 4, 5]. Then, use the array method to remove all elements starting from that index. Finally, use a for loop to print the new array. */

var arr = [1, 2, 3, 4, 5];
console.log(arr);
var indexOfElement3 = arr.indexOf(3);
console.log("The Index of element 3 is: " +indexOfElement3);

arr.splice(2,3);

for(i=0; i<arr.length; i++){
    console.log(arr[i]);
}



