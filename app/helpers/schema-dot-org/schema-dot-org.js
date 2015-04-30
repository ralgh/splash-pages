// Documentation from Google:
//   https://developers.google.com/structured-data/customize/overview
// Google's tool for validating the output:
//   https://developers.google.com/structured-data/testing-tool/
// Original Schema:
//   http://schema.org/Organization
export function buildSchemaDotOrgForOrganization(messages, availableLocales, config) {
  var organization = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    url: 'https://gocardless.com/',
    logo: config.logoUrlSquare,
    sameAs: [],
    contactPoint: [],
  };

  // Add social network links to sameAs
  Object.keys(config.socialLinks).forEach(function(network) {
    organization.sameAs.push(config.socialLinks[network]);
  });

  // Add contact details for office in each country
  // See https://support.google.com/webmasters/answer/4620709?hl=en for supported contactType
  availableLocales.map(function(locale) {
    return [locale.slice(3, 5), locale];
  }).forEach(function(countryCodeLocale) {
    var countryCode = countryCodeLocale[0];
    var locale = countryCodeLocale[1];
    var contactTypes = messages[locale].contact_types;
    contactTypes.forEach(function(contactType) {
      organization.contactPoint.push(
        {
          '@type': 'ContactPoint',
          telephone: messages[locale].phone_full,
          email: messages[locale].email,
          contactType: contactType,
          areaServed: countryCode,
        }
      );
    });
  });

  return organization;
}
