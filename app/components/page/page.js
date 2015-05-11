import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import getSiteTitle from '../get-site-title/get-site-title';

class Page extends React.Component {
  displayName = 'Page'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    isInverted: React.PropTypes.bool,
  }

  static defaultProps = {
    isInverted: true,
  }

  static contextTypes = {
    routeName: React.PropTypes.string.isRequired,
    messages: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    document.title = getSiteTitle(this.context);
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
