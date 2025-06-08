# code-challenge-1

chaiboraingredientscalculator
bodafarecalculator
mobilemoneyestimator

## chai calculator

javascript program used to calculate the exact amount of ingredients required to make one or more cups of Kenyan chai.

### features

it made to calculate amount of water, milk in (ml) tealeaves and sugar in(teaspoons) according to number of cups required.
it uses both nested functions and lexical scoping.
returns final message after calculating ingredients.
on browser click shift, ctrl and J to see return.

### how it works

open the .js in a code editor or browser,run code on open Devtools(shift+cntrl+J), on prompt, user enter number of cups he/she wants.
the calculator gets the number of cups creates internal variables for each ingredient.
nested functions returns prints required ingredients.
a message is returned showing output in the console plus (Enjoy your chai Bora).

### sample of output

Karibu! To make 5 cups of Kenyan Chai, you will need:
chai.js:13 Water: 1000 ml
chai.js:14 Milk: 250 ml
chai.js:15 Tea Leaves (Majani): 5 tablespoons
chai.js:16 Sugar (Sukari): 10 teaspoons

chai.js:29 ☕ Enjoy your Chai Bora!

### Usage

To run the program:

Copy the `chaiCalculator` code into a `.html` file within a `<script>` tag or use a JavaScript console (like DevTools).
Open in the browser.
Enter the number of cups when prompted.
Check the console for ingredient details and final message. shift,ctrl+ j.

## bodaFarecalculator

javascript program that helps user calculate estimate cost of boda boda(motorcycle) ride based on the distance they plan to ride.

### features

calculates fare based on distance in kms.
shows base fare and per km charge are shown clearly.
includes input validation for user friendly interactions
returns a meaningful message after calcualting

### how it works

on running code, the fare calculator prompts distance in kms.
enter number of kilometers.
it computes the total fare in reference to the kms.
logs breakdown.

### sample output

Boda Fare Breakdown:
fare.js:11 Uko kwote?:io ni 4 km
fare.js:12 Ukikalia Pikipiki : KES 50
fare.js:13 Mpaka Uko : KES 60
fare.js:14 total: KES 110

fare.js:27 Panda Pikipiki!

### usage

paste the code into your browser console or run with node.js .
enter the distance when prompted // fare is kilometers.
see fare breakdown and total.

## mobile money estimator

javascript program to estimate mobile money transaction fees.
automatically calculates the fee 1.5% with limits between kes 10 to kes 70, then returns the total amount to be debited.

### features

calculates the transaction fee based on amount.
caps minimum fee at kes 10 and maximum of kes 70.
javascript functions and lexical scoping used

### how to use

open in a browser or console(js)
enter the amount you want to send
then you will see breakdown: amount, transaction and total to debited.

### sample output

sending: KES 1000.00
fee.js:16 calculated Transaction Fee: KES 15.00
fee.js:17 total amount to be debited: KES 1015.00

fee.js:28 Send Money Securely!

## Author

created by peter NM for educational purpose. feel free to fork and use for learning purpose

## license

This project is licensed under the PNM license. open for use ,sharing and modification with attribution.
