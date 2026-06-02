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



// TASK 3: Type Conversion 
// Student data received as strings (or wrong types)
let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// Convert studentAge to a whole number using parseInt()
// parseInt() is suitable because age should be an integer
studentAge = parseInt(studentAge);

// Convert examScore to a decimal number using parseFloat()
// parseFloat() preserves the decimal part of the score
examScore = parseFloat(examScore);

// Convert passMark using Number()
// Number() converts the entire string into a numeric value
passMark = Number(passMark);

// Convert studentName to a string using String()
// String() converts the number into a text value
studentName = String(studentName);

// Log value and type after conversion
console.log("Student Age:", studentAge, "| Type:", typeof studentAge);
console.log("Exam Score:", examScore, "| Type:", typeof examScore);
console.log("Pass Mark:", passMark, "| Type:", typeof passMark);
console.log("Student Name:", studentName, "| Type:", typeof studentName);

// Check if examScore is greater than passMark
let hasPassed = examScore > passMark;
console.log("Exam Score > Pass Mark:", hasPassed);



// TASK 4: Conditional Statements
function getGrade(score) {
  if (score >= 70) {
    console.log("Score: " + score + " | Grade: A — Distinction");
  } else if (score >= 60) {
    console.log("Score: " + score + " | Grade: B — Merit");
  } else if (score >= 50) {
    console.log("Score: " + score + " | Grade: C — Pass");
  } else if (score >= 40) {
    console.log("Score: " + score + " | Grade: D — Near Pass");
  } else {
    console.log("Score: " + score + " | Grade: F — Fail");
  }
}

// Test cases
getGrade(73);
getGrade(58);
getGrade(35);