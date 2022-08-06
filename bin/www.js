const debug = require('debug')('app:server');
const http = require('http');
const app = require('../app');

/**
  * Normalize a port into a number, string, or false.
  */
function normalizePort(val) {
  const nPort = parseInt(val, 10);

  if (Number.isNaN(nPort)) {
    return val;
  }

  if (nPort >= 0) {
    return nPort;
  }

  return false;
}

/**
  * Get port from environment and store in Express.
  */
