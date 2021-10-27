const express = require('express')
const app = express()
const port = 3000

app.get('/:name/:age', (req, res) => {

  const { name, age } = req.params;
  // const name = req.body.name;
  // const age = req.body.age;


  res.send(`Hi, My name is ${name}, I'm ${age} years old.`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
