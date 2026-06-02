// TASK 4 (PART A): Conditional Statements
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