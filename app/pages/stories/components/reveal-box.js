import React from 'react';

export default class RevealBox extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    linkClass: React.PropTypes.string,
  };

  state = {
    atTab: null,
  };

  tabClick(key) {
    console.log(key);
    this.setState({
      atTab: key
    });
  }

  componentDidMount() {
    this.setState({
      atTab: this.props.children[0].key,
    })
  }

  shouldShowElement(key) {
    return (key === this.state.atTab);
  }

  render() {
    var self = this;
    var tabs = this.props.children.map(function(child) {
      var tab = child.props.tab;
      return React.createElement('div', {className: 'grid__cell u-padding-Hl stories-testimonials__link--guardian u-size-1of3 stories-testimonials__link u-link-clean', onClick: self.tabClick.bind(self, child.key)}, React.cloneElement(tab));
    });
    var children = this.props.children.map(function(child) {
      return React.cloneElement(child, {style: {display: self.shouldShowElement(child.key) ? 'block' : 'none'}});
    })

    return (
      <div className="tabbox">
        <div className="stories-testimonials__grid grid u-text-center">
          {tabs}
        </div>
        <div className="tabcontent">
          {children}
        </div>
      </div>
    );
  }
}
