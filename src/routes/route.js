const express = require('express');
const router = express.Router();


const allController= require("../controllers/allController")


router.post("/createBook", allController.createBook  )

router.post("/createAuthor", allController.createAuthor)

router.get("/allBooks", allController.allBooks)

router.get("/updateBookPrice", allController.updateBookPrice)

router.get("/authorsName", allController.authorsName)

// optional

router.get("/bookByAuthorId/:author_id", allController.bookByAuthorId)

router.get("/getAuthorList", allController.authorList)


module.exports = router;    