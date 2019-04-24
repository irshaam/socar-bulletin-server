'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    topicId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  Comment.associate = function(models) {
        Comment.belongsTo(models.Topic,{
          foreignKey:'topicId'
        });

      Comment.belongsTo(models.User);
      
      
  };
  return Comment;
};