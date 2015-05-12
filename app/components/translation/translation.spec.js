import React from 'react';
import Translation from './translation';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {stubContext} from '../../helpers/stub-context';

describe('Translation Component', function() {
  describe('when the component is in the same locale', function() {
    it('renders the content', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-GB' },
        context: { locales: 'en-GB' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'div');
      expect(element.getDOMNode().textContent).toEqual('hello world');
    });
  });

  describe('when the component is in the same language', function() {
    it('renders the content', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en' },
        context: { locales: 'en-GB' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'div');
      expect(element.getDOMNode().textContent).toEqual('hello world');
    });
  });

  describe('when the component is in a different language', function() {
    it('returns an empty element', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'fr' },
        context: { locales: 'en-GB' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'div');
      expect(element.getDOMNode().textContent).toEqual('');
    });
  });

  describe('when the component is in a different locale', function() {
    it('returns an empty element', function() {
      var TranslationStub = stubContext(Translation, {
        props: { locales: 'en-FR' },
        context: { locales: 'en-GB' },
      });

      var result = ReactTestUtils.renderIntoDocument(
        <TranslationStub>
          <p>hello world</p>
        </TranslationStub>
      );

      var element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'div');
      expect(element.getDOMNode().textContent).toEqual('');
    });
  });
});
