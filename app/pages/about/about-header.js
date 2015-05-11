import React from 'react';
import Message from '../../components/message/message';
import Link from '../../components/link/link';

export default class AboutHeader extends React.Component {
  displayName = 'AboutHeader'

  render() {
    return (
      <div>
        <div className='page-hero page-hero--about page-hero--medium u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  <Message message='about.header1' />
                  <br />
                  <Message message='about.header2' />
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='sticky-nav'>
          <div className='sticky-nav__inner u-background-light-gray u-text-heading u-text-xxs u-text-light u-text-no-smoothing'>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <Link to='about' className='sticky-nav__link'>
                    <Message message='about.nav_title' />
                  </Link>
                </li>
                <li className='sticky-nav__item'>
                  <Link to='team' className='sticky-nav__link'>
                    <Message message='team.nav_title' />
                  </Link>
                </li>
                <li className='sticky-nav__item'>
                  <Link to='jobs' className='sticky-nav__link'>
                    <Message message='jobs.nav_title' />
                  </Link>
                </li>
              </ul>
              <a href='https://gocardless.com/blog'
                className={
                  'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                  'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                }>
                <Message message='blog.cta' />
              </a>
            </div>
            <hr className='u-margin-An' />
          </div>
        </div>
      </div>
    );
  }
}
