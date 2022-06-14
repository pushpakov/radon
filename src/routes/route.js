const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid=require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
//- Add middleware at route level in the routes where applicable.

router.get("/users/:userId", mid.middleAuth, userController.getUserData)

router.put("/users/:userId", mid.middleAuth, userController.updateUser)

router.delete("/users/:userId", mid.middleAuth, userController.deleteUser)

module.exports = router;