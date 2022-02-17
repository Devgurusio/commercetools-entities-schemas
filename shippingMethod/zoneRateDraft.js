const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const shippingRateDraft = require('../cart/shippingRateDraft');

module.exports = {
  properties: {
    zone: {
      ...resourceIdentifier,
      description: 'ResourceIdentifier for a Zone '
    },
    shippingRates: {
      type: 'array',
      items: shippingRateDraft,
      description:
        'The array must not contain two shipping rates with the same currency.'
    }
  },
  required: ['zone', 'shippingRates']
};
