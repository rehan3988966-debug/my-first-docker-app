const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello! Mera pehla Docker App chal raha hai! ');
});

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server running on port ${PORT}`);
})}
