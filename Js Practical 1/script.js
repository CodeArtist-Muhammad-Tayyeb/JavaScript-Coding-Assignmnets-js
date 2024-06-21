var grade;
var marks;
marks = prompt('Enter your marks out of 100: ');

if (isNaN(marks) && marks <= 0 && marks >= 100) {
    console.log('Invalid input. Please enter a valid number between 0 and 100.');
} 
else if (marks >= 90 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 80 && marks < 90) {
        grade = 'B';
    } else if (marks >= 70 && marks < 80) {
        grade = 'C';
    } else if (marks >= 60 && marks < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

console.log(`Your grade is ${grade}`);

