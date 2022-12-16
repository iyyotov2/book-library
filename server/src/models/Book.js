const { model, Schema, Types: { ObjectId } } = require("mongoose");

const bookSchema = new Schema({
    bookTitle: { type: String },
    author: { type: String },
    yearOfIssue: { type: String },
    image: { type: String },
    genre: { type: String },
    nationality: { type: String },
    // price: { 
    //     type: Number,
    //     min: [0.01, 'Price must be a positive number']
    // },
    _ownerId: { type: ObjectId, ref: 'User' }
});

const Book = model('Book', bookSchema);

module.exports = Book;