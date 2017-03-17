const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let guesses = 0;

app.get('/api/guesses', (req, res) => {
    res.json({
        guesses
    });
});

app.post('/api/guesses', jsonParser, (req, res) => {
    if (guesses === 0 || req.body.guesses < guesses) {
        guesses = req.body.guesses;
    }
    res.json({
        guesses
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
