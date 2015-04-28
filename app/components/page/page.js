import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

class Page extends React.Component {
  displayName = 'Page'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    isInverted: React.PropTypes.bool,
  }

  static defaultProps = {
    isInverted: true,
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header isInverted={this.props.isInverted} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
