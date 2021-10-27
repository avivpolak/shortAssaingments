const express = require('express')
const app = express()
const userRouter = require('./routers/userRouter');
const organizationRouter = require('./routers/organizationRouter');
const port = 3000

app.use('/user', userRouter);
app.use('/organization', organizationRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
