import React from 'react';

function renderLocale(currentLocale, props) {
  if (currentLocale === props.locales) {
    return props.children;
  }
}

export default class Translation extends React.Component {
  render() {
    return (
      <div>
        {renderLocale(this.context.locales, this.props)}
      </div>
    );
  }
}

Translation.contextTypes = {
  locales: React.PropTypes.oneOfType([
    React.PropTypes.string.isRequired,
    React.PropTypes.array.isRequired,
  ]),
};
