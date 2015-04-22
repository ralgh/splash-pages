import React from 'react';
import Page from '../../components/page/page';

class AboutEn extends React.Component {
  render() {
    return (
      <Translation locales="en-gb">
        <h1>About</h1>
        <p>
          GoCardless is the UK’s leading Direct Debit provider.
          We collect more than half a billion pounds each year for over 30,000 businesses and organisations including Greater Anglia Trains, Crowdcube and Funding Circle, with year-on-year growth of 600%.
        </p>
        <p>
          We started in 2011 with a goal of providing a simple way for anyone to collect Direct Debit online — instantly, and affordably.
          Until then Direct Debit was seen as a complicated, expensive affair only accessible to large corporates.
          We wanted to change that — and we have.
          Any individual or organisation in the UK can now easily and instantly access the incredibly low fees and failure rates of Direct Debit using our modern, easy-to-use API.
        </p>
      </Translation>
    );
  }
}

class AboutFr extends React.Component {
  render() {
    return (
      <Translation locales="fr-fr">
        <h1>A propos</h1>
        <p>
          GoCardless est un des leaders européens du prélèvement bancaire.
          Nous collectons plus d'un demi-milliard d'Euros chaque année pour plus de 30.000 entreprises et organisations dont le Guardian, Omni Capital, Funding Circle et Pieminister, avec une croissance annuelle de 600%.
        </p>
        <p>
          Nous nous sommes lancés en 2011 avec un seul objectif :
          rendre les prélèvements bancaires simples et accessibles à tous,
           instantanément et à bas coût. Les prélèvements bancaires étaient
           jusque-là réservés aux plus grandes entreprises et requéraient
           beaucoup d'efforts à gérer. Nous voulions changer cette situation
            et simplifier le prélèvement. Toute entreprise en France et en
            Europe peut désormais accéder au prélèvement bancaire grâce à notre
            API moderne et facile d'utilisation, et bénéficier d'un mode de paiement
             économique et avec un taux d'échec extrêmement bas.
        </p>
      </Translation>
    );
  }
}

export default class About extends React.Component {
  render() {
    return (
      <Page>
        <AboutFr />
        <AboutEn />
      </Page>
    );
  }
}
