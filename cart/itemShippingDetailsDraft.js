const itemShippingTarget = require('./itemShippingTarget');

module.exports = {
  description: 'Representation for an Item Shipping Details Draft',
  properties: {
    targets: {
      type: 'array',
      description: 'Array of ItemShippingTargets',
      items: itemShippingTarget
    }
  },
  required: ['targets']
};
