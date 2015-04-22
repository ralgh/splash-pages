import React from 'react';

function renderLocale(currentLocale, props) {
  if (currentLocale.toLowerCase() === props.locales.toLowerCase()) {
    return props.children;
  }
}

class Translation extends React.Component {
  static contextTypes = {
    locales: React.PropTypes.oneOfType([
      React.PropTypes.string.isRequired,
      React.PropTypes.array.isRequired,
    ]),
  }

  render() {
    return (
      <div>
        {renderLocale(this.context.locales, this.props)}
      </div>
    );
  }
}

export default Translation;
