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
        scoreStyle: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: true,
            defaultValue: []

        },
        scoreFunctionality: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: true,
            defaultValue: []

        },
        scoreOriginality: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: true,
            defaultValue: []

        },
        scoreAverage: {
            type: DataTypes.DECIMAL,
            defaultValue: 0
        },
        deploying: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
            defaultValue: ["https://avalos.sv/wp-content/uploads/default-featured-image.png"]
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