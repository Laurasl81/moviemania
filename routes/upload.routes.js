const express = require('express')
const router = express.Router()
const multer = require('multer')
const User = require('../models/user.model')

const uploadLocal = multer({ dest: './public/uploads/' })

// CDN file upoloads routs

const cloudUploader = require('../configs/cloudinary.config')

router.get('/upload-cdn', (req, res, next) => res.render('files/upload-form-cdn'))

router.post('/upload-cdn', cloudUploader.single('imageFile'), (req, res, next) => {

    console.log('Multer, en combinación con Cloudinary, crea este req.file:', req.file)

    User.create({
        name: req.body.imageName,
        path: req.file.url,
        originalName: req.file.originalname
    })
        .then(() => res.redirect('/gallery'))
        .catch(err => next(new Error(err)))
})


module.exports = router