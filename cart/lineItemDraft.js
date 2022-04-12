const dateTime = require('../baseTypes/dateTime');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const externalTaxRateDraft = require('./externalTaxRateDraft');
const baseMoney = require('../baseTypes/baseMoney');
const money = require('../baseTypes/money');
const itemShippingDetailsDraft = require('./itemShippingDetailsDraft');

const lineItemDraft = {
  type: 'object',
  properties: {
    quantity: {
      type: 'integer',
      minimum: 1,
      description: 'Defaults to 1'
    },
    supplyChannel: {
      ...resourceIdentifier,
      description: `By providing supply channel information, you can unique identify inventory entries that should be reserved. The provided channel should have the InventorySupply role.`
    },
    distributionChannel: {
      ...resourceIdentifier,
      description: `The channel is used to select a ProductPrice. The provided channel must have the ProductDistribution role. If the cart is bound to a Store with distributionChannels set, the channel has to match one of the store's distribution channels.`
    },
    externalTaxRate: externalTaxRateDraft,
    externalPrice: baseMoney,
    externalTotalPricePrice: {
      type: 'object',
      properties: {
        price: baseMoney,
        totalPrice: money
      },
      required: ['price', 'totalPrice']
    },
    shippingDetails: itemShippingDetailsDraft,
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
