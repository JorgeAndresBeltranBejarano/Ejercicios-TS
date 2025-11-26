const express = require('express');
const router = express.Router();
const { getDB } = require('../db');

function rowToTask(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    completed: !!row.completed,
    created_at: row.created_at
  };
}

router.get('/', (req, res) => {
  const db = getDB();
  db.all('SELECT * FROM tasks ORDER BY id DESC', [], (err, rows) => {
    db.close();
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows.map(rowToTask));
  });
});

router.get('/:id', (req, res) => {
  const db = getDB();
  db.get('SELECT * FROM tasks WHERE id = ?', [req.params.id], (err, row) => {
    db.close();
    if (!row) return res.status(404).json({ error: 'Task not found' });
    res.json(rowToTask(row));
  });
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });

  const db = getDB();
  db.run(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [title, description || null],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });

      db.get('SELECT * FROM tasks WHERE id = ?', [this.lastID], (err2, row) => {
        db.close();
        res.status(201).json(rowToTask(row));
      });
    }
  );
});

router.put('/:id', (req, res) => {
  const { title, description, completed } = req.body;
  const db = getDB();

  db.get('SELECT * FROM tasks WHERE id = ?', [req.params.id], (err, row) => {
    if (!row) {
      db.close();
      return res.status(404).json({ error: 'Task not found' });
    }

    const newTitle = title ?? row.title;
    const newDesc = description ?? row.description;
    const newCompleted = completed !== undefined ? (completed ? 1 : 0) : row.completed;

    db.run(
      'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?',
      [newTitle, newDesc, newCompleted, req.params.id],
      () => {
        db.get('SELECT * FROM tasks WHERE id = ?', [req.params.id], (err2, updatedRow) => {
          db.close();
          res.json(rowToTask(updatedRow));
        });
      }
    );
  });
});

router.delete('/:id', (req, res) => {
  const db = getDB();
  db.run('DELETE FROM tasks WHERE id = ?', [req.params.id], function (err) {
    db.close();
    if (this.changes === 0) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
  });
});

module.exports = router;
