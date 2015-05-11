import _ from 'lodash';
import React from 'react';
import Immutable from 'immutable';
import { Route, DefaultRoute, NotFoundRoute, Redirect } from 'react-router';

import NotFound from '../pages/not-found/not-found';
import App from '../components/app/app';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Team from '../pages/about/team/team';
import Jobs from '../pages/about/jobs/jobs';
import AccountExecutive from '../pages/about/jobs/positions/account-executive';
import ProductEngineer from '../pages/about/jobs/positions/product-engineer';
import DeveloperCommunityManager from '../pages/about/jobs/positions/developer-community-manager';
import EngineeringInterships from '../pages/about/jobs/positions/engineering-internships';
import AccountExecutiveFrance from '../pages/about/jobs/positions/account-executive-fr';
import CustomerSupportFrance from '../pages/about/jobs/positions/customer-support-fr';
import BdGeneralist from '../pages/about/jobs/positions/bd-generalist';
import CountryLeadGermanyAustria from '../pages/about/jobs/positions/country-lead-de-at';
import CountryLeadNetherlandsBelgium from '../pages/about/jobs/positions/country-lead-nl-be';
import CountryLeadSpain from '../pages/about/jobs/positions/country-lead-es';
import CountryLeadSweden from '../pages/about/jobs/positions/country-lead-se';
import Designers from '../pages/about/jobs/positions/designers';
import SoftwareEngineer from '../pages/about/jobs/positions/software-engineer';
import WebOperationsEngineer from '../pages/about/jobs/positions/web-operations-engineer';

import FaqMerchants from '../pages/faq/merchants/merchants';
import ExampleCheckout from '../pages/example-checkout/example-checkout';
import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';
import PaymentsByDirectDebit from '../pages/payments-by-direct-debit/payments-by-direct-debit';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import ContactSales from '../pages/contact-sales/contact-sales';
import Features from '../pages/features/features';
import FeaturesApi from '../pages/features/api/features-api';
import Security from '../pages/security/security';
import Stories from '../pages/stories/stories';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesCrowdCube from '../pages/stories/stories/crowdcube';
import StoriesMomentum from '../pages/stories/stories/momentum-training';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';

import {defaultLocale} from '../helpers/locale-helper/locale-helper';

export var homeRoute = 'home';

const config = Immutable.fromJS([
  [Home, { name: homeRoute }, {
      'en-GB': {
          path: '/',
      },
      'fr-FR': {
          path: '/',
      },
      'fr-BE': {
          path: '/',
      },
    },
  ],
  [ExampleCheckout, { name: 'example_checkout' }, {
      'en-GB': {
          path: '/example-checkout',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
          path: '/partners',
      },
      'fr-FR': {
          path: '/partenaires',
      },
      'fr-BE': {
          path: '/partenaires',
      },
    },
  ],
  [PartnersClearBooks, { name: 'partners_clearbooks' }, {
      'en-GB': {
          path: '/partners/clearbooks',
      },
    },
  ],
  [PartnersFreeagent, { name: 'partners_freeagent' }, {
      'en-GB': {
          path: '/partners/freeagent',
      },
    },
  ],
  [PartnersKashflow, { name: 'partners_kashflow' }, {
      'en-GB': {
          path: '/partners/kashflow',
      },
    },
  ],
  [PartnersPitchero, { name: 'partners_pitchero' }, {
      'en-GB': {
          path: '/partners/pitchero',
      },
    },
  ],
  [PartnersSage, { name: 'partners_sage' }, {
      'en-GB': {
          path: '/partners/sage',
      },
    },
  ],
  [PartnersXero, { name: 'partners_xero' }, {
      'en-GB': {
          path: '/partners/xero',
      },
    },
  ],
  [PaymentsByDirectDebit, { name: 'payments_by_direct_debit' }, {
      'en-GB': {
          path: '/payments-by-direct-debit',
      },
    },
  ],
  [Pricing, { name: 'pricing' }, {
      'en-GB': {
          path: '/pricing',
      },
      'fr-FR': {
          path: '/tarifs',
      },
      'fr-BE': {
          path: '/tarifs',
      },
    },
  ],
  [Pro, { name: 'pro' }, {
      'en-GB': {
          path: '/pro',
      },
      'fr-FR': {
          path: '/pro',
      },
      'fr-BE': {
          path: '/pro',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      'en-GB': {
          path: '/contact-sales',
      },
      'fr-FR': {
          path: '/contactez-nous',
      },
      'fr-BE': {
          path: '/contactez-nous',
      },
    },
  ],
  [Features, { name: 'features' }, {
      'en-GB': {
          path: '/features',
      },
    },
  ],
  [FeaturesApi, { name: 'features_api' }, {
      'en-GB': {
          path: '/features/api',
      },
    },
  ],
  [Security, { name: 'security' }, {
      'en-GB': {
          path: '/security',
      },
      'fr-FR': {
          path: '/securite',
      },
      'fr-BE': {
          path: '/securite',
      },
    },
  ],
  [About, { name: 'about' }, {
      'en-GB': {
          path: '/about',
      },
      'fr-FR': {
          path: '/a-propos',
      },
      'fr-BE': {
          path: '/a-propos',
      },
    },
  ],
  [Team, { name: 'team' }, {
      'en-GB': {
          path: '/about/team',
      },
      'fr-FR': {
          path: '/a-propos/equipe',
      },
      'fr-BE': {
          path: '/a-propos/equipe',
      },
    },
  ],
  [Jobs, { name: 'jobs' }, {
      'en-GB': {
          path: '/about/jobs',
      },
      'fr-FR': {
          path: '/a-propos/carrieres',
      },
      'fr-BE': {
          path: '/a-propos/carrieres',
      },
    },
  ],
  [ProductEngineer, { name: 'jobs_product_engineer', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/product-engineer',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/software-engineer',
      },
    },
  ],
  [WebOperationsEngineer, { name: 'jobs_web_operations', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/web-operations',
      },
    },
  ],
  [EngineeringInterships, { name: 'jobs_engineering_internships', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/engineering-internships',
      },
    },
  ],
  [DeveloperCommunityManager, { name: 'jobs_developer_community_manager', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/developer-community-manager',
      },
    },
  ],
  [Designers, { name: 'jobs_designers', category: 'jobs.ux_design' }, {
      'en-GB': {
          path: '/about/jobs/designers',
      },
    },
  ],
  [CountryLeadNetherlandsBelgium, { name: 'jobs_country_lead_nl_be', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-nl-be',
      },
    },
  ],
  [CountryLeadGermanyAustria, { name: 'jobs_country_lead_de_at', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-de-at',
      },
    },
  ],
  [CountryLeadSpain, { name: 'jobs_country_lead_es', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-es',
      },
    },
  ],
  [CountryLeadSweden, { name: 'jobs_country_lead_se', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-se',
      },
    },
  ],
  [BdGeneralist, { name: 'jobs_bd_generalist', category: 'jobs.business_development' }, {
      'en-GB': {
          path: '/about/jobs/bd-generalist',
      },
    },
  ],
  [AccountExecutive, { name: 'jobs_account_executive', category: 'jobs.sales_marketing' }, {
      'en-GB': {
          path: '/about/jobs/account-executive',
      },
    },
  ],
  [AccountExecutiveFrance, { name: 'jobs_account_executive_france', category: 'jobs.sales_marketing' }, {
      'en-GB': {
          path: '/about/jobs/account-executive-fr',
      },
      'fr-FR': {
          path: '/about/jobs/charge-de-clientele',
      },
      'fr-BE': {
          path: '/about/jobs/charge-de-clientele',
      },
    },
  ],
  [CustomerSupportFrance, { name: 'jobs_customer_support_france', category: 'jobs.operations' }, {
      'en-GB': {
          path: '/about/jobs/customer-support-fr',
      },
      'fr-FR': {
          path: '/about/jobs/service-client',
      },
      'fr-BE': {
          path: '/about/jobs/service-client',
      },
    },
  ],
  [null, null, {
      'en-GB': {
          path: '/faq',
          redirectTo: 'faq_merchants',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants' }, {
      'en-GB': {
          path: '/faq/merchants',
      },
    },
  ],
  [Stories, { name: 'stories' }, {
      'en-GB': {
        path: '/stories',
      },
    },
  ],
  [StoriesHasBeanCoffee, { name: 'stories_has_bean_coffee', category: 'stories' }, {
      'en-GB': {
        path: '/stories/has-bean-coffee',
      },
    },
  ],
  [StoriesBlueskyBusiness, { name: 'stories_bluesky_business', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bluesky-business',
      },
    },
  ],
  [StoriesCrowdCube, { name: 'stories_crowdcube', category: 'stories' }, {
      'en-GB': {
        path: '/stories/crowdcube',
      },
    },
  ],
  [StoriesMomentum, { name: 'stories_momentum', category: 'stories' }, {
      'en-GB': {
        path: '/stories/momentum',
      },
    },
  ],
  [StoriesRockChoir, { name: 'stories_rock_choir', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
      },
    },
  ],
  [StoriesSpencerHockey, { name: 'stories_spencer_hockey', category: 'stories' }, {
      'en-GB': {
        path: '/stories/spencer-hockey',
      },
    },
  ],
  [StoriesFoundationOfHearts, { name: 'stories_foundation_of_hearts', category: 'stories' }, {
      'en-GB': {
        path: '/stories/foundation-of-hearts',
      },
    },
  ],
  [StoriesGreaterAnglia, { name: 'stories_greater_anglia', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
      },
    },
  ],
]);

function pathWithLocale(path, locale) {
  if (!path || path.indexOf('/') !== 0) {
    throw new TypeError('Path not valid, must begin with `/`');
  }

  var localePath;
  if (locale === defaultLocale) {
    localePath = path;
  } else {
    localePath = ['/', locale.toLowerCase(), path].join('/').replace(/\/\//g, '/');
  }
  localePath = localePath.replace(/^\/|\/$/g, '');
  return '/' + localePath;
}

function validatePages(pages) {
  if (pages.size < 1) {
    throw new TypeError('pages must not be empty');
  }
}

function validateLocale(locale, availableLocales) {
  if (!_.includes(availableLocales, locale)) {
    throw new TypeError(`Locale not allowed: ${locale} [${availableLocales.join(', ')}]`);
  }
}

function flattenPagesForLocale(pages, locale, availableLocales) {
  validatePages(pages);
  validateLocale(locale, availableLocales);

  function setLocaleConfigPath(page) {
    const path = page.getIn(['localeConfig', locale, 'path']);
    const matchOptionalSlash = '/?';

    return page.setIn(['localeConfig', 'path'], pathWithLocale(path, locale) + matchOptionalSlash);
  }

  function setLocaleConfigRedirectTo(page) {
    const redirectTo = page.getIn(['localeConfig', locale, 'redirectTo']);

    return page.setIn(['localeConfig', 'redirectTo'], redirectTo);
  }

  function flattenChildConfig(page) {
    if (Immutable.List.isList(page.get('childConfig'))) {
      return page.set('childConfig', flattenPagesForLocale(page.get('childConfig'), locale, availableLocales));
    } else {
      return page;
    }
  }

  return pages.filter((page) => page.get('localeConfig').has(locale))
              .map(setLocaleConfigPath)
              .map(setLocaleConfigRedirectTo)
              .map(flattenChildConfig);
}

function getRoutesForPages(pages, availableLocales) {
  return pages.map(function(page) {
    const handler = page.get('handler');
    const routeConfig = page.get('routeConfig');
    const localeConfig = page.get('localeConfig');
    const childConfig = page.get('childConfig');

    if (handler === null) {
      return (
        <Redirect
          from={localeConfig.get('path')}
          to={localeConfig.get('redirectTo')}
          key={localeConfig.get('redirectTo') + '_redirect'}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Redirect>
      );
    } else {
      return (
        <Route key={routeConfig.get('name')}
          name={routeConfig.get('name')}
          path={localeConfig.get('path')}
          handler={handler}>
          {childConfig && getRoutesForPages(childConfig, availableLocales) || null}
        </Route>
      );
    }
  });
}

/**
 * Returns an easier to work with version of a 'route config' entry, applying the same
 * transformation to any `childConfig`s
 * @param {Array} configItem e.g. [ReactComponent, Object, Object, [[ReactComponent, Object, Object], ...]]
 * @returns {Object} e.g.:
 *   {
 *     handler: ReactComponent,
 *     routeConfig: Object,
 *     localeConfig: Object,
 *     childConfig: [{
 *       handler: ReactComponent,
 *       routeConfig: Object,
 *       localeConfig: Object,
 *       childConfig: ...
 *     }, ...]
 *   }
 */
function transformConfigItems(arg) {
  const [handler, routeConfig, localeConfig, childConfig] = arg.toArray();

  if (Immutable.List.isList(childConfig) && Immutable.List.isList(childConfig.first())) {
    return transformConfigItems(Immutable.List([ handler, routeConfig, localeConfig, childConfig.map(transformConfigItems) ]));
  } else {
    return Immutable.Map({ handler, routeConfig, localeConfig, childConfig });
  }
}

function expandConfig(givenConfig) {
  function expandChildConfig(page) {
    const childConfig = page.get('childConfig');

    if (Immutable.List.isList(childConfig)) {
      return childConfig.flatMap(expandChildConfig).push(page);
    } else {
      return Immutable.List([page]);
    }
  }

  function setLocalePaths(page) {
    return page.update('localeConfig', function(localeConfig) {
      return localeConfig.reduce(function(memo, localeSpecificConfig, locale) {
        return memo.setIn([locale, 'path'], pathWithLocale(localeSpecificConfig.get('path'), locale));
      }, Immutable.Map());
    });
  }

  return givenConfig.map(transformConfigItems)
                    .flatMap(expandChildConfig)
                    .map(setLocalePaths);
}

export function getLocalesForRouteName(routeName, givenConfig=config) {
  const expanded = expandConfig(givenConfig);
  const foundPage = expanded.find((page) => page.getIn(['routeConfig', 'name']) === routeName);

  if (foundPage) {
    return foundPage.get('localeConfig').toJS();
  }
}

export function filterRouteByCategory(routeCategory, locale, givenConfig=config) {
  const expanded = expandConfig(givenConfig);
  const foundPages = expanded.filter((page) => {
    const category = page.getIn(['routeConfig', 'category']);
    if (!category) { return false; }
    const categoryParts = category.split('.');
    return routeCategory.split('.').every(function(part, i) {
      return part === categoryParts[i];
    });
  });

  return foundPages
    .filter((page) => page.get('localeConfig').has(locale))
    .map((page) => {
      return page.setIn(['localeConfig', 'path'], page.getIn(['localeConfig', locale, 'path']));
    })
    .toJS();
}

export function getRoutes(locale, availableLocales, givenConfig=config) {
  const flattenedRoutes = flattenPagesForLocale(givenConfig.map(transformConfigItems), locale, availableLocales);
  const homePage = flattenedRoutes.first();

  return (
    <Route path={homePage.getIn(['localeConfig', 'path'])} handler={App}>
      {getRoutesForPages(flattenedRoutes.rest(), availableLocales)}

      <DefaultRoute handler={homePage.get('handler')} name={homePage.getIn(['routeConfig', 'name'])} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );
}

export function getAllPaths(givenConfig=config) {
  const expanded = expandConfig(givenConfig);

  return expanded.flatMap((page) => page.get('localeConfig').valueSeq())
                 .map((localeConfig) => localeConfig.get('path'));
}
