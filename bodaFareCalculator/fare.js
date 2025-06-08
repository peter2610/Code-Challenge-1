function createBodaFareCalculator(baseFare = 50, chargePerKm = 15) {
  // Outer lexical scope: defines the base pricing
  return function calculateFare(distanceInKm) {
    if (isNaN(distanceInKm) || distanceInKm < 0) {
      return "Tafadhali ingiza nambari sahihi ya kilometer!";
    }
const totalFare = baseFare + (distanceInKm * chargePerKm);
    const distanceCharge = distanceInKm * chargePerKm;

    console.log("Boda Fare Breakdown:");
    console.log(`Uko kwote?:io ni ${distanceInKm} km`);
    console.log(` Ukikalia Pikipiki : KES ${baseFare}`);
    console.log(`Mpaka Uko : KES ${distanceCharge}`);
    console.log(`total: KES ${totalFare}\n`);

    return "Panda Pikipiki!";
  };
}

// Prompt user for input
const input = prompt("Unafika wapi Mkubwa? kilometer ngapi?:");
const distance = parseFloat(input);
