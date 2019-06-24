const express = require('express');
const path = require('path');
const moment = require('moment');
const starWars = require('./StarWars');

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
}

// init middleware
// app.use(logger);

app.use(express.static(path.join(__dirname, 'public')))

// get all
app.get('/api/starwars', (req, res) => {
    res.json(starWars);
})

// get one
app.get('/api/starwars/:id', (req, res) => {
    const char = starWars.filter(char => char.id === parseInt(req.params.id))
    if(!char.length) {
        // normally we 404, not throw an error
        throw new Error('The force was weak with that character!')
    }
    res.json(char[0])
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke! ' + '\r\n' + err.message)
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))