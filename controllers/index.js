const router = require('express').Router();
const frontPageRoutes = require('./frontPageRoutes.js');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/frontpage', frontPageRoutes);

module.exports = router;
