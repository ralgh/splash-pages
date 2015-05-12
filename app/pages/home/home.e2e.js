var BASE_URL = 'http://localhost:4402';

describe('Navigating to the Pro product', function() {
  it('lets the user navigate to /pro', function() {
    browser.get(BASE_URL);
    element(by.id('track-nav-products')).click();
    element(by.id('track-nav-pro')).click();
    expect(browser.getCurrentUrl()).toEqual(BASE_URL + '/pro/');
  });
});

describe('Swapping languages', function() {
  it('lets you navigate to a page and then swap languages', function() {
    browser.get(BASE_URL);
    element(by.id('track-nav-products')).click();
    element(by.id('track-nav-pro')).click();
    element(by.cssContainingText('.popover-link', 'United Kingdom')).click();
    element(by.css('a[href="/fr-fr/pro/"]')).click();
    expect(element(by.cssContainingText('body', 'Découvrez GoCardless')).isPresent()).toBe(true);
  });
});
