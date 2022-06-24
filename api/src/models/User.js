const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('user', {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stack: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg"
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        short_description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        githubId: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
};