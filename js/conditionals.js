"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if(color === "blue") {
//         return "blue is the color of the sky";
//     } else if(color === "red") {
//         return "Strawberries are red";
//     } else {
//         return "I don't know anything about " + color;
//     }
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("yellow"));
// console.log(analyzeColor("purple"));
//
//
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */

// analyzeColor(randomColor);
//
// console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
// switch (colors) {
//         case "blue":
//         "   blue is the color of the sky;";
//             break;
//         case "red":
//             "Strawberries are red";
//             break;
//         case "cyan":
//             "I do not know anything about cyan";
//             break;
//         default:
//             "Another color was picked"
//             break;
//     }
//
// console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// var userColor = prompt("What is your favorite color?").toLowerCase();
// alert(analyzeColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumberWalmart, totalAmount) {
//     if (luckyNumberWalmart === 0) {
//         return "We're sorry you do not qualify for a discount. Your total is " + totalAmount;
//     } else if (luckyNumberWalmart === 1) {
//         return "Congrats! Your lucky numbers is " + luckyNumberWalmart + " you qualify for a 10% discount. Your total is: $" + (totalAmount - (totalAmount * .10));
//     } else if (luckyNumberWalmart === 2) {
//         return "Congrats! Your lucky numbers is " + luckyNumberWalmart + " you qualify for a 25% discount. Your total is: $" + (totalAmount - (totalAmount * .25));
//     } else if (luckyNumberWalmart === 3) {
//         return "Congrats! Your lucky numbers is " + luckyNumberWalmart + " you qualify for a 35% discount. Your total is: $" + (totalAmount - (totalAmount * .35));
//     } else if (luckyNumberWalmart === 4) {
//         return "Congrats! Your lucky numbers is " + luckyNumberWalmart + " you qualify for a 500% discount. Your total is: $" + (totalAmount - (totalAmount * .50));
//     } else if (luckyNumberWalmart === 5) {
//         return "Congrats! Your lucky numbers is " + luckyNumberWalmart + " you qualify for a 100% discount. Your total is: $" + (totalAmount - (totalAmount * 1));
//     } else {
//         return "We're sorry, your luck number does not qualify for a discount. Your total amount is: " + totalAmount;
//     }
// }
//
// console.log(calculateTotal(2,100));
// console.log(calculateTotal(3,1000));
// console.log(calculateTotal(5,50));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var userBill = parseFloat(prompt("What was your total bill?"));
// alert("Your lucky number is: " + luckyNumber);
// alert("Your price before the discount is: $" + userBill);
// alert((calculateTotal(luckyNumber,userBill)));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// var wouldLikeNumber = confirm("Would you like to pick a number?");

// if (wouldLikeNumber === true) {
//     var userNumber = parseFloat(prompt("What is your number?"));
// } else {
//     var userNumber = parseFloat(prompt("Please pick a number!"));
// }
// if (!(isNaN(userNumber))) {
//
//     if (userNumber % 2 === 0) {
//         alert("This number is even!");
//     } else {
//         alert("This number is odd!");
//     }
//     alert("Your number plus 100 is: " + (userNumber + 100) + "!");
//
//     if ((Math.sign(userNumber)) === 1) {
//         alert("This number is positive!");
//     } else if ((Math.sign(userNumber)) === 0) {
//         alert("This number is not positive or negative it is 0!");
//     } else {
//         alert("This number is negative!");
//     }
// } else {
//     alert("This is not a number");
// }

//refractor to functions
//
//

// var numberEntry;
//
// function isOddEven (numberEntry) {
//     return (numberEntry % 2 === 0) ? "This number is even." : "This number is odd.";
// }
//
// function isNegativeorPositive(numberEntry) {
//     return (numberEntry > 0) ? "This number is positve." : "This number is negative.";
// }
// function plus100 (numberEntry) {
//     return "Your number is " + (parseFloat(numberEntry) + 100) + " if we added 100."
// }
//
// if(wouldLikeNumber) {
//     numberEntry = prompt("Please enter a number.")
//     if(isNaN(numberEntry)) {
//         alert("Sorry, that is not a number");
//     } else {
//         alert(isOddEven(numberEntry))
//         alert(isNegativeorPositive(numberEntry))
//         alert(plus100(numberEntry))
//     }
// } else {
//     alert("Fine! Bye!")
// }



function concat(input1, input2) {
    return toString(input1 + input2);
}
console.log(concat(hello, world))