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
