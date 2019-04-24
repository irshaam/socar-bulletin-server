const models = require('../models');
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

/** Get All topics */
router.get('/', async (req, res, next) => {
    let topics;
    try {
        topics = await models.Topic.findAll({
            order: [['createdAt', 'DESC']],
            attributes: {
                include: [[models.Sequelize.fn("COUNT", models.Sequelize.col("Comments.id")), "commentCount"]]
            },
            include:[
                {
                    model:models.Category, 
                    attributes:['id','name','slug','color'],
                    duplicating: false,
                    as:'category'
                },
                {
                    model: models.Comment,
                    attributes:[],
                    duplicating: false,
                }
            ],
            limit: 15,
            group: ['Topic.id'],
        });
    }
    catch (error) {
        console.log(error)
    }
    return res.json(topics)
})


//Get Topic
router.get('/:id', async (req, res, next) => {
    let topic;
    try {
        topic = await models.Topic.findOne({
            where: {
                id: req.params.id
            },

            include: [
                {
                    model: models.Category,
                    as:'category'
                },
                {
                    model: models.Comment,
                    as: 'comments',
                    duplicating: false,
                },
                {
                    model: models.Attachment,
                    as: 'attachments',
                    duplicating: false,
                }
            ],
            order: [
                [models.Comment, 'createdAt', 'DESC']
            ]
        });
    }
    catch (error) {
        console.log(error)
    }
    return res.json(topic)
})

router.post('/create', function (req, res) {
    models.Topic.create({
            title: req.body.title,
            content:req.body.content,
            categoryId:req.body.categoryId,
            userId:req.body.categoryId,
            createdAt:new Date(),
            updatedAt:new Date(),
            attachments:req.body.files
        },
        {
            include:[{
                model:models.Attachment,
                as:'attachments'
            }]
        }  
            ).then(async (data)  => {

        let topic;
        try {
            topic = await models.Topic.findOne({
                where: {
                    id: data.id
                },
                attributes: {
                    include: [[models.Sequelize.fn("COUNT", models.Sequelize.col("Comments.id")), "commentCount"]]
                },
                include: [
                    {
                        model: models.Category,
                        attributes: ['id', 'name', 'slug', 'color'],
                        duplicating: false,
                        as:'category'

                    },
                    {
                        model: models.Comment,
                        attributes: [],
                        duplicating: false,

                    }
                ],

            });
        } catch (error) {
            console.log(error)
        }
        res.json(topic);
    });
});



router.post('/upload', upload.any(), (req, res, next) => {

    for (let i = 0; i < req.files.length; i += 1) {
        console.log(`File ${req.files[i].originalname} uploaded to ${req.files[i].filename}`);
    }

    return res.status(200).send({ success: 200, files: req.files });

});


module.exports = router;
