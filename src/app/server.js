// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.put('/assets/logicalprogrammes', (req, res) => {
  const { question, answer } = req.body;

  // Read the text file, update it, and write it back to disk
  fs.writeFileSync('logicalprogrammes.txt', `Q) ${question}\nA) ${answer}\n`, { flag: 'a' });

  // Respond with a success message
  res.status(200).send('Update successful');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
