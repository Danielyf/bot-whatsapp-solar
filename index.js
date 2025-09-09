const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rota que a Twilio vai chamar
app.post('/webhook', (req, res) => {
  console.log('Mensagem recebida:', req.body);
  
  // Responde para a Twilio (isso evita timeout)
  res.set('Content-Type', 'text/plain');
  res.send('✅ Bot conectado. Mensagem recebida com sucesso!');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
