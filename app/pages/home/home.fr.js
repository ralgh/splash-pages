import React from 'react';
import Translation from '../../components/translation/translation';
import ChecklistIcon from '../../icons/svg/checklist';
import RealtimeIcon from '../../icons/svg/realtime';
import TickSquareIcon from '../../icons/svg/tick-square';
import Tabs from '../../components/tabs/tabs';
import Link from '../../components/link/link';

export default class HomeFr extends React.Component {
  displayName = 'HomeFr'

  render() {
    return (
      <Translation locales={['fr-FR', 'fr-BE']}>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                La meilleure technologie de prélèvement
              </h2>
              <p className='u-text-s u-color-p u-margin-Txs'>
                Accédez au prélèvement SEPA afin d'améliorer votre rétention clients et de bénéficier
                de tarifs très compétitif, sans les complications associées aux opérateurs historiques.
              </p>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
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
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Parfait pour l'Europe
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Acceptez les paiements SEPA via compte bancaire dans 22 pays
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-l u-text-heading u-color-heading u-text-light'>
              Expertise de paiements
            </h2>
            <p className='u-text-s u-color-p u-margin-Txs u-size-1of2 u-center'>
              Nous vous conseillons sur toutes les étapes d'implementation
              de vos paiements par prélèvement SEPA et offrons un support de première classe en continu.
            </p>
            <div className='u-size-1of2 u-center'>
              <hr className='u-margin-Vxl horizontal-rule u-size-3of4 u-center' />
              <p className='u-color-heading u-margin-Bxxs'>
                <strong>Vous voulez en apprendre plus sur le prélèvement SEPA ?</strong>
              </p>
              <a href='https://gocardless.com/fr/guides/sepa'
                className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Lisez notre guide
              </a>
            </div>
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
            <a href={'http://www.challenges.fr/finance-et-marche/20150413.CHA4873/'+
              'ces-start-up-qui-font-valser-les-modeles-de-la-city-de-londres.html'}
              target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Lxs u-padding-Bm'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' aria-label='Challenges' className='challenges-logo stories-item__logo--challenges' />
                <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                  'GoCardless a trouvé son marché: 9.000 clients ont acheté cette technologie qui simplifie leur gestion administrative
                  et améliore le paiement de leurs factures'
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
            <a href='http://www.journaldunet.com/web-tech/start-up/fintech-gocardless-lancement-france.shtml'
              target='_blank' className='grid__cell u-size-1of3 u-link-clean'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' aria-label='Journal Du Net' className='journaldunet-logo stories-item__logo--journaldunet' />
                <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                  'Plus de logiciel coûteux à installer au sein de l'entreprise ou de
                  fastidieux processus d'agréments bancaires, et plus besoin d'équipe dédiée à la gestion des prélèvements'
                </p>
              </div>
              <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
            </a>
            <a href='http://www.agefi.fr/articles/gocardless-arrive-en-france-dans-le-prelevement-automatique-1354433.html'
              target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Lxs'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' aria-label='L\Agefi' className='lagefi-logo stories-item__logo--lagefi' />
                <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
                  'Offre adaptée aux jeunes entreprises commercialisant auprès de leurs clients des services par abonnement,
                   que la mise en place de prélèvements facilite'
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
          <div className='u-padding-Vxl u-margin-Tl'>
            <Tabs triggers={[
              (<a href='#' className={'grid__cell u-padding-Hl stories-testimonials__link--guardian'+
                 ' u-size-1of3 stories-testimonials__link u-link-clean'}>
                <img src='/images/stories/guardian-logo@2x.jpg' />
              </a>),
              (<a href='#'
                 className={'grid__cell u-padding-Hl stories-testimonials__link--funding-circle'+
                 ' u-size-1of3 stories-testimonials__link u-link-clean'}>
                <img className='stories-testimonials__link-image--funding-circle' src='/images/stories/funding-circle-logo@2x.jpg' />
              </a>),
              (<a href='#'
                 className={'grid__cell u-padding-Hl stories-testimonials__link--lendable'+
                 ' u-size-1of3 stories-testimonials__link u-link-clean'}>
                <img className='stories-testimonials__link-image--lendable' src='/images/stories/lendable-logo@2x.jpg' />
              </a>),
            ]}>
              <div className='stories-testimonials__quote stories-testimonials__quote--guardian u-relative u-margin-Txxl u-padding-Al'>
                <p className='u-text-heading u-color-heading u-text-light u-text-m'>
                  The Guardian recherche toujours à offrir la meilleure expérience client
                  et a choisi GoCardless pour simplifier l'expérience du paiement récurrent.'
                </p>
              </div>
              <div className={'stories-testimonials__quote stories-testimonials__quote--funding-circle'+
                ' u-relative u-margin-Txxl u-padding-Al'}>
                <p className='u-text-heading u-color-heading u-text-light u-text-m'>
                  Nous avons migré sur GoCardless pour que nos prélèvements
                  puissent être gérés par une seule personne au lieu de tout un département.
                  C'est un plaisir de travailler avec une société de technologie financière qui s'engage également à aider les entreprises.'
                </p>
              </div>
              <div className='stories-testimonials__quote stories-testimonials__quote--lendable u-relative u-margin-Txxl u-padding-Al'>
                <p className='u-text-heading u-color-heading u-text-light u-text-m'>
                  GoCardless est une des meilleures entreprises de paiements avec laquelle j'ai travaillé.
                  Leur API est simple à intégrer et nous permet d'utiliser le prélèvement de façon entièrement automatisée.
                  Je les recommende fortement à toutes les entreprises qui ont pour priorités une bonne expérience client et
                  l'utilisation de la meilleure technologie disponible pour leurs prélèvements en Europe.
                </p>
              </div>
            </Tabs>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <Link to='pro' id='track-cta-sign-up' className='btn'>En apprendre plus</Link>
          </div>
        </div>
      </Translation>
    );
  }
}
