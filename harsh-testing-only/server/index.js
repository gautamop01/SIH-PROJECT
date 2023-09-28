const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, 'example.pdf'); // Change 'example.pdf' to the path of your PDF file.
  const stat = fs.statSync(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', 'inline; filename=example.pdf');

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
