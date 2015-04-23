import path from 'path';
import _ from 'lodash';

import shared from '../config/shared';

var env = process.env.NODE_ENV || 'development';
var allowedEnvs = ['production', 'development'];

if (!_.contains(allowedEnvs, env)) {
  throw new Error(`env not allowed ${env}: [${allowedEnvs}]`);
}

var config = require(path.join(__dirname, env));
config = _.merge({}, shared, config);

export default config;
