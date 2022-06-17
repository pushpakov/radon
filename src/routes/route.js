const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const getAllMemes = require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/getByDistrict", CowinController.getVaccinationSession)
router.get("/londonWeather", weatherController.londonTemp)
router.get("/sortedCities", weatherController.getSortedCities)
router.get("/getAllMemes", getAllMemes.allMemes)
router.post("/createdMemes", getAllMemes.createMemes)
   
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;