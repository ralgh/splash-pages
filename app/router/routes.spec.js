import { run, TestLocation } from 'react-router';
import { getLocalesForRouteName, getRoutes } from './routes.js';
import { FakeComponent } from '../helpers/specs/fake-component';
import NotFound from '../pages/not-found/not-found';

const fakeConfig = [
  [
    FakeComponent, { name: 'home' }, {
      'en-GB': { path: '/' },
      'fr-FR': { path: '/' },
    },
  ],
  [
    FakeComponent, { name: 'englishAndFrenchRoute' }, {
      'en-GB': { path: '/english-specific-page' },
      'fr-FR': { path: '/french-specific-page' },
    },
  ],
  [
    FakeComponent, { name: 'englishOnlyRoute' }, {
      'en-GB': { path: '/english-only' },
    },
  ],
  [
    FakeComponent, { name: 'frenchOnlyRoute' }, {
      'fr-FR': { path: '/french-only' },
    },
  ],
];

describe('getLocalesForRouteName', () => {
  var routeName;

  describe('for a routeName that is available in many locales', () => {
    beforeEach(() => routeName = 'home');

    it('returns a name => path mapping', () => {
      expect(getLocalesForRouteName(routeName, fakeConfig)).toEqual({
        'en-GB': { path: '/' },
        'fr-FR': { path: '/fr-fr' },
      });
    });
  });

  describe('for a routeName that is not available in any locale', () => {
    beforeEach(() => routeName = 'doesnt exist');

    it('returns undefined', () => {
      expect(getLocalesForRouteName(routeName, fakeConfig)).toBe(undefined);
    });
  });

  describe('for a routeName that is null', () => {
    beforeEach(() => routeName = null);

    it('returns nothing', () => {
      expect(getLocalesForRouteName(routeName, fakeConfig)).toBe(undefined);
    });
  });
});

describe('getRoutes', () => {
  describe('given a valid set of routes and locales', () => {
    var routeComponent;

    beforeEach(() => {
      routeComponent = getRoutes('en-GB', ['en-GB', 'fr-FR'], fakeConfig);
    });

    it('returns one route component', (done) => {
      run(routeComponent, function({ routes }) {
        expect(routes.length).toEqual(1);

        done();
      });
    });

    it('picks the correct routes based on the locale', (done) => {
      run(routeComponent, function({ routes }) {
        const route = routes[0];
        const childRoutePaths = route.childRoutes.map(c => c.path);

        expect(childRoutePaths).toEqual(['/english-specific-page/?', '/english-only/?', '//?', '//?*']);

        done();
      });
    });

    describe('when given fr-FR locale', () => {
      it('picks the french routes', (done) => {
        var location = new TestLocation(['/fr-fr']);
        routeComponent = getRoutes('fr-FR', ['en-GB', 'fr-FR'], fakeConfig);

        run(routeComponent, location, function({ routes }) {
          const route = routes[0];
          const childRoutePaths = route.childRoutes.map(c => c.path);

          expect(childRoutePaths).toEqual(['/fr-fr/french-specific-page/?', '/fr-fr/french-only/?', '/fr-fr/?', '/fr-fr/?*']);

          done();
        });
      });
    });

    it('uses the not found route', (done) => {
      run(routeComponent, function({ routes }) {
        const { notFoundRoute } = routes[0];

        expect(notFoundRoute.handler).toEqual(NotFound);

        done();
      });
    });

    it('uses the first config entry as the default route', (done) => {
      run(routeComponent, function({ routes }) {
        const { defaultRoute } = routes[0];

        expect(defaultRoute.name).toEqual('home');

        done();
      });
    });
  });

  describe('given a locale that is not in the available locales', () => {
    it('throws a locale not allowed error', () => {
      expect(function() {
        getRoutes('de-de', ['en-GB', 'fr-FR'], fakeConfig);
      }).toThrowError(/Locale not allowed/);
    });
  });
});
