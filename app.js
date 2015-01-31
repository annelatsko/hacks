var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express(),
    hbs = exphbs.create({ /* config */ });

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.listen('8000');
