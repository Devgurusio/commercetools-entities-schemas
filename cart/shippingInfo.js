const money = require('../baseTypes/money');
const reference = require('../baseTypes/reference');
const taxRate = require('../taxCategory/taxRate');
const delivery = require('./delivery');
const discountedLineItemPrice = require('./discountedLineItemPrice');
const shippingMethodState = require('./shippingMethodState');
const shippingRate = require('./shippingRate');
const taxedItemPrice = require('./taxedItemPrice');

module.exports = {
  type: 'object',
  description: 'Representation of a Shipping Info',
  properties: {
    shippingMethodName: {
      description: '',
      type: 'string'
    },
    price: {
      ...money,
      description:
        'Determined based on the ShippingRate and its tiered prices, and either the sum of LineItem prices or the shippingRateInput field'
    },
    shippingRate: {
      ...shippingRate,
      description: 'The shipping rate used to determine the price'
    },
    taxedPrice: {
      ...taxedItemPrice,
      description: 'Set once the taxRate is set'
    },
    taxRate: {
      ...taxRate,
      description:
        'Will be set automatically in the Platform TaxMode once the shipping address is set is set. For the External tax mode the tax rate has to be set explicitly with the ExternalTaxRateDraft'
    },
    taxCategory: {
      ...reference,
      description: 'Reference to a TaxCategory'
    },
    shippingMethod: {
      ...reference,
      description: 'Not set if custom shipping method is used'
    },
    deliveries: {
      description:
        'Array of Delivery. Deliveries are compilations of information on how the articles are being delivered to the customers',
      type: 'array',
      items: delivery
    },
    discuntedPrice: discountedLineItemPrice,
    shippingMethodState: {
      ...shippingMethodState,
      description:
        'Indicates whether the ShippingMethod referenced in this ShippingInfo is allowed for the cart or not'
    }
  },
  required: [
    'shippingMethodName',
    'price',
    'shippingRate',
    'deliveries',
    'shippingMethodState'
  ]
};
