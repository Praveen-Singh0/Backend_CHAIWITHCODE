
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HERE IS MY HOME PAGE');
});

app.get("/login", (req, res)=>{
  res.send("Login credentials")
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

