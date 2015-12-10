from havenondemand.hodindex import HODClient

client = HODClient(apikey='API_KEY', apiversiondefault=1)

text = "I love puppies"
data = {'text': text}

r = client.post('analyzesentiment', data)
sentiment = r.json()['aggregate']['sentiment']
score = r.json()['aggregate']['score']
print(text + " | " + sentiment + " | " + str(score))
