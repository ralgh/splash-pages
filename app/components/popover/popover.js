import React from 'react';
import classNames from 'classnames';

export default class Popover extends React.Component {
  displayName = 'Popover'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    toggle: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
  }

  static keyCodes = {
    ESC: 27
  }

  constructor(props) {
    super(props);
    this.state = { isActive: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleKeyDown(event) {
    if (event.which === Popover.keyCodes.ESC) {
      this.hide();
    }
  }

  handleDocumentClick(event) {
    const node = this.findContentNode();
    if (node && !node.contains(event.target)) {
      this.hide();
    }
  }

  show() {
    this.setState({ isActive: true });

    // Wait until the element is focusable and prevent the opening click
    // closing when it bubbles to the window
    setTimeout(() => {
      window.addEventListener('click', this.handleDocumentClick);
      this.findContentNode().focus();
    }, 0);
  }

  hide() {
    this.setState({ isActive: false });
    window.removeEventListener('click', this.handleDocumentClick);
  }

  findContentNode() {
    return React.findDOMNode(this.refs.popoverContent);
  }

  render() {
    const classes = {
      popover: true,
      'u-is-visible': this.state.isActive,
    };

    const style = {
      outline: 'none',
    };

    return (
      <span>
        <span onClick={this.handleClick}>
          {this.props.toggle}
        </span>
        <div {...this.props} className={classNames(this.props.className, classes)}
          onKeyDown={this.handleKeyDown}
          style={style}
          tabIndex='-1'
          ref='popoverContent'>
          {this.props.children}
        </div>
      </span>
    );
  }
}
