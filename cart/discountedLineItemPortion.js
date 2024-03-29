const baseMoney = require('../baseTypes/baseMoney');
const reference = require('../baseTypes/reference');

module.exports = {
  type: 'object',
  description: 'Representation of a Discounted Line Item Portion',
  properties: {
    discount: {
      ...reference,
      description: 'Reference to a CartDiscount'
    },
    discountedAmount: baseMoney
  },
  required: ['discount', 'discountedAmount']
};
