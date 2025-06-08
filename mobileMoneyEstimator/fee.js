function createTransactionFeeEstimator() {
  const minFee = 10;
  const maxFee = 70;
  const feeRate = 0.015;
return function estimateTransactionFee(amountToSend) {
    if (isNaN(amountToSend) || amountToSend <= 0) {
      console.log("unatuma ngapi?");
      return;
    }

