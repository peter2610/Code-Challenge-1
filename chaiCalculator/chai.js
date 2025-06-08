// Function that calculates ingredients based on number of cups
function chaiCalculator(numberOfCups) {
  // Define ingredient amounts per cup, multiplied by number of cups
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
       // Return final message after printing ingredients
   return "☕ Enjoy your Chai Bora!";
    };
  };
}
// Prompt the user to enter the number of cups:
const input = prompt("How many cups of Chai Bora would you like to make?");
const cups = parseInt(input);

// Call the  functions 
const message = chaiCalculator(cups)()(); // Invoke all functions
console.log(message); // Shows final return

