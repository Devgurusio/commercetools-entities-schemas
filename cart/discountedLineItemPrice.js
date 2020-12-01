const baseMoney = require('../baseTypes/baseMoney');
const discountedLineItemPortion = require('./discountedLineItemPortion');

module.exports = {
  description: 'Representation of a Discounted Line Item Price',
  properties: {
    value: baseMoney,
    includedDiscounts: {
      description: 'Array of DiscountedLineItemPortion',
      type: 'array',
      items: discountedLineItemPortion
    }
  },
  required: ['value', 'includedDiscounts']
};
