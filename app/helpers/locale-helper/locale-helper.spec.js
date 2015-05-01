import { pathToLocale } from './locale-helper';

describe('pathLocale', function() {
  describe('with an fr-FR locale in the path', function() {
    it('instantiates and returns a new Locale instance in the right locale', function() {
      var result = pathToLocale('/fr-FR/about', [
        'fr-FR', 'en-GB',
      ]);
      expect(result.code).toEqual('fr-fr');
    });
  });

  describe('without a specific locale in the path', function() {
    it('instantiates and returns a new Locale instance with the default locale', function() {
      var result = pathToLocale('/about');
      expect(result.code).toEqual('en-GB');
    });
  });
});
