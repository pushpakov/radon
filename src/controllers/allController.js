const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")


//Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const allBooks = async function (req, res) {
    let savedData = await authorModel.find({author_name : "Chetan Bhagat" })
    const id = savedData[0].author_id
    const bookName = await bookModel.find({author_id : id }).select({name : 1, _id: 0})
    res.send({msg: bookName})
}   


//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const updateBookPrice = async function (req, res) {
    let bookDetail = await bookModel.find({name: "Two states"})
    let id = bookDetail[0].author_id
    let authorN = await authorModel.find({author_id : id}).select({author_name:1, _id:0 })

    const bkName = bookDetail[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100}, {new:true}).select({price:1, _id:0})
    res.send({msg: authorN, updatedPrice})
}


// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const authorsName = async function (req, res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)

    let temp = []
    for (let i=0; i<id.length; i++) {
        let x = id [i]
        const author = await authorModel.find({author_id : x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg: authorName})
}


module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.allBooks= allBooks
module.exports.updateBookPrice= updateBookPrice
module.exports.authorsName= authorsName