"use strict"

while(true) {
    var userInput = parseFloat(prompt("Please enter an odd number between 1 and 50"));
    if (userInput % 2 !== 0 && userInput < 50) {
        console.log("Number to skip is " + userInput);
        break;
    }
}
for(var i = 1; i<= 50; i++) {
    if (i === userInput) {
        console.log("Yikes! skipping number: " + i);
    } else if (i % 2 ===0){
        continue;
    }
    if (i === userInput) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}