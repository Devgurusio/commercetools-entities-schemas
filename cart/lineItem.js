const customFields = require('../baseTypes/customFields');
const date = require('../baseTypes/date');
const dateTime = require('../baseTypes/dateTime');
const localizedString = require('../baseTypes/localizedString');
const money = require('../baseTypes/money');
const price = require('../baseTypes/price');
const productVariant = require('../baseTypes/productVariant');
const reference = require('../baseTypes/reference');
const taxRate = require('../taxCategory/taxRate');
const discountedLineItemPriceForQuantity = require('./discountedLineItemPriceForQuantity');
const itemShippingDetails = require('./itemShippingDetails');
const itemState = require('./itemState');
const lineItemMode = require('./lineItemMode');
const lineItemPriceMode = require('./lineItemPriceMode');
const taxedItemPrice = require('./taxedItemPrice');

module.exports = {
  description: 'Representation of a line item',
  properties: {
    id: {
      description: 'The unique ID of this LineItem',
      type: 'string'
    },
    productId: {
      type: 'string'
    },
    name: {
      ...localizedString,
      description: 'The product name'
    },
    productSlug: {
      ...localizedString,
      description:
        'The slug of a product is inserted on the fly. It is always up-to-date and can therefore be used to link to the product detail page of the product'
    },
    productType: {
      ...reference,
      description: 'Reference to a ProductType'
    },
    variant: {
      ...productVariant,
      description:
        'The variant data is saved when the variant is added to the cart, and not updated automatically. It can manually be updated with the Recalculate update action'
    },
    price: {
      ...price,
      description:
        'The price of a line item is selected from the prices array of the product variant'
    },
    taxedPrice: {
      ...taxedItemPrice,
      description: 'Set once the taxRate is set'
    },
    totalPrice: {
      ...money,
      description: 'The total price of this line item'
    },
    quantity: {
      type: 'number',
      description:
        'The amount of a LineItem in the cart. Must be a positive integer',
      minimum: 1
    },
    addedAt: {
      ...dateTime,
      description: 'When the line item was added to the cart'
    },
    state: {
      description: 'Array of ItemState',
      type: 'array',
      items: itemState
    },
    taxRate: {
      ...taxRate,
      description:
        'Will be set automatically in the Platform TaxMode once the shipping address is set is set'
    },
    supplyChannel: {
      ...reference,
      description:
        'The supply channel identifies the inventory entries that should be reserved'
    },
    distributionChannel: {
      ...reference,
      description: 'The distribution channel is used to select a ProductPrice'
    },
    discountedPricePerQuantity: {
      description: 'Array of DiscountedLineItemPriceForQuantity',
      type: 'array',
      items: discountedLineItemPriceForQuantity
    },
    priceMode: {
      ...lineItemPriceMode
    },
    lineItemMode: {
      ...lineItemMode
    },
    custom: {
      ...customFields
    },
    shippingDetails: {
      ...itemShippingDetails,
      description: 'Container for line item specific address(es)'
    },
    lastModifiedAt: {
      ...date
    }
  },
  required: [
    'id',
    'productId',
    'name',
    'variant',
    'price',
    'totalPrice',
    'quantity',
    'state',
    'discountedPricePerQuantity',
    'priceMode',
    'lineItemMode'
  ]
};
