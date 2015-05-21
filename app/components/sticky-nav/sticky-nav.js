import React from 'react';
import throttle from 'lodash/function/throttle';
import classNames from 'classnames';

function updatePosition(component) {
  const navOffset = React.findDOMNode(component).getBoundingClientRect().top;
  const scrollPosition = window.scrollX;

  component.setState({sticky: scrollPosition >= navOffset});
}

export default class StickyNav extends React.Component {
  displayName = 'StickyNav'

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {sticky: false};
  }

  componentDidMount() {
    const throttleDelay = 20;

    this.throttled = throttle(updatePosition.bind(null, this), throttleDelay, {
      trailing: true,
    });

    window.addEventListener('scroll', this.throttled, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttled, false);
  }

  render() {
    const stickyNavInnerClass = classNames('sticky-nav__inner u-text-heading u-text-light u-text-no-smoothing', {
      'is-sticky': this.state.sticky,
    });

    return (
      <div className='sticky-nav'>
        <div className={stickyNavInnerClass}>
          {this.props.children}
          <hr className='u-margin-An' />
        </div>
      </div>
    );
  }
}
