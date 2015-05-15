import React from 'react';
import Translation from '../../components/translation/translation';
import TickSquareIcon from '../../icons/svg/tick-square';
import ChecklistIcon from '../../icons/svg/checklist';
import RealtimeIcon from '../../icons/svg/realtime';
import IntegrationsIcon from '../../icons/svg/integrations';
import ShopIcon from '../../icons/svg/shop';
import ProIcon from '../../icons/svg/pro'
import Tabs from '../../components/tabs/tabs';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Modal from '../../components/modal/modal';

export default class HomeFr extends React.Component {
  displayName = 'HomeFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                La meilleure technologie de prélèvement
              </h2>
              <p className='u-text-s u-color-p u-margin-Txs'>
                GoCardless vous permet de bénéficier de la fiabilité et des tarifs très compétitif 
                du prélèvement SEPA, sans les complications associées aux opérateurs historiques.
              </p>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Prenez des paiements en 24h
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Sans engagement, sans démarche bancaire et sans installation requise
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <ChecklistIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <ChecklistIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automatisé de A à Z
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Gagnez du temps et ne manquez plus jamais un paiement
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <RealtimeIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <RealtimeIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Fait pour le récurrent
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Oubliez les cartes qui expirent et les virements qui tardent
                </p>
              </div>
            </div>
            <p className='u-color-p u-margin-Txxl u-padding-Tm'>
                Vous voulez en apprendre plus sur le prélèvement SEPA ?
            </p>
            <Href to='guides.path'
                className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Lisez notre guide
            </Href>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <h2 className='u-text-l u-text-heading u-colo-heading u-text-light u-margin-Tl'>
            Que désirez-vous faire?
          </h2>
          <div className='product-grid grid u-margin-Vxxl'>
            <Link to='features' id='track-cta-features' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='product-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <ShopIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <ShopIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Prendre des paiements<br />en toute simplicité
                </p>
              </div>
              <div className='product-grid__btn btn u-size-full'>Découvrez GoCardless</div>
            </Link>
            <Link to='pro' id='track-cta-pro' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='product-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ProIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automatiser en profondeur<br />vos paiements
                </p>
              </div>
              <div className='product-grid__btn btn u-size-full'>Découvrez GoCardless Pro</div>
            </Link>
            <Link to='partners' id='track-cta-partners' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='product-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <IntegrationsIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <IntegrationsIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Aider vos clients<br />à prendre des paiements
                </p>
              </div>
              <div className='product-grid__btn btn u-size-full'>Découvrez nos partenaires</div>
            </Link>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <h2 className='u-text-l u-text-heading u-color-heading u-text-light'>
            Ils parlent de GoCardless
          </h2>
          <div className='grid u-padding-Vxl'>
            <a href={'http://www.lefigaro.fr/societes/2015/04/12/20005-20150412ARTFIG00171'+
              '-gocardless-pret-a-bousculer-les-banques-francaises.php'}
              target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' aria-label='Le Figaro' className='lefigaro-logo stories-item__logo--lefigaro' />
                <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                  'Avec le prélèvement, GoCardless contourne les aléas liés au paiement par carte bancaire,
                  notamment le risque de perdre des clients à l'expiration de leur carte'
                </p>
              </div>
              <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
            </a>
            <a href={'http://www.lesechos.fr/finance-marches/banque-assurances/0213743712'+
              '-le-prelevement-bancaire-seduit-de-nouveaux-acteurs-1110875.php'}
              target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Bm'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' aria-label='Les Echos' className='lesechos-logo stories-item__logo--lesechos' />
                <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                  'Mettre en place un prélèvement était jusqu’ici complexe car cela imposait des processus
                  d’agrément bancaire, beaucoup de paperasse mais aussi ensuite des semaines de configuration'
                </p>
              </div>
              <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
            </a>
            <a href={'http://www.latribune.fr/entreprises-finance/banques-finance/'+
              'gocardless-ou-quand-la-fintech-londonienne-debarque-en-france-469023.html'}
              target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' aria-label='La Tribune' className='latribune-logo stories-item__logo--latribune' />
                <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                  'Les grandes entreprises n'ont pas plus envie que les startups de devenir des spécialistes des paiements,
                   elles veulent juste une solution de paiement qui fonctionne'
                </p>
              </div>
              <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
            </a>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Entre de bonnes mains
              </h2>
              <p className='u-text-s u-color-p u-margin-Txs'>
                Nous collectons des millions pour plus de 10.000 clients chaque jour,
                en conformité avec les règles SEPA et sous la supervision de la FCA.
                Nous aidons les start-ups comme les plus grandes entreprises.
              </p>
            </div>
          </div> 
          <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                <img src='/images/fr/logos/pro-logos-fr@2x.jpg' />
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Un prix simple, transparent pour tous
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Des tarifs concurrentiels adaptés aux grandes entreprises comme aux start-ups
              </p>
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                En apprendre plus sur notre prix
              </Link>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
