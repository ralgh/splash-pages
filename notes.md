locale format: language-region

gocardless.com/pricing (> locale en-gb)

gocardless.com/en-gb/pricing 301 REDIRECT gocardless.com/pricing

gocardless.com/fr/pricing (> locale en-fr)

gocardless.com/en-fr/pricing 301 REDIRECT gocardless.com/fr/pricing

gocardless.com/fr-fr/pricing 301 REDIRECT gocardless.com/fr-fr/tarifs (> locale fr-fr)

1. we are selling to regions
2. gocardless.com is all our marketing site
3. all pages should promote each other
4. you should be able to link to a region and keep surfing around in that region
5. how does this impact link equity?

gocardless.com/fr-fr/tarifs

1. set region to fr
2. set language to fr
3. reverse lookup tarifs > about
4. is there a `about` in french?
    5.1 render about page with french region set
    5.2 render 404 not found

Router only cares about the page routes.

var routes = {
  en: {
    about: '/about',
    pro: '/pro',
  },
  fr: {
    about: '/a-propos',
    pro: '/pro',
  }
}

1. Easy to find all variants of a page
2. Given availableRegions and availableLanguages you can build a sitemap
3. Try to render each page configuration with some automated testing

The route definition will change for each language.

Always support region setting.

var availableRegions = ['gb', 'fr'];
var availableLanguages = ['en', 'fr'];

<HasRoute name="about">
  <Route path={localisePath('about')}></Route>
</HasRoute>

<Page name="about">
  <Route path="/about" lang="en"></Route>
  <Route path="/a-propos" lang="fr"></Route>
</Page>
<Page name="pro">
  <Route path="/pro" lang="en,fr"></Route>
</Page>
