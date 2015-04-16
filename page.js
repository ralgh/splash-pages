import React from 'react';
import {Link} from 'react-router';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
}
