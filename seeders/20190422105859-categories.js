'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        let categories = [{
                name: 'Introduction',
                slug:'introduction',
                description: 'Introduce yourself and what you’re up to!',
                color: '#4CAF50',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'Discussion: English',
                slug:'discussion-english',
                description: 'General discussions (English)',
                color: '#D81B60',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'New Features',
                slug:'new-features',
                description: 'If you have an idea! This is the spot',
                color: '#0288D1',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                name: 'Conference Info',
                slug:'conference-info',
                description: 'Announcements and conference meta discussion!',
                color: '#ff1744',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]
        return queryInterface.bulkInsert('Categories', categories, {

        });

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categories', null, {});
    }
};