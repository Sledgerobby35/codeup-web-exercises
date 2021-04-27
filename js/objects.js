(function() {
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
    var person = {
        firstName: "Robert",
        lastName: "Sledge",
        sayHello: function(){
            return `Hello from ${this.firstName} ${this.lastName}`;
        }
    };
    console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

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

    function discount(obj){
        let discount = 0.12;
        for(let i = 0; i <= obj.length - 1; i++){
            var price = obj[i].amount;
            var name = obj[i].name;
            var discounted = price * discount;

            if(price >= 200){
                console.log(`${name} you owe ${price}.\nYou've saved ${discounted} by the applied discount of ${discount * 100}%`);
                console.log('------------------');
            } else {
                console.log(`${name} you owe ${price}.\nUnfortunately you do not qualify for a discount.\nYour final amount due is ${price}`);
                console.log('------------------');
            }
        }
    }
    //discount(shoppers);
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
    var books = [
        {
            title: "Eragon",
            author: {
                firstName: "Christopher",
                lastName: "Paolini"
            }
        },
        {
            title: "The Lightning Thief",
            author: {
                firstName: "Rick",
                lastName: "Riordan"
            }
        },
        {
            title: "Dungeon Born",
            author: {
                firstName: "Dakota",
                lastName: "Krout"
            }
        },
        {
            title: "To Kill A Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "I am Number 4",
            author: {
                firstName: "Pittacus",
                lastName: "Lore"
            }
        }
    ]
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
    function logBooks(obj){
        for(let i = 0; i < obj.length; i++){
            console.log("------------------");
            let book = obj[i].title;
            let name = `${obj[i].author.firstName} ${obj[i].author.lastName}`;
            console.log(`Book # ${i + 1}\nTitle: ${book}\nAuthor: ${name}`);
        }
    }
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
    var newBooks = [];
    function createBook(title, authorFullName){
        authorFullName = authorFullName.split(" ");
        let obj = {};
            obj.title = title;
            obj.author = {};
                obj.author.firstName = authorFullName.shift();
                obj.author.lastName = authorFullName.pop();
        return obj;
    }
    books.push(createBook("The Maze Runner", "James Dashner"));
    newBooks.push(createBook("The Maze Runner", "James Dashner"));
    newBooks.push(createBook("Eragon", "Christoper Paolini"));
    newBooks.push(createBook("The Lightning Thief", "Rick Riordan"));
    newBooks.push(createBook("Dungeon Born", "Dakota Krout"));
    newBooks.push(createBook("To Kill A Mockingbird", "Harper Lee"));
    newBooks.push(createBook("I am Number 4", "Pittacus lore"));
    logBooks(books);
    logBooks(newBooks);
})();
