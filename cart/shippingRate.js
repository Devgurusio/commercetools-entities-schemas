const shippingRateDraft = require('./shippingRateDraft');

module.exports = {
  ...shippingRateDraft,
  description: 'Representation for a Shipping Info',
  properties: {
    ...shippingRateDraft.properties,
    isMatching: {
      description:
        'Only appears in response to requests for shipping methods by cart or location to mark this shipping rate as one that matches the cart or location',
      type: 'boolean'
    }
  },
  required: [...shippingRateDraft.required]
};
