const express = require('express');

const port = 8000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/show', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/show.html'));
});

app.listen(port, console.log(`Server started on ${port}`));