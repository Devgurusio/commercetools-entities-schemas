const customFields = require('../baseTypes/customFields');
const dateTime = require('../baseTypes/dateTime');
const localizedString = require('../baseTypes/localizedString');
const productVariant = require('../baseTypes/productVariant');
const price = require('../baseTypes/price');
const money = require('../baseTypes/money');

const reference = require('../baseTypes/reference');
const taxedItemPrice = require('./taxedItemPrice');
const itemState = require('./itemState');
const { taxRate } = require('../taxCategory');
const discountedLineItemPriceForQuantity = require('./discountedLineItemPriceForQuantity');
const itemShippingDetails = require('./itemShippingDetails');
module.exports = {
  type: 'object',
  description:
    'A line item is a reference to a ProductVariant in a Product in its current version',
  properties: {
    id: {
      type: 'string',
      description: 'The unique Id of this LineItem'
    },
    productId: {
      type: 'string',
      description: 'ID of an existing Product'
    },
    name: {
      ...localizedString,
      description: `Name of the product.
        This data is updated in an eventual consistent manner when the product’s name changes`
    },
    productSlug: {
      ...localizedString,
      description: `The slug of a product is inserted on the fly. It can therefore be used to link to the product detail page of the product. It is empty if the product has been deleted.
The slug is also empty if the cart or order is retrieved via Reference Expansion or is a snapshot in a Message.`
    },
    productType: {
      ...reference,
      description: 'Refers to the product type of the product'
    },
    variant: {
      ...productVariant,
      description: 'Current product variant'
    },
    price: {
      ...price,
      description: `The price of a line item is selected from the prices array of the product variant. If the variant field hasn't been updated, the price may not correspond to a price in variant.prices.`
    },
    taxedPrice: {
      ...taxedItemPrice,
      description: 'Set once the taxRate is set.'
    },
    totalPrice: {
      ...money,
      description: `The total price of this line item. If the line item is discounted, then the totalPrice is the DiscountedLineItemPriceForQuantity multiplied by quantity. Otherwise the total price is the product price multiplied by the quantity. totalPrice may or may not include the taxes: it depends on the taxRate.includedInPrice property.`
    },
    quantity: {
      type: 'number',
      description:
        'The amount of a LineItem in the cart. Must be a positive integer.'
    },
    addedAt: {
      ...dateTime,
      description: 'When the line item was added to the shopping list'
    },
    state: {
      type: 'array',
      items: itemState
    },
    taxRate,
    supplyChannel: {
      ...reference,
      description: `The supply channel identifies the inventory entries that should be reserved. The channel has the role InventorySupply. If the cart is bound to a Store with supplyChannels set, the channel has to match one of the store's supply channels.`
    },
    distributionChannel: {
      ...reference,
      description: `The distribution channel is used to select a ProductPrice. The channel has the role ProductDistribution. If the cart is bound to a Store with distributionChannels set, the channel has to match one of the store's distribution channels.`
    },
    discountedPricePerQuantity: {
      type: 'array',
      items: discountedLineItemPriceForQuantity
    },
    priceMode: {
      type: 'string',
      enum: ['Platform', 'ExternalPrice', 'ExternalTotal'],
      description: `> 
              - Platform: The price is selected form the product variant. This is the default mode.
              - ExternalPrice:  The line item price was set externally. Cart discounts can apply to line items with this price mode. All update actions that change the quantity of a line item with this price mode require the externalPrice field to be given.
              - ExternalTotal: The line item price with the total was set externally. Cart discounts are deactivated for the line items with this price mode. Although a line item with this price mode has both price and totalPrice externally set, only totalPrice will be used to calculate the total price of a cart. All update actions that change the quantity of a line item with this price mode can set the new price with the externalTotal field. If the externalTotal field is not given in an update action that changes line item quantity then the external price is unset and the price mode is set back to Platform.
             `
    },
    lineItemMode: {
      type: 'string',
      enum: ['Standard', 'GiftLineItem'],
      description: `> 
              - Standard: The line item was added during cart creation or with the update action addLineItem. Its quantity can be changed without restrictions.
              - GiftLineItem: The line item was added automatically, because a discount has added a free gift to the cart. The quantity can not be increased, and it won't be merged when the same product variant is added. If the gift is removed, an entry is added to the refusedGifts array and the discount won't be applied again to the cart. The price can not be changed externally. All other updates, such as the ones related to custom fields, can be used.
             `
    },
    custom: customFields,
    shippingDetails: itemShippingDetails,
    lastModifiedAt: dateTime
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
    'lineItemMode',
    'lastModifiedAt'
  ]
};
