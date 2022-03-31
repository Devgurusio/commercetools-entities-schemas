const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const productSelectionDraft = require('./productSelectionSettingDraft');

module.exports = {
  type: 'object',
  description: 'Store draft object',
  properties: {
    key,
    name: {
      ...localizedString,
      description: 'The name of the store'
    },
    languages: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    distributionChannels: {
      description:
        'Set of ResourceIdentifier of a Channel with ProductDistribution ChannelRole',
      type: 'array',
      items: resourceIdentifier
    },
    custom: customFieldsDraft,
    supplyChannels: {
      description:
        'Set of ResourceIdentifier of Channels with InventorySupply ChannelRole',
      type: 'array',
      items: resourceIdentifier
    },
    productSelections: {
      description:
        'If not provided or empty, all Products in the Project are available in this Store. If provided, those Product Selections are available in the Store for which the active setting is true',
      type: 'array',
      items: productSelectionDraft
    }
  },
  required: ['key']
};
