var createError = require('http-errors');
var express = require('express');
const uuid = require('uuid/v4');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*const crypto = require('crypto');
const mongoose = require('mongoose');*/
const bodyParser = require('body-parser');
/*const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');*/
const methodOverride = require('method-override');

//routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');

var app = express();

// Create mongo connection
/*const mongoURI = 'mongodb://localhost:27017/caceca';
const conn = mongoose.createConnection(mongoURI);
let gfs;*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use("/bootstrap", express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use("/js", express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.use("/js", express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
/*
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});
// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });*/
module.exports = app;
