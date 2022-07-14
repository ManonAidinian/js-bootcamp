// student score
// total possible score
// 15/20 => 'you got a C (75%)!'
// A 100/90 B 89/80 C 79/70 D 69/60 F 59/0

const studentScoreResult = (score, max) => {
  let scorePercent = score / max * 100
  if (scorePercent <= 100 && scorePercent >= 90) {
    return `You got a A (${scorePercent}%))!`
  } else if (scorePercent <= 89 && scorePercent >= 80) {
    return `You got a B (${scorePercent}%))!`
  } else if (scorePercent <= 79 && scorePercent >= 70) {
    return `You got a C (${scorePercent}%))!`
  } else if (scorePercent <= 69 && scorePercent >= 60) {
    return `You got a D (${scorePercent}%))!`
  } else {
    return `You got a F (${scorePercent}%))!`
  }
}

let studentScore = 87
let maxScore = 100

console.log(studentScoreResult(studentScore, maxScore))
