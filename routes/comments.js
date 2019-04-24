const models = require('../models');
const express = require('express');
const router = express.Router();

// Create New Comment
router.post('/create', function (req, res) {
    models.Comment.create({
        content: req.body.content,
        topicId: req.body.topicId,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    }).then((resp) => res.json(resp)).catch((error) => console.log(error))
});

module.exports = router;
