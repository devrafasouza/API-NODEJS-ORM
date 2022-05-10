const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.post('/pessoas/', PessoaController.criaPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:id', PessoaController.removePessoa);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.removeMatricula);

module.exports = router;