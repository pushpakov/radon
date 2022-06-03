const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const app = express.Router();
const router = express.Router();


router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]

    ///LOGIC WILL GO HERE 
    //const totalSum = 6*(6+1)/2
    let currentSum = 0
    for (let i =0;i<arr.length;i++){
        currentSum += arr[i]
    }

    let lastDigit = arr.pop()
    const totalSum = lastDigit*(lastDigit+1)/2
    missingNumber = totalSum-currentSum

    res.send(  { data: missingNumber  }  );
});


router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
    
   
    res.send(  { data: missingNumber  }  );
  });

  
  router.get("/movies", function(req, res){
    let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
    res.send(  { movies }  );
});


router.get("/movies/:indexNumber", function(req, res){
    let movies = ["Rang de basanti","The shining","Lord of the rings","Batman begins"]
    let i =req.params.indexNumber
    let findeMovie;
    if ((i - 1)<movies.length){
        findeMovie=movies[i - 1]
    }else{
        findeMovie="use a valid index " + movies.length
    }
  

    res.send(findeMovie );
});


router.get("/films", function(req, res){
    let movies = [{
        "id" : 1,
        "name": "The Shining"
    } ,  {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
  

    res.send( {movies} );
});


router.get("/films/:filmId", function(req, res){
    let movies = [{
        "id" : 1,
        "name": "The Shining"
    } ,  {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       

       let i =req.params.filmId
       let findeMovie;
       if ((i - 1)<movies.length){
           findeMovie=movies[i - 1]
       }else{
           findeMovie="No movie exists with this id"
       }
  

    res.send( {findeMovie} );
});

  
 


module.exports = app;
module.exports = router;
// adding this comment for no reason