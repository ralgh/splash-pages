import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import ProductComparisonEn from './product-comparison.en';
import ProductComparisonFr from './product-comparison.fr';

export default class ProductComparison extends React.Component {
  displayName = 'ProductComparison'

  render() {
    return (
    	<div>
	    	<ProductComparisonEn />
	    	<ProductComparisonFr />
	    </div>
    );
  }
}
