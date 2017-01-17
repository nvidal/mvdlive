var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render(index);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})