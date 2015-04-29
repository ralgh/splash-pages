import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutEn extends React.Component {
  displayName = 'AboutEn'

  render() {
    return (
      <Translation locales='en-gb'>
        <div className='sticky-nav'>
          <div ng-gc-sticky-nav='' className='sticky-nav__inner u-background-light-gray u-text-heading u-text-xxs u-text-light u-text-no-smoothing'>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#about-us' du-scrollspy='' ng-gc-smooth-scroll='' className='sticky-nav__link'>
                    About us
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#team' du-scrollspy='' ng-gc-smooth-scroll='' className='sticky-nav__link'>
                    Team
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#jobs' du-scrollspy='' ng-gc-smooth-scroll='' className='sticky-nav__link'>
                    Jobs
                  </a>
                </li>
              </ul>
              <a href='https://gocardless.com/blog' className='sticky-nav__cta btn btn--small btn--hollow u-pull-end u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'>
                Visit our Blog
              </a>
            </div>
            <hr className='u-margin-An' />
          </div>
        </div>
        <div className='section-scroll-target' id='about-us'>
          <div className='site-container u-padding-Vxxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
              About GoCardless
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-2of3'>
                <p className='para'>
                  GoCardless makes it easy to accept recurring payments online. We unify the world’s Direct Debit networks, simplify them, and open up access to everyone. By doing so, we are creating an entirely new type of payment network.
                </p>
                <p className='para'>
                  Founded in 2011, we have quickly grown into one of Europe’s leading Direct Debit providers, processing over half a billion pounds a year for over ten thousand businesses.
                </p>
                <p className='para'>
                  We work with a huge range of organisations: small gyms and scout groups use us to reduce admin, fast growing companies like Funding Circle use us to power their growth, and established institutions like the Financial Times use us to dramatically reduce failure rates.
                </p>
                <p className='para'>
                  We are a small London based team, and we're backed by some of the world’s leading investors including Balderton Capital, Accel Partners, and Y&nbsp;Combinator.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <div className='u-margin-Txxl'>
                  <img src='/images/press/publications-stacked.jpg' />
                  <p className='u-text-s u-color-p u-margin-Txxl'>
                    For any press enquiries, please contact <a href='mailto:press@gocardless.com'>the GoCardless PR team</a>, or view our comprehensive <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>press pack</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-scroll-target' id='team'>
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-padding-Txl'>
              <div className='grid__cell u-size-1of3'>
                <h2 className='u-text-heading-light u-text-m u-color-meta u-margin-Bm'>
                  We are a small team building a new payment network for the internet.
                </h2>
                <p className='u-text-heading-light u-text-xs u-color-meta'>
                  Interested in joining the team?<br />Take a look at our <a href='#jobs' ng-gc-smooth-scroll='' className='u-link-clean ku-link-color-meta u-text-underline'>available positions</a>
                </p>
              </div>
              <div className='grid__cell u-size-2of3'>
                  <span className='u-text-heavy u-color-heading'>GoCardless is: </span><span className='u-color-p'>
                  Octave Auger,
                  Grey Baker,
                  Baris Balic,
                  Angus Bayley,
                  James Berry,
                  Lewis Blackwood,
                  George Britton,
                  Jenna Brown,
                  Maria Campbell,
                  Michael Christofides,
                  Duncan Coleman,
                  James Cunningham,
                  Amaury de Closset,
                  Steve Domin,
                  Jamie English,
                  Jack Franklin,
                  Jessie Giladi,
                  Pete Hamilton,
                  Phil Harrison,
                  Natalie Hockham,
                  James Jackson,
                  Sam Jewell,
                  Alan Kennedy,
                  Georg Knoerr,
                  Norberto Lopes,
                  Daniel Lyons,
                  Harry Marr,
                  Erez Mathan,
                  Ben Miller,
                  Max Murdoch,
                  Iain Nash,
                  Jacob Pargin,
                  Tom Petty,
                  Nabeel Qureshi,
                  Matt Robinson,
                  Tim Rogers,
                  Isaac Seymour,
                  James Shedden,
                  Ben Sims,
                  Chris Sinjakli,
                  Dave Smith,
                  Alina Solovjova,
                  Jess Summerfield,
                  Hiroki Takeuchi,
                  Yoshio Takeuchi,
                  Helen Taylor,
                  Corinne Thompson,
                  Matt Thomson,
                  James Walker
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
