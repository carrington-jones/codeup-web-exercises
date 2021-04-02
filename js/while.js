// var x = 1;
// while(x < 65536) {
//     x = (x * 2)
//     console.log(x);
// }

// var number = Math.floor(math.random() * 6) +1;
// var guess;
//
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// }while(guess !== number);
//
// alert("Your guess of " + guess + " matches the number" + number + "!");

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones >= conesSold) {
        allCones = allCones - conesSold;
        console.log("I sold " + conesSold + " cones.");
        console.log("I need to sell " + allCones + " more cones.");
    } else if (conesSold > allCones) {
        console.log("I cannot sell you " + conesSold + " cones, because I only have " + allCones + ".");
    }
} while (allCones > 0);
console.log("Yay! I sold them all");
