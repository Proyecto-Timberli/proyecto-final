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
            defaultValue: [0]

        },
        scoreFunctionality: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: true,
            defaultValue: [0]

        },
        scoreOriginality: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: true,
            defaultValue: [0]

        },
        scoreAverage: {
            type: DataTypes.DECIMAL,
            defaultValue: 0
            // set() {
            //     const promedio = ((this.scoreStyle.reduce((e, a) => e + a) / this.scoreStyle.length) +
            //         (this.scoreFunctionality.reduce((e, a) => e + a) / this.scoreFunctionality.length) +
            //         (this.scoreOriginality.reduce((e, a) => e + a) / this.scoreOriginality.length)) / 3
            //     return promedio
            // }

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