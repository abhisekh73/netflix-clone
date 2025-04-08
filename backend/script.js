const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/movies', (req, res) => {
  res.json([
    { id: 1, title: 'Stranger Things' },
    { id: 2, title: 'Money Heist' },
    { id: 3, title: 'Narcos' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
