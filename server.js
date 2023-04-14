require('dotenv').config();
const express = require('express');

const connectToDB = require('./config/db');

const app = express();
// ======Configuration=====
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//setting a middleware to run in the app which is a function which will
//run in between the request and response cycle
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

//parses the data from the request
app.use(express.urlencoded({extended: false}))

const Flight = require('./models/Flight');

//go to your flights 
app.get('/', (req, res) => {
    res.send('<h1>Welcome to our Flights Database</h1>')
})

app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flights: allFlights})
    })
})

app.post('/flights', (req, res) => {
    Flight.create(req.body, (error, createdFlight) => {
        res.redirect('/flights');
    })
})

app.get('/flights/new', (req, res) => {
    res.render('New');
})

//* ================================
app.listen(3000, () => {
    console.log("Server is up!");
    connectToDB();
  });
