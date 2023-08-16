import { Router } from "express";

import { createTable, deletePessoa, insertPessoa, updatePessoa} from './src/controler/Pessoa.js';

const router = Router();

router.get('/', (req, res)=> {
    res.send("Trabalhando com rotas")
})

export default router;