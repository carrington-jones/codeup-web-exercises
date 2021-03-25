// You have a pizza that has 8 slices

// var slices =8;
// while(slices > 0) {
//     console.log("I'll have a slice!");
//     slices = slices - 1;
//     if(slices > 1)  {
//         console.log(" Now there is " + slices + " slices left!");
// }   else {
//         console.log(" Now there is " + slices + " slice left!");
// }
//     if (slices <= 2) {
//         console.log(" The pizza is almost done...");
//     }
// }
// console.log("No more pizza :(");

//Pseudocode

// Ask the user input
// Get the user input
// Declare a user input variable
// Store user input in the variable
// Declare a variable to store the toal (accumulator)
// Add cost of the new item to the total
// Keep storing the new total in the accumulator
// Tell the user how to end the program (sentinel value)
// Loop back around and do it all over until the user tells to stop

var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
alert("The price of your item was " + priceOfItem); //<<<Check to make sure we are off to right start. Users also like the feedback
var totalCost = priceOfItem;
var userInput = "";
// create a sentinel value
while(userInput !== "STOP") {
    userInput = (prompt("Enter the price of your next item  \r\n\ Enter STOP when you are done"));
    if (userInput === "STOP") {
        alert("Ok your final total is " + totalCost);
    } else {
        priceofItem = parseFloat(userInput);
        totalCost = totalCost + priceOfItem;
        alert("Your total is now " + totalCost.toFixed(2));
    }
}





