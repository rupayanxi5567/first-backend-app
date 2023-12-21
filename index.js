require("dotenv").config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res) => {
  res.send('Hello Insta mal!')
})

app.get('/fb', (req, res) => {
  res.send('Hello chai aur coding !')
})


app.listen(process.env.PORT, () => {
  console.log(`Home and insta app listening on port ${port}`)
})
