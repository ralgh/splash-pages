import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class CSSTransitionGroup extends React.Component {
  displayName = 'CSSTransitionGroup'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  render() {
    // Disable animations when running e2e tests that don't wait for
    // animations
    const animationsEnabled = !process.env.ANIMATIONS_DISABLED;

    return (
      <ReactCSSTransitionGroup {...this.props}
      transitionEnter={animationsEnabled}
      transitionLeave={animationsEnabled}>
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}
