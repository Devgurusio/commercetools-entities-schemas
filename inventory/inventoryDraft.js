const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const dateTime = require('../baseTypes/dateTime');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');

module.exports = {
  type: 'object',
  description: 'Inventory draft object',
  properties: {
    sku: {
      type: 'string',
      description: 'Product SKU'
    },
    quantityOnStock: { type: 'number' },
    restockableInDays: { type: 'number' },
    expectedDelivery: dateTime,
    supplyChannel: {
      ...resourceIdentifier,
      description: 'ResourceIdentifier to a Channel'
    },
    custom: customFieldsDraft
  },
  required: ['sku', 'quantityOnStock']
};
