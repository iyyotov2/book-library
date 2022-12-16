const Book = require('../models/Book');

async function getById (id) {
    return Book.findById(id);
}

async function getAll (query) {
    if (query) {
        const userId = query.split('=')[1].slice(1, -1);
        
        return Book.find({ _ownerId: userId });
    }

    return Book.find({});
}

async function create (book) {
    const result = new Book({
        bookTitle: book.bookTitle,
        author: book.author,
        yearOfIssue: book.yearOfIssue,
        image: book.image,
        genre: book.genre,
        nationality: book.nationality,
        _ownerId: book._ownerId
    });

    await result.save();

    return result;
}

async function updateById (existing, book) {
    existing.bookTitle = book.bookTitle;
    existing.author = book.author;
    existing.yearOfIssue = book.yearOfIssue;
    existing.image = book.image;
    existing.genre = book.genre;
    existing.nationality = book.nationality;

    await existing.save();

    return existing;
}

async function deleteById (id) {
    return await Book.findByIdAndDelete(id);
}

module.exports = {
    getById,
    getAll,
    create,
    updateById,
    deleteById
}