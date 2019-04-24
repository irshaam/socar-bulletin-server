'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Topics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.TEXT
            },
            // userId: {
            //     type: Sequelize.INTEGER,
            //     allowNull: true,

            //     references: {
            //         model: 'Users',
            //         key: 'id'
            //     }
            // },
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categories',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Topics');
    }
};