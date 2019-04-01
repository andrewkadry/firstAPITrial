import * as mongoose from "mongoose";

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var homeRouter = require('./routes/home');


var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/home', homeRouter);


mongoose
    .connect(
        'mongodb://robeto:robeto123@ds127139.mlab.com:27139/robeto'
    )
    .then(result => {
       module.exports = app;
    })
    .catch(err => console.log(err));
