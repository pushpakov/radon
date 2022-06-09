const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

//Write a POST api that creates a book from the details in the request body.
// The api takes both the author and publisher from the request body. 


const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher_id

    // The authorId is present in the request body. If absent send an error message that this detail is required

    if(!authorId) {
        return res.send({message: "Author id must be present in the book detials"})   
    }

    // If present, make sure the authorId is a valid ObjectId in the author collection.
    // If not then send an error message that the author is not present.

    let author = await authorModel.findById(authorId)

    if(!author) {
        return res.send({message: "Not a valid author id"})
    }

    // The publisherId is present in the request body.
    // If absent send an error message that this detail is required
    
    if(!publisherId) {
        return res.send({message: "Publihser id must be present in the book details"})
    }

    // If present, make sure the publisherId is a valid ObjectId in the publisher collection.
    // If not then send an error message that the publisher is not present.

    let publisher = await publisherModel.findById(publisherId) 

    if(!publisher) {
        return res.send({message: "Not a valid publisher id"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

// Write a GET api that fetches all the books along with their author details
// (you have to populate for this) as well the publisher details (you have to populate for this) 

const getBooks = async function (req, res){

    let allBooks = await bookModel.find().populate('author_id publisher_id')
    res.send({msg: allBooks})

}

// Add a new boolean attribute in the book schema called isHardCover
// with a default false value.
//For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const booleanUpdate = async function(req, res) {
    let publisherId= await publisherModel.find({$or: [{name : "penguin"},{ name: "Harper Collins"}]}).select({_id:1})
    console.log(publisherId);

    let updateBook= await bookModel.updateMany({publisher_id: publisherId},{$set: {isHardCover: true}}, {new: true})
    
    res.send({msg: updateBook})
}


//For the books written by authors having a rating greater than 3.5,
// update the books price by 10 
//(For eg if old price for such a book is 50, new will be 60) 

const priceUpdate = async function(req, res) {

    let authorId= await authorModel.find({rating: {$gt: 3.5}})
    console.log(authorId)
    let updatePrice= await bookModel.updateMany({author_id: authorId},{$inc: {price: 10}}, {new:true})
    console.log(updatePrice)   

    res.send({msg: updatePrice})
}



module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.booleanUpdate= booleanUpdate
module.exports. priceUpdate=  priceUpdate

