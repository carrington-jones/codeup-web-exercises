(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};

    person.firstName = "Carrington";
    person.lastName = "Jones";

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = "Hello from " + person.firstName + " " + person.lastName + "!";
    console.log(person.sayHello);


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
        if (shopper.amount >= 200) {
            console.log(shopper.name + " you get a discount!" + "Your orginal total amount was $" + shopper.amount + " Your new total is $" + (shopper.amount * .88).toFixed(2))
        } else {
            console.log(shopper.name + " you do not get a discount" + " Your total is $" + shopper.amount)
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

// var books = [
//         {
//             title: "theCatcherInTheRye",
//             author: {
//                 firstName: "JD",
//                 lastName: "Salinger"
//             }
//         },
//         {
//             title: "prideAndPrejudice",
//             author: {
//                 firstName: "Jane",
//                 lastName: "Austen"
//             }
//         },
//         {
//             title: "harryPotter",
//             author: {
//                 firstName: "JK",
//                 lastName: "Rowling"
//             }
//         },
//         {
//             title: "ofMiceandMen",
//             author: {
//                 firstName: "John",
//                 lastName: "Steinbeck"
//             }
//         },
//         {
//             title: "theGreatGatsby",
//             author: {
//                 firstName: "f.Scott",
//                 lastName: "Fitzgerald"
//             }
//         },
//     ];
//     console.log(books[0].title);
//     console.log(books[0].author.firstName)
//     console.log(books[0].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // books.forEach(function(book) {
    //     console.log("Book # " + (books.indexOf(book)+1) + "\n" + "Title: " + book.title + "\n" + book.author.firstName + " " + book.author.lastName)
    // });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirst, authorLast) {
        books.push({
            title: title,
            author: {
                firstName: authorFirst,
                lastName: authorLast
            }
        });
    }

// console.log(createBook("1984", "George", "Orwell"));

    var books = []
    var theCatcherInTheRye = createBook("theCatherInTheRye", "JD", "Salinger");
    var prideAndPrejudice = createBook("prideAndPrejudice", "Jane", "Austen");
    var harryPotter = createBook("harryPotter", "JK", "Rowling");
    var ofMiceandMen = createBook("ofMiceandMen", "John", "Steinbeck");
    var theGreatGatsby = createBook("theGreatGatsby", "f.Scott", "Fitzgerald");
    console.log(books);

// >>>>>>>>>>>>>>>>2nd bonus<<<<<<<<<<<<<<<<<<
//
    function showBookInfo(book, bookNumber) {
        console.log("Book # " + (bookNumber + 1));
        console.log("Title: " + book.title);
        console.log("author: " + book.author.firstName + " " + book.author.lastName);
    }

    books.forEach(showBookInfo);


})();
