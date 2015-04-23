import React from 'react';
import IntlLink from '../links/intl-link';
import LinkExists from '../links/link-exists';

class Header extends React.Component {

  render() {
    return (
      <div className='header'>
        <h2>GoCardless</h2>
        <ul className='nav'>
          <li><LinkExists to='Home'><IntlLink to='Home' message='Home.link'>Home</IntlLink></LinkExists></li>
          <li><LinkExists to='About'><IntlLink to='About' message='About.link'>About</IntlLink></LinkExists></li>
        </ul>
      </div>

    );
  }
}

export default Header;
