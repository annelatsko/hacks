var express = require('express'),
    exphbs  = require('express-handlebars');

var app = express(),
    hbs = exphbs.create({ /* config */ });

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('home', {
    title: 'This is the title!',
    foo: 'bar'
  });
});

app.use(express.static(__dirname + '/public'));

app.listen('8000');
