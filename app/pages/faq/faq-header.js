import React from 'react';
import Message from '../../components/message/message';

export default class FaqHeader extends React.Component {
  displayName = 'FaqHeader';

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <div className='page-hero u-padding-Vxxl'>
          <div className='u-margin-Vxm u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              <Message message='faq.title' />
            </h1>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
