import React from 'react';
import classNames from 'classnames';
import CloseModalIcon from '../../icons/svg/close-modal';

export default class Modal extends React.Component {
  displayName = 'Modal'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    toggle: React.PropTypes.node.isRequired,
  }

  static keyCodes = {
    ESC: 27,
  }

  constructor(props) {
    super(props);
    this.state = { isOpen: 0 };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleKeyDown(event) {
    if (event.which === Modal.keyCodes.ESC) {
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
    this.setState({ isOpen: true });

    // Wait until the element is focusable and prevent the opening click
    // closing when it bubbles to the window
    setTimeout(() => {
      // Capture click handler to catch the click asap
      // We have modals with sliders where the next/prev button hide themselves at
      // the end/beginning - if we use a bubble the event reaches the document
      // after the element is removed failing the check weather the element originated
      // from inside the modal causing the modal to close
      window.addEventListener('click', this.handleDocumentClick, true);
      this.findContentNode().focus();
    }, 0);
  }

  hide() {
    this.setState({ isOpen: false });
    window.removeEventListener('click', this.handleDocumentClick, true);
  }

  findContentNode() {
    return React.findDOMNode(this.refs.modalContent);
  }

  render() {
    const modalClasses = classNames('modal', {
      'u-is-visible': this.state.isOpen,
    });
    const containerClasses = classNames('modal__container', {
      'is-open': this.state.isOpen,
    });

    const style = {
      outline: 'none',
    };

    return (
      <span>
        <span onClick={this.handleClick}>
          {this.props.toggle}
        </span>
        <div className={modalClasses}>
          <div className={containerClasses}
            onKeyDown={this.handleKeyDown}
            style={style}
            tabIndex='-1'
            ref='modalContent'>
            <a className='modal__container__close' onClick={this.handleClick}>
              <CloseModalIcon className='svg-icon__close-modal' />
            </a>
            {this.props.children}
          </div>
        </div>
      </span>
    );
  }
}
