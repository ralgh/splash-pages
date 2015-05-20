import React from 'react';
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
