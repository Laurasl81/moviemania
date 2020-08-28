const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

const { ensureLoggedIn } = require("connect-ensure-login");

const cloudUploader = require('../configs/cloudinary.config')



router.get('/', ensureLoggedIn('/login'), (req, res, next) => {

    User.findById(req.user._id)
        .populate('favorites')
        .then(theUser => {
            res.render('auth/profile', theUser)
            console.log(theUser);
        })
        .catch(err => next(err))

})

router.post('/editar/:id', cloudUploader.single('imageFile'), (req, res, next) => {
    const { username, email } = req.body
    User.findByIdAndUpdate(req.user._id, {
        username, email: email, imagePath: req.file ? req.file.url : req.user.imagePath
    })
        .then(() => res.redirect('/profile'))
        .catch(err => next(new Error(err)))
})





module.exports = router


