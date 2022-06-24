const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('favorites', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        project_id:{
            type: DataTypes.INTEGER,
        }
        
    },{
        timestamps: false,
    });
};