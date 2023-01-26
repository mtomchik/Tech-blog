const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Entry, Comment} = require('../models');


router.get('/', (req, res) => {
    Entry.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'entry_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbEntryData => {
            const entrys = dbEntryData.map(entry => entry.get({
                plain: true
            }));

            res.render('homepage', {
                entrys,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/entry/:id', (req, res) => {
    Entry.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'entry_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbEntryData => {
            if (!dbEntryData) {
                res.status(404).json({
                    message: 'No entry found with this id'
                });
                return;
            }

            const entry = dbEntryData.get({
                plain: true
            });

            res.render('single-entry', {
                entry,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});


// router.get('*', (req, res) => {
//     res.status(404).send("Can't go there!");
//     // res.redirect('/');
// })


module.exports = router;