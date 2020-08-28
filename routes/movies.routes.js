const express = require('express')
const Movie = require('../models/movie.model')
const spotifyApi = require("../configs/spotify.config")
const User = require('../models/user.model')

const router = express.Router()

router.get('/', (req, res) => res.render('movies/movies'))

router.get('/list', (req, res) => {
   Movie.find()
      .then(allMovies => res.render('movies/movies', { movies: allMovies }))
      .catch(err => next(new Error(err)))
})


// Movie Search //


router.post("/list", (req, res) => {
   const {
      searchInput
   } = req.body;
   const regex = new RegExp(escapeRegex(searchInput), 'gi');
   Movie.find({
      "title": regex
   })
      .then(movieSearch => res.render('movies/movies', { movies: movieSearch }))
      .catch(err => (new Error(err)))
})

function escapeRegex(text) {
   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.post('/details/favorites/:id', (req, res) => {
   const id = req.params.id
   console.log('holaaaaaaaaa');
   if (req.user) {
      User.findByIdAndUpdate(req.user.id, { $push: { favorites: id } })
         .then(() => res.redirect('/profile'))
         .catch(err => console.log('Error', err))
   } else {
      res.redirect('/login')
   }

})


//Spotify

router.get('/details/:id', (req, res, next) => {
   const moviePromise = Movie.findById(req.params.id)
   const spotifyPromise = Movie.findById(req.params.id)
      .then(data => spotifyApi.searchTracks(data.title))
      .then(data => data.body.tracks.items)
      .catch(err => next(new Error(err)))

   Promise.all([moviePromise, spotifyPromise])
      .then(results => {
         const movies = results[0]
         const spotify = results[1] ? results[1].slice(0, 4) : [""]
         res.render('movies/movies-details', { movies: movies, spotify: spotify, user: req.user })
      })
      .catch(err => next(new Error(err)))


})


module.exports = router

