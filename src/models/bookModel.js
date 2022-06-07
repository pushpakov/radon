const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String, 
        required: true
    },
    prices: {
        indianPrice: String,
        europePrice: String
    },
    year : {
        type : Number,
        default : 2021                        //if year is not mentioned it will be 2021 
    },
    tags: [String],
    authorName: String, 
    totalPages : Number,
    stockAvailable : Boolean,                  //true or false
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)         //books 
