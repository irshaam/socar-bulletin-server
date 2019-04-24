'use strict';
module.exports = (sequelize, DataTypes) => {

    const SequelizeSlugify = require('sequelize-slugify')

    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
        description: DataTypes.TEXT,
        color: DataTypes.STRING,
    }, {});
    Category.associate = function (models) {
        Category.hasMany(models.Topic, {
            foreignKey: 'categoryId',
            as:'topics'
        });
    };

    SequelizeSlugify.slugifyModel(Category, {
        source: ['name'],
        slugOptions: { lower: true },
        overwrite: true,
        column: 'slug'
    });


    return Category;
};