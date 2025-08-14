const express = require('express');
const app = express();
const PORT = 8001;

app.get('/', (req, res) => {
  res.send('Hello from Node server!');
});

app.listen(PORT, () => {
  console.log(`Node server is running on port ${PORT}`);
});
