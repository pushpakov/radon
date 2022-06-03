const express = require('express');
const router = express.Router();


let players = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
        "swimming"
    ]
},
{
    "name": "gopal",
    "dob": "1/09/1995",
    "gender": "male",
    "city": "delhi",
    "sports": [
        "soccer"
    ]
},
{
    "name": "lokesh",
    "dob": "1/1/1990",
    "gender": "male",
    "city": "mumbai",
    "sports": [
        "soccer"
    ]
},
]



router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
       
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});


module.exports = router;