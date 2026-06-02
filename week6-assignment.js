// TASK 1: Declare variables for a student profile
let firstName = "Adeolu";
let lastName = "Afikode";
let age = 32;
const studentId = "FUT-04701";
const gpa = 4.05;
let isEnrolled = true;
let graduationDate = null;

// Log all variables to the console with labels
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

// Reassign firstName to a nickname
firstName = "Jupitar";

// Log updated firstName
console.log("Updated First Name:", firstName);

//TASK 2: Score Tracker using Arithmetic and Assignment Operators
let totalScore = 0;
console.log("Initial Score:", totalScore);

// First test score
totalScore += 45;
console.log("After First Test (+45):", totalScore);

// Second test score
totalScore += 30;
console.log("After Second Test (+30):", totalScore);

// Deduct 5 marks
totalScore -= 5;
console.log("After Deduction (-5):", totalScore);

// Double the score for bonus round
totalScore *= 2;
console.log("After Bonus Round (*2):", totalScore);

// Add 1 point using increment operator
totalScore++;
console.log("After Increment (++):", totalScore);

// Find remainder when totalScore is divided by 7
let remainder = totalScore % 7;
console.log("Remainder when divided by 7:", remainder);
