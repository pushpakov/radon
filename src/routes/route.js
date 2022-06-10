const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const commonMiddle = require("../middlewares/commonMiddlewares")


router.get("/checkAPI",  commonMiddle.mid1,userController.timeIpRoute)


module.exports = router;