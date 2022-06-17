const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('tecnology', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
    });
};