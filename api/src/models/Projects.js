const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('project', {
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
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        shortDescription: {
            type: DataTypes.TEXT,
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
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: true
        },
        deploying: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Aceptado'
        },
        projectType: {
            type: DataTypes.STRING
        }
    });
};