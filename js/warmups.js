// Fizzbuzz

function fizzbuzz(number) {
    for (var i = 1; i < number + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
             console.log("Buzz")
        }
        else if (i % 3 === 0) {
             console.log("Fizz")
        } else {
             console.log(i);
        }
    }
}

console.log(fizzbuzz(30))