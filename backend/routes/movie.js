var express = require("express");
var movies = require("../models/movies.js");

var router = express.Router();





router.get("/allMovies", (req, res) => {
    var page = +req.query.page;
    var pageSize = 4;
    let movieList;
    var myQuery = movies.find();
    if(page && pageSize)
    {
        myQuery.skip(pageSize*(page-1)).limit(pageSize);
    }
    myQuery.then((data)=>
    {
       movieList = data;
       return movieList.countDocuments;
        
    }).then((movieCount)=>
    {
        res.status(200).json({
            totalMovieCount : movieCount,
            allMoviesList:movieList,
        })
    }).catch((err)=>{
        res.json({msg:"error"});
    })
  });

  router.get("/movies/:id", (req, res) => {
    var movieid = +req.params.id;
    movies.findOne({id:movieid}).then((movie)=>
    {
        if(movie)
        {
            res.json(movie);
        }
        else
        {
            res.json({msg: "Wrong id"});
        }
    }).catch((err)=>
    {
        res.json({msg:"error"});
    })
  });



  router.post("/addMovie", (req, res) => {
    var data = req.body;
    var newMovie = new movies(
        {
            adult: data.adult,
               backdrop_path: data.backdrop_path,
               genre_ids: data.genre_ids,
               id: data.id,
               original_language: data.original_language,
               original_title: data.original_title,
               overview: data.overview,
               popularity: data.popularity,
               poster_path: data.poster_path,
               release_date: data.release_date,
               title: data.title,
               video: data.video,
               vote_average: data.vote_average,
               vote_count: data.vote_count
           }
    );
    try {
        newMovie.save().then(()=>{
            console.log('movie added successfully');
            res.json({msg: 'movie added successfully'});
        })
    } catch (error) {
     console.log("error");
     res.json({msg: 'error could not add movie'});
    }
  });

  module.exports = router;