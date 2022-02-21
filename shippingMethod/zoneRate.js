const zoneRateDraft = require('./zoneRateDraft');
const reference = require('../baseTypes/reference');
const shippingRate = require('../cart/shippingRate');

module.exports = {
  ...zoneRateDraft,
  description:
    'Defines shipping rates (prices) for a specific zone. Shipping rates is an array because the rates for different currencies can be defined.',
  properties: {
    ...zoneRateDraft.properties,
    zone: {
      ...reference,
      description: 'Reference to a Zone'
    },
    shippingRates: {
      type: 'array',
      items: shippingRate,
      description:
        'The array does not contain two shipping rates with the same currency.'
    }
  },
  required: [...zoneRateDraft.required]
};
