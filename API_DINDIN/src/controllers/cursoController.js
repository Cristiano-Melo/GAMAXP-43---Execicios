const Cursos = require('../models');

const cursoController = {
    listarCursos: async(req, res)=>{
        const listaDeCursos = await Cursos.findAll();
    res.json(listaDeCursos);
    },
    async cadastrarCurso(req, res){
        const{ nome, professor, descricao} = req.body;
        const novoCurso = await Cursos.create({
            nome,
            professor,
            descricao
        });
    res.json('Curso cadastrado com Sucesso!!');
    },
    async deletarCurso (req, res){
        const { id } = req.params;
        await Cursos.destroy({
            where: {
                id,
            },
        });
        res.json("Produto Deletado com Sucesso!");
    }}

module.exports = cursoController;