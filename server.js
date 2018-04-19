const express = require('express')
const app = express()

const quotes = require('./quotes.json')
app.get('/', function(req, res) {
        number_of_quotes=quotes.length;
	random_quote_index=Math.floor(Math.random() * number_of_quotes);
	random_quote=quotes[random_quote_index];
	res.send('Quote of the day is: '+random_quote.quote+' by '+random_quote.author);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
