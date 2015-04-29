import path from 'path';
import http from 'http';

import express from 'express';
import locale from 'locale';
import favicon from 'serve-favicon';

import render from './render';
import {availableLocales} from '../app/helpers/locale-helper/locale-helper';

const app = express();

app.use(locale(availableLocales));

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'app')));

app.use(render);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  console.error('Error on request %s %s', req.method, req.url);
  console.error(err);
  console.error(err.stack);

  res.status(err.status || 500).send(`
    <h1>${ err.message }</h1>
    <h2>${ err.status }</h2>
    <pre>${ err.stack }</pre>
  `);
});

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on http://localhost:' + bind);
});

function normalizePort(val) {
  const portNum = parseInt(val, 10);

  // named pipe
  if (Number.isNaN(portNum)) {
    return val;
  }

  if (portNum >= 0) {
    return portNum;
  }

  return false;
}
