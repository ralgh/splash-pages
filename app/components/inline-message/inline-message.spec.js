import InlineMessage from './inline-message';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import { PropTypes } from '../../helpers/prop-types/prop-types';

function inlineMessageWithContext(context) {
  return class extends React.Component {
    static childContextTypes = {
      messages: PropTypes.object.isRequired,
      currentLocale: PropTypes.locale,
    }

    getChildContext() {
      return context;
    }

    render() {
      return <InlineMessage {...this.props} />;
    }
  };
}

function renderText(component) {
  const result = ReactTestUtils.renderIntoDocument(component);
  const element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');

  return element.getDOMNode().textContent;
}

describe('InlineMessage Component', () => {
  describe('when the context has the same locale as the given message', () => {
    describe('when a more specific translation exists', () => {
      it('uses the translation message', () => {
        const StubbedInlineMessage = inlineMessageWithContext({
          currentLocale: 'en-GB',
          messages: {
            foo: { bar: 'baz' },
          },
        });

        const component = (
          <StubbedInlineMessage locale='en' pointer='foo.bar'>
            Inline message
          </StubbedInlineMessage>
        );

        expect(renderText(component)).toEqual('baz');
      });
    });

    describe('when the inline message is for the most specific locale', () => {
      it('uses the inline message', () => {
        const StubbedInlineMessage = inlineMessageWithContext({
          currentLocale: 'en-GB',
          messages: {},
        });

        const component = (
          <StubbedInlineMessage locale='en-GB' pointer='foo.bar'>
            Inline message
          </StubbedInlineMessage>
        );

        expect(renderText(component)).toEqual('Inline message');
      });
    });

    describe('but there also exists a translation for the same locale', () => {
      it('throws an error', () => {
        const StubbedInlineMessage = inlineMessageWithContext({
          currentLocale: 'en-GB',
          messages: {
            foo: { bar: 'baz' },
          },
        });

        expect(() => {
          ReactTestUtils.renderIntoDocument(
            <StubbedInlineMessage locale='en-GB' pointer='foo.bar'>
              Inline message
            </StubbedInlineMessage>
          );
        }).toThrow(new Error('Duplicate translation found for foo.bar'));
      });
    });
  });

  describe('when the context locale differs to the inline message locale', () => {
    describe('and we have a translation for that locale', () => {
      it('uses the translation message', () => {
        const StubbedInlineMessage = inlineMessageWithContext({
          currentLocale: 'fr-FR',
          messages: {
            foo: { bar: 'baz' },
          },
        });

        const component = (
          <StubbedInlineMessage locale='en-GB' pointer='foo.bar'>
            Inline message
          </StubbedInlineMessage>
        );

        expect(renderText(component)).toEqual('baz');
      });
    });

    describe('and there is no translation for the current locale', () => {
      it('throws an error', () => {
        const StubbedInlineMessage = inlineMessageWithContext({
          currentLocale: 'fr-FR',
          messages: {
            foo: { bar: 'baz' },
          },
        });

        expect(() => {
          ReactTestUtils.renderIntoDocument(
            <StubbedInlineMessage locale='en-GB' pointer='doesnt.exist'>
              Inline message
            </StubbedInlineMessage>
          );
        }).toThrow(new ReferenceError('Could not find Intl pointer: doesnt.exist'));
      });
    });
  });
});
