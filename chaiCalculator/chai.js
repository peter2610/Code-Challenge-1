function chaiCalculator(numberOfCups) {
  const water = 200 * numberOfCups;         // ml
  const milk = 50 * numberOfCups;           // ml
  const teaLeaves = 1 * numberOfCups;       // tablespoons
  const sugar = 2 * numberOfCups;           // teaspoons

  // First function returns another function 
  return function ingredientBreakdown() {
    const greeting = "Karibu!";
