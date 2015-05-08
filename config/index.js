import path from 'path';
import _ from 'lodash';

import shared from '../config/shared';

var env = process.env.NODE_ENV || 'development';
var allowedEnvs = ['production', 'development', 'test'];

if (!_.includes(allowedEnvs, env)) {
  throw new TypeError(`env not allowed ${env}: [${allowedEnvs}]`);
}

var config = require(path.join(__dirname, env));
config = _.merge({}, shared, config);

export default config;
