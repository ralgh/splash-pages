import Immutable from 'immutable';

import { FakeComponent } from './fake-component';

export const fakeConfig = Immutable.fromJS([
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
