// We bring the appropriate dependencies and packages
const router = require('express').Router();
const apiRoutes = require('./api');

// We define a base route as "/api". 
router.use('/api', apiRoutes);

// If a request is made that does not go to the base route, we send back an error.
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;