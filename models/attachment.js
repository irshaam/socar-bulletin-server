'use strict';
module.exports = (sequelize, DataTypes) => {
    const Attachment = sequelize.define('Attachment', {
        filename: DataTypes.STRING,

    }, {});
    Attachment.associate = function (models) {
        Attachment.belongsTo(models.Topic, {
            foreignKey: 'topicId',
            as: 'topic'
        });

    };
    return Attachment;
};