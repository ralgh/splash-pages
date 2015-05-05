import Tabs from './tabs';
import React from 'react/addons';
const {TestUtils} = React.addons;

describe('Tabs Component', function() {
  var result;
  beforeEach(function() {
    result = TestUtils.renderIntoDocument(
        <Tabs triggers={[
          (<a href='#'>1</a>),
          (<a href='#' className='trigger'><span className='trigger-span'>2</span></a>),
        ]}>
          <div>Content 1</div>
          <div>Content 2</div>
        </Tabs>
      );
  });

  it('shows first child content by default', function() {
    const contentElement = TestUtils.findRenderedDOMComponentWithClass(result, 'u-is-visible is-active');
    expect(contentElement.getDOMNode().textContent).toEqual('Content 1');
  });

  describe('clicking on a trigger', function() {
    ['trigger', 'trigger-span'].forEach(function(className) {
      it('shows content', function() {
        const triggerElement = TestUtils.findRenderedDOMComponentWithClass(result, className);
        const node = triggerElement.getDOMNode();
        TestUtils.Simulate.click(node);
        const contentElement = TestUtils.findRenderedDOMComponentWithClass(result, 'u-is-visible is-active');
        expect(contentElement.getDOMNode().textContent).toEqual('Content 2');
      });
    });
  });
});
