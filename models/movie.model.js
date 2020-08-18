const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
    poster: {
        type: String,
    },
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    duration: {
        type: Number,
    },
    cast: {
        type: [String],
    },
    synopsis: {
        type: String,
    },
    rating: {
        type: Number
    },
}, { 
    timestamps: true
})



const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
