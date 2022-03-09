const money = require('../baseTypes/money');

module.exports = {
  description: 'Representation of a Tax Portion',
  properties: {
    name: {
      type: 'string'
    },
    rate: {
      description: 'A number in the range [0..1]',
      type: 'number',
      minimum: 0,
      maximum: 1
    },
    amount: money
  },
  required: ['rate', 'amount']
};
