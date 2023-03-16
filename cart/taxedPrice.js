const money = require('../baseTypes/money');
const taxPortion = require('./taxPortion');

module.exports = {
  type: 'object',
  description: 'Representation of a Taxed Price',
  properties: {
    totalNet: money,
    totalGross: money,
    taxPortions: {
      description: 'Array of TaxPortion',
      type: 'array',
      items: taxPortion
    }
  },
  required: ['totalNet', 'totalGross', 'taxPortions']
};
