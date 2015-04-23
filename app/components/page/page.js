import React from 'react';
import {Link} from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
