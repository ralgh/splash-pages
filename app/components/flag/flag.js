import React from 'react';
import DEFlagIcon from '../../icons/svg/DE-flag';
import IEFlagIcon from '../../icons/svg/IE-flag';
import GBFlagIcon from '../../icons/svg/GB-flag';
import FRFlagIcon from '../../icons/svg/FR-flag';
import BEFlagIcon from '../../icons/svg/BE-flag';
import EUFlagIcon from '../../icons/svg/EU-flag';

const countryMap = {
  de: DEFlagIcon,
  ie: IEFlagIcon,
  gb: GBFlagIcon,
  fr: FRFlagIcon,
  be: BEFlagIcon,
  eu: EUFlagIcon,
};

export default class Flag extends React.Component {
  displayName = 'Flag'

  static propTypes = {
    country: function(props, propName) {
      const countries = Object.keys(countryMap);
      if (!countries.indexOf(props[propName]) === -1) {
        throw new TypeError(`Country must be in (${countries})`);
      }
    },
  };

  render() {
    const countryCode = this.props.country.toString().toLowerCase();
    const FlagIcon = countryMap[countryCode];

    return (<FlagIcon {...this.props} />);
  }
}
