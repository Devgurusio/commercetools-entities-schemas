const taxRateDraft = require('./taxRateDraft');

module.exports = {
  type: 'object',
  description: 'Tax category draft object',
  properties: {
    name: { type: 'string' },
    key: { type: 'string' },
    description: { type: 'string' },
    rates: {
      type: 'array',
      items: taxRateDraft
    }
  },
  required: ['name']
};
