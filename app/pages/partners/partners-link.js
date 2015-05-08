import React from 'react';
import Link from '../../components/link/link';

export default class PartnersLink extends React.Component {
  displayName = 'PartnersLink'

  static propTypes = {
    title: React.PropTypes.node.isRequired,
    to: React.PropTypes.string.isRequired,
    imgClass: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <Link className='u-link-clean grid__cell u-text-center u-size-1of3 u-margin-Bm' to={this.props.to}>
        <div className='u-border-gray u-padding-Vl'>
          <i role='img' aria-label={this.props.title} className={this.props.imgClass} />
          <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
            {this.props.children}
          </p>
        </div>
      </Link>
    );
  }
}

