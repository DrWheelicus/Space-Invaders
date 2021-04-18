/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './highscores.db'
})

const Scores = database.define('highscores', {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER
})

finale.initialize({
  app: app,
  sequelize: database
})

const userResource = finale.resource({
  model: Scores,
  endpoints: ['/highscores', '/highscores/:id']
})

database.sync({ force: true }).then(() => {
  app.listen(8081, () => {
    console.log('listening to port localhost:8081')
  })
})
