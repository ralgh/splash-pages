import _ from 'lodash';
import Immutable from 'immutable';
import { run, TestLocation } from 'react-router';
import { getLocalesForRouteName, getRoutes } from './routes.js';
import { FakeComponent } from '../helpers/specs/fake-component';
import NotFound from '../pages/not-found/not-found';

const fakeConfig = Immutable.fromJS([
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
  [
    FakeComponent, { name: 'routeWithChildren' }, {
      'en-GB': { path: '/en-route-with-child' },
    },
    [
      [
        FakeComponent, { name: 'childRoute' }, {
          'en-GB': { path: '/child-route' },
        },
      ],
    ],
  ],
  [
    null, null, {
      'en-GB': {
        path: '/redirect',
        redirectTo: '/redirected',
      },
    },
  ],
  [
    FakeComponent, { name: 'redirectedToRoute' }, {
      'en-GB': { path: '/redirected' },
    },
  ],
]);

//TODO: write a test that says if you have a config with a URL that's not absolute, throw an error
describe('getLocalesForRouteName', () => {
  let routeName;

  describe('for a routeName that is available in many locales', () => {
    beforeEach(() => routeName = 'home');

    it('returns a name => path mapping', () => {
      expect(getLocalesForRouteName(routeName, fakeConfig)).toEqual({
        'en-GB': { path: '/' },
        'fr-FR': { path: '/fr-fr' },
      });
    });
  });

  describe('for a nested route', () => {
    beforeEach(() => routeName = 'childRoute');

    it('returns a name => path mapping', () => {
      expect(getLocalesForRouteName(routeName, fakeConfig)).toEqual({
        'en-GB': { path: '/child-route' },
      });

      expect(getLocalesForRouteName('routeWithChildren', fakeConfig)).toEqual({
        'en-GB': { path: '/en-route-with-child' },
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
    let routeComponent;

    beforeEach(() => {
      routeComponent = getRoutes('en-GB', ['en-GB', 'fr-FR'], fakeConfig);
    });

    it('creates any redirects correctly', (done) => {
      run(routeComponent, function({ routes }) {
        const redirectRoute = routes[0].childRoutes.find((route) => !route.handler);

        const transitionSpy = jasmine.createSpyObj('transition', ['redirect']);

        redirectRoute.onEnter(transitionSpy, {}, {});

        expect(transitionSpy.redirect).toHaveBeenCalledWith('/redirected', {}, {});

        done();
      });
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
        const childRoutePaths = route.childRoutes.map((c) => c.path);

        expect(childRoutePaths).toEqual([
          '/english-specific-page/?',
          '/english-only/?',
          '/en-route-with-child/?',
          '/redirect/?',
          '/redirected/?',
          '//?',
          '//?*',
        ]);

        done();
      });
    });

    describe('when given fr-FR locale', () => {
      it('picks the french routes', (done) => {
        const location = new TestLocation(['/fr-fr']);
        routeComponent = getRoutes('fr-FR', ['en-GB', 'fr-FR'], fakeConfig);

        run(routeComponent, location, function({ routes }) {
          const route = routes[0];
          const childRoutePaths = route.childRoutes.map(c => c.path);

          expect(childRoutePaths)
            .toEqual(['/fr-fr/french-specific-page/?', '/fr-fr/french-only/?', '/fr-fr/?', '/fr-fr/?*']);

          done();
        });
      });
    });

    describe('matching path', () => {
      it('without forward slash', (done) => {
        const location = new TestLocation(['/english-only']);
        run(routeComponent, location, function(Handler, state) {
          expect(_.last(state.routes).name).toEqual('englishOnlyRoute');
          done();
        });
      });

      it('with forward slash', (done) => {
        const location = new TestLocation(['/english-only/']);
        run(routeComponent, location, function(Handler, state) {
          expect(_.last(state.routes).name).toEqual('englishOnlyRoute');
          done();
        });
      });
    });

    it('correctly includes child routes for the given locale', (done) => {
      run(routeComponent, function({ routes }) {
        const route = routes[0];
        const childChildRoutePaths = _.flatten(_.compact(route.childRoutes.map(c => c.childRoutes))).map((c) => c.path);

        expect(childChildRoutePaths).toEqual(['/child-route/?']);

        done();
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

    describe('when given fr-FR locale', () => {
      it('picks the french routes', (done) => {
        const location = new TestLocation(['/fr-fr']);
        routeComponent = getRoutes('fr-FR', ['en-GB', 'fr-FR'], fakeConfig);

        run(routeComponent, location, function({ routes }) {
          const route = routes[0];
          const childRoutePaths = route.childRoutes.map(c => c.path);

          expect(childRoutePaths).toEqual(['/fr-fr/french-specific-page/?', '/fr-fr/french-only/?', '/fr-fr/?', '/fr-fr/?*']);

          done();
        });
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
