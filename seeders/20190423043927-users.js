'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        let users = [{
            name: 'Mohamed Irshaam',
            email: 'mohamed.irshaam@gmail.com',
            avatar: 'noob.jpg',
            password: '12345',
            createdAt: new Date(),
            updatedAt: new Date()
        }]
        return queryInterface.bulkInsert('Users', users, {

        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};