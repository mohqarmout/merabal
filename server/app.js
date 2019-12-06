const express = require('express');
const { join } = require('path');
const compression = require('compression');
// const morgan = require('morgan');
const fileupload = require('express-fileupload');
const helmet = require('helmet');

const controllers = require('./controllers');
const errorHandle = require('./controllers/middleware');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(helmet());
app.use(express.json());
app.use(compression());
app.use(fileupload());

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.use(express.static(join(__dirname, 'uploads')));

app.use('/api/v1/', controllers);

app.use((_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.use(errorHandle);

module.exports = app;
