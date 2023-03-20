const money = require('../baseTypes/money');

module.exports = {
  type: 'object',
  description: 'A representation for a Taxed Item Price',
  properties: {
    totalNet: money,
    totalGross: money
  },
  required: ['totalNet', 'totalGross']
};
