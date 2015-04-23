import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

class Page extends React.Component {
  displayName = 'Page'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header />
          <div className="site-container u-text-center u-padding-Vxxl">
            {this.props.children}
          </div>
        <Footer />
      </div>
    );
  }
}

export default Page;
