// -------------------CHAPTER 15---------------------------------
// var city1 = 'Swabi';
// var city2 = 'Peshawar';
// var city3 = 'Islamabad';
// var city4 = 'Karachi';
// console.log("Hi This is: " +city1);

// var arr = ['Swabi','Topi','Mardan','Swat','Bamkhel'];
// for (i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// ----------------------INPUT SYANTAX FOR ARRAY------------------------------------
// let numbers = new Array(5);
// for (let i=0; i<5; i++) {
//     let input = prompt("Enter any Number: ");
//     numbers[i] = Number(input);
// }
// console.log("Full Array is: " +numbers);

// ------------------CHAPTER 16---------------------
// var arr = [];
// arr[0] = 'tsyyeb';
// arr[1] = 'khan';
// arr[2] = 'Frontend';
// arr[3] = 'Developer';
// arr[4] = 12;
// arr[5] = 313;

// console.log(arr);

// ------------------------Pop() and Push()-------------------------------
// var arr = new Array();

// for (let j=0; j<6; j++){
//     let input = prompt("Enter the Numbers: ");
//     arr[j] = Number(input);
// }
// console.log("This is Full Array: " +arr);
// console.log(arr.length); // 6

// for (let i=0; i<4; i++){
//     arr.pop();
// }
// console.log("This is array after Pop: " +arr);

// ------------------------Shift(),unshift(),slice() and splice()-----------------
var arr = [9,8,7,6];
arr.shift(); // like Pop();
console.log(arr); // [8,7,6]

arr.unshift(9); // like Push(9)
console.log(arr); // [9,8,7,6]

arr.splice(0, 6,'T','A','Y','Y','E','B');
console.log(arr); 

arr.splice(1,1, 'a');
console.log(arr);

let arr1 = arr.slice(4,6);
console.log(arr1);
console.log(arr);