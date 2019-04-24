const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const topicsRouter = require('./routes/topics');
const commentsRouter = require('./routes/comments');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/topics', topicsRouter);
app.use('/comments', commentsRouter);

module.exports = app;
