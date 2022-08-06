const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const cors = required('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// compress all responses
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

process.on('uncaughtException', (err) => {
  console.log(err, 'Error');
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.log(err, "err");
  process.exit(1);
});

module.exports = app;