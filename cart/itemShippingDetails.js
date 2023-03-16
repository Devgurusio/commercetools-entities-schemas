const itemShippingTarget = require('./itemShippingTarget');

module.exports = {
  type: 'object',
  description: 'Representation for an Item Shipping Details',
  properties: {
    targets: {
      description: 'An array of Item Shipping Target',
      type: 'array',
      items: itemShippingTarget
    },
    valid: {
      type: 'boolean'
    }
  },
  required: ['targets', 'valid']
};
