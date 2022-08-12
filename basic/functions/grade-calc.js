// student score
// total possible score
// 15/20 => 'you got a C (75%)!'
// A 100/90 B 89/80 C 79/70 D 69/60 F 59/0

const studentScoreResult = (score, max) => {
  if (typeof score !== "number" || typeof max !== "number") {
    throw Error("Both arguments should be numbers");
  } else {
    let scorePercent = (score / max) * 100;
    let letterGrade = "";
    if (scorePercent >= 90) {
      letterGrade = "A";
    } else if (scorePercent >= 80) {
      letterGrade = "B";
    } else if (scorePercent >= 70) {
      letterGrade = "C";
    } else if (scorePercent >= 60) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }
    return `You got a ${letterGrade} (${scorePercent}%))!`;
  }
};

try {
  let studentScore = "45";
  let maxScore = 100;
  console.log(studentScoreResult(studentScore, maxScore));
} catch (e) {
  console.log(e.message);
}
