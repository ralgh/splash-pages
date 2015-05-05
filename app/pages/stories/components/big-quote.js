import React from 'react';

export default class StoriesBigQuote extends React.Component {
  static propTypes = {
    person: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    image: React.PropTypes.string,
    heroClass: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
  };
  displayName = 'StoriesBigQuote';

  render() {
    return (
      <div className={this.props.heroClass ? this.props.heroClass + ' story-hero' : 'story-hero'}>
        <div className="site-container u-text-center u-padding-Vxxl">
          <div className="u-padding-Vxl">
            <div className="u-padding-Bxxl u-size-2of3 u-center">
              <p className="u-text-heading u-color-invert u-text-l u-text-light">
                "{this.props.children}"
              </p>
            </div>
            {this.props.image && (<img src="{this.props.image}" alt={this.props.position} className="u-size-1of12 u-text-center u-margin-Bxs" />)}
            <div className="u-color-invert u-text-heading u-text-m u-text-semi">{this.props.person}</div>
            <div className="u-color-invert u-text-heading u-text-xs">{this.props.position}</div>
          </div>
        </div>
      </div>
    );
  }
}
