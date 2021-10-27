const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  throw Error('Random Error');
})

app.use(function(err, req, res, next) {
  res.status(500).json({ message: 'An error occured'})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
