const dateTime = require('../baseTypes/dateTime');
const reference = require('../baseTypes/reference');

module.exports = {
  type: 'object',
  properties: {
    productSelection: {
      ...reference,
      description:
        'Reference to the Product Selection that this assignment is part of.'
    },
    createdAt: dateTime
  },
  required: ['productSelection']
};
