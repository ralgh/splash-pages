require('babel/register');

var BASE_URL = require('../../helpers/e2e/config').BASE_URL;

describe('Setting the referral code cookie', function() {
  it('stores it if the r param is set', function(done) {
    browser.get(BASE_URL + '/?r=ABC');
    browser.manage().getCookie('referral_code').then(function(cookie) {
      expect(cookie.value).toEqual('ABC');
      done();
    });
  });
});

describe('Setting the google ppc cookie', function() {
  it('stores it if the gclid param is set', function(done) {
    browser.get(BASE_URL + '/?gclid=ABC');
    browser.manage().getCookie('google_ppc_click').then(function(cookie) {
      expect(cookie.value).toEqual('ABC');
      done();
    });
  });
});
