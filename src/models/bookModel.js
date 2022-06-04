const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["fiction", "Non-fiction"] 
    },
    year: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('library', bookSchema) //liabries



// String, Number
// Boolean, Object/json, array