import React from 'react';

export default class RevealBox extends React.Component {
  displayName = 'RevealBox'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    linkClass: React.PropTypes.string,
    wrapperClass: React.PropTypes.string,
    tabClass: React.PropTypes.string,
  };

  state = {
    atTab: null,
  };

  tabClick(key) {
    this.setState({
      atTab: key,
    });
  }

  componentDidMount() {
    this.setState({
      atTab: this.props.children[0].key,
    });
  }

  shouldShowElement(key) {
    return (key === this.state.atTab);
  }

  render() {
    const tabs = this.props.children.map((child) => {
      return React.createElement('div', {
        className: `${this.props.wrapperClass} ${this.shouldShowElement(child.key) ? 'is-active' : 'inactive'}`,
        onClick: this.tabClick.bind(this, child.key),
        key: child.key,
      },
        React.cloneElement(child.props.tab,
          {className: child.props.tab.className}));
    });
    const children = this.props.children.map((child) => {
      return React.cloneElement(child,
        {style: {display: this.shouldShowElement(child.key) ? 'block' : 'none'}});
    });

    return (
      <div>
        <div className={this.props.tabClass || ''}>
          {tabs}
        </div>
        {children}
      </div>);
  }
}
