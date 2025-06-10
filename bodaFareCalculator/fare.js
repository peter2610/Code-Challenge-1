// Function that creates a boda fare calculator using closures
function createBodaFareCalculator(baseFare = 50, chargePerKm = 15) {
  // Outer lexical scope: defines the base pricing
  return function calculateFare(distanceInKm) {
    // Input validation: check if input is a valid number and not negative
    if (isNaN(distanceInKm) || distanceInKm < 0) {
      return "enter valid number?:";
    }
    // Calculate the total fare and the distance-based charge
const totalFare = baseFare + (distanceInKm * chargePerKm);
    const distanceCharge = distanceInKm * chargePerKm;
// Print fare breakdown
    console.log("Boda Fare Breakdown:");
    console.log(`Uko kwote?:io ni ${distanceInKm} km`);
    console.log(` Ukikalia Pikipiki : KES ${baseFare}`);
    console.log(`Mpaka Uko : KES ${distanceCharge}`);
    console.log(`total: KES ${totalFare}\n`);
// Return final message
    return "Panda Pikipiki!";
  };
}

// Prompt the user for distance input
const input = prompt("Unafika wapi Mkubwa? kilometer ngapi?");
const distance = parseFloat(input);

// Create fare calculator and calculate fare based on user input
const calculateBodaFare = createBodaFareCalculator();
const result = calculateBodaFare(distance);

// Display final message
console.log(result);
