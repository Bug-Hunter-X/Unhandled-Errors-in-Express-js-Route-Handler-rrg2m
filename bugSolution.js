const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body || !req.body.name || !req.body.email) {
    return res.status(400).send('Missing required user data');
  }
  const user = req.body;
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to create user: ' + err.message);
    } else {
      res.status(201).send('User created');
    }
  });
});