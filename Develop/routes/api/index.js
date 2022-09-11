// We bring in the necessary packages and dependencies
const router = require('express').Router();

// Different routes are brought in here. 
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Depending on the route, a different endpoint will
// need to be used. 
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
