require 'havenondemand'

client= HODClient.new('API_KEY', 'v1')
text = "I love puppies"
data = {text: text}

r = client.post('analyzesentiment', data)
sentiment = r.response.body["aggregate"]["sentiment"]
score = r.response.body["aggregate"]["score"]
puts "#{text} | #{sentiment} | #{score}"
