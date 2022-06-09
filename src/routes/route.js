const express = require('express');
const router = express.Router();

const publisherController= require("../controllers/publisherController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publisherController.createPublisher  )

router.post("/createdBook", bookController.createBook)
 
router.get("/getAllBooks", bookController.getBooks)

router.put("/updatedBook", bookController.booleanUpdate)

router.put("/updatedPrice", bookController.priceUpdate)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;