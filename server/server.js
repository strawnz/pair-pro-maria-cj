require('dotenv').config();
const characters = require('./data/characters.json');
const items = require('./data/items.json');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: "http://localhost:3000"}));

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    res.send('This is a GET request to root');
})

app.get('/characters', (req, res) => {
    res.json(characters);
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:location', (req, res) => {
    let { location } = req.params;
    let item = items.find((item) => {
        item.location === location;
    });

    res.json(item);
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})