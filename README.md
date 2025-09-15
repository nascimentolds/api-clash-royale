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

## Rotas Disponíveis

### Obter todas as cartas

-   **Método**: `GET`
-   **Endpoint**: `/api/cartas`
-   **Resposta de Sucesso**:
    -   **Código**: `200 OK`
    -   **Conteúdo**: Um array contendo os objetos de todas as cartas cadastradas.