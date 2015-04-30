import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutEn extends React.Component {
  displayName = 'AboutEn'

  render() {
    return (
      <Translation locales='en-GB'>
        <h1>About</h1>
        <p>
          GoCardless is the UK’s leading direct debit provider.
          GoCardless is the UK’s leading Direct Debit provider.
          We collect more than half a billion pounds each year for over 30,000 businesses and organisations
          including Greater Anglia Trains, Crowdcube and Funding Circle, with year-on-year growth of 600%.
        </p>
        <p>
          We started in 2011 with a goal of providing a simple way for anyone to collect Direct Debit online - instantly, and affordably.
          Until then Direct Debit was seen as a complicated, expensive affair only accessible to large corporates.
          We wanted to change that — and we have.
          Any individual or organisation in the UK can now easily and instantly access the incredibly low fees
          and failure rates of Direct Debit using our modern, easy-to-use API.
        </p>
      </Translation>
    );
  }
}
