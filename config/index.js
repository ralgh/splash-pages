import path from 'path';
import includes from 'lodash/collection/includes';
import merge from 'lodash/object/merge';

import shared from '../config/shared';

var env = process.env.NODE_ENV || 'development';
var allowedEnvs = ['production', 'development', 'test'];

if (!includes(allowedEnvs, env)) {
  throw new TypeError(`env not allowed ${env}: [${allowedEnvs}]`);
}

var config = require(path.join(__dirname, env));
config = merge({}, shared, config);

export default config;
