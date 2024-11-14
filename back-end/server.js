require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const articles = [
  { id: 1, title: 'Energia Solar', content: 'A energia solar é limpa e renovável.' },
  { id: 2, title: 'Energia Eólica', content: 'A energia eólica reduz emissões de carbono.' },
  { id: 3, title: 'Biomassa', content: 'A biomassa é uma alternativa sustentável para resíduos.' },
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.post('/api/feedback', (req, res) => {
  const feedback = req.body;
  console.log('Feedback recebido:', feedback);
  res.status(201).send({ message: 'Feedback enviado com sucesso!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
