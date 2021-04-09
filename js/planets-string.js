"use strict";
// (function(){
//     "use strict";
//
//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     var planetsArray;
//
//     /**
//      * TODO:
//      * Convert planetsString to an array, and save it in a variable named
//      * planetsArray.
//      * console.log planetsArray to check your work
//      */
//     planetsArray = planetsString.split("|");
//     console.log(planetsArray);
//
//     /**
//      * TODO:
//      * Create a string with <br> tags between each planet. console.log() your
//      * results. Why might this be useful?
//      *
//      * BONUS:
//      * Create another string that would display your planets in an undordered
//      * list. You will need an opening AND closing <ul> tags around the entire
//      * string, and <li> tags around each planet.
//      */
//
//     var planetsString2 = planetsArray.join("<br>");
//     console.log(planetsString2);
//
//     var planetsString3 = "<ul>" + "<li>" + planetsArray.join("<li>") + "</ul>";
//
//     console.log(planetsString3);
//
// })();
//
//
//
//
// >>>>>>>>>>>>>>>Extra-Exercise-Practice<<<<<<<<<
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
function allIndexesOf(array,value) {
    if (fruits.indexOf(value) === -1) {
        return []
    } else {
        return [fruits.indexOf(value)];
    }
}
console.log(allIndexesOf("fruits", "apple"));
console.log(allIndexesOf("fruits", "guava"));
console.log(allIndexesOf("fruits", "pineapple"));


// function getHighestNumber(firstNumber, secondNumber, thirdNumber) {
//     if ((((typeof (firstNumber) === "number") && (typeof (secondNumber) === "number"))) && (typeof (thirdNumber) === "number")) {
//         return Math.max(firstNumber, secondNumber, thirdNumber);
//     } else {
//         return false
//     }
// }
//
// console.log(getHighestNumber())

