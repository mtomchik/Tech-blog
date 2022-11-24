const router = require('express').Router();

const userRoutes = require('./userroutes.js');
const entryRoutes = require('./entryroutes.js');
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/entrys', entryRoutes);
router.use('/comments', commentRoutes)

module.exports = router;