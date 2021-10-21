const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // parses requests as json

app.get('/get', function(request, response) {
  response.json({ requested: request.query})
})

app.post('/post', function(request, response) {
  response.json({ requested: request.body})
})

app.put('/put', function(request, response) {
  response.json({ requested: request.body})
})

app.delete('/delete', function(request, response) {
  response.json({ requested: request.body})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

