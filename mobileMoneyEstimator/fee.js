function createTransactionFeeEstimator() {
  const minFee = 10;
  const maxFee = 70;
  const feeRate = 0.015;
return function estimateTransactionFee(amountToSend) {
    if (isNaN(amountToSend) || amountToSend <= 0) {
      console.log("unatuma ngapi?");
      return;
    }

    const rawFee = amountToSend * feeRate;
    const fee = Math.min(Math.max(rawFee, minFee), maxFee);
    const total = amountToSend + fee;

    console.log(` sending: KES ${amountToSend.toFixed(2)}`);
    console.log(` calculated Transaction Fee: KES ${fee.toFixed(2)}`);
    console.log(` total amount to be debited: KES ${total.toFixed(2)}\n`);
    return "Send Money Securely!";
  };
}

// Prompt user for input
const input = prompt("Unatuma Ngapi? (KES):");
const amount = parseFloat(input);

const estimateFee = createTransactionFeeEstimator();
const message = estimateFee(amount);
if (message) console.log(message);
