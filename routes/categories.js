const models = require('../models');
const express = require('express');
const router = express.Router();

/** Get All Categories */
router.get('/', async(req,res,next) => {
    let categories;
    try {
        categories = await models.Category.findAll({
            attributes: {
                include: [[models.Sequelize.fn("COUNT", models.Sequelize.col("Topics.id")), "topicCount"]]
            },
            include: [{
                model: models.Topic, attributes: [],
                as:'topics'
            }],
            group: ['Category.id']

        });
    }
    catch (error){
        console.log(error)
    }
    return res.json(categories)
})


//Get Category
router.get('/:slug', async (req, res, next) => {
    let category;
    try {
        category = await models.Category.findOne({
            where:{
                slug:req.params.slug
            },
            include: [
                {
                    model: models.Topic,
                    as:'topics',
                    duplicating: false,
                }
            ],
            order: [
                [{ model: models.Topic, as: 'topics' }, 'createdAt', 'DESC']
            ]
            
        });
    }
    catch (error) {
        console.log(error)
    }
    return res.json(category)
})

module.exports = router;
