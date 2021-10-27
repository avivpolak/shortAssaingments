const express = require('express')
const app = express()
const port = 3000
const operatingSystem = require('./operatingSystem');
const osMiddleware = require('./middleware/osMiddleware');

app.use(osMiddleware);
app.get('/', (request, response) => {
  response.json(`You are using ${operatingSystem.name}`)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
