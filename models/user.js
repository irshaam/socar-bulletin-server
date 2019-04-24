'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    //   User.hasMany(models.Topic);
      User.hasMany(models.Comment);
  };
  return User;
};