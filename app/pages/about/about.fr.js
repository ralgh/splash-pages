import React from 'react';
import Translation from '../../components/translation/translation';
import { team } from '../../constants/team';

export default class AboutFr extends React.Component {
  displayName = 'AboutFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <div className='sticky-nav'>
          <div className='sticky-nav__inner u-background-light-gray u-text-heading u-text-xxs u-text-light u-text-no-smoothing'>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#a-propos' du-scrollspy='' ng-gc-smooth-scroll='' className='sticky-nav__link'>
                    À propos
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#equipe' du-scrollspy='' ng-gc-smooth-scroll='' className='sticky-nav__link'>
                    Notre équipe
                  </a>
                </li>
              </ul>
            </div>
            <hr className='u-margin-An' />
          </div>
        </div>
        <div className='section-scroll-target' id='a-propos'>
          <div className='site-container u-padding-Vxxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
              A propos de GoCardless
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-2of3'>
                <p className='u-text-s u-color-p u-margin-Txxl u-size-5of6'>
                  GoCardless est un des leaders européens du prélèvement bancaire.
                  Nous collectons plus d'un demi-milliard d'Euros chaque année pour plus de 30.000 entreprises et organisations dont le
                  Guardian, Omni Capital, Funding Circle et Pieminister, avec une croissance annuelle de 600%.<br /><br />
                  Nous nous sommes lancés en 2011 avec un seul objectif : rendre les prélèvements bancaires simples et accessibles à tous,
                  instantanément et à bas coût.
                  Les prélèvements bancaires étaient jusque-là réservés aux plus grandes entreprises et
                  requéraient beaucoup d'efforts à gérer.
                  Nous voulions changer cette situation et simplifier le prélèvement.
                  Toute entreprise en France et en Europe peut désormais accéder au prélèvement bancaire grâce à
                  notre API moderne et facile d'utilisation, et bénéficier d'un
                  mode de paiement économique et avec un taux d'échec extrêmement bas.
                  <br /><br />
                  <span className='u-text-heavy u-color-heading'>Digne de confiance</span><br /><br />
                  GoCardless est un Etablissement de Paiement Agréé, régulé par l’autorité britannique FCA (Financial Conduct Authority)
                  et habilité à collecter des paiements à travers l’Union Européenne.
                  Nous sommes financés par certains des plus importants investisseurs au monde
                  dont Balderton Capital, Accel Partners, Passion Capital et Y-Combinator.
                  Plus de 30.000 entreprises et organisations de toutes tailles utilisent GoCardless pour collecter des
                  millions d'Euros tous les jours. Ils aiment ce qu'ils font et nous aimons leur rendre la vie facile.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <div className='u-margin-Txxl'>
                  <img src='/images/press/publications-stacked.jpg' />
                  <p className='u-text-s u-color-p u-margin-Txxl'>
                    GoCardless est apparu à la télévision, sur des blogs
                    et site dans le monde entier.<br /><br />
                    Pour tout contact presse, merci de contacter&nbsp;
                    <a href='mailto:press@gocardless.com'>notre équipe de relations presse</a>,
                    ou téléchargez notre&nbsp;
                    <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>dossier de presse</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='equipe'>
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-padding-Txl'>
              <div className='grid__cell u-size-1of3'>
                <h2 className='u-text-heading-light u-text-m u-color-meta u-margin-Bm'>
                  Nous sommes une petite équipe formée d'individus talentueux travaillant ensemble pour construire l'avenir des paiements.
                </h2>
                <p className='u-text-heading-light u-text-xs u-color-meta'>
                  Interested in joining the team?<br />Take a look at our&nbsp;
                  <a href='#jobs' ng-gc-smooth-scroll='' className='u-link-clean ku-link-color-meta u-text-underline'>
                    available positions
                  </a>
                </p>
              </div>
              <div className='grid__cell u-size-2of3'>
                  <span className='u-text-heavy u-color-heading'>GoCardless est: </span><span className='u-color-p'>
                  {team.join(', ')}
                </span>
              </div>
            </div>
          </div>
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-padding-Bxl'>
              <div className='grid__cell u-size-1of3'>
                <img src='/images/office/office-picnic-table.jpg' />
              </div>
              <div className='grid__cell u-size-2of3'>
                <img src='/images/office/office-support-booths.jpg' />
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
        </div>
      </Translation>
    );
  }
}
