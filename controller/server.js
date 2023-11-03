const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Db = require('../config/db');
const cors = require('cors');


app.use(cors());

// Configurar body-parser para analisar solicitações JSON
app.use(bodyParser.json());


class PlayerController {
    constructor() {
        this.db = new Db();
    }

    // Rota para obter as informações do jogador
    async searchPlayerInfo(req, res) {
        const { id } = req.params;
        console.log('Função BUSCAR informações de um jogador por ID', req.params);
        console.log("jogadorId: ", req.params.id);
        try {
            //const jogadorId = req.params.id;
            if (id) {
                const results = await this.db.query('SELECT * FROM jogadores WHERE id = ?', [id]);

                if (results.length > 0) {
                    const jogador = results[0];
                    res.json({
                        nome: jogador.nome_jogador,
                        respeito: jogador.respeito,
                        estamina: jogador.estamina,
                        inteligencia: jogador.inteligencia,
                        forca: jogador.forca,
                        carisma: jogador.carisma,
                        resistencia: jogador.resistencia,
                        grana: jogador.grana
                        // Adicione outros campos conforme necessário
                    });
                } else {
                    res.status(404).json({ error: 'Jogador não encontrado.' });
                }
            } else {
                res.status(400).json({ error: 'Parâmetro "id" é obrigatório.' });
            }
        } catch (error) {
            console.error('Erro ao buscar informações do jogador:', error);
            res.status(500).json({ error: 'Erro ao buscar informações do jogador. ' + error });
        }
    }
}

module.exports = PlayerController;
