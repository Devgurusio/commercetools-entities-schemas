const money = require('../baseTypes/money');
const shippingRatePriceTier = require('./shippingRatePriceTier');

module.exports = {
  description: 'Representation for a Shipping Info',
  properties: {
    price: money,
    freeAbove: {
      ...money,
      description:
        'The shipping is free if the sum of the (custom) line item prices reaches the freeAbove value'
    },
    tiers: {
      description: 'A list of shipping rate price tiers',
      type: 'array',
      items: shippingRatePriceTier
    }
  },
  required: ['price']
};
