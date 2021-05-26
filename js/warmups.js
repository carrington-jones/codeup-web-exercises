// Fizzbuzz 05.24.21

// function fizzbuzz(number) {
//     for (var i = 1; i < number + 1; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else if (i % 5 === 0) {
//              console.log("Buzz")
//         }
//         else if (i % 3 === 0) {
//              console.log("Fizz")
//         } else {
//              console.log(i);
//         }
//     }
// }
//
// console.log(fizzbuzz(30))

//Seven-"Write a function in JavaScript that returns the number 7" 05.25.21
// function seven () {
//     return 7
// }
// const seven2 = () => 7;

function five (number){
    if(typeof number === "number"){
        return number * 5
    } else{
        return 0
    }
}
console.log(five(5))
console.log(five(25))
console.log(five("banana"))
console.log(five(true))
