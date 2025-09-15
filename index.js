const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let cartas = [
  {
    id: 1,
    nome: "Cavaleiro",
    raridade: "Comum",
    tipo: "Tropa",
    custo_elixir: 3,
    pontos_vida: 1399,
    dano: 159
  },
  {
    id: 2,
    nome: "Goblins",
    raridade: "Comum",
    tipo: "Tropa",
    custo_elixir: 2,
    pontos_vida: 169,
    dano: 96
  },
  {
    id: 3,
    nome: "Gigante",
    raridade: "Rara",
    tipo: "Tropa",
    custo_elixir: 5,
    pontos_vida: 3275,
    dano: 211
  }
];

app.get('/api/cartas', (req, res) => {
  res.status(200).json(cartas);
});

app.post('/api/cartas', (req, res) => {
  const { nome, raridade, tipo, custo_elixir, pontos_vida, dano } = req.body;

  if (!nome || !raridade || !tipo || custo_elixir === undefined) {
    return res.status(400).json({
      mensagem: "Os campos 'nome', 'raridade', 'tipo' e 'custo_elixir' são obrigatórios."
    });
  }

  const novoId = cartas.length > 0 ? Math.max(...cartas.map(c => c.id)) + 1 : 1;

  const novaCarta = {
    id: novoId,
    nome,
    raridade,
    tipo,
    custo_elixir,
    pontos_vida: pontos_vida || 0,
    dano: dano || 0
  };

  cartas.push(novaCarta);

  res.status(201).json(novaCarta);
});

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});