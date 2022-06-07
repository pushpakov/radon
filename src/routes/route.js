const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.get("/getBookList", BookController.bookList)

router.post("/getBookInYear", BookController.bookInYear)

router.post("/getParticularBooks", BookController.particularBooks)

router.get("/getInrBooks", BookController.inrBooks)

router.get("/getRandomBooks", BookController.randomBooks)


module.exports = router;