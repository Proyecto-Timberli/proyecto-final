const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Contributions', {
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
        mail: {
            type: DataTypes.STRING,
            allowNull: false
        },
       amount: {
            type: DataTypes.INTEGER,
            allowNull: false
       }
    },{
        timestamps: false
    });
};