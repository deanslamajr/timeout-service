var express = require('express')
const nconf = require('nconf')

const envConfig = nconf.argv().env()
const PORT = nconf.get('PORT') || 1111

var app = express()

const data = { counts: 0 }

/**
 * EB Healthcheck
 */
app.get('health', (req, res) => {
  res.sendStatus(200)
})

app.get('*', (req, res) => {
  // don't respond... ever!
  data.counts++
  console.log(`${data.counts} received a request...`)
})

app.listen(PORT, () => console.log(`timeout-service listening on port ${PORT}`))