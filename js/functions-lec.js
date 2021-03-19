"use strict";
//Immediately Invoke Function Expression (IIFE's) <<< This protects sensitve data such as variables
(function() {

    console.log("Hello World");

// Let's define a function
    function doTheThing(input) {
        var output = input + " was pulled into the function. Now it is this concatenated string.";
        return output;
    }

    console.log(doTheThing("Hotdog"));

    function addStuff(x, y) {
        return x + y;
    }

    console.log(addStuff(17, 18));

// Let's make a "bad" function

    function logToConsole(info) {
        return console.log(info + " is something important to keep in mind");
    }

    function addingToString(str) {
        var finalString = str + " is a string.";
        // console.log(typeof finalString)
        finalString += " And if it was not orginally a string it sure is now!";
        // console.log(finalString)
        return finalString;
    }

    alert(addingToString("Lion"));

// Global vs Local Variables

    var global = "Earth"
    var local = "Geoff"

    console.log(global);

    function getGlobalAndLogIt() {
        var local = "Neptune";
        console.log(global);
        console.log(local);
    }

    getGlobalAndLogIt();
    console.log(local);

// Another way to define functions

    var coolGuyFunction = function (string) {
        return string + ", but with Sunglasses";
    }

    console.log(coolGuyFunction("Tiger"));

})();