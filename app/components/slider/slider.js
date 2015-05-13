import assign from 'lodash/object/assign';
import React from 'react';

export default class Slider extends React.Component {
  displayName = 'Slider'

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    prev: React.PropTypes.node.isRequired,
    next: React.PropTypes.node.isRequired,
    navigationClassName: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick(event) {
    event.preventDefault();
    const index = this.state.activeIndex;
    if (index > 0) {
      this.setState({ activeIndex: index - 1 });
    }
  }

  handleNextClick(event) {
    event.preventDefault();
    const index = this.state.activeIndex;
    if (index + 1 < this.props.children.length) {
      this.setState({ activeIndex: index + 1 });
    }
  }

  render() {
    const children = this.props.children[this.state.activeIndex];
    const prev = React.cloneElement(this.props.prev, assign({}, this.props.prev.props, {
      onClick: this.handlePrevClick,
    }));
    const next = React.cloneElement(this.props.next, assign({}, this.props.next.props, {
      onClick: this.handleNextClick,
    }));
    const index = this.state.activeIndex;
    const isAtBegining = index === 0;
    const isAtEnd = index + 1 === this.props.children.length;

    return (
      <div>
        <div className={this.props.navigationClassName}>
          { !isAtBegining && prev}
          { !isAtEnd && next}
        </div>
        {children}
      </div>
    );
  }
}
