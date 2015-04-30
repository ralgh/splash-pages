import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutFr extends React.Component {
  displayName = 'AboutFr'

  render() {
    return (
      <Translation locales='fr-FR'>
        <h1>A propos</h1>
        <p>
          GoCardless est un des leaders européens du prélèvement bancaire.
          Nous collectons plus d'un demi-milliard d'Euros chaque année pour plus de 30.000 entreprises et
          organisations dont le Guardian, Omni Capital, Funding Circle et Pieminister, avec une croissance annuelle de 600%.
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
