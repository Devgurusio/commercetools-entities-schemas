const subRate = require('../taxCategory/subRate');

module.exports = {
  description: 'Representation of an External Tax Rate Draft',
  properties: {
    name: {
      type: 'string'
    },
    amount: {
      type: 'number',
      description:
        'Percentage in the range of [0..1]. Must be supplied if no subRates are specified. If subRates are specified then the amount can be omitted or it must be the sum of the amounts of all subRates'
    },
    includedInPrice: {
      type: 'boolean',
      description:
        'When true, the line item price is considered the gross price and the amount is applied to calculate the net price. When set to false, the line item price will be considered the net price and the amount will be applied to calculate the gross price. See example of calculation below. The default value for includedInPrice is false'
    },
    country: {
      type: 'string',
      description: 'A two-digit country code as per ISO 3166-1 alpha-2'
    },
    state: {
      type: 'string',
      description: 'The state in the country'
    },
    subRates: {
      type: 'array',
      description:
        'Array of SubRate. For countries (for example the US) where the total tax is a combination of multiple taxes (for example state and local taxes)',
      items: subRate
    }
  },
  required: ['name', 'includedInPrice', 'country']
};
