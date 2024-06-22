import express from 'express'
const app = express()
const hostname = 'localhost'
const port = 8080
import data from './mock_data.json' assert { type: 'json' }
import bodyParser from 'body-parser'
import cors from 'cors'

const fakeAuthorization = 'dGVzdDpzZWNyZXQ='

const CODE_UNAUTHORIZED = 401

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST'
  })
)

app.get('/persons', (req, res) => {
  res.json(data)
})

app.listen(port, hostname, () => {
  console.log(`listening on port ${hostname}:${port}`)
})
