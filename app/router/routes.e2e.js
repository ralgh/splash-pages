require('babel/register');

var request = require('superagent');

var BASE_URL = require('../helpers/e2e/config').BASE_URL;

var get = function(url, callback) {
  request.get(BASE_URL + url)
         .accept('text/html')
         .end(callback);
};

var getAllPaths = require('./route-helpers').getAllPaths;

describe('Automated E2E tests', function() {
  getAllPaths().forEach(function(path) {
    it('returns a status 200 for ' + path, function(done) {
      get(path, function(err, res) {
        expect(err).toBe(null);
        expect(res.status).toEqual(200);
        done();
      });
    });
  });
});
