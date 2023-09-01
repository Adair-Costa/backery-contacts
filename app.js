const path = require('path');
const express = require('express');
const morgan = require('morgan');

const bakeryRouter = require('./routes/bakeryRoutes');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from middleware 😁');
  next();
});

// ROUTES
app.use('/', bakeryRouter);

module.exports = app;
