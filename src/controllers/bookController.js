const { count } = require("console")
const BookModel= require("../models/bookModel")


//createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


//bookList : gives all the books- their bookName and authorName only 

const bookList= async function (req, res) {
    let allBooks = await BookModel.find().select( {bookName:1 ,authorName :1, _id: 0})
    res.send( {msg : allBooks})
}


//getBooksInYear: takes year as input in post request and gives list of all books published that year

const bookInYear = async function (req, res) {
    let getYear = req.body.year
    console.log(req.body)
    let getBookInYear = await BookModel.find( {
        year: getYear}).select({bookName: 1, year:1, _id:0})

    res.send( { msg: getBookInYear})
}


//getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body


const particularBooks = async function (req, res) {
    let filter = {}
    if (req.body.hasOwnProperty("bookName")) {
      let book = req.body.bookName
      filter.bookName = book
    } else if (req.body.hasOwnProperty("authorName")) {
      let author = req.body.authorName
      filter.authorName = author
    } else if (req.body.hasOwnProperty("tags")) {
      let tag = req.body.tags
      filter.tags = tag
    } else if (req.body.hasOwnProperty("totalPages")) {
      let page = req.body.totalPages
      filter.totalPages = page
    } else if (req.body.hasOwnProperty("year")) {
      let launchYear = req.body.year
      filter.year = launchYear
    } else if (req.body.hasOwnProperty("stockAvailable")) {
      let stock = req.body.stockAvailable
      filter.stockAvailable = stock
    }
    let particularBooks = await BookModel.find(filter)
    res.send(particularBooks)
    console.log(filter)
  }

  //getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 


const inrBooks = async function (req, res) { 
    let getInrBooks = await BookModel.find( { 
        $or: [ {"prices.indianPrice" : "100" },{"prices.indianPrice" : "200" },{"prices.indianPrice" : "500" }]
    })

    res.send( { msg: getInrBooks})
}

//getRandomBooks - returns books that are available in stock or have more than 500 pages 

const  randomBooks= async function (req, res) {
    let getRandomBooks = await BookModel.find( { 
        $and: [ {"pricestockAvailable" : true } , { "totalPages": {$gt:500}} ]
    })
    res.send( { msg: getRandomBooks})
}


   

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.bookInYear= bookInYear
module.exports.particularBooks= particularBooks
module.exports.inrBooks= inrBooks
module.exports.randomBooks= randomBooks

