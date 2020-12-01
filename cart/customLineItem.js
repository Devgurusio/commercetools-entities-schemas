const baseMoney = require('../baseTypes/baseMoney');
const customFields = require('../baseTypes/customFields');
const localizedString = require('../baseTypes/localizedString');
const money = require('../baseTypes/money');
const reference = require('../baseTypes/reference');
const taxRate = require('../taxCategory/taxRate');
const discountedLineItemPriceForQuantity = require('./discountedLineItemPriceForQuantity');
const itemShippingDetails = require('./itemShippingDetails');
const itemState = require('./itemState');
const taxedItemPrice = require('./taxedItemPrice');

module.exports = {
  description: 'A representation of a Custom Line Item',
  properties: {
    id: {
      description: 'The unique ID of this CustomLineItem',
      type: 'string'
    },
    name: localizedString,
    money: {
      ...baseMoney,
      description: 'The cost to add to the cart. The amount can be negative'
    },
    taxedPrice: {
      ...taxedItemPrice,
      description: 'Set once the taxRate is set'
    },
    totalPrice: {
      ...money,
      description: 'The total price of this custom line item'
    },
    slug: {
      description:
        'A unique String in the cart to identify this CustomLineItem',
      type: 'string'
    },
    quantity: {
      description:
        'The amount of a CustomLineItem in the cart. Must be a positive integer',
      type: 'number'
    },
    state: {
      description: 'Array of Item State',
      type: 'array',
      items: itemState
    },
    taxedCategory: {
      ...reference,
      description: 'Reference to a TaxCategory '
    },
    taxRate: {
      ...taxRate,
      description:
        'Will be set automatically in the Platform TaxMode once the shipping address is set is set'
    },
    discountedPricePerQuantity: {
      description: 'Array of Discounted Line Item Price For Quantity',
      type: 'array',
      items: discountedLineItemPriceForQuantity
    },
    custom: customFields,
    shippingDetails: {
      ...itemShippingDetails,
      description: 'Container for custom line item specific address(es)'
    }
  },
  required: ['id', 'name', 'money', 'totalPrice', 'slug', 'quantity', 'state']
};
