const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});