import React from 'react';
import Router from 'react-router';
var { Link } = Router;

export default class StoryLink extends React.Component {
  static propTypes = {
    img: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <Link to={this.props.to} className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
        <div className='product-grid__container u-text-center u-padding-Vl'>
          <i role='img' aria-label={this.props.to} className={this.props.img}></i>
          <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
             {this.props.children}
          </p>
        </div>
        <div className='stories-item__btn btn u-size-full'>Read the case study</div>
      </Link>
    );
  }
}

