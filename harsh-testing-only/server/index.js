const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/',(req,res)=> {
  const filePath = path.join(__dirname, 'example.html'); // Change 'example.pdf' to the path of your PDF file.
  fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
      res.status(500).send("Error reading html file")
    }else{
      res.setHeader('Content-Type','text/html');
      res.send(data);
    }
  });  
});
app.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, 'example.pdf'); // Change 'example.pdf' to the path of your PDF file.
  const stat = fs.statSync(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Disposition', 'inline; filename=example.pdf');

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

app.get('/pdf-download', (req, res) => {
  const filePath = path.join(__dirname, 'example.pdf'); // Change 'example.pdf' to the path of your PDF file.
  res.sendFile(filePath);
  console.log("File is delivered from server side");
});
app.get('/downloads',(req,res)=> {
  const filePath = path.join(__dirname, 'view-offline.html'); // Change 'example.pdf' to the path of your PDF file.
  fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
      res.status(500).send("Error reading html file")
    }else{
      res.setHeader('Content-Type','text/html');
      res.send(data);
    }
  });  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
