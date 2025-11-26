const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Tasks API Running' });
});

app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
