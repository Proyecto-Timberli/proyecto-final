const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tecnology: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        repository: {
            type: DataTypes.STRING,
            allowNull: true
        },
        score: {
            //type: DataTypes.ARRAY(DataTypes.DECIMAL),
            type: DataTypes.STRING,
            allowNull: true
        },
        deployLinj: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};