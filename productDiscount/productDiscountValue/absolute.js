const money = require('../../baseTypes/money');

module.exports = {
  type: 'object',
  describe:
    'Discounts the product price by a fixed amount, defined by the money field',
  properties: {
    type: {
      type: 'string',
      enum: ['absolute']
    },
    money: {
      type: 'array',
      description:
        'The array contains money values in different currencies. An absolute ProductDiscount will only match a price if this array contains a value with the same currency. If it contains 10€ and 15$, for example, the matching € price will be decreased by 10€ and the matching $ price will be decreased by 15$',
      items: money
    }
  },
  required: ['type', 'money']
};
