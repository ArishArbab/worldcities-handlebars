var express = require('express');
var exphbs=require('express-handlebars');
var path = require('path');

var index = require('./routes/index');
var about = require('./routes/about');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/about', about);
app.use('/', index);

module.exports = app;
