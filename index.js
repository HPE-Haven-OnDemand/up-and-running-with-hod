var havenondemand = require('havenondemand')
var client = new havenondemand.HODClient('API_KEY', 'v1')

var text = 'love puppies'
var data = {text: text}

client.call('analyzesentiment', data, function(err, resp, body){
  var sentiment = body.aggregate.sentiment
  var score = body.aggregate.score
  console.log(text + " | " + sentiment + " | " + score)
})
