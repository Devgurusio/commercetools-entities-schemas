const reference = require('../baseTypes/reference');

module.exports = {
  type: 'object',
  description: 'Representation of a Item State',
  properties: {
    quantity: {
      type: 'number'
    },
    state: {
      ...reference,
      description: 'Reference to a State'
    }
  },
  required: ['quantity', 'state']
};
