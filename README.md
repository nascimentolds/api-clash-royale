# API de Cartas - Clash Royale

Uma API REST simples para listar e gerenciar cartas do universo Clash Royale.

## Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução JavaScript no servidor.
-   **Express.js**: Framework para criação de APIs de forma rápida e minimalista.

## Instruções de Execução

1.  **Pré-requisitos**:
    * Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

2.  **Clone este repositório**:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd api-clash-royale
    ```

3.  **Instale as dependências do projeto**:
    ```bash
    npm install
    ```

4.  **Inicie o servidor da API**:
    ```bash
    npm start
    ```

5.  A API estará disponível e rodando em `http://localhost:3000`.

## Workflow de Desenvolvimento Adotado

Para a evolução deste projeto, o workflow escolhido foi o **GitHub Flow**.

### Justificativa da Escolha

1.  **Simplicidade e Foco**: O GitHub Flow é um modelo extremamente simples, baseado na premissa de que a branch `main` deve estar sempre funcional e pronta para deploy. Todo novo trabalho (features, correções) é feito em uma branch separada, descritiva, criada a partir da `main`. Isso se encaixa perfeitamente em projetos de escopo pequeno a médio, como esta API, onde a burocracia de workflows mais complexos (como o GitFlow) não é necessária.

2.  **Agilidade e Revisão de Código**: O fluxo incentiva a criação de Pull Requests (PRs) para mesclar o código da feature branch de volta à `main`. Isso promove a revisão de código (code review) e a discussão sobre as mudanças, garantindo a qualidade e a integridade da branch principal antes da integração. Por exemplo, a `feature/adicionar-carta` foi desenvolvida isoladamente e depois revisada via PR antes de ser incorporada.

3.  **Ideal para Integração Contínua**: Por manter a `main` sempre estável, o GitHub Flow é perfeito para ambientes com Integração e Entrega Contínua (CI/CD), onde cada merge na `main` pode disparar um novo deploy automaticamente.

## Rotas Disponíveis

### Obter todas as cartas

-   **Método**: `GET`
-   **Endpoint**: `/api/cartas`
-   **Resposta de Sucesso**:
    -   **Código**: `200 OK`
    -   **Conteúdo**: Um array contendo os objetos de todas as cartas cadastradas.

### Adicionar uma nova carta

-   **Método**: `POST`
-   **Endpoint**: `/api/cartas`
-   **Corpo da Requisição** (Exemplo em JSON):
    ```json
    {
        "nome": "Mosqueteira",
        "raridade": "Rara",
        "tipo": "Tropa",
        "custo_elixir": 4,
        "pontos_vida": 598,
        "dano": 177
    }
    ```
-   **Resposta de Sucesso**:
    -   **Código**: `201 Created`
    -   **Conteúdo**: O objeto da carta que acabou de ser criada, incluindo seu novo `id`.