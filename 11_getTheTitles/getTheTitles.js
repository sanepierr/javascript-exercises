const getTheTitles = function(books) {
    bookTitles = [];
    for (const book of books){
        bookTitles.push(book.title)
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
