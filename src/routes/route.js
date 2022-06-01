const express = require('express');
const externalModule = require('../logger/logger')
const router = express.Router();
const helperfunc = require('../util/helper')
const format1 = require('../validator/formatter')
const format2 = require('../validator/formatter')
const format3 = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    externalModule.welcome()
    helperfunc.getInfo()
    format1.trim1(),format2.upper(),format3.lower()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason