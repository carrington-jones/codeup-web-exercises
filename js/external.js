"use strict"

var hello = "Hello from external JavaScript";

console.log(hello);

//alert("Welcome to my Website!");

// var favoriteColor = prompt("What is your favorite color?");

// alert(favoriteColor + " is my favorite color too!");

// var googleRate = prompt("How much does Google pay you per hour?");
// parseFloat(googleRate);
// var amazonRate = prompt("How much does Amazon pay you per hour?");
// parseFloat(amazonRate);
// var facebookRate = prompt("How much does Facebook pay you per hour?");
// parseFloat(facebookRate);
// var googleHours = prompt("How many hours did you work at Google?");
// parseFloat(googleHours);
// var amazonHours = prompt("How many hours did you work at Amazon?");
// parseFloat(amazonHours);
// var facebookHours = prompt("How many hours did you work at Facebook?");
// parseFloat(facebookHours);

// var totalPay = alert("Your paycheck this week will be: $" + ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)));
// console.log(totalPay);

var isThereRoominClass = confirm("If there is room in the class Click ok, if there is not room in the class please hit cancel");
var openschedule = confirm("Is your schedule free for this class?");
var canregister = isThereRoominClass && openschedule;
console.log(canregister)


