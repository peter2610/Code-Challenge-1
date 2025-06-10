function createTransactionFeeEstimator() {
// Set minimum and maximum transaction fees
  const minFee = 10;
  const maxFee = 70;
  // Fee rate is 1.5%
  const feeRate = 0.015;
return function estimateTransactionFee(amountToSend) {
    // Validate input: must be a number greater than 0
  if (isNaN(amountToSend) || amountToSend <= 0) {
      return "invalid amount?:";
      
    }

    const rawFee = amountToSend * feeRate;
    const fee = Math.min(Math.max(rawFee, minFee), maxFee);
    const total = amountToSend + fee;
// Log the breakdown to the console
    console.log(` sending: KES ${amountToSend.toFixed(2)}`);
    console.log(` calculated Transaction Fee: KES ${fee.toFixed(2)}`);
    console.log(` total amount to be debited: KES ${total.toFixed(2)}\n`);
      // Return a final message
    return "Send Money Securely!";
  };
}

// Prompt user for input
const input = prompt("Unatuma Ngapi? (KES):");
const amount = parseFloat(input);

const estimateFee = createTransactionFeeEstimator();
const message = estimateFee(amount);
if (message) console.log(message);
