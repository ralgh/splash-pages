import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutDe extends React.Component {
  displayName = 'AboutDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            Über GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                GoCardless erlaubt es auf einfachste Art wiederkehrende Zahlungen online zu akzeptieren.
                Wir bringen Lastschriftverfahren aus der ganzen Welt zusammen, vereinfachen sie, und schaffen Zugang.
                Wir kreieren so ein innovatives und modernes Zahlungsnetzwerk.
              </p>
              <p className='para'>
                Seit 2011, unserem Gründungsjahr, sind wir schnell zu einem der führenden Lastschriftanbieter gewachsen,
                und bearbeiten jährlich mehr als eine halbe Milliarde Euro für über zehntausend Organisationen.
              </p>
              <p className='para'>
                Wir arbeiten mit einer breitgefächerten Gruppe von Unternehmen: kleine Fitnessstudios und Pfadfindervereine nutzen uns, um ihren Verwaltungsaufwand zu minimieren, schnell wachsende Unternehmen 
wie Funding Circle nutzen unser Produkt, um ihre schnelle Expansion zu unterstützen, und etablierte Firmen wie die Financial Times zählen auf GoCardless, um ihre Ausfallrate drastisch zu senken.
              </p>
              <p className='para'>
                Wir sind ein junges Team in London, und werden unterstützt von Investoren, die zu den Besten der Welt gehören, u.a. Balderton Capital, Accel Partners, und Y Combinator.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
                  Für Presseanfragen kontaktieren Sie bitte <a href='mailto:press@gocardless.com'>das GoCardless PR Team</a>,
                  oder werfen Sie einen Blick auf unser umfangreiches <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>
                    Presse Paket
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
