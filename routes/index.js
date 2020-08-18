module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/movies', require('./movies.routes'))
  app.use('/movies/details/:id', require('./movies.routes.js'))
  app.use('/profile', require('./user.routes'))
}
