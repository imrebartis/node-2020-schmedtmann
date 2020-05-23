const fs = require('fs');
const express = require('express');

const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const port = 3000;

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({ status: 'success', results: tours.length, data: { tours } });
});

app.post('/', (req, res) => {
  res.send('u can post to this endpoint');
});

app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
