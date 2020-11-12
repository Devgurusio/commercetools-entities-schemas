const baseMoney = require('./baseMoney');
const customFieldsDraft = require('./customFieldsDraft');
const dateTime = require('./dateTime');
const discountedPrice = require('./discountedPrice');
const priceTier = require('./priceTier');
const reference = require('./reference');
const resourceIdentifier = require('./resourceIdentifier');

module.exports = {
  type: 'object',
  properties: {
    value: baseMoney,
    country: {
      type: 'string',
      description: 'A two-digit country code as per ISO 3166-1 alpha-2'
    },
    customerGroup: reference,
    channel: resourceIdentifier,
    discounted: {
      ...discountedPrice,
      description:
        'Set if a matching ProductDiscount exists. If set, the Cart will use the discounted value for the cart price calculation. When a relative discount is applied and the fraction part of the discounted price is 0.5, the discounted price is rounded in favor of the customer with the half down rounding'
    },
    validFrom: {
      ...dateTime,
      description: 'Date from which the price is valid'
    },
    validUntil: {
      ...dateTime,
      description: 'Date until which the price is valid'
    },
    tiers: {
      type: 'array',
      description: 'Price tiers associated with the variant',
      items: priceTier
    },
    custom: customFieldsDraft
  },
  required: ['value']
};
