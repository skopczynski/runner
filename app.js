const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

console.log('http://localhost:3000')

routes(app);

module.exports = app;
