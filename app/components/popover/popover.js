import React from 'react';
import classNames from 'classnames';

class Popover extends React.Component {
  displayName = 'Popover'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    toggle: React.PropTypes.node.isRequired,
  }

  render() {
    const classes = {
      'popover': true,
    };

    return (
      <span>
        <div {...this.props} className={classNames(this.props.className, classes)} >
          {this.props.toggle}
        </div>
        {this.props.children}
      </span>
    );
  }
}

export default Popover;
