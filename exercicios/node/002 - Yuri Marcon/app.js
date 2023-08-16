import { openDB } from './src/configDB.js';
import express from 'express';
import { createTable, deletePessoa, insertPessoa, updatePessoa} from './src/controler/Pessoa.js'
import router from './src/routes.js';

const app = express();
const port = 3000;
// para visualizar o conteúdo da request "express.json()"
app.use(express.json());
app.use(router);

app.listen(port, () => console.log("API rodando"))