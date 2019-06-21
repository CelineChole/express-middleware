const express = require('express');
const path = require('path');

const app = express();

const logger = (req, res, next) => {
    console.log('I am a logger');
    next();
}

// init middleware
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))