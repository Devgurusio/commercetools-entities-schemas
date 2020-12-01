const reference = require('../baseTypes/reference');
const discountCodeState = require('./discountCodeState');

module.exports = {
  description: 'Representation of a Discount Code Info',
  properties: {
    discountCode: {
      ...reference,
      description: 'Reference to a DiscountCode'
    },
    state: {
      ...discountCodeState,
      description: 'The actual state of the DicountCode'
    }
  },
  required: ['discountCode']
};
