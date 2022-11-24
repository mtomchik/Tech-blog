const router = require('express').Router();
const apiRoutes = require('./api');
const frontPageRoutes = require('./frontPageRoutes.js');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/frontpage', frontPageRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;