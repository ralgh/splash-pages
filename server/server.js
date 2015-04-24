import path from 'path';
import express from 'express';
import locale from 'locale';
import compression from 'compression';

import {render} from './render';
import {availableLocales} from '../app/helpers/locale-helper/locale-helper';

const server = express();

server.use(locale(availableLocales));

server.use(express.static(path.join(__dirname, '..', 'public')));
server.use(express.static(path.join(__dirname, '..', 'app')));

server.use(render(server));
server.use(compression());

server.use((err, req, res) => {
  console.log('Error on request %s %s', req.method, req.url);
  console.log(err);
  console.log(err.stack);
  res.status(500).send('Something bad happened');
});

server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'), () => {
  console.log(`Express ${server.get('env')} server listening on http://localhost:${server.get('port')}`);
});
