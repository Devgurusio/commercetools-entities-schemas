const address = require('../baseTypes/address');
const customFields = require('../baseTypes/customFields');
const money = require('../baseTypes/money');
const reference = require('../baseTypes/reference');
const resource = require('../common/resource');
const lineItem = require('../cart/lineItem');

const discountCodeInfo = require('../cart/discountCodeInfo');
const keyReference = require('../baseTypes/keyReference');

const paymentInfo = require('../cart/paymentInfo');
const shippingInfo = require('../cart/shippingInfo');
const taxedPrice = require('../cart/taxedPrice');
const customLineItem = require('../cart/customLineItem');
const dateTime = require('../baseTypes/dateTime');
const taxMode = require('../cart/taxMode');
const roundingMode = require('../cart/roundingMode');
const taxCalculationMode = require('../cart/taxCalculationMode');
const inventoryMode = require('../cart/inventoryMode');

const orderState = require('./orderState');
const shipmentState = require('./shipmentState');
const paymentState = require('./paymentState');
const syncInfo = require('./syncInfo');
const returnInfo = require('./returnInfo');
const shippingRateInput = require('../cart/shippingRateInput');
const cartOrigin = require('../cart/cartOrigin');

module.exports = {
  ...resource,
  description: 'Representation of a Order',
  properties: {
    ...resource.properties,
    completedAt: dateTime,
    orderNumber: {
      type: 'string',
      description:
        "String that uniquely identifies an order. It can be used to create more human-readable (in contrast to ID) identifier for the order. It should be unique across a project. Once it's set it cannot be changed."
    },
    customerId: {
      type: 'string'
    },
    customerEmail: {
      type: 'string'
    },
    anonymousId: {
      type: 'string',
      description:
        'Identifies carts and orders belonging to an anonymous session (the customer has not signed up/in yet)'
    },
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
        'The total price of this line item. If the line item is discounted, then the totalPrice is the DiscountedLineItemPriceForQuantity multiplied by quantity. Otherwise the total price is the product price multiplied by the quantity. totalPrice may or may not include the taxes: it depends on the taxRate.includedInPrice property.'
    },
    taxedPrice: taxedPrice,
    shippingAddress: address,
    billingAddress: address,
    taxMode,
    taxRoundingMode: {
      ...roundingMode,
      description:
        'When calculating taxes for taxedPrice, the selected mode is used for rouding.'
    },
    taxCalculationMode: {
      ...taxCalculationMode,
      description:
        'When calculating taxes for taxedPrice, the selected mode is used for calculating the price with LineItemLevel (horizontally) or UnitPriceLevel (vertically) calculation mode.'
    },
    customerGroup: {
      ...reference,
      description:
        'Set when the customer is set and the customer is a member of a customer group. Used for product variant price selection.'
    },
    country: {
      type: 'string',
      description: 'A two-digit country code as per ISO 3166-1 alpha-2'
    },
    orderState,
    state: {
      ...reference,
      description: 'This reference can point to a state in a custom workflow.'
    },
    shipmentState,
    paymentState,
    shippingInfo: {
      ...shippingInfo,
      description: 'Set automatically once the ShippingMethod is set'
    },
    syncInfo: {
      type: 'array',
      items: syncInfo
    },
    returnInfo: {
      type: 'array',
      items: returnInfo
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
    cart: {
      ...reference,
      description:
        'Set when this order was created from a cart. The cart will have the state Ordered.'
    },
    custom: customFields,
    paymentInfo: paymentInfo,
    locale: {
      description: 'String conforming to IETF language tag',
      type: 'string'
    },
    inventoryMode,
    shippingRateInput: {
      ...shippingRateInput,
      description:
        'The shippingRateInput is used as an input to select a ShippingRatePriceTier.'
    },
    origin: cartOrigin,
    itemShippingAddresses: {
      type: 'array',
      description:
        'Contains addresses for orders with multiple shipping addresses.',
      items: address
    }
  },
  required: [
    ...resource.required,
    'lineItems',
    'customLineItems',
    'totalPrice',
    'taxMode',
    'taxRoundingMode',
    'taxCalculationMode',
    'orderState',
    'syncInfo',
    'returnInfo',
    'discountCodes',
    'refusedGifts',
    'origin',
    'itemShippingAddresses'
  ]
};
