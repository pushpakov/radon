const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

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

const allBooks = async function (req, res) {
    let savedData = await authorModel.find({author_name : "Chetan Bhagat" })
    const id = savedData[0].author_id
    const bookName = await bookModel.find({author_id : id }).select({name : 1, _id: 0})
    res.send({msg: bookName})
}   

const updateBookPrice = async function (req, res) {
    let bookDetail = await bookModel.find({name: "Two states"})
    let id = bookDetail[0].author_id
    let authorN = await authorModel.find({author_id : id}).select({author_name:1, _id:0 })

    const bkName = bookDetail[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100}, {new:true}).select({price:1, _id:0})
    res.send({msg: authorN, updatedPrice})
}

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