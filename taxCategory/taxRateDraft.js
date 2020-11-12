const subRate = require('./subRate');

module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    amount: {
      type: 'number',
      description:
        'Percentage in the range of [0..1]. The sum of the amounts of all subRates, if there are any',
      minimum: 0,
      maximum: 1
    },
    includedInPrice: { type: 'boolean' },
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
      items: subRate,
      description:
        'For countries (e.g. the US) where the total tax is a combination of multiple taxes (e.g. state and local taxes)'
    }
  },
  required: ['name', 'includedInPrice', 'country']
};
