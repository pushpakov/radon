const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const bookModel = require("../models/bookModel.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//write post and get for book 
router.post("/createBookData", UserController.createBookData  )

router.get("/getBookData", UserController.getBookData)




module.exports = router;