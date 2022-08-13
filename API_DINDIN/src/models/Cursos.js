const db = require('../database');
const { DataTypes } = require('sequelize');


const Cursos = db.define(
    'cursos',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    professor:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
    {
        tableName: 'cursos',
    });

module.exports = Cursos;
