const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 7070;

app.use(cors());
app.use(express.json());

let notes = [
  { id: 1, content: 'Первая заметка' },
  { id: 2, content: 'Вторая заметка' }
];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const { content } = req.body;
  const newNote = { id: Date.now(), content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  notes = notes.filter(note => note.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
