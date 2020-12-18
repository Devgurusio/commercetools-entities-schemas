const baseMoney = require('../baseTypes/baseMoney');
const reference = require('../baseTypes/reference');

module.exports = {
  description: 'Representation of a Discounted Line Item Portion',
  properties: {
    discount: {
      ...reference,
      description: 'Reference to a CartDiscount'
    },
    discountAmount: baseMoney
  },
  required: ['discount', 'discountAmount']
};
