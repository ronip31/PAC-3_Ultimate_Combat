const express = require('express');
const path = require('path');
const Db = require('../config/db');
const PlayerController = require('../controller/server');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.static('public'));
const playerController = new PlayerController();


app.db = new Db();
// //ABRE AS PÁGINAS HTML

app.get('/', (req, res) => {
    console.log("Página /login acessada");
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});


 app.get('/lutar', (req, res) => {
     console.log("Página /player acessada");
     res.sendFile(path.join(__dirname, '..', 'public', 'lutar.html'));
 });

 app.get('/lutarpvp', (req, res) => {
    console.log("Página /lutarpvp acessada");
    res.sendFile(path.join(__dirname, '..', 'public', 'lutarpvp.html'));
});

app.get('/mochila', (req, res) => {
    console.log("Página /mochila acessada");
    res.sendFile(path.join(__dirname, '..', 'public', 'mochila.html'));
});

app.get('/mercado', (req, res) => {
    console.log("Página /mercado acessada");
    res.sendFile(path.join(__dirname, '..', 'public', 'mercado.html'));
});

app.get('/banco', (req, res) => {
    console.log("Página /mercado acessada");
    res.sendFile(path.join(__dirname, '..', 'public', 'banco.html'));
});

app.get('/lutarteste', (req, res) => {
    console.log("Página /lutarteste acessada");
    res.sendFile(path.join(__dirname, '..', 'public', 'lutarteste.html'));
});

app.get('/api/obter_informacoes_jogador/:id', (req, res) => {
    console.log("Página /obter_informacoes_jogador acessada", req);
    //const jogadorId = req.params.id;
    playerController.searchPlayerInfo(req, res);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
