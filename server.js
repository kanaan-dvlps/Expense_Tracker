const express = require('express');
const bodyParser = require('body-parser');
const ODM = require('mongoose');
const app = express();
const process = require('process');
const os = require('os');

// ! ##### Constants #####
// ? -----------------------
require('./Helpers/globals');

// ! ##### Middlewares #####
// ? -----------------------
// * dotenv middleware
require('dotenv').config();

// * BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ? Routes files
const expense = require('./Routes/expenses');
const income = require('./Routes/income');
const balance = require('./Routes/balance');

// ? Router middleware
app.use('/api/v1/balance/expense', expense);
app.use('/api/v1/balance/income', income);
app.use('/api/v1/balance/balance', balance);

// ! ##### Server #####
// ? -----------------------
const SERVER = app.listen(process.env.PORT, () => {
  ODM.connect(process.env.MONGODB_URI);

  // ? Colorized terminal message
  console.log(`-----------------------------------`);
  console.log(`\n\x1b[1m\x1b[33m PORT:\x1b[0m\x1b[1m \x1b[32m${process.env.PORT} \x1b[0m`);

  console.log(`\x1b[1m\x1b[33m ADDRESS:\x1b[0m\x1b[1m \x1b[32m${process.env.BASE_URL} \x1b[0m`);
  console.log(`\x1b[1m\x1b[33m IP:\x1b[0m\x1b[1m \x1b[32m${os.networkInterfaces().eth0[0].address} \x1b[0m`);
  console.log(`\x1b[1m\x1b[33m HOSTNAME:\x1b[0m\x1b[1m \x1b[32m${os.hostname()} \x1b[0m \n`);
  // console.log(`\x1b[1m\x1b[33m## ENVIRONMENT:\x1b[0m\x1b[1m \x1b[32m${process.env.ENVIRONMENT} ## \x1b[0m \n`);
  ODM.connection.on('error', error => {
    console.log(`\x1b[41m\x1b[1mODM error\x1b[0m`, error);
  });

  console.log(`\x1b[34m\x1b[1mconnection to ODM...\x1b[0m`);
  ODM.connection.on('connected', () => {
    console.log(`\x1b[34m\x1b[1msuccessfully connected to ODM!\x1b[0m`);
  });
  console.log(`\x1b[34m\x1b[1mprocess PID ${process.pid} started\x1b[0m`);
});

function signalHandler(signal) {
  if (signal) {
    console.log(`received signal: ${signal}`);
    console.log(`closing HTTP server`);
    SERVER.close(() => {
      console.log(`HTTP server closed gracefully`);
      ODM.connection.close(false, () => {
        console.log(`Database connection closed gracefully`);
        console.log(`process PID ${process.pid} stopped`);
        process.exit(0);
      });
    });
  }
};

process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);