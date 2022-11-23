const router = require('express').Router();
const { User, Entry, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


// Get all entrys
router.get("/", (req, res) => {
    Entry.findAll({
            attributes: ["id", "content", "title", "created_at"],
            order: [
                ["created_at", "DESC"]
            ],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment_text", "entry_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((dbEntryData) => res.json(dbEntryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single entry
router.get("/:id", (req, res) => {
    Entry.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "content", "title", "created_at"],
            include: [{
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["id", "comment_text", "entry_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                },
            ],
        })
        .then((dbEntryData) => {
            if (!dbEntryData) {
                res.status(404).json({
                    message: "No entry found with this id"
                });
                return;
            }
            res.json(dbEntryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a entry
router.entry("/", withAuth, (req, res) => {
    console.log("creating");
    Entry.create({
            title: req.body.title,
            content: req.body.entry_content,
            user_id: req.session.user_id
        })
        .then((dbEntryData) => res.json(dbEntryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a entry
router.put("/:id", withAuth, (req, res) => {
    Entry.update({
            title: req.body.title,
            content: req.body.entry_content,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbEntryData) => {
            if (!dbEntryData) {
                res.status(404).json({
                    message: "No entry found with this id"
                });
                return;
            }
            res.json(dbEntryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Delete a entry
router.delete("/:id", withAuth, (req, res) => {
    Entry.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbEntryData) => {
            if (!dbEntryData) {
                res.status(404).json({
                    message: "No entry found with this id"
                });
                return;
            }
            res.json(dbEntryData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;