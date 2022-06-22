const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('report', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        reportedBy:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};