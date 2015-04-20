
var pages = [{
  name: 'home',
  path: '/',
  locales: {
    'en-gb': {
      title: 'Home',
      description: 'Home',
    },
    'fr-fr': {
      title: 'French home',
      description: 'French home',
    }
  },
  children: [{
    name: 'about',
    locales: {
      'en-gb': {
        path: '/about',
        title: 'About',
        description: 'About',
      },
      'fr-fr': {
        path: '/a-propos',
        title: 'French about',
        description: 'French about',
      }
    },
  }]
}, {
  name: 'about',
  locales: {
    'en-gb': {
      title: 'About',
      path: '/about',
      description: 'About',
    },
    'fr-fr': {
      title: 'About fr',
      path: '/a-propos',
      description: 'About fr',
    }
  },
}];

var routeConfig = [
  [{
    name: 'home',
    handler: Home,
    [LOCALE_DEFAULTS]: {
      path: '/',
    },
    [EN_GB]: {
      title: 'Home',
      description: 'Home',
    },
    [FR_FR]: {
      title: 'French home',
      description: 'French home',
    }
  }],

  [{
    name: 'about',
    handler: About,
    [EN_GB]: {
      path: '/about',
      title: 'About',
      description: 'About',
    },
    [FR_FR]: {
      path: '/a-propos',
      title: 'French about',
      description: 'French about',
    }
  }],

  [{
    name: 'faq',
    [EN_GB]: {
      path: '/faq',
      redirectTo: 'faq-merchants',
    }
  }, [
    name: 'faq-merchants',
    handler: 'FAQMerchants',
    [EN_GB]: {
      path: '/faq/merchants',
      title: 'FAQMerchants',
      description: 'FAQMerchants',
    }
  ]
  }],
];