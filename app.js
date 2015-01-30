var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jade = require('jade');
// mongoose ODM
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/encuestas-15');


var routes = require('./routes/index');
var users = require('./routes/users');
var paquetes = require('./routes/paquetes');
var vehiculos = require('./routes/vehiculos');
var colonias = require('./routes/colonias');
var ciudades = require('./routes/ciudades');
var cargos = require('./routes/cargos');
var odsF1 = require('./routes/origen-y-destino-f1s');
var pdsF1 = require('./routes/preferencias-declaradas-f1s');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/paquetes', paquetes);
app.use('/vehiculos', vehiculos);
app.use('/colonias', colonias);
app.use('/ciudades', ciudades);
app.use('/cargos', cargos);
app.use('/origen-y-destino-f1', odsF1);
app.use('/preferencias-declaradas-f1', pdsF1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
