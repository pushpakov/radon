const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const app = express.Router();
const router = express.Router();


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