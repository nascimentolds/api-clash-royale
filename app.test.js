const request = require('supertest');
let app;

beforeEach(() => {
    jest.resetModules();
    app = require('./app');
});

describe('DELETE /api/cartas/:id', () => {
    it('deve remover uma carta existente e retornar 204', async () => {
        const res = await request(app).delete('/api/cartas/1');
        expect(res.status).toBe(204);

        const getRes = await request(app).get('/api/cartas');
        expect(getRes.body.length).toBe(2);
        expect(getRes.body.find(c => c.id === 1)).toBeUndefined();
    });

    it('deve retornar 404 ao tentar remover uma carta inexistente', async () => {
        const res = await request(app).delete('/api/cartas/999');
        expect(res.status).toBe(404);
        expect(res.body.mensagem).toBe('Carta não encontrada.');
    });
});


describe('GET /api/cartas', () => {
    it('deve retornar a lista de cartas e status 200', async () => {
        const res = await request(app).get('/api/cartas');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(3);
        expect(res.body[0].nome).toBe('Cavaleiro');
    });
});

describe('POST /api/cartas', () => {
    it('deve adicionar uma nova carta e retornar 201', async () => {
        const novaCarta = {
            nome: "Mosqueteira",
            raridade: "Rara",
            tipo: "Tropa",
            custo_elixir: 4,
            pontos_vida: 598,
            dano: 177
        };

        const res = await request(app)
            .post('/api/cartas')
            .send(novaCarta);

        expect(res.status).toBe(201);
        expect(res.body.id).toBe(4);
        expect(res.body.nome).toBe('Mosqueteira');

        const getRes = await request(app).get('/api/cartas');
        expect(getRes.body.length).toBe(4);
    });

    it('deve setar o ID para 1 se o array de cartas estiver vazio', async () => {
        await request(app).delete('/api/cartas/1');
        await request(app).delete('/api/cartas/2');
        await request(app).delete('/api/cartas/3');

        const novaCarta = {
            nome: "Mosqueteira",
            raridade: "Rara",
            tipo: "Tropa",
            custo_elixir: 4,
            pontos_vida: 598,
            dano: 177
        };

        const res = await request(app)
            .post('/api/cartas')
            .send(novaCarta);

        expect(res.status).toBe(201);
        expect(res.body.id).toBe(1);
    });

    it('deve retornar 400 se campos obrigatórios faltarem', async () => {
        const cartaInvalida = {
            raridade: "Rara",
            tipo: "Tropa"
        };

        const res = await request(app)
            .post('/api/cartas')
            .send(cartaInvalida);

        expect(res.status).toBe(400);
        expect(res.body.mensagem).toBe("Os campos 'nome', 'raridade', 'tipo' e 'custo_elixir' são obrigatórios.");
    });

    it('deve definir pontos_vida e dano como 0 se não forem fornecidos', async () => {
        const cartaMinima = {
            nome: "Esqueletos",
            raridade: "Comum",
            tipo: "Tropa",
            custo_elixir: 1
        };

        const res = await request(app)
            .post('/api/cartas')
            .send(cartaMinima);

        expect(res.status).toBe(201);
        expect(res.body.nome).toBe("Esqueletos");
        expect(res.body.pontos_vida).toBe(0);
        expect(res.body.dano).toBe(0);
    });
});