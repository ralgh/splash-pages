import React from 'react';

class SvgInjector extends React.Component {
  displayName = 'SVGInjector'

  static propTypes = {
    src: React.PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      System.import('svg-injector').then((svgInjectorLib) => {
        svgInjectorLib([React.findDOMNode(this)], this.props);
      });
    }
  }

  render() {
    return (
      <div {...this.props} />
    );
  }
}

export default SvgInjector;
