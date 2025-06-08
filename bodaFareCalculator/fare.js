function createBodaFareCalculator(baseFare = 50, chargePerKm = 15) {
  // Outer lexical scope: defines the base pricing
  return function calculateFare(distanceInKm) {
    if (isNaN(distanceInKm) || distanceInKm < 0) {
      return "Tafadhali ingiza nambari sahihi ya kilometer!";
    }
