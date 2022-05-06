const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', pessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.post('/pessoas/', pessoaController.criaPessoa);
router.put('/pessoas/:id', pessoaController.atualizaPessoa);
router.delete('/pessoas/:id', pessoaController.removePessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', pessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', pessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', pessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', pessoaController.removeMatricula);

module.exports = router;