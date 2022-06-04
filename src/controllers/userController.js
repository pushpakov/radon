const bookModel = require("../models/bookModel")

const createBookData= async function (req, res) {
    let book= req.body
    let savedBook= await bookModel.create(book)
    res.send({msg: savedBook})
}

const getBookData= async function (req, res) {
    let allBook= await bookModel.find()
    res.send({msg: allBook})
}

module.exports.createBookData= createBookData
module.exports.getBookData= getBookData