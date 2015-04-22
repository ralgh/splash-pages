import path from 'path';
import express from 'express';
import locale from 'locale';

import render from './render';
import {availableLocales} from '../config/locale';

const server = express();

server.use(locale(availableLocales));

server.use(render);

server.use(express.static(path.join(__dirname, '..', 'public')));

server.use((err, req, res, next) => {
  console.log('Error on request %s %s', req.method, req.url);
  console.log(err);
  console.log(err.stack);
  res.status(500).send('Something bad happened');
});

server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'), () => {
  console.log(`Express ${server.get('env')} server listening on ${server.get('port')}`);
});
