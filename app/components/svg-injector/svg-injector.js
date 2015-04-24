import React from 'react';

class SvgInjector extends React.Component {
  displayName = 'SVGInjector'

  static propTypes = {
    src: React.PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      System.import('svg-injector').then((SVGInjectorLib) => {
        SVGInjectorLib([React.findDOMNode(this)], this.props);
      });
    }
  }

  render() {
    var imgProps = this.props;
    return (
      <div {...this.props} />
    );
  }
}

export default SvgInjector;
