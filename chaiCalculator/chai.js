function chaiCalculator(numberOfCups) {
  const water = 200 * numberOfCups;         // ml
  const milk = 50 * numberOfCups;           // ml
  const teaLeaves = 1 * numberOfCups;       // tablespoons
  const sugar = 2 * numberOfCups;           // teaspoons

  // First function returns another function 
  return function ingredientBreakdown() {
      console.log(`${greeting} To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
      console.log(`Water: ${water} ml`);
      console.log(`Milk: ${milk} ml`);
      console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
      console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
   return "☕ Enjoy your Chai Bora!";
    };
  };
}
// Prompt user for input:
const input = prompt("How many cups of Chai Bora would you like to make?");
const cups = parseInt(input);

// Call the  functions 
const message = chaiCalculator(cups)()(); // Invoke all functions
console.log(message); // Shows final return

