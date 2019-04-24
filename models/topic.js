'use strict';
module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('Topic', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
    }, {});
    Topic.associate = function (models) {

        Topic.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });

        Topic.hasMany(models.Comment, {
            foreignKey: 'topicId',
            as: 'comments'
        });


        Topic.hasMany(models.Comment)


        Topic.hasMany(models.Attachment, {
            foreignKey: 'topicId',
            as:'attachments'
            // constraints: false,
        });


    };
    return Topic;
};