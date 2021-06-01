const reference = require('../baseTypes/reference');
const shippingRate = require('../cart/shippingRate');

module.exports = {
  zone: {
    ...reference,
    description: 'Reference to a Zone '
  },
  shippingRates: {
    type: 'array',
    items: shippingRate
  },
  required: ['zone', 'shippingRates']
};
