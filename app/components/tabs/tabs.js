import findIndex from 'lodash/array/findIndex';
import toArray from 'lodash/lang/toArray';
import React from 'react';
import classNames from 'classnames';

class Tabs extends React.Component {
  displayName = 'Tabs'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    triggers: React.PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const index = findIndex(toArray(event.currentTarget.children), function(node) {
      return event.target === node || node.contains(event.target);
    });

    if (index !== -1) {
      this.setState({ activeIndex: index });
    }
  }

  render() {
    const children = React.Children.map(this.props.children, function(child, i) {
      var isActive = i === this.state.activeIndex;
      return React.cloneElement(child, {
        className: classNames(child.props.className, {
          'u-is-hidden': !isActive,
          'u-is-visible': isActive,
          'is-active': isActive,
        }),
      });
    }, this);

    const triggers = this.props.triggers.map(function(trigger, i) {
      var isActive = i === this.state.activeIndex;
      return React.cloneElement(trigger, {
        key: i,
        className: classNames(trigger.props.className, {
          'is-active': isActive,
        }),
      });
    }, this);

    return (
      <div>
        <span onClick={this.handleClick}>
          {triggers}
        </span>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default Tabs;
