var userInput = parseFloat(prompt("Please enter an odd number between 1 and 50"));
console.log("Number to skip is "+ userInput);
for(var i = 1; i<= 50; i++){
    if (i === userInput) {
        console.log("Yikes! Skipping number " + i);
    } else if (!(i % 2 === 0)) {
        console.log("Here is an odd number: " + i);
    }
}