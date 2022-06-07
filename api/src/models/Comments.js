const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    });
};