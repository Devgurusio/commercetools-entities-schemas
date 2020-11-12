const dateTime = require('../baseTypes/dateTime');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');

const lineItemDraft = {
  type: 'object',
  properties: {
    quantity: {
      type: 'number',
      description: 'Defaults to 1'
    },
    addedAt: dateTime,
    custom: customFieldsDraft
  }
};

const selectionByIDs = {
  ...lineItemDraft,
  properties: {
    ...lineItemDraft.properties,
    productId: {
      type: 'string',
      description: 'ID of an existing Product'
    },
    variantId: {
      type: 'number',
      description:
        'If present it defines an existing ProductVariant of the product. If absent it refers to the current master variant of the product'
    }
  },
  required: ['productId']
};

const selectionBySKU = {
  ...lineItemDraft,
  properties: {
    ...lineItemDraft.properties,
    sku: {
      type: 'string',
      description: 'SKU of an existing ProductVariant'
    }
  },
  required: ['sku']
};

module.exports = {
  oneOf: [selectionByIDs, selectionBySKU]
};
