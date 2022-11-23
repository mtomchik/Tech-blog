const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const entryRoutes = require('./entry-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/entrys', entryRoutes);
router.use('/comments', commentRoutes)

module.exports = router;