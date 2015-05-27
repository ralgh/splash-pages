import React, { PropTypes, Component } from 'react';
import Message from '../message/message';
import Router from 'react-router';
const RouterLink = Router.Link;

export default class Link extends Component {
  displayName = 'Link'

  static propTypes = {
    pointer: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
    params: PropTypes.object,
    query: PropTypes.object,
    activeStyle: PropTypes.object,
    onClick: PropTypes.func,
  }

  render() {
    return (
      <RouterLink {...this.props} activeClassName='is-active'>
        { this.props.pointer &&
          (<Message pointer={this.props.pointer} />) || this.props.children }
      </RouterLink>
    );
  }
}
