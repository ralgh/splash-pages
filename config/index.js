// Load the appropriate config
var env = './' + (process.env.NODE_ENV || 'development');
var config = require(env);
export default config;
