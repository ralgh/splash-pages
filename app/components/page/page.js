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
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
