import React from 'react';
import {Link} from 'react-router';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="About">About</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}
