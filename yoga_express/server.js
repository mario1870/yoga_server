
const express = require('express')
const app = express()
const port = 3005

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/form', (req, res) => {
  res.send('Hello World!');
});


app.post('/form', (req, res) => {
  const formData = req.body;
  res.json(formData);
});



app.listen(port, () => {
  console.log(`Example app listening on ccport ${port}`)
})
