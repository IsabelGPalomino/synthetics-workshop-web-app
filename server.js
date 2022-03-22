require('dotenv').config();
require('newrelic');
const express = require('express');

const port = 8000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/bob', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/bob.html'));
});

app.get('/fatigue', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/fatigue.html'));
});

app.get('/kevin', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/kevin.html'));
});

app.get('/stuart', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/stuart.html'));
});

app.post('/subscribe', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/success.html'));
})

app.listen(port, console.log(`Server started on ${port}`));