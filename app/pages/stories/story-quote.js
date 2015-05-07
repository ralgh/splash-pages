import React from 'react';

export default class StoryQuote extends React.Component {
  displayName = 'StoryQuote';

  static propTypes = {
    tag: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-center u-color-heading u-text-l u-text-light u-size-3of4'>
                “{this.props.tag}”
              </h2>
            </div>
            <div className='grid__cell u-size-1of2'>
              {this.props.children}
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
      </div>
    );
  }
}

