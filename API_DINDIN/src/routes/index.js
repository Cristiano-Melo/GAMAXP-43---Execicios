// const { log } = require('console');
const express = require('express');
const cursoController = require('../controllers/cursoController');
const routes = express.Router();

routes.get('/cursos/listar', cursoController.listarCursos);
routes.post('/cursos/cadastrar', cursoController.cadastrarCurso);
routes.delete('/cursos/:id/Deletar',cursoController.deletarCurso);

module.exports = routes;

