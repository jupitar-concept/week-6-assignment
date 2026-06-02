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