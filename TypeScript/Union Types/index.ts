let score: number | string;

score = 85; // valid
score = "Eighty-five"; // also valid

function printScore(score: number | string) {
  console.log(`Score: ${score}`);
}

printScore(85);
printScore("Ninety");
