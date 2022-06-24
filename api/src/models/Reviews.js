const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        scoreStyle: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        scoreFunctionality: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        scoreOriginality: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    });
};