var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
var indexRouter = require('./routes/index');
var favicon = require('serve-favicon');
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
var app = express()

// App setup
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('layout', './layouts/_main');

// Setup browser refresh when front-end change (remove this if you use a bundler)
if (process.env.NODE_ENV === "development") {
  const liveReloadServer = livereload.createServer({
    exts: ["css", "js", "ejs"],
  });

  liveReloadServer.watch([path.join(__dirname, "views"), path.join(__dirname, "public")]);
  
  liveReloadServer.server.once("connection", () => {
    console.log('Connecting to livereload server')
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 10);
  });

  app.use(connectLiveReload());
}

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error page' });
});

// Routes and routers
app.use('/', indexRouter);

module.exports = app;
