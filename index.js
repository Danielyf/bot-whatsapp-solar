const express = require('express');
const app = express();
app.use(express.json());

// Rota do webhook (Twilio)
app.post('/webhook', (req, res) => {
  console.log('✅ Mensagem recebida!');
  res.set('Content-Type', 'text/plain');
  res.send('Bot funcionando!');
});

// Rota de saúde (para Railway não crashar)
app.get('/', (req, res) => {
  res.send('✅ Servidor online!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
