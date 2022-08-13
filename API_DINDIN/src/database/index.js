const Sequelize = require('sequelize');

const DB_NAME = 'dindin';
const DB_USER = 'root';
const DB_PASS = 'Christian28@';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

let db = {};
    
try {
     db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
    
   }catch (error){
    console.error('Erro ao tentar uma conexão com o banco de dados');
    }
async function hasConection() {
    try {
    await db.authenticate();
    console.log('Banco dados conectado!');
    } catch (error) {
    console.error('Erro ao tentar se conectar ao banco de dados1');
    }};

    Object.assign(db, {
        hasConection,
    });

module.exports = db;


