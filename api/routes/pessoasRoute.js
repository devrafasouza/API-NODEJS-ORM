const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
  .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
  .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
  .post('/pessoas/', PessoaController.criaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
  .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)  
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
  .delete('/pessoas/:id', PessoaController.removePessoa)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.removeMatricula)

module.exports = router;