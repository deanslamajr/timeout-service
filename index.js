var express = require('express')
var app = express()

const data = { counts: 0 }

// respond with "hello world" when a GET request is made to the homepage
app.get('*', (req, res) => {
  // don't respond... ever!
  data.counts++
  console.log(`${data.counts} received a request...`)
})

app.listen(1111, () => console.log('timeout-service listening on port 1111'))