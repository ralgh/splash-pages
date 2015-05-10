import Immutable from 'immutable';

import Home from '../pages/home/home';
import Pricing from '../pages/pricing/pricing';
import Pro from '../pages/pro/pro';
import Features from '../pages/features/features';
import FeaturesApi from '../pages/features/api/features-api';
import Security from '../pages/security/security';
import ContactSales from '../pages/contact-sales/contact-sales';

import PaymentsByDirectDebit from '../pages/payments-by-direct-debit/payments-by-direct-debit';
import Europe from '../pages/europe/europe';
import Refer from '../pages/refer/refer';
import ExampleCheckout from '../pages/example-checkout/example-checkout';

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

import LegalIntroduction from '../pages/legal/introduction/legal-introduction';
import LegalCustomers from '../pages/legal/customers/legal-customers';
import LegalMerchants from '../pages/legal/merchants/legal-merchants';
import LegalOldRestrictionsIndex from '../pages/legal/old-restrictions/index/legal-old-restrictions-index';
import LegalOldRestrictions20140731 from '../pages/legal/old-restrictions/2014-07-31/legal-old-restrictions-2014-07-31';
import LegalOldRestrictions20140919 from '../pages/legal/old-restrictions/2014-09-19/legal-old-restrictions-2014-09-19';
import LegalPartners from '../pages/legal/partners/legal-partners';
import LegalPrivacy from '../pages/legal/privacy/legal-privacy';
import LegalRestrictions from '../pages/legal/restrictions/legal-restrictions';

import Partners from '../pages/partners/partners';
import PartnersClearBooks from '../pages/partners/clearbooks/partners-clearbooks';
import PartnersFreeagent from '../pages/partners/freeagent/partners-freeagent';
import PartnersKashflow from '../pages/partners/kashflow/partners-kashflow';
import PartnersPitchero from '../pages/partners/pitchero/partners-pitchero';
import PartnersSage from '../pages/partners/sage/partners-sage';
import PartnersXero from '../pages/partners/xero/partners-xero';

import FaqCustomersHowItWorks from '../pages/faq/customers/how-it-works/faq-customers-how-it-works';
import FaqCustomers from '../pages/faq/customers/overview/faq-customers-overview';
import FaqCustomersRefunds from '../pages/faq/customers/refunds/faq-customers-refunds';
import FaqCustomersSecurity from '../pages/faq/customers/security/faq-customers-security';
import FaqMerchantsCustomerExperience from '../pages/faq/merchants/customer-experience/faq-merchants-customer-experience';
import FaqMerchantsDeveloperApi from '../pages/faq/merchants/developer-api/faq-merchants-developer-api';
import FaqMerchantsDirectDebit from '../pages/faq/merchants/direct-debit/faq-merchants-direct-debit';
import FaqMerchantsHowItWorks from '../pages/faq/merchants/how-it-works/faq-merchants-how-it-works';
import FaqMerchantsInternationalPayments from '../pages/faq/merchants/international-payments/faq-merchants-international-payments';
import FaqMerchants from '../pages/faq/merchants/overview/faq-merchants-overview';
import FaqMerchantsPartners from '../pages/faq/merchants/partners/faq-merchants-partners';
import FaqMerchantsReferrals from '../pages/faq/merchants/referrals/faq-merchants-referrals';
import FaqMerchantsSecurity from '../pages/faq/merchants/security/faq-merchants-security';
import FaqMerchantsSigningUp from '../pages/faq/merchants/signing-up/faq-merchants-signing-up';

import Stories from '../pages/stories/stories';
import StoriesHasBeanCoffee from '../pages/stories/stories/has-bean-coffee';
import StoriesBlueskyBusiness from '../pages/stories/stories/bluesky-business';
import StoriesCrowdCube from '../pages/stories/stories/crowdcube';
import StoriesMomentum from '../pages/stories/stories/momentum-training';
import StoriesRockChoir from '../pages/stories/stories/rock-choir';
import StoriesSpencerHockey from '../pages/stories/stories/spencer-hockey';
import StoriesFoundationOfHearts from '../pages/stories/stories/foundation-of-hearts';
import StoriesGreaterAnglia from '../pages/stories/stories/greater-anglia';

export var homeRoute = 'home';

export const config = Immutable.fromJS([
  [Home, { name: homeRoute }, {
      'en-GB': {
          path: '/',
      },
      'en-IE': {
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
  [Pricing, { name: 'pricing' }, {
      'en-GB': {
          path: '/pricing',
      },
      'en-IE': {
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
      'en-IE': {
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
  [Security, { name: 'security' }, {
      'en-GB': {
          path: '/security',
      },
      'en-IE': {
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
  [Features, { name: 'features' }, {
      'en-GB': {
          path: '/features',
      },
      'en-IE': {
          path: '/features',
      },
    },
  ],
  [FeaturesApi, { name: 'features_api' }, {
      'en-GB': {
          path: '/features/api',
      },
      'en-IE': {
          path: '/features/api',
      },
    },
  ],
  [ContactSales, { name: 'contact_sales' }, {
      'en-GB': {
          path: '/contact-sales',
      },
      'en-IE': {
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
  [PaymentsByDirectDebit, { name: 'payments_by_direct_debit' }, {
      'en-GB': {
          path: '/payments-by-direct-debit',
      },
      'en-IE': {
          path: '/payments-by-direct-debit',
      },
    },
  ],
  [Europe, { name: 'europe' }, {
      'en-GB': {
        path: '/europe',
      },
      'en-IE': {
        path: '/europe',
      },
    },
  ],
  [Refer, { name: 'refer' }, {
      'en-GB': {
        path: '/refer',
      },
      'en-IE': {
        path: '/refer',
      },
    },
  ],
  [ExampleCheckout, { name: 'example_checkout' }, {
      'en-GB': {
          path: '/example-checkout',
      },
      'en-IE': {
          path: '/example-checkout',
      },
    },
  ],
  [About, { name: 'about' }, {
      'en-GB': {
          path: '/about',
      },
      'en-IE': {
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
      'en-IE': {
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
      'en-IE': {
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
      'en-IE': {
          path: '/about/jobs/product-engineer',
      },
    },
  ],
  [SoftwareEngineer, { name: 'jobs_software_engineer', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/software-engineer',
      },
      'en-IE': {
          path: '/about/jobs/software-engineer',
      },
    },
  ],
  [WebOperationsEngineer, { name: 'jobs_web_operations', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/web-operations',
      },
      'en-IE': {
          path: '/about/jobs/web-operations',
      },
    },
  ],
  [EngineeringInterships, { name: 'jobs_engineering_internships', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/engineering-internships',
      },
      'en-IE': {
          path: '/about/jobs/engineering-internships',
      },
    },
  ],
  [DeveloperCommunityManager, { name: 'jobs_developer_community_manager', category: 'jobs.engineering' }, {
      'en-GB': {
          path: '/about/jobs/developer-community-manager',
      },
      'en-IE': {
          path: '/about/jobs/developer-community-manager',
      },
    },
  ],
  [Designers, { name: 'jobs_designers', category: 'jobs.ux_design' }, {
      'en-GB': {
          path: '/about/jobs/designers',
      },
      'en-IE': {
          path: '/about/jobs/designers',
      },
    },
  ],
  [CountryLeadNetherlandsBelgium, { name: 'jobs_country_lead_nl_be', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-nl-be',
      },
      'en-IE': {
          path: '/about/jobs/country-lead-nl-be',
      },
    },
  ],
  [CountryLeadGermanyAustria, { name: 'jobs_country_lead_de_at', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-de-at',
      },
      'en-IE': {
          path: '/about/jobs/country-lead-de-at',
      },
    },
  ],
  [CountryLeadSpain, { name: 'jobs_country_lead_es', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-es',
      },
      'en-IE': {
          path: '/about/jobs/country-lead-es',
      },
    },
  ],
  [CountryLeadSweden, { name: 'jobs_country_lead_se', category: 'jobs.country_leads' }, {
      'en-GB': {
          path: '/about/jobs/country-lead-se',
      },
      'en-IE': {
          path: '/about/jobs/country-lead-se',
      },
    },
  ],
  [BdGeneralist, { name: 'jobs_bd_generalist', category: 'jobs.business_development' }, {
      'en-GB': {
          path: '/about/jobs/bd-generalist',
      },
      'en-IE': {
          path: '/about/jobs/bd-generalist',
      },
    },
  ],
  [AccountExecutive, { name: 'jobs_account_executive', category: 'jobs.sales_marketing' }, {
      'en-GB': {
          path: '/about/jobs/account-executive',
      },
      'en-IE': {
          path: '/about/jobs/account-executive',
      },
    },
  ],
  [AccountExecutiveFrance, { name: 'jobs_account_executive_france', category: 'jobs.sales_marketing' }, {
      'en-GB': {
          path: '/about/jobs/account-executive-fr',
      },
      'en-IE': {
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
      'en-IE': {
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
  [LegalIntroduction, { name: 'legal', category: 'legal' }, {
      'en-GB': {
          path: '/legal',
      },
      'en-IE': {
          path: '/legal',
      },
      'fr-FR': {
          path: '/legal',
      },
      'fr-BE': {
          path: '/legal',
      },
    },
  ],
  [LegalCustomers, { name: 'legal_customers', category: 'legal' }, {
      'en-GB': {
          path: '/legal/customers',
      },
      'en-IE': {
          path: '/legal/customers',
      },
    },
  ],
  [LegalMerchants, { name: 'legal_merchants', category: 'legal' }, {
      'en-GB': {
          path: '/legal/merchants',
      },
      'en-IE': {
          path: '/legal/merchants',
      },
    },
  ],
  [LegalOldRestrictionsIndex, { name: 'legal_old_restrictions' }, {
      'en-GB': {
          path: '/legal/old-restrictions',
      },
      'en-IE': {
          path: '/legal/old-restrictions',
      },
    },
  ],
  [LegalOldRestrictions20140731, { name: 'legal_old_restrictions_2014_07_31' }, {
      'en-GB': {
          path: '/legal/old-restrictions/2014-07-31',
      },
      'en-IE': {
          path: '/legal/old-restrictions/2014-07-31',
      },
    },
  ],
  [LegalOldRestrictions20140919, { name: 'legal_old_restrictions_2014_09_19' }, {
      'en-GB': {
          path: '/legal/old-restrictions/2014-09-19',
      },
      'en-IE': {
          path: '/legal/old-restrictions/2014-09-19',
      },
    },
  ],
  [LegalPartners, { name: 'legal_partners', category: 'legal' }, {
      'en-GB': {
          path: '/legal/partners',
      },
      'en-IE': {
          path: '/legal/partners',
      },
    },
  ],
  [LegalRestrictions, { name: 'legal_restrictions', category: 'legal' }, {
      'en-GB': {
          path: '/legal/restrictions',
      },
      'en-IE': {
          path: '/legal/restrictions',
      },
      'fr-FR': {
          path: '/legal/activites-restreintes',
      },
      'fr-BE': {
          path: '/legal/activites-restreintes',
      },
    },
  ],
  [LegalPrivacy, { name: 'legal_privacy', category: 'legal' }, {
      'en-GB': {
          path: '/legal/privacy',
      },
      'en-IE': {
          path: '/legal/privacy',
      },
      'fr-FR': {
          path: '/legal/politique-de-confidentialite',
      },
      'fr-BE': {
          path: '/legal/politique-de-confidentialite',
      },
    },
  ],
  [Partners, { name: 'partners' }, {
      'en-GB': {
          path: '/partners',
      },
      'en-IE': {
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
      'en-IE': {
          path: '/partners/clearbooks',
      },
    },
  ],
  [PartnersFreeagent, { name: 'partners_freeagent' }, {
      'en-GB': {
          path: '/partners/freeagent',
      },
      'en-IE': {
          path: '/partners/freeagent',
      },
    },
  ],
  [PartnersKashflow, { name: 'partners_kashflow' }, {
      'en-GB': {
          path: '/partners/kashflow',
      },
      'en-IE': {
          path: '/partners/kashflow',
      },
    },
  ],
  [PartnersPitchero, { name: 'partners_pitchero' }, {
      'en-GB': {
          path: '/partners/pitchero',
      },
      'en-IE': {
          path: '/partners/pitchero',
      },
    },
  ],
  [PartnersSage, { name: 'partners_sage' }, {
      'en-GB': {
          path: '/partners/sage',
      },
      'en-IE': {
          path: '/partners/sage',
      },
    },
  ],
  [PartnersXero, { name: 'partners_xero' }, {
      'en-GB': {
          path: '/partners/xero',
      },
      'en-IE': {
          path: '/partners/xero',
      },
    },
  ],
  [FaqCustomers, { name: 'faq_customers', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers',
      },
      'en-IE': {
          path: '/faq/customers',
      },
    },
  ],
  [FaqCustomersHowItWorks, { name: 'faq_customers_how_it_works', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers/how-it-works',
      },
      'en-IE': {
          path: '/faq/customers/how-it-works',
      },
    },
  ],
  [FaqCustomersRefunds, { name: 'faq_customers_refunds', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers/refunds',
      },
      'en-IE': {
          path: '/faq/customers/refunds',
      },
    },
  ],
  [FaqCustomersSecurity, { name: 'faq_customers_security', category: 'faq.customers' }, {
      'en-GB': {
          path: '/faq/customers/security',
      },
      'en-IE': {
          path: '/faq/customers/security',
      },
    },
  ],
  [FaqMerchants, { name: 'faq_merchants', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants',
      },
      'en-IE': {
          path: '/faq/merchants',
      },
      'fr-FR': {
          path: '/faq/commercant',
      },
      'fr-BE': {
          path: '/faq/commercant',
      },
    },
  ],
  [FaqMerchantsHowItWorks, { name: 'faq_merchants_how_it_works', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/how-it-works',
      },
      'en-IE': {
          path: '/faq/merchants/how-it-works',
      },
      'fr-FR': {
          path: '/faq/commercant/fonctionnement',
      },
      'fr-BE': {
          path: '/faq/commercant/fonctionnement',
      },
    },
  ],
  [FaqMerchantsSigningUp, { name: 'faq_merchants_signing_up', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/signing-up',
      },
      'en-IE': {
          path: '/faq/merchants/signing-up',
      },
      'fr-FR': {
          path: '/faq/commercant/inscription',
      },
      'fr-BE': {
          path: '/faq/commercant/inscription',
      },
    },
  ],
  [FaqMerchantsDirectDebit, { name: 'faq_merchants_direct_debit', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/direct-debit',
      },
      'en-IE': {
          path: '/faq/merchants/direct-debit',
      },
      'fr-FR': {
          path: '/faq/commercant/prelevement-bancaire',
      },
      'fr-BE': {
          path: '/faq/commercant/prelevement-bancaire',
      },
    },
  ],
  [FaqMerchantsSecurity, { name: 'faq_merchants_security', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/security',
      },
      'en-IE': {
          path: '/faq/merchants/security',
      },
      'fr-FR': {
          path: '/faq/commercant/securite',
      },
      'fr-BE': {
          path: '/faq/commercant/securite',
      },
    },
  ],
  [FaqMerchantsCustomerExperience, { name: 'faq_merchants_customer_experience', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/customer-experience',
      },
      'en-IE': {
          path: '/faq/merchants/customer-experience',
      },
      'fr-FR': {
          path: '/faq/commercant/consommateur',
      },
      'fr-BE': {
          path: '/faq/commercant/consommateur',
      },
    },
  ],
  [FaqMerchantsInternationalPayments, { name: 'faq_merchants_international_payments', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/international-payments',
      },
      'en-IE': {
          path: '/faq/merchants/international-payments',
      },
      'fr-FR': {
          path: '/faq/commercant/international',
      },
      'fr-BE': {
          path: '/faq/commercant/international',
      },
    },
  ],
  [FaqMerchantsDeveloperApi, { name: 'faq_merchants_developer_api', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/developer-api',
      },
      'en-IE': {
          path: '/faq/merchants/developer-api',
      },
      'fr-FR': {
          path: '/faq/commercant/api-developpeurs',
      },
      'fr-BE': {
          path: '/faq/commercant/api-developpeurs',
      },
    },
  ],
  [FaqMerchantsPartners, { name: 'faq_merchants_partners', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/partners',
      },
      'en-IE': {
          path: '/faq/merchants/partners',
      },
      'fr-FR': {
          path: '/faq/commercant/partenaires',
      },
      'fr-BE': {
          path: '/faq/commercant/partenaires',
      },
    },
  ],
  [FaqMerchantsReferrals, { name: 'faq_merchants_referrals', category: 'faq.merchants' }, {
      'en-GB': {
          path: '/faq/merchants/referrals',
      },
      'en-IE': {
          path: '/faq/merchants/referrals',
      },
    },
  ],
  [Stories, { name: 'stories' }, {
      'en-GB': {
        path: '/stories',
      },
      'en-IE': {
        path: '/stories',
      },
    },
  ],
  [StoriesHasBeanCoffee, { name: 'stories_has_bean_coffee', category: 'stories' }, {
      'en-GB': {
        path: '/stories/has-bean-coffee',
      },
      'en-IE': {
        path: '/stories/has-bean-coffee',
      },
    },
  ],
  [StoriesBlueskyBusiness, { name: 'stories_bluesky_business', category: 'stories' }, {
      'en-GB': {
        path: '/stories/bluesky-business',
      },
      'en-IE': {
        path: '/stories/bluesky-business',
      },
    },
  ],
  [StoriesCrowdCube, { name: 'stories_crowdcube', category: 'stories' }, {
      'en-GB': {
        path: '/stories/crowdcube',
      },
      'en-IE': {
        path: '/stories/crowdcube',
      },
    },
  ],
  [StoriesMomentum, { name: 'stories_momentum', category: 'stories' }, {
      'en-GB': {
        path: '/stories/momentum',
      },
      'en-IE': {
        path: '/stories/momentum',
      },
    },
  ],
  [StoriesRockChoir, { name: 'stories_rock_choir', category: 'stories' }, {
      'en-GB': {
        path: '/stories/rock-choir',
      },
      'en-IE': {
        path: '/stories/rock-choir',
      },
    },
  ],
  [StoriesSpencerHockey, { name: 'stories_spencer_hockey', category: 'stories' }, {
      'en-GB': {
        path: '/stories/spencer-hockey',
      },
      'en-IE': {
        path: '/stories/spencer-hockey',
      },
    },
  ],
  [StoriesFoundationOfHearts, { name: 'stories_foundation_of_hearts', category: 'stories' }, {
      'en-GB': {
        path: '/stories/foundation-of-hearts',
      },
      'en-IE': {
        path: '/stories/foundation-of-hearts',
      },
    },
  ],
  [StoriesGreaterAnglia, { name: 'stories_greater_anglia', category: 'stories' }, {
      'en-GB': {
        path: '/stories/greater-anglia',
      },
      'en-IE': {
        path: '/stories/greater-anglia',
      },
    },
  ],
]);
