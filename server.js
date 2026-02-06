const path = require('path');
const express = require('express');
const app = new express();

// Requests for static files in the 'public' directory will be served;
app.use(express.static('public'));

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

const PORT = 1337;

app.listen(PORT, () => console.log(`Port running on ${PORT}`));
