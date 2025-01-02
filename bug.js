const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for cases where req.body is undefined or not properly formatted
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to create user');
    } else {
      res.status(201).send('User created');
    }
  });
});