const express = require('express');
const externalModule = require('../logger/logger')
const router = express.Router();
const helperfunc = require('../util/helper')
const format1 = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    externalModule.welcome()
    helperfunc.getInfo()
    format1.tream(),format1.uppar(),format1.lowar()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason