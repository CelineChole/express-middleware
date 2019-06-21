const express = require('express');

const app = express();

<<<<<<< HEAD
var logger = function(req, res, next){
    console.log('logging...');
    next();
}

app.use(logger);
// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
=======
app.get('/', (req, res) => {
>>>>>>> branch-2
    res.send('It is a beautiful day')
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))