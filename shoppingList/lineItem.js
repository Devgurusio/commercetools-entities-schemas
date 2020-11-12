const customFields = require('../baseTypes/customFields');
const dateTime = require('../baseTypes/dateTime');
const localizedString = require('../baseTypes/localizedString');
const productVariant = require('../baseTypes/productVariant');

const reference = require('../baseTypes/reference');

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
    variantId: {
      type: 'number',
      description: `If present it defines an existing ProductVariant of the product.
        If absent it refers to the current master variant of the product`
    },
    productType: {
      ...reference,
      description: 'Refers to the product type of the product'
    },
    quantity: {
      type: 'number'
    },
    custom: customFields,
    addedAt: {
      ...dateTime,
      description: 'When the line item was added to the shopping list'
    },
    name: {
      ...localizedString,
      description: `Name of the product.
        This data is updated in an eventual consistent manner when the product’s name changes`
    },
    deactivatedAt: {
      ...dateTime,
      description: `If the product or product variant cannot be purchased anymore, deactivatedAt is set to the date of the deactivation.
        A line item with a deactivatedAt datetime can be displayed to the user as automatically deleted.
        This data is updated in an eventual consistent manner when the product variant cannot be ordered anymore`
    },
    productSlug: {
      ...localizedString,
      description: 'Slug of the current ProductData'
    },
    variant: {
      ...productVariant,
      description: 'Current product variant'
    }
  },
  required: ['id', 'productId', 'productType', 'quantity', 'addedAt', 'name']
};
