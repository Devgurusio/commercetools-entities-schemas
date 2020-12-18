const reference = require('../baseTypes/reference');

module.exports = {
  description: 'Representation of a Payment Info',
  properties: {
    payments: {
      type: 'array',
      descrption: 'Array of References to Payments',
      items: reference
    }
  },
  required: ['payments']
};
