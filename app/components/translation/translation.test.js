import Translation from './translation';
import React from 'react/addons';
import {stubContext} from '../../helpers/stub-context';

let {TestUtils} = React.addons;

describe('Translation Component', function() {
  describe('when the component is in the same locale', function() {
    it('renders the content', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-gb' },
        context: { locales: 'en-gb' },
      });

      var result = TestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
      expect(element.getDOMNode().textContent).toEqual('hello world');
    });
  });

  describe('when the component is in a different locale', function() {
    it('returns an empty element', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-fr' },
        context: { locales: 'en-gb' },
      });

      var result = TestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
      expect(element.getDOMNode().textContent).toEqual('');
    });
  });
});
