"use strict";

var bucket = []
var secretcode = "38384040373937396665"
var terminate = "846982777378658469"

var paragraph = document.querySelector("#paragraph");

//Logs keystrokes
$(document).keydown(function (e) {
    var key = e.keyCode; //Triggers transform function when enter key is pressed
    if (e.keyCode === 13) {
        transform();
    }
    if (e.keyCode === 83) { //Starts code over when s key is pressed
        bucket = [];
        paragraph.innerHTML = bucket
    } else {
        bucket.push(key); //Logging of keystrokes
        paragraph.innerHTML = bucket
        console.log(bucket)
    }
});

//FUNCTION FOR WHEN CODE IS ENTERED CORRECTLY
function transform() {
    var newBucket = bucket.join('');
    if (newBucket === secretcode) {
        alert("You have added 30 lives!");
        bucket = []
    }
    if (newBucket === terminate) { //Termination sequence
        alert("Termination sequence has begun");
        termination.innerHTML = "Termination sequence";
        var timer = setInterval(updateTimer, 1000);

        function updateTimer() {
            if (terminationTimer === 0) {
                alert('Termination sequence complete');
                document.body.innerHTML = '';
            } else if (terminationTimer > 0) {
                document.getElementById('terminationtimer').innerHTML = terminationTimer;
            }
            terminationTimer--;
        }

        console.log(newBucket);
    }
}

var termination = document.querySelector("#termination1");
var terminationTimer = 5;

//Increasing Number of tries
var count = 0;
var counter = document.querySelector("#counter");

function counterIncrease() {
    count++;
    counter.innerHTML = count
}

$(document).keydown(function (e) {
    if (e.keyCode === 13) {
        counterIncrease();
    }
})


// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });



