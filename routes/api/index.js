// prefix endpoint names and package them up
const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add prefixes to routes (ex: '/comments')
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;