const address = require('../baseTypes/address');
const customFields = require('../baseTypes/customFields');
const money = require('../baseTypes/money');
const reference = require('../baseTypes/reference');
const resource = require('../common/resource');
const lineItem = require('../shoppingList/lineItem');
const cartDraft = require('./cartDraft');
const discountCodeInfo = require('./discountCodeInfo');
const keyReference = require('./keyReference');
const paymentInfo = require('./paymentInfo');
const shippingInfo = require('./shippingInfo');
// const shippingRateInput = require("./shippingRateInput");
const taxedPrice = require('./taxedPrice');
const customLineItem = require('./customLineItem');

module.exports = {
  ...resource,
  ...cartDraft,
  description: 'Representation of a Cart',
  properties: {
    ...resource.properties,
    ...cartDraft.properties,
    store: {
      ...keyReference,
      description: 'Assigns the new cart to the store'
    },
    lineItems: {
      description: 'Array of Line Item',
      type: 'array',
      items: lineItem
    },
    customLineItems: {
      description: 'Array of Custom Line Item',
      type: 'array',
      items: customLineItem
    },
    totalPrice: {
      ...money,
      description:
        'The sum of all totalPrice fields of the lineItems and customLineItems, as well as the price field of shippingInfo (if it exists)'
    },
    taxedPrice: taxedPrice,
    cartState: {
      type: 'string',
      enum: ['Active', 'Merged', 'Ordered']
    },
    shippingAddress: {
      ...address,
      description:
        'The shipping address is used to determine the eligible shipping methods and rates as well as the tax rate of the line items'
    },
    billingAddress: address,
    customerGroup: {
      ...reference,
      description:
        'Set automatically when the customer is set and the customer is a member of a customer group. Used for product variant price selection'
    },
    shippingInfo: {
      ...shippingInfo,
      description: 'Set automatically once the ShippingMethod is set'
    },
    discountCodes: {
      description: 'Array of Discount Code Info',
      type: 'array',
      items: discountCodeInfo
    },
    refusedGifts: {
      description:
        'Array of References to CartDiscounts. Automatically filled when a line item with LineItemMode GiftLineItem is removed from the car',
      type: 'array',
      items: reference
    },
    custom: customFields,
    paymentInfo: paymentInfo,
    locale: {
      description: 'String conforming to IETF language tag',
      type: 'string'
    },
    deleteDaysAfterLastModification: {
      description: `The cart will be deleted automatically if it hasn't been modified for the specified amount of days`,
      type: 'number'
    }
    /* shippingRateInput: { // TO COMPLETE
            description: 'The shippingRateInput is used as an input to select a ShippingRatePriceTier',
            type: shippingRateInput,
        }, */
  },
  required: [
    ...resource.required,
    ...cartDraft.required,
    'lineItems',
    'customLineItems',
    'totalPrice',
    'cartState',
    'discountCodes',
    'refusedGifts'
  ]
};
